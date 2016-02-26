//Slot Machine Scene 1
module scenes {

    export class GameScene extends objects.Scene {
        
        // PRIVATE VARIABLES
        private _level1Image: createjs.Bitmap;
        private _bet1: objects.Button;
        private _bet10: objects.Button;
        private _bet100: objects.Button;
        private _spin: objects.Button;

        constructor() {
            super();
        }

        public start(): void {
            this._level1Image = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._level1Image);
            
            // added the A Selection button
            this._bet1 = new objects.Button(
                "Bet1",
                195,
                400);
            this.addChild(this._bet1);

            this._bet1.on("click", this.ASelectionButtonClick, this);
            
            // added the A Selection button
            this._bet10 = new objects.Button(
                "Bet10",
                280,
                400);
            this.addChild(this._bet10);

            this._bet10.on("click", this.BSelectionButtonClick, this);
            
            // added the Restart button
            this._bet100 = new objects.Button(
                "Bet100",
                368,
                400);
            this.addChild(this._bet100);
            this._bet100.on("click", this.RestartButtonClick, this);
            
            // added the Restart button
            this._spin = new objects.Button(
                "spin",
                500,
                400);
            this.addChild(this._spin);

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