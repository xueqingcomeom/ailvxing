$().ready(()=>{

//签证问答
   ajax({
    type:"post",
	url:"data/index/inter.php",
	dataType:"json"
   }).then(data=>{
	   var html="";
       for(var inter of data){
		   html+=`<div>
				<img src="${inter.pic}" width="40px" height="40px"><span>${inter.uname}</span>
				<p class="fill"><a  href="inter_once.html?Iid=${inter.Iid}">${inter.fill.slice(0,27)+"..."}</a></p>
				<p class="news">首先要确认申请人目前所在地在哪里，属于哪个领区的。不同的领区对资产要求会不有所区别。
				                 申请单次...</p>
				<a>${inter.title}</a>
			</div>`;
			
			}
				    
		  $(".title1").html(html);
       
   })
//特惠活动
  $.ajax({
    type:"get",
	url:"data/index/play_msg.php"
  }).then(data=>{
      var html="";
      var i=1
	  for(var p of data){
	     html+=`<div class="bin">
             
			 <div class="bin_i">
			   <img src='${p.play_pic}'>
			   <b>热门推荐</b>	
			   <div id="Cont1">
			     <h5>金秋十月 特价超值</h5>
			     <h6>${p.inter}</h6>
			     <h5>${p.price}</h5>
			   </div>	  
		     </div>
		     <div class="msg">
			   <img src="skin/timg(${i++}).jpg" alt="">
		     </div>
		 </div>`;
	  }
	   var div=$("#Cont-Pic");
		  div.html(html);
       div.on("click",".msg>img",e=>{
           location="round.html";
	   })
  })
 //旅游指南title,froms,subtitle,pics
    ajax({
	  type:"get",
	  url:"data/index/vade.php",
	  dataType:"json"
	}).then(function(data){
	   var opts="";
	   for(var v of data){
	     opts+=`<table class="Class1"  cellspacing="15">
			<tr>
				<th rowspan="3">
				<img src="${v.pics}" width="287" height="170">
				</th>
				<th><a href="contentid.html?t_id=${v.t_id}" class="a">${v.title}</a></th>
			</tr>	
			<tr>  
				<th><a href="#">发表于：<b>${v.froms}</b></a></th>
			</tr>	
			<tr> 
				<th>${v.subtitle.slice(0,30)+"..."}</th>
			</tr>		
		 </table> `;
	   }
	   document.getElementById("vade").innerHTML=opts;
	
	})
	var $lift=$("#lift");
  //为window绑定滚动事件
  $(window).scroll(()=>{
    // var scrollTop=$("html,body").scrollTop();
	if($("html").scrollTop()!=0){
		var scrollTop=$("html").scrollTop();
	}else{
		var scrollTop=$("body").scrollTop();
	}
    var $f1=$("#f1");
    var offsetTop=$f1.offset().top;
    if(offsetTop<scrollTop+innerHeight/2-420)
      $lift.fadeIn(500);
    else
      $lift.fadeOut(500);
    var $floors=$(".floor");
    $floors.each((i,elem)=>{
      var $f=$(elem);
      if($f.offset().top<scrollTop+innerHeight/2-420)
        $lift.find(".lift_item:eq("+i+")")
          .addClass("hover")
          .siblings().removeClass("hover");
    })
  })
  //为$lift下的ul绑定单击事件，只允许li访问
  $lift.children("ul").on("click","li.lift_item",function(e){
	e.preventDefault;
	$("li>a").preventDefault;
    var $li=$(this);
    var i=$li.index();
    var $fi=$(".floor:eq("+i+")");
    var offsetTop=$fi.offset().top;
    // $("html").animate({
	if($("html").scrollTop()!=0){
	    $("html").animate({
           scrollTop:offsetTop-10
        },500)
	}else{
		$("body").animate({
		  scrollTop:offsetTop-10
		},500)
	}
    });
    $lift.children("ul").on("click","li.lift_last",function(e){
        e.preventDefault;
        $("li>a").preventDefault;
        if($("html").scrollTop()!==0){
            $("html").animate({
                scrollTop:0
            },500)
        }else{
            $("body").animate({
                scrollTop:0
            },500)
        }
    });
    $(function(){
        $('#Banner_simple').allinone_thumbnailsBanner({
            skin: 'simple',
            numberOfThumbsPerScreen:7,
            width: 1200,
            height: 420,
            thumbsReflection:0,
            defaultEffect: 'random'
        });
    });
//国家图片
    var $wall=$(".wall");
    var $bigpic=$("[data-image=bigpic]");
    var $big=$(".big");
    $.ajax({
        type:"get",
        url:"php/county-one-top.php"
    }).then(data=>{
        console.log(data);
        var html="";
        for(var p of data){
            html+=`<a class="article">
		    <img src="${p.indexPic}" style="width:275px"/>
            <h2>${p.country}<span>${p.prices}</span></h2>
		    </a>`;
        }
        $(".wall").html(html);
        $wall.on("click","img",e=>{
            var $tar=$(e.target);
            var $in=$tar[0].src;
            $bigpic[0].src=$in.slice(26);
            $big.show(500);
            var scrollTop=$("body").scrollTop();
            var offsetTop=$big.offset().top;
            console.log(offsetTop);
            $("body").animate({
                scrollTop:offsetTop-150

            },500);
        });
        var $left=$(".leftOFF");
        var $right=$(".rightOFF");
        var i=0;
        $left.click(e=>{
            if(i>0){
                $bigpic[0].src=data[i--].indexPic;
            }
        });
        $right.click(e=>{
            if(i<data.length-1){
                $bigpic[0].src=data[i++].indexPic;
            }
        });
    });
    $(".wall").on("click","h2",e=>{
        location="price_list.html";
    });
    $(".big>span").click(e=>{
        $(".big").hide(500);
    });
    $("canvas.mycanvas").on("click","div",e=>{
        location="price_list.html";
    })
 });