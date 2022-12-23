import { initializeApp } from "firebase/app";

export class CloudService {
    constructor() {
    this.config = {
        apiKey: "AIzaSyDMzdH-JAWhxTw08rttpLdwoluycmXlstE",
        authDomain: "foodie-14034.firebaseapp.com",
        projectId: "foodie-14034",
        storageBucket: "foodie-14034.appspot.com",
        messagingSenderId: "693860765649",
        appId: "1:693860765649:web:0ac601564d3082a3d35af0"
    };

    this.app = initializeApp(this.config);
    }
}

export const cloudService = new CloudService();

// this.config = {
//     apiKey: process.env.API_KEY,
//     authDomain: "foodie-14034.firebaseapp.com",
//     projectId: "foodie-14034",
//     storageBucket: "foodie-14034.appspot.com",
//     messagingSenderId: "693860765649",
//     appId: process.env.APP_ID
// };

