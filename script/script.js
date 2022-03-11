const section = document.getElementsByClassName("section__img")
const tooltip = document.getElementsByClassName("tooltip")
const back = document.getElementsByClassName("back")
const left = document.getElementsByClassName("footer__left")
const right = document.getElementsByClassName("footer__right")
const carousel = document.getElementsByClassName("carousel__content")
let distanceRightTop = "100"


Array.from(left).forEach(item=>{
	item.addEventListener("click", openTooltip)
})

Array.from(right).forEach(item=>{
	item.addEventListener("click", moveRight)
})

Array.from(section).forEach(item=>{
	item.addEventListener("click", openTooltip)
})

back[0].addEventListener("click", ()=>{
	tooltip[0].style.animation = "scale-out .25s"
	setTimeout(()=>{
		tooltip[0].style.display = ""
	}, 200)
	
})

function openTooltip(){
	tooltip[0].style.animation = "scale .35s"
	tooltip[0].style.display = "block"
}

function moveRight(){
	if(this.attributes.value.value == "top"){
		carousel[0].style.transform = "translateX("	+ distanceRightTop + "px)"
	}
}