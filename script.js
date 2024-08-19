

const navList = document.querySelectorAll('.list_items')
const HeroBtn = document.querySelectorAll('.hero_buttons_right button')
const s =document.querySelector('.category_swiper-button-next')
const menuToggleBtn=document.querySelector('.menu_open')
const menu=document.querySelector('.nav_list')
const listItems=document.querySelectorAll('.list_items')
const categoryList=document.querySelectorAll('.category_name')
const categorySwipers=document.querySelectorAll('.category_swiper')

// closeModal


// CATEGORY





categoryList.forEach((category,i)=>{
category.addEventListener('click',(e)=>{
  categoryList.forEach(category=>category.classList.remove('active'))
  category.classList.add('active')

  categorySwipers.forEach((swiper)=>{
  	swiper.classList.remove('active')
	  if(swiper.classList.contains(category.id)){
	  	swiper.classList.add('active')
	  }
})


})
})


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
   initialSlide:3,  
	navigation:{
		nextEl:'.category-swiper-button-next',
		prevEl:'.category-swiper-button-prev'
	}


})
const swiper2=new Swiper('.swiper2',{
	loop:'true',
	effect:'coverflow',
	grabCursor:true,
	slidesPerView:`${innerWidth > 500 ? 5: 1}`,
      coverflowEffect:{
      	rotate:20,
      	 depth:150,
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


	/*GSAP*/

document.addEventListener('DomContentLoaded',(e)=>{
	console.log(e.target)
})

gsap.registerPlugin(ScrollTrigger);
const tl1=gsap.timeline()
const tl2=gsap.timeline()
gsap.from('.hero_buttons_left > button',{
	x:-100,
	opacity:.2,
	duration:1,
	stagger:.5,
	ease:'bounce.out'

})
let p = gsap.utils.toArray('p')
console.log(p)
tl2.from(p,{
    opacity:0,
    delay:2,
	duration:1.5,
})

tl1.from('.bx1_images > .circle',{
	x:-100,
	duration:2,
	rotation:360,
	ease:'bounce.inOut'
})
tl1.from('.bx1_images > .semi_circle',{
	x:-50,
	opacity:0,
	duration:1,
	ease:'bounce.inOut'
})
gsap.from('.section3_container > h2',{
	scrollTrigger:{
		trigger:'.section3',
		start: 'top +=500',
	},
	xPercent:-100,
	duration:1.5,
	ease:'power4.inOut'
})
gsap.from('.category_names_container > article' ,{
	scrollTrigger:{
		trigger:'.section3_container',
		start:'center center',
	},
	y:50,
	opacity:0,
	duration:1,
	stagger:.3,
	ease:'power3.out',
})

let title = gsap.utils.toArray('.title')
title.map(t=>{
	tl2.from(title,{
	scrollTrigger:{
		trigger: t ,
		onEnter:(e)=>e.trigger.classList.add('active')

	},
})

})

gsap.from('.hand_img',{
	scrollTrigger:{
		trigger:'.hand_img',
		scrub:true,		
	},
	yPercent:100,
	opacity:0,
	rotationY:'-95',
})