// about page 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// landing page button

document.querySelector(".action__btns").addEventListener("click", function (e) {
  if (e.target.innerText == "Hire me" || e.target.innerText == "Resume") {
    var link2 = document.createElement("a");
    if (e.target.innerText == "Hire me") {
      link2.href = "https://www.linkedin.com/in/akash-singh-818345222/";
    }
    else {
      link2.href = "https://drive.google.com/file/d/1DYRcAvGdqqCWGfdNtOqMkyNiMbXBAsIa/view?usp=drivesdk";
      link2.download = "portfolio";
    }
    link2.target = "_blank";
    link2.style.color = "#fff";
    link2.click();
  }
});

// toggle button
let isMenuChecked = false;
let navButton = document.querySelector("#check");
let menuList = document.querySelector(".list");
navButton.addEventListener("click", function () {
  if (isMenuChecked == false) {
    menuList.style.left = "0%";
    isMenuChecked = true;
  }
  else {
    menuList.style.left = "-100%";
    isMenuChecked = false;
  }
})

menuList.addEventListener("click", (event) => {
  if (event.target.localName == "a" && isMenuChecked == true) {
    menuList.style.left = "-100%";
    isMenuChecked = false;
  }
})