const socket = io();

socket.on("message", (msg) => {
  console.log(msg);
});

document.querySelector("#mess").addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = document.querySelector("input").value;

  socket.emit("send-msg", msg,()=>{
      console.log("Message Delivered")
  });
});


document.querySelector("#location").addEventListener("click",()=>{
    if(!navigator.geolocation)
    return alert("Not Supported")

    navigator.geolocation.getCurrentPosition((position)=>{
    socket.emit("Send-Location",{
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
    })
    })
})