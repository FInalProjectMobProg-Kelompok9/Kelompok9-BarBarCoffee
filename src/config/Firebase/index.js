import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCnIpXIy8S-B-dT7afR5_IowqsifRGwru0",
    authDomain: "barbarcoffee-9d6ba.firebaseapp.com",
    databaseURL: "https://barbarcoffee-9d6ba-default-rtdb.firebaseio.com",
    projectId: "barbarcoffee-9d6ba",
    storageBucket: "barbarcoffee-9d6ba.appspot.com",
    messagingSenderId: "231152406888",
    appId: "1:231152406888:web:c68c228e9e0059428f46dd"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

export default firebase;