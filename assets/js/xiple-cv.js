// $(document).ready(function() {
//   $("#experience").on("click", "a.job-expand", function() {
//     $(this).prev().toggleClass("job-detail-show");
//     $(this).css({
//       "display": "none"
//     });
//     return false;
//   });
// });

$(document).ready(function() {
  $("#experience").on("click", ".job-item", function() {
    console.log($(this).text());
    $(this).toggleClass('job-item-verbose');
  });
});

var prevScroll = 0;
var navhidden = true;

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if (scroll < 300 && navhidden == false) {
      $('.sticky').addClass('hide-sticky');
      navhidden = true;
//      console.log('hides 300');
    } else if (
           scroll >= 300
        && scroll < 800
        && navhidden == true
        && (scroll - prevScroll) >= 0
      ) {
        $('.sticky').removeClass('hide-sticky');
        navhidden = false;
//        console.log('appears 300-800');
    } else if (
         scroll >= 800
      && navhidden == false
      && (scroll - prevScroll) >= 0
    ) {
      $('.sticky').addClass('hide-sticky');
      navhidden = true;
//      console.log('hides 800');
    } else if (
           scroll >= 300
        && navhidden == true
        && (scroll - prevScroll) <= -5
      ) {
        $('.sticky').removeClass('hide-sticky');
        navhidden = false;
//        console.log('appears backwards');
    }

     prevScroll = scroll;
});
