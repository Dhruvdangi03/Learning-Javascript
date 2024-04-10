const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#results');

    if(height < 0 || isNaN(height)){
        res.innerHTML = 'Please give a vaild height';
    }
    else if(weight < 0 || isNaN(weight)){
        res.innerHTML = 'Please give a vaild weight';
    }else {
        res.innerHTML = (weight / ((height * height) / 10000)).toFixed(2);
    }
});