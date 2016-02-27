//Slot Machine Scene 1
module scenes {

    export class GameScene extends objects.Scene {
        
        // PRIVATE VARIABLES
        private _level1Image: createjs.Bitmap;
        private _bet1: objects.Button;
        private _bet10: objects.Button;
        private _bet100: objects.Button;
        private _spin: objects.Button;
        
        private _apple = 0;
        private _banana = 0;
        private _oranges = 0;
        private _apricot = 0;
        private _grapes = 0;
        private _kiwi = 0;
        private _strawberry = 0;
        private _blanks = 0;

        constructor() {
            super();
        }

        public start(): void {
            this._level1Image = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._level1Image);
            
            // added the Bet1 button
            this._bet1 = new objects.Button("Bet1", 121, 400, false);
            this.addChild(this._bet1);

            this._bet1.on("click", this._bet1ButtonClick, this);
            
            // added the Bet10 button
            this._bet10 = new objects.Button("Bet10", 208, 400, false);
            this.addChild(this._bet10);

            this._bet10.on("click", this._bet10ButtonClick, this);
            
            // added the Bet100 button
            this._bet100 = new objects.Button("Bet100", 295, 400, false);
            this.addChild(this._bet100);
            this._bet100.on("click", this._bet100ButtonClick, this);
            
            // added the Spin button
            this._spin = new objects.Button("spin", 442, 400, false);
            this.addChild(this._spin);
            this._spin.on("click", this._spinButtonClick, this);

            stage.addChild(this);

        }

        public update(): void {

        }
        
          //PRIVATE METHODS
          
        /* Utility function to check if a value falls within a range of bounds */
        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        private _spinReels(): string[] {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];

            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):  // 41.5% probability
                        betLine[spin] = "Blank";
                        this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "Apple";
                        this._apple++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "Banana";
                        this._banana++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54): // 12.3% probability
                        betLine[spin] = "Orange";
                        this._oranges++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59): //  7.7% probability
                        betLine[spin] = "Apricot";
                        this._apricot++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62): //  4.6% probability
                        betLine[spin] = "Grapes";
                        this._grapes++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64): //  3.1% probability
                        betLine[spin] = "Kiwi";
                        this._kiwi++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Strawberry";
                        this._strawberry++;
                        break;
                }
            }
            return betLine;
        }
        
        // Handuler Methods
        
        // Bet1 Button click Handuler
        private _bet1ButtonClick(event: createjs.MouseEvent): void {
            // Change the scenes
            // scene = config.Scene.LEVEL21;
            // changeScene();
        }
        
        // Bet10 button click Handuler
        private _bet10ButtonClick(event: createjs.MouseEvent): void {
            // Change the Scene
            // scene = config.Scene.LEVEL22;
            // changeScene();
        }

        // Bet100 Button click Handuler
        private _bet100ButtonClick(event: createjs.MouseEvent): void {
            // Change to Menu Scene
            scene = config.Scene.MENU;
            console.log("Change to menu scene");
            changeScene();
        }
        
        // Spin Button click Handuler
        private _spinButtonClick(event: createjs.MouseEvent): void {
            // Change to Menu Scene
            console.log(this._spinReels());
        }

    }
}