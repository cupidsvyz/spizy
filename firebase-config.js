// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDigoOu697kT9ZknbEr0o8ITJrDsxuPp_g",
  authDomain: "votecanvass.firebaseapp.com",
  databaseURL: "https://votecanvass-default-rtdb.firebaseio.com",
  projectId: "votecanvass",
  storageBucket: "votecanvass.firebasestorage.app",
  messagingSenderId: "697871634440",
  appId: "1:697871634440:web:fb70ce4cec51d5568641bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
