<?php 
	
	//	COMPONENTS
	//	The PHP is very small for this project.
	//	It amounts to the version number, and
	//	some include files.
	$ver = '1T.01';	// version number

	//	WILLFIX:  I need logic here to set the site key
	//						( detect URL? querystring? )
	//	SITE KEY 
	$site_key = 'writer';	//	<-- the only thing that needs to change!
	
	// 	PANEL CONSTANTS
	$writing_panel = '<a name="WRITER" /></a><div id="WRITER" class="panel"><div class="closed">Do you want to see<br /><b class="r big">MY WRITING</b> section?<br /><button class="show_me" data-panel="WRITER">show me!</button> </div></div><!-- end:panel -->';
	$about_panel = '<a name="ABOUT" /></a><div id="ABOUT_' . $site_key . '" class="panel"><div class="closed">Do you want to read my<br /><b class="r big">ABOUT ME</b> write-up?<br /><button class="show_me" data-panel="ABOUT_' . $site_key . '">show me!</button> </div></div><!-- end:panel -->';
	$developer_panel = '<a name="DEVELOPER" /></a><div id="DEVELOPER" class="panel"><div class="closed">Do you want to see my<br /><b class="r big">SOFTWARE DEVELOPER</b> write-up?<br /><button class="show_me" data-panel="DEVELOPER">show me!</button> </div></div><!-- end:panel -->';

	//	LITTLE SNIPPETS ( defaults to mattgwriter7 ) 
	$label = 'MATTGWRITER7';
	$tag_line = 'Hire me to write... <i>any</i>thing!';
	
	//	DEFAULT PANEL ORDER ( defaults to mattgwriter7 )
	$panel1 = $writing_panel;
	$panel2 = $about_panel;
	$panel3 = $developer_panel;
	
	//	RE-JIG ORDER OF PANELS ( if necessary )	
	if ( $site_key == 'developer' ) {
		$label = 'MATTGARVIN.COM';
		$tag_line = 'Software Developer';
 		$panel1 = $developer_panel;
		$panel2 = $about_panel;
		$panel3 = $writing_panel;
	}

?><!DOCTYPE html>
<html lang="en-US" dir="ltr">
<head>
<title>Matt Garvin <?php print $ver; ?></title>
<meta name="Keywords" content="">
<meta name="Description" content="">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">			
<link rel="stylesheet" type="text/css" href="./css/default.css?ver=<?php print $ver; ?>">
<link rel="stylesheet" type="text/css" href="./css/custom.css?ver=<?php print $ver; ?>">
<!-- CUSTOM CSS FOR THIS PAGE -->
<style>
		
</style>
</head>

<body class="<?php print $site_key; ?>"><!-- class: Website.site_key -->

	<header>
		<section>
			<h1><?php print $label; ?></h1>
			<h3><?php print $tag_line; ?></h3>
		</section>	
	</header>
	
	<div id="hero">
		
	</div>
	
	<main>
		<section>		

				<?php print $panel1; ?>
			
				<?php print $panel2; ?>
			
				<?php print $panel3; ?>
			






			
			
			



			
			
			



			


			
		</section>		
	</main>

	<footer>
		<section>		
			
			<div class="grid">
				<div class="medium">
					<h3>Read My Stories On Medium</h3>
					<nobr>I love to write!</nobr><br />
					<nobr class="offsite_icon"><a href="https://medium.com/@mattgwriter7" target="_blank">medium.com/@mattgwriter7</a><span class="material-icons">&#xe89e;</span></nobr><br />
					<div class="note">I rattle on about all sorts of stuff</div>
				</div>		
				<div class="reddit">
					<h3>Get To Know Me On Reddit</h3>
					<nobr>I am an active poster there:</nobr><br />
					<nobr class="offsite_icon"><a href="https://reddit.com/user/mattgwriter7" target="_blank">reddit.com/user/mattgwriter7</a><span class="material-icons">&#xe89e;</span></nobr><br />
					<div class="note">Fave topics: Astronomy, Flutter, the Keto diet, and tons more</div>	
				</div>	
				<div class="github">
					<h3>Github</h3>
					<nobr class="offsite_icon"><a href="https://github.com/mattgwriter7" target="_blank">github.com/mattgwriter7</a><span class="material-icons">&#xe89e;</span></nobr><br />
				</div>
				<div class="linked">
					<h3>LinkedIn</h3>
					<nobr class="offsite_icon"><a href="https://www.linkedin.com/in/matt-garvin-b24938/" target="_blank"><span class="desktop">linkedin.com/in/matt-garvin-b24938</span><span class="mobile">linkedin.com/in/matt-ga...</span></a><span class="material-icons">&#xe89e;</span></nobr><br />
				</div>			
				<div class="twitter">
					<h3>Twitter</h3>
					<nobr class="offsite_icon"><a href="https://twitter.com/mattgarvin" target="_blank">twitter.com/mattgarvin</a><span class="material-icons">&#xe89e;</span></nobr><br />
				</div>														
			</div>				

			<div id="contact_box">

				<span class="note hilite"><b>~</b> Please reach out! <b>~</b></span><br />	
				<nobr><span class="material-icons mail">&#xe158;</span>matt.garvin.***@gmail.com</nobr><br /> 
				<nobr><span class="material-icons phone">&#xe0b0;</span>***-556-9393</nobr>
			</div>
			
		</section>		
	</footer>
	
	
	

	<script
		src="https://code.jquery.com/jquery-3.6.4.min.js"
		integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
		crossorigin="anonymous"></script>
	<script>
	//	make a JavaScript object called JS
	//	( which gets used by default.js ), plus
	//	indicate 'site_key' ( writer, developer, remoter )	
	let JS = {};
			JS.ver = '<?php print $ver; ?>';
	var site_key,
			alertMe,		//	used to show JS working
			openPanel;	//	redefined in jQuery to open panels
			
			site_key = '<?php print $site_key; ?>'; <!-- class: Website.site_key -->
			
	</script>			
	<script src="./js/default.js?ver=<?php print $ver; ?>"></script>
	<script src="./js/custom.js?ver=<?php print $ver; ?>"></script>	
	<!-- CUSTOM ON-PAGE JS FOR THIS PAGE -->
	<script>

	</script>	
</body>
</html>