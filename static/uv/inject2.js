document.body.addEventListener("click", function (e) {
  if (e.target.tagName !== "A") return;
  // if (e.target.hostname === location.hostname) return;
  // if (['stackoverflow.com', 'someothersite.com'].indexOf(e.target.hostname) !== -1) return;
  e.preventDefault();
  // window.open(e.target.href);

  var t = window.open("about:blank");
  console.log(t);
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
  f.src = e.target.href;
  return false;
});
//TODO: https://stackoverflow.com/questions/12071254/open-all-external-links-open-in-a-new-tab-apart-from-a-domain

// var all_links = document.querySelectorAll('a');
// for (var i = 0; i < all_links.length; i++) {
//     var a = all_links[i];
//     if (a.hostname != location.hostname) {
//         a.rel = 'noopener';
//         a.target = '_blank';
//     }
// }
//TODO: https://forum.squarespace.com/topic/21952-force-all-external-links-into-a-new-tab/

console.log("hi");
