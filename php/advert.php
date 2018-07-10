<?php
   header("Content-Type:application/json");
   require_once("../init.php");
   $sql="select * form advert";
   $result=mysqli_query($conn,$sql);
   $all=mysqli_fetch_all($result,1);
   echo json_encode($all);
?>