// >>>START of Function.
$(function(){　

  var PopText = $('.popUpText');
  var PopBtn = $('.PopBtn');
  var WorkHead = $('.works-header');
  var BackTop = $('#show-menu');
  var PopUp = $('.popUp');
  var PopupHead = $('.is-back');

/* =================================
 ・ポップアップの表示・非表示
==================================== */

// >>> START of $(window).scroll(function(){};
$(window).scroll(function(){
  //150未満ならば、PopUpを表示する。
  if($(this).scrollTop() < 150) {
    PopUp.css('background','#2C5379;').fadeIn();
    PopupHead.css('background','rgba(255,255,255,0.8);').fadeIn();
  } else {
    PopUp.hide();
    PopupHead.hide();
  }

/* =================================
・スクロール量に応じたヘッダー画像変更
・ヘッダー固定、上５０％
・スクロールバックアイコンの表示
==================================== */

    //スクロール量が650以上で、BackTopを表示、戻ったら非表示。
    $('#pos').text($(this).scrollTop());
        if($(this).scrollTop() > 650 ) {
          BackTop.fadeIn();
        } else {
          BackTop.fadeOut();
        }

      /*  325 - 1850 全体への処理   */
      if($(this).scrollTop() > 325 && $(this).scrollTop() < 2500) {
        //Headerの縦幅を広げる
        WorkHead.addClass('is-fixed').css('height','50%');
          /*  420 - 790への処理   */
          if($(this).scrollTop() > 325 && $(this).scrollTop() < 960) {
            WorkHead.css('background','url("img/pic2.jpg")');
          }
          /*  900 - 1260への処理   */
          else if($(this).scrollTop() > 960 && $(this).scrollTop() < 1540) {
            WorkHead.css('background','url("img/pic1.jpg")');
          }
          /*  1260 - 1850への処理   */
          else if ($(this).scrollTop() > 1540 && $(this).scrollTop() < 2500) {
            WorkHead.css('background','url("img/pic2.jpg")');
          } else {
            //指定範囲を外れたらヘッダーを透過
            WorkHead.css('background','transparent');
        }
      } else {
        //指定範囲を外れたらヘッダー固定をクリア
        WorkHead.removeClass('is-fixed');
      }
      /*  0 - 325への処理 ・例外と同じ処理を記述  */
      if($(this).scrollTop() < 325){
        WorkHead.css('background','transparent');
        WorkHead.removeClass('is-fixed');
      }

}); // >>> END of $(window).scroll(function(){};

　　//クリックしたらTop0までスクロールバック
    BackTop.find('span').click(function(){
      $('body,html').animate({scrollTop:0}, 500);
          return false;
});

/* +++++++++++++++++++++++++++++++++++
使用したプラグイン「　t.js　」(タイピングエフェクト)
++++++++++++++++++++++++++++++++++++++ */

      PopText.t({
        speed:15,
        speed_vary:true,
        caret:true,
        blink:true,
      })
      PopBtn.t({
        delay:4.3,
        speed:0.5,
        caret:false,
  })

}); // <<<END of function;
