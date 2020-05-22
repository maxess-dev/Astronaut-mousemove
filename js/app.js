const astronaute = document.querySelector('.ctn-inner');
const body = document.querySelector(".ctn");


body.addEventListener("mousemove",(e) => {
    let positionX = ((window.innerWidth / 2) - e.x )
    let positionY = -e.y / 5
    astronaute.style.transform = `translate(${positionX}px,${e.y}px)`
})


console.log(window.innerWidth)
