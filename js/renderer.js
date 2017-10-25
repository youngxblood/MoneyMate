  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyD3dUZMy4pjusH4xXF_6SxeeQikujPDOXk",
  //   authDomain: "money-mate-b2f25.firebaseapp.com",
  //   databaseURL: "https://money-mate-b2f25.firebaseio.com",
  //   projectId: "money-mate-b2f25",
  //   storageBucket: "",
  //   messagingSenderId: "1016940148711"
  // };
  // firebase.initializeApp(config);

  // var signUpBtn = document.getElementById('signUpBtn');
  // var signInBtn = document.getElementById('signInBtn');

  // signUpBtn.addEventListener('click', function(){
  //     var emailField = document.getElementById('email').value;
  //     var passwordField = document.getElementById('password').value;

  //     firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).catch(function(error){
  //        if(error != null){
  //           console.log(error.message);
  //           return;
  //        }
  //        alert('User Created!!!!');
  //     })
  // });

  //  signInBtn.addEventListener('click', function(){
  //     var emailField = document.getElementById('email').value;
  //     var passwordField = document.getElementById('password').value;


  // });

// NAVBAR Component
Vue.component('app-nav', {
    template: `
      <nav class="navbar" role="navigation" aria-label="main navigation">
         <div class="navbar-brand">
            <a class="navbar-item" href="index.html">
            <img src="../resources/logo.png" alt="Money Mate" width="112" height="28">
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
               <a class="navbar-link">
               Account
               </a>
               <div class="navbar-dropdown">
                  <a class="navbar-item" href="account.html">
                  View Account
                  </a>
                  <a class="navbar-item" href="login.html">
                  Login
                  </a>
                  <hr class="navbar-divider">
                  <div class="navbar-item">
                     Version 1.0
                  </div>
               </div>
            </div>
         </div>
         <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            Dropdown Two
            </a>
            <div class="navbar-dropdown">
               <a class="navbar-item">
               Account
               </a>
               <a class="navbar-item">
               Elements
               </a>
               <a class="navbar-item">
               Components
               </a>
               <hr class="navbar-divider">
               <div class="navbar-item">
                  Version 1.0
               </div>
            </div>
         </div>
         </div>
         <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            Dropdown Three
            </a>
            <div class="navbar-dropdown">
               <a class="navbar-item">
               Account
               </a>
               <a class="navbar-item">
               Elements
               </a>
               <a class="navbar-item">
               Components
               </a>
               <hr class="navbar-divider">
               <div class="navbar-item">
                  Version 1.0
               </div>
            </div>
         </div>
         </div>
         <div class="navbar-end">
            <a href="signin.html" class="navbar-item">Sign In</a>
            <a href="register.html" class="navbar-item">Register</a>
         </div>
      </nav>
  `
});

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
