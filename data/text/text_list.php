<?php  
  header("Content-Type:application/json");
  require_once("../init.php");
  $sql="SELECT t_id,subtitle,title,time,content,froms,pics FROM `vade`";
  $result=mysqli_query($conn,$sql);
  echo json_encode(mysqli_fetch_all($result,1));
  
?>