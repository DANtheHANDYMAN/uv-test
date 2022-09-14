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

    var admin = false;
    var mainApp = {};
    setTimeout(function () {
      var logtout = function () {
        firebase
          .auth()
          .signOut()
          .then(
            function () {
              console.log("success");
              // window.location.replace("index.html");
              // window.location.replace("/");
              window.location.replace("/login.html"); //new changes 9/10/22
            },
            function () {}
          );
      };

      var init = function () {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            // User is signed in.
            // FIXME: gfgfgfgfg
            //TODO: gdgfd
            console.log("stay");
            const email = user.email;
            // console.log(email)
            // alert('hi');

            if ("") {
              admin = true;
            }
            if (
              firebase
                .auth()
                .currentUser.email.includes("@k12.prosper-isd.net") === true ||
              firebase.auth().currentUser.email.includes("dda") === true
            ) {
              //user is in
              stay = true;
              check_perms();

            } else {
              alert("your not a student!!!!!!!!!!");
              location = "/";
            }

          } else {
            // No user is signed in.

            console.log("redirect");

            // window.location.replace("/");
            window.location.replace("/login.html"); //new changes 9/10/22
          }
        });
      };

      init();

      mainApp.logout = logtout;
    }, 10);



  document.getElementById("logout_btn").onclick = () => {
    mainApp.logout();
    console.log("logged out");
  };


                            window.addEventListener('beforeunload', function (e) {
                            //    function warning(e) { 
                                    e.preventDefault();
                                    e.returnValue = '';
                                })

  
console.log("after.js is working")

function user() {
    var url = window.location.origin + "/user.html";
    var t = window.open("about:blank");
    console.log(t)
    t.document.write("<html><head> <title>Sample</title></head><body>");
    var f = t.document.createElement("iframe");
    var s = t.document.createElement("script");
    var st = t.document.createElement("style");
    s.textContent =
      "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}";
    f.setAttribute("id", "f");
    st.textContent =
      "body,html{width:100%;height:100%;padding:0;margin:0; overflow:hidden;}iframe{width:100%;height:95vh;border:none;}";
    t.document.write("</body></html>");
    t.document.body.append(f);
    t.document.body.append(s);
    t.document.body.append(st);
    f.src = url;
  //   location = "https://google.com";
}




//  const response = fetch("/bare/v1")
//    .then((response) => {
//      console.log("after.js testing" + response);
//    })
//    .catch((err) => {
//      console.log("error retrieving data", err);
//    });


var ran_num = Math.floor(Math.random() * 10);

// let minutes = 1000 * 60;
// let date2 = new Date();
// setInterval(users_online, 180000); // 3 mins
// setInterval(users_online, 60000); // 1 mins
// setInterval(count_users_online, 60000); // 1 mins
setInterval(users_online, 180000); // 3 mins
setInterval(count_users_online, 180000); // 3 mins

setTimeout(users_online, 5000) // because scripts don't load
setTimeout(count_users_online, 5000) // because scripts don't load

function users_online() {
  let minutes = 1000 * 60;
  let date2 = new Date();
   db.ref("users_online/" + `user_${firebase.auth().currentUser.uid}`)
      // db.ref("users_online/" + `user_${ran_num}`)

     .set({
       time: Math.round(date2.getTime() / minutes),
       user: firebase.auth().currentUser.displayName,
       email: firebase.auth().currentUser.email,
       uid: firebase.auth().currentUser.uid,
     })

     .then(function () {
       console.log("succseesss");
     });
    //  alert(Math.round(date2.getTime() / minutes) + 1);

}
var users_online = 0;
function count_users_online() {
  db.ref("users_online/").on("value", (snapshot) => {
    const arr = snapshot.val();
    console.log(arr);
    if (arr) {
      var x;
      for (x in arr) {
        var item = arr[x];

        let minutes = 1000 * 60;
        let date2 = new Date();

        // if (item.time <= Math.round(date2.getTime() / minutes) - 1) {
        if (item.time <= Math.round(date2.getTime() / minutes) - 3) {

          console.log("they are offline !!!!");
          // if (item.time <= Math.round(date2.getTime() / minutes) - 3) { //if offline for 3 mins del them from db
          if (item.time <= Math.round(date2.getTime() / minutes) - 5) { //if offline for 5 mins del them from db

            db.ref("users_online/" + "user_" + item.uid).remove();
            console.log(item.uid)
          }
        } else {
          users_online = 0;
          users_online = users_online + 1;
          document.querySelector("#nav_bar_user_online_text").innerHTML =
            users_online;
          console.log(item.user);
          console.log(item.time);
          console.log(Math.round(date2.getTime() / minutes));
        }
      }
    }
  });
}



