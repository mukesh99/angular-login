<?php 
	$user=json_decode(file_get_contents('php://input'));  //get user from 
	if($user->mail=='m@gmail.com' && $user->pass=='1234') 
		print 'succes';else print 'error';
?>