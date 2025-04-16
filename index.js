var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

fields.forEach(function(field, index){

    if(field.name == "gender"){

        if(field.checked){

            console.log("sim");
        }

    }else{

        console.log("não");

    }

});