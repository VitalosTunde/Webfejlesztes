document.getElementById("nyilvesszo").addEventListener("click", repul)

function repul() {
  let idozito = null;
  const vesszo = document.getElementById("nyilvesszo");
  let pos = 0;
  const max = document.getElementById("vaszon").offsetWidth - 240
  clearInterval(idozito);
  idozito = setInterval(frame, 1);
  function frame() {
    if (pos == max) {
      setTimeout(function () {
        vesszo.style.transform = "rotate(110deg)";
        vesszo.style.bottom = "0px";
        vesszo.style.left = "0px";
        vesszo.style.top = "";
        clearInterval(idozito);
      },
        1000)
    }
    else {
      pos++;
      vesszo.style.top = (80 / (max ** 2)) * (pos - max) ** 2 + 5 + "px";
      vesszo.style.left = pos + "px";
      vesszo.style.transform = `rotate(${110 + (50 / max) * pos}deg)`;
    }
  }
}