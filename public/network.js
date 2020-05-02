let socket = io();
console.log('connected')

document.addEventListener('load', () => {
    socket.emit('connection');
})

document.addEventListener('click', () => {
    console.log('clicked')
})

socket.on('otherPosition', (position) => {
    console.log('—————————> ' + position)
})