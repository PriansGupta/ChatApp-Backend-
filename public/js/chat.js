const socket=io()

// socket.on("xyz",(count)=>{
//     console.log("Updated",count)
// })

// const bt=document.querySelector("#plus")

// bt.addEventListener('click',()=>{
//     console.log("clicked")

//     socket.emit("increment")
// })


socket.on("message",(msg)=>{
    console.log(msg)
})

document.querySelector("#mess").addEventListener("submit",(e)=>{
    e.preventDefault();

    const msg=document.querySelector("input").value

    socket.emit("send-msg",msg)
})
