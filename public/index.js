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

(function(d) {
  var config = {
    kitId: 'apa8twv',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);