/*gsap.to("#box1",{
x:1000,
duration:1.5,
delay:1,
rotate:360,
backgroundColor:"blue",
borderRadius:"50%",
//repeat:-1,//ab animation infinite time tak chalega
//yoyo:true//jahaan se gaya fir wahi aa jaayega

})//jaise css mein styling kisi element pe lagate ho same usi tarah parenthesis ke andar likho aur curly bracs ke nadar jo propert apply karna chahte ho woh likh do
gsap.to("#box2",{
x:1000,
duration:1.5,
delay:2.5,
rotate:360,
backgroundColor:"yellow",
//borderRadius:"50%",
//repeat:-1,//ab animation infinite time tak chalega
//yoyo:true//jahaan se gaya fir wahi aa jaayega

})
gsap.to("#box3",{
x:1000,
duration:1.5,
delay:4,
rotate:160,
backgroundColor:"crimson",
//borderRadius:"50%",
//repeat:-1,//ab animation infinite time tak chalega
//yoyo:true//jahaan se gaya fir wahi aa jaayega

})
gsap.from("h1",{
    opacity:0,//matlab phle gayab hoga fir dikhai dega because from mein animation final se initial tak chati hai
    duration:1,
    y:30,
    delay:1,
    stagger:0.5//kab chalenge same h1 wale 0.5 ke duration pe
})*/
//timeline
var tl=gsap.timeline()
    tl.to('#box1',{
x:1000,
duration:1.5,
rotate:360,
backgroundColor:"blue",
borderRadius:"50%",
    })
     tl.to('#box2',{
x:1000,
duration:1.5,

rotate:360,
backgroundColor:"yellow",
    })
         tl.to('#box3',{
x:1000,
duration:1.5,

rotate:360,
backgroundColor:"violet",
rotate:180
    })


