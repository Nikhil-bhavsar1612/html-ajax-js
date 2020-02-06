$(document).ready(function(){
    $("#btn").click(function(){
      $.get("https://reqres.in/api/unknown", function(datae, status){
        console.log(datae);
       datae.data.forEach(dt => {
        $('#tdata').append("<tr>"+
        "<td>"+dt.id+ "</td>"+
        "<td>"+dt.name+ "</td>"+
        "<td>"+dt.year + "</td>"+
        "<td>"+dt.color+ "</td>"
        
        +"</tr>");
       });
        
      });
    });
  });

// var xhr = new XMLHttpRequest();
// xhr.open("get", "https://reqres.in/api/users", true);
// xhr.onload = function(){
//     // console.log(xhr.responseText);
//     var plainText=JSON.parse(xhr.responseText);
//     // console.log(plainText.data);
//     plainText.data.forEach(dt => {
//         $('#tdata').append("<tr>"+
//         "<td>"+dt.id+ "</td>"+
//         "<td>"+dt.email+ "</td>"+
//         "<td>"+dt.first_name+ "</td>"+
//         "<td>"+dt.last_name+ "</td>"+
//         "<td>"+dt.avatar+ "</td>"
        
//         +"</tr>");
//        });   
    
// };
// xhr.send();

