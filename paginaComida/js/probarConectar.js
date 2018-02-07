var express =requiere("express");
var mongoose=requiere("mongose");

var app=express();

mongoose.connect("mongodb://localhost/comida");
app.set("view engine","jade");
app.use(express.static("public"));
app.get("/",function(solicitud,respuesta){
    respuesta.render("index");
});
app.listen(8080)
