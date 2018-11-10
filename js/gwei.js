// swipehome
$( document ).on( "pagecreate", "#home", function() {
    $( document ).on( "swipeleft swiperight", "#home" , function( e ) {
        
      if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
          if ( e.type === "swipeleft" ) {
              $( "#home-right-panel" ).panel( "open" );
          } else if ( e.type === "swiperight" ) {
              $( "#home-left-panel" ).panel( "open" );
          }
        }
    });
});

// swipeproduct
$( document ).on( "pagecreate", "#product", function() {
    $( document ).on( "swipeleft swiperight", "#product" , function( e ) {
        
      if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
          if ( e.type === "swipeleft" ) {
              $( "#product-right-panel" ).panel( "open" );
          } else if ( e.type === "swiperight" ) {
              $( "#product-left-panel" ).panel( "open" );
          }
        }
    });
});


//圖片上下張
$(function(){
	$("#btnback").bind("click",showprew);
	$("#btnnext").bind("click",shownext);
	//圖片自動變換
	//setInterval(showprew,1500);
});

var index=0;
var phSrc,phname; //目前手機圖檔名、手機名稱
//手機圖片丟進陣列
var arrphSrc = new Array("HTC001.jpg", "HTC002.jpg", "HTC003.jpg", "HTC004.jpg", "HTC005.jpg",
"HTC006.jpg", "HTC007.jpg", "HTC008.jpg", "HTC009.jpg","HTC010.jpg");
//手機名稱
var arrphname = new Array("HTC U12+", "HTC U11 EYEs", "HTC U11+", "HTC U11", "HTC U Ultra",
 "HTC Desire 12+", "HTC Desire 12", "HTC Desire 10 pro dual sim", "HTC One X10", "HTC One A9s");

function showprew(){	//上一筆
	index --;	//指標
	if(index<0){index=9;}
	phSrc = "images/" + arrphSrc[index];
	phname = arrphname[index];
	$("#phoneimg").attr("src",phSrc);
	$("#phonename").text(phname);
}
function shownext(){	//下一筆
	index ++;
	if(index>9){index=0;}
	phSrc = "images/" + arrphSrc[index];
	phname = arrphname[index];
	$("#phoneimg").attr("src",phSrc);
	$("#phonename").text(phname);
}
