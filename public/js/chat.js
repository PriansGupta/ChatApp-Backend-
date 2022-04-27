const socket = io();

socket.on("message", (msg) => {
  console.log(msg);
});

document.querySelector("#mess").addEventListener("submit", (e) => {
  e.preventDefault();

  let msg = document.querySelector("input");

  socket.emit("send-msg", msg.value,()=>{
      console.log("Message Delivered")
      msg.value="";
  });
});


document.querySelector("#location").addEventListener("click",()=>{
    if(!navigator.geolocation)
    return alert("Not Supported")

    navigator.geolocation.getCurrentPosition((position)=>{
    socket.emit("Send-Location",{
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
    },()=>{
        console.log("Location Sent")
    })
    })
})