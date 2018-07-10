<?php
  header("Content-Type:application/json");
  require_once("../init.php");//_once是使用一次init.php文档
  $sql="SELECT * ,uname FROM `inter` inter JOIN alx_user ON user_id=uid limit 4";
  $result=mysqli_query($conn,$sql);
  $all=mysqli_fetch_all($result,MYSQLI_ASSOC);//1代表的是ASSOC 
  echo json_encode($all);
  
?>