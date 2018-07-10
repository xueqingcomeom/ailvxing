<?php
  header("Content-Type:application/json");
  require_once("../init.php");
  @$kw=$_REQUEST["kw"];
  $sql="SELECT * FROM `area`";
  if($kw){
    $kws=explode(" ",$kw);
	for($i=0;$i<count($kws);$i++){
	  $kws[$i]=" cont like '%$kws[$i]%'";
	}
	  $where=" where ".implode(" and ",$kws);
	  $sql.=$where;
	
  }
  $pageSize=9;
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,1);
  $count=count($rows);
  @$pno=$_REQUEST["pno"];
  if(!$pno) $pno=1;
  $sql.=" limit ".($pno-1)*$pageSize.",$pageSize";
  $output=[
     "pageSize"=>$pageSize,
	 "count"=>$count,
	 "pagecount"=>ceil($count/$pageSize),
	 "pno"=>$pno,
	 "data"=>mysqli_fetch_all(mysqli_query($conn,$sql),1)
  ];
   echo json_encode($output);
?>