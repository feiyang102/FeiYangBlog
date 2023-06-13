echo "开始构建..."
npm run build
echo "构建完成！"

echo "开始发布..."
cd .vitepress/dist
git init
git add -A
git commit -m "dist"

echo "开始推送..."
git push -f https://github.com/feiyang102/FeiYangBlog.git main:dist
echo "推送完成！"

cd ..
rm -rf dist

echo "发布完成!"