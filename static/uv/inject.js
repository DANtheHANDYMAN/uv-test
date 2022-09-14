//TODO: https://stackoverflow.com/questions/34482587/queryselectorall-not-working-with-onclick-event
//TODO: https://stackoverflow.com/questions/11144653/a-script-links-without-href
//TODO: https://bobbyhadz.com/blog/javascript-remove-http-https-from-url
//TODO: https://stackoverflow.com/questions/36522178/detect-if-page-was-redirected-or-loaded-directlyjavascript
// alert("hi people");



//*we dont need it now

var base = document.createElement("base");
// base.setAttribute("target", "_blank");
base.setAttribute("target", "_self");
document.head.append(base);
// alert(base);

//! see if sites is in iframe and see if current url is about:blank if not turn page white or rediurect make it so they have to be opend in the page and change the target to blank so it will opn in the page!!!!!!!!!


document.oncontextmenu = rightClick;
function rightClick(e) {
  e.preventDefault();
}

setTimeout( () => {
    var all_links = document.querySelectorAll('a');
    for (var i = 0; i < all_links.length; i++) {
      var a = all_links[i];
      a.rel = "noopener";
      // a.target = '_blank';
      // https://www.w3schools.com/tags/att_a_target.asp
      a.target = "_self";
    }


// document.body.addEventListener('beforeunload', function (e) {

//     e.preventDefault();
//     e.returnValue = '';
// })



// console.log('hi people');

// var x = document.querySelectorAll("a");
// for (let i = 0; i < x.length; i++) {
//   console.log(x[i].href);
//   // x[i].setAttribute("onclick", "open(" + x[i].href + ")");
//   x[i].setAttribute("onclick", `open("${x[i].href}")`);
//   x[i].href = "#";
//   x[i].removeAttribute("href");

//   x[i].addEventListener("click", function () {
//     // this.style.width = "500px";
//     alert(this)
//     this.preventDefault();
//   });
// }

// function open(url) {
//     console.log(url)
// // }
//     // window.open(url);

//   var t = window.open("about:blank");
//   console.log(t)
//   t.document.write("<html><head> <title>Sample</title></head><body>");
//   var f = t.document.createElement("iframe");
//   var s = t.document.createElement("script");
//   var st = t.document.createElement("style");
//   s.textContent =
//     "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}";
//   f.setAttribute("id", "f");
//   st.textContent =
//     "body,html{width:100%;height:100%;padding:0;margin:0; overflow:hidden;}iframe{width:100%;height:95vh;border:none;}";
//   t.document.write("</body></html>");
//   t.document.body.append(f);
//   t.document.body.append(s);
//   t.document.body.append(st);
//   f.src = url;

// //   location = "https://google.com";
// }



























//     var all_links = document.querySelectorAll('a');
// for (var i = 0; i < all_links.length; i++) {
//     var a = all_links[i];
//     // if (a.hostname != location.hostname) {
//         a.rel = 'noopener';
//         a.target = '_blank';
//     // }
// }


//                                 document.body.addEventListener('beforeunload', function (e) {
//                             //    function warning(e) { 
//                                     e.preventDefault();
//                                     e.returnValue = '';
//                                 })
// //! newest change 
// document.body.addEventListener("click", function (e) {
//     alert(e.target);
//     console.log(e.target)
//   if (e.target.tagName !== "A") return;
//     alert(e.target.tagName);

//   // if (e.target.hostname === location.hostname) return;
//   // if (['stackoverflow.com', 'someothersite.com'].indexOf(e.target.hostname) !== -1) return;
//   e.preventDefault();
//   // window.open(e.target.href);

//   var t = window.open("about:blank");
//   console.log(t);
//   t.document.write("<html><head> <title>Sample</title></head><body>");
//   var f = t.document.createElement("iframe");
//   var s = t.document.createElement("script");
//   var st = t.document.createElement("style");
//   s.textContent =
//     "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}";
//   f.setAttribute("id", "f");
//   st.textContent =
//     "body,html{width:100%;height:100%;padding:0;margin:0; overflow:hidden;}iframe{width:100%;height:95vh;border:none;}";
//   t.document.write("</body></html>");
//   t.document.body.append(f);
//   t.document.body.append(s);
//   t.document.body.append(st);
//   f.src = e.target.href;
//   return false;
// });
// //TODO: https://stackoverflow.com/questions/12071254/open-all-external-links-open-in-a-new-tab-apart-from-a-domain

// // var all_links = document.querySelectorAll('a');
// // for (var i = 0; i < all_links.length; i++) {
// //     var a = all_links[i];
// //     if (a.hostname != location.hostname) {
// //         a.rel = 'noopener';
// //         a.target = '_blank';
// //     }
// // }
// //TODO: https://forum.squarespace.com/topic/21952-force-all-external-links-into-a-new-tab/

// console.log("hi");


}, 5000)










