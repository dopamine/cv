///*
$('#cardpanel').isotope({
  // options
  itemSelector : '.card',
  layoutMode : 'masonry',
});//*/

$('#popover-1').popover({
	html: true,
	content: $('#popover-1-content').html(),
	title: $('#popover-1-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-2').popover({
	html: true,
	content: $('#popover-2-content').html(),
	title: $('#popover-2-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-3').popover({
	html: true,
	content: $('#popover-3-content').html(),
	title: $('#popover-3-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-4').popover({
	html: true,
	content: $('#popover-4-content').html(),
	title: $('#popover-4-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-5').popover({
	html: true,
	content: $('#popover-5-content').html(),
	title: $('#popover-5-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-6').popover({
	html: true,
	content: $('#popover-6-content').html(),
	title: $('#popover-6-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-7').popover({
	html: true,
	content: $('#popover-7-content').html(),
	title: $('#popover-7-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-8').popover({
	html: true,
	content: $('#popover-8-content').html(),
	title: $('#popover-8-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-9').popover({
	html: true,
	content: $('#popover-9-content').html(),
	title: $('#popover-9-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-14').popover({
	html: true,
	content: $('#popover-14-content').html(),
	title: $('#popover-14-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-15').popover({
	html: true,
	content: $('#popover-15-content').html(),
	title: $('#popover-15-title').html(),
	trigger: 'hover',
	placement:'auto'
});
$('#popover-16').popover({
	html: true,
	content: $('#popover-16-content').html(),
	title: $('#popover-16-title').html(),
	trigger: 'hover',
	placement:'auto'
});

$('#curri-labellist span').each(function(_) {
	$(this).click(function() {
		console.log('.'+$(this).text().toLowerCase());
		$('#cardpanel').isotope({
			filter: '.'+$(this).text().toLowerCase()
		});
	});
});

$(window).load(function () {
	$('.thumbcontainer').nailthumb({method:'crop', preload:false});
});
