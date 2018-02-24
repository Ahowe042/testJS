
// This function (called by the OLD Format button) reverts the paragraph text and styling to its original form.
// The list numbering style is also reverted to "I" for Roman Numerals
function revertFormat() {
  document.getElementById("formatP2").innerHTML = "This is the original paragraph. As you can see, no special formatting has been applied to this paragraph."
  document.getElementById("formatP2").style = "color:black; font-family:serif"
  document.getElementById("formatL2").type = "I"
}

// This function (called by the NEW Format button) completely changes the paragraph text along with its font styling.
// It also changes the ordered list numbering style to "A", which is alphabetical.
function changeFormat() {
  document.getElementById("formatP2").innerHTML = "This is the newly formatted paragraph, complete with color change, font change, and <b>bolded letters.</b> Also, notice how the list below changed as well."
  document.getElementById("formatP2").style = "color:blue; font-family:sans-serif"
  document.getElementById("formatL2").type = "A"
}
