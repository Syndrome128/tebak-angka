let secretNumber, attempts, maxAttempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  maxAttempts = 5;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Sisa percobaan: " + maxAttempts;
  document.getElementById("guess").value = "";
  document.getElementById("btnGuess").disabled = false;
}

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  if (!guess || guess < 1 || guess > 100) {
    document.getElementById("message").textContent = "Masukkan angka 1 - 100!";
    return;
  }
  
  attempts++;
  let sisaPercobaan = maxAttempts - attempts;

  if (guess === secretNumber) {
    document.getElementById("message").textContent = "🎉 Benar! Angkanya " + secretNumber;
    document.getElementById("attempts").textContent = "Berhasil dalam " + attempts + " percobaan!";
    document.getElementById("btnGuess").disabled = true;
    return;
  } else if (guess < secretNumber) {
    document.getElementById("message").textContent = "Terlalu kecil!";
  } else {
    document.getElementById("message").textContent = "Terlalu besar!";
  }

  if (sisaPercobaan > 0) {
    document.getElementById("attempts").textContent = "Sisa percobaan: " + sisaPercobaan;
  } else {
    document.getElementById("message").textContent = "💀 Game Over! Angkanya " + secretNumber;
    document.getElementById("attempts").textContent = "Kamu sudah habis percobaan!";
    document.getElementById("btnGuess").disabled = true;
  }
}

function resetGame() {
  startGame();
}

// Mulai game pertama kalis
startGame();