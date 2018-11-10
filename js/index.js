/**
 * Created by chengcaixia on 2018/10/9.
 */
window.onload = function () {
    var timer = setInterval(
        function () {
            // 当img加载完成之后，complete对象属性将变为true，
            if (document.getElementById('bannerImg1').complete && document.getElementById('bannerImg2').complete)  {
                document.getElementById('loading').style.display = "none"
                clearInterval(timer)
            }
        }, 1000)
}
$(function(){

    var swiper = new Swiper('.swiper-container', {
       spaceBetween:10,
        effect:"fade",
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:3000,
        loop:true
    });
});
$(function () {
    $(".img-wrap li").hover(function(){
        $(this).find('p').css({"font-weight":"700"});
        $('.content-wrap>div').eq($(this).index()).find("h3").css({"font-weight":"700"})
        $('.content-wrap>div').eq($(this).index()).show().siblings().hide();

    },function(){
        $(this).find('p').css({"font-weight":"400"})
        $('.content-wrap>div').eq($(this).index()).find("h3").css({"font-weight":"400"})
    })
})