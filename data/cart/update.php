<?php
   header("Content-Type:application/json;charset=utf8");
   require_once("../init.php");
   @$Yid=$_REQUEST["Yid"];
   @$count=$_REQUEST["count"];
   if($Yid){
     if($count>0){
       $sql="update go_cart set count=$count where Yid=$Yid";
       mysqli_query($conn,$sql);
       echo json_encode(["ok"=>1]);
     }else{
       $sql="delete from go_cart where Yid=$Yid";
       mysqli_query($conn,$sql);
       echo json_encode(["ok"=>1]);
     }
   }

?>