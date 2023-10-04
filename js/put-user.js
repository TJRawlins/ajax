$(() => {
    console.log('Ready!');
    let data = document.URL.split("?")[1];
    let id = Number(data.split("=")[1]);
    get_user(id);
});

let user = null;

// const get_user = (id) => {
//     let http = new XMLHttpRequest();
//     http.responseType = "json";
//     http.open("GET", `http://localhost:5555/api/users/${id}`, true);
//     // Always pass response data into a function
//     http.onload = () => {
//         console.log(http.response);
//         display_user(http.response);
//     }
//     // Execute the call
//     http.send();
// }

// const put_user = (user) => {
//     let http = new XMLHttpRequest();
//     http.responseType = "json";
//     http.open("PUT", `http://localhost:5555/api/users/${user.id}`, true);
//     http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
//     http.onload = () => {
//         console.log(http.response);
//         document.location = "get-users.html"
//     }
    
//     http.send(JSON.stringify(user));
// }

// JQUERY
const get_user = (id) => {
    $.getJSON(`http://localhost:5555/api/users/${id}`)
        .done((res) => {
            user = res;
            console.log(res)
            display_user(res)
        })
        .fail((err) => {
            console.error(err);
        });
}

// JQUERY
const put_user = (user) => {
    $.ajax({
        method: "PUT",
        url: `http://localhost:5555/api/users/${user.id}`,
        data: JSON.stringify(user),
        contentType: "application/json"
    }).done((res) => {
        console.log(res)
        document.location = "get-users.html";
    })
    .fail((err) => {
        console.error(err);
    });
}

const getDataFromHtml = () => {
    let user = {};
    user.id = +document.getElementById("pid").value;
    user.firstname = document.getElementById("pfirstname").value;
    user.lastname = document.getElementById("plastname").value;
    user.username = document.getElementById("pusername").value;
    user.password = document.getElementById("ppassword").value;
    user.phone = document.getElementById("pphone").value;
    user.email = document.getElementById("pemail").value;
    user.isReviewer = document.getElementById("previewer").checked;
    user.isAdmin = document.getElementById("padmin").checked;
    return user; 
}

const save = () => {
    let user = getDataFromHtml();
    put_user(user);
}

// LOADED IN JQUERY INITIALIZER AT THE TOP
// const loaded = () => {
//     let data = document.URL.split("?")[1];
//     let id = Number(data.split("=")[1]);
//     get_user(id)
// }

const display_user = (user) => {
    document.getElementById("pid").value = user.id;
    document.getElementById("pfirstname").value = user.firstname;
    document.getElementById("plastname").value = user.lastname;
    document.getElementById("pusername").value = user.username;
    document.getElementById("ppassword").value = user.password;
    document.getElementById("pphone").value = user.phone;
    document.getElementById("pemail").value = user.email;
    document.getElementById("previewer").checked = user.isReviewer;
    document.getElementById("padmin").checked = user.isAdmin;
}