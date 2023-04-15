const express = require('express');
const app =express();
var mongoose= require("mongoose");
const uri = "mongodb://localhost:27017"
mongoose
    .connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true})
    .then(() => {
        console.log(`Connected to DB ${uri}`)
	})
    .catch((err) => {
        console.log(`Error: ${err.message}`)
    });
var catSchema = new mongoose.Schema({
	 name: String,
	 age: Number,
});
var Cat = mongoose.model("Cat", catSchema);
app.get('/', async (req,res) => {
	let post =await Cat.create({name:"David", age:24});
	res.send('hey there');
});

app.listen(3000, () =>{
	console.log("Server is running");
});