// console.log('hi people');

// var x = document.querySelectorAll("a");
// for (let i = 0; i < x.length; i++) {
//   console.log(x[i].href);
//   // x[i].setAttribute("onclick", "open(" + x[i].href + ")");
//   x[i].setAttribute("onclick", `open("${x[i].href}")`);
//   x[i].href = "";
//   x[i].removeAttribute("href");
// }

// function open(url) {
//     console.log(url)
// // }
//     // window.open(url);

//   var t = window.open("about:blank");
//   console.log(t)
//   t.document.write("<html><head> <title>Sample</title></head><body>");
//   var f = t.document.createElement("iframe");
//   var s = t.document.createElement("script");
//   var st = t.document.createElement("style");
//   s.textContent =
//     "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}";
//   f.setAttribute("id", "f");
//   st.textContent =
//     "body,html{width:100%;height:100%;padding:0;margin:0; overflow:hidden;}iframe{width:100%;height:95vh;border:none;}";
//   t.document.write("</body></html>");
//   t.document.body.append(f);
//   t.document.body.append(s);
//   t.document.body.append(st);
//   f.src = url;

// //   location = "https://google.com";
// }





















// var x = document.querySelectorAll("a");
// var myarray = [];
// for (var i = 0; i < x.length; i++) {
//   var nametext = x[i].textContent;
//   var cleantext = nametext.replace(/\s+/g, " ").trim();
//   var cleanlink = x[i].href;
//   myarray.push([cleantext, cleanlink]);
// }
// function make_table() {
//   var table = "<table><thead><th>Name</th><th>Links</th></thead><tbody>";
//   for (var i = 0; i < myarray.length; i++) {
//     table +=
//       "<tr><td>" + myarray[i][0] + "</td><td>" + myarray[i][1] + "</td></tr>";
//   }

//   var w = window.open("");
//   w.document.write(table);
// }
// make_table();
// https://towardsdatascience.com/quickly-extract-all-links-from-a-web-page-using-javascript-and-the-browser-console-49bb6f48127b


// var links = document.querySelectorAll("a");
// var linkReport = [];
// links.forEach(function (link) {
//   var reportLine = {
//     url: link.getAttribute("href"),
//     status: 0,
//     message: "",
//     element: link,
//   };
//   linkReport.push(reportLine);
//   // do stuff to the reportLine and link here
// });
// console.table(linkReport);
// https://www.eviltester.com/blog/eviltester/javascript/in-browser-automation/writing-a-link-checker-in-the-browser/


// window.addEventListener("click", () => {
//   if (event.which !== 1 && event.which !== 2)
//     // left of middle click
//     return;
//   var element = event.target;
//   if (element.tagName !== "A") {
//     while (element.parentNode) {
//       element = element.parentNode;
//       if (element.tagName === "A") break;
//     }
//     if (element.tagName !== "A") return;
//   }
//   console.log("A-Element was left clicked");
// });

//https://stackoverflow.com/questions/41706733/javascript-find-out-when-a-link-is-clicked-or-opened-in-another-way