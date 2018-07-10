$(()=>{
   var $tou=$(".tou"),$left=$(".left"),$right=$(".right"),$cc1=$(".cc1");
    var t_id=location.search.split("=")[1];
	
   $.ajax({
      type:"post",
	  url:"data/text/content_id.php",
	  data:{t_id:t_id}
   }).then(data=>{
	   $(".tou").html(`<p class="tou"><a href="index.html">首页</a>&nbsp;&gt;&nbsp;
	                        <a href="text_list.html">旅游指南</a>&nbsp;&gt;&nbsp;
							<a class="cc1" href="._contentid.html?t_id=${data.t_id}">${data.title.slice(0,5)+"..."}</a></p>`);
	   $(".left_l").html(`<h3>${data.title}</h3>
						<p class="left_1">时间：${new Date(parseInt(data.time)).toLocaleString()} 来源：${data.froms} 作者：${data.writer}</p>
						<div class="left_a">
							<p class="left_2">${data.subtitle}</p>
							<img src="${data.pics}" >
							<p class="left_3">${data.content.slice(0,36)}</p>
							<img src="${data.pic_a}" >
							<p class="left_4">${data.content.slice(37)}</p>
							<img src="${data.pic_b}" >
		                    <p class="left_4">${data.content.slice(37)}</p>
							<img src="${data.pic_c}" ></div>`);
	});
	$.get("data/text/text_list.php",{t_id:t_id})
		.then(data=>{
		var html="",ppc="",ppt="";
	     for(var p of data){
	 html+=`<li><span></span><a href="contentid.html?t_id=${p.t_id}"  title="${p.title}">${p.title}</a>&nbsp;&nbsp;
		 ${new Date(parseInt(p.time)).toLocaleString()}</li>`;
	 ppc+=`<li><span></span><a href="contentid.html?t_id=${p.t_id}"title="${p.subtitle.slice(0,25)+"..."}">${p.subtitle.slice(0,20)+"..."}</a></li>`;
	 ppt+=`<li><span></span><a href="contentid.html?t_id=${p.t_id}"  title="${p.title}">${p.title}</a></li>`;
	 $(".left_c").html(html);
	 $(".right_b>ul").html(ppc);
	 $(".right_c>ul").html(ppt);
	 $(".right_d>ul").html(ppc);
	}
    })
	var img=$(".height");
	$(window).scroll(()=>{
		var offsetTop=img.offset().top;
        if(offsetTop>950){
			img.fadeIn();
		}else{
            img.fadeOut();
		}
	})
	img.click(e=>{
		$("body").animate({
			scrollTop:0
		})
	})
})