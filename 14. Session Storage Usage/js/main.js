function doFirst() {
    var button = document.getElementById('btn');
    button.addEventListener('click', saveData, false);
    display();
}

function saveData() {
    one = document.getElementById('one').value;
    two = document.getElementById('two').value;

    sessionStorage.setItem(one, two);

    display();

    document.getElementById('one').value = '';
    document.getElementById('two').value = '';
}

function display() {
    var rightbox = document.getElementById('rightbox');
    rightbox.innerHTML = '';

    for (let i = 0; i < sessionStorage.length; i++) {
        var a = sessionStorage.key(i);
        var b = sessionStorage.getItem(a);

        rightbox.innerHTML += i + 1 + ". " + a + ' - ' + b + '<br>';
    }
}

window.addEventListener('load', doFirst, false);    