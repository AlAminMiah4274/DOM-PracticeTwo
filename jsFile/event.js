// option: 2 most used
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option: 3
const greenButton = document.getElementById('make-green');
greenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// option: 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option: 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option: 4 another
const YellowButton = document.getElementById('make-yellow');
YellowButton.addEventListener('click', function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
})

// option: 4  final
document.getElementById('make-rod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})