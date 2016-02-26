/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var gameScene;
var gameAsset = [
    { id: "Glamorous", src: "../../Assets/images/Glamorous.png" },
    { id: "Bet1", src: "../../Assets/images/Bet1.png" },
    { id: "Bet10", src: "../../Assets/images/Bet10.png" },
    { id: "Bet100", src: "../../Assets/images/Bet100.png" },
    { id: "Spin", src: "../../Assets/images/Spin.png" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "SlotMachine", src: "../../Assets/images/SlotMachine.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(gameAsset);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            break;
        case config.Scene.SLOTMACHINESCENE:
            stage.removeAllChildren();
            gameScene = new scenes.GameScene();
            currentScene = gameScene;
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map