
// This function (called by the Old Format button) reverts the paragraph text and styling to its original form.
// The list numbering style is also reverted to "I" for Roman Numerals
function revertFormat() {
  document.getElementById("formatP2").innerHTML = "This is the original paragraph. As you can see, no <br>special formatting has been applied to this paragraph."
  document.getElementById("formatP2").style = "color:black; font-family:sans-serif"
  document.getElementById("formatL2").style = "color:black; font-family:sans-serif"
  document.getElementById("formatL2").type = "I"
}

// This function (called by the New Format button) completely changes the paragraph text along with its font styling.
// It also changes the ordered list numbering style to "A", which is alphabetical.
function changeFormat() {
  document.getElementById("formatP2").innerHTML = "This is the newly formatted paragraph, complete with <br>color change, font change, and <b>bolded letters.</b> Also, <br>notice how the list below changed as well."
  document.getElementById("formatP2").style = "color:#6600cc; font-family:serif"
  document.getElementById("formatL2").style = "color:#6600cc; font-family:serif"
  document.getElementById("formatL2").type = "A"
}

// This function (called by the Layout 1 button) renders CSS code which causes the navigation bar to appear on the left hand side of the page.
function transformPage1() {
  document.getElementById("nav-bar").style = "height: 100%; width: 130px; position: fixed; z-index: 1; top: 0px; left: 0px; background: #ffff66; padding: 10px 0; font-family: Helvetica"

// This chunk calls any elements with a certain class name and modifies their CSS style
  var x = document.getElementsByClassName("nav-item");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style = "padding: 6px 8px 6px 16px; text-decoration: none; font-size: 22px; color: #0066cc; display: block"
  }
}

// This function (called by the Layout 2 button) renders CSS code which causes the navigation bar to appear at the top of the page.
function transformPage2() {
  document.getElementById("nav-bar").style = "height: 30px; width: 100%; position: fixed; z-index: 1; top: 0px; left: 0px; background: #ffff66; padding: 10px 0; font-family: Helvetica"

// This chunk calls any elements with a certain class name and modifies their CSS style
  var x = document.getElementsByClassName("nav-item");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style = "padding: 30px 8px 6px 20px; text-decoration: none; font-size: 22px; color: #0066cc; display: inline"
  }
}

// This function utilizes the browser window prompt to capture a user's name, then output it using a variable
function displayName() {
  var uName = prompt("Please enter your name", "Darth Vader");

  if (uName === null || uName === "") {
    alert("Please enter your name for a pleasant greeting. :)");
  } else {
    alert("Hello, " + uName + ", it is nice to meet you!");
  }
}

// This function utilizes the browser window prompt to capture two values, then addes them together and displays the output
function doMath() {
  var firstNumStr = prompt("Please enter the first number to be added", 1);
  var secNumStr = prompt("Please enter the second number to be added", 1);

  var firstNum = parseInt(firstNumStr);
  var secNum = parseInt(secNumStr);

  if (isNaN(firstNum) || isNaN(secNum)) {
    alert("Nice try! You need to enter two valid numbers!");
  } else {
    alert(firstNum + secNum);
  }
}
