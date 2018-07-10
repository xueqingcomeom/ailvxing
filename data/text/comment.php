<?php
   header("Content-Type:application/json;charset=utf8");
   require_once("../init.php");
   session_start();
   @$uid=$_SESSION["uid"];
   @$Iid=$_REQUEST["Iid"];  
   @$times=$_REQUEST["times"];
   @$content=$_REQUEST["content"];
   $sql=" INSERT INTO `ailvxing`.`comment`(`commentid`,`user_id`,`content`,`datetime`,`Iid`) VALUES  (NULL,$uid,'$content',$times,$Iid)";
    mysqli_query($conn,$sql);
	$count = mysqli_affected_rows($conn);
	if($count>0){
	 echo '{"code":1,"msg":"发表成功"}';
	}else{
	 echo '{"code":-1,"msg":"删除失败"}';
	}
?>