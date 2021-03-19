let textMessages = document.querySelectorAll(".text");

for ( let i = 0 ; i < textMessages.length; i++){

    setTimeout( function(){

        textMessages[i].style.visibility = "visible"

    },i*2000)


}