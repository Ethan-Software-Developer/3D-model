var modeViewer = document.getElementById("model");

function stop() {
  modeViewer.animationName = "none";
}

function run() {
  modeViewer.animationName = "Running";
}

function wave() {
  modeViewer.animationName = "Wave";
}
