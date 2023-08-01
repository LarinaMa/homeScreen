// Create function diplayTime()
function displayTime() {
  // create a new date object
  const now = new Date();
  // get the hours
  const hours = now.getHours();
  // get the minutes -- attach .toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, "0");

  // find the element with the id 'time', set the inner text to hours:minutes
  document.getElementById("time").innerText = `${hours}:${minutes}`;
}

// call diplayTime()
displayTime();
// use setInterval to call displayTime() every second
setInterval(displayTime, 1000);
