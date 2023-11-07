#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入文档
cd docs

# 生成静态文件
npm run docs:build

# 打包完成退出到项目根目录
cd ..

# 进入生成的文件夹
# cd docs/.vuepress/dist

# git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:spoony-Z/SOBER-Blog.git master:gh-pages
git push -f
cd -