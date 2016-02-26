module objects {
    
    // Define Asset Class 
    export class Asset {

        public id: string;
        public src: string;
        // Define the class Constructor
        constructor(id: string, src: string) {
            this.id = id;
            this.src = src;
        }
    }
}