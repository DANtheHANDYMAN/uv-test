
var nav_bar_container = document.createElement("div");
nav_bar_container.setAttribute("class", "nav_bar_container");
var nav_bar_inner_container = document.createElement("div");
nav_bar_inner_container.setAttribute("class", "nav_bar_inner_container");

var nav_bar_item1 = document.createElement("div");
nav_bar_item1.setAttribute("class", "nav_bar_item");
var nav_bar_item2 = document.createElement("div");
nav_bar_item2.setAttribute("class", "nav_bar_item");
var nav_bar_item3 = document.createElement("div");
nav_bar_item3.setAttribute("class", "nav_bar_item");
var nav_bar_item4 = document.createElement("div");
nav_bar_item4.setAttribute("class", "nav_bar_item");
var nav_bar_item5 = document.createElement("div");
nav_bar_item5.setAttribute("class", "nav_bar_item");


nav_bar_inner_container.append(
  nav_bar_item1,
  nav_bar_item2,
  nav_bar_item3,
  nav_bar_item4,
  nav_bar_item5
);
nav_bar_container.append(nav_bar_inner_container);
document.body.append(nav_bar_container);