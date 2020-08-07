var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req,res) =>{

	res.send("Welcome to Animals App");

}); 

app.get("/speak/:animal", (req,res)=>{
 
 var sounds = {

 	dog : "boo",
 	cat : "Meow",
 	pig: "oink"
 };

 var animal = req.params.animal;
 var sound = sounds[animal];

 res.send("The " + animal + " says " + sound);

});

app.get("/repeat/:sound/:num", (req,res)=>{

	var sound = req.params.sound;
	var number = req.params.num;
	var result = "";
    
    for(var i = 0; i< number; i++)
    {
    	result += sound + " ";
    }

    res.send(" "+result);

});

app.get("*", (req,res) =>{

    res.send("What are you doing with your life");
})

app.listen(port, ()=>{

	console.log(`Server is running on ${port}`)
});