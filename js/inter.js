$(()=>{
	var pages=document.getElementById("pages");
	pages.onclick=e=>{
	   var tar=e.target;
	   if(tar.nodeName=="A"
	      &&!tar.className.endsWith("disabled")
		  &&tar.className!="current"){
	      switch(tar.innerHTML){
		    case "上一页": 
				load(--document.querySelector("#pages>.current").innerHTML);
				break;
		    case "下一页":
				load(++document.querySelector("#pages>.current").innerHTML);
				break;
		    default: load(tar.innerHTML);	       
		  }}}
 function load(pno=1){
    ajax({
	  type:"get",
	  url:"data/text/inter_t.php",
	  data:`pno=${pno}`,
	  dataType:"json"
	}).then(output=>{
		var data=output.data
	   var html="";		
	   for(var user of data){
		   //var year=new Date(user.datatime).getFullYear();
			//  console.log(year);
		    var time=parseInt(user.datatime);
			var year=new Date(time).getFullYear();
			var month=new Date(time).getMonth()+1;
            var data=new Date(time).getDate();
	      html+=`<table class="tdd">		
		  <tr>
			    <td rowspan="3" style="width:80px"><img src="${user.pic}" ></td>
				<td><a href="inter_once.html?Iid=${user.Iid}">${user.question}</a></td>
			</tr>
			<tr>
			  <td>${user.uname}&nbsp;&nbsp;&nbsp;${year+'-'+month+'-'+data}</td>
			</tr>
			<tr>
			  <td><b>${user.title}</b><a class="location" href="inter_once.html?Iid=${user.Iid}">回复</a></td>
			</tr>
		</table>`;
	   }	 
	   document.querySelector("div.one").innerHTML=html;
       var pno=output.pno,pageCount=output.pageCount;
	   var html=`<a href="javascript:;" class="previous ${pno==1?'disabled':''}">上一页</a>`;
       for(var i=1;i<=pageCount;i++){
        html+=`<a href="javascript:;" class="${pno==i?'current':''}">${i}</a>`;
       }
       html+=`<a href="javascript:;" class="next ${pno==pageCount?'disabled':''}">下一页</a>`;
       pages.innerHTML=html;
     })
     }
	 load();
		 ajax({
	      type:"get",
	      url:"data/index/inter.php",
	      dataType:"json"
	    }).then(data=>{
	    var opts="";
		for(var us of data){
        opts+=`<table>
			<tr>
			   <td rowspan="2"><img src="${us.pic}"></td>
			   <td>${us.uname}</td>
			</tr>
			<tr>
			   <td>问题 0 回复 35 评论 66</td>
			</tr>
		 </table>`
        }
	    document.querySelector("div.quest_a_a").innerHTML=opts;
	})
	var $quest_q=$(".quest_q");
	var $btn_1=$(".btn_1");
    var $btn_2=$(".btn_2");
	var $cha=$(".cha");
      $(".quest").click(e=>{
		  e.preventDefault();
	     var $tar=$(e.target);
		 if($quest_q.hide()){
		    $quest_q.show(500);
		 }	
	});
	  $btn_2.click(e=>{
	     e.preventDefault();
		 var $tar=$(e.target);
		    $quest_q.hide(500);
	});
	 $cha.click(e=>{
	     e.preventDefault();
		 var $tar=$(e.target);
		    $quest_q.hide(500);
	});
	$btn_1.click(e=> {
        e.preventDefault();
        var $question = $(".input_1").val();
        var $fill = $(".input_2").val();
        var $title = $(".input_3").val();
        var $time = new Date().getTime();
        $.ajax({
            type: "post",
            url: "data/text/insert_inter.php",
            data: {question: $question, fill: $fill, title: $title, times: $time},
            success: function (data) {
                if ($question == "") {
                    alert("内容不能为空");
                } else if ($title == "") {
                    alert("标签不能为空");
                } else {
                    ajax({
                        type: "get",
                        url: "data/user/islogin.php",
                        dataType: "json"
                    }).then(data => {
                        if (data.ok == 0) {
                            location="login.html?back="+location.href;
                        } else {
							location=location.href;
                        }
                    })
                }
            },
            error: function () {
                alert("网络出现故障");
            }
        })
    })
	  
})