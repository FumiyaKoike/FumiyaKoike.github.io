$(function(){
  //
  var FixedImg = $('.score-section.fixed');

  //HTMLのスキルグラフ表示（初期画面で必ず表示）
  $('.skill-bar.HTML').fadeIn().animate({width: "150px"},"easeInOut");

  // >>> START of $(window).scroll(function(){};
  $(window).scroll(function(){

      if($(this).scrollTop() > 370 && $(this).scrollTop() < 730) {
        //CSSのスキルグラフ表示（非表示はなし）
        $('.skill-bar.CSS').fadeIn().animate({width: "100px"},"easeInOut");

          } else if($(this).scrollTop() > 730 && $(this).scrollTop() < 1090) {
          //JavaScriptのスキルグラフ表示（非表示はなし）
          $('.skill-bar.JavaScript').fadeIn().animate({width: "50px"},"easeInOut");

                } else if($(this).scrollTop() > 1090 && $(this).scrollTop() < 1450) {
                //PHPのスキルグラフ表示（非表示はなし）
                $('.skill-bar.PHP').fadeIn().animate({width: "30px"},"easeInOut");

                    } else if($(this).scrollTop() > 1450 && $(this).scrollTop() < 1800) {
                    //Photoshopのスキルグラフ表示（非表示はなし）
                    $('.skill-bar.Photoshop').fadeIn().animate({width: "50px"},"easeInOut");

              } else if($(this).scrollTop() > 1800) {
              //Illustratorのスキルグラフ表示（非表示はなし）
              $('.skill-bar.Illustrator').fadeIn().animate({width: "50px"},"easeInOut");
      } else {
        //HTMLの見出し非表示
        $('.heading.html').fadeIn();
      }
  }); // <<< END of $(window).scroll(function(){};


  //HTML-ボタンクリックアクション
  $('.scroll.html').click(function(){
    $('.css-section').show();
    $('.html-section').hide();
    $(this).hide();
    //CSSのスキルグラフ表示（非表示はなし）
    $('.skill-bar.CSS').fadeIn().animate({width: "100px"},"easeInOut");
  });

  //CSS-ボタンクリックアクション
  $('.scroll.css').click(function(){
    $('.css-section').hide();
    $('.js-section').show();
    $(this).hide();
    //JavaScriptのスキルグラフ表示（非表示はなし）
    $('.skill-bar.JavaScript').fadeIn().animate({width: "50px"},"easeInOut");
  });

  //JavaScript-ボタンクリックアクション
  $('.scroll.JavaScript').click(function(){
    $('.js-section').hide();
    $('.php-section').show();
    $(this).hide();
    //PHPのスキルグラフ表示（非表示はなし）
    $('.skill-bar.PHP').fadeIn().animate({width: "30px"},"easeInOut");
  });

  //PHP-ボタンクリックアクション
  $('.scroll.PHP').click(function(){
    $('.php-section').hide();
    $('.photoshop-section').show();
    $(this).hide();
    //Photoshopのスキルグラフ表示（非表示はなし）
    $('.skill-bar.Photoshop').fadeIn().animate({width: "50px"},"easeInOut");
  });

  //Photoshop-ボタンクリックアクション
  $('.scroll.Photoshop').click(function(){
    $('.html-section').show();
    $('.css-section').show();
    $('.js-section').show();
    $('.php-section').show();
    $('.illustrator-section').show();
    $(this).hide();
    //Illustratorのスキルグラフ表示（非表示はなし）
    $('.skill-bar.Illustrator').fadeIn().animate({width: "50px"},"easeInOut");
  });


});
