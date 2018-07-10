<?php
   header("Content-Type:application/json;charset=utf8");
   require_once("../init.php");
   @$Yid=$_REQUEST["Yid"];
   if($Yid){
       $sql="delete from go_cart where Yid=$Yid";
       mysqli_query($conn,$sql);
       echo json_encode(["ok"=>1]);
   }

?>