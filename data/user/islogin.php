<?php
   header("Content-Type:application/json");
   require_once("../init.php");
   session_start();
   @$uid=$_SESSION["uid"];
   if($uid){
      $sql="select uname,pic from alx_user where uid=$uid";
	  $uname=
		 mysqli_fetch_row(mysqli_query($conn,$sql))[0];
	  $pic=
		 mysqli_fetch_row(mysqli_query($conn,$sql))[1];
      echo json_encode(["ok"=>1,"uname"=>$uname,"pic"=>$pic]);
   }else{
      echo json_encode(["ok"=>0]);
   }


?>