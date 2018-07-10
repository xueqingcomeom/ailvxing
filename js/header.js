$(()=>{
  ajax({
    type:"get",
    url:"html/header.html"
  }).then(html=>{
   document.getElementById("header").innerHTML=html; 
    var olgin=document.getElementById("olgin");
	var loginwel=document.getElementsByClassName("loginwel");
	var uname=document.getElementById("uname");
   $("#btnLogin").click((e)=>{
	  e.preventDefault();
       location="login.html?back="+location.href;
   })
   $("#tbtnLogin").click(e=>{
      e.preventDefault();
	  location="zhuce.html";
   })
  var $out=$(".outlogin");     
      $out.click(e=>{
		   e.preventDefault();
	     $.get("data/user/logout.php").then(location.reload(true))
     })
	ajax({
	  type:"get",
	  url:"data/user/islogin.php",
	  dataType:"json" 
	}).then(data=>{
	    if(data.ok==0){
		  olgin.style.display="block";
		  loginwel[0].style.display="none";
		}else{
		  console.dir(olgin)
		  olgin.style.display="none";
		  loginwel[0].style.display="block";

		  uname.innerHTML=data.uname;
		}
	  })
 
	var $loginwel=$(".loginwel"),$welcome=$("#welcome"),$pic=$(".pic_s"),$top=$(".top1");
 /*$loginwel.mouseenter(e=>{
		    $tar=$(e.target);
			if($tar.is($welcome)){
			  $pic.css("height",150);
			   console.log(11);
			}
		})*/
$loginwel.hover(function(e){
		      $tar=$(e.target);
			  $pic.css("height",150);
			  console.log(1);
			  },function(e){
			   $tar=$(e.target);
			   $pic.css("height",0);
			   console.log(2);
		      })
  })
})