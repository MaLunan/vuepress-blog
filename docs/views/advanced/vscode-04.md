---
title: 前端进阶-vscode右键菜单打开文件配置
sidebar: true
# isShowComments: true
---

# 前端进阶-vscode右键菜单打开文件配置

<ClientOnly>
<title-pv/>
</ClientOnly>

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="Z:\\软件\\vscode\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"Z:\\软件\\vscode\\Microsoft VS Code\\Code.exe\" \"%1\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="Z:\\软件\\vscode\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"Z:\\软件\\vscode\\Microsoft VS Code\\Code.exe\" \"%V\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="Z:\\软件\\vscode\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"Z:\\软件\\vscode\\Microsoft VS Code\\Code.exe\" \"%V\""

```
- 新建记事本把上面内容复制进去
- 把上面路径换成vscode所在路径 //转义符添加，
- 保存后修改后缀 .reg
- 大功告成

<ClientOnly>
  <leave/>
</ClientOnly/>