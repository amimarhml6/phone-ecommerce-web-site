var samsung=document.querySelector("button")
var image = document.querySelector("#img")



var arr=[
    {
        text : "iphone",
        image : "iphone_13-removebg-preview.png",
    },
    {
        text : "samsung",
        image : "home_page-removebg-preview.png",
    },
]
var i=0
function change(){
    if(i>=2){
        i=0
    }
    samsung.innerHTML=arr[i].text
    image.src = arr[i].image
    i++;
}
setInterval(change , 3000)

var likes = document.querySelector("#likes")
var heart = document.querySelector("#like") 
var number =document.querySelector("#nbr")
var j=0

var likes2 = document.querySelector("#likes2")
var heart2 = document.querySelector("#like2") 

var likes3 = document.querySelector("#likes3")
var heart3 = document.querySelector("#like3") 

var likes4 = document.querySelector("#likes4")
var heart4 = document.querySelector("#like4") 

var likes5 = document.querySelector("#likes5")
var heart5 = document.querySelector("#like5") 

var likes6 = document.querySelector("#likes6")
var heart6 = document.querySelector("#like6") 

var likes7 = document.querySelector("#likes7")
var heart7 = document.querySelector("#like7") 

var likes8 = document.querySelector("#likes8")
var heart8 = document.querySelector("#like8") 

var likes9 = document.querySelector("#likes9")
var heart9 = document.querySelector("#like9") 

var likes10 = document.querySelector("#likes10")
var heart10 = document.querySelector("#like10") 

var likes11 = document.querySelector("#likes11")
var heart11 = document.querySelector("#like11") 

var likes12 = document.querySelector("#likes12")
var heart12 = document.querySelector("#like12") 

var likes13 = document.querySelector("#likes13")
var heart13 = document.querySelector("#like13") 

var likes14 = document.querySelector("#likes14")
var heart14 = document.querySelector("#like14") 

var likes15 = document.querySelector("#likes15")
var heart15 = document.querySelector("#like15") 

var lik = false
var lik2 = false
var lik3 = false
var lik4 = false
var lik5 = false
var lik6 = false
var lik7 = false
var lik8 = false
var lik9 = false
var lik10 = false
var lik11 = false
var lik12 = false
var lik13 = false
var lik14 = false
var lik15 = false
likes.addEventListener("click" , function(){
    if(lik == false){
        j++
        number.innerHTML=j
        heart.src = "heart-solid-24.png"
        lik =  true
    }
    else{
        j--
        number.innerHTML=j
        heart.src = "heart-regular-24.png"
        lik = false
    }
    console.log(j)
})

likes2.addEventListener("click" , function(){
    if(lik2 == false){
        j++
        number.innerHTML=j
        heart2.src = "heart-solid-24.png"
     lik2 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart2.src = "heart-regular-24.png"
        lik2 = false
    }
    console.log(j)
})

likes3.addEventListener("click" , function(){
    if(lik3 == false){
        j++
        number.innerHTML=j
        heart3.src = "heart-solid-24.png"
        lik3 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart3.src = "heart-regular-24.png"
        lik3 = false
    }
    console.log(j)
})
 
likes4.addEventListener("click" , function(){
    if(lik4 == false){
        j++
        number.innerHTML=j
        heart4.src = "heart-solid-24.png"
        lik4 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart.src = "heart-regular-24.png"
        lik4 = false
    }
    console.log(j)
})
likes5.addEventListener("click" , function(){
    if(lik5 == false){
        j++
        number.innerHTML=j
        heart5.src = "heart-solid-24.png"
        lik5 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart5.src = "heart-regular-24.png"
        lik5 = false
    }
    console.log(j)
})
likes6.addEventListener("click" , function(){
    if(lik6 == false){
        j++
        number.innerHTML=j
        heart6.src = "heart-solid-24.png"
        lik6 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart6.src = "heart-regular-24.png"
        lik6 = false
    }
    console.log(j)
})

likes7.addEventListener("click" , function(){
    if(lik7 == false){
        j++
        number.innerHTML=j
        heart7.src = "heart-solid-24.png"
        lik7 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart7.src = "heart-regular-24.png"
        lik7 = false
    }
    console.log(j)
})

likes8.addEventListener("click" , function(){
    if(lik8 == false){
        j++
        number.innerHTML=j
        heart8.src = "heart-solid-24.png"
        lik8 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart8.src = "heart-regular-24.png"
        lik8 = false
    }
    console.log(j)
})

