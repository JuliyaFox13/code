function refreshCards (){
    for(let i = 0; i<countCards; i = i + 1 ){
        cardsField.children[i].className = "";
        cardsField.children[i].style.backgroundImage ='url("images/back.png")';
    }
    if(deletedCards == countCards){
        resetBlock.style.display = "block";
    }
    selected = [];
    pause = false;
};