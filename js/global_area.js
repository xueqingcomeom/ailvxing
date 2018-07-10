$(()=>{
   ajax({
      type:"get",
	   url:"data/around/global_area.php",
	  dataType:"json"
   }).then(data=>{
      var html="";
	  for(var p of data){
	    html+=`<p><img  src=" ${p.dicPic}" width="35px" height="35px"><span>${p.country}</span></p>`;
	  }
	  document.querySelector("div.area_couns").innerHTML=html;
   })
    $(".area_couns").on("mouseover","img",e=>{
          $(e.target).addClass("trans");
   })
	$(".area_couns").on("mouseout","img",e=>{
          $(e.target).removeClass("trans");
	 })
	$(".area_couns").on("click","p",e=>{
		e.preventDefault();
		location="price_list.html";
	})
	/*  var time=new Date("2017/12/30");
	  var year=time.getFullYear();
	  var month=time.setMonth(time.getMonth()-parseInt(Math.random*10));
 	  var data=time.getDate();
	  console.log(year+"-"+month+"-"+data);
	*/
	ajax({
	  type:"get",
	  url:"data/around/around_inter.php",
	  dataType:"json"
	}).then(data=>{
	    var iner="";
		for(var u of data){
		  iner+=`<div>
		     <p class="ques_a">${u.uname} - ${new Date(parseInt(u.datatime)).toLocaleDateString()}</p>
			 <p class="ques_b"><a href="inter_once.html?Iid=${u.Iid}">问：${u.question}</a></p>
			 <p class="ques_c">答：申请人持电子签证从允许的口岸入境就行。 柬埔寨电子签证只能从以下五个口岸入境：金边国际机场；泰国的Cham Yeam (Koh Kong)和Poi Pet 
			  (Banteay Meanchey)口岸。</div>`;
		}
	    document.querySelector("div.ques_inters").innerHTML=iner;
	})
		var rid=1;
		 $(".world").click(function(){
		      var x=event.offsetX;
			  var y2=event.clientY;
			  function map(){
			      if(x<=320){
				$("img").animate({
				   top:-1616
				},1)
			      rid=3;
			  }else if(330<=x&&x<=450){
				  if(y2>310){
					  $("img").animate({
					   top:-1208
					  },1);
					  rid=5;
				  }else if(y2<310){
					  $("img").animate({
					   top:-2020
					  },1);
					rid=2;
				  }	 
              }else if(470<=x&&x<=690){
				  if(y2<400){
				      $("img").animate({
				        top:-404
				     },1)
					  rid=1;
				  }else if(y2>400){
					  $("img").animate({
					   top:-808
					  },1)
                       rid=4;
				  }; 
			    }return rid;

			  }console.log(y2);
			  $(".grolbe").animate({
			     top:200
			     },500);
			  map();
			  console.log(rid);
			  $.ajax({
	             type:"get",
			     url:"data/around/map.php",
                 data:{rid:rid}
	        }).then(data=>{
				html="";
		       console.log(data);	
			   for(var map of data){
			     html+=`<li><a href="price_list.html">${map.cont.split(" ")[0]}</a></li>`;
				 html+=`<li><a href="price_list.html">${map.cont.split(" ")[0]}</a></li>`;

			   }
			   $(".country_list").html(html);
			   $(".ti").html(data[0].area);
	       })
		
	})
			
			 
		
})