likes9.addEventListener("click" , function(){
    if(lik9 == false){
        j++
        number.innerHTML=j
        heart9.src = "heart-solid-24.png"
        lik9 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart9.src = "heart-regular-24.png"
        lik9 = false
    }
    console.log(j)
})

likes10.addEventListener("click" , function(){
    if(lik10 == false){
        j++
        number.innerHTML=j
        heart10.src = "heart-solid-24.png"
        lik10 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart10.src = "heart-regular-24.png"
        lik10 = false
    }
    console.log(j)
})

likes11.addEventListener("click" , function(){
    if(lik11 == false){
        j++
        number.innerHTML=j
        heart11.src = "heart-solid-24.png"
        lik11 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart11.src = "heart-regular-24.png"
        lik11 = false
    }
    console.log(j)
})

likes12.addEventListener("click" , function(){
    if(lik12 == false){
        j++
        number.innerHTML=j
        heart12.src = "heart-solid-24.png"
        lik12 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart12.src = "heart-regular-24.png"
        lik12 = false
    }
    console.log(j)
})

likes13.addEventListener("click" , function(){
    if(lik13 == false){
        j++
        number.innerHTML=j
        heart13.src = "heart-solid-24.png"
        lik13 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart13.src = "heart-regular-24.png"
        lik13 = false
    }
    console.log(j)
})

likes14.addEventListener("click" , function(){
    if(lik14 == false){
        j++
        number.innerHTML=j
        heart14.src = "heart-solid-24.png"
        lik14 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart14.src = "heart-regular-24.png"
        lik14 = false
    }
    console.log(j)
})

likes15.addEventListener("click" , function(){
    if(lik15 == false){
        j++
        number.innerHTML=j
        heart15.src = "heart-solid-24.png"
        lik15 =  true
    }
    else{
        j--
        number.innerHTML=j
        heart15.src = "heart-regular-24.png"
        lik15 = false
    }
    console.log(j)
})

var all = document.querySelector("#all")
var iphones = document.querySelector("#iphones")
var samsungs = document.querySelector("#phone")
var product1 = document.querySelector("#product1")
var product2 = document.querySelector("#product2")
var product3 = document.querySelector("#product3")
var product4 = document.querySelector("#product4")
var product5 = document.querySelector("#product5")
var product6 = document.querySelector("#product6")
var product7 = document.querySelector("#product7")
var product8 = document.querySelector("#product8")
var product9 = document.querySelector("#product9")
var product10 = document.querySelector("#product10")
var product11 = document.querySelector("#product11")
var product12 = document.querySelector("#product12")
var product13 = document.querySelector("#product13")
var product14 = document.querySelector("#product14")
var product15 = document.querySelector("#product15")

var text1 =document.querySelector("#text1")
var imgs1 =document.querySelector("#img1")

var text2 =document.querySelector("#text2")
var imgs2 =document.querySelector("#img2")

var text3 =document.querySelector("#text3")
var imgs3 =document.querySelector("#img3")

var text4 =document.querySelector("#text4")
var imgs4 =document.querySelector("#img4")

var text5 =document.querySelector("#text5")
var imgs5 =document.querySelector("#img5")

var text6 =document.querySelector("#text6")
var imgs6 =document.querySelector("#img6")

var text7 =document.querySelector("#text7")
var imgs7 =document.querySelector("#img7")

var text8 =document.querySelector("#text8")
var imgs8 =document.querySelector("#img8")

var text9 =document.querySelector("#text9")
var imgs9 =document.querySelector("#img9")

var text10 =document.querySelector("#text10")
var imgs10 =document.querySelector("#img10")

var text11 =document.querySelector("#text11")
var imgs11 =document.querySelector("#img11")

var text12 =document.querySelector("#text12")
var imgs12 =document.querySelector("#img12")

var text13 =document.querySelector("#text13")
var imgs13 =document.querySelector("#img13")

var text14 =document.querySelector("#text14")
var imgs14 =document.querySelector("#img14")

var text15 =document.querySelector("#text15")
var imgs15 =document.querySelector("#img15")




