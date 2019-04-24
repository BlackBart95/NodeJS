let mysql=require("../node_modules/mysql");
function getConnection(){
    let connection=mysql.createConnection({
        host        : '127.0.0.1',
        database    : 'onlineGame',
        user        : 'root',
        password    : 'root'
    });
    connection.connect(function(error) {
        if(error){
            console.log("Probleme de connection");
            throw error;
        }
        console.log("Connected");
    });
    return connection;
};

module.exports=getConnection;