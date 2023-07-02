app.use(express.static("public"));
 
//enable express to parse URL-encoded body i.e. info from HTML form
app.use(express.urlencoded({extended: true}));
 
//GET request
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});
 
//POST request
app.post("/", function(req, res){
var firstName = req.body.fName;
var lastName = req.body.lName;
var email = req.body.email;
  
var data = {
  
}
})
 
//use express app to listen on 3000 and log when it's working
app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
//02e2ab018e
//3de8a6d6df217702d2f51a5aa526d383-us9