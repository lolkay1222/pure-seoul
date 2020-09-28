$(function() {
    page.init();
});

var page={
    init: function() {
        //Common
        page.common();

        //Main
        page.main();

        //Sub
        page.sub();

        //Pop-Up
        page.popup();
    },
    common: function(){
        //Slider
        $(".slider_box.slider_1").each(function(){
            var slider=$(this);
            var slider_con=$(slider).find(".swiper-container");
            slider_con=new Swiper($(slider_con),{
                loop: true,
                autoHeight: true,
                autoplay:{
                    delay: 3000,
                    disableOnInteraction: true
                },
            });
        });
        $(".slider_box.slider_2").each(function(){
            var slider=$(this);
            var slider_con=$(slider).find(".swiper-container");
            slider_con=new Swiper($(slider_con),{
                loop: true,
                loopedSlides: 1,
                slidesPerView: 1,
                autoHeight: true,
                autoplay:{
                    delay: 3000,
                    disableOnInteraction: true
                },
                navigation:{
                    nextEl: '.swiper-button-next',
                },
                breakpoints:{
                    1200:{
                        loopedSlides: 2,
                    slidesPerView: 2,
                    }
                }
            });
        });
        //Gnb
        $(".btn_gnb").on("click",function(){
            if(!$("#header").hasClass('active')){
                $(this).addClass('active');
                $("#header").addClass('active');
                $("#header .menu_1 .gnb_container").fadeIn(300);
                $("#header .menu_2").fadeIn(300);
            }else{
                $(this).removeClass('active');
                $("#header").removeClass('active');
                $("#header .menu_1 .gnb_container").fadeOut(300);
                $("#header .menu_2").fadeOut(300);
            }
            return false;
        })
        $(window).on("load resize",function(){
            if($(window).width()>=1200){
                $(".btn_gnb").removeClass('active');
                $("#header").removeClass('active');
                $("#header .menu_1 .gnb_container").removeAttr('style');
                $("#header .menu_2").removeAttr('style');
            }
        });
        //Btn
        $(".btn_scroll_top").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        $(window).on("load scroll",function(){
            var target_pos_t=$("#footer .footer_top").position().top + $("#footer .footer_top").height();
            var scroll_pos_b=$(document).scrollTop()+$(window).height();
            if(scroll_pos_b>=target_pos_t){
                $(".btn_scroll_top").removeClass('active');
            }else{
                $(".btn_scroll_top").addClass('active');
            }
        });
    },
    main: function(){
    },
    sub: function(){
    },
    popup: function(){
        $(".popup_open").on("click",function(){
            var attr=$(this).attr('popup-connect');
            if (typeof attr !== typeof undefined && attr !== false) {
                if($('.popup_box[popup-connect="'+attr+'"]').length>0){
                    $(".popup_mask").fadeIn(300);
                    $(".popup_box").fadeIn(300);
                }
            }
            return false;
        })
        $(".popup_active").on("click",function(){
            $(".popup_mask").fadeOut(300);
            $(".popup_box").fadeOut(300);
            return false;
        })
    },
}