// Pemutar audio setelah interaksi pengguna (klik tombol)
const audio = document.getElementById("error-audio");

// Menambahkan event listener ke tombol untuk memutar audio setelah klik
document
  .getElementById("play-audio-btn")
  .addEventListener("click", async () => {
    try {
      // Cobalah memutar audio dengan cara yang lebih aman (dengan async/await)
      await audio.play();
    } catch (error) {
      console.log("Audio play failed: ", error);
    }
  });
