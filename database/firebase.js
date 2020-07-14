// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC-CIA7GmnrAbWHXhi-3ndzIrm26MXpbeo",
    authDomain: "mentorbox-53608.firebaseapp.com",
    databaseURL: "mentorbox-53608.firebaseio.com",
    projectId: "mentorbox-53608",
    storageBucket: "mentorbox-53608.appspot.com",
    messagingSenderId: "785262417424",
    appId: "1:785262417424:android:68b73d961e930a010a9c95"
};

firebase.initializeApp(firebaseConfig);

export default firebase;