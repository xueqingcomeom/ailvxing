<?php
   header("Content-Type:application/json;charset=utf8");
   	require_once("../init.php");
     $lname=$_REQUEST["lname"];
     $lphone=$_REQUEST["lphone"];
     $lemail=$_REQUEST["lemail"];
     $ldizhi=$_REQUEST["ldizhi"];
     $msg=$_REQUEST["msg"];
	 if($lname!=null&&$lphone!=null&&$lemail!=null&&$ldizhi!=null&&$msg!=null){
     $sql="INSERT INTO `user_list`(`lname`,`lphone`,`lemail`,`ldizhi`,`lid`,`msg`) VALUES  ('$lname','$lphone','$lemail','$ldizhi',null,'$msg')";
     mysqli_query($conn,$sql);
     $count = mysqli_affected_rows($conn);
    if($count>0){
        echo json_encode('{"code":1,"msg":"添加成功"}');
     }else{
       echo json_encode('{"code":-1,"msg":"添加失败"}');
     }
	}
?>
