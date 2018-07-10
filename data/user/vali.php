<?php
require_once("../init.php");
@$uname=$_REQUEST["uname"];
if($uname){
  $sql="select * from alx_user where uname='$uname'";
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_row($result);
  if($rows)
    echo "false";
  else 
    echo "true";
}