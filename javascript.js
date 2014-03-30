$(document).ready(function(){


	$("#menu").hover(function(){


	
		$("#menu").animate(

			{
    		
    			left: "0px",
  				}, 500, function() {
    			// Animation complete.
  			}

		);

	});
	$("#menu").mouseleave(function(){


	
		$("#menu").animate(

			{
    		
    			left: "-180px",
  				}, 500, function() {
    			// Animation complete.
  			}
 
		);

	})

});

