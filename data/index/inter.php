<?php
   header("Conter-Type:application/json");
	require_once("../init.php");
	@$Iid=$_REQUEST["Iid"];
	$sql="SELECT uname,pic,Iid,question,fill,title FROM `inter` INNER JOIN alx_user ON user_id=uid LIMIT 6";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
?>
 