const message = `ASSALAMUALAIKUM WARAHMATULLAHI WABARAKATUH! kak, semangat terus ya, meskipun pastinya cape banget ngejalaninnya, U DO A GREAT JOB KAK!!!! PROUDOFU, wink. `;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
