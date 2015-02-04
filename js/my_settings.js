protocall.mySettings = function(data) {
	var self = this;
    this.mySettings = null;
	protocall.setUrl(PAGE_URL.myForm);
	formBlock();
	setMenuBar ();
	
},

 formBlock = function() {
 console.log(1)
		 //var $html = protocall.addNewDevice.myDevicePageUI();
		 var $html = '<div>Customer Feeds</div>';
		 //$("#contentArea").append($html);
		$("#contentArea").fadeOut(0);
		//$("#contentArea").empty();
		$("#contentArea").append($html);
		$("#contentArea").fadeIn(250);
		 
};	
setMenuBar = function () {
        var $menu_bar = $("#hBar .menu-hBar > a");
        $menu_bar.attr("class", "home-map");
       $menu_bar.html("About Jinify");
        $menu_bar.off("click");
        selectMenu();
    };
	function selectMenu() {
        $("nav li.selected").removeClass("selected");
        $("nav .a-checkmyHome").parent().addClass("selected");
    }
    
var addTopage = function(html, clear, prepend) {
        var $blk = $("#contentArea");
        if(clear) {
			$blk.html("");
        }
        if(prepend) {
			$("#contentArea").prepend(html);
        } else {
			$("#contentArea").append(html);
        }
    }