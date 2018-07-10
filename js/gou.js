$(()=>{
    table();
    $("#tbody1").on("click","a.reduce",e=>{
        var $tar=$(e.target);
        var Yid=$tar.siblings("input").attr("data-target");
        var input=$tar.parent().children(".input").val();
        if($tar.html()=="+"){
            input++;
        }else if($tar.html()=="-") {
            input--;
        }
        $.ajax({
            type:"get",
            url:"data/cart/update.php",
            data:{Yid:Yid,count:input},
            success:function (data) {
                if(data.ok==1){
                    table();
                }
            },
            error:function(err){
                console.log(err);
        }
        })
    });
    $(".close").html("");
    $(".btn").click(e=>{
        e.preventDefault();
        var name=$("#name").val();
        var phone=$("#phone").val();
        var email=$("#email").val();
        var address=$("#address").val();
        var text=$("#text").val();
        if(name==""){$("#name").siblings().html("✘").css('color','#faa');}else{$("#name").siblings().html("✔");}
        if(phone==""){$("#phone").siblings().html("✘").css('color','#faa');}else{$("#phone").siblings().html("✔");}
        if(email==""){$("#email").siblings().html("✘").css('color','#faa');}else{$("#email").siblings().html("✔"); }
        if(address==""){$("#address").siblings().html("✘").css('color','#faa');}else{$("#address").siblings().html("✔");}
        $.ajax({
            type: "post",
            url: "data/user/user_list.php",
            data: {lname:name,lphone:phone,lemail:email,ldizhi:address,msg:text},
            success:function(data){
               $(".success").show();
                var i=6;
                var tirme=setInterval(function close(){
                    i--;
                    if(i>1){
                       $(".close").html("将再 "+i+"s 自动关闭");
                    }else if(i==1){
                        clearInterval(tirme);
                        tirme=null;
                        $(".close").html("将再 "+0+"s 自动关闭");
                        $(".success").fadeOut(500);
                        location="price_list.html";

                    }
                },1000);
                var scrollTop=$("body").scrollTop();
                var offsetTop=$(".success").offset().top;
                $("body").animate({
                    scrollTop:offsetTop-150
                });
                console.log(scrollTop);

            },
            error: function () {
                console.log("内容有误");
            }
        })
    })
    $("#tbody1").on("click","a.delete",e=>{
        e.preventDefault();
        var $tar=$(e.target);
        var Yid=$tar.parent().siblings().children("input").attr("data-target");
        console.log(Yid);
        console.log(1);
        $.ajax({
            type:"get",
            url:"data/cart/deletea.php",
            data:{Yid:Yid},
            success:function (data) {
                if(data.ok==1){
                    table();
                }
            },
            error:function () {
                alert("网络故障请检查");
            }
        })
    });
    $(".clear").click(e=>{
        e.preventDefault();
        $.ajax({
            type: "get",
            url: "data/cart/delete.php",
            success: function (data) {
                if (data.ok == 1) {
                    table();
                }
            },
            error: function () {
                alert("网络故障请检查");
            }
        })
    });
    function table(){
        var Yid=$("input").attr("data-target");
    $.ajax({
        type:"get",
        url:"data/cart/addcart.php",
        success:function (data) {
            var html=""; var total=0;
            for( var cart of data){
                html+=`<tr class="tr2">
				    <td class="one">
					   <img src="${cart.dicPic}"  width="50px" height="50px">
					   <p>${cart.cont}</p>
					   <p>${cart.youxiao}&nbsp;${cart.max}&nbsp;${cart.day}</p>
					</td>
				    <td>${cart.price}</td>
				    <td>
					    <a class="reduce">-</a>
						<input type="text" value=${cart.count} class="input" data-target="${cart.Yid}">
						<input type="hidden" value="">
						<a class="reduce">+</a>
					</td>
				    <td>${(cart.count*cart.price)}</td>
				    <td><a class="delete">删除</a></td>	
				 </tr>
				 `;
                total += cart.count*cart.price;
            }
            $("#tbody1").html(html);
            $(".btn1>span:eq(0)").html("¥"+total+".00");
            $(".tr3>td").html("¥"+total+".00");
        },
        error:function () {
            alert("网络故障请检查");
        }
    });
    };
});