const generateButton = document.getElementById('generate-button');
const dataInput = document.getElementById('data');
const qrCodeDiv = document.getElementById('qr-code');

generateButton.addEventListener('click', () => {
  const data = dataInput.value;
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}`;

  const image = new Image();
  image.src = apiUrl;

  qrCodeDiv.innerHTML = '';
  qrCodeDiv.appendChild(image);
});
