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
        if (x.id === "btn_item_container_main_apps_10") {
          //insta
          url = atob("aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8=");
        }

        if (x.id === "btn_item_container_main_games_1") {
          //1v1-lol
          url = atob("aHR0cHM6Ly8xdjEubG9sLw==");
        }
        if (x.id === "btn_item_container_main_games_2") {
          //among
          url = atob(
            "aHR0cHM6Ly9ub3cuZ2cvcGxheS9pbm5lcnNsb3RoLWxsYy80MDQ3L2Ftb25nLXVz"
            // "aHR0cHM6Ly9ub3cuZ2cvYXBwcy9pbm5lcnNsb3RoLWxsYy80MDQ3L2Ftb25nLXVzLmh0bWw="
          );
              s2_content =
                "alert('if its not working try disabling your ad blocker')";
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
          s2_content =
            "alert('if its not working try disabling your ad blocker')";
        }
        if (x.id === "btn_item_container_main_games_7") {
          //roblox
          url = atob(
            // "aHR0cHM6Ly9ub3cuZ2cvYXBwcy9yb2Jsb3gtY29ycG9yYXRpb24vNTM0OS9yb2Jsb3guaHRtbA=="
            "aHR0cHM6Ly9ub3cuZ2cvcGxheS9yb2Jsb3gtY29ycG9yYXRpb24vNTM0OS9yb2Jsb3g="

            // "aHR0cHM6Ly9tYXRoc3Nwb3QuY29tLw=="
          );
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
          url = atob(
            // "aHR0cHM6Ly9odG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbS9ydnZBU01pTS8xNDYxZDQwYmI3N2Y0OGU2YmU3MjQ4OTk1OWExYWMwNC8/Z2Rfem9uZV9jb25maWc9ZXlKd1lYSmxiblJWVWt3aU9pSm9kSFJ3Y3pvdkwzZDNkeTVpWlhOMFkzSmhlbmxuWVcxbGN5NWpiMjB2SWl3aWNHRnlaVzUwUkc5dFlXbHVJam9pWW1WemRHTnlZWHA1WjJGdFpYTXVZMjl0SWl3aWRHOXdSRzl0WVdsdUlqb2lZbVZ6ZEdOeVlYcDVaMkZ0WlhNdVkyOXRJaXdpYUdGelNXMXdjbVZ6YzJsdmJpSTZabUZzYzJVc0lteHZZV1JsY2tWdVlXSnNaV1FpT25SeWRXVXNJbWh2YzNRaU9pSm9kRzFzTlM1bllXMWxaR2x6ZEhKcFluVjBhVzl1TG1OdmJTSXNJblpsY25OcGIyNGlPaUl4TGpVdU1UUWlmUSUyNTNEJTI1M0Q="
            "aHR0cHM6Ly9odG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbS9ydnZBU01pTS8xNDYxZDQwYmI3N2Y0OGU2YmU3MjQ4OTk1OWExYWMwNC9pbmRleC5odG1sP2dkX3pvbmVfY29uZmlnPWV5SndZWEpsYm5SVlVrd2lPaUpvZEhSd2N6b3ZMM2QzZHk1bmIyZDVMbU52YlM4aUxDSndZWEpsYm5SRWIyMWhhVzRpT2lKbmIyZDVMbU52YlNJc0luUnZjRVJ2YldGcGJpSTZJbWR2WjNrdVkyOXRJaXdpYUdGelNXMXdjbVZ6YzJsdmJpSTZabUZzYzJVc0lteHZZV1JsY2tWdVlXSnNaV1FpT25SeWRXVXNJbWh2YzNRaU9pSm9kRzFzTlM1bllXMWxaR2x6ZEhKcFluVjBhVzl1TG1OdmJTSXNJblpsY25OcGIyNGlPaUl4TGpVdU1UTWlmUSUyNTNEJTI1M0Q="
          );
        }
        if (x.id === "btn_item_container_main_games_13") {
          //mtpp
          url = atob(
            "aHR0cHM6Ly9odG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbS9ydnZBU01pTS9mODA0ZDA3OWQxOWY0NGQzYjk1MWVhZDQ1ODhlOTc0YS8/Z2Rfc2RrX3JlZmVycmVyX3VybD1odHRwcyUzQSUyRiUyRnd3dy5tYXRobm9vay5jb20lMkZmdW4tZ2FtZXMtMiUyRm1vdG8teDNtLXBvb2wtcGFydHkuaHRtbCZnZF96b25lX2NvbmZpZz1leUp3WVhKbGJuUlZVa3dpT2lKb2RIUndjem92TDNkM2R5NXRZWFJvYm05dmF5NWpiMjB2Wm5WdUxXZGhiV1Z6TFRJdmJXOTBieTE0TTIwdGNHOXZiQzF3WVhKMGVTNW9kRzFzSWl3aWNHRnlaVzUwUkc5dFlXbHVJam9pYldGMGFHNXZiMnN1WTI5dElpd2lkRzl3Ukc5dFlXbHVJam9pYldGMGFHNXZiMnN1WTI5dElpd2lhR0Z6U1cxd2NtVnpjMmx2YmlJNlptRnNjMlVzSW14dllXUmxja1Z1WVdKc1pXUWlPblJ5ZFdVc0ltaHZjM1FpT2lKb2RHMXNOUzVuWVcxbFpHbHpkSEpwWW5WMGFXOXVMbU52YlNJc0luWmxjbk5wYjI0aU9pSXhMalV1TVRRaWZRJTI1M0QlMjUzRA=="
          );
        }
        if (x.id === "btn_item_container_main_games_14") {
          //mtw
          url = atob(
            "aHR0cHM6Ly93d3ctc2l0ZXMtb3BlbnNvY2lhbC5nb29nbGV1c2VyY29udGVudC5jb20vZ2FkZ2V0cy9pZnI/dXJsPWh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS9zaXRlL3MwMTdxM2UvbW90by14M20tNC13aW50ZXIueG1s"
          );
        }
        if (x.id === "btn_item_container_main_games_15") {
          //paper.io
          url = atob("aHR0cHM6Ly9wYXBlci1pby5jb20=");
        }
        if (x.id === "btn_item_container_main_games_16") {
          //gdb
          url = atob(
            "aHR0cHM6Ly9tajg5c3Azc2F1Mms3bGoxZWczazQwaGtlcHBndWo2ai1hLXNpdGVzLW9wZW5zb2NpYWwuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2dhZGdldHMvaWZyP3VybD1odHRwOi8vd3d3LmdzdGF0aWMuY29tL3NpdGVzLWdhZGdldHMvaWZyYW1lL2lmcmFtZS54bWwmY29udGFpbmVyPWVudGVycHJpc2Umdmlldz1kZWZhdWx0Jmxhbmc9ZW4mY291bnRyeT1BTEwmc2FuaXRpemU9MCZ2PWU4MzdjNmE5YTllZjgwZWUmbGlicz1jb3JlJnBhcmVudD1odHRwczovL3NpdGVzLmdvb2dsZS5jb20vc2l0ZS91bmJsb2NrZWRnYW1lc3d0Zi9nb29nbGUtZG9vZGxlLWJhc2ViYWxsI3VwX3Njcm9sbD1hdXRvJnVwX2lmcmFtZVVSTD1odHRwczovL3d3dy5nb29nbGUuY29tL2xvZ29zLzIwMTkvanVseTR0aDE5L3IzL2p1bHk0dGgxOS5odG1sJnN0PWUlM0RBSUhFM2NDajdOSXhROGc0QjVrdTdsMk5nZk15WGFNSnBoaUdIZkNxUXlXUjRtTiUyNTJGZEJRJTI1MkZXREM5N0ZDJTI1MkZITEZoZiUyNTJCZTM1N0NLVkR1WU80eSUyNTJCaXhkQVZYJTI1MkJrbEFOWVA0OXpaT0dEWENsb3J6NHdxT2JVMEZiNmtBdWpuWFFNb0JlJTI1MkJKdkNuZ1JEczRNc2slMjZjJTNEZW50ZXJwcmlzZSZycGN0b2tlbj04NDA5NTcwMTAxNzE4NDUzMDc0"
          );
        }
        if (x.id === "btn_item_container_main_games_17") {
          //googlesnake
          url = atob(
            "aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9mYng/ZmJ4PXNuYWtlX2FyY2FkZQ=="
          );
        }
        if (x.id === "btn_item_container_main_games_18") {
          //super hot
          url = atob(
            "aHR0cHM6Ly9zdXBlcmhvdGdhbWUuY29tL3N1cGVyaG90LXByb3RvdHlwZS1pZnJhbWU="
          );
        }
        if (x.id === "btn_item_container_main_games_19") {
          //yohoho.io
          url = atob("aHR0cHM6Ly95b2hvaG8uaW8v");
        }
        if (x.id === "btn_item_container_main_games_20") {
          //fnf
          url = atob(
            "aHR0cHM6Ly93OC5zbm9raWRvLmNvbS9nYW1lcy9odG1sNS9mcmlkYXktbmlnaHQtZnVua2luLzAyODEvaW5kZXguaHRtbA=="
          );
        }
        if (x.id === "btn_item_container_main_games_21") {
          //hole.io
          url = atob("aHR0cHM6Ly9ob2xlLWlvLmNvbS8=");
        }
        if (x.id === "btn_item_container_main_games_22") {
          //subsurf
          url = atob(
            "aHR0cHM6Ly9maWxlcy51ZnJlZWdhbWUubmV0LzEwMjQvU3Vid2F5LVN1cmZlcnMtWnVyaWNoLw=="
          );
        }
        if (x.id === "btn_item_container_main_games_23") {
          //stumbleguys
          url = atob(
            // "aHR0cHM6Ly9ub3cuZ2cvYXBwcy9raXRrYS1nYW1lcy83OTk5L3N0dW1ibGUtZ3V5cy5odG1s"
            "aHR0cHM6Ly9ub3cuZ2cvcGxheS9raXRrYS1nYW1lcy83OTk5L3N0dW1ibGUtZ3V5cw=="
          );
        }
        if (x.id === "btn_item_container_main_games_24") {
          //krunker.io
          url = atob("aHR0cHM6Ly9rcnVua2VyLmlvLw==");
                    s2_content =
                      "alert('This game may not work. It is very slow to load and takes up a lot of RAM.')";
        }
        if (x.id === "btn_item_container_main_games_25") {
          //geodash
          url = atob(
            "aHR0cHM6Ly9ub3cuZ2cvcGxheS9yb2J0b3AtZ2FtZXMvMzQ2NS9nZW9tZXRyeS1kYXNoLWxpdGU="
          );
        }
        if (x.id === "btn_item_container_main_games_26") {
          //pubg
          url = atob("aHR0cHM6Ly9ub3cuZ2cvcGxheS9wcm94aW1hLWJldGEvMjYwOS9wdWJnLW1vYmlsZS1yZXNpc3RhbmNl");
        }
        if (x.id === "btn_item_container_main_games_27") {
          //basketbros
          url = atob("aHR0cHM6Ly9iYXNrZXRicm9zLmlvLw==");
        }
        if (x.id === "btn_item_container_main_games_28") {
          //basketballlegends
          url = atob("aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3MlBCQ3hnMG9yT0JKVnhGd2p3cEo1TnQzUjZvUGg0Yk5udWppQV9kWUtPTVhJYTdrL2V4ZWM=");
        }
        if (x.id === "btn_item_container_main_games_29") {
          //tanukisunset
          url = atob("aHR0cHM6Ly92NnA5ZDl0NC5zc2wuaHdjZG4ubmV0L2h0bWwvMTc1NjAwOS9XZWJHTC9pbmRleC5odG1s");
        }
        if (x.id === "btn_item_container_main_games_30") {
          //driftboss
          url = atob("aHR0cHM6Ly93d3cubWF0aHBsYXlncm91bmQuY29tL2RyaWZ0LWJvc3MtdjMvaW5kZXguaHRtbA==");
        }
        if (x.id === "btn_item_container_main_games_31") {
          //vex4
          url = atob("aHR0cHM6Ly90b28tYWR2YW5jZWQtZm9yLXNvY2lldHkuZ3EvdG1tLXZleDQv");
        }
        if (x.id === "btn_item_container_main_games_32") {
          //vex5
          url = atob("aHR0cHM6Ly9hZHZhbmNlZC1jaGFubmVsZXIuMDIuZ3otYXNzb2NpYXRlcy5jb20vP3Q9dGFtLXZleC01");
        }
        if (x.id === "btn_item_container_main_games_33") {
          //vex6
          url = atob(
            // "aHR0cHM6Ly9odG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbS80OTI1ZTEyNTc0MzY0MTIxYTQ4YzYxYzM1ZjY0OWMzNi8="
            "aHR0cHM6Ly9odG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbS9ydnZBU01pTS80OTI1ZTEyNTc0MzY0MTIxYTQ4YzYxYzM1ZjY0OWMzNi9pbmRleC5odG1sP2dkX3Nka19yZWZlcnJlcl91cmw9aHR0cHMlM0ElMkYlMkZ2ZXg1LmlvJTJGdmV4LTYmZ2Rfem9uZV9jb25maWc9ZXlKd1lYSmxiblJWVWt3aU9pSm9kSFJ3Y3pvdkwzWmxlRFV1YVc4dmRtVjRMVFlpTENKd1lYSmxiblJFYjIxaGFXNGlPaUoyWlhnMUxtbHZJaXdpZEc5d1JHOXRZV2x1SWpvaWRtVjROUzVwYnlJc0ltaGhjMGx0Y0hKbGMzTnBiMjRpT21aaGJITmxMQ0pzYjJGa1pYSkZibUZpYkdWa0lqcDBjblZsTENKb2IzTjBJam9pYUhSdGJEVXVaMkZ0WldScGMzUnlhV0oxZEdsdmJpNWpiMjBpTENKMlpYSnphVzl1SWpvaU1TNDFMakV6SW4wJTI1M0Q="
          );
        }
        if (x.id === "btn_item_container_nvidia_games_1") {
          //fortnite
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9NDZiZmFiMDYtZDg2NC00NjVkLTllNTYtMmQ5ZTQ1Y2RlZTBhJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfNzdmY2Y5OTgtODVmNi00YmUwLWJhZTktNDNhODlhZDc1YWI3"
          );
        }
        if (x.id === "btn_item_container_nvidia_games_2") {
          //rocketleague
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9OWJjYmY1YjQtYzQ2MC00MDkxLTkzMWMtYTVhMmExZmQ5Y2MyJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfYWFkYThjM2QtNjgyMy00MmU3LTkzMTAtODhlYzhkNDU1NmE5"
          );
        }
        if (x.id === "btn_item_container_nvidia_games_3") {
          //apexlegends
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9Y2IyYjFiNWYtNTRiYS00NWZkLTk4MzktOTZiYmZlMTM3NmNkJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfMmNiMmE3OTEtNTI5ZC00ODNmLWE5MDUtYTc2OWFiN2YwMWNi"
          );
        }
        if (x.id === "btn_item_container_nvidia_games_4") {
          //cyberpunk2077
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9ZTVmYzhhOTYtMmNkYS00OWVmLWJkMTMtNTEzYmRjNjgwNDViJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfMTcxNGI1NDktZTY0Yy00OGZlLWI3YjYtYWRjNDg1Zjc4ZTI2"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_5") {
          //starwarssquadrons
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9ZWIxOWRhMzItOGQ2ZS00ZjZkLWE3MzktZWQxN2NiNjhkZmIyJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfZjY4YmQ3YjAtNmFmYS00Yjg0LTg2M2YtYjBmZDUzYTkwYzNj"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_6") {
          //payday2
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9Y2YyM2U3N2YtMTRiNi00ZDJjLWEwMTItOGEwNmJhYmJhZDQyJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfNzY2NDcxMDAtMzI1My00M2M2LTkyOGEtZThiNDVmODNlY2Vh"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_7") {
          //Assassin'sCreedValhalla
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9NGFjNDc1NDYtNDAyMy00YWU3LTk4ZDEtNjBjOThjOWRiNzUyJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfMjYwNzNiZWYtMWJhOC00MzJmLWIyZjItOTJiNzdiYjExZDdh"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_8") {
          //battlefield5
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9NjE5YjM0NjEtM2U3ZS00Yjg4LTkwODctYzA5ZTllMGI4YzJlJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfNWUyYzBmNDMtYjQ3NS00NjkyLWI2OGQtNzNhNDMzMTVhODNh"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_9") {
          //superhot2
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9YmU1MGY5MjAtZGJjMy00MWZjLThjODMtYzk0OGI4Yjc3NmM2Jmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfZjJjYTY0NmMtMjMzOC00ZGYzLWJkYWEtMGExNzk2NmYyN2Mz"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_10") {
          //warthunder
          //! add all the otehr war thunde tank games and totaly epic battle simulator game
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9OTU2YjRmZjAtNGZhNy00M2NhLWE1NjUtYTU1MjcyMzk3N2JiJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfOTYyMDJlY2YtMGFkNS00M2VhLTg3MDgtZmExYjI4MDQ3M2Jj"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_11") {
          //wows
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9NDMxMzVhMzgtNmQ3My00NTZmLWI0ZTAtNjNjZGY0OGQ5ZjM0Jmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfYTg1NjAzYmEtOWZmNy00NmE5LThlMWEtZTUwMDVmZWE3NTEx"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_12") {
          //wowp
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9MjUxNDU5NGUtZTUxYi00ZGE3LWFjMzEtYzhlMDIyYTE2MThjJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfYWE5N2RiNTgtNGY1NC00NTdmLTgwMDUtNTRlOGYyZjEwYTk5"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_13") {
          //wot
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9OGMwYzA5ZWUtY2JmMC00YjJjLTk4NzMtMzQyYTJjYjc2ZTQ4Jmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfZThmZWY3OTItMjdiNC00YTc4LTkyNzUtYWUwYzFjZGY4NGI0"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_14") {
          //tabs
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9ZmJjYWYzZGQtYWJlZi00ZWQyLTg1NTAtMGZkZGQxYTAxZjdjJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfMTliZGI5YTQtOTEwZS00N2VlLTk4YTctNjRlMGMxNDA4YmI3"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_15") {
          //tcr6
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9MWRkMDdkNDctNjYwMS00MmY3LTgwZTktZTRkOGRiMDhlYTFiJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfYjllMzQxNDAtNGE0ZC00MTA5LTk5MDEtYmQ2MDAxNDE2YTVi"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_16") {
          //csgo
          url = atob(
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9ZGNmZjljMDMtNTk3MS00OTkyLWFiN2QtMGY2NTVlZjBiZmUyJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfYjZjYjdlNDQtZDFkNC00MzY4LWIxNTctZDlmZmUxNWE0YTBj"
          );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_17") {
          //terraria
          url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9MDllYWIwNzUtOTVlOS00NTcyLTk4YWUtMDRmOTRiYzhhNThlJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfNGU4NTJkMzItY2JmMy00MTA5LTk0NDYtMTgxN2JjYTM4ZjQz");
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_18") {
          //helloneighbor
          url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9YjI0MDM0MmUtZjhkNi00ZmZhLWJkYTctODY1NjNjZWQyN2UyJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfZDMzNGIwNDgtNDRhZi00NjZhLTk3MTktZWIwYTk4YWRmYTQw");
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_19") {
          //farcry6
          url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9ZjkwMzE4YzAtMzI0Mi00OThiLTgyNTktMGY3MjA1YTFhNTAxJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfZTBlMmM0MTMtYjY3MC00OGQwLTg1M2ItZGVhMzUzMzMxNWU3");
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_20") {
          //fs15
          url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9YjA4NWNjYTQtOGIwNy00Yjc2LTg0MzAtNTIwOGM5MDkzOWFiJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfMzc3MzcwZWYtZTliNi00N2FlLThkMTMtMTYzZGIzNTY5OThj");
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_21") {
          //tft
          url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9NDA1MTI1MzQtYWQyNy00YTEyLWFmYTctNmZjNDEyMjg4MDcyJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfNTQ3YjIwNjQtMTNhZC00YmE1LWI5MjgtZDI3NzBhY2NkZGYx");
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_22") {
          //lol
          url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9YjBkZTVkZmYtY2YzNi00ZDk3LTk2ODgtOTY0YTE5MmJjNDAwJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfMDRjZWI3MGEtOGQ2Yi00OWYyLTk5NzktZDFhNmMxOTE0M2Yw");
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_23") {
          //genshinimpact
          url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9NjRjYzllOTItNmFkNi00OWI5LWEzMzUtOGE1NzliYTdiNDM0Jmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfMzNjYjNhOWItMjY5Yi00ODc2LTg1ZmEtODY3YmY0ZDQzYWM2");
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_24") {
          //cuphead
          url = atob(
            // "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9NDRhNDU1ZTYtYjYwZS00MDE2LWI2MmEtZDBjMTMwNTJjOGMyJmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfYzcyOGFhNTQtNTg5MS00ZmU1LWE4MGQtNTM0NjAyOGQ2Y2Zm"
            "aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL21hbGwvIy9kZWVwbGluaz9nYW1lLWlkPTQ0YTQ1NWU2LWI2MGUtNDAxNi1iNjJhLWQwYzEzMDUyYzhjMg=="
            );
          s2_content = "alert('Some of these GeForce Now games cost money. So you would need to hook them up to your already existing account')";
        }
        if (x.id === "btn_item_container_nvidia_games_25") {
          //geforcenowsignup
          url = atob(
            // "aHR0cHM6Ly93d3cubnZpZGlhLmNvbS9lbi11cy9nZWZvcmNlLW5vdy8jcHJvZHVjdC1tYXRyaXgtcm9vdA=="
            "aHR0cHM6Ly93d3cubnZpZGlhLmNvbS9lbi11cy9jaGVja291dC9jYXJ0P3Byb2R1Y3RzPTEwMDAsMTAwMSZ2PTQ="
          );
        }
        if (x.id === "btn_item_container_nvidia_games_26") {
          //geforcenowlogin
          url = atob(
            "aHR0cHM6Ly93d3cubnZpZGlhLmNvbS9lbi11cy9hY2NvdW50L2VkaXQtcHJvZmlsZS8="
          );
        }
        if (x.id === "btn_item_container_nvidia_games_27") {
          //rust
          url = atob("aHR0cHM6Ly9wbGF5LmdlZm9yY2Vub3cuY29tL2dhbWVzP2dhbWUtaWQ9ZWYzNGEwNTctOGZmMS00MTI5LTllOWItMzg3ZTY3Y2VjZGE1Jmxhbmc9ZW5fVVMmYXNzZXQtaWQ9MDFfNjJmZjViOGYtNTZjNS00NjQ0LWI5ZjQtNDNiODNmYTM3NmQw");
        }
        if (x.id === "btn_item_container_nvidia_games_28") {
          //scrapmetal
          url = atob("aHR0cHM6Ly93d3cuZ2FtZWFydGVyLmNvbS9nYW1lL3NjcmFwLW1ldGFsLw==");
        }
        if (x.id === "btn_item_container_main_games_62") {
          //roblox
          url = atob("");
        }
        if (x.id === "btn_item_container_main_games_63") {
          //roblox
          url = atob("");
        }
        if (x.id === "btn_item_container_main_games_64") {
          //roblox
          url = atob("");
        }
        if (x.id === "btn_item_container_main_games_65") {
          //roblox
          url = atob("");
        }
        if (x.id === "btn_item_container_main_games_66") {
          //roblox
          url = atob("");
        }




        document.oncontextmenu = rightClick;
        function rightClick(e) {
          e.preventDefault();
        }
        var t = window.open("about:blank");
        t.document.write(
          '<html><head>  <script>function fullscreen() {if (document.getElementById("f").requestFullscreen) {document.getElementById("f").requestFullscreen();}} function reload() {document.getElementById("f").src=document.getElementById("f").src}</script><link rel="shrotcut icon" id="shortCutIcon" href="https://ssl.gstatic.com/classroom/favicon.png">  <title>Classes</title>      <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></head><body>'
        );
