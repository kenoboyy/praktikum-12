fetch('https://jsonplaceholder.typicode.com/users/')  
    .then(results => { return results.json(); })   
    .then(function(data) { 
    tableData='';                         
    data.map((key) =>{
        tableData+= 
        `<tr>
            <td>${key.name}</td>
            <td>${key.username}</td>
            <td>${key.email}</td>
            <td>${key.website}</td>
        </tr>`
    });
    document.getElementById('table_body').innerHTML=tableData;
    });