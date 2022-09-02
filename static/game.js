                        const form = document.querySelector("form");
                        const input = document.querySelector(".btn_item_container_main_apps");


                        
function select(x) {
    // x.preventDefault();
      window.navigator.serviceWorker
      .register("./sw.js", {
        scope: __uv$config.prefix,
      })
      .then(() => {
              var s2_content = ""; //have to put it up here because it wouldn't work
              // TODO encode all of these urls so u cant find them in search TODO: do it
              // TODO get rid of the comments saying their names
              // TODO do a better job of hiding everything 
              let url = "";
              if (x.id === "btn_item_container_main_apps_1") {
                //spot
                url = atob("aHR0cHM6Ly9zcG90aWZ5LmNvbQ==");
              }
              if (x.id === "btn_item_container_main_apps_2") {
                //rt
                url = atob("aHR0cHM6Ly9yZWRkaXQuY29t");
              }
              if (x.id === "btn_item_container_main_apps_3") {
                //cmg
                url = atob("aHR0cHM6Ly9jb29sbWF0aGdhbWVzLmNvbS8=");
              }
              if (x.id === "btn_item_container_main_apps_4") {
                //dd
                url = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbQ==");
              }
              if (x.id === "btn_item_container_main_apps_5") {
                //tich
                url = atob("aHR0cHM6Ly90d2l0Y2guY29t");
              }
              if (x.id === "btn_item_container_main_apps_6") {
                //tt
                url = atob("aHR0cHM6Ly90aWt0b2suY29t");
              }
              if (x.id === "btn_item_container_main_apps_7") {
                //twt
                url = atob("aHR0cHM6Ly90d2l0dGVyLmNvbQ==");
              }
              if (x.id === "btn_item_container_main_apps_8") {
                //yt
                url = atob("aHR0cHM6Ly95b3V0dWJlLmNvbQ==");
              }
              if (x.id === "btn_item_container_main_apps_9") {
                //gfnow
                url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29t");
              }

              if (x.id === "btn_item_container_main_games_1") {
                //1v1-lol
                url = atob("aHR0cHM6Ly8xdjEubG9sLw==");
              }
              if (x.id === "btn_item_container_main_games_2") {
                //among
                url = atob("aHR0cHM6Ly9ub3cuZ2cvYXBwcy9pbm5lcnNsb3RoLWxsYy80MDQ3L2Ftb25nLXVzLmh0bWw=");
              }
              if (x.id === "btn_item_container_main_games_3") {
                //mc
                url = atob("aHR0cHM6Ly9jbGFzc2ljLm1pbmVjcmFmdC5uZXQv");
              }
              if (x.id === "btn_item_container_main_games_4") {
                //shellshockers
                url = atob("aHR0cHM6Ly9zaGVsbHNob2NrLmlvLw==");
              }
              if (x.id === "btn_item_container_main_games_5") {
                //slope
                url = atob("aHR0cHM6Ly9rZGF0YTEuY29tLzIwMjAvMDUvc2xvcGUv");
              }
              if (x.id === "btn_item_container_main_games_6") {
                //run3
                url = atob("aHR0cHM6Ly9wbGF5ZXIwMy5jb20vcnVuLzMvYmV0YS8=");
                s2_content = "document.getElementById('f').style.display='flex'; alert('if its not working try disabling your ad blocker')";
              }
              if (x.id === "btn_item_container_main_games_7") {
                //roblox
                url = atob("aHR0cHM6Ly9ub3cuZ2cvYXBwcy9yb2Jsb3gtY29ycG9yYXRpb24vNTM0OS9yb2Jsb3guaHRtbA==");
              }
              if (x.id === "btn_item_container_main_games_8") {
                //retro-bowl this one is impossible to do >;( so sad
                // url = atob("");
              
              }
              if (x.id === "btn_item_container_main_games_9") {
                //cookie clicker
                url = atob("aHR0cHM6Ly9vemguZ2l0aHViLmlvL2Nvb2tpZWNsaWNrZXIv");
              }

              if (x.id === "btn_item_container_main_games_10") {
                //s.io
                url = atob("aHR0cHM6Ly9zbGl0aGVyLmlv");
              }
              if (x.id === "btn_item_container_main_games_11") {
                //cg
                url = atob("aHR0cHM6Ly9jcmFiLWdhbWUuaW8v");
              }
              if (x.id === "btn_item_container_main_games_12") {
                //mcparkour
                url = atob("aHR0cHM6Ly9odG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbS9ydnZBU01pTS8xNDYxZDQwYmI3N2Y0OGU2YmU3MjQ4OTk1OWExYWMwNC8/Z2Rfem9uZV9jb25maWc9ZXlKd1lYSmxiblJWVWt3aU9pSm9kSFJ3Y3pvdkwzZDNkeTVpWlhOMFkzSmhlbmxuWVcxbGN5NWpiMjB2SWl3aWNHRnlaVzUwUkc5dFlXbHVJam9pWW1WemRHTnlZWHA1WjJGdFpYTXVZMjl0SWl3aWRHOXdSRzl0WVdsdUlqb2lZbVZ6ZEdOeVlYcDVaMkZ0WlhNdVkyOXRJaXdpYUdGelNXMXdjbVZ6YzJsdmJpSTZabUZzYzJVc0lteHZZV1JsY2tWdVlXSnNaV1FpT25SeWRXVXNJbWh2YzNRaU9pSm9kRzFzTlM1bllXMWxaR2x6ZEhKcFluVjBhVzl1TG1OdmJTSXNJblpsY25OcGIyNGlPaUl4TGpVdU1UUWlmUSUyNTNEJTI1M0Q=");
              }
              if (x.id === "btn_item_container_main_games_13") {
                //mtpp
                url = atob("aHR0cHM6Ly9odG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbS9ydnZBU01pTS9mODA0ZDA3OWQxOWY0NGQzYjk1MWVhZDQ1ODhlOTc0YS8/Z2Rfc2RrX3JlZmVycmVyX3VybD1odHRwcyUzQSUyRiUyRnd3dy5tYXRobm9vay5jb20lMkZmdW4tZ2FtZXMtMiUyRm1vdG8teDNtLXBvb2wtcGFydHkuaHRtbCZnZF96b25lX2NvbmZpZz1leUp3WVhKbGJuUlZVa3dpT2lKb2RIUndjem92TDNkM2R5NXRZWFJvYm05dmF5NWpiMjB2Wm5WdUxXZGhiV1Z6TFRJdmJXOTBieTE0TTIwdGNHOXZiQzF3WVhKMGVTNW9kRzFzSWl3aWNHRnlaVzUwUkc5dFlXbHVJam9pYldGMGFHNXZiMnN1WTI5dElpd2lkRzl3Ukc5dFlXbHVJam9pYldGMGFHNXZiMnN1WTI5dElpd2lhR0Z6U1cxd2NtVnpjMmx2YmlJNlptRnNjMlVzSW14dllXUmxja1Z1WVdKc1pXUWlPblJ5ZFdVc0ltaHZjM1FpT2lKb2RHMXNOUzVuWVcxbFpHbHpkSEpwWW5WMGFXOXVMbU52YlNJc0luWmxjbk5wYjI0aU9pSXhMalV1TVRRaWZRJTI1M0QlMjUzRA==");
              }
              if (x.id === "btn_item_container_main_games_14") {
                //mtw
                url = atob("https://www-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s017q3e/moto-x3m-4-winter.xml");
              }
              if (x.id === "btn_item_container_main_games_15") {
                //paper.io
                url = atob("aHR0cHM6Ly9wYXBlci1pby5jb20=");
              }
              if (x.id === "btn_item_container_main_games_16") {
                //gdb
                url = atob("aHR0cHM6Ly9tajg5c3Azc2F1Mms3bGoxZWczazQwaGtlcHBndWo2ai1hLXNpdGVzLW9wZW5zb2NpYWwuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2dhZGdldHMvaWZyP3VybD1odHRwOi8vd3d3LmdzdGF0aWMuY29tL3NpdGVzLWdhZGdldHMvaWZyYW1lL2lmcmFtZS54bWwmY29udGFpbmVyPWVudGVycHJpc2Umdmlldz1kZWZhdWx0Jmxhbmc9ZW4mY291bnRyeT1BTEwmc2FuaXRpemU9MCZ2PWU4MzdjNmE5YTllZjgwZWUmbGlicz1jb3JlJnBhcmVudD1odHRwczovL3NpdGVzLmdvb2dsZS5jb20vc2l0ZS91bmJsb2NrZWRnYW1lc3d0Zi9nb29nbGUtZG9vZGxlLWJhc2ViYWxsI3VwX3Njcm9sbD1hdXRvJnVwX2lmcmFtZVVSTD1odHRwczovL3d3dy5nb29nbGUuY29tL2xvZ29zLzIwMTkvanVseTR0aDE5L3IzL2p1bHk0dGgxOS5odG1sJnN0PWUlM0RBSUhFM2NDajdOSXhROGc0QjVrdTdsMk5nZk15WGFNSnBoaUdIZkNxUXlXUjRtTiUyNTJGZEJRJTI1MkZXREM5N0ZDJTI1MkZITEZoZiUyNTJCZTM1N0NLVkR1WU80eSUyNTJCaXhkQVZYJTI1MkJrbEFOWVA0OXpaT0dEWENsb3J6NHdxT2JVMEZiNmtBdWpuWFFNb0JlJTI1MkJKdkNuZ1JEczRNc2slMjZjJTNEZW50ZXJwcmlzZSZycGN0b2tlbj04NDA5NTcwMTAxNzE4NDUzMDc0");
              }
              if (x.id === "btn_item_container_main_games_17") {
                //googlesnake
                url = atob("aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9mYng/ZmJ4PXNuYWtlX2FyY2FkZQ==");
              }
              if (x.id === "btn_item_container_main_games_18") {
                //super hot
                url = atob("aHR0cHM6Ly9zdXBlcmhvdGdhbWUuY29tL3N1cGVyaG90LXByb3RvdHlwZS1pZnJhbWU=");
              }
              if (x.id === "btn_item_container_main_games_19") {
                //yohoho.io
                url = atob("aHR0cHM6Ly95b2hvaG8uaW8v");
              }
              if (x.id === "btn_item_container_main_games_20") {
                //fnf
                url = atob("aHR0cHM6Ly93OC5zbm9raWRvLmNvbS9nYW1lcy9odG1sNS9mcmlkYXktbmlnaHQtZnVua2luLzAyODEvaW5kZXguaHRtbA==");
              }
              if (x.id === "btn_item_container_main_games_21") {
                //hole.io
                url = atob("aHR0cHM6Ly9ob2xlLWlvLmNvbS8=");
              }
              if (x.id === "btn_item_container_main_games_22") {
                //subsurf
                url = atob("aHR0cHM6Ly9maWxlcy51ZnJlZWdhbWUubmV0LzEwMjQvU3Vid2F5LVN1cmZlcnMtWnVyaWNoLw==");
              }
              if (x.id === "btn_item_container_main_games_23") {
                //stumbleguys
                url = atob("aHR0cHM6Ly9ub3cuZ2cvYXBwcy9raXRrYS1nYW1lcy83OTk5L3N0dW1ibGUtZ3V5cy5odG1s");
              }
              if (x.id === "btn_item_container_main_games_24") {
                //krunker.io
                url = atob("aHR0cHM6Ly9rcnVua2VyLmlvLw==");
              }
              if (x.id === "btn_item_container_main_games_25") {
                //roblox
                url = atob("");
              }
              if (x.id === "btn_item_container_main_games_26") {
                //roblox
                url = atob("");
              }
              if (x.id === "btn_item_container_main_games_27") {
                //roblox
                url = atob("");
              }

              document.oncontextmenu = rightClick;
              function rightClick(e) {
                e.preventDefault();
              }
              var t = window.open("about:blank");
              t.document.write(
                "<html><head> <title>Sample</title></head><body>"
              );
                         var f = t.document.createElement("iframe");
                        //  var l = t.document.createElement("h1");
                        //  var s = t.document.createElement("script");
                        //  var s2 = t.document.createElement("script");
                        //  var i = t.document.createElement("script");
                        //  var i2 = t.document.createElement("link");
                         var st = t.document.createElement("style");
                         var lf = t.document.createElement("div");
                         lf.setAttribute('id', 'load_container')
                         lf.innerHTML = ' <div id="load_container"><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"><progress id="load_progress" value="0" max="100"></progress><p id="load_message" class="large" style="color:#575e64;"></p></div>'

                         var lfs = t.document.createElement("style")
                         lfs.textContent = " #load_container {display: flex;flex-direction: column;align-items: center;justify-content: center;align-content: center;}"
                         var lfss = t.document.createElement("script");
                         lfss.src = "test_spinner.js";

                       
                         //  s.textContent = "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}function no() {document.getElementById('f').style.display='flex';document.getElementById('l').style.display='none';}";
                        //  s2.textContent = s2_content;
                        //  console.log(s2_content);
                        //  i.src = "inject.js";
                        //  i2.setAttribute("rel", "stylesheet");
                        //  i2.href = "inject.css";

                         f.setAttribute("id", "f");

                        //  lf.src = "test_spinner.html"
                        //  l.textContent = "Loading...";
                        //  l.setAttribute("id", "l");
                        //  f.setAttribute("onload", "no()");
                         st.textContent =
                           "body,html{width:100%;height:100%;padding:0;margin:0; overflow:hidden;}iframe{width:100%;height:95vh;display:none;border:none;}";
                           t.document.write("</body></html>");
                           t.document.body.append(f);
                          //  t.document.body.append(s);
                          //  t.document.body.append(s2);
                           t.document.body.append(st);
                           t.document.body.append(lf);
                           t.document.body.append(lfs);
                           t.document.body.append(lfss);



                          //  t.document.body.append(i);
                          //  t.document.body.append(i2);
                          //  t.document.body.append(l);
                          if (x.id === "btn_item_container_main_games_8") {
                            //rb
                            url = "https://agamyacapital.com/uploads/5/5/6/7/5567194/custom_themes/230188292910318641/files/rb1.html";
                            f.src = url; //do not encode
                          } else if (x.id === "btn_item_container_main_games_16") {
                            //gdb
                            url = "https://google.com/logos/2019/july4th19/r3/july4th19.html";
                            f.src = url; //do not encode
                            
                          } else {
                            // alert("test")
                            f.src = __uv$config.prefix + __uv$config.encodeUrl(url);
                          }
                          s2_content = "" //resets s2_content





                           // var f = t.document.createElement("iframe");
                           // var l = t.document.createElement("h1");
                           // var s = t.document.createElement("script");
                           // var s2 = t.document.createElement("script");
                           // var i = t.document.createElement("script");
              // var i2 = t.document.createElement("link");


              // var st = t.document.createElement("style");
              // s.textContent =
              //   "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}function no() {document.getElementById('f').style.display='flex';document.getElementById('l').style.display='none';}";
              //   s2.textContent = s2_content;
              //   console.log(s2_content);
              //   i.src = "inject.js";
              //   i2.setAttribute('rel', 'stylesheet');
              //   i2.href = "inject.css";
                

              //   f.setAttribute("id", "f");
              //   l.textContent = "Loading...";
              //   l.setAttribute("id", "l");
              //   f.setAttribute("onload", "no()");
              // st.textContent =
              //   "body,html{width:100%;height:100%;padding:0;margin:0; overflow:hidden;}iframe{width:100%;height:95vh;display:none;border:none;}";
              // t.document.write("</body></html>");
              // t.document.body.append(f);
              // t.document.body.append(s);
              // t.document.body.append(s2);
              // t.document.body.append(st);
              // t.document.body.append(i);
              // t.document.body.append(i2);
              // t.document.body.append(l);



              // f.src =
              //   __uv$config.prefix +
              //   __uv$config.encodeUrl(
              //     "https://yandex.com/games/app/182594?app-id=182594&is-united-page=1&app-id=182594&is-united-page=1#app-id=182594&catalog-session-uid=catalog-a53c7bf1-3693-58dd-8f31-b696558663e7-1661901536890-cb72&rtx-reqid=14909569931398112480&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&&origin=https%3A%2F%2Fyandex.fr&yandexapp=false&expBoxesCrypted=Qc27l_UfJjFXu_Cl5o0rxFTylpu0623g&experiments=%7B%22invalidate_games_cache_from%22%3A1654846446%2C%22homeland_currency_basket%22%3Atrue%2C%22azure_mirror%22%3A%22all%22%2C%22feed_pagination%22%3Atrue%2C%22update_excluded_categories%22%3Atrue%2C%22categories_to_exclude%22%3A%5B205%5D%2C%22adaptive_feed%22%3Atrue%2C%22permanent_redirect_to_app%22%3Atrue%2C%22update_games_turboapps_in_web%22%3Atrue%2C%22game_page_no_caption%22%3Atrue%2C%22adv_sticky_banner%22%3Atrue%7D&app-id=182594&&origin=https%3A%2F%2Fyandex.com&yandexapp=false&expBoxesCrypted=dqUjcH-h-DEv9fm7R2iVU5F1ucqcT7wVKL7qecW2CYUuhCSnUV-YZG_gwZjDOdHQ&experiments=%7B%22invalidate_games_cache_from%22%3A1654846446%2C%22homeland_currency_basket%22%3Atrue%2C%22azure_mirror%22%3A%22all%22%2C%22feed_pagination%22%3Atrue%2C%22update_excluded_categories%22%3Atrue%2C%22categories_to_exclude%22%3A%5B205%5D%2C%22adaptive_feed%22%3Atrue%2C%22permanent_redirect_to_app%22%3Atrue%2C%22update_games_turboapps_in_web%22%3Atrue%2C%22game_page_no_caption%22%3Atrue%2C%22is_google_fake_fullscreen_enabled%22%3Atrue%2C%22new_adv_manager%22%3A%22google%22%2C%22adv_sticky_banner%22%3Atrue%7D&app-id=182594"
              //   );
              // f.src = __uv$config.prefix + __uv$config.encodeUrl("https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/226112567625258737/files/index.html");


            })
                         }                      
                      
                        // document.oncontextmenu = rightClick;
                        // function rightClick(e) {
                        //   e.preventDefault();
                        // }
                        
                        
                        // const form = document.querySelector("form");
                        // const input = document.querySelector(".btn_item_container_main_apps");