// function fullscreen() {if (document.getElementById("f").requestFullscreen) {document.getElementById("f").requestFullscreen();}}

        var f = t.document.createElement("iframe");
        //  var l = t.document.createElement("h1");
        //  var s = t.document.createElement("script");
         var s2 = t.document.createElement("script");
        //  var i = t.document.createElement("script");
        //  var i2 = t.document.createElement("link");
        var st = t.document.createElement("style");
        var style = t.document.createElement("link");

        var lf = t.document.createElement("div");
        var nb = t.document.createElement("div");
        var nbscript = t.document.createElement("script");

        nb.innerHTML +=
          '                    <div class="fullscreen_btn_container"><button class="nav_btn" id="fullscreen_btn" onclick="fullscreen()">Full-Screen</button></div><div class="reload_btn_container"><button class="nav_btn" id="reload_btn" onclick="reload()">RELOAD (click me if games don\'t work)</button></div>               <div id="title_stealth_inner_container"><h1 class="large">Stealth Mode</h1><div id="stealth_options_container_inner"><div id="stealth_option_d"><img src="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico"onclick="pgTitleD()" class="stealth_option_img"></div><div id="stealth_option_e"><img src="https://ssl.gstatic.com/classroom/favicon.png" onclick="pgTitleE()" class="stealth_option_img"></div><div id="stealth_option_c"><img src="https://ssl.gstatic.com/docs/presentations/images/favicon5.ico" onclick="pgTitleC()" class="stealth_option_img"></div><div id="stealth_option_a"><img src="https://www.google.com/a/cpanel/k12.prosper-isd.net/images/favicon.ico" onclick="pgTitleA()" class="stealth_option_img"></div><div id="stealth_option_b"><img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" onclick="pgTitleB()" class="stealth_option_img"></div><iframe src="hireme.html" id="hireme_iframe"></iframe></div></div>';
        nbscript.textContent =
          'function fullscreen() {if (document.getElementById("f").requestFullscreen) {document.getElementById("f").requestFullscreen();}} var shortcuticon = document.getElementById("shortCutIcon");function pgTitleA() {document.title = "Inbox (4) - Gmail";var shortcuticon = document.getElementById("shortCutIcon");shortcuticon.href ="https://www.google.com/a/cpanel/k12.prosper-isd.net/images/favicon.ico";}function pgTitleB() {document.title = "My Drive - Google Drive";var shortcuticon = document.getElementById("shortCutIcon");shortcuticon.href ="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";}function pgTitleC() {document.title = "Google Slides";var shortcuticon = document.getElementById("shortCutIcon");shortcuticon.href ="https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";}function pgTitleD() {var shortcuticon = document.getElementById("shortCutIcon");document.title = "Google Docs";shortcuticon.href ="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";}function pgTitleE() {document.title = "Classes";var shortcuticon = document.getElementById("shortCutIcon");document.getElementById("shortCutIcon").href ="https://ssl.gstatic.com/classroom/favicon.png";}';
