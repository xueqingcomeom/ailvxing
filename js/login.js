$(()=>{
   var form=document.getElementById("login");
   console.log(form.lastElementChild);
    form.lastElementChild.onclick=function(){
      ajax({
	     type:"post",
		 url:"data/user/login.php",
		 data:`uname=${form.uname.value}&upwd=${form.upwd.value}`,
		 dataType:"json"
	  }).then(data=>{
	     if(data.ok==0)
	       alert(data.msg);
		 else{
		   var back=location.search.slice(6);
           location=back;
		// location="index.html";
		 }
	  })
   };
     var $Pwd=$("form>input[name=uname]");
     var $name=$("form>input[name=upwd]");
	  var msgs={
	    nameErr:"用户名必须介于6~12位之间!",
		pwdErr:"密码必须介于6~10位之间!"
	 };
	 $Pwd.blur(e=>{
	     cont($(e.target),12,6,msgs.pwdErr);
	 })
	 $name.blur(e=>{
	     cont($(e.target),12,8,msgs.nameErr);
	 })
	 function cont($txt,max,min,text){
	    var len=$txt.val().trim().length;
		var $span=$txt.next();
		if(len>=min||len<=max){
		    $span.html("<img src='../img/skin/ok.png'>");
		    return true;
			console.log($span.html);
		}else{
			$span.html("<img src='../img/skin/err.png'>"+text);
		    return false;
	     }
	 }
	
})