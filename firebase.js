
<script src="https://www.gstatic.com/firebasejs/4.1.4/firebase.js"></script>


$(function(){

  var config = {
    apiKey: "AIzaSyA7hR--YVKnB6Pv2IhHHcwEIGCUVlY9_yY",
    authDomain: "tripmate-c9cc2.firebaseapp.com",
    databaseURL: "https://tripmate-c9cc2.firebaseio.com",
    projectId: "tripmate-c9cc2",
    storageBucket: "tripmate-c9cc2.appspot.com",
    messagingSenderId: "1094139433980"
  };
  firebase.initializeApp(config);
  $('.js-form').on('submit', event => {
    event.preventDefault();
    var email = $('#js-emails').val();
    var password = $('#js-password').val();
    console.log(email, password);
  });
});