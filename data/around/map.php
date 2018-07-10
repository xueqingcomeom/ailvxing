<?php
  header("Content-Type:application/json;chartset=utf8");
  require_once("../init.php");
  $rid=$_REQUEST["rid"];
  $sql=" SELECT a.Yid,r.area,a.cont FROM area as a ,country as c, round as r where r.rid=c.round_id and c.Yid=a.country_id and r.rid=$rid";
  echo json_encode(mysqli_fetch_all(mysqli_query($conn,$sql),1));

?>