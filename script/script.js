const section = document.getElementsByClassName("section__img")
const tooltip = document.getElementsByClassName("tooltip")
const back = document.getElementsByClassName("back")
const footer = document.getElementsByClassName("carousel__footer")
const carousel = document.getElementsByClassName("carousel__content")
let i = 0
let move = 0
let translateAfter = "px)"
let translateBefore = "translate("


Array.from(footer).forEach(element => {
    element.addEventListener("click", () => {
        console.log(move)

        if (event.target.className == "footer__right") {
            if (event.target.y == 518) {
                move = move - 300
                carousel[0].style.transform = translateBefore + move + translateAfter
            }
        } else if (event.target.className == "footer__left") {
            if (event.target.y == 518) {
                move = move + 300
                carousel[0].style.transform = translateBefore + move + translateAfter
            }
        }
    })
});

Array.from(section).forEach(item => {
    item.addEventListener("click", openTooltip)
})

back[0].addEventListener("click", () => {
    tooltip[0].style.animation = "scale-out .25s"
    setTimeout(() => {
        tooltip[0].style.display = ""
    }, 200)

})

function openTooltip() {
    tooltip[0].style.animation = "scale .35s"
    tooltip[0].children[0].children[0].src = this.src
    tooltip[0].children[1].children[2].innerText = this.parentElement.parentElement.children[1].innerText
    Array.from(tooltip[0].children[1].children[0].children).forEach(item => {
        item.children[0].innerText = this.parentElement.parentElement.children[2].children[i].innerText
        i = i + 1
    })
    i = 0
    Array.from(tooltip[0].children[1].children[1].children).forEach(item => {
        item.innerText = this.parentElement.parentElement.children[3].children[i].innerText
        i = i + 1
    })
    i = 0
    tooltip[0].children[1].children[3].innerText = this.parentElement.parentElement.children[4].innerText
    tooltip[0].style.display = "block"
}