iphones.addEventListener("click", function(){
    iphones.style.backgroundColor="white"
    iphones.style.color= "rgb(186, 64, 234)"
    iphones.style.borderRadius= "10px"
    all.style.backgroundColor="rgb(186, 64, 234)"
    all.style.color ="white"
    samsungs.style.backgroundColor="rgb(186, 64, 234)"
    samsungs.style.color ="white"

    text2.innerHTML = text9.innerHTML
    text3.innerHTML = text10.innerHTML
    text5.innerHTML = text11.innerHTML
    text8.innerHTML = text15.innerHTML
    text15.innerHTML = "galaxy A55"
    imgs2.src = "iphone_13-removebg-preview.png"
    imgs3.src = "iphone_14-removebg-preview.png"
    imgs5.src = "iphone_14_pro-removebg-preview.png"
    imgs8.src = "iphone_xs_max-removebg-preview.png"
    imgs15.src= "galaxy_a55-removebg-preview.png"


})

samsungs.addEventListener("click", function(){
    samsungs.style.backgroundColor="white"
    samsungs.style.color= "rgb(186, 64, 234)"
    samsungs.style.borderRadius= "10px"
    all.style.backgroundColor="rgb(186, 64, 234)"
    all.style.color ="white"
    iphones.style.backgroundColor="rgb(186, 64, 234)"
    iphones.style.color ="white"
    text1.innerHTML = text14.innerHTML
    text4.innerHTML = text13.innerHTML
    text6.innerHTML = text12.innerHTML
    text7.innerHTML = text8.innerHTML

    text8.innerHTML = "iphone 13 Pro"
    text12.innerHTML = "iphone 11"
    text13.innerHTML = "iphone 12"
    text14.innerHTML = "iphone 12 mini"
    imgs1.src = "galaxy_s20-removebg-preview.png"
    imgs4.src = "galaxy_M31_-removebg-preview.png"
    imgs6.src = "galaxy_M32-removebg-preview.png"
    imgs7.src = "galaxy_a55-removebg-preview.png"

    imgs8.src = "iphone_13_pro-removebg-preview.png"
    imgs12.src = "iphone_11-removebg-preview.png"
    imgs13.src = "iphone_12-removebg-preview.png"
    imgs14.src = "iphone_12_mini-removebg-preview.png"
    

})

all.addEventListener("click", function(){
   all.style.backgroundColor="white"
    all.style.color= "rgb(186, 64, 234)"
    all.style.borderRadius= "10px"
    iphones.style.backgroundColor="rgb(186, 64, 234)"
    iphones.style.color ="white"
    samsungs.style.backgroundColor="rgb(186, 64, 234)"
    samsungs.style.color ="white"


    imgs1.src = "iphone_13_pro-removebg-preview.png"
    imgs2.src = "galaxy_A15-removebg-preview.png"
    imgs3.src = "A21 FE.png"
    imgs4.src = "iphone_11-removebg-preview.png"
    imgs5.src = "Galaxy_A34-removebg-preview.png"
    imgs6.src = "iphone_12-removebg-preview.png"
    imgs7.src = "iphone_12_mini-removebg-preview.png"
    imgs8.src = "galaxy_a55-removebg-preview.png"
    imgs9.src = "iphone_13-removebg-preview.png"
    imgs10.src = "iphone_14-removebg-preview.png"
    imgs11.src = "iphone_14_pro-removebg-preview.png"
    imgs12.src = "galaxy_M31_-removebg-preview.png"
    imgs13.src = "galaxy_M32-removebg-preview.png"
    imgs14.src = "galaxy_s20-removebg-preview.png"
    imgs15.src = "iphone_xs_max-removebg-preview.png"

    text1.innerHTML = "iphone 13 Pro"
    text2.innerHTML = "galaxy A15"
    text3.innerHTML = "galaxy A21 FE"
    text4.innerHTML = "iphone 11"
    text5.innerHTML = "Galaxy A34"
    text6.innerHTML = "iphone 12"
    text7.innerHTML = "iphone 12 mini"
    text8.innerHTML = "Galaxy A55"
    text9.innerHTML = "iphone 13"
    text10.innerHTML = "iphone 14"
    text11.innerHTML = "iphone 14 pro"
    text12.innerHTML = "galaxy M31"
    text13.innerHTML = "galaxy M32"
    text14.innerHTML = "galaxy s20"
    text15.innerHTML = "iphone xs max"
})

var switcher = document.querySelector(".dark")
var body = document.querySelector("body")
var dark = false

switcher.addEventListener("click" , function(){
    body.classList.toggle("light")
    if(dark==false){
       switcher.innerHTML="Dark mode"
       dark = true
    }
    else {
       switcher.innerHTML="Light mode"
       dark = false
    }
    
})