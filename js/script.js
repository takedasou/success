//リンク部分
$('a[href^="#"]').click(function() {
  // スクロールの速度
  let speed = 400; // ミリ秒で記述
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

//works部分
$(function(){
  $('.works-image1').hover(function(){
    $('.txt1').stop().fadeIn(1000)
  }, function(){
    $('.txt1').stop().fadeOut(1000);
  });
  $('.works-image2').hover(function(){
    $('.txt2').stop().fadeIn(1000)
  }, function(){
    $('.txt2').stop().fadeOut(1000);
  });
  $('.works-image3').hover(function(){
    $('.txt3').stop().fadeIn(1000)
  }, function(){
    $('.txt3').stop().fadeOut(1000);
  });
});

$(function(){
  //フォーム指定
  $('form').validate({

    //検証ルール設定
    rules: {
      //ここに検証ルールを設定
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    },

    //エラーメッセージ設定
    messages: {
      //ここにエラーメッセージを設定
      name: {
        required: '名前を入力してください'
      },
      email: {
        required: 'メールアドレスを入力してください',
        email: 'メールアドレスを正確に入力してください'
      },
      message: {
        required: '内容を入力してください'
      }
    },
  });
});