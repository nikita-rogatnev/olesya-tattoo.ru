// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



//Circular diagram

var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('diagram', 600, 600),
			rad = 73,
			defaultText = 'Skills',
			speed = 250;
		
		r.circle(300, 300, 85).attr({ stroke: 'none', fill: '#193340' });
		
		var title = r.text(300, 300, defaultText).attr({
			font: '25px Klinic_Book',
			fill: '#95D2CD'
		}).toFront();
		
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 300 + rad * Math.cos(b),
				sy = 300 - rad * Math.sin(b),
				x = 300 + rad * Math.cos(a),
				y = 300 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		
		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();
			
			rad += 30;	
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });
			
			z.mouseover(function(){
                this.animate({ 'stroke-width': 50, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
				});
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': 26, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});	
            });
		});
		
	}
}
$(function(){ o.init(); });




 $(window).load(function() {

    $.Isotope.prototype._getCenteredMasonryColumns = function() {
        this.width = this.element.width();
        var parentWidth = this.element.parent().width();
        // i.e. options.masonry && options.masonry.columnWidth
        var colW = this.options.masonry && this.options.masonry.columnWidth ||
        // or use the size of the first item
        this.$filteredAtoms.outerWidth(true) ||
        // if there's no items, use size of container
        parentWidth;
        var cols = Math.floor(parentWidth / colW);
        cols = Math.max(cols, 1);
        // i.e. this.masonry.cols = ....
        this.masonry.cols = cols;
        // i.e. this.masonry.columnWidth = ...
        this.masonry.columnWidth = colW;
    };

    $.Isotope.prototype._masonryReset = function() {
        // layout-specific props
        this.masonry = {};
        // FIXME shouldn't have to call this again
        this._getCenteredMasonryColumns();
        var i = this.masonry.cols;
        this.masonry.colYs = [];
        while (i--) {
            this.masonry.colYs.push(0);
        }
    };

    $.Isotope.prototype._masonryResizeChanged = function() {
        var prevColCount = this.masonry.cols;
        // get updated colCount
        this._getCenteredMasonryColumns();
        return (this.masonry.cols !== prevColCount);
    };

    $.Isotope.prototype._masonryGetContainerSize = function() {
        var unusedCols = 0,
            i = this.masonry.cols;
        // count unused columns
        while (--i) {
            if (this.masonry.colYs[i] !== 0) {
                break;
            }
            unusedCols++;
        }
        return {
            height: Math.max.apply(Math, this.masonry.colYs),
            // fit container to columns that have been used;
            width: (this.masonry.cols - unusedCols) * this.masonry.columnWidth
        };
    };            
          $(function(){    
            var $container = $('#container'); 
            
            $container.isotope({
              itemSelector : '.item',
              filter : '.favorites',
              masonry : {
                    columnWidth: 1,
              }
            });

            // cache container
            var $container = $('#container');
            // initialize isotope
            $container.isotope({
              // options...
            });

            // filter items when filter link is clicked
            $('#filters a').click(function(){
              var selector = $(this).attr('data-filter');
              $container.isotope({ filter: selector });
              return false;
            });
          });   
});   




/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];
        
        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);                        
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data('inview', true);
                        $el.trigger('inview', [ true ]);
                    }
                }
            });
        }
    });
    
    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $(function () {
        $(window).scroll();
    });
})(jQuery);



$('.locations1').bind('inview', function (event, visible) {
    if (visible == true) {
        $(".locations1").css({'opacity' : '1'});             
        $(".locations1").css({'margin-left' : '0'});  
    } else {
        $(".locations1").css({'opacity' : '0'}); 
        $(".locations1").css({'margin-left' : '-20px'}); 
    }
}); 


$('.locations2').bind('inview', function (event, visible) {
    if (visible == true) {
         setTimeout( function(){
            $(".locations2").css({'opacity' : '1'});             
            $(".locations2").css({'margin-left' : '0'});        
         },500);  
    } else {
        $(".locations2").css({'opacity' : '0'}); 
        $(".locations2").css({'margin-left' : '-20px'}); 
    }
}); 


$('.locations3').bind('inview', function (event, visible) {
    if (visible == true) {
         setTimeout( function(){
            $(".locations3").css({'opacity' : '1'});             
            $(".locations3").css({'margin-right' : '0'});        
         },1000);  
    } else {
        $(".locations3").css({'opacity' : '0'}); 
        $(".locations3").css({'margin-right' : '-20px'}); 
    }
}); 

$('.locations4').bind('inview', function (event, visible) {
    if (visible == true) {
         setTimeout( function(){
            $(".locations4").css({'opacity' : '1'});             
            $(".locations4").css({'margin-left' : '0'});        
         },1500);  
    } else {
        $(".locations4").css({'opacity' : '0'}); 
        $(".locations4").css({'margin-left' : '-20px'}); 
    }
});