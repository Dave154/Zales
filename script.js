

const navList = document.querySelectorAll('.list_items')
const HeroBtn = document.querySelectorAll('.hero_buttons_right button')
const s =document.querySelector('.category_swiper-button-next')
const menuToggleBtn=document.querySelector('.menu_open')
const menu=document.querySelector('.nav_list')
const listItems=document.querySelectorAll('.list_items')


// closeModal


// MENU

const menuToggle=()=>{
   menu.classList.toggle('active')
}

const closeMenu=(e)=>{
      menu.classList.remove('active')
 }
menuToggleBtn.addEventListener('click',menuToggle)

 listItems.forEach((item)=>{
 	item.addEventListener('click',()=>{
 		closeMenu()
 	})
 })
 document.addEventListener('click',(e)=>{
  if (menu.classList.contains('active') && e.target!== menuToggleBtn) {
  	closeMenu()
  }
  })


const List=(param)=>{

//screen width
let innerWidth =window.innerWidth

window.addEventListener('resize',()=>{
	innerWidth=window.innerWidth
});
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
	loop:true,
	effect:'cards',
	grabCursor:true,
   initialSlide:2,  
	navigation:{
		nextEl:'.category-swiper-button-next',
		prevEl:'.category-swiper-button-prev'
	}


})
const swiper2=new Swiper('.swiper2',{
	loop:'true',
	effect:'coverflow',
	grabCursor:true,
	slidesPerView:`${innerWidth > 800 ? 5: 'auto'}`,
      coverflowEffect:{
      	rotate:25,
      	 depth:70,
      	 modifier:1,
      	slideShadows:'false',
      },
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

const swiper4 = new Swiper('.swiper4',{
	loop:true,
	freeMode:true,
	autoplay:{
	  	delay:1000,
	  	disableOnInteraction:false,
	  },
	  speed:4100,
   spaceBetween:5,
	slidesPerView:'auto',
	grabCursor:true,
}) 
const swiper5 = new Swiper('.swiper5',{
	loop:true,
	freeMode:true,
	autoplay:{
	  	delay:2,
	  	disableOnInteraction:false,
	  },
	  speed:4000,
   spaceBetween:5,
	slidesPerView:'auto',
	grabCursor:true,
})
