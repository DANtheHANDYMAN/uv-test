//TODO: https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer
//TODO: https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t

// location.origin;


// window.self === window.top;
// window === window.parent

// function inIframe() {
//   try {
//     return window.self !== window.top;
//   } catch (e) {
//     return true;
//   }
// }
iframe();
function iframe() {
    if(window.self === window.top) {
        // location = "https://danthehandyman.neocities.org/";


      //not in a iframe
      // alert("not in a iframe");
        // alert("Have to be in iframe bud. Not gonna happen.");
        // var t2 = window.open("about:blank");
        // console.log(t2)
        // t2.document.write("<html><head> <title>Sample</title></head><body>");
        // var f = t2.document.createElement("iframe");
        // var s = t2.document.createElement("script");
        // var st = t2.document.createElement("style");
        // s.textContent =
        //   "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}";
        // f.setAttribute("id", "f");
        // st.textContent =
        //   "body,html{width:100%;height:100%;padding:0;margin:0; overflow:hidden;}iframe{width:100%;height:95vh;border:none;}";
        // t2.document.write("</body></html>");
        // t2.document.body.append(f);
        // t2.document.body.append(s);
        // t2.document.body.append(st);
        // f.src = "https://danthehandyman.neocities.org/";
        // location = "https://google.com";
    } else {
        //is a iframe
        // alert("is a iframe");
    }
}