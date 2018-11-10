/**
 * Created by chengcaixia on 2018/10/14.
 */
$(function(){
    $('.product li').hover(function(){

        $(this).find(".product-text").css({"display":"block"})
    },function(){
        $(this).find(".product-text").css({"display":"none"})
    })
})
