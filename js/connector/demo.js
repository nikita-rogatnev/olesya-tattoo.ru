
(function($){
	$(window).load(function(){
		if ($(window).width() > 767) {

			(function() {

				jsPlumbDemo = {
						
					init : function() {
						jsPlumb.importDefaults({
							DragOptions : { cursor: "pointer", zIndex:2000 },
							HoverClass:"connector-hover"
						});
				
						var connectorStrokeColor = "rgba(0, 0, 0, 1)",
							connectorHighlightStrokeColor = "rgba(0, 0, 0, 1)",
							hoverPaintStyle = { strokeStyle:"#fff" };


						$('.animation1').bind('inview', function (event, visible) {
							if (visible == true) {
								setTimeout( function(){
									var connection1 = jsPlumb.connect({
									source:"dot1", target:"dot2", 			   	
									connector:["Straight"],
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},				
								});       	
						     },50);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot0", target:"dot1",
									connector:["Straight"],
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});
						     },10);	
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot00", target:"dot1", 			   	
									connector:["Straight"],										   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot000", target:"dot2", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff" },
									endpointStyle:{radius:5},	
								});		     	
						     },30);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot1", target:"dot3", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },50);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot1", target:"dot4", 			   	
									connector:["Straight"],
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },60);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot2", target:"dot4", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },70);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot3", target:"dot4", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	
						     },80);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot3", target:"dot8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },90);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot3", target:"dot5", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	

						     },100);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot5", target:"dot6", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },110);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot5", target:"dot7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot5", target:"dot8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },130);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot4", target:"dot5", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },140);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot4", target:"dot7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },150);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot6", target:"dot7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },160);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot6", target:"dot8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },170);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot6", target:"dot9", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },180);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot7", target:"dot9", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },190);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot7", target:"dot10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot9", target:"dot8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot9", target:"dot14", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1300);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot9", target:"dot15", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1400);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot9", target:"dot10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1500);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot10", target:"dot11", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1600);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot11", target:"dot12", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1700);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot12", target:"dot13", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1800);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot14", target:"dot8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot14", target:"dot16", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },190);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot14", target:"dot17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },180);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot14", target:"dot15", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },170);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot15", target:"dot10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot15", target:"dot17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },160);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot16", target:"dot17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },150);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot16", target:"dot8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },140);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot16", target:"dot18", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },130);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot16", target:"dot20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot17", target:"dot19", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },110);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot17", target:"dot18", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },100);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot18", target:"dot19", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },90); 
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot18", target:"dot20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },80);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot19", target:"dot20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },70);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot19", target:"dot21", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },50);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot20", target:"dot21", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },60);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot20", target:"dot22", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },30);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot20", target:"dot23", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },40);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot21", target:"dot23", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },10);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dot21", target:"dot24", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },120);          
						  } else {
						    jsPlumb.detachEveryConnection();
						    jsPlumb.deleteEveryEndpoint();
						  }
						});


																																										
					}
				};	

				jsPlumbDemo.loadTest = function(count) {
			            count = count || 10;
			            for (var i = 0; i < count; i++) {
			                    jsPlumb.reset();
			                    jsPlumbDemo.init();
			            }
			    };

				jsPlumb.ready(jsPlumbDemo.init);
			})();

		}
		else {

		};
	});
})(jQuery);
              








