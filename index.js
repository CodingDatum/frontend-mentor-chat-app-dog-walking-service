let textAlert = new Audio ("sounds/text-alert.mp3");

let textAlert2 = new Audio("sounds/text-alert-2.mp3")


let textMessages = document.querySelectorAll(".text");

for ( let i = 0 ; i < textMessages.length; i++){

    setTimeout( function(){

        let text = textMessages[i]

        console.log(text.classList)

        if(text.classList.contains("right-side-text") || text.classList.contains("text-images")){

            textAlert.play();

        }else{

            textAlert2.play();

        }


        text.classList.add("animate-text")


    },i*2000)


}