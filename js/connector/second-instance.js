
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




						$('.animation2').bind('inview', function (event, visible) {
						  if (visible == true) {
						     setTimeout( function(){
								var connection1 = jsPlumb.connect({
									source:"dots1", target:"dots2", 			   	
									connector:["Straight"],													   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},				
								});       	
						     },1050);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots0", target:"dots1", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});
						     },1010);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots00", target:"dots1", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots000", target:"dots2", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff" },
									endpointStyle:{radius:5},	
								});		     	
						     },1030);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots1", target:"dots3", 			   	
									connector:["Straight"],											   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1050);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots1", target:"dots4", 			   	
									connector:["Straight"],
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1060);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots2", target:"dots4", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1070);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots3", target:"dots4", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	
						     },1080);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots3", target:"dots8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1090);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots3", target:"dots5", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	

						     },1100);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots5", target:"dots6", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1110);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots5", target:"dots7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots5", target:"dots8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1130);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots4", target:"dots5", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1140);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots4", target:"dots7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1150);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots6", target:"dots7", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1160);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots6", target:"dots8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1170);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots6", target:"dots9", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1180);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots7", target:"dots9", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1190);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots7", target:"dots10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots9", target:"dots8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },2200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots9", target:"dots14", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },2300);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots9", target:"dots15", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },2400);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots9", target:"dots10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },2500);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots10", target:"dots11", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },2600);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots11", target:"dots12", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },2700);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots12", target:"dots13", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },2800);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots14", target:"dots8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots14", target:"dots16", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1190);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots14", target:"dots17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1180);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots14", target:"dots15", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1170);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots15", target:"dots10", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1200);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots15", target:"dots17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1160);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots16", target:"dots17", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1150);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots16", target:"dots8", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1140);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots16", target:"dots18", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1130);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots16", target:"dots20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1120);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots17", target:"dots19", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1110);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots17", target:"dots18", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1100);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots18", target:"dots19", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1090); 
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots18", target:"dots20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1080);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots19", target:"dots20", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1070);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots19", target:"dots21", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1050);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots20", target:"dots21", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1060);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots20", target:"dots22", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1030);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots20", target:"dots23", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});     	
						     },1040);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots21", target:"dots23", 			   	
									connector:["Straight"],												   
								   	paintStyle:{lineWidth:1, strokeStyle:"#fff"},
									endpointStyle:{radius:5},	
								});	     	
						     },1010);
						     setTimeout( function(){
								var connection2 = jsPlumb.connect({
									source:"dots21", target:"dots24", 			   	
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
