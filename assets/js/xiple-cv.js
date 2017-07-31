$(document).ready(function() {
  $("#experience").on("click", "a.job-expand", function() {
    $(this).prev().toggleClass("job-detail-show");
    $(this).css({
      "display": "none"
    });
    return false;
  });
});
