let cardsField = document.querySelector("#cards");
let resetBlock = document.querySelector("#reset");
let resetBtn = document.querySelector("#reset-btn");
let countCards = 16;
let images = [
    1,2,3,4,
    5,6,7,8,
    1,2,3,4,
    5,6,7,8,
];

let deletedCards = 0;

let selected = [];

let pause = false;

for(let i = 0; i < countCards; i = i + 1) {
    let li = document.createElement("li");
        li.id = i;
    cardsField.appendChild(li);
};

cardsField.onclick = (event) => {
    if (pause == false) {
        let element = event.target;

        if (element.tagName == "LI" && element.className != "active") {
            selected.push(element);
            element.className = "active";
            let img = images[element.id];
            element.style.backgroundImage = "url(images/" + img + ".png)";
            if (selected.length == 2) {
                pause = true;
                if (images[selected[0].id] == images[selected[1].id]) {
                    selected[0].style.visibility = "hidden";
                    selected[1].style.visibility = "hidden";
                    deletedCards = deletedCards + 2;

                };
                setTimeout(refreshCards, 600);
               // refreshCards();
            };
        };
    };
};



resetBtn.onclick = function () {
    location.reload();
}
