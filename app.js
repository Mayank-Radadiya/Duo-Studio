function scroll_(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

scroll_()


let t1 = gsap.timeline()

t1.from("nav img",{
    y:-50,
    duration:0.7
})
t1.from("nav ul li",{
    y:-50,
    stagger:0.1,
})
t1.from("nav #menu",{
    x:70,
    duration:0.5
})

gsap.to("#text1  h1",{
    x:-180,
    opacity:0.1,
    duration:0.5,
    scrollTrigger:{
        trigger:"#text1 h1",
        scroller:"#main",
        start:"start 20%",
        end:"bottom 50%",
        scrub:3,
        // markers: true,
    }
})
gsap.to("#text1  p",{
    x:180,
    opacity:0.1,
    duration:0.5,
    scrollTrigger:{
        trigger:"#text1 h1",
        scroller:"#main",
        start:"start 15%",
        end:"bottom 60%",
        scrub:3,
        // markers: true,
    }
})
gsap.to("#text2  p",{
    scale:0.4,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:"#text1 p",
        scroller:"#main",
        start:"start 15%",
        end:"bottom 60%",
        scrub:3,
        // markers: true,
    }
})
gsap.to("#video  video",{
    width:"90%",
    y:-300,
    duration:0.7,
    scrollTrigger:{
        trigger:"#text2 p",
        scroller:"#main",
        start:"start 40%",
        end:"bottom 10%",
        scrub:5,
        // markers: true,
    }
})

let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 #video",
        scroller:"#main",
        start:"top -10%",
        end:"top 20%",
        // markers: true,
        scrub:2
    }
})
t2.to("#main",{
    backgroundColor:"#fff",
})
let t3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#underline-3",
        scroller:"#main",
        start:"top 10%",
        end:"top 10%",
        // markers: true,
        scrub:1
    }
})
t3.to("#main",{
    backgroundColor:"#111",
})


let box1 = document.querySelector(".box1-1")
let box2 = document.querySelector(".box1-2")
let box3 = document.querySelector(".box1-3")
let imgchange = document.querySelector("#img2 img")

box1.addEventListener("mouseover", function(){
    imgchange.src ="Img-Video/Page2 img 1.webp"
})
box2.addEventListener("mouseover", function(){
    imgchange.src ="Img-Video/Page2 img 2.webp"
})
box3.addEventListener("mouseover", function(){
    imgchange.src ="Img-Video/Page2 img3.webp"
})


var main = document.querySelector("#main");
var mouse = document.querySelector("#mouse1");

main.addEventListener("mousemove", function (event) {
  mouse.style.left = event.x + -15 + "px";
  mouse.style.top = event.y + -15 + "px";
});

let page1 = document.querySelector("#page1")

page1.addEventListener("mouseleave", function(){
    mouse.style.opacity = 0
})
page1.addEventListener("mouseenter", function(){
    mouse.style.opacity = 1
})



