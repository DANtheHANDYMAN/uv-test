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
              window.location.replace("/");
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
            check_perms();
            // stay = true;
            } else {
              alert("your not a student!!!!!!!!!!");
              location = "/";
            }


          } else {
            // No user is signed in.

            console.log("redirect");

            window.location.replace("/");
          }
        });
      };

      init();

      mainApp.logout = logtout;
    }, 10);


    // var a = false;
    // function check_perms() {
    //   db.ref("users/").on("value", (snapshot) => {
    //     const arr = snapshot.val();
    //     console.log(arr);
    //     if (arr) {
    //       var x;
    //       for (x in arr) {
    //         var item = arr[x];
    //         console.log(JSON.stringify(item));
    //         if (item.email === firebase.auth().currentUser.email) {
    //           if (item.admin === true) {
    //             // a = true;
    //           } else {
    //             alert("Sorry Your Account Is Not Allowed To Have Admin Access. Have You Paid?");
    //             location = "https://google.com";
    //           }
    //         }
    //       }
    //     }
    //   });
    // }

    function check_perms() {
       db.ref("users_admin/").on("value", (snapshot) => {
        var arr = snapshot.val(); //const
        if(arr) {
          if(arr.allowed.includes(firebase.auth().currentUser.email) === true) {
            console.log("There good");
          } else {
              alert("Sorry Your Account Is Not Allowed To Have Admin Access. Have You Paid?");
              location = "https://google.com";
          }
        } else {
          arr = ""
        }
       })
    }

    setTimeout(user_allowed_container, 5000);
    function user_allowed_container() {
             db.ref("users_allowed/").on("value", (snapshot) => {
        var arr = snapshot.val(); //const
        if(arr) {
            // arr.allowed;
            console.log(arr.allowed)
            document.querySelector(".user_allowed_inner_container").innerHTML = "";
            document.querySelector(".user_allowed_inner_container").innerHTML = arr.allowed;
        } else {
          arr = ""
        }
       })
    }



setTimeout(count_users_online, 5000) // because scripts don't load
setInterval(count_users_online, 60000); // 1 mins
var users_online = 0;
function count_users_online() {
  db.ref("users_online/").on("value", (snapshot) => {
    const arr = snapshot.val();
    console.log(arr);
    document.querySelector(".user_name_list_online_inner_container").innerHTML = "";
    if (arr) {
      var x;
      for (x in arr) {
        var item = arr[x];

        let minutes = 1000 * 60;
        let date2 = new Date();

        
        
        if (item.time <= Math.round(date2.getTime() / minutes) - 10) { //TODO: change it to 1
          console.log("they are offline !!!!");

          users_online = 0;
          document.querySelector("#nav_bar_user_online_text").innerHTML =
            users_online;
          document.querySelector(".user_name_list_online_inner_container").innerHTML = "";

        } else {
          users_online = 0;
          users_online = users_online + 1;
          document.querySelector("#nav_bar_user_online_text").innerHTML =
          users_online;
          console.log(item.user);
          console.log(item.time);
          console.log(Math.round(date2.getTime() / minutes));



          var user_name_list_name_container = document.createElement('div');
          user_name_list_name_container.setAttribute('class', 'user_name_list_name_container large');

          var user_name_list_content = document.createElement('div');
          user_name_list_content.setAttribute('class', 'user_name_list_content');
          user_name_list_content.textContent = item.user + " ⁘ ";

          var user_name_list_time = document.createElement('div');
          user_name_list_time.setAttribute('class', 'user_name_list_time');
          user_name_list_time.innerHTML = item.time + " ⁘ ";

          var user_name_list_email = document.createElement("div");
          user_name_list_email.setAttribute("class", "user_name_list_email");
          user_name_list_email.innerHTML = item.email + " ⁘ ";

          // user_name_list_time.textContent = item.time + " - " + Math.round(date2.getTime() / minutes) - item.time;

          user_name_list_name_container.append(
            user_name_list_content,
            user_name_list_time,
            user_name_list_email
          );

          document.querySelector(".user_name_list_online_inner_container").append(user_name_list_name_container);

document.querySelector(".user_name_list_online_inner_container").scrollTop = document.querySelector(".user_name_list_online_inner_container").scrollHeight;
        }
      }
    }
  });
}


