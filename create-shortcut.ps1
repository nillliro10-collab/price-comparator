$WshShell = New-Object -comObject WScript.Shell
$DesktopPath = [Environment]::GetFolderPath("Desktop")
$Shortcut = $WshShell.CreateShortcut("$DesktopPath\Price Comparator.lnk")
$Shortcut.TargetPath = "C:\Users\Sergi\.gemini\antigravity\scratch\price-comparator\arrancar.bat"
$Shortcut.WorkingDirectory = "C:\Users\Sergi\.gemini\antigravity\scratch\price-comparator"
$Shortcut.IconLocation = "cmd.exe"
$Shortcut.Save()
Write-Host "Acceso directo creado en el escritorio."
