		var APP = {};
				//	Blinking blinkers!
				APP.blink_max = 25;			//	how many blinks to, er, blink?
				APP.blink = false;			//	visible or hidden?			
				//	"5 Things About Me" thingy
				APP.things_index = 4;		// 0-4 were on the page already...
				APP.things_arr = [
					'','','','','',
					'I play online poker every week with my friends, while we Zoom, using Pokerstars. (Because in-person interactions are over-rated.)',
					'When I was a kid I collected beer cans. (Did you know really old beer cans were opened with a can opener? They were called &ldquo;flat tops&rdquo;.)',
					'In 2017 I traveled to Nashville to see a Total Solar Eclipse. (It was A-M-A-Z-I-N-G!) Another is happening in North America in 2024, so grab your eclipse glasses!',
					'I have been to Mayan ruins in El Salvador (on a 7-month long backpacking trip through Central America)',
					'I am an avid podcast listener.  My top two faves are &ldquo;The Lex Fridman Podcast&rdquo;, and &ldquo;Hardcore History&rdquo; by Dan Carlin',
					'I play Settlers of Catan online and am currently ranked at Grandmaster',
					'Astronomy is one of my favorite topics. (Ask me about black holes, or impact craters, like the one in Sudbury!)',
					'As of 2017 I went from being a "UFO skeptic" to believing aliens are here on Earth right now! (The truth is out there...)',
					'I went to the University of Toronto, and while an undergrad I wrote a weekly cartoon in the college newspaper',
					'I have dual citizenship, with both USA and Canadian passports',
					'I love clean code.  Please look at my Github (which has this very site), or at least do a View Source and check things out here under the hood',
					'Ok, last one: When I was in my 20s I was in a contest to see how long competitors could stay awake with a hand on a car.  The winner got to keep the car. I lost'
		];
		
$(function() {
		
	// 	===========================================	
	//	MAIN FUNCTIONS
	// 	===========================================		

	function init() {
		
		addRefresher();
		
		//	alertMe();
		
		//	auto-click the first panel
		//	( based on the site_key, like "writer" )
		let upper_key = window.site_key.toUpperCase();
		$( '#' + upper_key + ' button.show_me').click();
		
		//	activate blinkers
		setInterval(function () { blink() }, 333);		
	}
	
	//	blink() is used to flash any elements
	//	that have class="blink"
	//		- it will blink APP.blink_max times
	//			( and uses data-blinks to keep count )
	function blink() {
		var blinks;
		APP.blink = !APP.blink;
		$( '.blink' ).each(function( index ) {
			blinks = parseInt($( this ).attr('data-blinks'));
			if ( blinks < (APP.blink_max*2) ) {
				if( APP.blink ) {
					$( this ).css('visibility','hidden');
				}
				else {
					$( this ).css('visibility','visible');
				}	
				$( this ).attr('data-blinks', blinks+1);
			}	
			else {
				//	if it is all "blinked out" make sure it 
				//	is visible!
				$( this ).css('visibility','visible');
			}	
		});		
		return;
	}
	
	//	the Refresher is a Div that has shortcuts
	//	to reload with different site_keys:
	//		D = developer
	//		R = remoter
	//		W = writer
	function addRefresher() {
		console.log( 'addRefresher()' );
		let ref = '<div id="refresher" class="r"><a href="./?k=d">D</a><br /><a href="./?k=r">R</a><br /><a href="./?k=w">W</a><br /></div>';
		$( 'footer section' ).prepend( ref );
	}
	
	// 	===========================================	
	//	EVENT HANDLERS (delegated)
	// 	===========================================	

	//	click Stickies to hide		
	$('body').on('click', 'button#btn_1more',function( event ) {
		APP.things_index++;
		if ( APP.things_index < APP.things_arr.length ) {
			$( '#things' ).html(APP.things_index+1);
			$( 'ol#things_list' ).append('<li>' + APP.things_arr[APP.things_index] + '</li>');
			if ( APP.things_index == APP.things_arr.length-1 ) {
				$( '#btn_1more' ).fadeOut();
				$( '#place_arrow1' ).fadeOut();
			}				
		}
	});
	
	
	// 	===========================================	
	//	INIT
	// 	===========================================		

	init();	
	
});