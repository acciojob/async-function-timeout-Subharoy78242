//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value, 10);

  if (isNaN(delay) || delay < 0) {
    document.getElementById('output').innerText = 'Please enter a valid delay time.';
    return;
  }

  await displayMessageAfterDelay(text, delay);
});

async function displayMessageAfterDelay(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  document.getElementById('output').innerText = message;
}