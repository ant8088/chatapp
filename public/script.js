const box = document.getElementById("box");
const user = document.getElementById("name");
const socket = io(); // Connect to server
socket.on("chat message", (data) => {
  showM(`${data.user}: ${data.message}`);

});
function sendM() {
    socket.emit("chat message", {
      user: user.value,
      message: box.value
    }); // Fixed object syntax
    box.value = "";
  }


// Listen for messages from server


// Display message on the page
function showM(a) {
  const message = document.createElement("div");
  message.textContent = a;
  message.id = "messi";
  document.body.appendChild(message);
}