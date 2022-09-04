// var c = 0;
// console.log(c);
var error_limit = 0;
var error_limit2 = 0;

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
    // comsel;
  }
  // return false;
};
