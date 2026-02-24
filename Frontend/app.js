async function checkStatus() {
    try {
        const response = await fetch('https://api.smart-inventory.com/status');
        const data = await response.json();
        document.getElementById('status').innerText = `${data.message}`;
    } catch (error) {
        document.getElementById('status').innerText = "Backend Offline";
    }
}
window.onload = checkStatus;