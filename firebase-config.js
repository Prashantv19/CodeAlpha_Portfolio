// firebase-config.js

// Paste your own config here:
const firebaseConfig = {
    apiKey: "AIzaSyBU7FXB5zSYSSx6upuLbQ1nE1BRPC7GymM",
    authDomain: "portfolioform-9ff36.firebaseapp.com",
    projectId: "portfolioform-9ff36",
    storageBucket: "portfolioform-9ff36.firebasestorage.app",
    messagingSenderId: "493897317392",
    appId: "1:493897317392:web:b56da1d0ecaf4096d25e95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
