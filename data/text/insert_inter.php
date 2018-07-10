<?php
   header("Content-Type:application/json;chartset=utf8");
   require("../init.php");
   session_start();
   @$uid=$_SESSION["uid"];
   @$question=$_REQUEST["question"];
   @$fill=$_REQUEST["fill"];
   @$title=$_REQUEST["title"];
   $times=$_REQUEST["times"];
   $sql=" INSERT INTO `ailvxing`.`inter` (`Iid`,`question`,`fill`,`title`,`datatime`,`user_id`) VALUES (NULL,'$question','$fill','$title',$times,$uid) ; ";
    mysqli_query($conn,$sql);
	$count = mysqli_affected_rows($conn);
	if($count>0){
	 echo '{"code":1,"msg":"删除成功"}';
	}else{
	 echo '{"code":-1,"msg":"删除失败"}';
	}

    
?>