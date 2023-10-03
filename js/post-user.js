const post_user = (user) => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("POST", "http://localhost:5555/api/users/", true);
    http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    http.onload = () => {
        console.log(http.response);
        display_user1(http.response);
    }
    
    http.send(JSON.stringify(user));
    document.location = "get-users.html";
}

const getDataFromHtml = () => {
    let user = {};
    user.id = 0;
    user.firstname = document.getElementById("pfirstname").value;
    user.lastname = document.getElementById("plastname").value;
    user.username = document.getElementById("pusername").value;
    user.password = "Train@MAX";
    user.phone = document.getElementById("pphone").value;
    user.email = document.getElementById("pemail").value;
    user.isReview = document.getElementById("previewer").checked;
    user.isAdmin = document.getElementById("padmin").checked;
    return user; 
}

const save = () => {
    let user = getDataFromHtml();
    post_user(user);
}

const loaded = () => {
}

const display_user1 = (user) => {
    document.getElementById("pid").innerText = user.id;
    document.getElementById("pfirstname").value = user.firstname;
    document.getElementById("plastname").value = user.lastname;
    document.getElementById("pusername").value = user.username;
    document.getElementById("pphone").value = user.phone;
    document.getElementById("pemail").value = user.email;
    document.getElementById("previewer").checked = user.isReview;
    document.getElementById("padmin").checked = user.isAdmin;
}