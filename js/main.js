$(function () {
    
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    $(".header").vegas({
        slides: [
            {   src: 'img/pexels.jpg' },
            {   src: 'img/pexels.jpg',
                video: {
                    src: [
                        'videos/vide-audia6-1.mp4',
                    ],
                    loop: false,
                    mute: true
                }
            }
        ],
    });

    // slick слайдер

    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:4,
        autoplay:true,
        speed:1000,
        autoplaySpeed:800,
        waitForAnimate:false,
        initialSlide:1,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });

     $('.slider_2').slick({
        arrows:true,
        dots:false,
        slidesToShow:1,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        initialSlide:0,
        waitForAnimate:false,
        asNavFor:".slider_3",
    });

     $('.slider_3').slick({
        arrows:false,
        dots:false,
        slidesToShow:5,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        initialSlide:0,
        centerMode:false,
        waitForAnimate:false,
        asNavFor:".slider_2",
   });

   
});
