document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("text").innerHTML;
  const typedText = document.querySelector(".typed-text");

  function typeWriter(text, i, cb) {
    if (i < text.length) {
      typedText.innerHTML += text.charAt(i);
      setTimeout(function () {
        typeWriter(text, i + 1, cb);
      }, 100); // Adjust the typing speed here (milliseconds)
    } else {
      setTimeout(cb, 800); // Delay before starting over (milliseconds)
    }
  }

  function startTyping() {
    typedText.innerHTML = "";
    typeWriter(text, 0, startTyping);
  }

  startTyping();
});
