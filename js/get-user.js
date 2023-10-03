// =============> GET BY ID
const get_user = (id) => {
    let http = new XMLHttpRequest();
    
    http.responseType = "json";
    
    http.open("GET", `http://localhost:5555/api/users/${id}`, true);
    
    // Always pass response data into a function
    http.onload = () => {
        console.log(http.response);
        display_user(http.response);
    }
    
    // Execute the call
    http.send();
}

 const loaded = () => {
    let data = document.URL.split("?")[1];
    let id = Number(data.split("=")[1]);
    get_user(id);
 }


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

