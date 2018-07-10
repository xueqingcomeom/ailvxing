<?php
   header("Content-Type:application/json");
   require_once("../init.php");
   $sql="SELECT country,dicPic FROM `country`";
   $result="mysql_fetch_all(mysqli_query($conn,$sql),1)"
//    echo json_encode(mysqli_fetch_all(mysqli_query($conn,$sql),1));
   echo($sql)

?>