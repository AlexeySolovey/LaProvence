<!DOCTYPE html>
<html>
<head>
	<style>
#parent {
	display: table; 
	height: 400px; 
	background: yellow;
	background-image: url(images/baner.png);
	width: 100%;
	text-align: center;
	background-size: cover;
}
#child {
    display: table-cell;
    vertical-align: middle;
}

	</style>
</head>
<body>


	<div id="parent">
		<div id="child">Содержание<br/>
		something</div>
	</div>


</body>
</html>



