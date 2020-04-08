window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

  document.getElementById("mail").addEventListener("click", e => {
  const str = "example@example.com";
  const listener = e => {
      e.clipboardData.setData("text/plain" , str);
      e.preventDefault();
      document.removeEventListener("copy", listener);
  }
  document.addEventListener("copy" , listener);
  document.execCommand("copy");


  const baloon = document.getElementById("baloon")
  baloon.style.top = e.pageY + "px"
  baloon.style.left = e.pageX + "px"
  baloon.style.display = "block"
  setTimeout("baloon.style.display = 'none'", 800);
})