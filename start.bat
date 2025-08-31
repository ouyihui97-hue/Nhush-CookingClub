@echo off
echo 🍳 烹飪社團網站啟動中...
echo.

echo 📦 安裝後端依賴...
call npm install

echo.
echo 📦 安裝前端依賴...
call npm run install-frontend

echo.
echo 🚀 啟動網站...
echo 🌐 請等待幾秒鐘，然後前往: http://localhost:3000
echo.
echo 按 Ctrl+C 停止伺服器
echo.

call npm start

pause
