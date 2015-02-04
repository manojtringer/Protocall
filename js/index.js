window.addEventListener('popstate', function(event) {
  console.log('popstate fired!');
  console.log('Event State URL ----->',event.state.url)
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
		PAGE:"page",HOME_PAGE: "home", CARRIERS_PAGE: "carriers", CUSTOMERS_PAGE: "customers", MY_REP_PAGE: "myreps", LOGIN_page:"login",
		VIEW_FEED:"view", FEEDS: "feeds",SHARE_TO_REP:"share", CLOSE_OVERLAY:"closeOverlay", EDIT_AGENCY_PIC:"editAgencyPic", 
		MY_ALERTS:"myalerts",INCIDENTS:"incidents",POLICIES:"policies",MATCH_RELEASE_CLAIMS:"matchReleaseClaim",INVITE_REPS:"invitereps",
		ASSIGN_TO_REPS:"assignrep",PHOTS_OVERLAY_DISPLAY:"photosDoc",THUMB_NAIL :"thumbNail",PREVIOUS :"previous", NEXT : "next"
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
CARRIERS_PAGE= "carriers"; 
CUSTOMERS_PAGE= "customers";
MY_REP_PAGE= "myreps";

//PAGE & SUBMENU OBJECTS
var SUB_MENU = {
	HOME : {
		BREADCRUMB : [
			{
				TITLE: "feeds",
				ICON_CLASS: "feeds-icon" // has Class
			}
		],
		TABS : [
			{
				TITLE: "policies",
				ICON_CLASS: "",
				COUNT : ""
			},
			{
				TITLE: "incidents",
				ICON_CLASS: "",
				COUNT : ""
			},
			{
				TITLE: "my_alerts",
				ICON_CLASS: "",
				COUNT : "24"
			},
		],
		ISSORTBY : true
	},
	PROFILE:{
		BREADCRUMB : [
			{
				TITLE: "my_profile",
				ICON_CLASS: "" // has class
			}
		],
		TABS : [
			{
				TITLE: "edit",
				ICON_CLASS: "", //has class,
				COUNT : ""
			}
		],
		ISSORTBY : false		
	},
	SETTINGS: {
		BREADCRUMB : [
			{
				TITLE: "settings",
				ICON_CLASS: "" // has class
			}
		],
		TABS : [
			{
				TITLE: "save",
				ICON_CLASS: "",
				COUNT : ""
			},
			{
				TITLE: "privacy",
				ICON_CLASS: "",
				COUNT : ""
			}			
		],
		ISSORTBY : false		
	},
	CARRIERS:{
		BREADCRUMB : [
			{
				TITLE: "carriers",
				ICON_CLASS: "" // has class
			}
		],
		TABS : [
			// No Carrier Tabs
		],
		ISSORTBY : true	
	},
	CUSTOMERS:{
		BREADCRUMB : [
			{
				TITLE: "customers",
				ICON_CLASS: "" // has class
			}
		],
		TABS : [
			{
				TITLE: "assign_rep",
				ICON_CLASS: "",
				COUNT:""
			},
			{
				TITLE: "push_message",
				ICON_CLASS: "", // has class
				COUNT: ""
			}					
		],
		ISSORTBY : true	
	},
	MY_REPS:{
		BREADCRUMB : [
			{
				TITLE: "my_reps",
				ICON_CLASS: "" // has class
			}
		],
		TABS : [
			{
				TITLE: "invite_reps",
				ICON_CLASS: "",				// has Class
				COUNT:""
			},
			{
				TITLE: "privacy",
				ICON_CLASS: "",
				COUNT: "",
			}						
		],
		ISSORTBY : true	
	}
	
	
};

// DROPDOWN CONSTANTS
var DROPDOWN = {
	SORTBY : {
		CLASS: "highlight",
		ITEMS: ["Recent", "Alphabetical"]
		
	},
	PROFILE : {
		CLASS: "normal",
		ITEMS: ["My Profile", "Settings", "Help", "Log Out"]		
	},
	RANGE_SELECTOR:{
		CLASS: "highlight",
		ITEMS: ["Alphabetical", "City, State"]		
	},
	ALPHABETICAL_SORT:{
		CLASS: "highlight",
		ITEMS: ["Select All", "Select A","Select B","Select C","Select D","Select E","Select F","Select G","Select H","Select I","Select J","Select K","Select L","Select M","Select N","Select O","Select P","Select Q","Select R","Select S","Select T","Select U","Select V","Select W","Select X","Select Y","Select Z"]
	}	
};


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
	protocall.displaySpinner(true);
	setTimeout(function() {
		// To wait for client endpoint to load
		protocall.init(); 
    }, 2000);
    
});

