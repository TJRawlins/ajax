$(() => {
    get_users()
})

// const get_users = () => {
//     let http = new XMLHttpRequest();
//     http.responseType = "json";
//     http.open("GET", "http://localhost:5555/api/users", true);
//     // Always pass response data into a function
//     http.onload = () => {
//         console.log(http.response);
//         display(http.response);
//     }
//     // Execute the call
//     http.send();
// }

// JQUERY
const get_users = () => {
    $.getJSON("http://localhost:5555/api/users")
        .done((res) => {
            console.log(res)
            display(res)
        })
        .fail((err) => {
            console.error(err);
        });
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
        let a1 = $(`<a href='get-user.html?id=${u.id}'>Detail</a>`);
        let a2 = $(`<a href='put-user.html?id=${u.id}'>Edit</a>`);
        let sep = $("<span> | </span>")
        let tda = $("<td></td>");
        tda.append(a1);
        tda.append(sep)
        tda.append(a2);
        tr.append(tda)
        tbody.append(tr);
    }    
}