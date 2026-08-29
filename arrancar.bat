@echo off
echo Iniciando Price Comparator (Base de datos + Frontend)...
echo.
echo Abriendo el navegador... (recarga la pagina si tarda un poco en arrancar el servidor)
start http://localhost:3000
echo.
echo Presiona Ctrl+C para detener el servidor cuando termines.
echo.
call npm.cmd run dev
pause
