// window.onload = function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDamW8f8Ee9vBpxRGPR_sp8GBYojYYjbwE",
    authDomain: "retro-bowl-4.firebaseapp.com",
    projectId: "retro-bowl-4",
    storageBucket: "retro-bowl-4.appspot.com",
    messagingSenderId: "1021208428465",
    appId: "1:1021208428465:web:093e701d7727475c37c790",
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  var db = firebase.database();

  // FirebaseUI config.
  var uiConfig = {
    // signInSuccessUrl: "after.html",
    signInSuccessUrl: "new.html",

    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.

    // tosUrl: "after.html",
    tosUrl: "new.html",
  };
  
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start("#firebaseui-auth-container", uiConfig);

  var provider = new firebase.auth.GoogleAuthProvider();

  function googleSignInPopup(provider) {
    // [START auth_google_signin_popup]
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    // [END auth_google_signin_popup]
    }
  var user = firebase.auth().currentUser;
  var gone = null;
  // localStorage.setItem('user_set', false);
  setTimeout(() => {
    localStorage.setItem("user_set2", true);
  }, 1500);
  // setTimeout(() => { localStorage.removeItem('user_set2'); alert(localStorage.getItem('user_set_2'));}, 100); //clear everyones local storage

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if (
          firebase.auth().currentUser.email.includes("@k12.prosper-isd.net") ===
          true
        ) {
          // location = "/after.html";
          location = "new.html";

        } else if (
          firebase.auth().currentUser.email.includes("dda") === true
        ) {
          // location = "admin"
          // location = "/after.html";
          location = "new.html";

        } else {
          alert("your not a student!!!!!!!!!!");
          // location = "/";
          location = "https://google.com";
        }
      // } else {

      // }

      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const emailre = user.email;

      const photoURL = user.photoURL;
 
      console.log("already signed in");

      // location = "/after.html" 8/20/22 the new changes should help it
    } else {
      console.log("user not");
    }
    // }
  });
  // alert(localStorage.getItem('user_set2'));
  // function add_user() {
  //   // alert(firebase.auth().currentUser.email);
  //   // alert(firebase.auth().currentUser.photoURL);
  //   // alert(firebase.auth().currentUser.displayName);

  //   // setTimeout(function() {
  //   //   document.getElementById('request').value = "";
  //   //   document.getElementById('name').value = "";
  //   // },250)

  //   db.ref("users/").once("value", function (message_object) {
  //     // This index is mortant. It will help organize the chat in order

  //     var months = [
  //       "Jan",
  //       "Feb",
  //       "Mar",
  //       "Apr",
  //       "May",
  //       "Jun",
  //       "Jul",
  //       "Aug",
  //       "Sep",
  //       "Oct",
  //       "Nov",
  //       "Dec",
  //     ];
  //     var days = [
  //       "Sunday",
  //       "Monday",
  //       "Tuesday",
  //       "Wednesday",
  //       "Thursday",
  //       "Friday",
  //       "Saturday",
  //     ];
  //     var d = new Date();
  //     var day = days[d.getDay()];
  //     var hr = d.getHours();
  //     var min = d.getMinutes();
  //     if (min < 10) {
  //       min = "0" + min;
  //     }
  //     var ampm = "am";
  //     if (hr > 12) {
  //       hr -= 12;
  //       ampm = "pm";
  //     }
  //     var date = d.getDate();
  //     var month = months[d.getMonth()];
  //     // https://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript
  //     var all_the_time = hr + ":" + min + ampm + " " + date + " " + month;
  //     var index = parseFloat(message_object.numChildren()) + 1;
  //     db.ref("users/" + `user_${index}`)
  //       .set({
  //         email: firebase.auth().currentUser.email,
  //         name: firebase.auth().currentUser.displayName,
  //         time: all_the_time,
  //         read: false,
  //         index: index,
  //       })

  //       .then(function () {
  //         // After we send the chat refresh to get the new messages
  //         // parent.refresh_chat()
  //         // refresh_chat();
  //         // location.reload();
  //         // parent.refresh_chat()
  //         console.log("succseesss");
  //       });
  //   });
  // }

  // window.onload = function() {
//   pgTitleF();
// // };
// function pgTitleF() {
//   document.title = "Classes";
//   var shortcuticon = document.getElementById("shortCutIcon");
//   document.getElementById("shortCutIcon").href =
//     "https://ssl.gstatic.com/classroom/favicon.png";
//   // alert('Title and Favicon are now changed');
// }

// if (firebase.auth().currentUser.email.includes('@k-12.prosper-isd.net')) {
//     //they are student
//     what_url = '/content/content.html'
//     // location = what_url;
//     console.log('content');
// }
// if (firebase.auth().currentUser.email.includes('@prosper-isd.net')) {
//     //they probaly are staff
//     what_url = '/admin/admin.html'
//     // location = what_url;
//     console.log('admin');
// }
// if (!firebase.auth().currentUser.email.includes('prosper-isd.net')) {
//     //they are not from the school
//     // location = "/";
// }
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// FirebaseUI config.
// window.onload = function() {
//   redirect(user);
// }
// function redirect(user) {
// var what_url
// var user = firebase.auth().currentUser;
// alert(firebase.auth().currentUser);
// if(user) {
//     alert("firebase.auth().currentUser");
// }
// firebase.auth().onAuthStateChanged((user) => {
// if(firebase.auth().currentUser) {
//     // const email = user.email;
//     // localStorage.setItem('logedinBefore','');

//     // if(email.includes('k-12.prosper-isd.net')) {
//     //   //they are student
//     //   what_url = '/content/content.html'
//     //   // location = what_url;
//     //   console.log('content');
//     // } else {
//     //   //they probaly are staff
//     //   what_url = '/admin/admin.html'
//     //   // location = what_url;
//     //   console.log('admin');
//     // }
//     // if(!email.includes('prosper-isd.net')) {
//     //   //they are not from the school
//     //   // location = "/";
//     // }
//     console.log('hi');
//     location = "/after.html";
// }
// });
// }
// var uiConfig = {
//   signInSuccessUrl: what_url,
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   tosUrl: what_url
// };
// var uiConfig = {
//   signInSuccessUrl: '/content/content.html',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   tosUrl: '/content/content.html'
// };
// alert(.email)

// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);
// googleSignInPopup(provider)

// var provider = new firebase.auth.GoogleAuthProvider();

// function googleSignInPopup(provider) {
//     // [START auth_google_signin_popup]
//     firebase.auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;

//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             // alert(result.email)
//             // alert(credential.email)
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // console.log(email);
//             // alert(email)
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });
//     // [END auth_google_signin_popup]
// }
