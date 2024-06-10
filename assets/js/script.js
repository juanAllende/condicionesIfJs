// Problema 1
document.getElementById("toggleImage").addEventListener("click", function() {
    this.classList.toggle("bordered");
});

// Problema 2
function calculateStickers() {
    const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    const total = sticker1 + sticker2 + sticker3;
    const messageElement = document.getElementById("stickerMessage");

    if (total <= 10) {
        messageElement.textContent = `Llevas ${total} stickers`;
    } else {
        messageElement.textContent = "Llevas demasiados stickers";
    }
}

// Problema 3
function checkPassword() {
    const digit1 = document.getElementById("digit1").value;
    const digit2 = document.getElementById("digit2").value;
    const digit3 = document.getElementById("digit3").value;

    const password = digit1 + digit2 + digit3;
    const messageElement = document.getElementById("passwordMessage");

    if (password === "911") {
        messageElement.textContent = "password 1 correcto";
    } else if (password === "714") {
        messageElement.textContent = "password 2 correcto";
    } else {
        messageElement.textContent = "password incorrecto";
    }
}

// Add border class for Problema 1
document.styleSheets[0].insertRule(`
    .bordered {
        border: 2px solid red;
    }
`, 0);
