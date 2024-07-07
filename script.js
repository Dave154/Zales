

const navList = document.querySelectorAll('.list_items')
const HeroBtn = document.querySelectorAll('.hero_buttons_right button')
// const swiper =document.querySelector('.swiper')
const List=(param)=>{

param.forEach((item)=>{

	item.addEventListener('click',()=>{
		param.forEach(e=>e.classList.remove('active'))
		item.classList.add('active')
	})
})
}
// HEADER
List(navList)
List(HeroBtn)



// SWIPER

const swiper=new Swiper('.swiper',{
	effect:'cards',
	grabCursor:true
})