var touhouGame;

window.addEventListener("load", () => {
    touhouGame = new BulletGame.BulletGame(); // Someone please help me avoid this
    document.body.appendChild(touhouGame.screen.canvas);
    touhouGame.start();
});
