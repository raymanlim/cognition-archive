@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy-to-cf.ps1"
set "code=%ERRORLEVEL%"
echo.
echo Exit code: %code%
pause
exit /b %code%