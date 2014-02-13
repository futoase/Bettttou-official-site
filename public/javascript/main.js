$(document).ready(function () {
  var BV = new $.BigVideo();
  BV.init();
  BV.show("images/top.mp4", {
    ambient: true,
    doLoop: true
  });
});
