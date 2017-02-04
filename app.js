$(function () {
     $(".widget a,.widget button,.widget input,#btn").button();
     $("a").click(function(event){
        event.preventDefault();//阻止默认事件
    });
     $("#draggable").draggable().resizable();
     $("#droppable").droppable();//表示可拖拽放置，不可以省掉，绑定drop事件时不可省略
     $("#droppable").on("drop",function (event,ui) {
        alert("drop")
        $("#droppable").addClass("ui-state-highlight")
    });
     $("#droppable").on("dropout",function (event,ui) {
        $("#droppable").removeClass("ui-state-highlight")
    });
     $("#select").selectable();
     //select的标签会被添加上.ui-selected，可以在css中预先设置好样式
     $("#btn").on( "click",function () {
         if($("#right").hasClass( "ui-selected")){
             alert("恭喜你选择正确");
         }else {
             alert("回答错误请重新选择！");
         }
     });
     //sortable和selectable不能同时在一个列表中使用
    $("#sortable").sortable();

    /*小控件Widgets*/
    //accrodion控件手风琴伸缩效果
    $("#accrodion").accordion({
        collapsible: true,//点击可伸缩，默认为false不可伸缩
        active: 2, //默认初始激活对象下标（从0开始计数）
        heightStyle: "content",//按照内容大小弹出高度
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }, //将点击状态的符号设定为+和-默认为三角号
    });
});
//progressbar自动增加效果
$( function() {
    var current=0;
    setInterval(changebar,100)//计时器没100毫秒调用一次函数
    function changebar(){
        if (current<=100){
            current++;
        }

    $( "#progressbar" ).progressbar({
        value: current
    });
 }
});
//菜单插件
$(function () {
    $("#meau").menu({position:{ my: "left top", at: "left bottom"}})
});
//滑块插件
$( function() {
    $( "#slider" ).slider({
        slide: function( event, ui ) {
            $( "#sliderValue" ).text( $( "#slider" ).slider("value"));//滑动的同时显示其变化
        }
    });
} );
//下拉菜单spinner
$(function () {
    $("#spinner").spinner();
    $("#spinnerBtn").button().on("click",function () {
        alert( $("#spinner").spinner("value"));//点击按钮获取value值
    });
});



