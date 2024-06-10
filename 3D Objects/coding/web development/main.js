const cipher = function (message, r) {
  const a = 'a'.charCodeAt(0);
  const A = 'A'.charCodeAt(0);
  return [...message].map(c => {
    if (/[a-z]/.test(c)) {
      return String.fromCharCode(a + (c.charCodeAt(0) - a + r) % 26);
    } else if (/[A-Z]/.test(c)) {
      return String.fromCharCode(A + (c.charCodeAt(0) - A + r) % 26);
    } else {
      return c;
    }
  }).join('');
}

const decipher = function (message, r) {
  return cipher(message, 26 - r); // Decipher is just a cipher with 26 - r rotation
}

function Encode() {
  const input = document.getElementById('inputText').value;
  const rotation = parseInt(document.getElementById('rotation').value, 10);
  const encoded = cipher(input, rotation);
  document.getElementById('outputText').value = encoded;
}

function Decode() {
  const input = document.getElementById('inputText').value;
  const rotation = parseInt(document.getElementById('rotation').value, 10);
  const decoded = decipher(input, rotation);
  document.getElementById('outputText').value = decoded;
}
