function tempo() {
    const horario = new Date().getHours();
    const text = document.getElementById("dark-text");
    const body = document.getElementById("body");

    if (horario >= 6 && horario <= 18) {
      body.classList.replace("darkmode", "lightmode");
      text.innerText = "Light Mode";
    } 
    else {
      body.classList.replace("lightmode", "darkmode");
      text.innerText = "Dark Mode";
    }
  }
  const prev = document.getElementById("prev-btn");
  const next = document.getElementById("next-btn");
  const list = document.getElementById("item-list");

  const itemWidth = 430;
  const padding = 41;

  prev.addEventListener("click", () => {
    list.scrollLeft -= itemWidth + padding;
  });

  next.addEventListener("click", () => {
    list.scrollLeft += itemWidth + padding;
  });

  function trocarTema() {
    const body = document.getElementById("body");
    const text = document.getElementById("dark-text");

    if (text.innerText == "Dark Mode") {
      body.classList.replace("darkmode", "lightmode");
      text.innerText = "Light Mode";
    } else {
      body.classList.replace("lightmode", "darkmode");
      text.innerText = "Dark Mode";
    }
  }