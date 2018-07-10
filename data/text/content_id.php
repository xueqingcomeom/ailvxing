<?php
  header("Content-Type:application/json");
  require_once("../init.php");
  $t_id=$_REQUEST["t_id"];
  $sql="select * from vade where t_id='$t_id'";
  $result=mysqli_query($conn,$sql);
  $row=mysqli_fetch_assoc($result);
  echo json_encode($row);
?>