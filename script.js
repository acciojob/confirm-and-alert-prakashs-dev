//your JS code here. If required.
let text;
if (confirm("Do you want to proceed?") == true) {
  text = "You clicked OK. Proceeding...";
} else {
  text = "You clicked Cancel. Exiting...";
}
window.alert(text);