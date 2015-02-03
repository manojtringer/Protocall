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
		PAGE:"page",HOME_PAGE: "home", CARRIERS_PAGE: "carriers", CUSTOMERS_PAGE: "customers", MY_REP_PAGE: "myreps", LOGIN_page:"login",
		VIEW_FEED:"view",
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
CUSTOMERS_PAGE= "customer";
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
				COUNT : ""
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
    	} else if(page==CARRIERS_PAGE) {
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
		} else if(page == CONSTANTS.LINK_TYPE.CARRIERS_PAGE){
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
						case CONSTANTS.LINK_TYPE.CARRIERS_PAGE:
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
				case CONSTANTS.LINK_TYPE.VIEW_FEED:
					protocall.view.viewFeed();
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
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);		
			//Call the below in carrier.js
			protocall.carrier.initCarrierPage();
			protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
			if(isClickEvent){
				protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERS_PAGE,CONSTANTS.LINK_TYPE.CARRIERS_PAGE,CONSTANTS.LINK_TYPE.CARRIERS_PAGE,"");
			}
		},
		loadCustomerPage:function(isClickEvent){
			if(isClickEvent){
				
			}
		
		},
		loadMyRepsPage:function(isClickEvent){
			if(isClickEvent){
				
			}		
		},
		viewFeed:function(){
			protocall.home.loadFeed();			
		},
		buildSubMenuBlk:function(page){
			var subMenuBlockTemplate = template.subMenuBlk(),
				subMenuSortHTML = template.subMenuSortHTML(),
				subMenuBreadCrumbHTML = template.subMenuBreadCrumbHTML(),
				subMenuTabHTML = template.subMenuTabHTML();
			var subMenuObj = "";
			if(page === HOME_PAGE){
				subMenuObj = SUB_MENU.HOME;				
			} else if(page === CARRIERS_PAGE){
				subMenuObj = SUB_MENU.CARRIERS;				
			}
			
			if(subMenuObj!== ""){
				var bcTotalHTML = "";
				if(subMenuObj.BREADCRUMB != "" && subMenuObj.BREADCRUMB.length > 0){
					var bcHTML = "";
						bcTotalHTML = "";
					var isBCNamePresent = "display:none;";
					var customerName = "";
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
						isSubMenuIconClass = (subMenuObj.TABS[t].ICON_CLASS!="") ? "display:block;": "display:none;";
						isSubMenuCountClass = (subMenuObj.TABS[t].COUNT!="") ? "display:block;": "display:none;";
						
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
				//$(".bcrum-lb-submenu").append($(bcTotalHTML));
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
		var template = protocall.home.staticFeedTemplate();
		$(".content-holder").empty();
		$(".content-holder").append($(template));
		
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
		var html = protocall.home.staticFeedViewTemplate();
		$(".content-holder").empty();
		$(".content-holder").append($(html));
		
	},
	staticFeedTemplate:function(){
		var html = '<div class="feed-block clr-fl">'
						+'<div class="lf-block left">'
							+'<div class="feed-det bg-color-dblue p-relative">'
								+'<div class="feed-det-pad p-relative">'
									+'<div class="feed-pic-b inline-block v-align-mid">'
										+'<div id="" class="feed-user-pic-box">'
											+'<img src="" alt="" class="feeduserpic">'
										+'</div>'
									+'</div>'
									+'<div class="feed-user-det-b inline-block v-align-mid">'
										+'<div class="top-b p-relative">'
											+'<div class="p-relative inline-block v-align-top">'
												+'<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">incident alert</div>'
											+'<div class="p-relative inline-block v-align-mid">'
												+'<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div>'
										+'</div>'
										+'<div class="bot-b">'
											+'<div class="p-relative inline-block v-align-bot">'
												+'<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div>'
											+'<div class="p-relative inline-block v-align-bot">'
												+'<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div>'
											+'<div class="p-relative inline-block v-align-bot">'
												+'<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div>'
											+'<div class="p-relative inline-block v-align-bot">'
												+'<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div>'
										+'</div>'
									+'</div>'
									+'<div class="feed-user-share-b inline-block v-align-mid">'
										+'<a href="/share" class="snap feed-btn bg-color-green inline-block v-align-mid f-sz-14 opensans-regular f-color-w share p-relative" data-type="share">'
											+'<div class="t-center mid-align">'
												+'<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
												+'<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
											+'</div>'
										+'</a>'
										+'<a href="/view" class="snap feed-btn bg-color-green inline-block v-align-mid f-sz-14 opensans-regular f-color-w view p-relative" data-type="view">'
											+'<div class="t-center mid-align">'
												+'<div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div>'
												+'<span class="feed-menu-text inline-block v-align-mid f-color-w">View</span>'
											+'</div>'
										+'</a>'
									+'</div>'
								+'</div>'
							+'</div>'
						+'</div>'
						+'<div class="rg-block left p-relative">'
							+'<div class="feed-det bg-color-dblue p-relative">'
								+'<div class="feed-docs-pad p-relative docs-block t-center">'
									+'<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc">'
											+'<div class="t-center p-relative">'
												+'<div class="doc-icon-box" >'
													+'<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'																									
												+'</div>'
												+'<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'	
												+'<div class="feed-menu-text bold">Text</div>'
											+'</div>'
									+'</a>'
									+'<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc">'
											+'<div class="t-center p-relative">'
												+'<div class="doc-icon-box" >'
													+'<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
												+'</div>'
												+'<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
												+'<div class="feed-menu-text bold">Photos</div>'
											+'</div>'
									+'</a>'
									+'<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc">'
											+'<div class="t-center p-relative">'
												+'<div class="doc-icon-box" >'
													+'<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'																							
												+'</div>'
												+'<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'	
												+'<div class="feed-menu-text bold">Voice</div>'
											+'</div>'
									+'</a>'
								+'</div>'							
							+'</div>'
						+'</div>'			
					+'</div>';
					
		return html;
	},
	
	
	staticFeedViewTemplate:function(){
		var html = '<div class="view-feed-block">'
						+'<div class="view-in-blocks inline-block bg-color-dblue p-relative">'
							+'<div class="p-relative">'
								+'<div class="feed-user-top-details">'
									+'<div class="feed-pic-b inline-block v-align-mid">'
										+'<div id="" class="feed-user-pic-box border-all">'
											+'<img src="" alt="" class="feeduserpic">'
										+'</div>'
									+'</div>'
									
									+'<div class="feed-user-details-top inline-block v-align-mid">'
										+'<div class="line1">'
											+'<div class="p-relative inline-block v-align-top">'
												+'<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps bold">Hugh Jackman</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
										+'</div>'
										+'<div class="line1">'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-name t-caps">Male</div>'
											+'<div class="p-relative inline-block v-align-top">'
												+'<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
											+'</div>'										
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-bday t-upper">19/05/1985</div>'
										+'</div>'
										+'<div class="feed-user-other-details">'
											+'<div class="p-relative inline-block v-align-bot">'
													+'<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div>'
											+'<div class="p-relative inline-block v-align-bot">'
												+'<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div>'
											+'<div class="p-relative inline-block v-align-bot">'
												+'<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div>'
											+'<div class="p-relative inline-block v-align-bot">'
												+'<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
											+'</div>'
											+'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div>'								
										+'</div>'									
									+'</div>'							
								+'</div>'
								+'<div class="feed-user-bottom-details">'
									+'<div class="inline-block v-align-mid">'
										+'<a href="/share" class="snap feed-btn bg-color-green block f-sz-14 opensans-regular f-color-w share p-relative t-center" data-type="share">'
											+'<div class="t-center mid-align">'
												+'<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
												+'<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
											+'</div>'
										+'</a>'
										+'<div class="bg-color-green block feed-btn f-sz-14 opensans-regular f-color-w p-relative t-center alert-type-box">Incident Alert'											
										+'</div>'
									+'</div>'

									+'<div class="inline-block v-align-mid" style="display:none;">'
										+'<a href="/text" class="snap feed-doc-btn block f-sz-14 opensans-regular textDoc p-relative" data-type="textDoc">'
											+'<div class="t-center p-relative bg-color-white f-color-green">'
												+'<div class="doc-icon-box inline-block">'
													+'<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'																								
												+'</div>'
												+'<div class="feed-menu-text inline-block f-color-green">Files</div>'
											+'</div>'
											+'<div class="t-center p-relative bg-color-green f-color-w">'
												+'<div class="file-count inline-block">2</div>'
												+'<div class="inline-block">View</div>'
											+'</div>'
										+'</a>'
									+'</div>'
									+'<div class="inline-block v-align-mid" style="display:none;">'
										+'<a href="/photos" class="snap feed-doc-btn block f-sz-14 opensans-regular photosDoc p-relative" data-type="photosDoc">'
											+'<div class="t-center p-relative bg-color-white f-color-green">'
												+'<div class="doc-icon-box inline-block">'
													+'<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'																								
												+'</div>'											
												+'<div class="feed-menu-text inline-block f-color-green">Photos</div>'
											+'</div>'
											+'<div class="t-center p-relative bg-color-green f-color-w">'
												+'<div class="file-count inline-block">2</div>'
												+'<div class="inline-block">View</div>'
											+'</div>'
										+'</a>'
									+'</div>'
									+'<div class="inline-block v-align-mid" style="display:none;">'
										+'<a href="/voice" class="snap feed-doc-btn block f-sz-14 opensans-regular voiceDoc p-relative" data-type="voiceDoc">'
											+'<div class="t-center p-relative bg-color-white f-color-green">'
												+'<div class="doc-icon-box inline-block">'
													+'<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'																									
												+'</div>'							
												+'<div class="feed-menu-text inline-block f-color-green">Voice</div>'
											+'</div>'
											+'<div class="t-center p-relative bg-color-green f-color-w">'
												+'<div class="file-count inline-block">2</div>'
												+'<div class="inline-block">View</div>'
											+'</div>'
										+'</a>'
									+'</div>'
									+'<div class="inline-block v-align-mid">'
										+'<a href="/changecoverage" class="snap feed-doc-btn block f-sz-17 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
											+'<div class="t-center p-relative">'
												+'<div class="sprite-im message-green-icon center-icon">&nbsp;</div>'									
											+'</div>'
											+'<div class="feed-addRemove-text t-center p-relative t-caps">Add / change coverage on home</div>'
										+'</a>'
									+'</div>'
								+'</div>'
							+'</div>'
						+'</div>'
						+'<div class="view-in-blocks inline-block bg-color-dblue p-relative">'
							+'<div class="p-relative">'
								+'<div class="insurance-policy-blk">'
									
								
								+'</div>'
							+'</div>'
						+'</div>'
						+'<div class="related-feeds p-relative">'
							+'<div class="rel-feeds-title border-bot text-color-overlay">'
								+'<div class="f-sz-14 opensans-regular t-upper">Related Feeds</div>'
							+'</div>'
							+'<div class="rel-feeds-content">'
							+'</div>'
						+'</div>'
						
					+'</div>';
					
		return html;
		
		
	}
	
};

protocall.carrier = {
	initCarrierPage:function(){
		$(".content-holder").empty();
		var page = "carriers";
		protocall.view.buildSubMenuBlk(page);
	}
	
	
};
