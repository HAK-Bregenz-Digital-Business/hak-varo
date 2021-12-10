
function startDev() {
  Invoke-Expression "npm run dev";
}

function run() {
  Write-Host -ForegroundColor Green "Starting HAK Varo Apps...";
  startDev;
}

run;
