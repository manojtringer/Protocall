window.addEventListener('popstate', function(event) {
  console.log('popstate fired!');
  protocall.stateNavigation(event.state.url);
});

var browserPrefix = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
		(/firefox/i).test(navigator.userAgent) ? 'moz' :
		(/trident/i).test(navigator.userAgent) ? 'ms' :
		'opera' in window ? 'o' : '';

//CONSTANTS
var CONSTANTS = {
	MODAL_OPACITY : 1,
	FORM_SUBMIT_OPACITY : 0.2,
	CHANNEL_TOKEN : null,
	LINK_TYPE : {
		PAGE:"page",HOME_PAGE: "home", CARRIER_PAGE: "carriers", CUSTOMERS_PAGE: "customers", MY_REP_PAGE: "myreps", LOGIN_page:"login"
	},
	ERROR_MSG : {
		ajaxFailed: "Oops! This action could not be completed now! Please try again"
	},
	ISLOGGEDIN: false,
};

//regular expressions
PHONE_REGEX = /((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}/;
MULTIPLE_EMAIL_REGEX = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*([,])*)*$/;
EMAIL_REGEX = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
NAME_REGEX = /^[a-zA-Z ]*$/;
INT_REGEX = /^[0-9]+$/;
ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9-_]+$/;
USERNAME_REGEX = /^[a-zA-Z0-9-_]+$/;
URL_REGEX = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;

//ENDPOINT CALLS
var ENDPOINT = {
 USER_LIST: "userlist",
 ALERT_LIST:"alertlist",
 AGENCY_DASHBOARD_DESIGN:"agencydashboarddesign",
 GIVE_RECORDED_BY_USER:"giverecordedbyuser"
};
//PAGE NAMES
CURRENT_PAGE = "";
LOGIN_PAGE= "";
HOME_PAGE= "home"; 
CARRIER_PAGE= "carriers"; 
CUSTOMERS_PAGE= "customer";
MY_REP_PAGE= "myreps";


//PRE-DEFINED FUNCTIONS
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

String.prototype.truncateStr = function(m) {
  return (this.length > m) 
    ? jQuery.trim(this).substring(0, m).split(" ").slice(0, -1).join(" ") + "..."
    : this;
};

Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};

$(document).ready(function() {
	//initialise protocall
	setTimeout(function() {
		// To wait for client endpoint to load
		protocall.init(); 
    }, 2000);
    
});

