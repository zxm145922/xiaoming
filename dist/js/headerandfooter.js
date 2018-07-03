define(["jquery"],function(){
$("header").load("/html/include/header.html",
function(){
    $(".fruit_notice").hover(
        function(){
            $(".new_message").show();
            $(".fruit_notice span").css({"background":"white"});
        },
         function(){
            $(".new_message").hide();
            $(".fruit_notice span").css({"background":"#eeeeee"});
         }
    );
    $(".phone_fruit").hover(
        function(){
            $(".app_down").show();
            $(".phone_fruit a").css({"background":"white"});
        },
         function(){
            $(".app_down").hide();
            $(".phone_fruit a").css({"background":"#eeeeee"});
         }
    );
});
    // 动态异步加载尾部文件
$("footer").load("/html/include/footer.html");
});
