
const cipher = function (message, r) { 
  a = 'a'.charCodeAt(0);
return [...message].map( c => /[a-z]/.test(c) ? String.fromCharCode( a + (c.charCodeAt(0) - a + r) % 26): c)
}

 const decipher = function (message, r)  {
 A = 'A'.charCodeAt(0);
return [...message].map(c => /[A-Z]/.test(c) ? String.fromCharCode(A + (c.charCodeat(0) - A + r) % 26) : c)
.join('')
}


function Encode() {
const input = document.getElementById('inputText').value;
const encoded = cipher(input, 3);
document.getElementById('outputText').value = encoded;
}

function Decode() {
const input = document.getElementById('inputText').value;
const decoded = decipher(input, 3);
document.getElementById('outputText').value = decoded;
}

  
        
  
