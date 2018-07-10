<?php
  header("Content-Type:application/json");
  require_once("../init.php");//_once是使用一次init.php文档
  $sql="select *,uname,pic from inter inter join alx_user on user_id=uid ORDER BY Iid DESC";
  @$pno=$_REQUEST["pno"];
  if(!$pno) $pno=1;
  $pageSize=9;
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,1);
  $count=count($rows);
  $pageCount=ceil($count/$pageSize);
  $sql.=" limit ".($pno-1)*$pageSize.",$pageSize";
  $output=[
     "pageSize"=>$pageSize,
	 "count"=>$count,
	 "pageCount"=>$pageCount,
	 "pno"=>$pno,
	 "data"=>mysqli_fetch_all(mysqli_query($conn,$sql),1)
  ];
  echo json_encode($output);
  
?>