protocall = {
	init: function(){
		protocall.displaySpinner(true);
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
	loadPage: function(pageUrl){
		var pageArr = pageUrl.split("/");
		var page = "",subMenu = [];
		if(pageArr.length > 0){
			page = pageArr[0];
			for(var s =1; s < pageArr.length; s++){
				subMenu.push(pageArr[s]);
			}
		} else {
			page = pageUrl;
		}		
		this.setMenuSelection(page);
		this.displaySpinner(true);
		this.setLocalStorage(page);
				
		if(page==HOME_PAGE) {		
			this.view.loadHomePage(false);			
    	} else if(page==CARRIERS_PAGE) {
			this.view.loadCarrierPage(false);
		} else if(page==CUSTOMERS_PAGE) {
			this.view.loadCustomerPage(false);
		} else if(page==MY_REP_PAGE) {
    		this.view.loadMyRepsPage(false);
    	}
				
		if(subMenu.length > 0){
			var subMenuName = subMenu[0];
			console.log("SubMenu Name",subMenuName)
			if(subMenuName == CONSTANTS.LINK_TYPE.VIEW_FEED){
				this.view.viewFeed(false);
			} else if(subMenuName == CONSTANTS.LINK_TYPE.MY_ALERTS){
				var $el = $('.myalerts')
				this.view.loadMyAlertsFeeds($el,false);
			} else if(subMenuName == CONSTANTS.LINK_TYPE.INCIDENTS){
				var $el = $('.incidents')
				this.view.loadIncidentsFeeds($el,false);
			} else if(subMenuName == CONSTANTS.LINK_TYPE.POLICIES){
				var $el = $('.policies')
				this.view.loadPoliciesFeeds($el,false);
			}
		
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
		} else if(page == CONSTANTS.LINK_TYPE.CARRIERS_PAGE){
			$(".mb-menu a.carriers").addClass("selected-tab");
		}  else if(page == CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE){
			$(".mb-menu a.customers").addClass("selected-tab");
		}  else if(page == CONSTANTS.LINK_TYPE.MY_REP_PAGE){
			$(".mb-menu a.myreps").addClass("selected-tab");
		}		
	},
	displaySpinner:function(show){
		if(show){
			$("#spinner").css("display","block");
		} else {
			$("#spinner").css("display","none");			
		}		
	},
	closeOverlay:function(){
		overlay.closeOverlay();		
	},
	closePopUp:function(){
		popUpContent.closePopUpContent();		
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
			$(document).on("click",".overalyPhots", function(e) {
				e.stopPropagation();
				console.log(".o-content");
				protocall.events.handleClickForPhotosOverlay(e);
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
			var subMenu = $el.data("submenu")?$el.data("submenu"):null;
			if(!type) return;
			switch(type) {
				case CONSTANTS.LINK_TYPE.PAGE:
					if(!page && !subMenu) return;
					switch(page) {
						case CONSTANTS.LINK_TYPE.HOME_PAGE:
							protocall.view.loadHomePage(true);
							break;
						case CONSTANTS.LINK_TYPE.CARRIERS_PAGE:
							protocall.view.loadCarrierPage(true);
							break;
						case CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE:
							protocall.view.loadCustomerPage(true);
							break;
						case CONSTANTS.LINK_TYPE.MY_REP_PAGE:
							protocall.view.loadMyRepsPage(true);
							break;
						default:
							break;
					}				
					switch(subMenu) {
						case CONSTANTS.LINK_TYPE.FEEDS:
							protocall.view.loadHomePage(true);
							break;
						case CONSTANTS.LINK_TYPE.MY_ALERTS:
							protocall.view.loadMyAlertsFeeds($el,true);
							break;
						case CONSTANTS.LINK_TYPE.INCIDENTS:
							protocall.view.loadIncidentsFeeds($el,true);
							break;
						case CONSTANTS.LINK_TYPE.POLICIES:
							protocall.view.loadPoliciesFeeds($el,true);
							break;
						case CONSTANTS.LINK_TYPE.INVITE_REPS:
							protocall.view.loadInviteReps($el,true);
							break;
						case CONSTANTS.LINK_TYPE.ASSIGN_TO_REPS:
							protocall.view.loadAssignToReps($el,true);
							break;
						case CONSTANTS.LINK_TYPE.SORTBY:
							protocall.view.loadSortBy($el,true);
							break;	
						default:
							break;
					}
					break;
				case CONSTANTS.LINK_TYPE.VIEW_FEED:
					protocall.view.viewFeed(true);
					break;
				case CONSTANTS.LINK_TYPE.SHARE_TO_REP:
					protocall.view.shareToRep();
					break;
				case CONSTANTS.LINK_TYPE.CLOSE_OVERLAY:
					protocall.closeOverlay();
					break;
				case CONSTANTS.LINK_TYPE.CLOSE_POPUP:
					protocall.closePopUp();
					break;
				case CONSTANTS.LINK_TYPE.EDIT_AGENCY_PIC:
					protocall.view.editAgencyPic();
					break;
				case CONSTANTS.LINK_TYPE.MATCH_RELEASE_CLAIMS:
					protocall.view.matchReleaseClaimAlert();
					break;
				case CONSTANTS.LINK_TYPE.MY_PROFILE:
					protocall.view.loadProfile($el);
					break;
				case CONSTANTS.LINK_TYPE.PHOTS_OVERLAY_DISPLAY:
					protocall.view.staticPhotOverlayDisplay();
							break;
				default:
					break;
			}
		
		},
		handleClickForPhotosOverlay:function(e){
			console.log("hello"+$(this).find("img").attr("src"));
			var $el = $(e.currentTarget);
			console.log("valuers"+$el.data("type"));
			var type = $el.data("type")?$el.data("type"):null;
			console.log("data type is"+type);
			switch(type) {
				case CONSTANTS.LINK_TYPE.THUMB_NAIL:
					protocall.view.displayOrignalImage($el);
				break;
				case CONSTANTS.LINK_TYPE.PREVIOUS:
					protocall.view.displayPreviousImage($el);
				break;
				case CONSTANTS.LINK_TYPE.NEXT:
					protocall.view.displayNextImage($el);
				break;
				default:
					break;
			}
			/* $("#thumbNailImages li a").click(function(e){
				$(".previous").show();
				$(".next").show();
				console.log("event fired"+$(this).find("img").attr("src"));
				$(this).addClass("active");
				$("#viewingImage").html('<img src='+$(this).find("img").attr("src")+' style="width:200px;height:200px;position: absolute;left: 250px;top: 76px;" />');
				return false;
			});
			$(".previous").click(function(e){
				//console.log("clicked"+clickedParent);
				var $liElement = $("#thumbNailViewImages li");
				$.each($liElement,function(index,element){
				
					console.log($(this));
					if(($(this).find("a").hasClass("active"))){
						console.log("count in back");
						console.log("parent"+$(this).parent());
						loadingScrollBack($(this));
					}
				});
				//loadingScrollBack(clickedParent);
				e.preventDefault();
			}); */
		},
		handleResize:function(){
			
		
		}
};
	
//protocall view functions
protocall.view ={
		loadHomePage:function(isClickEvent){
			console.log("Load Home Page");
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE);
			//Call the below in home.js
			protocall.home.initHomePage();
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, "");				
			}
			protocall.displaySpinner(false);
			var $myAlerts = $(".myalerts")
			protocall.view.setSelectedLinkClasses($myAlerts,true);
		},
		loadCarrierPage:function(isClickEvent){
			console.log("Load Carrier Page");
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);		
			//Call the below in carrier.js
			protocall.carrier.initCarrierPage();
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERS_PAGE,CONSTANTS.LINK_TYPE.CARRIERS_PAGE,CONSTANTS.LINK_TYPE.CARRIERS_PAGE,"");
			}
			protocall.displaySpinner(false);
		},
		loadCustomerPage:function(isClickEvent){
			console.log("Load Customer Page");
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);		
			//Call the below in customer.js
			protocall.customer.initCustomerPage();
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, "");		
			}
			protocall.displaySpinner(false);
		},
		loadMyRepsPage:function(isClickEvent){
			console.log("Load My Reps Page");
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.MY_REP_PAGE);		
			//Call the below in myreps.js
			protocall.myRep.initMyRepsPage();
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.MY_REP_PAGE, CONSTANTS.LINK_TYPE.MY_REP_PAGE, CONSTANTS.LINK_TYPE.MY_REP_PAGE, "");	
			}
			protocall.displaySpinner(false);
		},
		viewFeed:function(isClickEvent){
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED);
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE,CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED,CONSTANTS.LINK_TYPE.VIEW_FEED,"");
			}
			protocall.home.loadFeed();			
			//Call the below dynamically
			var breadCrumbObj = {};
			breadCrumbObj.customerName = "Hugh Jackman";
			$('.tab-rb-submenu a').each(function(){
				protocall.view.setSelectedLinkClasses($(this),false);
			});
			protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.HOME_PAGE, breadCrumbObj);
			protocall.displaySpinner(false);
		},
		loadMyAlertsFeeds:function($el,isClickEvent){
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.MY_ALERTS);
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE,CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.MY_ALERTS,CONSTANTS.LINK_TYPE.MY_ALERTS,"");
			}
			protocall.home.displayMyAlertsFeeds();
			$('.tab-rb-submenu a').each(function(){
				protocall.view.setSelectedLinkClasses($(this),false);
			});
			protocall.view.setSelectedLinkClasses($el,true);
			protocall.displaySpinner(false);
		},
		loadIncidentsFeeds:function($el,isClickEvent){
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS);
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE,CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS,CONSTANTS.LINK_TYPE.INCIDENTS,"");
			}
			protocall.home.displayIncidentsFeeds();
			$('.tab-rb-submenu a').each(function(){
				protocall.view.setSelectedLinkClasses($(this),false);
			});
			protocall.view.setSelectedLinkClasses($el,true);
			protocall.displaySpinner(false);
		},
		loadPoliciesFeeds:function($el,isClickEvent){
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES);
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE,CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES,CONSTANTS.LINK_TYPE.POLICIES,"");
			}
			protocall.home.displayPoliciesFeeds();
			$('.tab-rb-submenu a').each(function(){
				protocall.view.setSelectedLinkClasses($(this),false);
			});
			protocall.view.setSelectedLinkClasses($el,true);
			protocall.displaySpinner(false);
		},
		setSelectedLinkClasses:function($el,isSet){
			if(isSet){
				$el.addClass("selected-tab");
			} else {
				$el.removeClass("selected-tab");
			}
		},
		
		loadSortBy:function($el){
			var html = "<div>static content</div>";
			popUpContent.displayPopUpContent($el,html);
		},
		loadProfile:function($el){
			var html = "<div>static content</div>";
			popUpContent.displayPopUpContent($el,html);			
		},

		shareToRep:function(){					
			var html = staticTemplate.home.shareWithRepTemplate();
			overlay.displayOverlay(html);			
		},
		/*Added by Naveen -- Start*/
		staticPhotOverlayDisplay:function(){
			var html = staticTemplate.home.showPhotsOverlayTemplate();
			overlay.displayOverlay(html);
			overlay.sliderControl();
			protocall.displaySpinner(false);			
		},
		/*Added by Naveen -- End*/
		editAgencyPic:function(){
			var html = staticTemplate.home.editAgencyPicTemplate();
			overlay.displayOverlay(html);			
		},
		matchReleaseClaimAlert:function(){
			var html = staticTemplate.home.matchReleaseClaimTemplate();
			overlay.displayOverlay(html);
		},
		loadInviteReps:function(){
			var html = staticTemplate.myreps.inviteRepsTemplate();
			overlay.displayOverlay(html);
		},
		loadAssignToReps:function(){
			var html = staticTemplate.home.assignToRepTemplate();
			overlay.displayOverlay(html);
		},
		buildSubMenuBlk:function(page, breadCrumbObj){
			var subMenuBlockTemplate = template.subMenuBlk(),
				subMenuSortHTML = template.subMenuSortHTML(),
				subMenuBreadCrumbHTML = template.subMenuBreadCrumbHTML(),
				subMenuTabHTML = template.subMenuTabHTML();
			var subMenuObj = "";
			if(page === HOME_PAGE){
				subMenuObj = SUB_MENU.HOME;				
			} else if(page === CARRIERS_PAGE){
				subMenuObj = SUB_MENU.CARRIERS;				
			} else if(page === CUSTOMERS_PAGE){
				subMenuObj = SUB_MENU.CUSTOMERS;				
			} else if(page === MY_REP_PAGE){
				subMenuObj = SUB_MENU.MY_REPS;				
			} else {
				subMenuObj = "";
			}
			
			if(subMenuObj!== ""){
				var bcTotalHTML = "";
				if(subMenuObj.BREADCRUMB != "" && subMenuObj.BREADCRUMB.length > 0){
					var bcHTML = "";
						bcTotalHTML = "";
					var isBCNamePresent = "display:none;";
					var customerName = "";
					if(breadCrumbObj && breadCrumbObj!= undefined){
						isBCNamePresent = "display:inline-block;"
						customerName = breadCrumbObj.customerName;
					}
					for(var bc =0; bc < subMenuObj.BREADCRUMB.length; bc++){
						var bcHTML = template.subMenuBreadCrumbHTML();
						var titleSplitArray = subMenuObj.BREADCRUMB[bc].TITLE.split("_");
						var hrefBCTags = "", titleBCName = "";
						if(titleSplitArray && titleSplitArray.length>0){
							for(var tit = 0; tit < titleSplitArray.length; tit++){
								hrefBCTags = hrefBCTags+titleSplitArray[tit];
								titleBCName = titleBCName+ " "+ titleSplitArray[tit];
							}
							
						} else{
							hrefBCTags = subMenuObj.BREADCRUMB[bc].TITLE;
							titleBCName = subMenuObj.BREADCRUMB[bc].TITLE;							
						}
						bcHTML = bcHTML.replace(/{{bc-title}}/g, hrefBCTags);
						bcHTML = bcHTML.replace(/{{bc-name-title}}/g, titleBCName);
						bcHTML = bcHTML.replace(/{{bc-icon-class}}/g, subMenuObj.BREADCRUMB[bc].ICON_CLASS);
						bcHTML = bcHTML.replace(/{{isBC_Name}}/g, isBCNamePresent);
						bcHTML = bcHTML.replace(/{{customer-name}}/g, customerName);
						bcTotalHTML = bcTotalHTML + bcHTML;
					}
					
				}
				var tabTotalHTML = "";
				if(subMenuObj.TABS != "" && subMenuObj.TABS.length > 0){
					var tabHtml = "";
						tabTotalHTML = "";
					var isSubMenuIconClass = "display:none;", isSubMenuCountClass= "display:none;";
					var subMenuTabCount = "";
					for(var t =0; t < subMenuObj.TABS.length; t++){
						var tabHtml = template.subMenuTabHTML();
						isSubMenuIconClass = (subMenuObj.TABS[t].ICON_CLASS!="") ? "display:inline-block;": "display:none;";
						isSubMenuCountClass = (subMenuObj.TABS[t].COUNT!="") ? "display:inline-block;": "display:none;";
						
						var titleSplitArray = subMenuObj.TABS[t].TITLE.split("_");
						var hrefTabTags = "", titleTabName = "";
						if(titleSplitArray && titleSplitArray.length>0){
							for(var tit = 0; tit < titleSplitArray.length; tit++){
								hrefTabTags = hrefTabTags+titleSplitArray[tit];
								titleTabName = titleTabName+ " "+ titleSplitArray[tit];
							}							
						} else{
							hrefTabTags = subMenuObj.BREADCRUMB[bc].TITLE;
							titleTabName = subMenuObj.BREADCRUMB[bc].TITLE;							
						}						
						tabHtml = tabHtml.replace(/{{subMenuTab-name}}/g, hrefTabTags);
						tabHtml = tabHtml.replace(/{{subMenuTab-name-title}}/g, titleTabName);
						tabHtml = tabHtml.replace(/{{subMenuTab-icon-class}}/g, subMenuObj.TABS[t].ICON_CLASS);
						tabHtml = tabHtml.replace(/{{isSubMenuTabIconCl}}/g, isSubMenuIconClass);
						tabHtml = tabHtml.replace(/{{isSubMenuTabCountCl}}/g, isSubMenuCountClass);
						tabHtml = tabHtml.replace(/{{subMenuTab-count}}/g, subMenuObj.TABS[t].COUNT);
						tabTotalHTML = tabTotalHTML + tabHtml;
					}					
				}
				if(breadCrumbObj && breadCrumbObj!= undefined){
					tabTotalHTML = "";
				}
				
				var tabsWithSortHTML = "";
				if(subMenuObj.ISSORTBY){					
					var sortHtml = template.subMenuSortHTML();
					tabsWithSortHTML = sortHtml + tabTotalHTML;
				} else{
					tabsWithSortHTML = tabTotalHTML;	
				}				
				subMenuBlockTemplate = subMenuBlockTemplate.replace(/{{breadcrumb_block}}/g, bcTotalHTML);
				subMenuBlockTemplate = subMenuBlockTemplate.replace(/{{tab_block}}/g, tabsWithSortHTML);
				$(".mb-submenu").empty();
				$(".mb-submenu").append($(subMenuBlockTemplate));
			}
			
		}, 
		displayOrignalImage : function($e1){
			console.log($e1.find("img").attr("src"));
			$("#thumbNailImages li a").removeClass("active");
			$e1.addClass("active");
			$("#viewingImage").html('<img src='+$e1.find("img").attr("src")+' style="width:200px;height:200px;position: absolute;left: 214px;top: 76px;" />');
			$(".previous").show();
			$(".next").show();
		},
		displayPreviousImage : function(){
			var $liElement = $("#thumbNailImages li");
				$.each($liElement,function(index,element){
					if(($(this).find("a").hasClass("active"))){
						protocall.view.loadingScrollPrevious($(this));
						return false;
					}
				});
		},
		displayNextImage : function(){
			var $liElement = $("#thumbNailImages li");
			 	$.each($liElement,function(index,element){
					if(($(this).find("a").hasClass("active"))){
						protocall.view.loadingScrollNext($(this));
						return false;
					}
				});
		},
		loadingScrollNext : function(liEleme){
			var indexValue = $("#thumbNailImages li").index(liEleme)+1 , nextElementToBeloaded;
			if(indexValue !== 0 && indexValue < $("#thumbNailImages li").length){
				nextElementToBeloaded = $("#thumbNailImages li:eq( "+indexValue+" )");
				$("#thumbNailImages li a").removeClass("active");
				nextElementToBeloaded.find("a").addClass("active");
				imageSrcTobeLoadedBack = nextElementToBeloaded.find("img").attr("src");
				$("#viewingImage").html('<img src='+imageSrcTobeLoadedBack+' style="width:200px;height:200px;position: absolute;left: 214px;top: 76px;" />');
			}	
		},
		loadingScrollPrevious : function(liEleme){
			var indexValue = $("#thumbNailImages li").index(liEleme)-1 , nextElementToBeloaded;
			console.log("loadingScrollBack"+indexValue);
			if(indexValue !== -1){
				nextElementToBeloaded = $("#thumbNailImages li:eq( "+indexValue+" )");
				$("#thumbNailImages li a").removeClass("active");
				nextElementToBeloaded.find("a").addClass("active");
				imageSrcTobeLoadedBack = nextElementToBeloaded.find("img").attr("src");
				console.log("imageSrcTobeLoaded"+imageSrcTobeLoadedBack);
				$("#viewingImage").html('<img src='+imageSrcTobeLoadedBack+' style="width:200px;height:200px;position: absolute;left: 214px;top: 76px;" />');
			}	
		}
};

