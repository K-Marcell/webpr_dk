var values = {"1": [[1, 1]],
              "2": [[0,0], [2, 2]],
              "3": [[0, 2], [1, 1], [2,0]],
              "4": [[0, 0], [0, 2], [2, 0], [2, 2]],
              "5": [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
              "6": [[0, 0], [1, 0], [2, 0], [0, 2], [1, 2], [2, 2]]};

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function changeLeft() {
    var val = randomIntFromInterval(1, 6);
    console.log(val);
    for(var k = 0; k < values[val.toString()].length; k++)
    {
        var value = values[val.toString()][k];
        var div = document.getElementsByClassName(`r${value[0]}c${value[1]}`)[0];
        div.classList.remove('off');
        div.classList.add('on');
    }

    return val;
}
function changeRight() {
    var val = randomIntFromInterval(1, 6);
    console.log(val);
    for(var k = 0; k < values[val.toString()].length; k++)
    {
        var value = values[val.toString()][k];
        var div = document.getElementsByClassName(`r${value[0]}c${value[1]}`)[1];
        div.classList.remove('off');
        div.classList.add('on');
    }

    return val;
}

function changeBoth() {
    var divs = document.getElementsByClassName("circle");
    for(var k = 0; k < divs.length; k++)
    {
        var div = divs[k];
        div.classList.remove('on');
        div.classList.remove('off');
        div.classList.remove('on');
    }
    var a = changeLeft();
    var b = changeRight();

    document.getElementById('vt').innerText = a+b;
}