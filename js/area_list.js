$(()=> {
    var kw = location.search.split("=")[1];
    var divPages = document.getElementById("pages");
    var text = document.querySelector(".a_b>input");
    var img = document.querySelector(".a_b>img");
    divPages.onclick = e => {
        var tar = e.target;
        if (tar.nodeName == "A"
            && !tar.className.endsWith("disabled")
            && tar.className != "current") {
            switch (tar.innerHTML) {
                case "上一页":
                    load(--document.querySelector("#pages>.current").innerHTML);
                    break;
                case "下一页":
                    load(++document.querySelector("#pages>.current").innerHTML);
                    break;
                default:
                    load(tar.innerHTML);
            }
        }
    }
    function load(pno = 1) {
        var data = (kw ? "kw=" + kw + "&" : "") + `pno=${pno}`;
        ajax({
            type: "get",
            url: "data/around/list.php",
            data,
            dataType: "json"
        }).then(output => {
            var data = output.data;
            var html = "";
            for (var p of data) {
                html += `<div><p class="area_list">${p.cont}</p>
				<table class="area_box">
				  <tr>
					<td>${p.max}</td>
				    <td>${p.youxiao}</td>
				    <td>${p.day}</td>
				    <td>${p.day}</td>
				    <td>${p.num}</td>
					<td>${p.areas}</td>
				  </tr>
				</table>
				<p class="area_cont">${p.information}</p>
				<a class="area_prices">¥${p.price}</a>
				<a  class="area_look">加入购物车</a>
				<input type="hidden"  class="in" value="${p.Yid}">
				</div>`;
            }
            document.querySelector("div.area_price").innerHTML = html;

            var pno = output.pno, pageCount = output.pagecount;
            var html = `<a href="javascript:;" class="previous ${pno == 1 ? 'disabled' : ''}">上一页</a>`;
            for (var i = 1; i <= pageCount; i++) {
                html += `<a href="javascript:;" class="${pno == i ? 'current' : ''}">${i}</a>`;
            }
            html += `<a href="javascript:;" class="next ${pno == pageCount ? 'disabled' : ''}">下一页</a>`;
            divPages.innerHTML = html;
        })

    }

    load();

    img.onclick = e => {
        e.preventDefault();
        if (text.value.trim() !== "") {
            location = "price_list.html?kw=" + text.value.trim();
        }
        if (location.search.indexOf("kw=") != -1) {
            text.value = decodeURI(location.search.split("=")[1]);
        }
    }
    text.onkeydown = e => {
        if (e.keyCode == 13) {
            img.onclick(e);
        }
    }
    $(".area_price").on("click", "a.area_look", e => {
        e.preventDefault();
        var $tar = $(e.target);
        var Yid = $tar.siblings("input.in").val();
        var count = 1;
        console.log(Yid);
$.ajax({
	type: "get",
	url: "data/user/islogin.php",
	success: function (data) {
        if (data.ok == 0) {
            alert("请登录");
            location = "login.html?back="+location.href;
        } else {
            $.ajax({
                type: "get",
                url: "data/cart/add.php",
                data: {Yid: Yid, count: count},
                success: function (data) {
                	if(data.code>0){
                        location.href = "gou.html";
					}else{
                		console.log(data.msg);
					}

                }
            })
        }
    },
	error: function () {
		alert("网络故障请检查");
	}

        })
    });
    var img=$(".height");
    $(window).scroll(()=>{
        var offsetTop=img.offset().top;
        if(offsetTop>950){
            img.fadeIn(100);
        }else{
            img.fadeOut(100);
        }
    })
    img.click(e=>{
        if($("html").scrollTop()==0){
            $("body").animate({
                scrollTop:0
            })
        }else{
            $("html").animate({
                scrollTop:0
            })
        }

    })
})