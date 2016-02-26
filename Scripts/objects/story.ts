module story {

    export class DesicionLevel {

        private _question: string;
        constructor(){
            
        }

        public level(gamelevel: number): string {

            switch (gamelevel) {
                case 0:
                    //Call the level
                    this._question = this.firstLevel();
                    break;
                case 1:
                    // Call the 2nd level
                    this._question = this.secondLevel();
                    break;
                case 2:
                    // call the 3rd level
                    this._question = this.thirdLevel();
                    break;
            }
            
            return this._question;
        }

        private firstLevel(): string {
            
            var ques:string = 
            "There are three families; the prime ministers family (Family A), the secetary of the prime minister's family (Family B), and the driver of the secetary's family (Family C). The secetary has been with the prime minister for over 20yrs and been entrusted with the task of taking records of the prime minister's slush fund in other to keep it safe. An accident occured resulting to lost of some pieces of this ledger leading to the prosecutors having knownledge of the slush fund. The sectary was arrested due to incident since every pieces of the account regarding the slush fund leads to him. What will you do if you are the prime minister";
            return ques;
        }

        private secondLevel(): string {

            return this._question;
        }

        private thirdLevel(): string {

            return this._question;
        }

    }
}