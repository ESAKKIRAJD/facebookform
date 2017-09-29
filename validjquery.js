$(document).ready(function(){
    $("#facebook").validate({

    	rules:{
    		firstname:{
    			requried:true,
    			minlength:2
    		},
    		lastname:{
    			requried:true,
    			minlength:2
    		},
    		mail:{
    			requried:true,
    			minlength:2
    		},
    		password:{
    			requried:true,
    			minlength:2
    		},
    		day:{
    			requried:true,
    			minlength:1
    		},
    		month:{
    			requried:true,
    			minlength:1
    		},
    		year:{
    			requried:true,
    			minlength:2
    		},
    		gender:{
    			requried:true,
    			minlength:2
    		},

    	},

    messages: {
         
           firstname: {

           	requried:"please enter the username",
           	minlength: "your username consist at least 2 charecters"

           },
           lastname: {

           	requried:"please enter the username",
           	minlength: "your username consist at least 2 charecters"

           },
           mail: {

           	requried:"please enter the password",
           	minlength: "your username consist at least 2 charecters"

           },
           password: {

           	requried:"please enter the password",
           	minlength: "your username consist at least 2 charecters"

           },
           day: {

           	requried:"please enter the day",
           	minlength: "your username consist at least 2 charecters"

           },
           month: {

           	requried:"please enter the month",
           	minlength: "your username consist at least 2 charecters"

           },
           year: {

           	requried:"please enter the year",
           	minlength: "your username consist at least 2 charecters"

           },
           gender: {

           	requried:"please enter the gender",
           	minlength: "your  consist at least 2 charecters"

           }, 
         },
         submitHandler:function(form){
         	return false;
         }    
        
    });
});
















s