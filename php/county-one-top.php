<?php
   header("Content-Type:application/json");
   require("init.php");
   $sql="SELECT indexPic,country,prices,Yid FROM country inner join round on round_id=rid limit 16";
   $result=MYSQLI_QUERY($conn,$sql);
   echo json_encode(mysqli_fetch_all($result,1));





?>