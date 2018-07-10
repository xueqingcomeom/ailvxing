<?php
   header("Content-Type:application/json;charset=utf8");
   require_once("../init.php");
   @$Iid=$_REQUEST["Iid"];
   $sql=" SELECT count(Iid) as  a  FROM comment  WHERE Iid=$Iid ";
   $result=mysqli_query($conn,$sql);
   $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
   echo json_encode($rows);
 
?>