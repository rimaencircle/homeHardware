

$(document).ready(function () {

    $(document).foundation();

  /*Sticky Header*/
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 200) {
        $('.sticky-nav').addClass('is-sticky');
        $('.hh_header').addClass('is-sticky');
      } else {
        $('.sticky-nav').removeClass('is-sticky');
        $('.hh_header').removeClass('is-sticky');
      }
  });
  $('p').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
      $this.remove();
  });
  $('p span').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
      $this.remove();
  });

     // js for onscroll animation
    gsap.registerPlugin(ScrollTrigger);

    const zoomAnim = gsap.utils.toArray('.zoomAnim');
    zoomAnim.forEach((box, i) => {
        const zoomanim = gsap.to(box.children,0.5, {duration: 0.6, scale: 1.001});
        ScrollTrigger.create({
            trigger: box,
            ease: 'power2.in',
            animation: zoomanim,
            once: false,
        });
    });
    const imageAnim = gsap.utils.toArray('.imageAnim');
    imageAnim.forEach((box, i) => {
        const imageanim = gsap.to(box.children, {
            left: '0',
            transition: 'all 1s cubic-bezier(0.23, 0.93, 0.23, 0.93)',
        });
        ScrollTrigger.create({
            trigger: box,
            ease: 'power2.in',
            animation: imageanim,
            once: false,
        });
    });
    const textAnim = gsap.utils.toArray('.textAnim');
    textAnim.forEach((box, i) => {
        const textanim = gsap.fromTo(box.children, { y: '100%', opacity: 0 ,autoAlpha:0, transition: 'all 1s cubic-bezier(0.23, 0.93, 0.23, 0.93)',}, { duration: 0.8, y: 0, opacity: 1 ,stagger: 1,autoAlpha:1});
        ScrollTrigger.create({
            trigger: box,
            animation: textanim,
            once: false,
        });
    });

    const labelAnim = gsap.utils.toArray('.labelAnim');
    labelAnim.forEach((box, i) => {
      const labelAnim = gsap.to(box, {
            duration: 0.8,
            y: '0%',
            transition: 'all 1s cubic-bezier(0.23, 0.93, 0.23, 0.93)',
        });
        ScrollTrigger.create({
            trigger: box,
            animation: labelAnim,
            once: false,
        });
    });
    const left_anim = gsap.utils.toArray('.left_animet');
      gsap.registerPlugin(ScrollTrigger);
      left_anim.forEach((leng, i) => {
      const anim = gsap.fromTo(leng.children, { autoAlpha: 0, x: "-100%" }, { x: 0, autoAlpha: 1, duration: 1, delay: 0.25, stagger: 0.5 });
      ScrollTrigger.create({
        trigger: leng,
        ease: "power3.in",
        animation: anim,
        toggleActions: 'play none none none',
      });
    });
    $('.sidebar_toggle').click(function(){
        $('.humburgur').toggleClass('open');
        // $('html').toggleClass('overflow-hidden');
    });
    // $('.close-icon').click(function(){
    //     $('.humburgur').removeClass('open');
    //     $('html').toggleClass('overflow-hidden');
    // });

    // swiper section

    var homeSwiper = new Swiper('.heroSwiper', {
        effect: 'fade',
        speed:'3000',
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    var productSwiper = new Swiper('.productSwiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1299: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

});

    


