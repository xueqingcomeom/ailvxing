<?php
  header("Content-Type:application/json");
  require_once("../init.php");
  session_start();
  @$uname=$_REQUEST["uname"];
  @$upwd=$_REQUEST["upwd"];
  @$uyzm = $_REQUEST["yzm"];
  $_SESSION["captcha"];
  if($uyzm != $_SESSION["captcha"]){
         echo'{"code":-2,"msg":"验证码不正确，请检查"}';
         exit;//停止程序执行
  }
   if($uname&&$upwd){
      $sql="select uid,uname,pic from alx_user where uname='$uname' and binary upwd='$upwd'";
	  $result=mysqli_query($conn,$sql);
	  $row=mysqli_fetch_all($result,1);
      if(count($row)){
		$_SESSION["uid"]=$row[0]["uid"];
		 echo json_encode(
          ["ok"=>1,"msg"=>$row[0]["uname"],"code"=>$row[0]["pic"]]
          );
      }else
		 echo json_encode(
	     ["ok"=>0,"msg"=>"用户名或密码错误"]
    );
}
  

  
  
  
  
?>