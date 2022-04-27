let msg = document.querySelector("input");
const mess_temp = document.querySelector("#mess-temp").innerHTML;
const messages = document.querySelector("#messages");
const socket = io();

socket.on("message", (msg) => {
  console.log(msg);
  const html=Mustache.render(mess_temp,{
      messages:msg
  })
});

document.querySelector("#mess").addEventListener("submit", (e) => {
  e.preventDefault();


  socket.emit("send-msg", msg.value, () => {
    console.log("Message Delivered");

    msg.value = "";
  });
});

document.querySelector("#location").addEventListener("click", () => {
  if (!navigator.geolocation) return alert("Not Supported");

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "Send-Location",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        console.log("Location Sent");
      }
    );
  });
});