protocall = {
	init: function(){
		if(this.isLoggedIn()){
			this.setPageNavigation(localStorage.currentPage);
        } else {
			if((typeof localStorage != "undefined" && localStorage != null && localStorage.length !=0) && (localStorage.currentPage!=null && localStorage.currentPage!="")){
				this.setPageNavigation(localStorage.currentPage);	
			} else {
				this.setPageNavigation(HOME_PAGE);									
			}			
            setTimeout(function() {
                window.scrollTo(0,1); //to fix refresh scrolling issue when page is reloaded with page scrolled
            }, 300);
        }
		this.events.createEvents();
	},
	loadPage: function(page){
		this.setMenuSelection(page);
		this.setLocalStorage(page);
		if(page==HOME_PAGE) {			
			this.view.loadHomePage(false);			
    	} else if(page==CARRIER_PAGE) {
			this.view.loadCarrierPage(false);
		} else if(page==CUSTOMERS_PAGE) {
    	
		} else if(page==MY_REP_PAGE) {
    		
    	}	
	},
	setPage: function(page, url, title, data) {
    	data = data?data:""; // json data for the page
		var urlWithHash = "#"+url;
		var dataModified ={
			"url" : url,
			"data": data
		};
		window.history.pushState(dataModified, title, urlWithHash);
    },	
	setPageNavigation:function(page){
		// should be called first for navigating pages on start.
			CURRENT_PAGE = page;			
			this.loadPage(CURRENT_PAGE);
			this.setPage(CURRENT_PAGE,CURRENT_PAGE,CURRENT_PAGE,"");	
	},
	setLocalStorage: function(page){
		localStorage.setItem('currentPage', page);	
	},
	//Navigate Pages on Window back and forward buttons
	stateNavigation:function(page){
		this.loadPage(page);
	},
	//On click of pages menu, call the below
	clickPageNavigation:function(page){
			CURRENT_PAGE = page;
			//this.loadPage(page);
			this.setLocalStorage(CURRENT_PAGE);			
	},
	isLoggedIn: function() {
		//Check for user logged in.
		if(localStorage){
			return localStorage.loggedIn?true:false;
		} else{
			if(CONSTANTS.ISLOGGEDIN){
				return true;
			} else{
				return false;
			}
		}
    },
	setMenuSelection:function(page,subMenu){
		$(".mb-menu a.selected-tab").removeClass("selected-tab");
		if(page == CONSTANTS.LINK_TYPE.HOME_PAGE){
			$(".mb-menu a.home").addClass("selected-tab");
		} else if(page == CONSTANTS.LINK_TYPE.CARRIER_PAGE){
			$(".mb-menu a.carriers").addClass("selected-tab");
		}  else if(page == CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE){
			$(".mb-menu a.customers").addClass("selected-tab");
		}  else if(page == CONSTANTS.LINK_TYPE.MY_REP_PAGE){
			$(".mb-menu a.myreps").addClass("selected-tab");
		}
		
	}
};
protocall.events ={
		createEvents: function(){
			$(document).on("scroll", function(e) {
				protocall.events.handleScroll();
			});
			$(document).on("click", ".snap", function(e) {
				e.stopPropagation();
				protocall.events.handleClick(e);
			});
			$(window).on("resize", function(e) {
				protocall.events.handleResize(e);
			});
		
		},
		handleScroll:function(){
		
		
		},
		handleClick:function(e){
			var $el = $(e.currentTarget);
			if($el.prop("tagName")=="A") {e.preventDefault(); }
			var type = $el.data("type")?$el.data("type"):null;
			var page = $el.data("page")?$el.data("page"):null;			
			if(!type) return;
			switch(type) {
				case CONSTANTS.LINK_TYPE.PAGE:
					if(!page) return;
					switch(page) {
						case CONSTANTS.LINK_TYPE.HOME_PAGE:
							protocall.view.loadHomePage(true);
							break;
						case CONSTANTS.LINK_TYPE.CARRIER_PAGE:
							protocall.view.loadCarrierPage(true);
							break;
						case CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE:
							protocall.view.loadCustomerPage(true);
							break;
						case CONSTANTS.LINK_TYPE.MY_REP_PAGE:
							protocall.view.loadMyRepsPage(true);
							break;
					}
					break;		
				default:
					break;
			}
		
		},
		handleResize:function(){
			
		
		}
};
	
//protocall view functions
protocall.view ={
		loadHomePage:function(isClickEvent){
			console.log("Load Home Page");
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE,"");
			//Call the below in home.js
			protocall.home.initHomePage();
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, "");				
			}
		},
		loadCarrierPage:function(isClickEvent){
			console.log("Load Carrier Page");
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIER_PAGE);		
			//Call the below in carrier.js
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.CARRIER_PAGE,CONSTANTS.LINK_TYPE.CARRIER_PAGE,CONSTANTS.LINK_TYPE.CARRIER_PAGE,"");
			}
		},
		loadCustomerPage:function(isClickEvent){
			if(isClickEvent){
				
			}
		
		},
		loadMyRepsPage:function(isClickEvent){
			if(isClickEvent){
				
			}		
		}
};

protocall.home = {
	initHomePage:function(){
		var data = {},
			deepPath = ENDPOINT.AGENCY_DASHBOARD_DESIGN,
			page = "home",
			callback = protocall.home.loadHomePageData,
			authId = "",
			spinnerMsg = "";
		//Hardcoding Agency ID
		var agencyID = "8d087b9a-1ca5-47e3-9332-23659c5692b3";
		//Building Request 
		data.agencyId = agencyID;
		var resp = utils.server.makeServerCall(page,data,callback,authId,deepPath,spinnerMsg);
		console.log(resp);
	},
	loadHomePageData : function(data,page){		
		console.log(data,page);
		var feedHTML =  template.feedsTemplateHTML();
		if(data.resultMap!=null && data.resultMap!=""){
			if(data.alertTab && data.alertTab.length > 0){
				var feedAlertsData = data.alertTab;
				
				for(var a =0; a<feedAlertsData.length; a++){
					var 
					
				}			
			}		
		}	
	},
	buildScreen:function(data,template){
		
		
	}
	
	
	
};
