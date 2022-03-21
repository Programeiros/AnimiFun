const section = document.getElementsByClassName("section__img")
const tooltip = document.getElementsByClassName("tooltip")
const back = document.getElementsByClassName("back")
const footer = document.getElementsByClassName("carousel__footer")
const carousel = document.getElementsByClassName("carousel__content")
const pageNumber = document.getElementsByClassName("count__number")
let i = 0
let move1 = 0
let move2 = 0
let cont1 = 1
let cont2 = 1
carousel[0].style.marginLeft = "0px"
let dis = (carousel[0].scrollLeftMax)/2 + 10

Array.from(footer).forEach(element => {
    element.addEventListener("click", () => {
				
        if (event.target.className == "footer__right") {
            if (event.target.y == 518) {
                move1 = move1 - dis 
                if (cont1 == 3) {
                    cont1 = 1
                    move1 = 0
                } else {
                    cont1 = cont1 + 1
                }
                pageNumber[0].innerText = cont1
                carousel[0].style.marginLeft = move1 + "px"

            } else if (event.target.y == 948) {
                move2 = move2 - dis
                if (cont2 == 3) {
                    cont2 = 1
                    move2 = 0
                } else {
                    cont2 = cont2 + 1
										
                }
                pageNumber[2].innerText = cont2
                carousel[1].style.marginLeft = move2 + "px"
            }

        } 
				
				else if (event.target.className == "footer__left") {
            if (event.target.y == 518) {
                
								if(cont1 == 1){
										cont1 = 3
										move1 = move1 - dis*2
								}
								else{
									cont1 = cont1 - 1
									move1 =  move1 + dis
									
								}
								pageNumber[0].innerText = cont1
                carousel[0].style.marginLeft = move1 + "px"
							
            } else if (event.target.y == 948) {
                
								if(cont2 == 1){
										cont2 = 3
										move2 = move2 - dis*2
								}
								else{
									cont2 = cont2 - 1
									move2 =  move2 + dis
								}
								pageNumber[2].innerText = cont2
                carousel[1].style.marginLeft = move2 + "px"
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