#!/usr/bin/env sh
set -e
npm run build
cd docs/.vuepress/dist
 
git init
git add -A
git commit -m 'deploy'
 
git push -f "git@github.com:MaLunan/xfff.github.io.git" master
cd -