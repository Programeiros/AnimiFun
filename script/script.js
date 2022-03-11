const section = document.getElementsByClassName("section__img")
const tooltip = document.getElementsByClassName("tooltip")
const back = document.getElementsByClassName("back")

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