// var c = 0;
// console.log(c);
var error_limit = 0;
var error_limit2 = 0;
// var error = 
window.onerror = function (msg, url, lineNo, columnNo, error) {
  error_limit++;
  // ... handle error ...
  // alert(msg)
  var error = {
    msg: msg,
    url: url,
    lineNo: lineNo,
    columnNo: columnNo,
    error: error,
  };
  if (error_limit > 2) {
    error_limit2++;
    if (error_limit2 > 1) {
    } else {
      alert("Sadly there seems to be a problem. We are refreshing the page.");
    //   leaveree = false;
      location.reload();
    }
  } else {
    alert(
      "Sorry Lad, there seems to be an error.     " + JSON.stringify(error)
      );
      document.getElementById("error_output").innerHTML = JSON.stringify(error);
      // error = JSON.stringify(error);
      setTimeout(() =>{submit_error(JSON.stringify(error))}, 5000);
    // comsel;
  }
  // return false;
};

// const hi = "";
// const hi = "";




function submit_error(error) {
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var d = new Date();
      var day = days[d.getDay()];
      var hr = d.getHours();
      var min = d.getMinutes();
      if (min < 10) {
        min = "0" + min;
      }
      var ampm = "am";
      if (hr > 12) {
        hr -= 12;
        ampm = "pm";
      }
      var date = d.getDate();
      var month = months[d.getMonth()];
      // https://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript
      var all_the_time = hr + ":" + min + ampm + " " + date + " " + month;
      db.ref("error/" + `error_${firebase.auth().currentUser.uid}`)
        .set({
          email: firebase.auth().currentUser.email,
          error: error,
          date: all_the_time,
          site_version: document.getElementById("site_version_date").textContent
        })
        .then(function () {
          console.log("succseesss");
        });

}
