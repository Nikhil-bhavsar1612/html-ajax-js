// $(document).ready(function(){
//     $("#btn").click(function(){
//       $.get("https://reqres.in/api/unknown", function(datae, status){
//         console.log(datae);
//        datae.data.forEach(dt => {
//         $('#tdata').append("<tr>"+
//         "<td>"+dt.id+ "</td>"+
//         "<td>"+dt.name+ "</td>"+
//         "<td>"+dt.year + "</td>"+
//         "<td>"+dt.color+ "</td>"
//         +"</tr>"
        
//         );
       
//     });
        
//       });
//     });
//   });

var xhr = new XMLHttpRequest();
xhr.open("get", "https://reqres.in/api/users", true);
xhr.onload = function(){
    // console.log(xhr.responseText);
    var plainText=JSON.parse(xhr.responseText);
    // console.log(plainText.data);
    plainText.data.forEach(dt => {
        $('#tdata').append("<tr>"+
        "<td>"+dt.id+ "</td>"+
        "<td>"+dt.email+ "</td>"+
        "<td>"+dt.first_name+ "</td>"+
        "<td>"+dt.last_name+ "</td>"+
        "<td>"+dt.avatar+ "</td>"
        
        +"</tr>");
       });   
    
};
xhr.send();

function petTemplate(pet){
    return
    `
    <h1>${pet.first_name}</h1>
    `
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.onload = function(){
    // console.log(xhr.responseText);
    var userArray=JSON.parse(xhr.responseText).data;
    userArray.forEach(dt => {
        $(".user-wrapper").append(
          "<div class='user-info-wrapper'>"+ 
          "<div class='left-section'>" + 
          "<img src='https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'>"+
            
            
        "</div>"+
        "<div class='right-section'>"
                +"<div class='first_name'>"+ dt.first_name+ "</div>"+
                "<div>"+ dt.last_name+ "</div>"+
                "<div>"+ dt.avatar+ "</div>"+
            "</div>"+
        "</div>"
            
        )
    });
};
xhr.send();
		

