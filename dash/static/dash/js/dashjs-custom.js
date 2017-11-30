var manifestUri = "/static/dash/tv/live.mpd";

// dash.js
function initDash() {
  var player = dashjs.MediaPlayer().create();
  player.initialize(document.getElementById("dashVideoPlayer"), manifestUri, true);
  player.clearDefaultUTCTimingSources();
};

initDash()
