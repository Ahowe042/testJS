function changeFormat() {
  document.getElementById("formatP2").innerHTML = "This is the newly formatted paragraph, complete with color change, font change, and <b>bolded letters.</b>"
  document.getElementById("formatD2").innerHTML = "<ol> <li>Whoa</li> <li>This</li> <li>Totally</li> <li>Worked!</li> </ol>"
}

function revertFormat() {
  document.getElementById("formatP2").innerHTML = "This is the original paragraph. As you can see, no special formatting has been applied to this paragraph."
  document.getElementById("formatD2").innerHTML = "<ul id=\"formatL2\" style=\"list-style-type:disc\"> <li>Lions</li> <li>Tigers</li> <li>Bears</li> <li>Oh my!</li> </ul>"
}
