$(function () {
  /* =========================
     GNB SCROLL
  ========================= */
  $(".gnb > li > a").on("click", function (e) {
    if (!this.hash) return;
    e.preventDefault();

    const hash = this.hash;
    const target = $(hash);

    if (!target.length) return;

    $("html, body").animate(
      {
        scrollTop: target.offset().top - 50,
      },
      500
    );
  });

  /* =========================
     TOP BUTTON
  ========================= */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 700) {
      $("#top_btn").fadeIn(300);
    } else {
      $("#top_btn").fadeOut(300);
    }
  });

  $("#top_btn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  /* =========================
     RESIZE CHECK
  ========================= */
  function handleResize() {
    if ($(window).width() < 768) {
      console.log("모바일에서 실행될 스크립트");
    } else if ($(window).width() < 1200) {
      console.log("태블릿에서 실행될 스크립트");
    } else {
      console.log("데스크탑에서 실행될 스크립트");
    }
  }

  $(window).on("resize", handleResize);
  handleResize();

  /* =========================
     SKILL BAR
  ========================= */
$(".skill_wrap").each(function (i) {
  const wrap = $(this);
  const bar = wrap.find(".skill_bar");
  const percentText = wrap.find(".skill_label strong");
  const percent = parseInt(percentText.text(), 10);

  let num = 0;

  // 처음엔 바를 0으로
  bar.css("width", "0%");

  bar.delay(i * 200).animate(
    {
      width: percent + "%"
    },
    700,
    function () {
      const counter = setInterval(function () {
        num++;

        if (num >= percent) {
          num = percent;
          clearInterval(counter);
        }

        percentText.text(num + "%");
      }, 10);
    }
  );
});

  // ==========================
// PROJECT POPUP
// ==========================

// 팝업 열기
$(".trigger").click(function(e){

  e.preventDefault();

  const imgSrc = $(this).data("image");

  $(".popup_img").attr("src", imgSrc);

  $(".project_bg").addClass("active");

});


// 팝업 닫기
$(".popup_close").click(function(){

  $(".project_bg").removeClass("active");

});


// 배경 클릭시 닫기
$(".project_bg").click(function(e){

  if($(e.target).hasClass("project_bg")){
    $(".project_bg").removeClass("active");
  }

});

  /* =========================
     SWIPER
  ========================= */
  const workSwiper = new Swiper(".workSwiper", {
    pagination: {
      el: "#work .swiper-pagination",
      clickable: true,
    },
    spaceBetween: 20,
  });

  const projectSwiper = new Swiper(".projectSwiper", {
    pagination: {
      el: "#project .swiper-pagination",
      clickable: true,
    },
    spaceBetween: 20,
  });
});