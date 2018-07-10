<?php
	header("Content-Type:application/json;charset=utf8");
	require_once("../init.php");
	session_start();
	@$uid=$_SESSION["uid"];
	if($uid){
	$sql="SELECT g.Yid,cont,max,youxiao,day,price,count,dicPic FROM `go_cart`g,`area` a,`country` c WHERE g.Yid=a.Yid and c.Yid=a.country_id AND uid=$uid ";
    $result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($rows);
	}
?>