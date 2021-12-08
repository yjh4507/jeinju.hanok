$(function () {
  $("#top1").fadeIn();
  $("#top2").hide();
  $('#menu li:nth-of-type(1)').click(function () {
      $("#top1").fadeIn();
      $("#top2").hide();
  });
  $('#menu li:nth-of-type(2)').click(function () {
      $("#top1").hide();
      $("#top2").fadeIn();
  });
});
$(function () {
  $("#middle_section1").fadeIn();
  $("#middle_section2").hide();
  $('#menu li:nth-of-type(3)').click(function () {
      $("#middle_section1").fadeIn();
      $("#middle_section2").hide();
  });
  $('#menu li:nth-of-type(4)').click(function () {
      $("#middle_section1").hide();
      $("#middle_section2").fadeIn();
  });
});