//TODO: finish fullscreen button 
//! do it!!!!!!
        lf.setAttribute("id", "load_container");
        lf.innerHTML =
          ' <div id="load_container"><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"><progress id="load_progress" value="0" max="100"></progress><p id="load_message" class="large" style="color:#575e64;"></p></div>';

        var lfs = t.document.createElement("style");
        lfs.textContent =
          " #load_container {display: flex;flex-direction: column;align-items: center;justify-content: center;align-content: center;}";
        var lfss = t.document.createElement("script");
        lfss.src = "test_spinner.js";

        //  s.textContent = "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}function no() {document.getElementById('f').style.display='flex';document.getElementById('l').style.display='none';}";
         s2.textContent = s2_content;
         console.log(s2_content);
        //  i.src = "inject.js";
        //  i2.setAttribute("rel", "stylesheet");
        //  i2.href = "inject.css";

        style.setAttribute("rel", "stylesheet");
        style.href = "index.css";

        nb.setAttribute("id", "nav_bar_container");

        f.setAttribute("id", "f");

        //  lf.src = "test_spinner.html"
        //  l.textContent = "Loading...";
        //  l.setAttribute("id", "l");
        //  f.setAttribute("onload", "no()");
        st.textContent = //change height: 100% to height: 95vw to help with nav bar     then 92.5 then 91 did some test on slope trust then just 85
          "h1,h2,h3,p {margin: 0;}.large {font-size: 150%;}body,html{width:100%;height:100%;padding:0;margin:0; overflow:hidden;}iframe{width:100%;height:85vh;display:none;border:none;}#nav_bar_container{width: 100%;height: 5vw;background-color: grey;display: flex;justify-content: center;align-items: center;align-content: center;flex-wrap: nowrap;flex-direction: row;grid-gap: 25px;}#stealth_options_container_inner {display: flex;flex-direction: row;flex-wrap: nowrap;align-content: center;align-items: center;justify-content: center;grid-gap: 5px;}.stealth_option_img {cursor: pointer;width: 24px;height: 24px;}#hireme_iframe {width: 1px;height: 1px;resize: both;} ";
        t.document.write("</body></html>");
        t.document.body.append(nb);
        t.document.body.append(f);
        //  t.document.body.append(s);
         t.document.body.append(s2);
        t.document.body.append(st);
        t.document.body.append(lf);
        t.document.body.append(lfs);
        t.document.body.append(lfss);
        t.document.body.append(style);
        t.document.body.append(nbscript);



        //  t.document.body.append(i);
        //  t.document.body.append(i2);
        //  t.document.body.append(l);
        if (x.id === "btn_item_container_main_games_8") {
          //rb
          url =
            "https://agamyacapital.com/uploads/5/5/6/7/5567194/custom_themes/230188292910318641/files/rb1.html";
          f.src = url; //do not encode
        } else if (x.id === "btn_item_container_main_games_16") {
          //gdb
          url = "https://google.com/logos/2019/july4th19/r3/july4th19.html";
          f.src = url; //do not encode
        } else if (x.id === "btn_item_container_main_games_test") {
          url = "https://www.nvidia.com/en-us/geforce-now/";
          //f.src = url; //do not encode
          f.src = __uv$config.prefix + __uv$config.encodeUrl(url);

        } else
        {
        // if (x.id === "btn_item_container_main_games_7") {
        //   //gd
        //   url = "https://mathsspot.com/";
        //   f.src = url; //do not encode
        // } else {
          // alert("test")
          f.src = __uv$config.prefix + __uv$config.encodeUrl(url);
          console.log(__uv$config.decodeUrl(url));
        }
        s2_content = ""; //resets s2_content














        // var f = t.document.createElement("iframe");
        // var l = t.document.createElement("h1");
        // var s = t.document.createElement("script");
        // var s2 = t.document.createElement("script");
        // var i = t.document.createElement("script");
        // var i2 = t.document.createElement("link");

        // var st = t.document.createElement("style");
        // s.textContent =
        //   "document.oncontextmenu = rightClick;function rightClick(e) {e.preventDefault();}function no() {document.getElementById('f').style.display='flex';document.getElementById('l').style.display='none';}";
          // s2.textContent = s2_content;
          // console.log(s2_content);
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