protocall.home = {
	initHomePage:function(){
		var data = {},
			deepPath = ENDPOINT.ALERT_LIST,
			page = "home",
			callback = protocall.home.loadHomePageData,
			authId = "",
			spinnerMsg = "";
		//Hardcoding Agency ID
		var agencyID = "8d087b9a-1ca5-47e3-9332-23659c5692b3";
		//Building Request 
		//data.agencyId = agencyID;
		//var resp = utils.server.makeServerCall(page,data,callback,authId,deepPath,spinnerMsg);
		//console.log(resp);
		protocall.view.buildSubMenuBlk(page);
		$('.tab-rb-submenu a').each(function(){
				protocall.view.setSelectedLinkClasses($(this),false);
		});
		var totalHTML = "";
		var totalLen = 5;
		for(var h = 0; h < totalLen; h++){
			var template = staticTemplate.home.staticFeedTemplate();
			totalHTML = totalHTML + template;
		}
		$(".content-holder").empty();
		$(".content-holder").append($(totalHTML));
		
	},
	loadHomePageData : function(data,page){		
		console.log(data,page);
		var feedHTML =  template.feedsTemplateHTML();
		if(data.resultObject!=null && data.resultObject!="" && data.resultObject.length > 0){
			var result = data.resultObject;
			for(var r = 0; r < result.length; r++){
				var alertDetailsObj = result[r].alertDetails;
				var userDetailsObj = result[r].userDetails;
				var representativeDetailsObj = result[r].representativeDetails;				
			}	
		}	
	},
	buildScreen:function(data,template){
		
		
	},
	loadFeed:function(){		
		var html = staticTemplate.home.staticFeedViewTemplate();
		$(".content-holder").empty();
		$(".content-holder").append($(html));
		var totalHTML = "";
		var totalLen = 1;
		for(var h = 0; h < totalLen; h++){
			var template = staticTemplate.home.staticFeedTemplate();
			totalHTML = totalHTML + template;
		}
		$(".rel-feeds-content").empty();
		$(".rel-feeds-content").append($(totalHTML));
		
	},
	displayMyAlertsFeeds:function(){
		var totalLen = 1, totalHTML="";
		for(var h = 0; h < totalLen; h++){
			var template = staticTemplate.home.staticFeedTemplate();
			totalHTML = totalHTML + template;
		}
		var policyTemplate = staticTemplate.home.staticPoliciesFeedTemplate();
		totalHTML = totalHTML + policyTemplate;
		$(".content-holder").empty();
		$(".content-holder").append($(totalHTML));
	},
	displayIncidentsFeeds:function(){
		var totalLen = 1, totalHTML="";
		for(var h = 0; h < totalLen; h++){
			var template = staticTemplate.home.staticFeedTemplate();
			totalHTML = totalHTML + template;
		}
		$(".content-holder").empty();
		$(".content-holder").append($(totalHTML));
	},
	displayPoliciesFeeds:function(){
		var totalHTML = "";
		var policyTemplate = staticTemplate.home.staticPoliciesFeedTemplate();
		totalHTML = totalHTML + policyTemplate;
		$(".content-holder").empty();
		$(".content-holder").append($(totalHTML));
	},
	
	
};

protocall.carrier = {
	initCarrierPage:function(){
		$(".content-holder").empty();
		var page = "carriers";
		protocall.view.buildSubMenuBlk(page);
		var template = staticTemplate.carriers.staticCarrierTemplate();
		$(".content-holder").empty();
		$(".content-holder").append($(template));
	}
};
protocall.customer = {
	initCustomerPage:function(){
		$(".content-holder").empty();
		var page = "customers";
		protocall.view.buildSubMenuBlk(page);
		var template = staticTemplate.customers.staticCustomerTemplate();
		$(".content-holder").empty();
		$(".content-holder").append($(template));
	}
}
protocall.myRep = {
	initMyRepsPage:function(){
		$(".content-holder").empty();
		var page = "myreps"
		protocall.view.buildSubMenuBlk(page);
		
	}
}