//TODO: have to do this error thing finish this
setTimeout(count_users_error, 5000); // because scripts don't load
setInterval(count_users_error, 60000); // 1 mins
var users_error = 0;
function count_users_error() {
  db.ref("error/").on("value", (snapshot) => {
    const arr = snapshot.val();
    console.log(arr);
    document.querySelector(".user_error_list_online_inner_container").innerHTML = "";
    if (arr) {
      var x;
      for (x in arr) {
        var item = arr[x];

        let minutes = 1000 * 60;
        let date2 = new Date();

        // if (item.time <= Math.round(date2.getTime() / minutes) - 10) {
        //   //TODO: change it to 1
        //   console.log("they are offline !!!!");

        //   users_online = 0;
        //   document.querySelector("#nav_bar_user_online_text").innerHTML =
        //     users_online;
        //   document.querySelector(
        //     ".user_name_list_online_inner_container"
        //   ).innerHTML = "";
        // } else {
          // users_online = 0;
          // users_online = users_online + 1;
          // document.querySelector("#nav_bar_user_online_text").innerHTML =
          //   users_online;
          // console.log(item.user);
          // console.log(item.time);
          // console.log(Math.round(date2.getTime() / minutes));


          //  email: firebase.auth().currentUser.email,
          // error: error,
          // date: all_the_time,
          // site_version: document.getElementById("site_version_date").textContent


          var user_error_list_name_container = document.createElement("div");
          user_error_list_name_container.setAttribute(
            "class",
            "user_error_list_name_container large"
          );

          var user_error_list_content = document.createElement("div");
          user_error_list_content.setAttribute(
            "class",
            "user_error_list_content"
          );
          user_error_list_content.textContent = item.error + " ⁘ ";

          var user_error_list_time = document.createElement("div");
          user_error_list_time.setAttribute("class", "user_error_list_time");
          user_error_list_time.innerHTML = item.date + " ⁘ " + item.site_version + " ⁘ ";

          var user_error_list_email = document.createElement("div");
          user_error_list_email.setAttribute("class", "user_error_list_email");
          user_error_list_email.innerHTML = item.email + " ⁘ ";

          // user_name_list_time.textContent = item.time + " - " + Math.round(date2.getTime() / minutes) - item.time;

          user_error_list_name_container.append(
            user_error_list_content,
            user_error_list_time,
            user_error_list_email
          );

          document
            .querySelector(".user_error_list_online_inner_container")
            .append(user_error_list_name_container);

          document.querySelector(
            ".user_error_list_online_inner_container"
          ).scrollTop = document.querySelector(
            ".user_error_list_online_inner_container"
          ).scrollHeight;
        // }
      }
    }
  });
}



document.getElementById("add_user_email_btn").onclick = () => {add_user_allowed(); get_user_allowed();};
document.getElementById("del_user_email_btn").onclick = del_user_allowed;

var user_allowed_array = "";
get_user_allowed();
function get_user_allowed() {
    db.ref("users_allowed/").on("value", (snapshot) => {

      
    user_allowed_array = "";
    
      var arr = snapshot.val(); //const
      if(arr) {
        console.log(arr);
      console.log(arr.allowed);
      
      user_allowed_array = user_allowed_array.concat(arr.allowed);
      console.log(user_allowed_array);
      
      // if (arr) {
        //   var x;
        //   for (x in arr) {
          //     var item = arr[x];
          //     console.log(item);
          //     // console.log(item.allowed);
          
          //     // user_allowed_array.push(arr)
          //     // user_allowed_array = user_allowed_array.concat(item);
          //     // console.log(user_allowed_array);
          
          
          //   }
          //   }
        } else {
          arr = "";
        }
      });
    }
    function add_user_allowed() {
      
      db.ref("users_allowed").set({
        
        allowed: user_allowed_array + " " + document.querySelector(".add_user_email_input").value,
      }) .then(function () {
        console.log("succseesss");
        document.querySelector(".add_user_email_input").value = "";
        // setTimeout(() => {user_allowed_array = ""}, 500);
      });
    }

    
    
    
    
    
    function del_user_allowed() {
      
      var new_user_allowed_array = user_allowed_array.replace(document.querySelector(".del_user_email_input").value, '');
      console.log(new_user_allowed_array)
      db.ref("users_allowed").set({
        
      allowed: new_user_allowed_array,
    }) .then(function () {
        console.log("succseesss");
        document.querySelector(".del_user_email_input").value = "";
        // setTimeout(() => {user_allowed_array = ""; new_user_allowed_array = "";}, 500);
      });
    }
  // TODO: do this now https://firebase.google.com/docs/database/web/read-and-write#updating_or_deleting_data
  
  //  setTimeout(check_a, 2000);
  //  var a = false;
  //  function check_a() {
  // db.ref("users/").on("value", (snapshot) => {
  //     const arr = snapshot.val();
  //     console.log(arr);
  //     if (arr) {
  //       var x;
  //       for (x in arr) {
  //         var item = arr[x];
  // console.log(JSON.stringify(item));
  // if(item.email === document.querySelector(".add_user_email_input").value) {
  //   console.log(item.allowed.allowed);
  //   console.log(item);
    
  //   if (item.allowed.allowed === true) {
  //     a = true;
  //             }
  //           }
  //         }
  //       }
  //     })
  //   }




  // var b = false;
  // function check_b() {
  //   db.ref("users/").on("value", (snapshot) => {
    //     const arr = snapshot.val();
    //     console.log(arr);
    //     if (arr) {
      //       var x;
  //       for (x in arr) {
    //         var item = arr[x];
  //         console.log(JSON.stringify(item));
  //         if (
  //           item.email === document.querySelector(".add_user_email_input").value
  //         ) {
  //           // console.log(item.allowed.allowed);
  //           // console.log(item);

  //           if (item.admin === true) {
  //             a = true;
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

