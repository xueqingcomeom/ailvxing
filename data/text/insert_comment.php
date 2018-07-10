<?php
   header("Content-Type:application/json;charset=utf8");
   require_once("../init.php");
   session_start(); 
   @$uid=$_SESSION["uid"];
   @$Iid=$_REQUEST["Iid"];
   $sql=" SELECT commentid,content,datetime,uname,pic FROM comment INTER JOIN alx_user ON user_id=uid WHERE Iid=$Iid ";
   $result=mysqli_query($conn,$sql);
   $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
   echo json_encode($rows);
 
?>