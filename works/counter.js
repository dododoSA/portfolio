var count = 0
function drawCount(){
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count
}
const countUp = () => {
    count++
    drawCount()
}
const countReset = () => {
    count = 0
    drawCount()
}