$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

        $('#turn_on').click(function(){
            $('.balloon').fadeIn('slow');
            $('.title').fadeIn('slow');
            $('#bulb_yellow').addClass('balloon_1');
            $('#bulb_red').addClass('balloon_2');
            $('#bulb_blue').addClass('balloon_3');
            $('#bulb_green').addClass('balloon_4');
            $('#bulb_pink').addClass('balloon_5');
            $('#bulb_orange').addClass('balloon_6');
            $('body').addClass('peach');
            $(this).fadeOut('slow').delay(500).promise().done(function(){
                $('#play').fadeIn('slow');
            });
        });

        $('#play').click(function(){
            var audio = $('.song')[0];
            audio.play();
            $(this).fadeOut('slow').delay(600).promise().done(function(){
                $('#cake_fadein').fadeIn('slow');
            });
        });


        $('#cake_fadein').click(function(){
            $('.cake').fadeIn('slow');
            $(this).fadeOut('slow').delay(300).promise().done(function(){
                $('#balloons_flying').fadeIn('slow');
            });
        });

        $('#balloons_flying').click(function(){
            $('#canvas').fadeIn('slow');
            $(this).fadeOut('slow').delay(600).promise().done(function(){
                $('#story').fadeIn('slow');
            });
        });


        $('#story').click(function(){
            $(this).fadeOut('slow');
            $('.cake').fadeOut('fast').promise().done(function(){
                $('.message').fadeIn('slow');
            });

            var i;

            function msgLoop (i) {
                $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                i=i+1;
                $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
                if(i==50){
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');
                    });

                }
                else{
                    msgLoop(i);
                }

            });
                // body...
            }

            msgLoop(0);

        });

         // CANVAS SETUP + VARIABLES
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight-50;

        // Emoji array created by Github user anthonydelgado: https://gist.github.com/anthonydelgado/528d1fab9242067348c0ac25f873d7f0
        var emojiArray = [ "💰", "🍚", "🥤"]
        var xPositions = [window.innerWidth / 2, window.innerWidth / 4, window.innerWidth / 4 * 3, window.innerWidth / 8, window.innerWidth / 8 * 7, ];
        var yPositions = [0, 0, 0, 0, 0];
        var arrayOfCurrentEmojis = [];
        // CORE EMOJI FUNCTION
        var emojiDrops = function() {
             ctx.font = '30px serif';
             for (var i = 0; i < xPositions.length; i++) {
                  arrayOfCurrentEmojis.push(emojiArray[Math.floor((Math.random() * emojiArray.length - 1) + 1)]);
                  ctx.fillText(arrayOfCurrentEmojis[i], xPositions[i], yPositions[i]);

                  // this will make every emoji move in a random speed, so it looks more realistic
                  yPositions[i] += Math.floor((Math.random() * 5) + 2);

                  // if any emoji reaches the end, it will return to the top
                  for (var k = 0; k < yPositions.length; k++) {
                       if (yPositions[k] >= window.innerHeight) {
                            yPositions[k] = 0;
                       }
                  }
             }
        };
         // INIT
        function draw() {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
             emojiDrops();
             window.requestAnimationFrame(draw);
        }
        draw();

});




//alert('hello');