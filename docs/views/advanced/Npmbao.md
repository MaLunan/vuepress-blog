---
title: 前端进阶-发布npm包
sidebar: true
# isShowComments: true
---

# 前端进阶-发布npm包

<ClientOnly>
<title-pv/>
</ClientOnly>

## 一、发布一个新包

### 第一步：进入要发布的项目根目录，初始化为npm包

npm init

依次按提示填入包名、版本、描述、github地址、关键字、license等

### 第二步、注册npm用户 

去npm 官网

### 第三步、账号登录 

npm login

### 第四步、发布包，上传到npm包服务器

npm publish

注意：1，npm必须邮箱验证
 2，切换到npm镜像源  taobao镜像源会报错


## 二、更新一个已经发布的包

### 第一步、修改包的版本

npm version patch  该命令在原来的版本上自动加1,实际上是将package.json文件中的version值修改了。

### 第二步、重新发布包

npm publish

<ClientOnly>
  <leave/>
</ClientOnly/>