//Slot Machine Scene 1
module scenes {

    export class GameScene extends objects.Scene {
        
        // PRIVATE VARIABLES
        private _level1Image: createjs.Bitmap;
        private _bet1: objects.Button;
        private _bet10: objects.Button;
        private _bet100: objects.Button;
        private _spin: objects.Button;
        private _reels: createjs.Bitmap[];
        private _jackpotText: objects.Label;
        private _creditsText: objects.Label;
        private _betText: objects.Label;
        private _resultText: objects.Label;
        private playerMoney: number;
        private winnings: number;
        private jackpot: number;
        private playerBet: number;


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

            this._resetAll();

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
            
            // add JackPot Text to the scene
            this._jackpotText = new objects.Label(
                this.jackpot.toString(),
                "27px Consolas",
                "#FFFFFF",
                330, 184, false);
            this._jackpotText.textAlign = "right";
            this.addChild(this._jackpotText);
        
            // add Credits Text to the scene
            this._creditsText = new objects.Label(
                this.playerMoney.toString(),
                "27px Consolas",
                "#FFFFFF",
                220, 369, false);
            this._creditsText.textAlign = "right";
            this.addChild(this._creditsText);
            
            // add Bet Text to the scene
            this._betText = new objects.Label(
                this.playerBet.toString(),
                "27px Consolas",
                "#FFFFFF",
                320, 369, false);
            this._betText.textAlign = "right";
            this.addChild(this._betText);
            
            // add Result Text to the scene
            this._resultText = new objects.Label(
                this.winnings.toString(),
                "27px Consolas",
                "#FFFFFF",
                433, 369, false);
            this._resultText.textAlign = "right";
            this.addChild(this._resultText);
            
            // Call the Initialize Array of Bitmaps 
            this._initializeBitmapArray();


            stage.addChild(this);

        }

        public update(): void {

        }
        
        //PRIVATE METHODS
          
        /* Utility function to check if a value falls within a range of bounds */
        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        
        // Resets the Bet, Credits, Jackpots and Winning
        private _resetAll() {
            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
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
        
        // This method creates the Bitmap Array
        private _initializeBitmapArray(): void {
            this._reels = new Array<createjs.Bitmap>();
            for (var reel: number = 0; reel < 3; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                this._reels[reel].x = 168 + (reel * 116);
                this._reels[reel].y = 232;
                this.addChild(this._reels[reel]);
                console.log("reel" + reel + " " + this._reels[reel]);
            }
        }
        
        // Set the Bet for the player
        private _playerBet(playerBet: number) {
            // ensure player's bet is less than or equal to players money
            if (playerBet <= this.playerMoney) {
                this.playerBet += playerBet;
                this.playerMoney -= playerBet;
                this._creditsText.text = this.playerMoney.toString();
                this._betText.text = this.playerBet.toString();
            }
        }
        
        // Handuler Methods
        
        // Bet1 Button click Handuler
        private _bet1ButtonClick(event: createjs.MouseEvent): void {
            // Change the scenes
            // scene = config.Scene.LEVEL21;
            // changeScene();
            this._playerBet(1);
        }
        
        // Bet10 button click Handuler
        private _bet10ButtonClick(event: createjs.MouseEvent): void {

            this._playerBet(10);
        }

        // Bet100 Button click Handuler
        private _bet100ButtonClick(event: createjs.MouseEvent): void {

            this._playerBet(100);
        }
        
        // Spin Button click Handuler
        private _spinButtonClick(event: createjs.MouseEvent): void {
            
            // Spins only if the player has credits
            if (this.playerBet > 0) {
                var bitmap: string[] = this._spinReels();

                for (var reel: number = 0; reel < 3; reel++) {
                    this._reels[reel].image = assets.getResult(bitmap[reel]);
                }
            
                // reset player's bet to zero
                this.playerBet = 0;
                this._betText.text = this.playerBet.toString()
            }
        }

    }
}