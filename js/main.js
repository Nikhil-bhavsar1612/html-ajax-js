$(document).ready(function(){
    $("#btn").click(function(){
      $.get("https://reqres.in/api/users/2", function(datae, status){
        console.log(datae.data.email);
       datae.data.forEach(dt => {
        $('#tdata').append("<tr>"+
        "<td>"+dt.userId+ "</td>"+
        "<td>"+dt.id+ "</td>"+
        "<td>"+dt.title+ "</td>"+
        "<td>"+dt.body+ "</td>"
        
        +"</tr>");
       });
        
      });
    });
  });

