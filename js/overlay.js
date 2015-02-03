var overlay ={
	makeItCenter: function(className) {
            setTimeout(function() {
                var windowWidth=window.outerWidth;
                var contentWidth=$('.'+className).width();
                var left=((windowWidth-contentWidth)/2);
                $('.'+className).css("left",left+"px");
            },0);
    },
	displayOverlay:function(content){
		this.initOverlay();
		var $contentSec = $('.o-content');
		$contentSec.append($(content));
		overlay.centerIt();		
		$('.overlay').fadeIn(400);
		
	},
	initOverlay:function(){
		var $parent=$('.overlay');
		var subContent = this.formatOverlay();
		$parent.append($(subContent));
	},
	formatOverlay:function(){
		var html = '<div class="o-box p-relative">'
						+'<div class="sprite-im snap close-icon o-close-pos p-absolute" data-type="closeOverlay"></div>'
						+'<div class="o-content p-relative">'
						+'</div>'
					+'</div>';
		return html;		
	},
	centerIt: function() {
        var height = window.innerHeight;
        var contentHeight =  $('.overlay > .o-content').height();
        if(height > contentHeight) {
            var marginTop = ((height-contentHeight)/2);
            $('.overlay > .o-content').css("margin-top",marginTop+"px");
        }
    },
	closeOverlay: function() {
		console.log("close overlay" );
        $('.overlay').fadeOut(400,function() {			
            $('.overlay').empty();
        });
    }

};
