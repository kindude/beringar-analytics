@echo off
setlocal enabledelayedexpansion

REM Exit immediately if a command exits with a non-zero status
set "exit_code=0"

npm run build
if !errorlevel! neq 0 set "exit_code=1"

cd dist
git init 
git add -A
git commit -m "New Deployment"
git push -f git@github.com:kindude/beringar-analytics.git master:gh-pages
if !errorlevel! neq 0 set "exit_code=1"

cd -

exit /b !exit_code!