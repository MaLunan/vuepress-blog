---
title: 前端进阶-如何创建属于自己的脚手架
sidebar: true
# isShowComments: true
---

# 前端进阶-如何创建属于自己的脚手架

<ClientOnly>
<title-pv/>
</ClientOnly>


## 原理

我们每次搭建项目都需要创建项目，然后进行一系列的基础配置，封装基础api ，配置webpack,浪费了很多时间和精力，用自己封装的脚手架模板就可以每次像创建vue,react那样一样简单，有能力的还可以去封装自己的框架。
参考自[beleve666](https://www.cnblogs.com/zhangycun/p/12097752.html)大神的文章
[源码查看github](https://github.com/MaLunan/template-cli-ma)

原理就：利用npm封装插件，拉取我们在github上托管的项目，拉取完毕后把依赖的.git .svn删除掉 并用node.js更改json参数

## 1. 先上插件依赖

[commander](https://www.npmjs.com/package/commander):完整的 [node.js](http://nodejs.org/) 命令行解决方案

[download-git-repo](https://www.npmjs.com/package/download-git-repo)：用于下载，git仓库拉取

[inquirer](https://www.npmjs.com/package/inquirer)：用户与命令行交互的工具

[ora](https://www.npmjs.com/package/ora)：实现node.js 命令行环境的 loading效果， 和显示各种状态的图标等

[log-symbols](https://www.npmjs.com/package/log-symbols)：提供带颜色的符号

[Chalk](https://www.npmjs.com/package/chalk)：改变文字背景颜色

[node-notifier](https://www.npmjs.com/package/node-notifier)：通知插件

[shelljs](https://www.npmjs.com/package/shelljs)：可以调用命令行工具


## 2.先搭一个基础npm包

[npm包发布教程](https://www.jianshu.com/p/6982bee1bd72) 这里就不多说了

## 3.先创建基础命令

我们需要将我们的项目做下改动，首先在packge.json中添加如下内容：
``` 
 "bin": {
		"template-ma": "index.js"
	},
```
"template-ma"是你自定义的命令，到这里还不能使用，必须使用``npm link`` 链接到全局

## 4.创建入口文件

Index.js文件

```js

#!/user/bin/env node
//你想要你的这个文件中的代码用什么可执行程序去运行它
//!/usr/bin/env node会去环境设置寻找node目录
const commander = require('commander');//引入插件
commander.command('init <name>') // 定义init子命令，<name>为必需参数可在action的function中接收，如需设置非必需参数，可使用中括号
    .option('-d, --dev', '获取开发版') // 配置参数，简写和全写中使用,分割
    .description('创建项目') // 命令描述说明
    .action(function(name,option)){ 
          console.log(name,option)
        //这里可以对参数进行操作 
      }
//这里通过 command定义Init 子命令  当使用 init <name> 的时候 name 会在action中接收，
// option中 是传递配置参数，也在action中接收 
//action接收一个回调 action(function(name,option)){ 这里可以对参数进行操作 }

//查询版本号
commander.version(require('./package.json').version,'-v,-V,--version', '查看版本号')  

//这句话必须写在最后面   提供帮助  -h
commander.parse(process.argv);
```

这里可以运行一下

`template-ma test -d`  

打印

`test`
`true`

## 5.创建执行函数

做一下拆分  把action函数提取到外部
```js
//index.js
const initAction = require('./commands/init')
commander.command('init <name>') // 定义init子命令，<name>为必需参数可在action的function中接收，如需设置非必需参数，可使用中括号
    .option('-d, --dev', '获取开发版') // 配置参数，简写和全写中使用,分割
    .description('创建项目') // 命令描述说明
    .action(initAction);
)

```

commands/init文件

```js
const initAction = async (name, option) => {
}
module.exports = initAction;
```


## 6.拉取模板

我们需要在[github](https://github.com/)上托管自己的脚手架模板
然后 我们需要用[download-git-repo](https://www.npmjs.com/package/download-git-repo)拉取模板
和[shelljs](https://www.npmjs.com/package/shelljs)工具 进行条件判断

```js
 //  检查控制台是否可以运行`git `，
    if (!shell.which('git')) {
        console.log(symbols.error, '对不起，git命令不可用！');
        shell.exit(1);
    }
    //  验证输入name是否合法
    if (fs.existsSync(name)) {
        console.log(symbols.warning,`已存在项目文件夹${name}！`);
        return;
    }
    if (name.match(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g)) {
        console.log(symbols.error, '项目名称存在非法字符！');
        return;
    }
    // 获取option，确定模板类型（分支）
    if (option.dev) branch = 'develop';

```

然后是拉取模板

```
function clone (remote, name, option) {
//三个参数，拉取的路径，名字 ，分支
    const downSpinner = ora('正在下载模板...').start();
//ora用于输出loading
    return new Promise((resolve, reject) => {
        download(remote, name, option, err => {
            if (err) {
                downSpinner.fail();
                console.log(symbols.error, chalk.red(err));
                //chalk改变文字颜色
                reject(err);
                return;
            };
            downSpinner.succeed(chalk.green('模板下载成功！'));
            resolve();
        });
    });
  await clone(`direct:${remote}#${branch}`, name, { clone: true });
```

## 清理文件

拉取下来后是和远程仓库关联的，所以我们要把它们删掉，还有清除一些多余的文件

```js
 const deleteDir = ['.git', '.gitignore', 'README.md', 'docs']; // 需要清理的文件
    const pwd = shell.pwd();
    deleteDir.map(item => shell.rm('-rf', pwd + `/${name}/${item}`));
```

## 根据用户需求更改配置

这里用到[inquirer](https://www.npmjs.com/package/inquirer)可以与命令行进行交互

我们可以设置几个问题

```
 const questions = [
    {
        type: 'input',
        message: '请输入模板名称:',
        name: 'name',
        validate(val) {
        if (!val) return '模板名称不能为空！';
        if (val.match(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g)) return '模板名称包含非法字符，请重新输入';
        return true;
        }
    },
    {
        type: 'input',
        message: '请输入模板关键词（;分割）:',
        name: 'keywords'
    },
    {
        type: 'input',
        message: '请输入模板简介:',
        name: 'description'
    },
]
```

通过inquirer获取到用户输入的内容

```js
const answers = await inquirer.prompt(questions);
    // 将用户的配置打印，确认一下是否正确
    console.log('------------------------');
    console.log(answers);

    let confirm = await inquirer.prompt([
        {
            type: 'confirm',
            message: '确认创建？',
            default: 'Y',
            name: 'isConfirm'
        }
    ]);
 if (!confirm.isConfirm) return false;

```

我们拿到用户输入的值 就可以根据用户的参数 进行更改

```js

//简单的读取操作 就不过多描述了
 let jsonData= fs.readFileSync((path.join(__dirname,'./'), 'malunan/package.json'),function(err,data){
       console.log(err)
    })
    jsonData=JSON.parse(jsonData)
    for(item in answers){
        jsonData[item]=answers[item]
    }
    let obj=JSON.stringify(jsonData,null,'\t')
    let sss=fs.writeFileSync((path.join(__dirname,'./'), 'malunan/package.json'),obj,function(err,data){
        console.log(err,data)
    })
```

这样我们就根据用户的参数，写入到了package.json文件 其他的用途  可自行开发

## 自动安装依赖

```js
const installSpinner = ora('正在安装依赖...').start();
    if (shell.exec('npm install').code !== 0) {
        console.log(symbols.warning, chalk.yellow('自动安装失败，请手动安装！'));
        installSpinner.fail(); // 安装失败
        shell.exit(1);
    }
    installSpinner.succeed(chalk.green('依赖安装成功！'));

    //切入后台的时候给用户提示
    notifier.notify({
        title: 'YNCMS-template-cli',
        icon: path.join(__dirname, 'coulson.png'),
        message: ' ♪(＾∀＾●)ﾉ 恭喜，项目创建成功！'
    });

    // 自动打开编辑器
    if (shell.which('code')) shell.exec('code ./');
    shell.exit(1);

```

这样脚手架就搭建完毕了，可以在本地 `template-ma init <name>` 试一下效果

## 源码

index.js

```js

#!/usr/bin/env node

const commander = require('commander');
const initAction = require('./commands/init')
//查询版本号
commander.version(require('./package.json').version,'-v,-V,--version', '查看版本号')  
commander.command('init <name>') // 定义init子命令，<name>为必需参数可在action的function中接收，如需设置非必需参数，可使用中括号
    .option('-d, --dev', '获取开发版') // 配置参数，简写和全写中使用,分割
    .description('创建项目') // 命令描述说明
    .action(initAction);


//这句话必须写在最后面   提供帮助  -h
commander.parse(process.argv);
```

clone.js

```js
// utils/clone.js
const download = require('download-git-repo');
const symbols = require('log-symbols');  // 用于输出图标
const ora = require('ora'); // 用于输出loading
const chalk = require('chalk'); // 用于改变文字颜色
module.exports = function (remote, name, option) {
    const downSpinner = ora('正在下载模板...').start();
    return new Promise((resolve, reject) => {
        download(remote, name, option, err => {
            if (err) {
                downSpinner.fail();
                console.log(symbols.error, chalk.red(err));
                reject(err);
                return;
            };
            downSpinner.succeed(chalk.green('模板下载成功！'));
            resolve();
        });
    });
  };
 ```

init.js

```js
// commands/init.js
const shell = require('shelljs');
const symbols = require('log-symbols');
const clone = require('../utils/clone.js');
const remote = 'https://github.com/MaLunan/components.git';
const fs =require('fs')
const ora = require('ora'); // 用于输出loading
const chalk = require('chalk'); // 用于改变文字颜色
const notifier =require('node-notifier')
const path = require('path')
let branch = 'master';

const initAction = async (name, option) => {
    // 0. 检查控制台是否可以运行`git `，
    if (!shell.which('git')) {
        console.log(symbols.error, '对不起，git命令不可用！');
        shell.exit(1);
    }
    // 1. 验证输入name是否合法
    if (fs.existsSync(name)) {
        console.log(symbols.warning,`已存在项目文件夹${name}！`);
        return;
    }
    if (name.match(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g)) {
        console.log(symbols.error, '项目名称存在非法字符！');
        return;
    }
    // 2. 获取option，确定模板类型（分支）
    if (option.dev) branch = 'develop';
    // 4. 下载模板
    await clone(`direct:${remote}#${branch}`, name, { clone: true });

    // 5. 清理文件
    const deleteDir = ['.git', '.gitignore', 'README.md', 'docs']; // 需要清理的文件
    const pwd = shell.pwd();
    deleteDir.map(item => shell.rm('-rf', pwd + `/${name}/${item}`));
    const inquirer = require('inquirer');
    // 定义需要询问的问题
    const questions = [
    {
        type: 'input',
        message: '请输入模板名称:',
        name: 'name',
        validate(val) {
        if (!val) return '模板名称不能为空！';
        if (val.match(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g)) return '模板名称包含非法字符，请重新输入';
        return true;
        }
    },
    {
        type: 'input',
        message: '请输入模板关键词（;分割）:',
        name: 'keywords'
    },
    {
        type: 'input',
        message: '请输入模板简介:',
        name: 'description'
    },
    // {
    //     type: 'list',
    //     message: '请选择模板类型:',
    //     choices: ['响应式', '桌面端', '移动端'],
    //     name: 'type'
    // },
    // {
    //     type: 'list',
    //     message: '请选择模板分类:',
    //     choices: ['整站', '单页', '专题'],
    //     name: 'category'
    // },
    // {
    //     type: 'input',
    //     message: '请输入模板风格:',
    //     name: 'style'
    // },
    // {
    //     type: 'input',
    //     message: '请输入模板色系:',
    //     name: 'color'
    // },
    {
        type: 'input',
        message: '请输入您的名字:',
        name: 'author'
    }
    ];
    // 通过inquirer获取到用户输入的内容
    const answers = await inquirer.prompt(questions);
    // 将用户的配置打印，确认一下是否正确
    console.log('------------------------');
    console.log(answers);

    let confirm = await inquirer.prompt([
        {
            type: 'confirm',
            message: '确认创建？',
            default: 'Y',
            name: 'isConfirm'
        }
    ]);
    if (!confirm.isConfirm) return false;
    //根据用户配置调整文件
   let jsonData= fs.readFileSync((path.join(__dirname,'./'), 'malunan/package.json'),function(err,data){
       console.log(err)
    })
    jsonData=JSON.parse(jsonData)
    for(item in answers){
        jsonData[item]=answers[item]
    }
    console.log(jsonData)
    console.log(path.join(__dirname,`${name}/`))
    let obj=JSON.stringify(jsonData,null,'\t')
    let sss=fs.writeFileSync((path.join(__dirname,'./'), 'malunan/package.json'),obj,function(err,data){
        console.log(err,data)
    })
    //自动安装依赖
    const installSpinner = ora('正在安装依赖...').start();
    if (shell.exec('npm install').code !== 0) {
        console.log(symbols.warning, chalk.yellow('自动安装失败，请手动安装！'));
        installSpinner.fail(); // 安装失败
        shell.exit(1);
    }
    installSpinner.succeed(chalk.green('依赖安装成功！'));

    //切入后台的时候给用户提示
    notifier.notify({
        title: 'YNCMS-template-cli',
        icon: path.join(__dirname, 'coulson.png'),
        message: ' ♪(＾∀＾●)ﾉ 恭喜，项目创建成功！'
    });

    // 8. 打开编辑器
    if (shell.which('code')) shell.exec('code ./');
    shell.exit(1);
};


module.exports = initAction;
```

## 如果你需要更多

![公众号关注](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7430cae4bbe84bf09ec4ea3f399d7613~tplv-k3u1fbpfcp-zoom-1.image)
