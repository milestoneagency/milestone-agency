@echo off
setlocal
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 20.9 or newer is required. Install it from https://nodejs.org/ then rerun this file.
  pause
  exit /b 1
)
if not exist .env.local copy .env.example .env.local >nul
echo Installing project dependencies. Internet access is required the first time...
call npm install
if errorlevel 1 (
  echo.
  echo Dependency installation failed. Check internet access and retry with: npm install
  pause
  exit /b 1
)
echo.
echo Starting Milestone Agency website...
call npm run dev
pause
