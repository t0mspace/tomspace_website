#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git checkout gh-pages
git merge main # bring gh-pages up to date with master
git push origin gh-pages #commit the changes
git checkout main #return to the main branch

cd -