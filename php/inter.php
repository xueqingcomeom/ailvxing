<?php
  header("Content-Type:application/json");
  require_once("init.php");//_once是使用一次init.php文档
  $sql="select * from inter";
  $result=mysqli_query($conn,$sql);
  sleep(3);//延时多长时间加载出来
  $all=mysqli_fetch_all($result,MYSQLI_ASSOC);//1代表的是ASSOC 
  echo json_encode($all);
  
?>