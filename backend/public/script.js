const socket = io()

const output = document.getElementById('output')
const handle = document.getElementById('handle')
const message = document.getElementById('message')
const btn = document.getElementById('btn')
const feedback = document.getElementById('feedback')

socket.on('connect', msg => {
    console.log(msg)
})

btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.innerHTML
    })
    message.value = ''
    message.focus()
})

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.innerHTML)
})

socket.on('chat', function (data) {
    feedback.innerHTML = ''
    output.innerHTML += '<p><strong>'+data.handle+':</strong>'+data.message+'</p>'
})

socket.on('typing', function(data) {
    feedback.innerHTML = '<p><em>'+data+': is typing</em></p>'
})