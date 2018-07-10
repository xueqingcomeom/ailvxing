<?php
require("../init.php");
@$uname = $_REQUEST['uname'];
@$upwd = $_REQUEST['upwd'];
@$email = $_REQUEST['email'];
@$uyzm = $_REQUEST["yzm"];
  //获取系统生成验证码内容
if($uyzm != $_SESSION["captcha"]){
     echo'{"code":-2,"msg":"验证码不正确，请检查"}';
     exit;//停止程序执行
  }
$sql = "INSERT INTO alx_user(uid,uname,email,upwd) VALUES(NULL,'$uname','$email','$upwd')";
      mysqli_query($conn, $sql);

?>