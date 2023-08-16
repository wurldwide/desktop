<script>const files = document.querySelectorAll('.file')
let z = 1
files.forEach((file) => {
const content = file.querySelector('.content')
const corner = file.querySelector('.corner')
file.addEventListener('mousedown', () => {
z = z + 1
file.style.zIndex = z
})
content.addEventListener('mousedown', (event) => {
file.classList.add('is-dragging')
let l = file.offsetLeft
let t = file.offsetTop
let startX = event.pageX
let startY = event.pageY
const drag = (event) => {
event.preventDefault()
file.style.left = l + (event.pageX - startX) + 'px'
file.style.top = t + (event.pageY - startY) + 'px'
}
const mouseup = () => {
file.classList.remove('is-dragging')
document.removeEventListener('mousemove', drag)
document.removeEventListener('mouseup', mouseup)
}
document.addEventListener('mousemove', drag)
document.addEventListener('mouseup', mouseup)
})
corner.addEventListener('mousedown', (event) => {
let w = file.clientWidth
let h = file.clientHeight
let startX = event.pageX
let startY = event.pageY
const drag = (event) => {
event.preventDefault()
file.style.width = w + (event.pageX - startX) + 'px'
file.style.height = h + (event.pageY - startY) + 'px'
}
const mouseup = () => {
document.removeEventListener('mousemove', drag)
document.removeEventListener('mouseup', mouseup)
}
document.addEventListener('mousemove', drag)
document.addEventListener('mouseup', mouseup)
})
})</script>