// input.addEventListener("click", async (event) => {
//   event.preventDefault();
//   window.navigator.serviceWorker
//     .register("./sw.js", {
//       scope: __uv$config.prefix,
//     })
//     .then(() => {
//         console.log("eeeeeee");
//       let url = input.value.trim();
//     //   if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
//     //   else if (!(url.startsWith("https://") || url.startsWith("http://")))
//         url = "http://" + url;

//       // window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
//       // window.location.href = "https://google.com";
//       // window.location.href = __uv$config.prefix + btoa(url);

//       // window.open("about:blank", "_blank");
//       var a = window.open("about:blank", "_blank");
//       a.document.write(
//         `<iframe src=${
//           __uv$config.prefix + __uv$config.encodeUrl(url)
//         }></iframe>`
//       );
//     });
// });

// function isUrl(val = "") {
//   if (
//     /^http(s?):\/\//.test(val) ||
//     (val.includes(".") && val.substr(0, 1) !== " ")
//   )
//     return true;
//   return false;
// }

// function select(x) {
//   console.log(x);
//   console.log(x.id);

//   if (x.id === "btn_item_container_main_apps_1") {
//   }
// }






// const form = document.querySelector('form');
// const input = document.querySelector('input');

// form.addEventListener('submit', async event => {
//     event.preventDefault();
//     window.navigator.serviceWorker.register('./sw.js', {
//         scope: __uv$config.prefix
//     }).then(() => {
//         let url = input.value.trim();
//         if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
//         else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

//         // window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
//         // window.location.href = "https://google.com";
//         // window.location.href = __uv$config.prefix + btoa(url);

//         // window.open("about:blank", "_blank");
//                     var a = window.open("about:blank", "_blank");
//                     a.document.write(
//                       `<iframe src=${__uv$config.prefix + __uv$config.encodeUrl(url)}></iframe>`
//                     );

//     });
// });

// function isUrl(val = ''){
//     if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
//     return false;
// };

// function select(x) {
//   console.log(x);
//   console.log(x.id);

//   if (x.id === "btn_item_container_main_apps_1") {
//   }
// }





// const form = document.querySelector('form');
// const input = document.querySelector('input');

// form.addEventListener('submit', async event => {
//     event.preventDefault();
//     window.navigator.serviceWorker.register('./sw.js', {
//         scope: __uv$config.prefix
//     }).then(() => {
//         let url = input.value.trim();
//         if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
//         else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


//         window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
//     });
// });

// function isUrl(val = ''){
//     if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
//     return false;
// };
