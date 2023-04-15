var mongoose= require("mongoose");
const uri = "mongodb://localhost/cat_app"
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
    })

var catSchema = new mongoose.Schema({
	 name: String,
	 age: Number,
	 temperament: String
});
var Cat = mongoose.model("Cat", catSchema);
/*
var george = new Cat({
	name: "Mrs. Norris",
	age: 3,
	temperament: "Evil"
});

george.save(function(err,cat){
	if(err){
		console.log("Something went wrong");
	}else {
		console.log("We just save a cat");
		console.log(cat);
	}
});
*/
Cat.create({
	name:"Snow white",
	age: 15,
	temperament: "Bland"
},function(err,cat){
		if(err){
		console.log("Something went wrong");
	}else {
		console.log(cats);
	} 
		 });

Cat.find({},function(err,cats){
		if(err){
		console.log("Something went wrong");
	}else {
		console.log(cats);
	} 
		 })