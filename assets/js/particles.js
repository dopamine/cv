
$(document).ready(function() {
    setTimeout( function() {
      $('.particle').each( function(i) {
          $(this).removeClass('loadpop');
          $(this).attr('style', particleanimate());
      })
    }, 4000);
});

function particleanimate() {
  duration = Math.floor(Math.random()*120)+1;
  keyframes = (Math.random()*2<1)?"jiggle":"pulse";
  return "animation:"+duration+"s ease-in-out "+keyframes+" infinite";
}
