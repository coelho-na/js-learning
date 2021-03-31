let date = document.getElementById("date");
let d = new Date ();
let dateToString = d.toLocateString()

function showDate() {
  date.innerHTML = dateToString;
}
