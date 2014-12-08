'use strict';

app.factory('loginService',function($http){
	return{
		login:function(user,scope){
			var $promise=$http.post('data/user.php',user); //send data to user.php
			$promise.then(function(msg){
				if(msg.data=='succes') scope.msgtxt='Correct Information';
				else scope.msgtxt='Error Information'; 			   
			});
		}
		}
		});
		