var select1 = document.querySelector('select');
var select2 = document.querySelectorAll('select')[1];
var select3 = document.querySelectorAll('select')[2];
var img = document.querySelector('img');
var result = document.getElementById('result');
var btn = document.querySelector('button');

btn.onclick = function(e){
    if(select1.value == "only to do tricks" && select2.value == "Nah,i don't" && select3.value == "it's good"){
        result.textContent = "You're normal";
        img.setAttribute('src','img/images.png');
    }
    else if(select1.value == "of course, who doesn’t" && select2.value =="Nah,i don't" && select3.value == 'Is it tasty?'){
        result.textContent = "You're an alien ";
        img.setAttribute('src','img/logo.PNG')
    }
    else{
        result.textContent = "You're Bizarre"
        img.setAttribute('src' , 'img/make-someones-face-look-weird-and-you-choose-who.jpg')
    }
}

