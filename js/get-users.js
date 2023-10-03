$(() => {
    get_users()
})

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
    //JQUERY
    let tbody = $("#tbody");
    tbody.empty();
    for(let u of users) {
        let tr = $("<tr></tr>");
        tr.append( $(`<td>${u.id}</td>`) );
        tr.append( $(`<td>${u.firstname} ${u.lastname}</td>`) );
        tr.append( $(`<td>${u.username}</td>`) );
        tr.append( $(`<td>${u.phone}</td>`) );
        tr.append( $(`<td>${u.isReviewer ? "Yes" : "No"}</td>`) );
        tr.append( $(`<td>${u.isAdmin ? "Yes" : "No"}</td>`) );
        tr.append( $("<td>") );
        tr.append( $(`<a href='get-user.html?id=${u.id}'>Detail</a> | `) );
        tr.append( $(`<a href='put-user.html?id=${u.id}'>Edit</a>`) );
        tr.append( $("</td>") );
        tr.append( $("</tr>") );
        tbody.append(tr);
    }    
}