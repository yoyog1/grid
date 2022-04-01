$(function () {

  $(function () {
    $('.btn').click(function () {
      $hiddMen=$('.hiddMen');
      if ($hiddMen.hasClass('open')) {
        // 今とじる
          $hiddMen.removeClass('open');
          $hiddMen.fadeOut();

          $('.clsBtn').hide();
          $('.opBtn').show();
      }else{
        // 今ひらく　
          $hiddMen.addClass('open');
          $hiddMen.fadeIn();

          $('.opBtn').hide();
          $('.clsBtn').show();

      }
      
    })
    
  })





    
})