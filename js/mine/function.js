let loginApp=angular.module("authentification",[]);
let login="";
let password="";
  loginApp.controller("checkLogin",function($scope) {
    setInterval(function(){
      login=$scope.login;
      password=$scope.password;
    },100);
  });
   function authentification() {
    let data={
        login:login,
        password:password
    };
     $.post("http://127.0.0.1/authentification",data,function(result){
         console.log("etp");
     });
  };