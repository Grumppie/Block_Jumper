const charactor = document.querySelector(".charactor");

const block = document.querySelector(".block");

const jumpButton = document.querySelector(".jump-btn");

const timer = document.querySelector(".timer");

const startingTime = 5;
let time = startingTime;


setInterval(decreaseTime, 1000);




function decreaseTime() {
    if (time > 0) {
        timer.innerHTML = `${time}`;
        return time--;

    }
    if (time == 0) {
        timer.innerHTML = "GO";
    }
}


jumpButton.addEventListener("click", function () {

    if (charactor.classList != "animate") {
        charactor.classList.add("animate");
    }
    setTimeout(function () {
        charactor.classList.remove("animate")
    }, 500);

})

const checkDead = setInterval(function () {
    var charactorTop = parseInt(window.getComputedStyle(charactor).getPropertyValue("top"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 35 && blockLeft > 0 && charactorTop >= 130) {

        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose")
    }
}, 10);