function check_perms() {
  db.ref("users_allowed/").on("value", (snapshot) => {
    var arr = snapshot.val(); //const
    if (arr) {
      if (arr.allowed.includes(firebase.auth().currentUser.email) === true) {
        console.log("There good");
      } else {
        alert("Sorry Your Account Is Not Allowed. Have You Paid?");
        location = "https://google.com";
      }
    } else {
      arr = ""
    }
  });
}


var shortcuticon = document.getElementById("shortCutIcon");
function pgTitleA() {
  document.title = "Inbox (4) - Gmail";
  var shortcuticon = document.getElementById("shortCutIcon");
  shortcuticon.href =
  "https://www.google.com/a/cpanel/k12.prosper-isd.net/images/favicon.ico";
  // alert('Title and Favicon are now changed');
}
function pgTitleB() {
  document.title = "My Drive - Google Drive";
  var shortcuticon = document.getElementById("shortCutIcon");
  shortcuticon.href =
  "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
  // alert('Title and Favicon are now changed');
}
function pgTitleC() {
  document.title = "Google Slides";
  var shortcuticon = document.getElementById("shortCutIcon");
  shortcuticon.href =
  "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";
  // alert('Title and Favicon are now changed');
}
function pgTitleD() {
  var shortcuticon = document.getElementById("shortCutIcon");
  document.title = "Google Docs";
  shortcuticon.href =
  "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
  // alert('Title and Favicon are now changed');
}
function pgTitleE() {
  document.title = "Classes";
  var shortcuticon = document.getElementById("shortCutIcon");
  document.getElementById("shortCutIcon").href =
  "https://ssl.gstatic.com/classroom/favicon.png";
  // alert('Title and Favicon are now changed');
}



var isgone = false;
document.addEventListener("keydown", function (event) {
  if (event.code === "Enter" && isgone === true) {
    // alert('Enter is pressed!');
    // if(isgone === true) {
      document.body.style.display = "block";
      // }
    }
  });
  
  function gone() {
    // alert('still working on this');
    document.body.style.display = "none";
    isgone = true;
  }



  //  var a_check = false;
  //  function check_a() {
  // db.ref("users/").on("value", (snapshot) => {
  //     const arr = snapshot.val();
  //     console.log(arr);
  //     if (arr) {
  //       var x;
  //       for (x in arr) {
  //         var item = arr[x];
  // console.log(JSON.stringify(item));
  //         if(item.email === firebase.auth().currentUser.email) {
  //           console.log(item.allowed.allowed);
  //           console.log(item);
  
  //             if (item.allowed.allowed === true) {
  //               a_check = true;
  //             }
  //         }
  //       }
  //     }
  //     })
  //  }
  
  
  //* all of these used for making the create_new_user
  //   var b_check = false;
  //   function check_b() {
  //     db.ref("users/").on("value", (snapshot) => {
  //       const arr = snapshot.val();
  //       console.log(arr);
  //       if (arr) {
  //         var x;
  //         for (x in arr) {
  //           var item = arr[x];
  //           console.log(JSON.stringify(item));
  //           if (item.email === firebase.auth().currentUser.email) {
  //             // console.log(item.allowed.allowed);
  //             // console.log(item);
  
  //             if (item.admin === true) {
  //               b_check = true;
  //             }
  //           }
  //         }
  //       }
  //     });
  //   }
  
  // setTimeout(create_new_user, 5000);
  // function create_new_user() {
  //   if(localStorage.getItem('user_set') === 'true') {
  //     console.log('already made an account');
  //   } else {
  //       // let minutes = 1000 * 60;
  //       // let date2 = new Date();
  //         db.ref("users/" + `user_${firebase.auth().currentUser.uid}`)
  //           //  db.ref("users_online/" + `user_${ran_num}`)
  
  //           .set({
  //             // time: Math.round(date2.getTime() / minutes),
  //             user: firebase.auth().currentUser.displayName,
  //             email: firebase.auth().currentUser.email,
  //             uid: firebase.auth().currentUser.uid,
  //             admin: b_check,
  //             allowed: {
  //               allowed: a_check
  //             },
  //           })
  
  //           .then(function () {
  //             console.log("succseesss");
  //             localStorage.setItem("user_set", true);
  //           });
  //       }
  // }
  
  // var a = false;
  // function check_perms() {
  //      db.ref("users/").on("value", (snapshot) => {
  //        const arr = snapshot.val();
  //        console.log(arr);
  //        if (arr) {
  //          var x;
  //          for (x in arr) {
  //            var item = arr[x];
  //            console.log(JSON.stringify(item));
  //            if (item.email === firebase.auth().currentUser.email) {
  //              if (item.allowed.allowed === true) {
  //                a = true;
  //              } else {
  //               alert("Sorry Your Account Is Not Allowed. Have You Paid?")
  //               location = "https://google.com";
  //              }
  //            }
  //          }
  //        }
  //      });
  // }