const toggle = document.querySelector(".toggle input");

document.getElementById("monthly").style.color = "#47587d";
document.getElementById("yearly").style.color = "#bdbec4";
document.getElementById("first-year-tablet").style.display = "none";
document.getElementById("second-year-tablet").style.display = "none";
document.getElementById("third-year-tablet").style.display = "none";

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    document.getElementById("yearly").style.color = "#47587d";
    document.getElementById("monthly").style.color = "#bdbec4";
    document.getElementById("first-year").style.display = "block";
    document.getElementById("second-year").style.display = "block";
    document.getElementById("third-year").style.display = "block";
    document.getElementById("first-month").style.display = "none";
    document.getElementById("second-month").style.display = "none";
    document.getElementById("third-month").style.display = "none";

    document.getElementById("first-year-tablet").style.display = "block";
    document.getElementById("second-year-tablet").style.display = "block";
    document.getElementById("third-year-tablet").style.display = "block";
    document.getElementById("first-month-tablet").style.display = "none";
    document.getElementById("second-month-tablet").style.display = "none";
    document.getElementById("third-month-tablet").style.display = "none";
  } else {
    document.getElementById("yearly").style.color = "#bdbec4";
    document.getElementById("monthly").style.color = " #47587d";
    document.getElementById("first-year").style.display = "none";
    document.getElementById("second-year").style.display = "none";
    document.getElementById("third-year").style.display = "none";
    document.getElementById("first-month").style.display = "block";
    document.getElementById("second-month").style.display = "block";
    document.getElementById("third-month").style.display = "block";

    document.getElementById("first-year-tablet").style.display = "none";
    document.getElementById("second-year-tablet").style.display = "none";
    document.getElementById("third-year-tablet").style.display = "none";
    document.getElementById("first-month-tablet").style.display = "block";
    document.getElementById("second-month-tablet").style.display = "block";
    document.getElementById("third-month-tablet").style.display = "block";
  }
});
