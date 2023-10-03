// Initialize JQuery
$(() => {
        console.log('Ready!');
        // Moved from the onloaded() function
        let data = document.URL.split("?")[1];
        let id = Number(data.split("=")[1]);
        get_user(id);

        // JQuery click event for remove()
        $("#remove").on("click", () => {
            remove();
        })
});

let user = null;

// CONVERTED TO JQUERY - BELOW
// const get_user = (id) => {
//     let http = new XMLHttpRequest();
//     http.responseType = "json";
//     http.open("GET", `http://localhost:5555/api/users/${id}`, true);
//     // Always pass response data into a function
//     http.onload = () => {
//         user = http.response;
//         console.log(http.response);
//         display_user(http.response);
//     }
//     // Execute the call
//     http.send();
// }

// JQUERY
const get_user = (id) => {
    $.getJSON(`http://localhost:5555/api/users/${id}`)
        .done((res) => {
            console.log(res)
            display_user(res)
        })
        .fail((err) => {
            console.error(err);
        });
}

// MOVED TO JQUERY - TOP
//  const loaded = () => {
//     let data = document.URL.split("?")[1];
//     let id = Number(data.split("=")[1]);
//     get_user(id);
//  }


const display_user = (user) => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    // tbody.parentElement.style.width = "80vw";
        let tr = "<tr>";
        tr += `<td>${user.id}</td>`;
        tr += `<td>${user.firstname} ${user.lastname}</td>`;
        tr += `<td>${user.username}</td>`;
        tr += `<td>${user.phone}</td>`;
        tr += `<td>${user.isReviewer ? "Yes" : "No"}</td>`;
        tr += `<td>${user.isAdmin ? "Yes" : "No"}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;  
}

// USING JQUERY FOR THIS ONE - SEE TOP
const remove = () => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("DELETE", `http://localhost:5555/api/users/${user.id}`, true);
    http.onload = () => {
        console.log(http.response);
    }
    http.send();
    document.location = "get-users.html";
}