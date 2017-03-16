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




						$('.animation3').bind('inview', function (event, visible) {
						  if (visible == true) {
						     setTimeout( function(){
								var connection1 = jsPlumb.connect({
									source:"doties1", target:"doties2", 			   	
									connector:["Straight"],													   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},				
								});       	
						     },1050);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties0", target:"doties1", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});
						     },1010);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties00", target:"doties1", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties000", target:"doties2", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff" },
									endpointStyle:{radius:5},	
								});		     	
						     },1030);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties1", target:"doties3", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1050);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties1", target:"doties4", 			   	
									connector:["Straight"],
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1060);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties2", target:"doties4", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1070);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties3", target:"doties4", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	
						     },1080);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties3", target:"doties8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1090);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties3", target:"doties5", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	

						     },1100);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties5", target:"doties6", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1110);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties5", target:"doties7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties5", target:"doties8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1130);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties4", target:"doties5", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1140);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties4", target:"doties7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1150);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties6", target:"doties7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1160);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties6", target:"doties8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1170);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties6", target:"doties9", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1180);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties7", target:"doties9", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1190);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties7", target:"doties10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties9", target:"doties8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },2200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties9", target:"doties14", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },2300);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties9", target:"doties15", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },2400);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties9", target:"doties10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },2500);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties10", target:"doties11", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },2600);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties11", target:"doties12", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },2700);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties12", target:"doties13", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },2800);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties14", target:"doties8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties14", target:"doties16", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1190);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties14", target:"doties17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1180);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties14", target:"doties15", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1170);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties15", target:"doties10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties15", target:"doties17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1160);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties16", target:"doties17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1150);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties16", target:"doties8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1140);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties16", target:"doties18", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1130);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties16", target:"doties20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties17", target:"doties19", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1110);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties17", target:"doties18", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1100);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties18", target:"doties19", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1090); 
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties18", target:"doties20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1080);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties19", target:"doties20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1070);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties19", target:"doties21", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1050);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties20", target:"doties21", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1060);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties20", target:"doties22", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1030);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties20", target:"doties23", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1040);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties21", target:"doties23", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1010);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"doties21", target:"doties24", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1120);          
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