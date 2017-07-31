# out: $1.js

$(document).ready ->
  $("#experience").on("click", "a.job-expand", ->
    $(this).prev().toggleClass "job-detail-show"
    $(this).css "display" : "none"
    return false
  )
  return
