//Slot Machine Scene 1
module scenes {

    export class GameScene extends objects.Scene {
        
        // PRIVATE VARIABLES
        private _level1Image: createjs.Bitmap;
        private _aSelection: objects.Button;
        private _bSelection: objects.Button;
        private _restartButton: objects.Button;

        constructor() {
            super();
        }

        public start(): void {
            this._level1Image = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._level1Image);
            
            // added the A Selection button
            this._aSelection = new objects.Button(
                "AButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 100);
            this.addChild(this._aSelection);

            this._aSelection.on("click", this.ASelectionButtonClick, this);
            
            // added the A Selection button
            this._bSelection = new objects.Button(
                "BButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 100);
            this.addChild(this._bSelection);

            this._bSelection.on("click", this.BSelectionButtonClick, this);
            
            // added the Restart button
            this._restartButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 150);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this.RestartButtonClick, this);

            stage.addChild(this);

        }

        public update(): void {

        }
        
        // ASelection Button click listener
        private ASelectionButtonClick(event: createjs.MouseEvent) {
            // Change the scenes
            // scene = config.Scene.LEVEL21;
            // changeScene();
        }
        
        // BSelection button click listener
        private BSelectionButtonClick(event: createjs.MouseEvent) {
            // Change the Scene
            // scene = config.Scene.LEVEL22;
            // changeScene();
        }

        private RestartButtonClick(event: createjs.MouseEvent) {
            // Change to Menu Scene
            scene = config.Scene.MENU;
            console.log("Change to menu scene");
            changeScene();
        }

    }
}