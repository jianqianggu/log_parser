// src/index.js
document.getElementById('parseButton').addEventListener('click', () => {
    const logInput = document.getElementById('logInput').value;
    const parsedLogs = parseLogs(logInput);
    displayParsedLogs(parsedLogs);
  });
  
  function parseLogs(logs) {
    // Your complex log parsing logic here
    return logs.split('\n').map(log => log.trim()).filter(log => log);
  }
  
  function displayParsedLogs(parsedLogs) {
    const output = document.getElementById('output');
    output.innerHTML = '<pre>' + JSON.stringify(parsedLogs, null, 2) + '</pre>';
  }
  