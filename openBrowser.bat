REM Retrieve value from environment file
FOR /F "tokens=2 delims==" %%A IN (.env) DO SET IP_ADDRESS=%%A

set msedge=start /wait "" "msedge.exe" "http://%IP_ADDRESS%:3000"
set iexplore=start /wait "" "iexplore.exe" "http://%IP_ADDRESS%:3000"
timeout /t 1

%msedge%
if %errorlevel% equ 0 (
   @echo "msedge was located"
) else (
   %iexplore%
   if %errorlevel% equ 0 (
      @echo "internet explorer was located"
   )
)