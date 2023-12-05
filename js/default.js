$(function() {
	
	// 	===========================================	
	//	MAIN FUNCTIONS
	// 	===========================================		

	function init() {

		console.log( 'init() with JS version ' + JS.ver );
		
		//	prep stuff
		addPanelSpinners();
		positionBottomRightItems();
		positionTopLeftItems();
		thwartEmailBots();

		return;
	}

	//	--------------------------------------------

	//	addPanelSpinners()
	//	this function looks for "closed panels" and
	//	when found it adds an HTML/CSS spinner
	//	(which animates when panels get opened)
	function addPanelSpinners() {
		console.log( 'addPanelSpinners()' );
		$( '.panel .closed' ).append('<div class="spinner"><br /></div>&nbsp;<span class="spinner_mssg"></span>');
		return;
	}
	
	//	--------------------------------------------

	//	thwartEmailBots() replaces any "***" with "416" in 
	//	#contact_box of my footer.
	function thwartEmailBots() {
		let contact_box = $( '#contact_box').html(),
		my_new_string = contact_box.replaceAll( '***', '416' );
		$( '#contact_box').html(my_new_string);
		return;
	}

	//	--------------------------------------------

	//	positionBottomRightItems() grabs
	//	co-ordinates of objects using something like:
	//		data-bottom-right="10x10"
	//	positions them accordingly
	function positionBottomRightItems() {
		$.each( $('[data-bottom-right]'), function (index) {
			let str = $(this).attr('data-bottom-right'),
					arr = str.split('x'),
					x = arr[0].toString() + 'px',
					y = arr[1].toString() + 'px';
			console.log( 'positionBottomRightItems() at ' + x + ' by ' + y );
			//	add relative positioning and X and Y co-ords
			$( this ).css( 'position', 'relative' ); 
			$( this ).css( 'right', x ); 
			$( this ).css( 'bottom', y ); 
			$( this ).fadeIn();		// assume the are hidden to start
		});
		return;
	}

	function positionTopLeftItems() {
		$.each( $('[data-top-left]'), function (index) {
			let str = $(this).attr('data-top-left'),
					arr = str.split('x'),
					x = arr[0].toString() + 'px',
					y = arr[1].toString() + 'px';
			console.log( 'positionTopLeftItems() at ' + x + ' by ' + y );
			//	add relative positioning and X and Y co-ords
			$( this ).css( 'position', 'relative' ); 
			$( this ).css( 'left', x ); 
			$( this ).css( 'top', y ); 
			$( this ).fadeIn();		// assume the are hidden to start
		});
		return;
	}		
	// 	===========================================	
	//	EVENT HANDLERS (non-delegated)
	// 	===========================================	
	
	//	click "show me!" button to show a Panel
	//	WILLFIX: If there is a need for more than
	//		one type of button this will need refactoring...
	$( 'button.show_me' ).click(function(){
		var panel = $(this).attr('data-panel'),
				sticky = $(this).attr('data-sticky');
		//	update spinner
		$( '#' + panel + ' .spinner' ).addClass('active');
		$( '#' + panel + ' .spinner_mssg' ).text('fetching...');
		if( sticky != undefined ) {
			//	hide the sticky ( not all buttons will do this )
			$( '#' + sticky ).fadeOut();
		}

		setTimeout(() => {
			//	load the panel content
			//	WILLFIX: ?? make this full on AJAX so I can
			//	add a slideDown ?? maybe, maybe not...
			$( '#' + panel ).load( './' + panel + '.htm',function(data){
				//	position new panel icons ( if needed )
				positionTopLeftItems();
				positionBottomRightItems();
			});			
		}, 2000);		
	});
	
	// 	===========================================	
	//	EVENT HANDLERS (delegated)
	// 	===========================================	

	//	click Stickies to hide		
	$('body').on('click', '.sticky',function( event ) {
		$( this ).fadeOut();
	});	
	
	// 	===========================================	
	//	INIT
	// 	===========================================		

	init();
	
});