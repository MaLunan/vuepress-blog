---
title: 基础知识-git常用指令
sidebar: true
---

# 基础知识-git常用指令

## 初始化

`git --version`检测安装
`git config --list`查看你目前的配置列表
`git config --global user.name "你的用户名"`
`git config --global user.email "你的邮箱"`
`git init `初始化
`git status `查看内部所有文件状态
`git log` 查看历史所有版本
显示 id-作者-事件-版本描述

## 添加到暂存区
`git add xxx`
`git add `文件名
`git add` 文件夹名称/
`git add` --all所有内容添加到暂存区
## 暂存区的东西拉回到开发区域
`git reset HEAD --xxx`
`git reset HEAD --文件名`
`git reset HEAD --文件名称/`
`git reset HEad -- .` 拉回所有内容

## 形成历史版本 暂存区没有东西

`git commit -m "对本次历史版本进行描述"`

## 版本回滚

`git reset --hard` 版本id 跳转到某一个版本
`confin` 文件夹里有详细描述 `logs`记录着跳转信息

## 推送代码和下拉分支

`git remote add origin` 你的仓库地址 上传到远程仓库
`git push -u origin master `推送到远端
`git clone` 克隆的地址 克隆远程仓库
`git pull` 二次克隆直接命令拉取就可以

## 常用分支命名

`master` 主要分支
`develop` 主开发分支
`develop-feature-xxx`主功能分支
`develop-feature-xxx-fix`解决bug的分支
`hotfix-xxx`临时解决问题的分支

## 查看分支

`git branch` 查看当前分支
`git branch -av`查看所有分支详情

## 切换创建分支

`git checkout 分支名称` 切换分支
`git checkout -b`创建并直接切换分支

## 合并分支

`git merge`你要合并的分支名称 合并分支
`wq` 退出

## 其他

`.gitignore` 文件 里面记录的文件或文件夹不被添加 node_modules常用
`.gitkeep` 保留文件夹使用 在空文件里面创建
### 清除账号密码

`git config --system --unset credential.helper`

### 保存账号密码

`git config --global credential.helper store`


<leave/>