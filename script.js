const message = `ASSALAMUALAIKUM WARAHMATULLAHI WABARAKATUH! kak, semangat terus ya menjalani masa smk nya, meskipun pastinya cape banget ngejalaninnya,tapi sejauh ini U DO A GREAT JOB KAK!!!! PROUDOFU, wink. aku bakal jadi supporter kakak Numero uno!! cape itu wajar kak! gapapa lah ngeluh dikit, normal booozzzZ, oh iya hari ini, how was ur day kak? Alhamdulillah.. tepuk pramuka, prok prok prok, prok prok prok, prok prok prok prok prok prok prok, segitu dulu deh kak,`;

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
