const resetBtn = document.querySelector("#resetBtn");
const moveDisplay = document.querySelector("#move")
const scoreDiplay = document.querySelector("#score");
const cards = document.querySelector(".cards");
let click = 0;
let count = 0;
let score = 0;
let arr = [];

const emojis = [
    { id: 1, emoji: "img/emoji-1.jpg" },
    { id: 1, emoji: "img/emoji-1.jpg" },
    { id: 2, emoji: "img/emoji-2.jpg" },
    { id: 2, emoji: "img/emoji-2.jpg" },
    { id: 3, emoji: "img/emoji-3.jpg" },
    { id: 3, emoji: "img/emoji-3.jpg" },
    { id: 5, emoji: "img/emoji-5.jpg" },
    { id: 5, emoji: "img/emoji-5.jpg" },
    { id: 6, emoji: "img/emoji-6.jpeg" },
    { id: 6, emoji: "img/emoji-6.jpeg" },
    { id: 7, emoji: "img/emoji-7.jpeg" },
    { id: 7, emoji: "img/emoji-7.jpeg" }
]
let sortEmojis = emojis.sort(() => Math.random() > .5 ? 1 : -1);



const reset = () => {
    console.log("reset")
    score = 0;
    click = 0;
    count = 0;
    arr = [];
    window.location.reload()
}
const openBox = (id) => {

    if (count === 0) {
        fisrtId = id
        console.log(fisrtId, "first");
        count++

    }
    else {
        secondId = id
        count = 0
        console.log(secondId, "sec");
        click++;
        moveDisplay.textContent = click;
        if (fisrtId === secondId) {
            console.log("won")
            score++;
            if (score == 6) {
                setTimeout(() => {
                    alert(`You won game by ${score}/${click} Move`);
                    reset()
                }, 500);
            }
            scoreDiplay.innerHTML = score;
            arr = [];
        }
        else {
            setTimeout(() => {
                arr[0].setAttribute("src", "img/imgbackground.jpg");
                arr[1].setAttribute("src", "img/imgbackground.jpg");
                arr = [];
            }, 900);
        }
        fisrtId = undefined;
        secondId = undefined;
    }

}

// display emojis
const emojisDisplay = () => {
    for (let i = 0; i < emojis.length; i++) {
        let card = document.createElement("img");
        card.setAttribute("data-id", i);
        card.setAttribute("src", "img/imgbackground.jpg");
        card.classList.add("emoji")
        cards.appendChild(card);
        card.addEventListener("click", () => {
            card.setAttribute("src", sortEmojis[i].emoji)
            arr.push(card);
            openBox(sortEmojis[i].id, card)
        })
    }
}
emojisDisplay()
resetBtn.addEventListener("click", reset)
