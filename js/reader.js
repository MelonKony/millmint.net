$(document).ready(function() {
	  $(".toggle").click(function() {
		$(".content").toggle();
		$(this).text(function(i, t) {
		  return t == 'Show' ? 'Hide' : 'Show';
		})
	  });
	});