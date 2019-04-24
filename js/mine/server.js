let express=require("../node_modules/express");
let connectionManager=require("./connectionManager");
let server=express();
let url=require("url");
// Server Configurations
server.use(function(req,resp,next) {
    resp.header("Access-Control-Allow-Origin","*");
    resp.header("Access-Control-Allow-Methods","GET, POST, DELETE, PUT");
    resp.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
server.use(express.urlencoded());
server.use(express.json());
// Functions
server.post("/authentification",function(req,res){
    let login=req.param('login');
    let password=req.param('password');
    let connection=connectionManager();
    let resultFromDb=[];
    let sql="SELECT * FROM PLAYER WHERE login LIKE '"+login+"' AND password like '"+password+"'";
    connection.query(sql,function(error,results,fields){
        if(error){
            res.redirect(url.format({
                // Alefa any amle error.html le errreur
                pathname:"/error",
                query:{
                    erreur:error
                }
            }
            ));
        }
        resultFromDb=results;
        if(resultFromDb.length==0){
            var backURL='/error';
            // do your thang
            res.redirect(backURL);
        }
        connection.end();
    });
    // verification
    res.end();
});
server.use("/",express.static("D:\\Fianarana\\S4\\Tahina\\OnlineGame\\"));
server.use(function(req,resp,next){
    resp.setHeader('Content-Type','text/plain');
    resp.status(404).send('404 Not Found');
});
// Configure Port 
server.listen(80,"127.0.0.1");