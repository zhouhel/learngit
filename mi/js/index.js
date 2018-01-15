$(document).ready(function() {

	//设置购物车按钮的hover效果
	$("#head_car").hover(function() {
		$(this).css("background", "#FFFFFF");
		$(".head_car_text").css("color", "#ff6700");
		$("#car_content").css({
			"height": "100px",
			"border-width": " 0 1px 1px 1px"
		});
		setTimeout(function() {
			$(".car_text").html("购物车中还没有商品，赶紧选购吧！")
		}, 300);
	}, function() {
		$("#car_content").css("height", "0px");
		$(".car_text").html("");
		setTimeout(function() {
			$("#head_car").css("background", "#424242");
			$(".head_car_text").css("color", "#b0b0b0");
			$("#car_content").css("border-width", "0");
		}, 300);
	})

	//打开【地区选择】模块
	$("#Select_Region_but").on("click", function(e) {
		$("#body_mask").show();
		$("#region_box").animate({
			top: "100px",
			opacity: "1"
		}, 100, "linear");
		e.stopPropagation();
	});

	//设置【关闭地区选择】模块效果
	function close_region() {
		$("#body_mask").hide();
		$("#region_box").animate({
			top: "-480px",
			opacity: "0"
		}, 100, "linear");
	}
	$("#close_region_but").on("click", function() {
		close_region();
	})

	//点击非自己即关闭
	$(document).on("click", function(e) {
		if($(e.target).closest("#region_box").length == 0) {
			close_region();
			$("#body_mask").hide();
		}
	})

	// 导航区菜单移入效果
	$('.menu_li').hover(function(){
		var menu_li_index=$(this).index();//获取索引
		$('#menu_content_bg').css('height','230px');//隐藏框显示
		$('#menu_content_wrap ul').css('top','-'+ menu_li_index*230+'px')//让对应的隐藏框中的li显示在当前位置
	},function(){
		$('#menu_content_bg').css('height','0px');
	});

	$('#menu_content_bg').hover(function(){
		$(this).css('height','230px')
		
	},function(){
			$(this).css('height','0px')
	});

	// 搜索框下拉列表
	$('#find_input').focus(function(){
		$('#find_hot').show();//让下拉列表出来
		$('#find_wrap,#find_but').css('border-color','#ff6700')
		$('#find_bar_word').hide();
	})
	$('#find_input').blur(function(){
		$('#find_hot').hide();//让下拉列表出来
		$('#find_wrap,#find_but').css('border-color','#f0f0f0')
		$('#find_bar_word').show();
	})
	//失去焦点



//--------------轮播图--------------------------

var i=0;
pic_timer='';
var pic_ul=$('#big_banner_pic');//这是那个放图片的ul
var pic_len=$('#big_banner_pic li').length;//图片的张数
pic_ul.css('width',pic_len*1226+"px");//设置轮播图容器的宽度

// 初始化轮播图函数
function pic_init(){
	var changeLeft=i*-1226+'px';//设置图片滚动的距离的变量;
	pic_ul.animate({
		opacity:'0.2'
	},200,function(){
		pic_ul.css('left',changeLeft);
		pic_ul.animate({
			opacity:'1'
		},200)
	})
	$('#big_banner_change_wrap ul li').eq(i).css('background','white').siblings().css('background','#9d9d9d')
}
// 定时器
pic_timer=setInterval(pic_change,2000);
function pic_change(){
	i++;
	if (i>=pic_len) {i=0;}
	pic_init() //调用初始化轮播图函数
}
//鼠标移入清除定时器
$('#big_banner_change_wrap').hover(function(){
	clearInterval(pic_timer);
},function(){ //鼠标移开后执行的事件
	pic_timer=setInterval(pic_change,2000);

})

//上一张
$('#big_banner_change_prev').on('click',function(){
	i--;
	if (i<0) {i=pic_len-1;};
	pic_init()

})
//下一张
$('#big_banner_change_next').on('click',function(){
	i++;
	if (i>=pic_len) {i=0;};
	pic_init()

})

//作用对应的小圆点
$('#big_banner_change_wrap ul li').on('click',function(){
var pic_index=$(this).index();
i=pic_index;
pic_init()
})



//////////////调整隐藏框的位置/////////////////

$('#banner_menu_wrap>li').each(function(){//用于没有事件调用的情况下,给类数组的对象元素加函数的时候用each遍历,相当于for循环
var i=$(this).index(); //设置索引
$(this).find('div').css('top',-(i*42+20)+'px')


})

///////////////整行轮播(小单品)/////////////
// 点击右按钮
$('#head_hot_goods_next').on('click',function(){
	$('#head_hot_goods_content ul').css('left','-1226px');
	$(this).css({
		'color':'#e0e0e0',
		'cursor':'default'
	});
	$('#head_hot_goods_prave').css({
		'color':'#bebebe',
		'cursor':'pointer'
	})
})

$('#head_hot_goods_prave').on('click',function(){
	$('#head_hot_goods_content ul').css('left','0');
	$(this).css({
		'color':'#e0e0e0',
		'cursor':'default'
	});
	$('#head_hot_goods_next').css({
		'color':'#bebebe',
		'cursor':'pointer'
	})
})






//数组的

var floor_con=new Array(
// 智能硬件
	new Array(
		new Array('','','',''),
		new Array('images/24.png','小米路由器3','四天线设计,更快更强','149元'),
		new Array('images/25.png','米家IH电饭煲','IH电磁环绕加热,3000+煮米方案','399元'),
		new Array('images/26.png','小米VR眼镜','12月15日早10点开售','199元'),	
		new Array('images/27.png','小米净水器(厨下式)','隐藏安装,大流量直出纯净水','1999元'),
		new Array('images/28.png','米家恒温电水壶','水温智能控制,304不锈钢内胆','199元'),
		new Array('images/29.png','米家LED智能台灯','无可视频闪,亮度色温无级调节','159元'),
		new Array('images/30.png','米家小白智能摄像机','360度全景拍摄,双向语音通话','399元'),
		new Array('images/31.png','九号平衡车','年轻人的酷玩具,骑行遥控两种玩法','1999元')	
	),

//  搭配
	new Array(
		new Array('','','',''),
		new Array('images/tp2.jpg','小米移动电源2','149元','2260人评价'),
		new Array('images/33.png','小米蓝牙耳机青春版','59元','920人评价'),
		new Array('images/34.png','小米小钢炮蓝牙音箱2','129元','1.8万人评价'),	
		new Array('images/35.png','小米净水器(厨下式)','99元','2.7万人评价'),
		new Array('','','',''),
		new Array('images/39.png','小米车载充电器','49元','3.8万人评价'),
		new Array('images/37.png','小米车载充电器','39元','1987人评价'),
		new Array('images/38.png','小米移动电源5000mAH','98元','9.8万人评价'),
		new Array('images/40.png','小米随身蓝...','69元',''),	
		new Array('','','','热门')

	),
//耳机音箱
	new Array(
		new Array('','','',''),
		new Array('images/ej.jpg','小米头戴式耳机','199元','1999人评价'),
		new Array('images/ej2.jpg','小米胶囊耳机','69元','33人评价'),
		new Array('images/35.png','小米圈铁耳机Pro','149元','199人评价'),	
		new Array('images/ej4.jpg','小米随身蓝牙音响','69元','23人评价'),	
		new Array('','','',''),
		new Array('images/ej5.jpg','小米小钢炮蓝牙音箱2','129元','1999元'),
		new Array('images/ej6.jpg','方盒子音响','99元',''),
		new Array('images/ej7.jpg','米家LED智能台灯','58元',''),
		new Array('images/35.png','小米便携耳...','69元',''),
		new Array('','','','耳机音箱')

	),
//电源
	new Array(
		new Array('','','',''),
		new Array('images/dy.jpg','移动电源5000mAh','49元','399人评价'),
		new Array('images/dy2.jpg','移动电源10000mAh','99元','3965人评价'),
		new Array('images/dy3.jpg','移动电源10000mAh高配','69元','1199人评价'),	
		new Array('images/dy5.jpg','移动电源20000mAh','149元','344人评价'),	
		new Array('','','',''),
		new Array('images/dy4.jpg','移动电源10000mAh2','79元',''),
		new Array('images/dy5.jpg','移动电源20000mAh2','149元',''),
		new Array('images/dy6.jpg','移动电源插线板','39元',''),
		new Array('images/dc.jpg','小米智能管...','59元',''),
		new Array('','','','电源')

	),
//电池储存卡
	new Array(
		new Array('','','',''),
		new Array('images/dc.jpg','金士顿8G储存卡','24.9元','1999人评价'),
		new Array('images/dc2.jpg','32GB高速储存卡','69.9元','1219人评价'),
		new Array('images/dc3.jpg','小米5号电池','9.9元','129人评价'),	
		new Array('images/dc4.jpg','小米7号电池','9.9元','196人评价'),	
		new Array('','','',''),
		new Array('images/ej7.jpg','小米USB接口','69元','8879人评价'),
		new Array('images/dc5.jpg','充电电池套装','88元','1239人评价'),
		new Array('images/dc6.jpg','米家车载充电器','49元','98人评价'),
		new Array('images/dy.jpg','sanDike 16...','31.9元',''),
		new Array('','','','电池储存卡')

	)

)
//智能硬件数据加载
function add_floor1_goods(){
	var floor_1=$('#floor_1 .floor_goods_wrap_li');//所有1楼的li
	floor_1.each(function(i){
		$(this).find('.floor_goods_img img').attr("src",floor_con[0][i][0]);
		$(this).find('.floor_goods_tit').html(floor_con[0][i][1]);
		$(this).find('.floor_goods_txt').html(floor_con[0][i][2]);
		$(this).find('.floor_goods_price').html(floor_con[0][i][3]);
	})
}
add_floor1_goods();



//搭配数组加载
var floor_arry='1';
function change_floor_goods(){
	var floor_2=$('#floor_2 .floor_goods_wrap_li');//所有1楼的li
	floor_2.each(function(i){
		$(this).find('.floor_goods_img img').attr("src",floor_con[floor_arry][i][0]);
		$(this).find('.floor_goods_tit').html(floor_con[floor_arry][i][1]);
		$(this).find('.floor_goods_price').html(floor_con[floor_arry][i][2]);
		$(this).find('.floor_goods_txt').html(floor_con[floor_arry][i][3]);
	})
}
change_floor_goods()

//选项卡移入事件
$('#floor_1_list ul li').on('mouseover',function(){
	floor_arry=$(this).index()+1;
	change_floor_goods() //调用数据加载函数
})


//视频链接数据
var vido_con=new Array(
	new Array("红米Note 2 青春首选","http://player.youku.com/player.php/sid/XMTMwODUxNzAwMA==/v.swf"),
	new Array("MIUI7性能极速体验","http://player.youku.com/player.php/sid/XMTMwODQ0NTY5Ng==/v.swf"),
	new Array("60秒看懂小米Note有多酷","http://player.youku.com/player.php/sid/XODcyMjA1MTQw/v.swf"),
	new Array("安卓机皇 小米Note顶配版","http://player.youku.com/player.php/sid/XMTI1NTI5NzM4MA==/v.swf")
)

//视频
var vido_w=$("#vido_div").width();//视频层的宽
var window_w=$(window).width();//可视区域的宽
var vido_left=(window_w / 2) - (vido_w / 2);//视频层的left数值
$("#vido_div").css("left",vido_left);//设置视频层的初始水平位置


function vido_div_position(){ //设置视频层显示时相对窗口正中间
	var vido_w=$("#vido_div").width();
	var vido_h=$("#vido_div").height();
	var window_w=$(window).width();
	var window_h=$(window).height();
	var vido_left=(window_w / 2) - (vido_w / 2);
	var vido_top=(window_h / 2) - (vido_h / 2);
	$("#vido_div").animate({
		left: vido_left,
		top: vido_top
	},500)
}

$(window).resize(function(){ //窗口大小变化时,视频层位置
	vido_div_position();
})

$(".vido_wrap").on("click",function(e){ //打开视频
	var i=$(this).index();//设置自定义变量
	//embed既可以当做视频标签也可以当做音频标签,里面src里面放什么资源就返回什么效果
	var vido_src = "<embed src='" + vido_con[i][1] + "'allowFullScreen='true' quality='high' width='907' height='550' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>";

	$("#vido_src").html(vido_src);//vido_src 是弹窗中放视频的
	$("#body_mask").show();//遮罩层
	$("#vido_div").css("opacity","1");//视频弹窗
	vido_div_position()//调用位置函数
	e.stopPropagation();//阻止浏览器默认事件

})

$("#close_vido_div").on("click",function(){ //关闭视频
	$("#body_mask").hide(); //遮罩层
	$("#vido_div").animate({
		"opacity":"0",
		"top": "-100%"
	},500,function(){
		$("#vido_src").html("");
	})
})










})
