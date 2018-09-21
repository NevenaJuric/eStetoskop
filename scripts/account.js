var USER = {
    name: null,
    type: null,
    id: null
}

function getUser() {
    if (USER.id) {
        return USER;
    } else {
        var user = localStorage.getItem('USER');
        USER = JSON.parse(user);
        return USER;
    }
}

function saveUser() {
    localStorage.setItem('USER', JSON.stringify(USER));
}

function login() {
    // get username and password from form
    var username = $('#username').val();
    var password = $('#password').val();

    // make body of POST request
    var postBody = {
        username: username,
        password: password
    }

    // send request to login.php
    $.post('api/login.php', postBody, function (response) {
        if (response !== '0') {
            response = JSON.parse(response);
            USER.id = response.id;
            USER.name = response.name;
            USER.type = response.type;
            saveUser();
            $('main').load('views/main.html');
        } else {
            alert('Nepostojece korisnicko ime ili sifra!')
        }
    })
}

function logout() {
    document.cookie = 'estetoskop="";Path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    USER = {
        name: null,
        type: null,
        id: null
    }
    localStorage.removeItem('USER');
}

function register(username, name, pass1, pass2) {

    var id = getUser().id;

    var postBody = {
        username: username,
        password: pass1,
        name: name,
        id: id
    }

    //check username and password
    if (username.length === 0) {
        alert("Unesite korisničko ime!");
        return;
    }
    if (name.length === 0) {
        alert("Unesite ime!");
        return;
    }
    if (pass1.length < 6) {
        alert("Unesite lozinku!");
        return;
    }
    if (pass1 !== pass2) {
        alert("Lozinke se ne poklapaju, pokušajte ponovo!");
        return;
    }

    //send to register.php
    $.post('api/register.php', postBody, function (response) {
        if (response) {
            alert("Korisnik je uspešno kreiran!");
        } else {
            alert("Korisnik sa unetim korisničkim imenom već postoji, pokušajte ponovo!");
        }
    })
}




function isAuthorized() {

    //get userid from cookie if exists
    var id = getCookie('estetoskop');

    // there is no cookie, user must to login
    if (id === null) {
        $('main').load('views/login.html');
    } else {
        $('main').load('views/main.html');
    }

}

function getCookie(name) {
    var cookieValue = null;
    var cookies = document.cookie.split(';');
    cookies.forEach(function (cookie) {
        var cookieParts = cookie.split('=');
        var cookieName = cookieParts[0].trim();
        if (cookieName === name) {
            cookieValue = cookieParts[1].trim();
        }
    })
    return cookieValue;
}