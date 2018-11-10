//做用：廣告圖片自動變換
//呼叫 ad(秒數)，圖片的 id="adimg" , 文字說明的 id="adname" , 超連結的 id="adhref"

var i=0;
var adSrc,adname,adhref; //目前圖檔名、名稱、超連結
//圖片丟進陣列
var arrphSrc = new Array("HTC001.jpg", "HTC002.jpg", "HTC003.jpg", "HTC004.jpg", "HTC005.jpg",
"HTC006.jpg", "HTC007.jpg", "HTC008.jpg", "HTC009.jpg","HTC010.jpg");
//名稱
var arrphname = new Array("HTC U12+", "HTC U11 EYEs", "HTC U11+", "HTC U11", "HTC U Ultra",
 "HTC Desire 12+", "HTC Desire 12", "HTC Desire 10 pro dual sim", "HTC One X10", "HTC One A9s");
//超連結
var arrhref = new Array("https://goo.gl/5sZBx5", "https://goo.gl/uqjNYN", "https://goo.gl/ztBLka", "https://goo.gl/Na1bFE"
	, "https://goo.gl/YUZiGG", "https://goo.gl/d68Ndf", "https://goo.gl/t8As1o", "https://goo.gl/9hJrfE"
	, "https://goo.gl/XExc47", "https://goo.gl/G7Atqz")

//這個function呼叫下面的function
function ad(sec){
	setInterval(adimg , sec * 1000);
}

function adimg(){
	i ++;
	if(i>9){i=0;}
	adSrc = "images/" + arrphSrc[i];
	adname = arrphname[i];
	adhref = arrhref[i];	
	$("#adimg").attr("src",adSrc);
	$("#adname").text(adname);
	$("#adhref").attr("href", adhref);
}