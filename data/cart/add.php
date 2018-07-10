<?php
    header("Content-Type:application/json;charset=utf8");
   require_once("../init.php");
   session_start();
   $uid=$_SESSION["uid"];
   $Yid=$_REQUEST["Yid"];
   $count=$_REQUEST["count"];
   if($Yid&&$count&&$uid){
     $sql="select * from go_cart where Yid=$Yid and uid=$uid";
     $result=mysqli_query($conn,$sql);
     if(!mysqli_fetch_row($result)){
       $sql="insert into go_cart values(null,$Yid,$uid,$count,0)";
     }else{
       $sql="update go_cart set count=count+$count where Yid=$Yid and uid=$uid";
     }
     mysqli_query($conn,$sql);
     echo'{"code":1,"msg":"购物车添加成功"}';
}else{
     echo'{"code":-1,"msg":"购物车添加失败"}';
     }


   
  
?>