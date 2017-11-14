var manifestUri = "/static/dash/videos/reference.mpd";

// dash.js
function initDash() {
  var player = dashjs.MediaPlayer().create();
  player.initialize(document.getElementById("dashVideoPlayer"), manifestUri, true);
};

initDash()
