function saveData() {
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;
    var website = document.querySelector('#website').value;
    var message = document.querySelector('#message').value;

    var objKey = name;
    var obj = {
        name: name,
        email: email,
        phone: phone,
        website: website,
        message: message
    };

    var objString = JSON.stringify(obj);

    sessionStorage.setItem(objKey, objString);

    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#website').value = '';
    document.querySelector('#message').value = '';

    showData();

    return false;
}

function showData() {
    var detailsDiv = document.querySelector('.details');
    detailsDiv.innerHTML = '<h4>We have received:</h4>';

    for (let i = 0; i < sessionStorage.length; i++) {
        var objKey = sessionStorage.key(i);
        var obj = JSON.parse(sessionStorage.getItem(objKey));

        detailsDiv.innerHTML += '<p>Name: ' + obj.name + '<br><br>Email: ' + obj.email + '<br><br>Phone: ' + obj.phone + '<br><br>Website: ' + obj.website + '<br><br>  Message: ' + obj.message + '</p>';

        if (i != sessionStorage.length - 1) {
            detailsDiv.innerHTML += '<hr>';
        }
    }

    detailsDiv.innerHTML += '<br>Thank you.';
}

if (sessionStorage.length > 0) {
    showData();
}
