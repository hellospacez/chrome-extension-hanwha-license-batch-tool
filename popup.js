document.getElementById('run').addEventListener('click', async () => {
  const log = document.getElementById('log');
  const licenses = document.getElementById('licenses').value.split('\n').map(l => l.trim()).filter(Boolean);

  for (const lic of licenses) {
    try {
      const res = await fetch(`https://localhost:7001/web/rest/v2/licenses/${lic}`, {
        method: 'PUT',
        credentials: 'include'
      });
      log.textContent += `${lic}: ${res.status}\n`;
    } catch (e) {
      log.textContent += `${lic}: Failled ${e}\n`;
    }
  }
});
