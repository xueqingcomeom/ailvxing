<?php
   header("Content-Type:application/json;charset=utf8");
   require_once("../init.php");
    session_start();
    @$uid=$_SESSION["uid"];
    if($uid){
      $sql="delete from go_cart where uid=$uid";
      mysqli_query($conn,$sql);
       echo json_encode(["ok"=>1]);
    }
?>
