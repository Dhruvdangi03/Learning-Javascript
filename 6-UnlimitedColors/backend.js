let intervalId;

const updateColor = function(){
    const hex = '0123456ABCDEF';
    let color = '#';

    for (let index = 1; index <= 6; index++) {
        color += hex.charAt(parseInt(Math.random() * 16));
    }

    return color;
}

function changeColor(){
    document.body.style.backgroundColor = updateColor();
}

document.querySelector('#start').addEventListener('click', function(){
    if(!intervalId) intervalId = setInterval(changeColor, 1000);
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null;
})