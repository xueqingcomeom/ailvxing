<?php
  header("Content-Type:application/json");
  require_once("../init.php");
  $sql="SELECT t_id,title,froms,subtitle,pics FROM `vade` limit 4";
  $result=mysqli_query($conn,$sql);
  echo json_encode(mysqli_fetch_all($result,1));

?>