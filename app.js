

(function(){

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7hR--YVKnB6Pv2IhHHcwEIGCUVlY9_yY",
    authDomain: "tripmate-c9cc2.firebaseapp.com",
    databaseURL: "https://tripmate-c9cc2.firebaseio.com",
    projectId: "tripmate-c9cc2",
    storageBucket: "tripmate-c9cc2.appspot.com",
    messagingSenderId: "1094139433980"
  };
  firebase.initializeApp(config);

  //Get Elements
  const txtEmail = document.getElementById('login-email');
  const txtPassword = document.getElementById('login-password');
  const btnlogin = document.getElementById('btn-login');

  //Add login event
  btnlogin.addEventListener('click' => 
  {
  	"use strict";
  	const email = txtEmail.value;
  	const password = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.signInWithEmailAndPassword(email, password);
  	promise.catch(e=> console.log(e.message))

  });

}());