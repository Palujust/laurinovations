$(document).ready(function(){




$('#homeLink').on({
    'mouseover' : function() {
      $(this).attr('src','homehover.png');
    },
    mouseout : function() {
  $(this).attr('src','home.png');
    }
  });

$('#aboutLink').on({
    'mouseover' : function() {
      $(this).attr('src','abouthover.png');
    },
    mouseout : function() {
  $(this).attr('src','about.png');
    }
  });

$("#photoLink").on({
    'mouseover' : function() {
      $(this).attr('src','photoshover.png');
    },
    mouseout : function() {
  $(this).attr('src','photos.png');
    }
  });

$('#contactLink').on({
    'mouseover' : function() {
      $(this).attr('src','contacthover.png');
    },
    mouseout : function() {
  $(this).attr('src','contact.png');
    }
  });





	$("#menu").hover(function(){


	
		$("#menu").animate(

			{
    		
    			left: "0px",
  				}, 500, function() {
    			// Animation complete.
  			}

		);

	});
	$("#photoLink").click(function(){


		$("#photoDiv").ScrollTo();
	});
	$("#homeLink").click(function(){


		$("#homeDiv").ScrollTo();
	});
	$("#contactLink").click(function(){


		$("#contactDiv").ScrollTo();
	});
	$("#aboutLink").click(function(){


		$("#aboutDiv").ScrollTo();
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

