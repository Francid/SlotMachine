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
            this._apple = 0;
            this._banana = 0;
            this._oranges = 0;
            this._apricot = 0;
            this._grapes = 0;
            this._kiwi = 0;
            this._strawberry = 0;
            this._blanks = 0;
        }
        GameScene.prototype.start = function () {
            this._resetAll();
            this._level1Image = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._level1Image);
            // added the Bet1 button
            this._logo = new objects.Button("Logo", 215, 97, false);
            this.addChild(this._logo);
            // added the Bet1 button
            this._bet1 = new objects.Button("Bet1", 190, 385, false);
            this.addChild(this._bet1);
            this._bet1.on("click", this._bet1ButtonClick, this);
            // added the Bet10 button
            this._bet10 = new objects.Button("Bet10", 236, 385, false);
            this.addChild(this._bet10);
            this._bet10.on("click", this._bet10ButtonClick, this);
            // added the Bet100 button
            this._bet100 = new objects.Button("Bet100", 283, 385, false);
            this.addChild(this._bet100);
            this._bet100.on("click", this._bet100ButtonClick, this);
            // added the Spin button
            this._spin = new objects.Button("spin", 387, 385, false);
            this.addChild(this._spin);
            this._spin.on("click", this._spinButtonClick, this);
            // added the Reset button
            this._resetButton = new objects.Button("Reset", 202, 67, false);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._ResetButtonClick, this);
            // added the Reset button
            this._offButton = new objects.Button("OFF", 410, 64, false);
            this.addChild(this._offButton);
            this._offButton.on("click", this._OFFButtonClick, this);
            // add JackPot Text to the scene
            this._jackpotText = new objects.Label(this.jackpot.toString(), "12px Consolas", "#FFFFFF", 428, 135, false);
            this._jackpotText.textAlign = "right";
            this.addChild(this._jackpotText);
            // add Credits Text to the scene
            this._creditsText = new objects.Label(this.playerMoney.toString(), "12px Consolas", "#FFFFFF", 272, 308, false);
            this._creditsText.textAlign = "right";
            this.addChild(this._creditsText);
            // add Bet Text to the scene
            this._betText = new objects.Label(this.playerBet.toString(), "12px Consolas", "#FFFFFF", 345, 308, false);
            this._betText.textAlign = "right";
            this.addChild(this._betText);
            // add Result Text to the scene
            this._resultText = new objects.Label(this.winnings.toString(), "12px Consolas", "#FFFFFF", 415, 308, false);
            this._resultText.textAlign = "right";
            this.addChild(this._resultText);
            // Call the Initialize Array of Bitmaps 
            this._initializeBitmapArray();
            stage.addChild(this);
        };
        GameScene.prototype.update = function () {
        };
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        GameScene.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        // Resets the Bet, Credits, Jackpots and Winning
        GameScene.prototype._resetAll = function () {
            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
        };
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        GameScene.prototype._spinReels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):
                        betLine[spin] = "Blank";
                        this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37):
                        betLine[spin] = "Apple";
                        this._apple++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46):
                        betLine[spin] = "Banana";
                        this._banana++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54):
                        betLine[spin] = "Orange";
                        this._oranges++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59):
                        betLine[spin] = "Apricot";
                        this._apricot++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62):
                        betLine[spin] = "Grapes";
                        this._grapes++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64):
                        betLine[spin] = "Kiwi";
                        this._kiwi++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65):
                        betLine[spin] = "Strawberry";
                        this._strawberry++;
                        break;
                }
            }
            return betLine;
        };
        /* This function calculates the player's winnings, if any */
        GameScene.prototype._determineWinnings = function () {
            if (this._blanks == 0) {
                console.log("Call Works" + this.playerBet);
                if (this._grapes >= 1) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this._banana == 3) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this._oranges == 3) {
                    this.winnings = this.playerBet * 30;
                }
                else if (this._apple == 3) {
                    this.winnings = this.playerBet * 40;
                }
                else if (this._grapes == 3) {
                    this.winnings = this.playerBet * 50;
                }
                else if (this._kiwi == 3) {
                    this.winnings = this.playerBet * 75;
                }
                else if (this._strawberry == 3) {
                    this.winnings = this.playerBet * 100;
                }
                else if (this._grapes == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this._banana == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this._oranges == 2) {
                    this.winnings = this.playerBet * 3;
                }
                else if (this._apple == 2) {
                    this.winnings = this.playerBet * 4;
                }
                else if (this._apricot == 2) {
                    this.winnings = this.playerBet * 5;
                }
                else if (this._kiwi == 2) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this._strawberry == 2) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this._strawberry == 1) {
                    this.winnings = this.playerBet * 5;
                }
                else {
                    this.winnings = this.playerBet * 1;
                }
                console.log("Win!");
            }
            else {
                console.log("Loss!");
            }
            this._resultText.text = this.winnings.toString();
            this.playerMoney += this.winnings;
            this._creditsText.text = this.playerMoney.toString();
            this._resetFruitTally();
        };
        GameScene.prototype._resetFruitTally = function () {
            this._apple = 0;
            this._banana = 0;
            this._oranges = 0;
            this._apricot = 0;
            this._grapes = 0;
            this._kiwi = 0;
            this._strawberry = 0;
            this._blanks = 0;
        };
        // This method creates the Bitmap Array
        GameScene.prototype._initializeBitmapArray = function () {
            this._reels = new Array();
            for (var reel = 0; reel < 3; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                this._reels[reel].x = 231 + (reel * 69);
                this._reels[reel].y = 237;
                this.addChild(this._reels[reel]);
                console.log("reel" + reel + " " + this._reels[reel]);
            }
        };
        // Set the Bet for the player
        GameScene.prototype._playerBet = function (playerBet) {
            // ensure player's bet is less than or equal to players money
            if (playerBet <= this.playerMoney) {
                this.playerBet += playerBet;
                this.playerMoney -= playerBet;
                this._creditsText.text = this.playerMoney.toString();
                this._betText.text = this.playerBet.toString();
            }
        };
        // Handuler Methods
        // Bet1 Button click Handuler
        GameScene.prototype._bet1ButtonClick = function (event) {
            this._playerBet(1);
        };
        // Bet10 button click Handuler
        GameScene.prototype._bet10ButtonClick = function (event) {
            this._playerBet(10);
        };
        // Bet100 Button click Handuler
        GameScene.prototype._bet100ButtonClick = function (event) {
            this._playerBet(100);
        };
        // Spin Button click Handuler
        GameScene.prototype._spinButtonClick = function (event) {
            var pot1 = 0;
            var pot2 = 0;
            // Spins only if the player has credits
            if (this.playerBet > 0) {
                console.log("Number1 " + pot1);
                console.log("Number1 " + pot2);
                var bitmap = this._spinReels();
                for (var reel = 0; reel < 3; reel++) {
                    this._reels[reel].image = assets.getResult(bitmap[reel]);
                    console.log(bitmap[reel]);
                }
                // Check for JackPot
                pot1 = Math.floor(Math.random() * (20 - 1 + 1));
                pot2 = Math.floor(Math.random() * (20 - 1 + 1));
                //If the two numbers matches The players wins Jackport 
                if (pot1 == pot2) {
                    this.jackpot += 1000;
                    this._jackpotText.text = this.jackpot.toString();
                }
                this._determineWinnings();
                // reset player's bet to zero
                this.playerBet = 0;
                this._betText.text = this.playerBet.toString();
            }
            else {
                alert("Place Bet Before Spinning!!!");
            }
        };
        // OFF Button click Handuler
        GameScene.prototype._OFFButtonClick = function (event) {
            // Change the scenes
            scene = config.Scene.MENU;
            changeScene();
        };
        // RESET Button click Handuler
        GameScene.prototype._ResetButtonClick = function (event) {
            // Reset All
            this._resetAll();
            this._betText.text = this.playerBet.toString();
            this._creditsText.text = this.playerMoney.toString();
            this._resultText.text = this.winnings.toString();
            this._jackpotText.text = this.jackpot.toString();
            this._resetFruitTally();
        };
        return GameScene;
    })(objects.Scene);
    scenes.GameScene = GameScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameScene.js.map