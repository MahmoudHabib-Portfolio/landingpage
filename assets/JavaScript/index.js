$(document).ready(function() {

    $("#color_mode").on("change", function () {
        colorModePreview(this);
    });

    function colorModePreview(ele) {
    if($(ele).prop("checked") == true){
        $(".curr1").text("99");
        $(".seas1").text("/Year");
        $(".curr2").text("240");
        $(".seas2").text("/Year");
    }
    else if($(ele).prop("checked") == false){
        $(".curr1").text("0");
        $(".seas1").text("/month");
        $(".curr2").text("99");
        $(".seas2").text("/month");
    }
};
	
	$(".next").html("&#10145;");
	$(".previous").html("&#11013;");

    /*------ Desktop Scrolling -----*/

    $("#home0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".home-header", offsetY:0}});
    });

	$("#kfeature0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".hrd3", offsetY:85}});
    });

    $("#pricing0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".pricehawk", offsetY:75}});
    });

    $("#testi0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".testimonals", offsetY:50}});
    });

    $("#faq0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".faqhawk", offsetY:75}});
    });

    /*------ Mobile Scrolling -----*/
    $("#home1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".home-header", offsetY:0}});
    });

    $("#kfeature1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".feature-header", offsetY:75}});
    });

    $("#pricing1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".pricehawk", offsetY:80}});
    });

    $("#testi1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".testimonals", offsetY:50}});
    });

    $("#faq1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".faqhawk", offsetY:75}});
    });

     /*====== Animate Heading ======*/
	 var h1 = $('.H1');
     var tl = new TimelineLite();

     tl.fromTo(h1, 0.5, {y: -25, autoAlpha: 0, ease:Power1.easeOut}, 
        {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.5');

     ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: {className: 'scrolled',
      targets: '.navhawk'}
    });

     /*Using Gsap Hook Trigger Animate*/
     gsap.registerPlugin(ScrollTrigger);
     /*SKroll Featured iMg */
     gsap.from(".SKroldImg", {
        scrollTrigger: {
            trigger: ".feature-header",
            start: "top center"
        },
        opacity: 0,
        x: '-100%',
        duration: 1
     });

     gsap.to(".SKroldImg", {
        scrollTrigger: {
            trigger: ".feature-header",
            start: "top center"
        },
        delay: 5,
        opacity: 1,
        x:'0%',
        duration: 1
     });

     /*SKroll Heading Opacity*/
     gsap.from(".hrd3 h3", {
        scrollTrigger: {
            trigger: ".feature-header",
            start: "top center"
        },
        opacity: 0,
        duration: 2
     });

     gsap.to(".hrd3 h3", {
        scrollTrigger: {
            trigger: ".feature-header",
            start: "top center"
        },
        opacity: 1,
        duration: 2
     });

     /*SKroll Para Opacity*/
     gsap.from(".hrd3 p", {
        scrollTrigger: {
            trigger: ".feature-header",
            start: "top center"
        },
        opacity: 0,
        y:'75',
        duration: 1
     });

     gsap.to(".hrd3 p", {
        scrollTrigger: {
            trigger: ".feature-header",
            start: "top center"
        },
        opacity: 1,
        y:'0',
        duration: 1
     });

    /*SKroll Stgrr01 Opacity*/
    gsap.from(".stgr01", {
        scrollTrigger: {
            trigger: ".feature-header",
            start: "top center"
        },
        opacity: 0,
        stagger: 0.3,
        y: '-15%',
        duration: 0.5
     });

     gsap.to(".stgr01", {
        scrollTrigger: {
            trigger: ".feature-header",
            start: "top center"
        },
        opacity: 1,
        stagger: 0.9,
        y: '0%',
        duration: 0.5
     });


     /*SKroll Heading2 Opacity*/
     gsap.from(".rise h2", {
        scrollTrigger: {
            trigger: ".HeadHawk2",
            start: "top center"
        },
        opacity: 0,
        duration: 2
     });

     gsap.to(".rise h2", {
        scrollTrigger: {
            trigger: ".HeadHawk2",
            start: "top center"
        },
        opacity: 1,
        duration: 2
     });

     /*SKroll Para Opacity*/
     gsap.from(".rise p", {
        scrollTrigger: {
            trigger: ".HeadHawk2",
            start: "top center"
        },
        opacity: 0,
        y:'75',
        duration: 1
     });

     gsap.to(".rise p", {
        scrollTrigger: {
            trigger: ".HeadHawk2",
            start: "top center"
        },
        opacity: 1,
        y:'0',
        duration: 1
     });

    /*SKroll Stgrr02 Opacity*/
    gsap.from(".award", {
        scrollTrigger: {
            trigger: ".Award-sec",
            start: "top center"
        },
        opacity: 0,
        stagger: 0.3,
        y: '25%',
        duration: 0.5
     });

     gsap.to(".award", {
        scrollTrigger: {
            trigger: ".Award-sec",
            start: "top center"
        },
        opacity: 1,
        stagger: 0.9,
        y: '0%',
        duration: 0.5
     });

     /*SKroll Heading3 Opacity*/
     gsap.from(".rise2 h2", {
        scrollTrigger: {
            trigger: ".pricehawk",
            start: "top center"
        },
        opacity: 0,
        duration: 2
     });

     gsap.to(".rise2 h2", {
        scrollTrigger: {
            trigger: ".pricehawk",
            start: "top center"
        },
        opacity: 1,
        duration: 2
     });

     /*SKroll Para Opacity*/
     gsap.from(".rise2 p", {
        scrollTrigger: {
            trigger: ".pricehawk",
            start: "top center"
        },
        opacity: 0,
        y:'75',
        duration: 1
     });

     gsap.to(".rise2 p", {
        scrollTrigger: {
            trigger: ".pricehawk",
            start: "top center"
        },
        opacity: 1,
        y:'0',
        duration: 1
     });

     /*Toggle Fade*/
     gsap.from(".TSwitch", {
        scrollTrigger: {
            trigger: ".TSwitch",
            start: "top center"
        },
        opacity: 0,
        duration: 1
     });

     gsap.to(".TSwitch", {
        scrollTrigger: {
            trigger: ".TSwitch",
            start: "top center"
        },
        opacity: 1,
        duration: 1
     });

    /*SKroll Stgrr03 Opacity*/
    gsap.from(".pricing", {
        scrollTrigger: {
            trigger: ".TSwitch",
            start: "top center"
        },
        opacity: 0,
        stagger: 0.3,
        y: '25%',
        duration: 0.5
     });

     gsap.to(".pricing", {
        scrollTrigger: {
            trigger: ".TSwitch",
            start: "top center"
        },
        opacity: 1,
        stagger: 0.9,
        y: '0%',
        duration: 0.5
     });

});

