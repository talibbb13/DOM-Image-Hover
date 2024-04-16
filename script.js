var elem = document.querySelectorAll(".elem")

elem.forEach(function(val) {
    val.addEventListener("mouseenter", function() {
        val.childNodes[3].style.opacity = 1
    })

    val.addEventListener("mouseleave", function() {
        val.childNodes[3].style.opacity = 0
    })

    val.addEventListener("mousemove", function(dets) {
        val.childNodes[3].style.left = dets.x + "px"
        val.childNodes[3].style.top = dets.y - val.getBoundingClientRect().top + "px";
    })
})






















// var elem1 = document.querySelector("#elem1")
// var elemImg1 = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(dets) {
//     elemImg1.style.left = dets.x + "px"
//     elemImg1.style.top = dets.y + "px"
// })

// elem1.addEventListener("mouseenter", function(dets) {
//     elemImg1.style.opacity = 1
// })

// elem1.addEventListener("mouseremove", function(dets) {
//     elemImg1.style.opacity = 1
// })
