  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3dUZMy4pjusH4xXF_6SxeeQikujPDOXk",
    authDomain: "money-mate-b2f25.firebaseapp.com",
    databaseURL: "https://money-mate-b2f25.firebaseio.com",
    projectId: "money-mate-b2f25",
    storageBucket: "",
    messagingSenderId: "1016940148711"
  };
  firebase.initializeApp(config);

  var signUpBtn = document.getElementById('signUpBtn');
  var signInBtn = document.getElementById('signInBtn');

  signUpBtn.addEventListener('click', function(){
      var emailField = document.getElementById('email').value;
      var passwordField = document.getElementById('password').value;

      firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function(){
        alert('User created!');
      }).catch(function(error){
         if(error != null){
            console.log(error.message);
            return;
         }
         alert('User Created!!!!');
      })
  });

   signInBtn.addEventListener('click', function(){
      var emailField = document.getElementById('email').value;
      var passwordField = document.getElementById('password').value;
      firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function(){
        document.location.href = 'index.html';
      }).catch(function(error){
        if(error != null){
          console.log(error.message);
          return;
        }
      })
  });
