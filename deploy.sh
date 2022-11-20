#! /bin/sh
npm run build
cd dist
git add .
git commit -m "Auto-deploy"
git push
echo "Deployed!"