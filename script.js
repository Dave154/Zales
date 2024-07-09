

const navList = document.querySelectorAll('.list_items')
const HeroBtn = document.querySelectorAll('.hero_buttons_right button')
const s =document.querySelector('.category_swiper-button-next')
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

const swiper1=new Swiper('.swiper1',{
	effect:'cards',
	grabCursor:true,
     initialSlide:2,  
       cardEffect:{
         
       },
	navigation:{
		nextEl:'.category-swiper-button-next',
		prevEl:'.category-swiper-button-prev'
	}


})
const swiper2=new Swiper('.swiper2',{
	loop:true,
	effect:'coverflow',
	grabCursor:true,
	slidesPerView:5,
      // coverflowEffect:{
      // 	rotate:,
      // 	stretch:,
      // 	depth:,modifier:,
      // 	slideShadows:,
      // }
	navigation:{
		nextEl:'.section4-swiper-button-next',
		prevEl:'.section4-swiper-button-prev'
	}


})
const swiper3 =new Swiper('.swiper3',{
	grabCursor:true,
	pagination:{

	el:'.swiper-pagination',
	type:'progressbar',
	},
	navigation:{
		prevEl:'.section5-swiper-button-prev',
		nextEl:'.section5-swiper-button-next',
	}
})

