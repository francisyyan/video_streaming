var manifestUri = "/static/dash/videos/leno2.mpd";

function initDash() {
  var player = dashjs.MediaPlayer().create();
  player.initialize(document.querySelector("#dashVideoPlayer"), manifestUri, true);
};

initDash()
