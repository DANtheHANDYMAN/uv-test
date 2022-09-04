document.oncontextmenu = rightClick;
function rightClick(e) {
  e.preventDefault();
}
var progress_value = 0;
var progress;
progress = setInterval(() => {
  progress_value = progress_value + 2;
  document.getElementById("load_progress").value = progress_value;
  if (progress_value >= 100) {
    clearInterval(progress);
  }
}, 100);
document.getElementById("load_message").innerHTML = "Loading scripts.";
setTimeout(() => {
  document.getElementById("load_message").innerHTML = "Waiting on scripts.";
}, 1500);
setTimeout(() => {
  document.getElementById("load_message").innerHTML = "Scripts initialized";
}, 2000);
setTimeout(() => {
  document.getElementById("load_message").innerHTML = "Loading";
}, 5000);

setTimeout(() => {
  console.log("Done loading");
  document.getElementById("load_container").style.display = "none";
  document.getElementById("f").style.display = "flex";
}, 5000);


document.getElementById('f').onload = () => {
  // alert("done loading")
  document.getElementById('f').style.display='flex';
  document.getElementById("load_container").style.display = "none";
}