
// =============> GET ALL USERS
const get_users = () => {
    let http = new XMLHttpRequest();
    
    http.responseType = "json";
    
    http.open("GET", "http://localhost:5555/api/users", true);
    
    // Always pass response data into a function
    http.onload = () => {
        console.log(http.response);
        display(http.response);
    }
    
    // Execute the call
    http.send();
}

const display = (users) => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    // tbody.parentElement.style.width = "50vw";
    for(let u of users) {
        let tr = "<tr>";
        tr += `<td>${u.id}</td>`;
        tr += `<td>${u.firstname} ${u.lastname}</td>`;
        tr += `<td>${u.username}</td>`;
        tr += `<td>${u.phone}</td>`;
        tr += `<td>${u.isReviewer ? "Yes" : "No"}</td>`;
        tr += `<td>${u.isAdmin ? "Yes" : "No"}</td>`;
        tr += "<td>";
        tr += `<a href='get-user.html?id=${u.id}'>Detail</a> | `;
        tr += `<a href='put-user.html?id=${u.id}'>Edit</a>`;
        tr += "</td>";
        tr += "</tr>";
        tbody.innerHTML += tr;
    }    
}