$(document).ready(function(){
	fadeInIntro();
	coolRyu();
	$('.ryu').hover(function(){
		$('.ryu-action').hide();
		$('.ryu-ready').show();
		}, function(){
		$('.ryu-action').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '550px');
			}
		);
	})
	.mouseup(function(){		
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	});
});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

function coolRyu(){
	$(document).keydown(function(e){
		if(e.which === 88){
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e){
		if(e.which === 88){
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}		
	});
}

function fadeInIntro(){
	$('.street-fighter .logo').fadeIn(3500, function(){
		$(this).slideUp("slow", function(){
			$('.intro h1').fadeIn(3500, function(){
				$(this).slideUp("slow", function(){
					$('.jquery .logo').fadeIn(3500, function(){
						$(this).slideUp("slow", function(){
							$('.directions').fadeIn(3500);
						});
					})
				});
			})
		});
	});
}