// document.getElementById("add_user_email_btn").onclick = () => {

// // if(item.includes(document.querySelector(".add_user_email_input")) === true) {

  
//  db.ref("users/").on("value", (snapshot) => {
//     const arr = snapshot.val();
//     console.log(arr);
//     if (arr) {
//       var x;
//       for (x in arr) {
//         var item = arr[x];
        
//         // if(JSON.stringify(item).includes(document.querySelector(".add_user_email_input").input) === true) {
//           if(item.email === document.querySelector(".add_user_email_input").value) {
//           check_a();
//             a = true //* changes and makes it true
//           console.log(item);
//           setTimeout(() => {
//             db.ref("users/" + `user_${item.uid}` + "/allowed")
//               .set({
//                  allowed: a,
//                 // allowed: true,
//               })

//               .then(function () {
//                 console.log("succseesss");
//                 check_a();
//                 document.querySelector(".add_user_email_input").value = "";
//               });



//           }, 2000)
//         }

//       }
//     }
//   })
// }



// document.getElementById("del_user_email_btn").onclick = () => {

// // if(item.includes(document.querySelector(".add_user_email_input")) === true) {

  
//  db.ref("users/").on("value", (snapshot) => {
//     const arr = snapshot.val();
//     console.log(arr);
//     if (arr) {
//       var x;
//       for (x in arr) {
//         var item = arr[x];
        
//         // if(JSON.stringify(item).includes(document.querySelector(".add_user_email_input").input) === true) {
//           if(item.email === document.querySelector(".del_user_email_input").value) {
//           check_a();
//             a = false //* changes and makes it true
//           console.log(item);
//           setTimeout(() => {
//             db.ref("users/" + `user_${item.uid}` + "/allowed")
//               .set({
//                  allowed: a,
//                 // allowed: true,
//               })

//               .then(function () {
//                 console.log("succseesss");
//                 check_a();
//                 document.querySelector(".del_user_email_input").value = "";
//               });



//           }, 2000)
//         }

//       }
//     }
//   })
// }





// }




  //  db.ref("users/" + `user_${firebase.auth().currentUser.uid}` + "allowed")
  //    .set({
  //       allowed: true,
  //    })

  //    .then(function () {
  //      console.log("succseesss");
  //    });




    // }


    // var users_allowed_list_time = "";
    // var users_allowed_list_user = "";
    // var users_allowed_list_email = "";
    // var users_allowed_list_uid = "";




    // function check_user_online_info() {
    //    db.ref("users/").on("value", (snapshot) => {
    // const arr = snapshot.val();
    // console.log(arr);
    // if (arr) {
    //   var x;
    //   for (x in arr) {
    //     var item = arr[x];

    //     if(item.includes(document.querySelector(".add_user_email_input")) === true) {
    //          db.ref("users/" + `user_${item.uid}`)
    //  .set({
    //    time: all_the_time,
    //    user: users_allowed_list_user,
    //    email: users_allowed_list_email,
    //    uid: users_allowed_list_uid,
    //  })
    //  .then(function () {
    //    console.log("succseesss");
    //  });


    //     }



        // if(item.includes(document.querySelector(".add_user_email_input")) === true) {
        //   users_allowed_list_time = item.time;
        //   users_allowed_list_user = item.user;
        //   users_allowed_list_email = item.email;
        //   users_allowed_list_uid = item.uid;
        // }


    //   }
    // }
    // })
    // }
  // var users_allowed_list = ""

  // //  db.ref("users_allowed_list/").on("value", (snapshot) => {
  //  db.ref("users_online/").on("value", (snapshot) => {
  //    const arr = snapshot.val();
  //     if (arr) {
  //     var x;
  //     var users_allowed_list_2 = "" 
  //     for (x in arr) {
  //       var item = arr[x];
  //       users_allowed_list_2 += JSON.stringify(item)
  //       console.log(x)
  //       console.log(item);
  //       console.log(users_allowed_list_2);

  //       users_allowed_list = users_allowed_list_2
  //       // console.log(JSON.stringify(item));


  //     }
  //   }
  //  });


  
