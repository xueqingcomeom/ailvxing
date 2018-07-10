<?php
   header("Content-Type:application/json");
   require_once("../init.php");
   @$Iid=$_REQUEST["Iid"];
   $sql=" SELECT Iid,question,fill,title,datatime,uname,pic FROM inter inter JOIN alx_user ON user_id=uid WHERE Iid=$Iid";
   $result=mysqli_query($conn,$sql);
   $row=mysqli_fetch_assoc($result);
   echo json_encode($row);
?>
