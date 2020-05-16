
$(document).ready(function(){

    $(".DIV_IGNORE_BR").each(function(index,item) {
        //这个就是jquer循环获取的class对象 你可以用来处理你的逻辑
        $(this).html($(this).html().replace(/\<br\>/g,""));
    });

});
