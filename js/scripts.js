window.onload = function () {
  //dark button
  const darkMode = document.getElementById("dark-mode");
  const body = document.querySelector("body");
  darkMode.onclick = function () {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }

  const lightMode = document.getElementById("light-mode");
  lightMode.onclick = function () {
      body.style.backgroundColor = "white";
      body.style.color = "black";
  };

  const large = document.getElementById("large");
  large.onclick = function () {
    body.style.fontSize = "50px";
  }

  const def = document.getElementById("default");
  def.onclick = function () {
    body.style.fontSize = "12px";
  }

}

