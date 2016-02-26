var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Slot Machine Scene 1
var scenes;
(function (scenes) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            _super.call(this);
        }
        GameScene.prototype.start = function () {
            this._level1Image = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._level1Image);
            // added the A Selection button
            this._aSelection = new objects.Button("AButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._aSelection);
            this._aSelection.on("click", this.ASelectionButtonClick, this);
            // added the A Selection button
            this._bSelection = new objects.Button("BButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._bSelection);
            this._bSelection.on("click", this.BSelectionButtonClick, this);
            // added the Restart button
            this._restartButton = new objects.Button("BackButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this.RestartButtonClick, this);
            stage.addChild(this);
        };
        GameScene.prototype.update = function () {
        };
        // ASelection Button click listener
        GameScene.prototype.ASelectionButtonClick = function (event) {
            // Change the scenes
            // scene = config.Scene.LEVEL21;
            // changeScene();
        };
        // BSelection button click listener
        GameScene.prototype.BSelectionButtonClick = function (event) {
            // Change the Scene
            // scene = config.Scene.LEVEL22;
            // changeScene();
        };
        GameScene.prototype.RestartButtonClick = function (event) {
            // Change to Menu Scene
            scene = config.Scene.MENU;
            console.log("Change to menu scene");
            changeScene();
        };
        return GameScene;
    })(objects.Scene);
    scenes.GameScene = GameScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameScene.js.map