document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 4000, npcCollisionRadius: 100, actionDuration:600, jumpHeight: 300, removeNPCAfterInteracted: false});
});