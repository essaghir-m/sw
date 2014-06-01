<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Document sans nom</title>
<style type="text/css">
#file{
	
}
#myframe{
	width:500px;
	height:200px;
	border:1px solid #CCC;
}
</style>
</head>
<body>
<form action="upload.php" method="post" enctype="multipart/form-data" target="myframe">
<input type="hidden" value="prog"  />
<input type="file" name="file" id="file" />
<input type="submit" value="Uplad" />
<br />
<iframe id="myframe"></iframe>

</form>
</body>
</html>
