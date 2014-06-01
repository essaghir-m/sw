<?php
session_start();

	$name = $_FILES["file"]["name"];
	$dest = $_FILES["file"]["tmp_name"];
	if (!empty($name)){
		$redirect = "file/".$name;
		move_uploaded_file($_FILES["file"]["tmp_name"],$redirect);
		echo "<p>name : $name</p>" ;
		echo "<p>Size :".$_FILES["file"]["size"]."</p>";
		echo "<img src='$redirect' width='200px' height='200px' />";
		}else{
		echo "pas de fichier ..!";	
		}

?>