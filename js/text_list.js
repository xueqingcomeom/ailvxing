$(()=>{
   $.get("data/text/text_list.php")
	   .then(data=>{
       var html="",ppc="",ppt="";
	   for(var p of data){
		  var time=parseInt(p.time);
		  var year=new Date(time).getFullYear();
		  var month=new Date(time).getMonth()+1;
		  var data=new Date(time).getDate();
	      html+=`<div class="list">
			<a class="list_a" href="contentid.html?t_id=${p.t_id}"  title="${p.title}">${p.title}</a>
				<img class="list_b" src="${p.pics}" width="160" height="90">
				<span class="list_c" title="${p.content.slice(0,56)+"......"}">${p.content.slice(0,56)+"......"}<a href="text_list t_id=${p.t_id}.html">查看全文</a></span>
				<span class="list_d">发表与：<a title="${p.froms}">${p.froms}</a>&nbsp;&nbsp;&nbsp;&nbsp;${year+"-"+month+"-"+data}</span>					 
		 </div>`;	
	   
	      ppc+=`<li><a href="t_id=${p.t_id}.html"  title="${p.subtitle.slice(0,25)+"..."}"><span></span>${p.subtitle.slice(0,24)+"..."}</a></li>`;
		  ppt+=`<li><a href="t_id=${p.t_id}.html"  title="${p.title}"><span></span>${p.title}</a></li>`;
		}
       $(".list_s").html(html);
	   $(".nav>ul").html(ppc);
	   $(".hang>ul").html(ppt);
        
   })
	$(".class").on("click","a.list_a",e=>{
            location=location.href;

    })
	

})