@echo off
chcp 65001 >nul
cd /d "C:\Users\Administrator\WorkBuddy\2026-10-27-17-38-26\static-blog"
echo Pushing to GitHub (first time will open browser login)...
git push -u origin main --force
echo.
echo Done. If you see "main -> main" above, the upload succeeded.
pause
