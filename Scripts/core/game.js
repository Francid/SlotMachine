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
    { id: "OFF", src: "../../Assets/images/OFF.png" },
    { id: "SlotMachine", src: "../../Assets/images/SlotMachine.png" },
    { id: "Reset", src: "../../Assets/images/Reset.png" },
    { id: "Apple", src: "../../Assets/images/Apple.png" },
    { id: "Apricot", src: "../../Assets/images/Apricot.png" },
    { id: "Banana", src: "../../Assets/images/Banana.png" },
    { id: "Cumber", src: "../../Assets/images/Cumber.png" },
    { id: "Grape", src: "../../Assets/images/Grape.png" },
    { id: "GreenApple", src: "../../Assets/images/GreenApple.png" },
    { id: "Kiwi", src: "../../Assets/images/Kiwi.png" },
    { id: "Orange", src: "../../Assets/images/Orange.png" },
    { id: "Strawberry", src: "../../Assets/images/Strawberry.png" },
    { id: "Logo", src: "../../Assets/images/Logo.png" }
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