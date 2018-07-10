$(()=>{
	var Iid=location.search.split("=")[1];
   $.ajax({
     type:"post",
	 url:"data/text/inter_once.php",
	 data:{Iid:Iid}
   }).then(data=>{
	   console.log(data.datatime);
	   var time=parseInt(data.datatime);
      $(".tou").html(
		`<a href="index.html">首页</a>&nbsp;&gt;&nbsp;<a href="inter.html">签证问答</a>&nbsp;&gt;&nbsp;<a href="inter_once.html?Iid=${data.Iid}">${data.question.slice(0,5)+"..."}</a>`);
		$(".left_a").html(`<img src="${data.pic}" style="width:50px; height:50px;border-radius:50%;">
		<p class="msg">
		<span class="msg_name">${data.uname}</span>
		<span class="msg_time">${new Date(time).getFullYear()+"-"+(new Date(time).getMonth()+1)+"-"+new Date(time).getDate()}</span>
		</p>
		<a class="left_title">${data.title}</a>
		<p class="left_quest">${data.question}</p>`);
   });
	 $.ajax({
     type:"post",
	 url:"data/text/inter_l_list.php"
   }).then(data=>{	
	   html="";
	   for(var p of data){
	 html+=`<li><span></span><a href="inter_once.html?Iid=${p.Iid}">${p.question.slice(0,15)+"..."}</a></li>`;
	   }
	$(".right_d").html(html);
   });
     $.ajax({
     type:"post",
	 url:"data/index/vade.php"
   }).then(data=>{	
	   html="";
	   for(var p of data){
	      html+=`<li><span></span><a href="contentid.html?t_id=${p.t_id}">${p.title.slice(0,15)+"..."}</a></li>`;
	   }
	$(".right_e").html(html);
   });
	
	$("#tijiao").click(e=>{
		e.preventDefault();
		var $wenda=$("#wenda").val();
		 var $time = new Date().getTime();
		  $.ajax({
			   type:"get",
			   url:"data/text/comment.php",
			   data:{Iid:Iid,content:$wenda,times:$time},
		      success: function (data) {
                    ajax({
                        type: "get",
                        url: "data/user/islogin.php",
                        dataType: "json"
                    }).then(data => {
                        if (data.ok == 0) {
                            alert("请登录");
                            location="login.html?back="+location.href;
                        } else if ($wenda == ""){
                            alert("内容不能为空");
                        } else{
							location=location.href;
                        }
                    })
            },
            error: function () {
                alert("网络出现故障");
            }		 		   
	   })
   });
	var $name= $(".name_c");
	$.ajax({
	     type:"post",
		 url:"data/text/insert_comment.php",
		 data:{Iid:Iid},
		 success:function(data){
		   var html="";
		   for(var i of data){
			   var time=parseInt(i.datetime);
			   var year=new Date(time).getFullYear();
			   var month=new Date(time).getMonth()+1;
			   var data=new Date(time).getDate();
		      html+=`<div class="user_name">
						<p class="name_c"><img src="img/p/ok.png" alt="">0</p>
						 <p class="name_d">
							 <span>${year+"-"+month+"-"+data}</span>
							 <img src="${i.pic}" alt="">
							 <span>${i.uname}</span>
						 </p>
						 <p class="name_text">${i.content}</p>			  
						 <p class="name_biao"><img src="img/p/pic (5).png" width="15" height="15">评论</p>
				   </div>`;
         }
		   $(".user_n").html(html);

		 },
		 error:function(){
		    alert("网络出现故障");
		 }
	   });
	  $.ajax({
		  type:"post",
		  url:"data/text/count.php",
		  data:{Iid:Iid},
		  success:function(data){
			  console.log(data);
			  $(".left_count").html(parseInt(data[0].a)+"条回复");
		  },
		  error:function(){
			  alert("网络出现故障");
		  }
	  })


});