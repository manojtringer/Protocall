window.addEventListener('popstate', function (event) {
    console.log('popstate fired!');
    console.log('Event State URL ----->', event.state.url)
    protocall.stateNavigation(event.state.url);
});
var browserPrefix = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
        (/firefox/i).test(navigator.userAgent) ? 'moz' :
        (/trident/i).test(navigator.userAgent) ? 'ms' :
        'opera' in window ? 'o' : '';
var REFERENCE_TYPE = "agency_info";
var IsAgencyDataChanged = false;
var IsVendorDataChanged = false;
var SERVICEID = 0;
var PAGE_COUNT = 0;
var IsLoadNextPage = true;
//CONSTANTS
var CONSTANTS = {
    MODAL_OPACITY: 1,
    FORM_SUBMIT_OPACITY: 0.2,
    CHANNEL_TOKEN: null,
    LINK_TYPE: {
        PAGE: "page", HOME_PAGE: "home", CARRIERS_PAGE: "carriers", AGENCY_PAGE: "agency", AGENCIES_PAGE: "agencies", CUSTOMERS_PAGE: "customers", MY_REP_PAGE: "myreps",
        LOGIN: "login", LOGIN_YES: "login-yes", LOGOUT_YES: "logout-yes",
        VIEW_FEED: "view", FEEDS: "feeds", SHARE_TO_REP: "share", CLOSE_OVERLAY: "closeOverlay", CLOSE_POPUP: "closePopUp", EDIT_AGENCY_PIC: "editAgencyPic",
        MY_ALERTS: "myalerts", INCIDENTS: "incidents", POLICIES: "policies", MATCH_RELEASE_CLAIMS: "matchReleaseClaim", MATCH_CLAIMS: "matchClaim", INVITE_REPS: "invitereps", SEND_INVITE_REPS: "InvitemyRep",
        ASSIGN_TO_REPS: "assignrep", PHOTS_OVERLAY_DISPLAY: "photosDoc", THUMB_NAIL: "thumbNail", PREVIOUS: "previous", NEXT: "next", VIEW_CARRIER_FEEDVIEW: "viewcarrierfeedview",
        PUSHMESSAGE: "pushmessage", PRIVACY: "privacy", ARCHIVES: "archives", VIEW_ARCHIVES: "view_archives", SORTBY: "sortby", SORTBYCARRIER: "sortbycarrier", SORTBY_AGENCIES: "sortbyAgencies",
        SORTBYCUSTOMER: "sortbycustomer", SORTBYREPS: "sortbyreps", MY_PROFILE: "profile-link", VIEW_CUSTOMER_FEEDVIEW: "customerprofileviewfeed", SETTINGS_PAGE: "mysettings",
        PROFILE_PAGE: "myProfileView", SENDAPPLINK: "sendapplink", AUDIO_OVERLAY: "voiceDoc", AUDIO_PLAY: "playAudio", AGENCY_VIEW_LOAD: "agency-view-load",
        PREFERRED_VENDOE_VIEW_LOAD: "preferred vendors-view-load", AGENCY_EDIT_LOAD: "agency-edit-load", AGENCY_REMOVE_LOAD: "agency-remove-load",
        AGENCY_ADD_VENDOR_LOAD: "agency-addvendor-load", VENDOR_PROFILE_INFO: "vendor-profile-info",
        ASSIGN_TO_CUSTOMERS: "dt-assigncustomer", PROPERTY_POLICY: "dt-propertypolicy", HEALTH_POLICY: "dt-healthpolicy",
        VEHICLE_POLICY: "dt-vehiclepolicy", RESETPASSWORD: "dtresetpassword", SIGNUP: "signup", OVERLAY_RESETPASSALERTBOX: "dtoverlayresetpassword",
        EDITPASSWORDYES: "dtoverlayrestpassyes", EDITPASSWORDNO: "dtoverlayrestpassno",
        PREVIOUS_AUDIO: "previousAudio", NEXT_AUDIO: "nextAudio", DOCUMENTSOVERLAY: "textDoc", MYPROFEDIT: "edit", MYPROFEDITMYREPS: "carrierownerrepedit",
        SORTBYRECENT: "recent", SORTBYALPHABETICAL: "alphabetical", CARRIERSORTBYRECENT: "carrier-recent", CARRIERSORTBYALPHABETICAL: "carrier-alphabetical",
        REPSSORTBYRECENT: "reps-recent", REPSSORTBYALPHABETICAL: "reps-alpha", CUSTOMERSORTBYRECENT: "customer-recent", CUSTOMERSORTBYALPHABETICAL: "customer-alphabetical",
        VIEWARCHIVECHECKBOX: "archiveCheckBox", MANAGE_AGENCY: "manage_agency",
        VIEWCUSTOMERFEED: "viewcustomerfeedview", VIEWAGENCIESFEED: "viewagenciesfeedview",
        BUTTON_SENDAPPLINK: "dt_overlaybtn_sendapplink",
        BUTTON_PRIVACYSEND: "overlaybtnPrivacySend", BUTTON_ADDVENDORSEND: "overlaybtn_addvendordetails", BUTTON_SHAREWITHREP: "dt_overlaybtn_sharerepwithcustomers",
        BUTTON_PUSHMESSAGESEND: "overlaybtn-pushmessage", PRINTPAGE: "printPage", BUTTON_ASSIGNTOREPS: "dt_overlaybtn_assignToReps",
        BUTTON_ASSIGNTOCUSTOMERS: "dt_overlaybtn_assigncustomers", SELECTED_SEARCH_ITEM: "selectedSearchItem", CARRIERAGENCY: "carrieragency", CARRIERCUSTOMERS: "carriercustomers", CARRIER_REPS_PAGE: "carrierreps",
        VIEW_CARRIER_REPS_DETAILS: "viewCarrierRep", VIEW_CARIER_REP_PROFILE_PAGE: "ViewCarrierRep", EDITCARRIEROWNER_AGENCYDETAILS: "editcarrierowner_agencydetails", ADDMORE: "addmoredata", TEMPCLOSE_OVERLAY: "overlaybtn",
        AGENCYPICEDIT: "agencyPicEdit", SUPERADMINHOMEFEEDVIEW: "superAdminHomeFeedView", SETTINGS_SAVE: "save", RESET_PASSWORD: "dt-resetpassword",
        SUPERADMIN_AGENCIES_ALPHASORT: "agencies-alpha", SUPERADMIN_AGENCIES_RECENTSORT: "agencies-recent", COMPLETESIGNUP : "completeSignUp"
    },
    ERROR_MSG: {
        ajaxFailed: "Oops! This action could not be completed now! Please try again"
    },
    ISLOGGEDIN: false,
    HASNEXTPAGE: false,
    SCROLLTOPVALUE: 0,
    PRIVACY_TOGGLE_BUTTON: ""
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
    ALERT_LIST: "alertlist",
    AGENCY_DASHBOARD_DESIGN: "agencydashboarddesign",
    GIVE_RECORDED_BY_USER: "giverecordedbyuser"
};
var RESPONSE = {
    RESULTOBJECT: {},
    AUDIODETAILS: [],
    MEDIAID: [],
    PICTUREDETAILS: [],
    IMAGEURLS: [],
    IMGETEXT: [],
    MEDIAIDFORPICTURE: [],
    AUDIOTEXT: [],
    TIMESTAMPAUDIO: [],
    AUDIOURLS: [],
    AUDIODETAILTIME: [],
    STATENAME: [],
    OTHERPARTYDETAILS: [],
    NAMES: [],
    OTHERPARTYNAMES: [],
    ROLE: [],
    PHONE: [],
    ADDRESS: [],
    INSURANCECO: [],
    POLICY: [],
    VEHICLENO: [],
    VEHICLEMODEL: [],
    DRIVINGLICENCESTATE: [],
    DRIVINGLICENCENUMBER: [],
    INJURIES: [],
    OTHERINFORMATION: [],
    OTHERPARTYIDS: [],
    INCIDENTID: []
};
var PAGEREFRESH = {
    ISPAGEREFRESHED: false,
    ISPAGEREFRESHEDFORCARRIERFEEDVIEW: false,
    ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW: false,
    ISPAGEREFRESHEDFORMYPROFILE: false,
    ISPAGEREFRESHEDFORSETTINGS: false
}
/*Naveen 19-2-2015 Chnage start*/
var HOMEPAGERESPONSE = {
    ALERTDETAILS: [],
    ALERTDETAILSLENGTH: 0,
    RECURRINGALERTDFEEDS: [],
    INCIDENTALERTSCLICKED: false,
    HOMEPAGEMYALERTSLOADED: true,
    POLICYALERTCLICKED: false,
    PROFILEAPI: "https://proto-call-test.appspot.com/file/",
    PROFILEAPIFORIMAGE: "https://proto-call-test.appspot.com/imageuploadforwebteam/",
    TEXTDOWNLOADURL: "https://2-dot-proto-call-test.appspot.com/downloadtextinformation/",
    SORTBYRECENTVIEW: false,
    SORTBYALPHABETICALVIEW: false,
    ISVIEWARCHIVECLICKED: false,
    /*Naveen 23-2-2015 Changes Start */
    UNREADFEEDCOUNT: 0,
    INCIDENTALERTFEED: [],
    POLICYALERTSFEED: [],
    HOMEPAGESTUBBEDDATA: {},
    LISTOFALERTIDSFORARCHIVE: [],
    HOMEPAGEMYALERTSLOADEDCOUNT: 0,
    COMMONUSERDETAILS: {},
    ISVIEWALERTVALUECLICKED: false,
    FEEDSICONCLICKED: false,
    PROFILEPICUPDATECLICKED: false,
    DOWNARROWPRESSEDCOUNT: 0,
    UPARROWPRESSEDCOUNT: 0,
    RELATEDFEEDSLOADED: false,
    RELATEDFEEDS: {},
    PROPERTYPOLICYCOUNT: 0,
    VEHICLEPOLICYCOUNT: 0,
    OTHERPOLICYCOUNT: 0,
    PROPERTYCARRIERNAMES: [],
    PROPERTYPHONENUMBER: [],
    PROPERTYNEXTPAYMENTAMOUNT: [],
    PROPERTYNEXTPAYMENTAMOUNTDATE: [],
    PROPERTYDURATIONSTARTDATE: [],
    PROPERTYDURATIONENDDATE: [],
    VEHICLECARRIERNAMES: [],
    VEHICLEPHONENUMBER: [],
    VEHICLENEXTPAYMENTAMOUNT: [],
    VEHICLENEXTPAYMENTAMOUNTDATE: [],
    VEHICLEDURATIONSTARTDATE: [],
    VEHICLEDURATIONENDDATE: [],
    OTHERCARRIERNAMES: [],
    OTHERPHONENUMBER: [],
    OTHERNEXTPAYMENTAMOUNTDATE: [],
    OTHERNEXTPAYMENTAMOUNT: [],
    OTHERDURATIONSTARTDATE: [],
    OTHERDURATIONENDDATE: [],
    CUSTOMERDATA: {},
	SIGNUPREGISTRATIONDONE : false
    /*Naveen 23-2-2015 Changes End */
}
/*Naveen 19-2-2015 Chnage end*/
//API
//ProfileAPI = 'https://proto-call-test.appspot.com/file/'
//PAGE NAMES
CURRENT_PAGE = "";
LOGIN_PAGE = "login";
HOME_PAGE = "home";
CARRIERS_PAGE = "carriers";
CUSTOMERS_PAGE = "customers";
MY_REP_PAGE = "myreps";
SETTINGS_PAGE = "mysettings";
PROFILE_PAGE = "myProfileView";
MANAGE_AGENCY = "manageagency";
AGENCY_PAGE = "agency";
//PAGE & SUBMENU OBJECTS
var SUB_MENU = {
    HOME: {
        BREADCRUMB: [
            {
                TITLE: "feeds",
                ICON_CLASS: "feeds-icon" // has Class
            }
        ],
        TABS: [
            {
                TITLE: "policies",
                ICON_CLASS: "",
                COUNT: ""
            },
            {
                TITLE: "incidents",
                ICON_CLASS: "",
                COUNT: ""
            },
            {
                TITLE: "my_alerts",
                ICON_CLASS: "",
                COUNT: "24"
            },
        ],
        ISSORTBY: true
    },
    PROFILE: {
        BREADCRUMB: [
            {
                TITLE: "my_profile",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            {
                TITLE: "edit",
                ICON_CLASS: "", //has class,
                COUNT: ""
            }
        ],
        ISSORTBY: false
    },
    SETTINGS: {
        BREADCRUMB: [
            {
                TITLE: "settings",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            {
                TITLE: "save",
                ICON_CLASS: "",
                COUNT: ""
            },
            {
                TITLE: "privacy",
                ICON_CLASS: "",
                COUNT: ""
            }
        ],
        ISSORTBY: false
    },
    CARRIERS: {
        BREADCRUMB: [
            {
                TITLE: "carriers",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            // No Carrier Tabs
        ],
        ISSORTBY: true
    },
    CUSTOMERS: {
        BREADCRUMB: [
            {
                TITLE: "customers",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            {
                TITLE: "assign_rep",
                ICON_CLASS: "",
                COUNT: ""
            },
            {
                TITLE: "push_message",
                ICON_CLASS: "", // has class
                COUNT: ""
            }
        ],
        ISSORTBY: true
    },
    MY_REPS: {
        BREADCRUMB: [
            {
                TITLE: "my_reps",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            {
                TITLE: "invite_reps",
                ICON_CLASS: "", // has Class
                COUNT: ""
            },
            {
                TITLE: "privacy",
                ICON_CLASS: "",
                COUNT: "",
            }
        ],
        ISSORTBY: true
    }


};
// DROPDOWN CONSTANTS
var DROPDOWN = {
    SORTBY: {
        CLASS: "highlight",
        ITEMS: ["Recent", "Alphabetical"]

    },
    PROFILE: {
        CLASS: "normal",
        ITEMS: ["My Profile", "Settings", "Help", "Log Out"]
    },
    RANGE_SELECTOR: {
        CLASS: "highlight",
        ITEMS: ["Alphabetical", "City, State"]
    },
    ALPHABETICAL_SORT: {
        CLASS: "highlight",
        ITEMS: ["Select All", "Select A", "Select B", "Select C", "Select D", "Select E", "Select F", "Select G", "Select H", "Select I", "Select J", "Select K", "Select L", "Select M", "Select N", "Select O", "Select P", "Select Q", "Select R", "Select S", "Select T", "Select U", "Select V", "Select W", "Select X", "Select Y", "Select Z"]
    }
};
//PRE-DEFINED FUNCTIONS
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
String.prototype.truncateStr = function (m) {
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
$(document).ready(function () {
//initialise protocall
    protocall.displaySpinner(true);
    setTimeout(function () {
        // To wait for client endpoint to load
        protocall.init();
    }, 2000);
	setInterval(function(){
		protocall.view.loadHomePage(true);
	},5*60*1000);
});
protocall = {
    init: function () {
        protocall.displaySpinner(true);
		var pageNameFromURL = this.grabHashPage();
		if (this.isLoggedIn()) {
			if (pageNameFromURL !== "" && typeof pageNameFromURL !== "undefined" && pageNameFromURL.length != 0) {
                if (pageNameFromURL === LOGIN_PAGE) {
                    this.setPageNavigation(HOME_PAGE);
                } else {
                    this.setPageNavigation(pageNameFromURL);
                }
            } else {
                this.setPageNavigation(localStorage.currentPage);
            }
        }
        else {
			if(pageNameFromURL.match("signup-1")){
				protocall.view.loadSignupPage(false);
				sessionStorage.roleToBePassed = "agencyRep";
			} else if(pageNameFromURL.match("signup-2")){
				protocall.view.loadSignupPage(false);
				sessionStorage.roleToBePassed = "carrierRep";
			} else if(pageNameFromURL == "signup"){
				sessionStorage.roleToBePassed = "";
				protocall.view.loadSignupPage(false);
			} 
			else {
				this.setPageNavigation(LOGIN_PAGE);
				HOMEPAGERESPONSE.SIGNUPREGISTRATIONDONE = false;
				setTimeout(function () {
					window.scrollTo(0, 1); //to fix refresh scrolling issue when page is reloaded with page scrolled
				}, 300);
			}
        }
        this.events.createEvents();
    },
    grabHashPage: function () {
        var pageName = "";
        if (window.location.hash !== "" && window.location.hash !== null) {
            var hashArr = window.location.hash.split("#");
            pageName = hashArr[1];
            console.log("Page name from URL", pageName);
        }
        return pageName;
    },
	grabHashPageForInviteRep: function () {
        var pageName = "";
        if (window.location.hash !== "" && window.location.hash !== null) {
            var hashArr = window.location.hash.split("=");
            pageName = hashArr[1];
            console.log("Page name from URL", pageName);
        }
        return pageName;
    },
    loadPage: function (pageUrl) {

        var pageArr = pageUrl.split("/");
        var page = "", subMenu = [];
        if (pageArr.length > 0) {
            page = pageArr[0];
            for (var s = 1; s < pageArr.length; s++) {
                subMenu.push(pageArr[s]);
            }
        } else {
            page = pageUrl;
        }
        this.setMenuSelection(page);
        protocall.events.GlobalContainerScrollevent();
        this.displaySpinner(true);
        this.setLocalStorage(page);
        if (page == LOGIN_PAGE) {
            this.view.loadLoginPage(false);
        } 
//CARRIERCUSTOMERS
        else if (page == HOME_PAGE) {
            if (subMenu.length > 0) {
                var subMenuName = subMenu[0];
                if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_FEED) {
                    PAGEREFRESH.ISPAGEREFRESHED = true;
                    this.view.viewFeed(false);
                }
            } else {
                this.view.loadHomePage(false);
            }
        } else if (page == CARRIERS_PAGE) {
            if (subMenu.length > 0) {
                var subMenuName = subMenu[0];
                if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW) {
                    PAGEREFRESH.ISPAGEREFRESHEDFORCARRIERFEEDVIEW = true;
                    var Carrieremail = "";
                    this.view.viewCarrierViewFeed(false, Carrieremail);
                }
            } else {
                this.view.loadCarrierPage(false);
            }
        } else if (page == CUSTOMERS_PAGE) {
            if (subMenu.length > 0) {
                var subMenuName = subMenu[0];
                if (subMenuName == CONSTANTS.LINK_TYPE.VIEWCUSTOMERFEED) {
                    PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW = true;
                    this.view.viewCustomerFeed(false);
                }
            } else {
                this.view.loadCustomerPage(false);
            }
        } else if (page == MY_REP_PAGE) {
            this.view.loadMyRepsPage(false);
        } else if (page == CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE) {
            this.view.loadCarrierRepsPage(false);
        } else if (page == SETTINGS_PAGE) {
            var $el = $(".mysettings");
            PAGEREFRESH.ISPAGEREFRESHEDFORSETTINGS = true;
            this.view.viewSettingsPage(false, $el);
        } else if (page == MANAGE_AGENCY) {
            var $el = $(".mysettings");
            PAGEREFRESH.ISPAGEREFRESHEDFORSETTINGS = true;
            this.view.viewSettingsPage(false, $el);
        } else if (page == PROFILE_PAGE) {
            var $el = $(".myProfileView");
            PAGEREFRESH.ISPAGEREFRESHEDFORMYPROFILE = true;
            this.view.viewProfileViewPage(false, $el);
        } else if (page == AGENCY_PAGE) {
            this.view.loadAgencyPage(false);
        }

        if (subMenu.length > 0) {
            var subMenuName = subMenu[0];
            console.log("SubMenu Name", subMenuName)
            /* else if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW) {
             PAGEREFRESH.ISPAGEREFRESHEDFORCARRIERFEEDVIEW = true;
             var Carrieremail = "";
             this.view.viewCarrierViewFeed(false, Carrieremail);
             } */ /* else if (subMenuName == CONSTANTS.LINK_TYPE.VIEWCUSTOMERFEED) {
              this.view.viewCustomerFeed(false);
              } */
            if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW) {
                this.view.viewCustomerViewFeed(false);
            }
            else if (subMenuName == CONSTANTS.LINK_TYPE.MY_ALERTS) {
                var $el = $('.myalerts')
                this.view.loadMyAlertsFeeds($el, false);
            } else if (subMenuName == CONSTANTS.LINK_TYPE.INCIDENTS) {
                var $el = $('.incidents')
                this.view.loadIncidentsFeeds($el, false);
            } else if (subMenuName == CONSTANTS.LINK_TYPE.POLICIES) {
                var $el = $('.policies')
                this.view.loadPoliciesFeeds($el, false);
            }
            else if (subMenuName == CONSTANTS.LINK_TYPE.ARCHIVES) {
                var $el = $('.archives')
                this.view.loadArchiveFeeds($el, false);
            }
            else if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_ARCHIVES) {
                var $el = $('.view_archives')
                this.view.loadviewArchivedFeeds($el, false);
            }

        }
    },
    setPage: function (page, url, title, data) {

        // alert("url" + url);
        if (url == undefined) {
            url = "login";
        }
        data = data ? data : ""; // json data for the page
        var urlWithHash = "#" + url;
        var dataModified = {
            "url": url,
            "data": data
        };
        window.history.pushState(dataModified, title, urlWithHash);
    },
    setPageNavigation: function (page) {
        // should be called first for navigating pages on start.

        //alert("page" + page);

        CURRENT_PAGE = page;
        this.loadPage(CURRENT_PAGE);
        this.setPage(CURRENT_PAGE, CURRENT_PAGE, CURRENT_PAGE, "");
    },
    setLocalStorage: function (page) {
        localStorage.setItem('currentPage', page);
    },
    //Navigate Pages on Window back and forward buttons
    stateNavigation: function (page) {
        this.loadPage(page);
    },
    //On click of pages menu, call the below
    clickPageNavigation: function (page) {
        CURRENT_PAGE = page;
        //this.loadPage(page);
        this.setLocalStorage(CURRENT_PAGE);
    },
    isLoggedIn: function () {
        //Check for user logged in.
        if (localStorage) {
            return sessionStorage.loggedIn ? true : false;
        } else {
            if (CONSTANTS.ISLOGGEDIN) {
                return true;
            } else {
                return false;
            }
        }
    },
    setMenuSelection: function (page, subMenu) {
        //
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
        if (page == CONSTANTS.LINK_TYPE.HOME_PAGE) {
            $(".mb-menu a.home").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CARRIERS_PAGE) {
            $(".mb-menu a.carriers").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.AGENCY_PAGE) {
            $(".mb-menu a.agencyinfo").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CARRIERAGENCY) {
            $(".mb-menu a.CarrierAgencies").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.AGENCIES_PAGE) {
            $(".mb-menu a.agencies-info").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE) {
            $(".mb-menu a.customers").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.MY_REP_PAGE) {
            $(".mb-menu a.myreps").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE) {
            $(".mb-menu a.carrierreps").addClass("selected-tab");
        }
    },
    displaySpinner: function (show) {
        if (show) {
            $("#spinner").css("display", "block");
        } else {
            $("#spinner").css("display", "none");
        }
    },
    closeOverlay: function () {
        overlay.closeOverlay();
    },
    closePopUp: function () {
        popUpContent.closePopUpContent();
    }
};
protocall.events = {
    createEvents: function () {
        $(document).on("click", ".snap", function (e) {
            e.stopPropagation();
            protocall.events.handleClick(e);
        });
        $(document).on("click", ".printPageClass", function (e) {
            e.stopPropagation();
            protocall.events.handleClick(e);
        });
        $(document).on("click", ".logo", function (e) {
            // protocall.events.handleClick(e);
            protocall.view.loadHomePage(true);
        });
//******************Customers View Click Event***********************************
//deleteitem
        $(document).on("click", ".deleteitem", function () {
            //  alert("#delete_item" + $(this).attr("id"));
            $("#delete_item" + $(this).attr("id")).empty();
        });
        $(document).on("click", ".mycustomerView", function () {
            //alert("data" + $(this).attr("id") + "" + $(this).attr("value"));
            protocall.view.viewCustomerFeed(true, $(this).attr("id"), $(this).attr("value"));
        });
        $(document).on("click", ".myagenciesView", function () {
            protocall.view.viewAgenciesFeed(true, $(this).attr("id"), $(this).attr("value"));
        });

        $(document).on("click", ".superadminHome", function () {
            protocall.view.viewSuperAdminHomeIndividualViewFeed(true, $(this).attr("id"), $(this).attr("value"));
        });


        //SUPERADMINHOMEFEEDVIEW
//*******************************************************************************

//******************MyReps Tab View Click Event***********************************
//carrier-feed-associated-view
        $(document).on("click", ".reps-feed-view", function () {
            utils.server.assignToCustomers($(this).attr("id"));
        });
        $(document).on("click", ".carrier-feed-assigntocustomeroverlay-view", function () {
            utils.server.assignToCustomers($(this).attr("id"));
        });
//*******************************************************************************

//******************Share with Rep Click Event***********************************

        $(document).on("click", ".inner-share-spacing", function () {
            utils.server.shareToRep($(this).attr("id"));
        });
//*******************************************************************************

//******************Share with Rep Click Event***********************************

        $(document).on("click", ".preferredvendor", function () {
            SERVICEID = $(this).attr("id");
            utils.server.getResponseForPreferredVendor($(this).attr("id"));
        });


        $(document).on("click", ".Carrierreps-feed-view", function () {
            var carrierid = $(this).attr("id");
            localStorage.setItem("CARRIERADMIN_MYREPID", carrierid);
        });
//*******************************************************************************

//******************associatedropdown  Click Event***********************************
        $(document).on("change", "#id-associatedropdown", function () {
            var optionSelected = $("option:selected", this);
            var selOption = optionSelected.val();
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (selOption == "ASSOCIATED REPS") {
                    protocall.carrier.loadAssociatedReps();
                } else {
                    protocall.carrier.loadAssociatedCustomers();
                }
            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (selOption == "ASSOCIATED CUSTOMERS") {
                    CarrierdynamicTemplate.carrier.loadAssocaiteCustomersDataForCarrier();
                } else {
                    CarrierdynamicTemplate.carrier.loadAssocaiteAgenciesDataForCarrier();
                }
            }
        });
//*******************************************************************************

//****************************Date click Function ***************************************************
//id-customers-dropdown

        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Representatives') {
                $(document).on("change", "#id-customers-dropdown", function () {

                    if ($("#id-customers-dropdown").val() == "ASSOCIATED REPS") {
                        protocall.carrier.loadCarrierAssociatedReps();
                    } else if ($("#id-customers-dropdown").val() == "ASSOCIATED CUSTOMERS") {
                        protocall.carrier.loadCarrierAssociatedCustomers();
                    }


                });
            }

            if (localStorage.LoginType == 'Admin') {
                $(document).on("change", "#id-customers-dropdown1", function () {


                    if ($("#id-customers-dropdown1").val() == "ASSOCIATED REPS") {
                        protocall.carrier.loadCarrierOwnerCustomersAssociatedReps();
                    } else if ($("#id-customers-dropdown1").val() == "ASSOCIATED AGENCY") {
                        protocall.carrier.loadCarrierOwnerCustomersAssociatedAgencies();
                    }


                });
                $(document).on("change", "#id-customers-dropdown", function () {

                    if ($("#id-customers-dropdown").val() == "ASSOCIATED REPS") {
                        protocall.carrier.loadCarrierAdminAssociatedRep();
                    } else if ($("#id-customers-dropdown").val() == "ASSOCIATED CUSTOMERS") {
                        protocall.carrier.loadCarrierAdminAssociatedCustomers();
                    }


                });
            }
        } else {
            $(document).on("change", "#id-customers-dropdown", function () {

                if ($("#id-customers-dropdown").val() == "ASSOCIATED REPS") {
                    protocall.carrier.loadAssociatedReps();
                } else if ($("#id-customers-dropdown").val() == "ASSOCIATED CARRIER") {
                    $("#id-carrierassociatedblock").html('');
                    // alert(localStorage.getItem("ASSOCIATE_CARRIER"));
                    if (localStorage.getItem("ASSOCIATE_CARRIER") == undefined || localStorage.getItem("ASSOCIATE_CARRIER") == "") {
                        localStorage.setItem("<div>No Records</div>");
                    } else {
                        $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                    }

                }


            });
        }


        $(document).on("change", "#datepicker", function () {
            var inputDate = new Date(this.value);
            var twoDigitMonth1 = ((inputDate.getMonth().length + 1) === 1) ? (inputDate.getMonth() + 1) : '0' + (inputDate.getMonth() + 1);
            var currentDate = inputDate.getFullYear() + "-" + twoDigitMonth1 + "-" + inputDate.getDate();
            var fullDate = new Date();
            var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
            var selectedDate = fullDate.getFullYear() + "-" + twoDigitMonth + "-" + fullDate.getDate();
            if (currentDate == selectedDate) {
                var currentTime = new Date();
                var hours = currentTime.getHours();
                var minutes = currentTime.getMinutes();
                var ampm = (hours >= 12) ? "PM" : "AM";
                if (hours > 12) {
                    hours = hours % 12;
                }
                //pushmessagetimepicker
                //ampmtimepicker

                $("#pushmessagetimepicker").empty();
                for (var hour = hours; hour <= 12; hour++) {
                    for (var min = minutes; min < 60; min++) {
                        $("#pushmessagetimepicker").append('<option>' + minTwoDigits(hour) + ":" + minTwoDigits(min) + '</option>');
                    }
                    minutes = 0;
                }

                if (ampm == "AM") {
                    $("#ampmtimepicker").prop("selectedIndex", 0);
                } else {
                    $("#ampmtimepicker").prop("selectedIndex", 1);
                }

            } else {
                $("#pushmessagetimepicker").empty();
                for (var hour = 1; hour <= 12; hour++) {
                    for (var min = 0; min < 60; min++) {
                        $("#pushmessagetimepicker").append('<option>' + minTwoDigits(hour) + ":" + minTwoDigits(min) + '</option>');
                    }
                }
                $("#ampmtimepicker").prop("selectedIndex", 0);
            }

        });
//*******************************************************************************

//***********************Drop Down click Events*******************************

//id_back_button
        $(document).on("click", "#id_back_button", function () {
            $("#id-preferred-vendors-view-load").click();
        });


        $(document).on("click", ".id-associatedownarrow", function () {
            protocall.carrier.openSelect("#id-associatedropdown");
        });
        $(document).on("click", "#id-customers-dropdown5", function () {
            protocall.carrier.openSelect("#id-customers-dropdown1");
        });
        //*******************************************************************************     

//submenu-drop-icon

        $(document).on("click", "#id-sortbyfliter", function (event) {
            protocall.view.loadSortBy(event.currentTarget, true);
        });
        $(document).on("click", ".submenu-drop-icon", function () {
            protocall.carrier.openSelect("#usertype");
        });
        $(document).on("click", ".drop-down-icon-1", function () {
            protocall.carrier.openSelect("#timepicker");
        });
        $(document).on("click", ".drop-down-icon-2", function () {
            protocall.carrier.openSelect("#timepicker2");
        });
        $(document).on("click", ".associatedownarrow-customer", function () {
            protocall.carrier.openSelect("#id-customers-dropdown");
        });
        //id-achieveicon

        $(document).on("click", "#id-sharetorep", function () {
            //id-sharetorep
            var alertId = sessionStorage.getItem("userAlertIdViewFeed");
            utils.server.shareToRep(alertId);
        });

        $(document).on("click", "#id-achieveicon", function () {
            var alertId = [sessionStorage.getItem("userAlertIdViewFeed")];
            var data = {"alertList": alertId},
            deepPath = "archieve",
                    page = "home",
                    callback = protocall.home.gotAchieveResponse,
                    authId = "",
                    spinnerMsg = "";
            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        });
        $(document).on("click", ".overalyPhots", function (e) {
            e.stopPropagation();
            console.log(".o-content");
            protocall.events.handleClickForPhotosOverlay(e);
        });
        $(document).on("click", ".overlayDocs", function (e) {
            e.stopPropagation();
            console.log(".o-content");
            protocall.events.handleClickForDocsOverlay(e);
        });
        $(document).on("click", ".audioOverlay", function (e) {
            e.stopPropagation();
            console.log(".o-content");
            protocall.events.handleClickForAudioThumbNail(e);
        });
        /* $(document).on("scroll",  function (e) {
         console.log("scroll invoked");
         $("#pop-up-content").hide();
         e.preventDefault();
         }); */
        $(window).on("resize", function (e) {
            var searchBarLength = $(".searchbox-border").length;
            if (searchBarLength !== 0) {
                var widthOfSearchTextBox = $(".searchbox-border").width() + "px";
                var searchBorderLeftPosition = $(".searchbox-border").offset().left + "px";
                var searchBorderTopPosition = $(".searchbox-border").offset().top + 54 + "px";
                $("#searchBarDiv").css({"width": widthOfSearchTextBox, "left": searchBorderLeftPosition, "position": "absolute", "top": searchBorderTopPosition});
            }

            protocall.events.handleResize(e);
        });
        /*Search */
        $(document).on("keyup", "#searchUserDetails", function (e) {
            var searchTextValue = $(this).val();
            console.log("e.which", e.which);
            /* console.log("$.ui.keyCode.UP",$.ui.keyCode.UP);
             console.log("$.ui.keyCode.UP",$.ui.keyCode.DOWN); */
            if (e.which == 40) {
                ++HOMEPAGERESPONSE.DOWNARROWPRESSEDCOUNT;
                HOMEPAGERESPONSE.UPARROWPRESSEDCOUNT = 0
                protocall.view.handleDownarrow();
            } else if (e.which == 38) {
                ++HOMEPAGERESPONSE.UPARROWPRESSEDCOUNT;
                HOMEPAGERESPONSE.DOWNARROWPRESSEDCOUNT = 0
                protocall.view.handleUpArrowFun();
            } else if (e.which == 13) {
                protocall.view.handleEnterFunction();
            } else {
                console.log("searchTextValue>>>>>>>>>>>>>>>>", searchTextValue);
                if (searchTextValue == "" || searchTextValue == "null") {
                    $("#searchBarDiv").hide();
                    $("#searchResultUL").hide();
                    return false;
                } else {
                    $("#searchResultUL").empty();
                    $("#searchResultUL").show();
                    var widthOfSearchTextBox = $(".searchbox-border").width() + "px";
                    var searchBorderLeftPosition = $(".searchbox-border").offset().left + "px";
                    var searchBorderTopPosition = $(".searchbox-border").offset().top + 54 + "px";
                    $("#searchBarDiv").css({"width": widthOfSearchTextBox, "left": searchBorderLeftPosition, "position": "absolute", "top": searchBorderTopPosition});
                    protocall.view.searchUserDetails(searchTextValue);
                }
                e.stopPropagation();
            }
            /* console.log(".o-content");
             protocall.events.handleClickForAudioThumbNail(e); */
        });
        $(document).click(function (e) {
            e.stopPropagation();
            if (!($("#searchUserDetails").is(":focus"))) {
                $("#searchBarDiv").hide();
                $("#searchResultUL").hide();
            } else {
                var searchText = $("#searchUserDetails").val();
                if (searchText == "" || searchText == "null") {
                    $("#searchBarDiv").hide();
                    $("#searchResultUL").hide();
                    return false;
                } else {
                    $("#searchResultUL").empty();
                    $("#searchResultUL").show();
                    protocall.view.searchUserDetails(searchText);
                }
            }

        });
        /* $(document).on("blur", ".searchBarDiv", function (e) {
         e.stopPropagation();
         $("#searchBarDiv").hide();
         $(".search-ip").val("");
         }); */
    },
    /*Naveen Chnages 19-2-2015 start */
    containerScrollEvent: function () {
        console.log("function called");
        $(".container").on("scroll", function (e) {
            console.log("container scroll");
            if (localStorage.getItem("SUBMENU") == "HOME_PAGE") {
                protocall.events.handleScroll();
            }
        });
    },
    GlobalContainerScrollevent: function () {
        $(".container container-maxwidth").on("scroll", function (e) {
            var container1 = $('.container-maxwidth');
            //alert("1" + container1.scrollTop());
            if (container1.scrollTop() == 0) {
                $(".topContainer").css("box-shadow", "inset 0px 8px 8px #E9EFF0");
            } else {
                $(".topContainer").css("box-shadow", "inset 0px -6px 10px -5px rgba(0,0,0,0.3)");
            }
        }
        );
        $(".container").on("scroll", function (e) {
            var container = $('.container');
            // alert(container.scrollTop());

            console.log("eee:", container.scrollTop());
            if ($('.container').scrollTop() == 0) {
                $(".container").css("box-shadow", "inset 0px 8px 8px #E9EFF0");
            } else {
                $(".container").css("box-shadow", "  0px -6px 10px -5px rgba(0,0,0,0.3)");
            }
        });
    },
    mouseOverCheckbox: function () {
        var userFeedbox = $(".feed-user-pic-box");
        $.each(userFeedbox, function (index, element) {
            $(this).hover(
                    function () {
                        console.log("mouse enter");
                        $(this).find("label").addClass("feed-label");
                    },
                    function () {
                        console.log("mouse leave");
                        if ($(this).find("input").prop("checked")) {
                            $(this).find("label").addClass("feed-label");
                        } else {
                            $(this).find("label").removeClass("feed-label");
                        }
                    }
            );
        });
    },
    handleScroll: function (e) {
        var container = $('.container'), pageNumber = 1, deepPath = "", page = "";
        var scrollHeightValue = container[0].scrollHeight - container.scrollTop();
        var containerOuterHeight = container.outerHeight();
        console.log("scrollHeightValue", scrollHeightValue);
        console.log("containerOuterHeight", containerOuterHeight);
        //console.log("container.scrollTop()", container.scrollTop());
        //var containerScrollTop = 0;
        protocall.events.GlobalContainerScrollevent();
        CONSTANTS.SCROLLTOPVALUE = CONSTANTS.SCROLLTOPVALUE + container.scrollTop();
        console.log("HOMEPAGERESPONSE.INCIDENTALERTSCLICKED", HOMEPAGERESPONSE.INCIDENTALERTSCLICKED);
        console.log("HOMEPAGERESPONSE.POLICYALERTCLICKED", HOMEPAGERESPONSE.POLICYALERTCLICKED);
        if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
            deepPath = "filterfeedbyalphabetical";
        } else {
            deepPath = "filterfeedbyalertdate";
        }
        if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
            deepPath = "viewedarchieved";
        }

        if (scrollHeightValue === containerOuterHeight) {
            //  $(".container").off("scroll");
            console.log("condition satisfied");
            if (CONSTANTS.HASNEXTPAGE) {
                if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                    container.scrollTop();
                } else if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
                    container.scrollTop();
                } else {
                    container.scrollTop();
                    page = "home";
                }
                $(".content-holder").append('<div id="scrollingDiv" style="position:relative;margin: 20px 0px;"><div class="bottomSpinner"></div></div>');
                $(".content-holder").css("opacity", "0.5");
                protocall.events.GlobalContainerScrollevent();
                if (IsLoadNextPage == true) {
                    IsLoadNextPage = false;
                    protocall.home.loadingAlertFeeds(++CONSTANTS.PGNUMBER, deepPath, page);
                }
                return false;
            }
        }
    },
    /*Naveen Chnages 19-2-2015 end */
    handleClick: function (e) {
        var $el = $(e.currentTarget);
        if ($el.prop("tagName") == "A") {
            e.preventDefault();
        }
        var type = $el.data("type") ? $el.data("type") : null;
        var page = $el.data("page") ? $el.data("page") : null;
        var subMenu = $el.data("submenu") ? $el.data("submenu") : null;
        var id = $el.data("id") ? $el.data("id") : null;
        var Carrieremail = id;
        if (!type)
            return;
        switch (type) {
            case CONSTANTS.LINK_TYPE.PAGE:
                if (!page && !subMenu)
                    return;
                switch (page) {

                    case CONSTANTS.LINK_TYPE.HOME_PAGE:

                        protocall.view.loadHomePage(true);
                        break;
                        //AGENCY_PAGE
                    case CONSTANTS.LINK_TYPE.CARRIERS_PAGE:
                        protocall.view.loadCarrierPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCY_PAGE:
                        protocall.view.loadAgencyPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIERAGENCY:
                        protocall.view.loadCarrierOwnerAgenciesPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCIES_PAGE:
                        protocall.view.loadAgenciesPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE:
                        protocall.view.loadCustomerPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIERCUSTOMERS:
                        protocall.view.loadCustomerPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.MY_REP_PAGE:
                        protocall.view.loadMyRepsPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE:
                        protocall.view.loadCarrierRepsPage(true);
                        break;
                    default:
                        break;
                }
                switch (subMenu) {
                    case CONSTANTS.LINK_TYPE.RESET_PASSWORD:
                          protocall.view.loadResetPassAlertBox();
                        break;
                    case CONSTANTS.LINK_TYPE.SETTINGS_SAVE:
                        var selectedTab = localStorage.getItem("SELECTED_SETTINGS_TAB");

                        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                            if (selectedTab == "AGENCY_TAB") {
                                editAgencySaveData();
                            } else if (selectedTab == "PREFERRED_VENDORS") {
                                editVendorSaveData();
                            }
                        }
                        break;
                    case CONSTANTS.LINK_TYPE.HOME_PAGE:

                        protocall.view.loadHomePage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIERS_PAGE:
                        protocall.view.loadCarrierPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCY_PAGE:
                        protocall.view.loadAgencyPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIERAGENCY:
                        protocall.view.loadCarrierOwnerAgenciesPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCIES_PAGE:
                        protocall.view.loadAgenciesPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE:
                        protocall.view.loadCustomerPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.FEEDS:
                        HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED = false;
						HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
						HOMEPAGERESPONSE.FEEDSICONCLICKED = true;
                        try {
                            if (localStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == undefined) {
                                localStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "MY_ALERTS");
                            }
                        } catch (err) {
                            localStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "MY_ALERTS");
                        }
                        var selectedTab = localStorage.getItem("HOME_PAGE_SELECTED_BUTTON");

                        //  alert(selectedTab);
                        if (selectedTab == "MY_ALERTS") {
                            protocall.view.loadMyAlertsFeeds($el, true);
                        } else if (selectedTab == "INCIDENTS") {
                            protocall.view.loadIncidentsFeeds($el, true);
                        } else if (selectedTab == "POLICIES") {
                            protocall.view.loadPoliciesFeeds($el, true);
                        } else if (selectedTab == "ARCHIVES") {
                            protocall.view.loadArchiveFeeds($el, true);
                        } else if (selectedTab == "VIEW_ARCHIVES") {
                            protocall.view.loadviewArchivedFeeds($el, true);
                        }

                        break;
                    case CONSTANTS.LINK_TYPE.MY_ALERTS:
                        localStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "MY_ALERTS");
                        protocall.view.loadMyAlertsFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.INCIDENTS:
                        localStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "INCIDENTS");
                        protocall.view.loadIncidentsFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.POLICIES:
                        localStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "POLICIES");
                        protocall.view.loadPoliciesFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.ARCHIVES:
                        localStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "ARCHIVES");
                        protocall.view.loadArchiveFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.VIEW_ARCHIVES:
                        localStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "VIEW_ARCHIVES");
                        protocall.view.loadviewArchivedFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.INVITE_REPS:
                        protocall.view.loadInviteReps($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.ASSIGN_TO_REPS:
                        utils.server.assignToRep();
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBY:
                        protocall.view.loadSortBy($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBYCARRIER:
                        protocall.view.loadSortByCarrier($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBYCUSTOMER:
                        protocall.view.loadSortByCustomer($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBYREPS:
                        protocall.view.loadSortByReps($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBY_AGENCIES:
                        protocall.view.loadSortByAgencies($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.PUSHMESSAGE:
                        protocall.view.pushMessage($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.PRIVACY:
                        protocall.view.privacy($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCYPICEDIT:
                        protocall.view.overlayProfileEditPic(true);
                        break;
                    case CONSTANTS.LINK_TYPE.MYPROFEDIT:
                        protocall.view.MyprofEdit();
                        break;
                    case CONSTANTS.LINK_TYPE.MYPROFEDITMYREPS:
                        protocall.view.MyprofEditCarrierOwner();
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE:
                        protocall.view.loadCarrierRepsPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.ASSIGN_TO_CUSTOMERS:
                        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                            if (localStorage.LoginType == 'Admin') {
                                protocall.view.assignToCustomers();
                            }
                        }

                    default:
                        break;
                }
                break;
            case CONSTANTS.LINK_TYPE.MANAGE_AGENCY:
                if (localStorage.LoginType == 'Admin') {
                    protocall.closeOverlay();
                    CONSTANTS.HASNEXTPAGE = false;
                    protocall.displaySpinner(true);
                    protocall.view.viewSettingsPage(true, $el);

                }

                break;
            case CONSTANTS.LINK_TYPE.SETTINGS_PAGE:
                CONSTANTS.HASNEXTPAGE = false;
                protocall.displaySpinner(true);
                protocall.view.viewSettingsPage(true, $el);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_CARRIER_REPS_DETAILS:
                protocall.view.viewCarrierRepsDetails(true, $el);
                break;
            case CONSTANTS.LINK_TYPE.SEND_INVITE_REPS:
                protocall.view.sendInviteReps($el, true);
                break;
            case CONSTANTS.LINK_TYPE.PROFILE_PAGE:
                protocall.view.viewProfileViewPage(true, $el);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW:
                protocall.view.viewCustomerViewFeed(true);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW:
                protocall.view.viewCarrierViewFeed(true, Carrieremail);
                break;
            case CONSTANTS.LINK_TYPE.MY_PROFILE:
                protocall.view.loadProfile($el);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_FEED:
                PAGEREFRESH.ISPAGEREFRESHED = false;
                protocall.view.viewFeed(true, e);
                break;
            case CONSTANTS.LINK_TYPE.SHARE_TO_REP:

                // protocall.view.shareToRep();
                break;
            case CONSTANTS.LINK_TYPE.ASSIGN_TO_CUSTOMERS:
                if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                    if (localStorage.LoginType == 'Admin') {
                        protocall.view.assignToCustomers();
                    }
                }

                break;
            case CONSTANTS.LINK_TYPE.PROPERTY_POLICY:
                protocall.view.properityPolicy(e);
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_ADD_VENDOR_LOAD:
                protocall.view.addVendorDetails();
                break;
            case CONSTANTS.LINK_TYPE.HEALTH_POLICY:
                protocall.view.healthPolicy();
                break;
            case CONSTANTS.LINK_TYPE.VEHICLE_POLICY:
                protocall.view.vehiclePolicy();
                break;
            case CONSTANTS.LINK_TYPE.SENDAPPLINK:
                protocall.view.sendAppLink();
                break;
            case CONSTANTS.LINK_TYPE.PREFERRED_VENDOE_VIEW_LOAD:
                protocall.view.LoadPreferrredvendorInfo();
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_VIEW_LOAD:
                protocall.view.LoadAgencyInfo();
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_EDIT_LOAD:
                protocall.view.LoadAgencyEdit();
                break;
            case CONSTANTS.LINK_TYPE.LOGIN_YES:
                protocall.view.LoginAuthenticateYes();
                break;
            case CONSTANTS.LINK_TYPE.LOGOUT_YES:
                protocall.view.LogoutAuthenticateYes();
                break;
            case CONSTANTS.LINK_TYPE.SETTINGS_SAVE:
                //alert(";d");
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_REMOVE_LOAD:

                if ($("#id-preffervendoreditremovebar").text() == "Edit") {
                    $("#id-preffervendoreditremovebar").text("Remove");
                    $(".vendor-label").css("display", "block");
                } else {
                    $(".vendor-label").css("display", "none");
                    $("#id-preffervendoreditremovebar").text("Edit");
                    var index = 0;
                    var subIndex = 0;
                    // alert("cp" + subIndex);
                    var DELETELIST = [];
                    $('.checkbox').each(function () {
                        var str = this.checked ? "1" : "0";
                        if (str == "1") {
                            //  alert("ss" + index);
                            var vendorCheck = document.getElementById('removevendor_' + index);
                            if (vendorCheck.checked) {

                                $("#item_" + index).remove();
                                DELETELIST[subIndex] = $(this).val();
                                subIndex++;
                            } else {
                                if (localStorage.getItem("LOGIN_LABEL") != "Carriers") {
                                    protocall.view.LoadAgencyRemove();
                                }

                            }
                        }
                        index++;
                    });
                    //   alert("dd" + subIndex);
                    if (subIndex == 0) {
                        ///  alert("dd");
                        subIndex = 0;
                        utils.server.displayError("Please select atleat a name to delete..!");
                    }


                    page = "deletevendorpage";
                    var dataq = {alertList: DELETELIST};
                    callback = utils.server.getCodeResponseAssignCustomers;
                    deepPath = "deletepreferredvendorservice";
                    utils.server.makeServerCall(page, dataq, callback, deepPath);
                }
                // alert("cp");

                //               
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_ADD_VENDOR_LOAD:
                protocall.view.LoadAddVendor();
                break;
//            case CONSTANTS.LINK_TYPE.VENDOR_PROFILE_INFO:
//
//
//                break;
            case CONSTANTS.LINK_TYPE.CLOSE_OVERLAY:
                protocall.closeOverlay();
                break;
            case CONSTANTS.LINK_TYPE.TEMPCLOSE_OVERLAY:
                protocall.closeOverlay();
                break;
            case CONSTANTS.LINK_TYPE.CLOSE_POPUP:
                protocall.closePopUp();
                break;
            case CONSTANTS.LINK_TYPE.EDIT_AGENCY_PIC:
                protocall.view.editAgencyPic();
                break;
            case CONSTANTS.LINK_TYPE.MATCH_RELEASE_CLAIMS:
                protocall.view.matchReleaseClaimAlert(e);
                break;
            case CONSTANTS.LINK_TYPE.MATCH_CLAIMS:
                protocall.view.matchClaimAlert(e);
                break;
                /*Naveen Chnages 19-2-2015 start */
            case CONSTANTS.LINK_TYPE.PHOTS_OVERLAY_DISPLAY:
                protocall.view.staticPhotOverlayDisplay(e);
                break;
            case CONSTANTS.LINK_TYPE.AUDIO_OVERLAY:
                protocall.view.staticAudioOverlayDisplay(e);
                break;
            case CONSTANTS.LINK_TYPE.DOCUMENTSOVERLAY:
                protocall.view.staticDocumentOverlayDisplay(e);
                break;
            case CONSTANTS.LINK_TYPE.SELECTED_SEARCH_ITEM:
                localStorage.setItem("SUBMENU", "CUSTOMER_PAGE");
                PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW = true;
                protocall.view.showSearchResult(e);
                break;
            case CONSTANTS.LINK_TYPE.SORTBYRECENT:
                protocall.view.loadSortByRecent($el, true);
                break;
            case CONSTANTS.LINK_TYPE.SUPERADMIN_AGENCIES_RECENTSORT:
                $("div.submenu-sort div:nth-child(1)").text("Recent");
                popUpContent.closePopUpContent();
                protocall.view.loadAgenciesPage(true);
                break;
            case CONSTANTS.LINK_TYPE.SUPERADMIN_AGENCIES_ALPHASORT:
                protocall.view.loadAgenciesSortByAlphabetical($el, true);
                break;
            case CONSTANTS.LINK_TYPE.SORTBYALPHABETICAL:
                protocall.view.loadSortByAlphabetical($el, true);
                break;
            case CONSTANTS.LINK_TYPE.CARRIERSORTBYRECENT:
                protocall.view.loadSortByRecentCarrier($el, true);
                break;
            case CONSTANTS.LINK_TYPE.CARRIERSORTBYALPHABETICAL:
                protocall.view.loadSortByAlphabeticalCarrier($el, true);
                break;
            case CONSTANTS.LINK_TYPE.CUSTOMERSORTBYRECENT:
                protocall.view.loadSortByRecentCustomers($el, true);
                break;
            case CONSTANTS.LINK_TYPE.CUSTOMERSORTBYALPHABETICAL:
                protocall.view.loadSortByAlphabeticalCustomer($el, true);
                break;
            case CONSTANTS.LINK_TYPE.REPSSORTBYRECENT:
                protocall.view.loadSortByRecentReps($el, true);
                break;
            case CONSTANTS.LINK_TYPE.REPSSORTBYALPHABETICAL:
                protocall.view.loadSortByAlphabeticalReps($el, true);
                break;
            case CONSTANTS.LINK_TYPE.VIEWARCHIVECHECKBOX:
                protocall.view.archiveFeeds($el, true);
                break;
            case CONSTANTS.LINK_TYPE.PRINTPAGE:
                protocall.view.printOverlayPage($el, true);
                break;
                /*Naveen Chnages 19-2-2015 start */
            case CONSTANTS.LINK_TYPE.SIGNUP:
                protocall.view.loadSignupPage(true);
                break;
			case CONSTANTS.LINK_TYPE.COMPLETESIGNUP:
                protocall.view.finishSignUp(true);
                break;
            case CONSTANTS.LINK_TYPE.LOGIN_PAGE:
                protocall.view.loadLoginPage();
                break;
			case CONSTANTS.LINK_TYPE.LOGIN:
                protocall.view.loadLoginPage(true);
                break;
            case CONSTANTS.LINK_TYPE.RESETPASSWORD:
                protocall.view.loadResetPassAlertBox();
                break;
            case CONSTANTS.LINK_TYPE.OVERLAY_RESETPASSALERTBOX:
                protocall.view.loadResetPassMailAlertBox();
                break;
            case CONSTANTS.LINK_TYPE.EDITPASSWORDYES:
                protocall.closeOverlay();
                protocall.view.loadResetPasswordPage();
                break;
            case CONSTANTS.LINK_TYPE.EDITPASSWORDNO:
                protocall.closeOverlay();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_ASSIGNCUSTOMERS:
                utils.server.submitAssignCustomersData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_SHAREWITHREP:
                utils.server.submitShareWithRepsData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_ASSIGNTOREPS:
                utils.server.submitAssignToRepsData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_ASSIGNTOCUSTOMERS:
                utils.server.submitAssignToCustomers();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_SENDAPPLINK:
                utils.server.submitSendAppLinkData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_PRIVACYSEND:
                utils.server.submitPrivacyData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_ADDVENDORSEND:
                utils.server.submitAddVendorDetails();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_PUSHMESSAGESEND:
                utils.server.submitPushMessage();
                break;
            case CONSTANTS.LINK_TYPE.EDITCARRIEROWNER_AGENCYDETAILS:
                protocall.view.loadResetPasswordPage();
                break;
            case CONSTANTS.LINK_TYPE.ADDMORE:
                if (localStorage.getItem("SendInviteBoxCount") == undefined) {
                    localStorage.setItem("SendInviteBoxCount", "1");
                }
                var countIndex = localStorage.getItem("SendInviteBoxCount");
                // alert(countIndex);
                var addContent = "<div id=\"delete_item" + countIndex + "\" class=\"checkbox-box\"> <div class=\"checkbox-box-t1\"> <input type=\"text\" class=\"sendinvite_firstname\" value=\"\" id=\"txt_sendinvite_firstname" + countIndex + "\" placeholder=\"FirstName\"></div><div class=\"checkbox-box-t1\"> <input type=\"text\" class=\"sendinvite_LastName\" value=\"\" id=\"txt_sendinvite_LastName" + countIndex + "\" placeholder=\"LastName\"></div><div class=\"checkbox-box-t1\"> <input type=\"text\" class=\"sendinvite_EmailId\" value=\"\" id=\"txt_sendinvite_EmailId" + countIndex + "\" placeholder=\"EmailId\"><div id=" + countIndex + " class=\"sprite-im rep-icon rep-icon-pos deleteitem\" style=\"float: right;  position: relative;  /* top: 52%; */  right: -9%;  margin-top: -26px;\">&nbsp;</div></div></div></div>";
                countIndex++;
                localStorage.setItem("SendInviteBoxCount", countIndex);
                $(".checkbox-form").append(addContent);
                break;
            case CONSTANTS.LINK_TYPE.AGENCYPICEDIT:
                protocall.view.overlayProfileEditPic(true);
                break;
            case CONSTANTS.LINK_TYPE.HOME_PAGE:
                protocall.view.loadHomePage(true);
                break;
            default:
                break;
        }

    },
    /*Naveen Chnages 19-2-2015 start */
    handleClickForPhotosOverlay: function (e) {
        console.log("current target", $(e.currentTarget).attr("data-type"));
        var dataType = $(e.currentTarget).attr("data-type");
        var currentTarget = $(e.currentTarget);
        switch (dataType) {
            case CONSTANTS.LINK_TYPE.THUMB_NAIL:
                protocall.view.displayOrignalImage(currentTarget);
                break;
            case CONSTANTS.LINK_TYPE.PREVIOUS:
                protocall.view.displayPreviousImage(currentTarget);
                break;
            case CONSTANTS.LINK_TYPE.NEXT:
                protocall.view.displayNextImage(currentTarget);
                break;
            default:
                break;
        }
    },
    /*Naveen Chnages 19-2-2015 end */
    handleClickForDocsOverlay: function (e) {
        console.log("current target", $(e.currentTarget).attr("data-type"));
        var currentTarget = $(e.currentTarget);
        var dataType = $(e.currentTarget).attr("data-type");
        switch (dataType) {
            case CONSTANTS.LINK_TYPE.THUMB_NAIL:
                protocall.view.displayOrignalDoc(currentTarget);
                break;
            default:
                break;
        }
    },
    handleClickForAudioOverlay: function (e) {
        var $el = $(e.currentTarget);
        console.log("valuers" + $el.data("type"));
        var type = $el.data("type") ? $el.data("type") : null;
        console.log("data type is" + type);
        switch (type) {
            case CONSTANTS.LINK_TYPE.AUDIO_PLAY:
                protocall.view.playAudioFile($el);
                break;
                /* case CONSTANTS.LINK_TYPE.PREVIOUS:
                 protocall.view.displayPreviousImage($el);
                 break;
                 case CONSTANTS.LINK_TYPE.NEXT:
                 protocall.view.displayNextImage($el);
                 break; */
            default:
                break;
        }
    },
    handleClickForAudioThumbNail: function (e) {
        var dataType = $(e.currentTarget).attr("data-type");
        var currentTarget = $(e.currentTarget);
        switch (dataType) {
            case CONSTANTS.LINK_TYPE.THUMB_NAIL:
                protocall.view.displayOrignalAudio(currentTarget);
                break;
            case CONSTANTS.LINK_TYPE.PREVIOUS_AUDIO:
                protocall.view.displayPreviousAudio(currentTarget);
                break;
            case CONSTANTS.LINK_TYPE.NEXT_AUDIO:
                protocall.view.displayNextAudio(currentTarget);
                break;
            default:
                break;
        }
    },
    handleResize: function () {


    }
};
//protocall view functions
protocall.view = {
	finishSignUp : function(isClickEvent){
		var firstName = $("#firstNameSignup").val();
		var lastName = $("#lastNameSignup").val();
		var userEmailId = $("#emailIdSignup").val();
		var passwordValue = $("#passwordSignUp").val();
		var retypePassword = $("#reTypePasswordSignUp").val();
		var userName = firstName+""+lastName;
		var deepPath = "";
		var linkExpirationID = protocall.grabHashPageForInviteRep();
		if(passwordValue!="" && !passwordValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{10,128}$/)){
			var error = "Your password is Invalid, please verify once";
			protocall.displaySpinner(false);
			$('.signup-error').html(error);
		}
		else if(passwordValue!="" && retypePassword!=""){
			if(passwordValue == retypePassword){
				$('.signup-error').html("");
				if(sessionStorage.roleToBePassed == "carrierRep"){
					deepPath = "carrierrepresentativeregistration";
				} else {
					deepPath = "agencyrepresentativeregistration";
				}
				var page = "signup";
				var data = {linkExpiration:linkExpirationID,agencyRepresentativeId:{email:userEmailId},name:userName,password:passwordValue};
				callback = protocall.view.signUpRegistration;
				var resp = utils.server.makeServerCall(page, data, callback, deepPath);
			} else {
				var error = "Your password is mismatched, please verify once";
				protocall.displaySpinner(false);
				$('.signup-error').html(error);
			}
		}else{
			var error = "Please Provide all the details";
			protocall.displaySpinner(false);
			$('.signup-error').html(error);
		}
	},
	signUpRegistration : function(data,page){
		console.log("data >>>>>>>>>>>>> signUpRegistration",data);
		protocall.displaySpinner(true);
		if(data.resultMap.TypeCode == "4112"){
			var error = "Provide the different phone number, which already present";
            protocall.displaySpinner(false);
            $('.login-error').html(error);
		} else if(data.resultMap.TypeCode == "4113") {
			var error = "Your Invitation link has been expired. Please contact your admin";
            protocall.displaySpinner(false);
            $('.login-error').html(error);
		} else {
			HOMEPAGERESPONSE.SIGNUPREGISTRATIONDONE = true;
			//protocall.displaySpinner(false);
			protocall.view.loadLoginPage();
		}
	},
    loadResetPassword: function () {
        var email = sessionStorage.userEmailId;
        var emailList1 = [email];
        //  alert(emailList1);
        var deepPath = "sendinvitation";
        var link = "http://gridframe.net/demo/protocall/#signup";
        var resetPassword = true;
        var callback = protocall.view.gotLoginReponse;
        var content = sessionStorage.userName + 'is inviting you to join in protocall.Please use the below link to signup in protocall and the link will expire in 24 hours.';
        var data = {"emailList": emailList1, "link": link, "resetPassword": resetPassword, "text": content};
        utils.server.makeServerCall("resetpage", data, callback, deepPath);
    },
    gotLoginReponse: function (data) {

        console.log("rese", data);
        if (data.resultMap.TypeCode == "4021") {
            //  alert("Saved");
        } else {
            //  alert("Sllaved");
        }
    },
    superAdminPage: function (data, page) {
        console.log("superAdminPage>>>>>>>>>>>>>>>data", data);
        var feedHTML = "";
        if (data.resultMap.AlertMessage !== "undefined" && data.resultMap.TypeCode == "4011") {

            console.log("superadmin", data);
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW == true) {
                HOMEPAGERESPONSE.HOMEPAGEDATA = [];
                HOMEPAGERESPONSE.HOMEPAGEDATA = data.resultMap.homeTab;
            } else {
                HOMEPAGERESPONSE.SUPERADMINCARRIERDETAILS = [];
                HOMEPAGERESPONSE.SUPERADMINCUSTOMERS = [];
                HOMEPAGERESPONSE.SUPERADMINAGENCIES = [];
                HOMEPAGERESPONSE.HOMEPAGEDATA = [];
                HOMEPAGERESPONSE.CUSTOMERDATA = [];
                HOMEPAGERESPONSE.SUPERADMINCARRIERDETAILS = data.resultMap.carrierTab;
                HOMEPAGERESPONSE.SUPERADMINCUSTOMERS = data.resultMap.customerTab;
                HOMEPAGERESPONSE.SUPERADMINAGENCIES = data.resultMap.agencyTab;
                HOMEPAGERESPONSE.HOMEPAGEDATA = data.resultMap.homeTab;
                localStorage.setItem("customers_data", JSON.stringify(data.resultMap.customerTab));
                HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.customerTab;

            }

            HOMEPAGERESPONSE.RECURRINGALERTDFEEDS = [];
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"};
                var path = utils.server.getServerPath("agencydashboarddesign");
                var request = path(data).execute(function (resp) {
                    if (resp.error) {
                        t.server.handleError(resp);
                    } else {
                        localStorage.setItem("customers_data", JSON.stringify(resp.resultMap.userTab));
                        localStorage.setItem("users", JSON.stringify(resp.resultMap.carrierTab));
                    }
                });
            }
            // alert("home");
            localStorage.setItem("SUBMENU", "HOME_PAGE");

            var feedHTML = "";

            for (var c = 0; c < HOMEPAGERESPONSE.HOMEPAGEDATA.length; c++) {
                var cus = HOMEPAGERESPONSE.HOMEPAGEDATA[c];

                var name, serviceType, preferredVendorId = "";


                if (cus.name == undefined) {
                    name = "";
                } else {
                    name = cus.name;
                }


                if (cus.serviceType == undefined) {
                    serviceType = "";
                } else {
                    serviceType = cus.serviceType;
                }


                if (cus.preferredVendorId == undefined) {
                    preferredVendorId = "";
                } else {
                    preferredVendorId = cus.preferredVendorId;
                }

                feedHTML += " <div class=\"parent-content-holder1\" style=\"  height: auto;  width: 23%;  background: white;  float: left;  margin: 5px;\"> <div class=\"topview p-relative\">  "
                        + "<div class=\"topview-rightcontent1\" style=\"width: 100%; margin-left:5px; height: 70px;  float: left;  margin-top: 18px;padding-left:20px;line-height:20px;overflow: hidden;\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.agencyId + "</div>"
                        + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"float:left;margin-right:5px;margin-bottom: 5px;\">" + name + "</div>"
                        + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"clear:both;margin-bottom: 5px;\">" + serviceType + "</div> <div class=\"topview-rightcontentcarrier-email\">#" + preferredVendorId + "</div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + "cusEmail" + " id=" + "cusEmail" + " > <label for=" + "cusEmail" + " class=\"customer-feed-label\" style=\"display:none;\"></label> </div> <div class=\"downview p-relative\">"
                        + "<div id=" + preferredVendorId + "  value=" + preferredVendorId + " class=\"carrier-view superadminHome p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap\" data-type=\"superAdminHomeFeedView\">view</div> </div> </div>";

            }


            header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            content = '<div class="container"><div class="content-holder">' + feedHTML + '</div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            totalHtml = header + content + footer;

            $("#page").empty();
            $("#page").append(totalHtml);
            protocall.events.GlobalContainerScrollevent();
            protocall.displaySpinner(false);
            protocall.events.mouseOverCheckbox();
            protocall.displaySpinner(false);
            protocall.events.containerScrollEvent();
            protocall.events.GlobalContainerScrollevent();
            protocall.view.subMenuSelectedTab();
            $(".content-holder").find(".spinner1").removeClass("spinner1");
            $(".content-holder").find(".bottomSpinner").removeClass("bottomSpinner");
            $(".content-holder").find("#scrollingDiv").empty();
            $(".content-holder").css("opacity", "1");
            $('#id-agencyprofilelogo').attr('src', sessionStorage.agencyLogo);
        } else {
            feedHTML = data.resultMap.AlertMessage;
        }
    },
    viewCarrierRepsDetails: function (isClickEvent, $el) {

        localStorage.setItem("SUBMENU", "VIEW_CARIER_REP_PROFILE_PAGE");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARIER_REP_PROFILE_PAGE);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE, CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARIER_REP_PROFILE_PAGE, CONSTANTS.LINK_TYPE.VIEW_CARIER_REP_PROFILE_PAGE, "");
        }
        protocall.myProfile.loadMyCarrierRepProfile($el);
        protocall.displaySpinner(false);
    },
    loadSignupPage: function (isClickEvent) {
        console.log("Load signup Page");
		protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.SIGNUP);
        //protocall.setPageNavigation(CONSTANTS.LINK_TYPE.SIGNUP);
        protocall.home.initSignUpPage();
        //protocall.setMenuSelection(CONSTANTS.LINK_TYPE.SIGNUP);
		protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.SIGNUP, CONSTANTS.LINK_TYPE.SIGNUP, CONSTANTS.LINK_TYPE.SIGNUP, "");
        }
        protocall.displaySpinner(false);
    },
    loadResetPasswordPage: function (isClickEvent) {
        console.log("Load Reset Password Page");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.RESETPASSWORD);
        protocall.home.initResetPasswordPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.RESETPASSWORD);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.RESETPASSWORD, CONSTANTS.LINK_TYPE.RESETPASSWORD, CONSTANTS.LINK_TYPE.RESETPASSWORD, "");
        }
        protocall.displaySpinner(false);
    },
    handleDownarrow: function () {
        var searchItemsLength = $("#searchResultUL li").length, keyboardEvent = "downArrow";
        var selectedListItem = $("#searchResultUL").find("li.searchItemClass");
        var selectedElementIndex = $("#searchResultUL li").index(selectedListItem);
        if (HOMEPAGERESPONSE.DOWNARROWPRESSEDCOUNT > 1) {
            protocall.view.showNextDownArrowResult(selectedListItem, selectedElementIndex, searchItemsLength, keyboardEvent);
        } else {
            $("#searchResultUL li").removeClass("searchItemClass");
            $("#searchResultUL li:first-child").addClass("searchItemClass");
        }
    },
    handleUpArrowFun: function () {
        var searchItemsLength = $("#searchResultUL li").length, keyboardEvent = "upArrow";
        console.log("searchItemsLength>>>>>>>>>>>>>", searchItemsLength);
        var selectedListItem = $("#searchResultUL").find("li.searchItemClass");
        var selectedElementIndex = $("#searchResultUL li").index(selectedListItem);
        if (HOMEPAGERESPONSE.UPARROWPRESSEDCOUNT > 1) {
            protocall.view.showNextUpArrowResult(selectedListItem, selectedElementIndex, searchItemsLength, keyboardEvent);
        } else {
            $("#searchResultUL li").removeClass("searchItemClass");
            $("#searchResultUL li:last-child").addClass("searchItemClass");
            var container = $('#searchBarDiv'), scrollTo = $("#searchResultUL li:last-child");
            container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
        }
        //protocall.view.foucsingSelectedSearchItem(selectedListItem,selectedElementIndex,searchItemsLength);
    },
    handleEnterFunction: function () {
        var currentTarget = $("#searchResultUL").find("li.searchItemClass");
        console.log("currentTarget >>>>>>>>>>>>>> handleEnterFunction", currentTarget);
        var userEmail = currentTarget.find("p.searchItemEmail").text();
        var userRole = currentTarget.find("p.searchItemRole").text();
        var userName = currentTarget.find("p.searchItemUserName").text();
        protocall.view.showUserDetailsOnEnter(userEmail, userRole, userName);
    },
    showUserDetailsOnEnter: function (userEmail, userRole, userName) {
        $(".search-ip").val(userName, +'&nbsp' + userRole);
        $("#searchBarDiv").hide();
        var data = {"emailId": userEmail, "role": userRole},
        deepPath = "detailsofretrieveduserfromglobalsearch",
                page = "home",
                callback = protocall.view.showUserDetails;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    showNextDownArrowResult: function (listItemValue, listItemIndex, searchListItemsLength, keyboardEvent) {
        $("#searchResultUL li").removeClass("searchItemClass");
        var nextListItemIndexValue = listItemIndex + 1;
        ++nextListItemIndexValue;
        var nextDownArrowListItem = $("#searchResultUL li:nth-child(" + nextListItemIndexValue + ")").addClass("searchItemClass");
        protocall.view.foucsingSelectedSearchItem($("#searchResultUL li:nth-child(" + nextListItemIndexValue + ")"), nextListItemIndexValue, searchListItemsLength, keyboardEvent);
    },
    showNextUpArrowResult: function (listItemValue, listItemIndex, searchListItemsLength, keyboardEvent) {
        $("#searchResultUL li").removeClass("searchItemClass");
        var nextListItemIndexValue = listItemIndex - 1;
        ++nextListItemIndexValue;
        var nextDownArrowListItem = $("#searchResultUL li:nth-child(" + nextListItemIndexValue + ")").addClass("searchItemClass");
        protocall.view.foucsingSelectedSearchItem($("#searchResultUL li:nth-child(" + nextListItemIndexValue + ")"), nextListItemIndexValue, searchListItemsLength, keyboardEvent);
    },
    foucsingSelectedSearchItem: function (listItem, indexValue, searchListItemsLength, keyboardEvent) {
        if (keyboardEvent == "upArrow") {
            if (indexValue <= 0) {
                $("#searchResultUL li").removeClass("searchItemClass");
                $("#searchResultUL li:last-child").addClass("searchItemClass");
                var container = $('#searchBarDiv'), scrollTo = $("#searchResultUL li:last-child");
                container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
            } else {
                var container = $('#searchBarDiv'), scrollTo = $(listItem);
                container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
            }
        } else {
            if (indexValue >= searchListItemsLength + 1) {
                $("#searchResultUL li").removeClass("searchItemClass");
                $("#searchResultUL li:first-child").addClass("searchItemClass");
                var container = $('#searchBarDiv');
                container.scrollTop(0);
            } else {
                var container = $('#searchBarDiv'), scrollTo = $(listItem);
                container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
            }
        }

    },
    overlayProfileEditPic: function (isClickEvent) {

        var name = $(".txt-agency-name").val();
        var emailId = $(".txt-agency-emailid").val();
		//Make call here
		if(localStorage.getItem("LOGIN_LABEL") == "Agency"){
			var page = "myagencyoverlay";
			var data = {agencyName: name, emailId: emailId, agencyId: sessionStorage.ownerId};
			var deepPath = "editagency";
		} else {
			 var page = "mycarrieroverlay";
			var data = {carrierName: name, emailId: emailId, carrierId: sessionStorage.ownerId};
			var deepPath = "editcarrier";
		}
       /*  var page = "myagencyoverlay";
        var data = {agencyName: name, emailId: emailId, agencyId: sessionStorage.ownerId}; */
        var callback = utils.server.gotagencyLogoEditresponse;
        utils.server.makeServerCall(page, data, callback, deepPath);
		protocall.view.agencyImageUpload(sessionStorage.ownerId);
        overlay.closeOverlay();
    },
	agencyImageUpload : function(agencyID){
		var formdata = new FormData();
		var imageContentType;
		console.log("$('#inputfile1')[0]",$('#inputfile1')[0].files);
		if ($('#inputfile1')[0].files.length > 0) {
			var file = $('#inputfile1')[0].files[0];
			formdata.append("Logo", file);
			imageContentType = file.type;
		}
		var callback = utils.server.profilePicResponse;
		var isFormData = true;
		var qs = agencyID;
		var pagespinner = true;
		var typeOfImageValue;
		if(localStorage.getItem("LOGIN_LABEL") == "Agency"){
			typeOfImageValue = "agencyLogo";
		} else {
			typeOfImageValue = "carrierLogo";
		}
		HOMEPAGERESPONSE.PROFILEPICUPDATECLICKED = false;
		utils.server.imagesToServer(formdata, callback, isFormData, qs, pagespinner,typeOfImageValue,imageContentType);
	},
    MyprofEdit: function (isClickEvent) {


        var mytxtval = $.trim($('.submenu-title').text());
        if (mytxtval == 'edit' | mytxtval == 'Edit') {

            var name = $("#nameview").text();
            var phone = $("#phoneview").text();
            var email = $("#emailview").text();
            $('.submenu-title').empty();
            $('.submenu-title').append("Save");
            $("#id-changeimg").css("display", "block");
            $(".profile-result-cls").css("display", "none");
            $(".agencyprofinput").css("display", "block");
            $('#namenew').val(name);
            $('#phonenew').val(phone);
            $('#emailnew').val(email);
        } else {

            var name = $("#namenew").val();
            var phone = $("#phonenew").val();
            var email = $("#emailnew").val();
            $('.submenu-title').val("Edit");
            $('.submenu-title').empty();
            $('.submenu-title').append("Edit");
            $(".profile-result-cls").css("display", "block");
            $(".agencyprofinput").css("display", "none");
            $("#id-changeimg").css("display", "none");
            $('#nameview').html(name);
            $('#phoneview').html(phone);
            $('#emailview').html(email);
            //Make call here

            var page = "myprofile";
            var data = {firstName: name.trim(), emailId: email.trim(), phone: phone.trim()};
            var callback = utils.server.gotprofileEditresponse;
            var deepPath = "edituser";
            utils.server.makeServerCall(page, data, callback, deepPath);
            //Make image server call
			var imageContentType;
            var formdata = new FormData();
            if ($('#agency-prof-img')[0].files.length > 0) {
                var file = $('#agency-prof-img')[0].files[0];
                formdata.append("profilePicture", file);
				imageContentType = file.type;
		    }
            var callback = utils.server.profilePicResponse;
            var isFormData = true;
            var qs = sessionStorage.userEmailId;
			var pagespinner = true;
			var typeOfImage = "profilePicture";
			HOMEPAGERESPONSE.PROFILEPICUPDATECLICKED = true;
            utils.server.imagesToServer(formdata,callback,isFormData,qs,pagespinner,typeOfImage,imageContentType);
        }


    },
    MyprofEditCarrierOwner: function (isClickEvent) {

        var mytxtval = $.trim($('#idcarrierownerrepedit').text());
        if (mytxtval == 'edit()' | mytxtval == 'Edit()' | mytxtval == 'Edit' | mytxtval == 'edit') {

            var name = $("#nameview").text();
            var phone = $("#phoneview").text();
            var email = $("#emailview").text();
            // $('#idcarrierownerrepedit').empty();
            $('#id_carrierrep_editsave').text("Save");
            $(".profile-result-cls").css("display", "none");
            $(".agencyprofinput").css("display", "inline-block");
            $('#namenew').val(name);
            $('#phonenew').val(phone);
            $('#emailnew').val(email);
        } else {
            var name = $("#namenew").val();
            var phone = $("#phonenew").val();
            var email = $("#emailnew").val();
            $('#id_carrierrep_editsave').text("Edit");
            $(".profile-result-cls").css("display", "inline-block");
            $(".agencyprofinput").css("display", "none");
            $('#nameview').html(name);
            $('#phoneview').html(phone);
            $('#emailview').html(email);
            //Make call here
            var page = "myprofile";
            var data = {firstName: name.trim(), emailId: email.trim(), phone: phone.trim()};
            var callback = utils.server.gotprofileEditresponse;
            var deepPath = "edituser";
            utils.server.makeServerCall(page, data, callback, deepPath);
            //Make image server call
			var imageContentType;
            var formdata = new FormData();
            if ($('#agency-prof-img')[0].files.length > 0) {
                var file = $('#agency-prof-img')[0].files[0];
                formdata.append(file);
				imageContentType = file.type;
            }
            var callback = utils.server.profilePicResponse;
            var isFormData = true;
			var qs = sessionStorage.userEmailId;
            var pagespinner = true;
            console.log("frmdata", formdata);
			var typeOfImage = "profilePicture";
            utils.server.imagesToServer(formdata,callback,isFormData,qs,pagespinner,typeOfImage,imageContentType);
        }


    },
    loadLoginPage: function (isClickEvent) {
        console.log("Load login Page");
		protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.LOGIN_PAGE);
        protocall.home.initLoginPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.LOGIN_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.LOGIN, CONSTANTS.LINK_TYPE.LOGIN, CONSTANTS.LINK_TYPE.LOGIN, "");
        } else {
			protocall.setPage(CONSTANTS.LINK_TYPE.LOGIN_PAGE, CONSTANTS.LINK_TYPE.LOGIN_PAGE, CONSTANTS.LINK_TYPE.LOGIN_PAGE, "");
		}
        protocall.displaySpinner(false);
    },
    loadHomePage: function (isClickEvent) {
        //protocall.displaySpinner(false);
        /* $(".content-holder").css("opacity", "0.5");
         $(".content-holder").addClass("spinner1"); */
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = true;
        HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
        HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED = false;
        HOMEPAGERESPONSE.FEEDSICONCLICKED = false;
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
		HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
		protocall.view.subMenuSelectedTab();
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.home.initHomePage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, "");
        }
        //var $myAlerts = $(".myalerts")
        // protocall.view.setSelectedLinkClasses($myAlerts, true);
    },
    //AGENCY_PAGE
    loadAgencyPage: function (isClickEvent) {

        localStorage.setItem("SUBMENU", "AGENCY_PAGE");
        console.log("Load Carrier Page");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.AGENCY_PAGE);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCY_PAGE);
        protocall.events.GlobalContainerScrollevent();
        //Call the below in carrier.js
        protocall.carrier.initAgencyPage();
        // protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.AGENCY_PAGE, CONSTANTS.LINK_TYPE.AGENCY_PAGE, CONSTANTS.LINK_TYPE.AGENCY_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadAgenciesPage: function (isClickEvent) {
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        localStorage.setItem("SUBMENU", "AGENCIES_PAGE");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
        //Call the below in carrier.js
        protocall.carrier.initAgenciesPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.AGENCIES_PAGE, CONSTANTS.LINK_TYPE.AGENCIES_PAGE, CONSTANTS.LINK_TYPE.AGENCIES_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadCarrierOwnerAgenciesPage: function (isClickEvent) {
        localStorage.setItem("SUBMENU", "AGENCIES_PAGE");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
        //Call the below in carrier.js
        protocall.carrier.initCarrierOwnerAgenciesPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY, "");
        }
        protocall.displaySpinner(false);
    },
    loadCarrierPage: function (isClickEvent) {
        console.log("Load Carrier Page");
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        //Call the below in carrier.js
        protocall.carrier.initCarrierPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadCustomerPage: function (isClickEvent) {
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        //  console.log("Load Customer Page");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        //Call the below in customer.js
        protocall.customer.initCustomerPage();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadMyRepsPage: function (isClickEvent) {
        console.log("Load My Reps Page");
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
        //Call the below in myreps.js
        protocall.myRep.initMyRepsPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.MY_REP_PAGE, CONSTANTS.LINK_TYPE.MY_REP_PAGE, CONSTANTS.LINK_TYPE.MY_REP_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadCarrierRepsPage: function (isClickEvent) {

        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
        //Call the below in myreps.js
        protocall.myRep.initCarrierRepsPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE, CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE, CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    viewFeed: function (isClickEvent, e) {
		$(".container").off("scroll");
        var currentTarget = "", userEmail = "", incidentDate = "", alertType = "", alertIDForView = "", policyAlertMessage = "",statusOfThePolicy = "";
		if(HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED){
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES);
		}else if(HOMEPAGERESPONSE.INCIDENTALERTSCLICKED){
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS);
		} else if(HOMEPAGERESPONSE.POLICYALERTCLICKED){
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES);
		} else {
			protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED);
		}
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            currentTarget = $(e.currentTarget);
            userEmail = currentTarget.find("div span").attr("id");
            alertIDForView = currentTarget.find("div span").attr("name");
			if(HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
			}else if(HOMEPAGERESPONSE.INCIDENTALERTSCLICKED){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
			} else if(HOMEPAGERESPONSE.POLICYALERTCLICKED){
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
			} else {
				protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
			}
            sessionStorage.setItem("userEmailViewFeed", userEmail);
            sessionStorage.setItem("userAlertIdViewFeed", alertIDForView);
            sessionStorage.setItem("alertFeeds", HOMEPAGERESPONSE.RECURRINGALERTDFEEDS);
        }
        if (PAGEREFRESH.ISPAGEREFRESHED) {
            userEmail = sessionStorage.getItem("userEmailViewFeed");
            alertIDForView = sessionStorage.getItem("userAlertIdViewFeed");
            HOMEPAGERESPONSE.RECURRINGALERTDFEEDS = sessionStorage.getItem("alertFeeds");
        }
        //Call the below dynamically
        if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
            feedValues = HOMEPAGERESPONSE.RELATEDFEEDS;
        } else {
            feedValues = HOMEPAGERESPONSE.RECURRINGALERTDFEEDS;
        }
        $.each(feedValues, function (index, viewAlertFeed) {
            /* console.log("alertIDForView >>>>>>>>>>>", alertIDForView);
             console.log("alertId in each >>>>>>>>>>>", viewAlertFeed.alertDetails.alertId);
             console.log("Email Id in each >>>>>>>>>>>", viewAlertFeed.userDetails.emailId.email); */
            if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                if (userEmail == HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.emailId.email && alertIDForView == viewAlertFeed.alertDetails.alertId) {
                    firstName = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.firstName;
                    lastName = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.lastName;
                    bDay = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.birthDate;
                    birthday = moment(bDay).format('DD/MM/YYYY');
                    gender = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.gender;
                    residentialCity = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.residentialCity;
                    phoneNumber = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.phone.number;
					if(HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.profilePicture){
						profilePicture = HOMEPAGERESPONSE.PROFILEAPI + HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.profilePicture;
					} else {
						profilePicture = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
					}
                    alDate = viewAlertFeed.alertDetails.alertDate;
                    alertDateValue = moment(new Date(parseInt(alDate))).format('MMM D, YYYY');
					alertTime = moment(Number(alDate)).format('h:mmA');
                    alertType = viewAlertFeed.alertDetails.type;
					debugger;
                    if (alertType == "incidentalert") {
                        incidentDate = viewAlertFeed.IncidentDetails.incidentId;
                    } else {
                        incidentDate = viewAlertFeed.alertDetails.policyId;
                        policyAlertMessage = viewAlertFeed.PolicyChangeSelected;
                    }
                    noOfOtherPartyRecordsCount = viewAlertFeed.NoofOtherPartyRecord;
                    noOfAudioRecordCount = viewAlertFeed.NoofAudioRecord;
                    noOfPictureRecord = viewAlertFeed.NoofPictureRecord;
					statusOfThePolicy = viewAlertFeed.alertStatusDetails.status;
		        }
            } else {
                if (userEmail == viewAlertFeed.userDetails.emailId.email && alertIDForView == viewAlertFeed.alertDetails.alertId) {
                    firstName = viewAlertFeed.userDetails.firstName;
                    lastName = viewAlertFeed.userDetails.lastName;
                    bDay = viewAlertFeed.userDetails.birthDate;
                    birthday = moment(bDay).format('DD/MM/YYYY');
                    gender = viewAlertFeed.userDetails.gender;
                    residentialCity = viewAlertFeed.userDetails.residentialCity;
                    phoneNumber = viewAlertFeed.userDetails.phone.number;
					profilePicture = viewAlertFeed.userDetails.profilePicture;
					if(profilePicture){
						profilePicture = HOMEPAGERESPONSE.PROFILEAPI + viewAlertFeed.userDetails.profilePicture;
					} else {
						profilePicture = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
					}
					alDate = viewAlertFeed.alertDetails.alertDate;
                    //alertDateValue = moment(new Date(parseInt(alDate))).format('MMM D, YYYY');
                    alertDateValue = moment(Number(alDate)).format('MMM D, YYYY');
                    alertTime = moment(Number(alDate)).format('h:mmA');
                    alertType = viewAlertFeed.alertDetails.type;
                    if (alertType == "incidentalert") {
                        incidentDate = viewAlertFeed.IncidentDetails.incidentId;
                    } else {
                        incidentDate = viewAlertFeed.alertDetails.policyId;
                        policyAlertMessage = viewAlertFeed.PolicyChangeSelected;
                    }
                    noOfOtherPartyRecordsCount = viewAlertFeed.NoofOtherPartyRecord;
                    noOfAudioRecordCount = viewAlertFeed.NoofAudioRecord;
                    noOfPictureRecord = viewAlertFeed.NoofPictureRecord;
					statusOfThePolicy = viewAlertFeed.alertStatusDetails.status;
                }
            }
        });
        if (lastName == undefined) {
            lastName = "";
        }
        if (gender == undefined) {
            gender = "";
        }
        if (policyAlertMessage == "") {
            policyAlertMessage = "";
        }
		if (bDay == undefined) {
            birthday = "";
        }
		userName = firstName + '&nbsp' + lastName;
        var tempObj = {
            "firstName": firstName,
            "lastName": lastName,
            "userName": userName,
            "alertId": alertIDForView,
            "birthday": birthday,
            "alertDate": alertDateValue,
            "alertTime": alertTime,
            "profilePicture": profilePicture,
            "gender": gender,
            "phoneNumber": phoneNumber,
            "alertType": alertType,
            "userEmail": userEmail,
            "residentialCity": residentialCity,
            "noOfOtherPartyRecordsCount": noOfOtherPartyRecordsCount,
            "noOfAudioRecordCount": noOfAudioRecordCount,
            "noOfPictureRecord": noOfPictureRecord,
            "incidentDate": incidentDate,
            "policyMessage": policyAlertMessage,
			"statusOfPolicy" : statusOfThePolicy
        };
		//console.log("tempObj.alertDate",);
        HOMEPAGERESPONSE.COMMONUSERDETAILS = tempObj;
        console.log("HOMEPAGERESPONSE.COMMONUSERDETAILS", HOMEPAGERESPONSE.COMMONUSERDETAILS.lastName);
        console.log("HOMEPAGERESPONSE.COMMONUSERDETAILS tempObj", tempObj.lastName);
        protocall.home.loadFeed(tempObj);
        var breadCrumbObj = {};
        breadCrumbObj.customerName = userName;
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.HOME_PAGE, breadCrumbObj);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
        $(".tab-rb-submenu").css("display", "none");
    },
    viewCustomerViewFeed: function (isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW, CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW, "");
        }
        protocall.customer.loadFeed();
        //Call the below dynamically
        var breadCrumbObj = {};
        breadCrumbObj.customerName = "James Jeo";
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, breadCrumbObj);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        protocall.displaySpinner(false);
    },
    viewSettingsPage: function (isClickEvent, $el) {
        if (PAGEREFRESH.ISPAGEREFRESHEDFORSETTINGS) {
            //HeaderTemplate.Menu.DynamicHeaderTemplate();
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            //protocall.displaySpinner(false);
            //protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        }
        localStorage.setItem("SUBMENU", "SETTINGS_PAGE");
        popUpContent.closePopUpContent();
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.SETTINGS_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.SETTINGS_PAGE, CONSTANTS.LINK_TYPE.SETTINGS_PAGE, CONSTANTS.LINK_TYPE.SETTINGS_PAGE, "");
        }
        protocall.myProfile.loadFeedSetting($el);
        // protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.SETTINGS_PAGE);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
    },
    viewProfileViewPage: function (isClickEvent, $el) {
        localStorage.setItem("SUBMENU", "PROFILE_PAGE");
        //alert("1");
        if (PAGEREFRESH.ISPAGEREFRESHEDFORMYPROFILE) {
            //  alert("2");
            //HeaderTemplate.Menu.DynamicHeaderTemplate();
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            //protocall.displaySpinner(false);
            //protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        }

        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.PROFILE_PAGE);
        //	protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.PROFILE_PAGE, CONSTANTS.LINK_TYPE.PROFILE_PAGE, CONSTANTS.LINK_TYPE.PROFILE_PAGE, "");
        }
        protocall.myProfile.loadMyProfileView($el);
        //  protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.PROFILE_PAGE);
        protocall.displaySpinner(false);
        $(".container").off("scroll");
        protocall.events.GlobalContainerScrollevent();
    },
    viewCarrierViewFeed: function (isClickEvent, Carrieremail) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW, CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW, "");
            sessionStorage.setItem("carrierEmailId", Carrieremail);
        }
        if (PAGEREFRESH.ISPAGEREFRESHEDFORCARRIERFEEDVIEW) {
            Carrieremail = sessionStorage.getItem("carrierEmailId");
        }

        protocall.carrier.loadFeed(Carrieremail);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        protocall.displaySpinner(false);
    },
    viewCustomerFeed: function (isClickEvent, emailId, carrierId) {

        localStorage.setItem("SUBMENU", "CUSTOMERSVIEW_PAGE");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEWCUSTOMERFEED);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEWCUSTOMERFEED, CONSTANTS.LINK_TYPE.VIEWCUSTOMERFEED, "");
            sessionStorage.setItem("customerEmailId", emailId);
            sessionStorage.setItem("customerCarrierId", carrierId);
        }
        if (PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW) {
            emailId = sessionStorage.getItem("customerEmailId");
            carrierId = sessionStorage.getItem("customerCarrierId");
        }
        protocall.customer.loadCustomersViewFeed(emailId, carrierId);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        //Call the below dynamically
        /*var breadCrumbObj = {};
         breadCrumbObj.customerName = "Way to Safe";
         $('.tab-rb-submenu a').each(function () {
         protocall.view.setSelectedLinkClasses($(this), false);
         });
         protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, breadCrumbObj);*/
        //var currentTarget = $(e.currentTarget);
        //var emaiID = currentTarget.attr("id");
        var policiesWithCarrierValues = [], agencyRepresentativeIdValue = "", carrierIdValue = "";
        //var customerData = localStorage.getItem("customers_data");
        //if(HOMEPAGERESPONSE.CUSTOMERDATA !== undefined){
        $.each(HOMEPAGERESPONSE.CUSTOMERDATA, function (index, customerValue) {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (emailId == customerValue.CustomerDetails.emailId.email) {
                    console.log("customerValue>>>>>>>>>>> match found", customerValue);
                    policiesWithCarrierValues = customerValue.CustomerDetails.policyListWithCarrier;
                    agencyRepresentativeIdValue = customerValue.CustomerDetails.agencyRepresentativeId.email;
                    carrierIdValue = customerValue.CustomerDetails.carrierId;
                }
            } else {
                if (emailId == customerValue.emailId.email) {
                    console.log("customerValue>>>>>>>>>>> match found", customerValue);
                    policiesWithCarrierValues = customerValue.policyListWithCarrier;
                    agencyRepresentativeIdValue = customerValue.agencyRepresentativeId.email;
                    carrierIdValue = customerValue.carrierId;
                }
            }
        });
        HOMEPAGERESPONSE.POLICYWITHCARRIER = policiesWithCarrierValues;
        //}
        var page = "pageassigncustomersoverlay";
        var data = {userId: emailId, agencyRepresentativeId: agencyRepresentativeIdValue, carrierId: carrierIdValue, alertList: policiesWithCarrierValues};
        var callback = protocall.view.properityPolicyresponse;
        var deepPath = "userwithpoliciesandotherproduct";
        utils.server.makeServerCall(page, data, callback, deepPath);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
    },
    viewSuperAdminHomeIndividualViewFeed: function (isClickEvent, emailId, carrierId) {
        localStorage.setItem("SUBMENU", "CARRIERS_AGENCY_PAGE");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.SUPERADMINHOMEFEEDVIEW, CONSTANTS.LINK_TYPE.SUPERADMINHOMEFEEDVIEW, "");
        }
        var perefferieid = emailId;
        protocall.customer.loadSuperAdminIndividualViewFeed(perefferieid);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
    },
    viewAgenciesFeed: function (isClickEvent, emailId, carrierId) {

        if (sessionStorage.loginType == 'SuperAdmin') {
            localStorage.setItem("SUBMENU", "CARRIERS_AGENCY_PAGE");
            protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.CARRIERAGENCY);
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
            protocall.events.GlobalContainerScrollevent();
            if (isClickEvent) {
                protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, "");
            }
            protocall.customer.loadAgenciesViewFeed(emailId, carrierId);
            protocall.displaySpinner(false);
            protocall.events.GlobalContainerScrollevent();
        } else {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    localStorage.setItem("SUBMENU", "CARRIERS_AGENCY_PAGE");
                    protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                    protocall.events.GlobalContainerScrollevent();
                    if (isClickEvent) {
                        protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, "");
                    }
                    protocall.customer.loadAgenciesViewFeed(emailId, carrierId);
                    //Call the below dynamically
                    /*var breadCrumbObj = {};
                     breadCrumbObj.customerName = "Way to Safe";
                     $('.tab-rb-submenu a').each(function () {
                     protocall.view.setSelectedLinkClasses($(this), false);
                     });
                     protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, breadCrumbObj);*/
                    protocall.displaySpinner(false);
                    protocall.events.GlobalContainerScrollevent();
                } else {
                    localStorage.setItem("SUBMENU", "AGENCIESVIEW_PAGE");
                    protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.AGENCIES_PAGE + "/" + CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                    protocall.events.GlobalContainerScrollevent();
                    if (isClickEvent) {
                        protocall.setPage(CONSTANTS.LINK_TYPE.AGENCIES_PAGE, CONSTANTS.LINK_TYPE.AGENCIES_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, "");
                    }
                    protocall.customer.loadAgenciesViewFeed(emailId, carrierId);
                    //Call the below dynamically
                    /*var breadCrumbObj = {};
                     breadCrumbObj.customerName = "Way to Safe";
                     $('.tab-rb-submenu a').each(function () {
                     protocall.view.setSelectedLinkClasses($(this), false);
                     });
                     protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, breadCrumbObj);*/
                    protocall.displaySpinner(false);
                    protocall.events.GlobalContainerScrollevent();
                }
            } else {

                localStorage.setItem("SUBMENU", "AGENCIESVIEW_PAGE");
                protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.AGENCIES_PAGE + "/" + CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                protocall.events.GlobalContainerScrollevent();
                if (isClickEvent) {
                    protocall.setPage(CONSTANTS.LINK_TYPE.AGENCIES_PAGE, CONSTANTS.LINK_TYPE.AGENCIES_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, "");
                }
                protocall.customer.loadAgenciesViewFeed(emailId, carrierId);
                //Call the below dynamically
                /*var breadCrumbObj = {};
                 breadCrumbObj.customerName = "Way to Safe";
                 $('.tab-rb-submenu a').each(function () {
                 protocall.view.setSelectedLinkClasses($(this), false);
                 });
                 protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, breadCrumbObj);*/
                protocall.displaySpinner(false);
                protocall.events.GlobalContainerScrollevent();
            }
        }

    },
    /*Naveen Chnages 19-2-2015 start */
    loadMyAlertsFeeds: function ($el, isClickEvent) {
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
		HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.MY_ALERTS);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.MY_ALERTS, CONSTANTS.LINK_TYPE.MY_ALERTS, "");
        }
        protocall.home.displayMyAlertsFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();

    },
    loadIncidentsFeeds: function ($el, isClickEvent) {
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS, CONSTANTS.LINK_TYPE.INCIDENTS, "");
        }
        protocall.home.displayIncidentsFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
    },
    loadPoliciesFeeds: function ($el, isClickEvent) {
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES, CONSTANTS.LINK_TYPE.POLICIES, "");
        }
        protocall.home.displayPoliciesFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
    },
    /* Naveen 23-2-2015 Changes Start */
    subMenuSelectedTab: function () {
        $(".mb-submenu").find("a").removeClass("selected-tab");
        if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
            $(".mb-submenu").find("a.incidents").addClass("selected-tab");
        } else if (HOMEPAGERESPONSE.POLICYALERTCLICKED) {
            $(".mb-submenu").find("a.policies").addClass("selected-tab");
        } else if (HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED) {
            $(".mb-submenu").find("a.archives").addClass("selected-tab");
        } else if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
            $(".mb-submenu").find("a.view_archives").addClass("selected-tab");
        } else {
            $(".mb-submenu").find("a.myalerts").addClass("selected-tab");
        }
    },
    /* Naveen 23-2-2015 Changes End */

    /*Naveen Chnages 19-2-2015 end */

    loadArchiveFeeds: function ($el, isClickEvent) {
        /* protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.ARCHIVES);
         protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
         if (isClickEvent) {
         protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.ARCHIVES, CONSTANTS.LINK_TYPE.ARCHIVES, "");
         } */
        if (HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.length !== 0) {
            //$(".content-holder").empty();
            $(".content-holder").addClass("spinner1");
            var data = {"alertList": HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE},
            deepPath = "archieve",
                    page = "home",
                    callback = protocall.home.loadViewArchivedFeedsResponse,
                    authId = "",
                    spinnerMsg = "";
            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
            /* $('.tab-rb-submenu a').each(function () {
             protocall.view.setSelectedLinkClasses($(this), false);
             }); */
        } else {
            return;
        }
        /* HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = true;
         HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = false;
         HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
         HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
         protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.ARCHIVES);
         protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
         if (isClickEvent) {
         protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.ARCHIVES, CONSTANTS.LINK_TYPE.ARCHIVES, "");
         }
         $('.tab-rb-submenu a').each(function () {
         protocall.view.setSelectedLinkClasses($(this), false);
         });
         protocall.view.setSelectedLinkClasses($el, true);
         protocall.home.initHomePage(); */
        /* var template = HomedynamicTemplate.home.HomeDynamicArchiveFeedTemplate();
         $(".content-holder").append(template);
         protocall.displaySpinner(false); */
    },
    loadviewArchivedFeeds: function ($el, isClickEvent) {
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = true;
        HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = false;
        HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES, CONSTANTS.LINK_TYPE.VIEW_ARCHIVES, "");
        }
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        //protocall.view.setSelectedLinkClasses($el, true);
        //$(".content-holder").empty();
        CONSTANTS.PGNUMBER = 0;
        var pageNumber = ++CONSTANTS.PGNUMBER;
        var data = {"pageNumber": pageNumber},
        deepPath = "viewedarchieved",
                page = "home",
                callback = protocall.home.loadHomePageData;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        /* var template = HomedynamicTemplate.home.HomeDynamicViewArchiveFeedTemplate();
         $(".content-holder").append(template); */
        protocall.view.subMenuSelectedTab();
        protocall.events.GlobalContainerScrollevent();
    },
    archiveFeeds: function ($e1) {
        var alertIDValue = $e1.attr("id");
        console.log("$e1", $e1);
        if ($e1.prop("checked") == true) {
            HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.push(alertIDValue);
            $("a.archives").css("visibility", "visible");
        } else {
            HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.pop(alertIDValue);
            if (HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.length == 0) {
                $("a.archives").css("visibility", "hidden");
            } else {
                $("a.archives").css("visibility", "visible");
            }
        }
        console.log("alertIDValue", $e1.attr("id"));
    },
    setSelectedLinkClasses: function ($el, isSet) {
        if (isSet) {
            $el.addClass("selected-tab");
        } else {
            $el.removeClass("selected-tab");
        }
    },
    loadSortBy: function ($el) {

        var html = '<div><div class="snap prof-view-overlay-sort" data-type="recent">Recent</div><div class="snap prof-view-overlay-sort" data-type="alphabetical">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByCustomer: function ($el) {

        var html = '<div><div class="snap ' + localStorage.myvalue1 + ' prof-view-overlay-sort" id="Myrecent" data-type="customer-recent">Recent</div><div class="snap ' + localStorage.myvalue2 + ' prof-view-overlay-sort" data-type="customer-alphabetical" id="Myalphabet">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByCarrier: function ($el) {

        var html = '<div><div class="snap ' + localStorage.mycarvalue1 + ' prof-view-overlay-sort" id="Myrecent" data-type="carrier-recent">Recent</div><div class="snap ' + localStorage.mycarvalue2 + ' prof-view-overlay-sort" data-type="carrier-alphabetical" id="Myalphabet">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByReps: function ($el) {
        var html = '<div><div class="snap ' + localStorage.myrepvalue1 + ' prof-view-overlay-sort" id="Myrecent" data-type="reps-recent">Recent</div><div class="snap ' + localStorage.myrepvalue2 + ' prof-view-overlay-sort" data-type="reps-alpha" id="Myalphabet">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByAgencies: function ($el) {
        var html = '<div><div class="snap ' + localStorage.myrepvalue1 + ' prof-view-overlay-sort" id="Myrecent" data-type="agencies-recent">Recent</div><div class="snap ' + localStorage.myrepvalue2 + ' prof-view-overlay-sort" data-type="agencies-alpha" id="Myalphabet">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByRecent: function ($el) {
        protocall.view.sortyByRecnetView();
    },
    loadAgenciesSortByAlphabetical: function ($el) {
        protocall.view.sortyByAgenciesAlphabeticalView();
    },
    loadSortByAlphabetical: function ($el) {
        protocall.view.sortyByAlphabeticalView();
    },
    loadSortByRecentCarrier: function ($el) {
        localStorage.mycarvalue1 = 'mysortselected';
        localStorage.mycarvalue2 = '';
        protocall.view.sortyByCarrierRecnetView();
    },
    loadSortByAlphabeticalCarrier: function ($el) {
        localStorage.mycarvalue1 = '';
        localStorage.mycarvalue2 = 'mysortselected';
        protocall.view.sortyByCarrierAlphabeticalView();
    },
    loadSortByRecentCustomers: function ($el) {
        localStorage.myvalue1 = 'mysortselected';
        localStorage.myvalue2 = '';
        protocall.view.sortyByCustomerRecnetView();
    },
    loadSortByAlphabeticalCustomer: function ($el) {
        localStorage.myvalue1 = '';
        localStorage.myvalue2 = 'mysortselected';
        protocall.view.sortyByCustomerAlphabeticalView();
    },
    loadSortByRecentReps: function ($el) {
        localStorage.myrepvalue1 = 'mysortselected';
        localStorage.myrepvalue2 = '';
        protocall.view.sortyByRepsRecnetView();
    },
    loadSortByAlphabeticalReps: function ($el) {
        localStorage.myrepvalue1 = '';
        localStorage.myrepvalue2 = 'mysortselected';
        protocall.view.sortyByRepsAlphabeticalView();
    },
    sortyByRepsRecnetView: function () {

        popUpContent.closePopUpContent();
        protocall.myRep.initMyRepsPage();
        return false;
    },
    sortyByRepsAlphabeticalView: function () {

        popUpContent.closePopUpContent();
        protocall.myRep.initMyRepsPageSort();
        return false;
    },
    sortyByRecnetView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Recent");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        protocall.home.initHomePage();
    },
    sortyByAgenciesAlphabeticalView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;

        var data = {};
        var path = utils.server.getServerPath("agencylist");
        var request = path(data).execute(function (resp) {
            if (resp.error) {
                t.server.handleError(resp);
            } else {
                CustomerdynamicTemplate.customer.loadSuperAdminAegnciesalphaSortBy(resp);
            }
        });



    },
    sortyByAlphabeticalView: function () {

        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;

        protocall.home.initHomePage();




    },
    sortyByCarrierRecnetView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Recent");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        protocall.carrier.initCarrierPage();
        return false;
    },
    sortyByCarrierAlphabeticalView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        protocall.carrier.initCarrierPageSort();
        return false;
    },
    sortyByCustomerRecnetView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Recent");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        protocall.customer.initCustomerPage();
        return false;
    },
    sortyByCustomerAlphabeticalView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        protocall.customer.initCustomerPageSort();
        return false;
    },
    loadProfile: function ($el) {
        var settings = "";

        if (sessionStorage.loginType == 'SuperAdmin') {
            settings = '<div id="mysettings" class="prof-view-overlay snap mysettings" data-type="mysettings" style="display:none;">Settings</div>';
        }
        if (localStorage.LoginType == 'Representatives') {
            settings = '<div id="mysettings" class="prof-view-overlay snap mysettings" data-type="mysettings" style="display:none;">Settings</div>';
        } else {
            settings = '<div id="mysettings" class="prof-view-overlay snap mysettings" data-type="mysettings">Settings</div>';
        }
        var html = '<div><div class="prof-view-overlay snap myProfileView" data-type="myProfileView">My Profile</div>'
                + settings
                + '<div class="prof-view-overlay">Help</div><div class="prof-view-overlay snap" data-type="logout-yes">Log out</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    shareToRep: function () {
        var html = staticTemplate.home.shareWithRepTemplate();
        overlay.displayOverlay(html);
    },
    assignToCustomers: function () {
        protocall.displaySpinner(true);
        // var page = "pageassigncustomersoverlay";
        // var data = {};
        // var callback = utils.server.gotAssignCustomersResponse;
        // utils.server.gotAssignCustomersResponse
        // var deepPath = "userlist";
        // utils.server.makeServerCall(page, data, callback, deepPath);

        utils.server.gotAssignCustomersResponse();
    },
    properityPolicy: function (e) {
        if (HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT !== 0) {
            var html = staticTemplate.home.properyPolicyTemplate();
            overlay.displayOverlay(html);
            GetSlider();
        }
    },
    properityPolicyresponse: function (resp, page) {
		console.log("resp>>>>>>>>>>>>properityPolicyresponse", resp);
        if (resp.resultMap.TypeCode == "4011") {
            HOMEPAGERESPONSE.POLICYDETAILS = resp.resultMap.Policies;
            $.each(HOMEPAGERESPONSE.POLICYDETAILS, function (index, policyDetails) {
                HOMEPAGERESPONSE.POLICYCOVERAGEDETAILS = policyDetails.PolicyCoverageDetails;
                $.each(HOMEPAGERESPONSE.POLICYCOVERAGEDETAILS, function (index, policyCoverageDetail) {
                    if (policyCoverageDetail.propertyDetails) {
                        HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT++;
                        HOMEPAGERESPONSE.PROPERTYCARRIERNAMES.push(policyDetails.carrierDetails.carrierName);
                        HOMEPAGERESPONSE.PROPERTYPHONENUMBER.push(policyDetails.carrierDetails.phone.number);
                        HOMEPAGERESPONSE.PROPERTYNEXTPAYMENTAMOUNT.push(policyDetails.policyDetails.nextPaymentAmountDue);
                        HOMEPAGERESPONSE.PROPERTYNEXTPAYMENTAMOUNTDATE.push(policyDetails.policyDetails.nextPaymentDueDate);
                        HOMEPAGERESPONSE.PROPERTYDURATIONSTARTDATE.push(policyDetails.policyDetails.effectiveDate);
                        HOMEPAGERESPONSE.PROPERTYDURATIONENDDATE.push(policyDetails.policyDetails.expirationDate);
                    } else if (policyCoverageDetail.vehicleDetails) {
                        HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT++;
                        HOMEPAGERESPONSE.VEHICLECARRIERNAMES.push(policyDetails.carrierDetails.carrierName);
                        HOMEPAGERESPONSE.VEHICLEPHONENUMBER.push(policyDetails.carrierDetails.phone.number);
                        HOMEPAGERESPONSE.VEHICLENEXTPAYMENTAMOUNT.push(policyDetails.policyDetails.nextPaymentAmountDue);
                        HOMEPAGERESPONSE.VEHICLENEXTPAYMENTAMOUNTDATE.push(policyDetails.policyDetails.nextPaymentDueDate);
                        HOMEPAGERESPONSE.VEHICLEDURATIONSTARTDATE.push(policyDetails.policyDetails.effectiveDate);
                        HOMEPAGERESPONSE.VEHICLEDURATIONENDDATE.push(policyDetails.policyDetails.expirationDate);
                    } else if (policyCoverageDetail.otherProductDetails) {
                        HOMEPAGERESPONSE.OTHERPOLICYCOUNT++;
                        HOMEPAGERESPONSE.OTHERCARRIERNAMES.push(policyDetails.carrierDetails.carrierName);
                        HOMEPAGERESPONSE.OTHERPHONENUMBER.push(policyDetails.carrierDetails.phone.number);
                        HOMEPAGERESPONSE.OTHERNEXTPAYMENTAMOUNT.push(policyDetails.policyDetails.nextPaymentAmountDue);
                        HOMEPAGERESPONSE.OTHERNEXTPAYMENTAMOUNTDATE.push(policyDetails.policyDetails.nextPaymentDueDate);
                        HOMEPAGERESPONSE.OTHERDURATIONSTARTDATE.push(policyDetails.policyDetails.effectiveDate);
                        HOMEPAGERESPONSE.OTHERDURATIONENDDATE.push(policyDetails.policyDetails.expirationDate);
                    }
                })
            });
        }

    },
    loadResetPassMailAlertBox: function () {
        var html = staticTemplate.home.passwordResetEmailAlertTemplate();
        overlay.displayOverlay(html);
    },
    loadResetPassAlertBox: function () {
        var html = staticTemplate.home.passwordResetAlertTemplate();
        overlay.displayOverlay(html);
        $(".o-content").css("height", "250px");
    },
    addVendorDetails: function () {
        var html = staticTemplate.home.addVendorDetailsTemplate();
        overlay.displayOverlay(html);
    },
    healthPolicy: function () {
        if (HOMEPAGERESPONSE.OTHERPOLICYCOUNT !== 0) {
            var html = staticTemplate.home.healthPolicyTemplate();
            console.log("html>>>>>>>>>>healthPolicy", html);
            overlay.displayOverlay(html);
            GetSlider();
        }
    },
    vehiclePolicy: function () {
        if (HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT !== 0) {
            var html = staticTemplate.home.vehiclePolicyTemplate();
            console.log("html>>>>>>>>>>vehiclePolicy", html);
            overlay.displayOverlay(html);
            GetSlider();
        }

    },
    sendAppLink: function () {
        protocall.displaySpinner(true);
//        page = "sendapplinkpage";
//        var data = {};
//        callback = utils.server.gotSendAppLinkResponse;
        //        deepPath = "";
        var page = "pagesharewithrepoverlay";
        var data = {};
        var callback = utils.server.gotSendAppLinkResponse;
        var deepPath = "userlist";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    LoadAgencyInfo: function () {

        localStorage.setItem("SELECTED_SETTINGS_TAB", "AGENCY_TAB");
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Admin') {
                //                /data-submenu
                $("#id-base_edit_box").css("display", "block");
                $("#id-base_preferred_edit_box").css("display", "none");
                $("#id-viewaddvendor").css("display", "none");
                $('.settings-agency-bar').css("background-color", "#f34f4e");
                $('#id-agency-view-load').css("color", "white");
                $('.settings-vendor-bar').css("background-color", "#ccc");
                $('#id-preferred-vendors-view-load').css("color", "black");
                //  $('.success').css("display", "none");
                //  $('.error').css("display", "none");
                REFERENCE_TYPE = "agency_info";
                $(".agency-view-block").css({
                    'display': 'block'
                });
                $(".preferred-vendor-block").css({
                    'display': 'none'
                });
            }

        } else {



            $('.settings-agency-bar').css("background-color", "#f34f4e");
            $('#id-agency-view-load').css("color", "white");
            $('.settings-vendor-bar').css("background-color", "#ccc");
            $('#id-preferred-vendors-view-load').css("color", "black");
            $('.success').css("display", "none");
            $('.error').css("display", "none");
            REFERENCE_TYPE = "agency_info";
            $(".agency-view-block").css({
                'display': 'block'
            });
            $(".preferred-vendor-block").css({
                'display': 'none'
            });
            $(".preferred-vendor-remove-block").css({
                'display': 'none'
            });
            $(".vendor-detail-block").css({
                'display': 'none'
            });
            $(".settings-edit-bar").css({
                'display': 'block'
            });
            $(".removevendor-bar").css({
                'display': 'none'
            });
            $(".addvendor-bar").css({
                'display': 'none'
            });
        }
        if (IsVendorDataChanged === true) {
            editVendorSaveData();
            IsVendorDataChanged = false;
        }
    },
    LoadPreferrredvendorInfo: function () {

        localStorage.setItem("SELECTED_SETTINGS_TAB", "PREFERRED_VENDORS");

        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Admin') {
                //agency-remove-load
                //  $("#id-base_edit_box").attr("data-submenu", "agency-remove-load");
                $("#id-base_edit_box").css("display", "none");
                $("#id-base_preferred_edit_box").css("display", "block");
                $("#id-viewaddvendor").css("display", "block");
                $('.settings-vendor-bar').css("background-color", "#f34f4e");
                $('#id-preferred-vendors-view-load').css("color", "white");
                $('.settings-agency-bar').css("background-color", "#ccc");
                $('#id-agency-view-load').css("color", "black");
                // $('.success').css("visibility", "hidden");
                // $('.error').css("visibility", "hidden");
                REFERENCE_TYPE = "vendor_info";
                $(".agency-view-block").css({
                    'display': 'none'
                });
                $(".preferred-vendor-block").css({
                    'display': 'block'
                });
            }
        } else {

            $('.settings-vendor-bar').css("background-color", "#f34f4e");
            $('#id-preferred-vendors-view-load').css("color", "white");
            $('.settings-agency-bar').css("background-color", "#ccc");
            $('#id-agency-view-load').css("color", "black");
            $('.success').css("visibility", "hidden");
            $('.error').css("visibility", "hidden");
            REFERENCE_TYPE = "vendor_info";
            $(".agency-view-block").css({
                'display': 'none'
            });
            $(".preferred-vendor-block").css({
                'display': 'block'
            });
            $(".preferred-vendor-remove-block").css({
                'display': 'none'
            });
            $(".vendor-detail-block").css({
                'display': 'none'
            });
            $(".settings-edit-bar").css({
                'display': 'none'
            });
            $(".removevendor-bar").css({
                'display': 'block'
            });
            $(".addvendor-bar").css({
                'display': 'block'
            });
        }
        if (IsAgencyDataChanged === true) {
            editAgencySaveData();
            IsAgencyDataChanged = false;
        }
    },
    LoadAgencyRemove: function () {
        $(".agency-view-block").css({
            'display': 'none'
        });
        $(".preferred-vendor-block").css({
            'display': 'none'
        });
        $(".preferred-vendor-remove-block").css({
            'display': 'block'
        });
        $(".vendor-detail-block").css({
            'display': 'none'
        });
    },
    LoadVendorInfo: function () {
        $(".agency-view-block").css({
            'display': 'none'
        });
        $(".preferred-vendor-block").css({
            'display': 'none'
        });
        $(".preferred-vendor-remove-block").css({
            'display': 'none'
        });
        $(".vendor-detail-block").css({
            'display': 'block'
        });
        $(".settings-edit-bar").css({
            'display': 'block'
        });
        $(".removevendor-bar").css({
            'display': 'none'
        });
        $(".addvendor-bar").css({
            'display': 'none'
        });
    },
    LoginAuthenticateYes: function () {
        protocall.displaySpinner(true);
        var label = $('#usertype :selected').parent().attr('label');
        var carrierID = $('#usertype :selected').val();
		sessionStorage.ownerId = carrierID;
		console.log("carrierID>>>>>>>>>>>>>",carrierID);
        var email = $('#email').val();
        var password = $('#password').val();
        var login = "yes";
        localStorage.setItem("LOGIN_LABEL", label);
        var type = localStorage.LoginType;
        // alert(label + "" + type);
        if (type == undefined) {
            var type = "Admin";
            localStorage.LoginType = "Admin";
        }

        var EmployeeType = "";
        if (label == "Agency") {
            if (type == "Admin") {
                EmployeeType = "agencyowner";
            } else if (type == "Representatives") {
                EmployeeType = "agencyrepresentative";
            }
        }
        else if (label == "Carriers") {
            if (type == "Representatives") {
                EmployeeType = "carrierrepresentative";
            } else if (type == "Admin") {

                EmployeeType = "carrierowner";
            }
        }

        if (type == "SuperAdmin") {
            EmployeeType = "protocalladmin";
            var data = {employeeType: EmployeeType, userId: email, password: password, agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3",
                carrierId: "5587210c-3fb9-4060-96d0-e92a4badf67d"};
            var page = "login";
            var callback = utils.server.gotloginresponse;
            var deepPath = "employeeauthentication";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
        //  alert(EmployeeType);
        if (label == "Agency") {

            var data = {employeeType: EmployeeType, userId: email, password: password, agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"};
            var page = "login";
            var callback = utils.server.gotloginresponse;
            var deepPath = "employeeauthentication";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
        if (label == "Carriers") {
            // alert(EmployeeType);
            // var data = {employeeType: EmployeeType, userId: "aravind.m@tringapps.com", password: "aravind", carrierId: "559c0339-22b3-460d-9893-a4d7e1413055"};
            var data = {employeeType: EmployeeType, userId: email, password: password, carrierId: carrierID};
            var page = "login";
            var callback = utils.server.gotloginresponse;
            var deepPath = "employeeauthentication";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }


    },
    LogoutAuthenticateYes: function () {
        popUpContent.closePopUpContent();
        protocall.displaySpinner(true);
        sessionStorage.loggedIn = "";
        sessionStorage.agencyEmail = "";
        sessionStorage.agencyId = "";
        localStorage.LoginType = "Admin";
        protocall.setPageNavigation(LOGIN_PAGE);
		sessionStorage.removeItem("agencyEmail");
         sessionStorage.removeItem("agencyId");
         sessionStorage.removeItem("agencyLogo");
         sessionStorage.removeItem("agencyPhone");
         sessionStorage.removeItem("customerEmailId");
         sessionStorage.removeItem("loggedIn");
         sessionStorage.removeItem("loginType");
         sessionStorage.removeItem("profilePic");
         sessionStorage.removeItem("profilePicAfterUpdate");
         sessionStorage.removeItem("superAdminEmailId");
         sessionStorage.removeItem("superAdminLogo");
         sessionStorage.removeItem("userName");
         sessionStorage.removeItem("agencyName");
         sessionStorage.removeItem("customerCarrierId");
        /* localStorage.clear();
         sessionStorage.removeItem("agencyEmail");
         sessionStorage.removeItem("agencyId");
         sessionStorage.removeItem("agencyLogo");
         sessionStorage.removeItem("agencyPhone");
         sessionStorage.removeItem("customerEmailId");
         sessionStorage.removeItem("loggedIn");
         sessionStorage.removeItem("loginType");
         sessionStorage.removeItem("profilePic");
         sessionStorage.removeItem("profilePicAfterUpdate");
         sessionStorage.removeItem("superAdminEmailId");
         sessionStorage.removeItem("superAdminLogo");
         sessionStorage.removeItem("userName");
         sessionStorage.removeItem("agencyName");
         sessionStorage.removeItem("customerCarrierId");
         localStorage.removeItem("AGENCYCARRIERTABDATA");
         localStorage.removeItem("AGENCYLOGIN_DATA");
         localStorage.removeItem("ARRAY_CUSTOMERS_LIST");
         localStorage.removeItem("ASSOCIATEFEED");
         localStorage.removeItem("ASSOCIATE_CARRIER");
         localStorage.removeItem("CARRIERADMIN_MYREPID");
         localStorage.removeItem("CARRIERAGENCYTOTALDETAILS");
         localStorage.removeItem("CARRIERREP_DATA");
         localStorage.removeItem("CARRIERREP_EMAILID");
         localStorage.removeItem("LOGIN_LABEL");
         localStorage.removeItem("LoginType");
         localStorage.removeItem("SETTINGTAB_PreferredVendorDATA");
         localStorage.removeItem("SUBMENU");
         localStorage.removeItem("TABNAME");
         localStorage.removeItem("agencies_data");
         localStorage.removeItem("carrierrepcustomers_data");
         localStorage.removeItem("currentPage");
         localStorage.removeItem("customers_data");
         localStorage.removeItem("id-customers-headername"); */
    },
    //    Added By Manoj
    pushMessage: function () {
        var html = staticTemplate.home.pushMessageTemplate();
        overlay.displayOverlay(html);
        var nows = new Date();
        $('#datepicker').prop('min', nows.toISOString().substring(0, 10));
        $("#datepicker").keypress(function (event) {
            event.preventDefault();
        });
    },
    privacy: function () {

        page = "privacyoverlay";
        var data = {};
        callback = utils.server.gotPrivacyResponse;
        deepPath = "agencyrepresentativenamewithlocation";
        utils.server.makeServerCall(page, data, callback, deepPath);
//        var html = staticTemplate.home.privacyTemplate();
        //        overlay.displayOverlay(html);
    },
    /*Added by Naveen -- Start*/
    /*Naveen Chnages 19-2-2015 start */
    staticPhotOverlayDisplay: function (e) {
        var currentTarget = $(e.currentTarget), photoCountValue = 0;
        var currentTargetName = currentTarget.attr("name");
        if (HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED && currentTargetName == "photosDocView") {
            photoCountValue = currentTarget.find("div.file-count.inline-block").text();
            HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        } else {
            photoCountValue = currentTarget.find("span.doc-count.doc-count-placement").text();
        }
        if (photoCountValue == 0) {
            e.stopPropagation();
            //return true;
        } else {
            var clickedAlertID = currentTarget.attr("id");
            console.log("clickedID", clickedAlertID);
            var html = staticTemplate.home.showPhotsOverlayTemplate(clickedAlertID);
            overlay.displayOverlay(html);
            $("#printImageICON").addClass("printPageClass");
            if (RESPONSE.PICTUREDETAILS.length == 1) {
                $("#previousICON").css("display", "none");
                $("#nextICON").css("display", "none");
            } else {
                $("#nextICON").css("display", "block");
            }
            overlay.sliderControl();
            $("#thumbNailViewForImages div:nth-child(1)").addClass("activeAudio");
        }
    },
    staticAudioOverlayDisplay: function (e) {
        console.log("staticAudioOverlayDisplay");
        var currentTarget = $(e.currentTarget), audioCountValue = 0;
        var currentTargetName = currentTarget.attr("name");
        console.log("staticAudioOverlayDisplay currentTarget", currentTarget);
        if (HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED && currentTargetName == "voiceDocView") {
            audioCountValue = currentTarget.find("div.file-count.inline-block").text();
            HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        } else {
            audioCountValue = currentTarget.find("span.doc-count.doc-count-placement").text();
        }
        console.log("staticAudioOverlayDisplay audioCountValue", audioCountValue);
        if (audioCountValue == 0) {
            return true;
        } else {
            var clickedAlertID = currentTarget.attr("id");
            console.log("clickedID", clickedAlertID);
            var html = staticTemplate.home.showAudioOverlayTemplate(clickedAlertID);
            overlay.displayOverlay(html);
            overlay.audioInit();
            $("#thumbNailViewForVoice div:nth-child(1)").addClass("activeAudio");
        }
    },
    /*Naveen 23-2-2015 Changes Start */
    staticDocumentOverlayDisplay: function (e) {
        console.log("staticDocumentOverlayDisplay currentTarget", $(e.currentTarget));
        var currentTarget = $(e.currentTarget), docCountValue = 0;
        var currentTargetName = currentTarget.attr("name");
        if (HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED && currentTargetName == "textDocView") {
            docCountValue = currentTarget.find("div.file-count.inline-block").text();
            HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        } else {
            docCountValue = currentTarget.find("span.doc-count.doc-count-placement").text();
        }
        console.log("docCountValue", docCountValue);
        if (docCountValue == 0) {
            return true;
        } else {
            var clickedAlertID = currentTarget.attr("id");
            var html = staticTemplate.home.showDocumentOverlayTemplate(clickedAlertID);
            overlay.displayOverlay(html);
            overlay.documentInIt();
            $("#printTextOverlay").addClass("printPageClass");
            $("#thumbNailViewForText div:nth-child(1)").addClass("activeAudio");
            if (RESPONSE.OTHERPARTYNAMES[0] == "Nil") {
                $('#textOverlayName').hide();
            } else {
                $('#textOverlayName').show();
            }
            if (RESPONSE.ROLE[0] == "Nil") {
                $('#textOverlayRole').hide();
            } else {
                $('#textOverlayRole').show();
            }
            if (RESPONSE.PHONE[0] == "Nil") {
                $('#textOverlayPhone').hide();
            } else {
                $('#textOverlayPhone').show();
            }
            if (RESPONSE.ADDRESS[0] == "Nil") {
                $('#textOverlayAddress').hide();
            } else {
                $('#textOverlayAddress').show();
            }
            if (RESPONSE.INSURANCECO[0] == "Nil") {
                $('#textOverlayInsurence').hide();
            } else {
                $('#textOverlayInsurence').show();
            }
            if (RESPONSE.POLICY[0] == "Nil") {
                $('#textOverlayPolicy').hide();
            } else {
                $('#textOverlayPolicy').show();
            }
            if (RESPONSE.VEHICLEMODEL[0] == "Nil") {
                $('#textOverlayModel').hide();
            } else {
                $('#textOverlayModel').show();
            }
            if (RESPONSE.VEHICLENO[0] == "Nil") {
                $('#textOverlayAutoLicensePlate').hide();
            } else {
                $('#textOverlayAutoLicensePlate').show();
            }
            if (RESPONSE.DRIVINGLICENCESTATE[0] == "Nil") {
                $('#textOverlayDriversLicenseState').hide();
            } else {
                $('#textOverlayDriversLicenseState').show();
            }
            if (RESPONSE.DRIVINGLICENCENUMBER[0] == "Nil") {
                $('#textOverlayDriversLicenseNumber').hide();
            } else {
                $('#textOverlayDriversLicenseNumber').show();
            }
            if (RESPONSE.INJURIES[0] == "Nil") {
                $('#textOverlayInjuries').hide();
            } else {
                $('#textOverlayInjuries').show();
            }
            if (RESPONSE.OTHERINFORMATION[0] == "Nil") {
                $('#textOverlayOtherInfo').hide();
            } else {
                $('#textOverlayOtherInfo').show();
            }
        }
    },
    printOverlayPage: function () {
        console.log("printOverlayPage");
        $("#page").addClass("noprint");
        $("footer").addClass("noprint");
        $("#downloadTextLink").addClass("noprint");
        $("#downloadImageLink").addClass("noprint");
        $("#printTextOverlay").addClass("noprint");
        $("#thumbNailViewForText").addClass("noprint");
        $("#thumbNailViewForImages").addClass("noprint");
        $("#printImageICON").addClass("noprint");
        $("#previousICON").addClass("noprint");
        $("#nextICON").addClass("noprint");
        window.print();
    },
    /*Naveen 23-2-2015 Changes End */
    /*Added by Naveen -- End*/
    editAgencyPic: function () {
        var html = staticTemplate.home.editAgencyPicTemplate();
        overlay.displayOverlay(html);
        $('#id-agencyprofilelogo').attr('src', sessionStorage.agencyLogo);
    },
    LoadAgencyEdit: function () {
        editDataInfo();
    },
    matchReleaseClaimAlert: function (e) {
        var currentTarget = $(e.currentTarget);
        currentTarget.css({"cursor": "default", "background": "#f34f4e"});
        var incidentDate = currentTarget.find(".incidentDateSpan").text(),
                carrierId = currentTarget.find(".carrierIdSpan").text(),
                policyId = currentTarget.find(".policyIdSpan").text(),
                policyType = currentTarget.find(".policyTypeSpan").text(),
                data = {"incidentId": incidentDate, "carrierId": carrierId, "policyId": policyId
                    , "alertId": HOMEPAGERESPONSE.COMMONUSERDETAILS.alertId, "type": policyType},
        page = "home",
                deepPath = "matchandrelease",
                callback = protocall.view.matchAndOrReleaseClaim;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    matchClaimAlert: function (e) {
        var currentTarget = $(e.currentTarget);
        currentTarget.css({"cursor": "default", "background": "#f34f4e"});
        var incidentDate = currentTarget.find(".incidentDateSpan").text(),
                carrierId = currentTarget.find(".carrierIdSpan").text(),
                policyId = currentTarget.find(".policyIdSpan").text(),
                policyType = currentTarget.find(".policyTypeSpan").text(),
                data = {"incidentId": incidentDate, "carrierId": carrierId, "policyId": policyId
                    , "alertId": HOMEPAGERESPONSE.COMMONUSERDETAILS.alertId, "type": policyType},
        page = "home",
                deepPath = "matched",
                callback = protocall.view.matchAndOrReleaseClaim;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    matchAndOrReleaseClaim: function (result) {
        console.log("matchAndOrReleaseClaim>>>>>>>>>>>>>>>>", result);
        if (result.resultMap.TypeCode == "4038") {
            var html = staticTemplate.home.matchReleaseClaimTemplate();
            overlay.displayOverlay(html);
        } else {
            return false;
        }
    },
    loadInviteReps: function () {
        var html = staticTemplate.myreps.inviteRepsTemplate();
        overlay.displayOverlay(html);
    },
    sendInviteReps: function () {

        protocall.InviteRep.sendemailinvite();
    },
    loadAssignToReps: function () {
        var html = staticTemplate.home.assignToRepTemplate();
        overlay.displayOverlay(html);
    },
    buildHomeMenuBlk: function (page, breadCrumbObj) {

        var ArchiveHtml = template.GetarchiveMenu();
        $(".mb-submenu").empty();
        $(".mb-submenu").append($(ArchiveHtml));
    },
    buildSubMenuBlk: function (page, breadCrumbObj) {

        var subMenuBlockTemplate = template.subMenuBlk(),
                subMenuSortHTML = template.subMenuSortHTML(),
                subMenuBreadCrumbHTML = template.subMenuBreadCrumbHTML(),
                subMenuTabHTML = template.subMenuTabHTML();
        var subMenuObj = "";
        if (page === HOME_PAGE) {
            subMenuObj = SUB_MENU.HOME;
        } else if (page === CARRIERS_PAGE) {
            subMenuObj = SUB_MENU.CARRIERS;
        } else if (page === CUSTOMERS_PAGE) {
            subMenuObj = SUB_MENU.CUSTOMERS;
        } else if (page === MY_REP_PAGE) {
            subMenuObj = SUB_MENU.MY_REPS;
        } else if (page === SETTINGS_PAGE) {
            subMenuObj = SUB_MENU.SETTINGS;
        } else if (page === PROFILE_PAGE) {
            subMenuObj = SUB_MENU.PROFILE;
        }
        else {
            subMenuObj = "";
        }
		
        if (subMenuObj !== "") {
            var bcTotalHTML = "";
            if (subMenuObj.BREADCRUMB != "" && subMenuObj.BREADCRUMB.length > 0) {
                var bcHTML = "";
                bcTotalHTML = "";
                var isBCNamePresent = "display:none;";
                var customerName = "";
                if (breadCrumbObj && breadCrumbObj != undefined) {
                    isBCNamePresent = "display:inline-block;"
                    customerName = breadCrumbObj.customerName;
                }
                for (var bc = 0; bc < subMenuObj.BREADCRUMB.length; bc++) {
                    var bcHTML = template.subMenuBreadCrumbHTML();
                    var titleSplitArray = subMenuObj.BREADCRUMB[bc].TITLE.split("_");
                    var hrefBCTags = "", titleBCName = "";
                    if (titleSplitArray && titleSplitArray.length > 0) {
                        for (var tit = 0; tit < titleSplitArray.length; tit++) {
                            hrefBCTags = hrefBCTags + titleSplitArray[tit];
                            titleBCName = titleBCName + " " + titleSplitArray[tit];
                        }
					} else {
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
            if (subMenuObj.TABS != "" && subMenuObj.TABS.length > 0) {
                var tabHtml = "";
                tabTotalHTML = "";
                var isSubMenuIconClass = "display:none;", isSubMenuCountClass = "display:none;";
                var subMenuTabCount = "";
                for (var t = 0; t < subMenuObj.TABS.length; t++) {
                    var tabHtml = template.subMenuTabHTML();
                    isSubMenuIconClass = (subMenuObj.TABS[t].ICON_CLASS != "") ? "display:inline-block;" : "display:none;";
                    isSubMenuCountClass = (subMenuObj.TABS[t].COUNT != "") ? "display:inline-block;" : "display:none;";
                    var titleSplitArray = subMenuObj.TABS[t].TITLE.split("_");
                    var hrefTabTags = "", titleTabName = "";
                    if (titleSplitArray && titleSplitArray.length > 0) {
                        for (var tit = 0; tit < titleSplitArray.length; tit++) {
                            hrefTabTags = hrefTabTags + titleSplitArray[tit];
                            titleTabName = titleTabName + " " + titleSplitArray[tit];
                        }
                    } else {
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
            if (breadCrumbObj && breadCrumbObj != undefined) {
                tabTotalHTML = "";
            }


            var tabsWithSortHTML = "";
            if (subMenuObj.ISSORTBY) {
                var sortHtml = template.subMenuSortHTML();
                tabsWithSortHTML = sortHtml + tabTotalHTML;
            } else {
                tabsWithSortHTML = tabTotalHTML;
            }
            subMenuBlockTemplate = subMenuBlockTemplate.replace(/{{breadcrumb_block}}/g, bcTotalHTML);
            subMenuBlockTemplate = subMenuBlockTemplate.replace(/{{tab_block}}/g, tabsWithSortHTML);
            $(".mb-submenu").empty();
            $(".mb-submenu").append($(subMenuBlockTemplate));
			if(HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED){
				$("#subMenuToShow").css("display","block");
				$("#subMenuToShow").html("View Archived >");
			} else if(HOMEPAGERESPONSE.POLICYALERTCLICKED) {
				$("#subMenuToShow").css("display","block");
				$("#subMenuToShow").html("Policies >");
			} else if(HOMEPAGERESPONSE.INCIDENTALERTSCLICKED){
				$("#subMenuToShow").css("display","block");
				$("#subMenuToShow").html("Incidents >");
			} else {
				$("#subMenuToShow").css("display","none");
			}
        }

    },
    /*Naveen 19-2-2015 Chnage start*/
    displayOrignalImage: function (currentTarget) {
        var mainImageHTML = "";
        $("#thumbNailViewForImages>div").removeClass("activeAudio");
        currentTarget.addClass("activeAudio");
        var currentMediaID = currentTarget.attr("name"), mainAudioHTML = "", stateName = "";
        console.log("currentMediaID", currentMediaID);
        $.each(RESPONSE.PICTUREDETAILS, function (i, element) {
            console.log("media id", element.mediaId);
            if (currentMediaID == element.mediaId) {
                $("#downloadImageLink").attr("href", HOMEPAGERESPONSE.PROFILEAPI + element.file);
                mainImageHTML = '<img src=' + HOMEPAGERESPONSE.PROFILEAPI + element.file + ' style="max-height: 220px;max-width: 300px;" />';
                imageInformationHTML = element.fileName;
                if (element.residentialCity != undefined && element.residentialCity != null && element.residentialCity != "") {
                    stateName = "," + element.residentialCity;
                } else {
                    stateName = " ";
                }
            }
        });
        $("#viewImage").html(mainImageHTML);
        $("#imageinformation").html(imageInformationHTML);
        $("#locationInformation").html(stateName);
    },
    /*Naveen 19-2-2015 Chnage end*/
    displayOrignalDoc: function (currentTarget) {
        $("#thumbNailViewForText>div").removeClass("activeAudio");
        currentTarget.addClass("activeAudio");
        var currentDocName = "", phoneNumber = "", addressValue = "";
        var currentOtherPartyID = currentTarget.find("p").attr("id"), mainAudioHTML = "";
        console.log("currentOtherPartyID");
        $.each(RESPONSE.OTHERPARTYDETAILS, function (i, element) {
            console.log("media id", element.fileName);
            if (currentOtherPartyID == element.otherPartyId) {
                currentDocName = element.fileName;
                if (element.fileName == undefined) {
                    element.fileName = "";
                }
                if (element.role == undefined) {
                    element.role = "";
                }
                if (element.phone == undefined) {
                    phoneNumber = "";
                } else {
                    phoneNumber = element.phone.number;
                }
                if (element.address == undefined) {
                    addressValue = "";
                } else {
                    addressValue = element.address.address;
                }
                if (element.carrier == undefined) {
                    element.carrier = "";
                }
                if (element.policyNumber == undefined) {
                    element.policyNumber = "";
                }
                if (element.vehicleIdentificationNumber == undefined) {
                    element.vehicleIdentificationNumber = "";
                }
                if (element.model == undefined) {
                    element.model = "";
                }
                if (element.driverLicenseState == undefined) {
                    element.driverLicenseState = "";
                }
                if (element.driverLicenseNumber == undefined) {
                    element.driverLicenseNumber = "";
                }
                if (element.injuries == undefined) {
                    element.injuries = "";
                }
                if (element.otherInformation == undefined) {
                    element.otherInformation = "";
                }
                mainDocHTML = '<div class="leftDiv">'
                        + '<p id="nameOfTheTextDoc">'
                        + '<span class="firstSpan">Name</span>'
                        + '<span class="secondSpan">' + element.otherPartyName + '</span>'
                        + '</p>'
                        + '<p id="roleOfTheTextDoc">'
                        + '<span class="firstSpan">Role</span>'
                        + '<span class="secondSpan">' + element.role + '</span>'
                        + '</p>'
                        + '<p id="phoneOfTheTextDoc">'
                        + '<span class="firstSpan">Phone</span>'
                        + '<span class="secondSpan">' + phoneNumber + '</span>'
                        + '</p>'
                        + '<p id="addressOfTheTextDoc">'
                        + '<span class="firstSpan">Address</span>'
                        + '<span class="secondSpan">' + addressValue + '</span>'
                        + '</p>'
                        + '<p id="carrierOfTheTextDoc">'
                        + '<span class="firstSpan">Insurance co</span>'
                        + '<span class="secondSpan">' + element.carrier + '</span>'
                        + '</p>'
                        + '<p id="policyOfTheTextDoc">'
                        + '<span class="firstSpan">Policy #</span>'
                        + '<span class="secondSpan">' + element.policyNumber + '</span>'
                        + '</p>'
                        + '<p id="modelOfTheTextDoc">'
                        + '<span class="firstSpan">Auto Yr/make/model</span>'
                        + '<span class="secondSpan">' + element.model + '</span>'
                        + '</p>'
                        + '<p id="vehicleNoOfTheTextDoc">'
                        + '<span class="firstSpan">Auto License plate state & Number</span>'
                        + '<span class="secondSpan">' + element.vehicleIdentificationNumber + '</span>'
                        + '</p>'
                        + '<p id="licenseStateOfTheTextDoc">'
                        + '<span class="firstSpan">Drivers License State</span>'
                        + '<span class="secondSpan">' + element.driverLicenseState + '</span>'
                        + '</p>'
                        + '<p id="licenseOfTheTextDoc">'
                        + '<span class="firstSpan">Drivers License Number</span>'
                        + '<span class="secondSpan">' + element.driverLicenseNumber + '</span>'
                        + '</p>'
                        + '<p id="injuriesOfTheTextDoc">'
                        + '<span class="firstSpan">Injuries</span>'
                        + '<span class="secondSpan">' + element.injuries + '</span>'
                        + '</p>'
                        + '<p id="otherinfoOfTheTextDoc">'
                        + '<span class="firstSpan">Other info</span>'
                        + '<span class="secondSpan">' + element.otherInformation + '</span>'
                        + '</p>'
                        + '</div>';
                $("#textinformation").html(currentDocName);
                $("#downloadTextLink").attr("href",HOMEPAGERESPONSE.TEXTDOWNLOADURL+element.otherPartyId);
				$("#viewText").html(mainDocHTML);
                if (element.otherPartyName == "") {
                    $('#nameOfTheTextDoc').hide();
                } else {
                    $('#nameOfTheTextDoc').show();
                }
                if (element.role == "") {
                    $('#roleOfTheTextDoc').hide();
                } else {
                    $('#roleOfTheTextDoc').show();
                }
                if (phoneNumber == "") {
                    $('#phoneOfTheTextDoc').hide();
                } else {
                    $('#phoneOfTheTextDoc').show();
                }
                if (addressValue == "") {
                    $('#addressOfTheTextDoc').hide();
                } else {
                    $('#addressOfTheTextDoc').show();
                }
                if (element.carrier == "") {
                    $('#carrierOfTheTextDoc').hide();
                } else {
                    $('#carrierOfTheTextDoc').show();
                }
                if (element.policyNumber == "") {
                    $('#policyOfTheTextDoc').hide();
                } else {
                    $('#policyOfTheTextDoc').show();
                }
                if (element.model == "") {
                    $('#modelOfTheTextDoc').hide();
                } else {
                    $('#modelOfTheTextDoc').show();
                }
                if (element.vehicleIdentificationNumber == "") {
                    $('#vehicleNoOfTheTextDoc').hide();
                } else {
                    $('#vehicleNoOfTheTextDoc').show();
                }
                if (element.driverLicenseState == "") {
                    $('#licenseStateOfTheTextDoc').hide();
                } else {
                    $('#licenseStateOfTheTextDoc').show();
                }
                if (element.driverLicenseNumber == "") {
                    $('#licenseOfTheTextDoc').hide();
                } else {
                    $('#licenseOfTheTextDoc').show();
                }
                if (element.injuries == "") {
                    $('#injuriesOfTheTextDoc').hide();
                } else {
                    $('#injuriesOfTheTextDoc').show();
                }
                if (element.otherInformation == "") {
                    $('#otherinfoOfTheTextDoc').hide();
                } else {
                    $('#otherinfoOfTheTextDoc').show();
                }
            }
        });
    },
    /*Naveen 19-2-2015 Chnage start*/
    displayPreviousImage: function () {
        var $divElement = $("#thumbNailViewForImages"), activeAudioClass = false;
        console.log("$liElement", $divElement);
        $.each($divElement, function (index, element) {
            console.log($(this).find("div").hasClass("activeAudio"));
            activeAudioClass = $(this).find("div").hasClass("activeAudio")
            if (activeAudioClass) {
                protocall.view.loadingScrollPrevious($(this).find("div.activeAudio"));
                return false;
            }
        });
    },
    displayNextImage: function () {
        var $divElement = $("#thumbNailViewForImages"), activeAudioClass = false;
        console.log("$liElement", $divElement);
        $.each($divElement, function (index, element) {
            console.log($(this).find("div").hasClass("activeAudio"));
            activeAudioClass = $(this).find("div").hasClass("activeAudio")
            if (activeAudioClass) {
                protocall.view.loadingScrollNext($(this).find("div.activeAudio"));
                return false;
            }
        });
    },
    loadingScrollNext: function (liEleme) {
        $("#previousICON").css("display", "block");
        var indexValue = $("#thumbNailViewForImages div").index(liEleme) + 1, nextElementToBeloaded;
        if (indexValue !== 0 && indexValue < $("#thumbNailViewForImages div").length) {
            nextElementToBeloaded = $("#thumbNailViewForImages div:eq( " + indexValue + " )");
            $("#thumbNailViewForImages div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            imageSrcTobeLoadedBack = nextElementToBeloaded.find("img").attr("src");
            $("#viewImage").html('<img src=' + imageSrcTobeLoadedBack + ' style="max-height: 220px;max-width: 300px;"/>');
        } else {
            $("#nextICON").css("display", "none");
            $("#previousICON").css("display", "block");
        }
    },
    loadingScrollPrevious: function (liEleme) {
        $("#nextICON").css("display", "block");
        var indexValue = $("#thumbNailViewForImages div").index(liEleme) - 1, nextElementToBeloaded;
        console.log("loadingScrollBack" + indexValue);
        if (indexValue !== -1) {
            nextElementToBeloaded = $("#thumbNailViewForImages div:eq( " + indexValue + " )");
            $("#thumbNailViewForImages div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            imageSrcTobeLoadedBack = nextElementToBeloaded.find("img").attr("src");
            console.log("imageSrcTobeLoaded" + imageSrcTobeLoadedBack);
            $("#viewImage").html('<img src=' + imageSrcTobeLoadedBack + ' style="max-height: 220px;max-width: 300px;"/>');
        } else {
            $("#previousICON").css("display", "none");
            $("#nextICON").css("display", "block");
        }
    },
    /*Naveen 19-2-2015 Chnage end*/
    /*Audio Click functions*/
    displayOrignalAudio: function (currentTarget) {
        $("#thumbNailViewForVoice>div").removeClass("activeAudio");
        currentTarget.addClass("activeAudio");
        var currentMediaID = currentTarget.find("p#mediaID").text(), mainAudioHTML = "", fileNameOfAudio = "", timeValue;
        console.log("RESPONSE.AUDIODETAILS", RESPONSE.AUDIODETAILS);
        $.each(RESPONSE.AUDIODETAILS, function (i, element) {
            console.log("media id", element.mediaId);
            if (currentMediaID == element.mediaId) {
                console.log("condition satisfied");
                $("#music").attr("src", HOMEPAGERESPONSE.PROFILEAPI + element.file);
                $("#music").load();
                $("#downloadAudioLink").attr("href", HOMEPAGERESPONSE.PROFILEAPI + element.file);
                mainAudioHTML = '<source src=' + HOMEPAGERESPONSE.PROFILEAPI + element.file + '>'
                        + '<source src=' + HOMEPAGERESPONSE.PROFILEAPI + element.file + '>';
                fileNameOfAudio = element.fileName;
                timeValue = element.lastModified;
                $(".audiodetailestime").html(JSON.parse(JSON.stringify(moment(Number(timeValue)).format("Do MMM YY, h:mm A")).replace("th", " ")));
                //moment(Number(timeValue)).format("Do MMM YY, h:mm A")
                /*+ '<div class="voice-ctrler">'
                 + '<div class="audioOverlay" data-type="previousAudio" style="cursor:pointer;">prev</div><div><button id="pButton2" class="play audioOverlay" data-type="playAudio"></button></div><div class="audioOverlay" data-type="nextAudio" style="cursor:pointer;">next</div>'
                 + '</div>'; */
            }
        });
        $("#voiceinformation").html(fileNameOfAudio);
        // $("#music").html(mainAudioHTML);
        /* $("#music").load();
        $("#music").pause();
        $("#music").currentTime = 0;
        $("#music").play(); */
        // $(".audiodetailestime").html(moment(Number(timeValue)).format("Do MMM YY, h:mm A"));
    },
    displayPreviousAudio: function () {
        var $divElement = $("#audioThumbNailView"), activeAudioClass = false;
        console.log("$liElement", $divElement);
        $.each($divElement, function (index, element) {
            console.log($(this).find("div").hasClass("activeAudio"));
            activeAudioClass = $(this).find("div").hasClass("activeAudio")
            if (activeAudioClass) {
                protocall.view.loadingPreviousAudio($(this).find("div.activeAudio"));
                return false;
            }
        });
    },
    loadingPreviousAudio: function (divEleme) {
        console.log("loadingPreviousAudio");
        var indexValue = $("#audioThumbNailView div").index(divEleme) - 1, nextElementToBeloaded, nextAudioElement;
        console.log("loadingScrollBack" + indexValue);
        if (indexValue !== -1) {
            nextElementToBeloaded = $("#audioThumbNailView div:eq( " + indexValue + " )");
            $("#audioThumbNailView div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            nextAudioElement = nextElementToBeloaded.find("p#mediaID").attr("name");
            console.log("imageSrcTobeLoaded" + nextAudioElement);
            $("#music").find("source").attr("src", nextAudioElement);
        }
    },
    displayNextAudio: function () {
        var $divElement = $("#audioThumbNailView"), activeAudioClass = false;
        console.log("$liElement", $divElement);
        $.each($divElement, function (index, element) {
            console.log($(this).find("div").hasClass("activeAudio"));
            activeAudioClass = $(this).find("div").hasClass("activeAudio")
            if (activeAudioClass) {
                protocall.view.loadingNextAudio($(this).find("div.activeAudio"));
                return false;
            }
        });
    },
    loadingNextAudio: function (divEleme) {
        console.log("loadingPreviousAudio");
        var indexValue = $("#audioThumbNailView div").index(divEleme) + 1, nextElementToBeloaded, nextAudioElement;
        console.log("loadingScrollBack" + indexValue);
        if (indexValue !== 0 && indexValue < $("#audioThumbNailView div").length) {
            nextElementToBeloaded = $("#audioThumbNailView div:eq( " + indexValue + " )");
            $("#audioThumbNailView div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            nextAudioElement = nextElementToBeloaded.find("p#mediaID").attr("name");
            console.log("imageSrcTobeLoaded" + nextAudioElement);
            $("#music").find("source").attr("src", nextAudioElement);
        }
    },
    playAudioFile: function ($e1) {
        console.log("playAudioFile");
        console.log("$e1" + $e1.parent());
        var $ele = $e1.parent();
        var duration;
        var music = document.getElementById('music');
        var pButton = document.getElementById('pButton');
        var pButton2 = document.getElementById('pButton2');
        var timeline = document.getElementById('timeline'); // timeline
        var playhead = document.getElementById('playhead'); // playhead
        playhead.addEventListener('mousedown', protocall.view.mouseDown(music), false);
        var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
        music.addEventListener("canplaythrough", protocall.view.canPlayThorgh(music, duration), false);
        //music.addEventListener("timeupdate", protocall.view.timeUpdate(music,pButton,pButton2,timeline,timelineWidth,playhead), false);
        timeline.addEventListener("click", protocall.view.timeLine(music, playhead, timeline, timelineWidth, event), false);
        if (music.paused) {
            console.log("music.paused");
            music.play();
            // remove play, add pause
            pButton.className = "";
            pButton.className = "pause";
            pButton2.className = "";
            pButton2.className = "pause";
        } else { // pause music
            console.log("else music.paused");
            music.pause();
            // remove pause, add play
            pButton.className = "";
            pButton.className = "play";
            pButton2.className = "";
            pButton2.className = "play";
        }
    },
    timeUpdate: function (music, duration) {
        var timeline = document.getElementById('timeline'); // timeline
        var playhead = document.getElementById('playhead'); // playhead
        var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
        var pButton = document.getElementById('pButton');
        var pButton2 = document.getElementById('pButton2');
        var playPercent = timelineWidth * (music.currentTime / duration);
        if (music.currentTime == duration) {
            pButton.className = "";
            pButton.className = "play";
            pButton2.className = "";
            pButton2.className = "play";
        }
    },
    canPlayThorgh: function (music, duration) {
        var durationIn = music.duration;
        console.log("durationIn" + durationIn);
        if (isNaN(durationIn)) {
            console.log("if");
            time = '00:00';
            document.getElementById("audioDuration").innerHTML = time;
        }
        else {
            var time = protocall.view.formatSecondsAsTime(durationIn);
            console.log("time in else" + time);
            document.getElementById("audioDuration").innerHTML = time;
        }
        protocall.view.timeLine(music, durationIn);
        protocall.view.timeUpdate(music, durationIn);
    },
    formatSecondsAsTime: function (duration) {
        var secs = duration;
        console.log("secs" + secs);
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = Math.floor(secs - (hr * 3600) - (min * 60));
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        return min + ':' + sec;
    },
    timeLine: function (music, duration, event) {
        var timeline = document.getElementById('timeline'); // timeline
        var playhead = document.getElementById('playhead'); // playhead
        var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
        //protocall.view.moveplayhead(playhead,timelineWidth,event);
        //music.currentTime = duration * protocall.view.clickPercent(timeline,timelineWidth,event);
    },
    moveplayhead: function (playhead, timelineWidth, event) {
        var newMargLeft = event.pageX - timeline.offsetLeft;
        if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
            playhead.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            playhead.style.marginLeft = "0px";
        }
        if (newMargLeft > timelineWidth) {
            playhead.style.marginLeft = timelineWidth + "px";
        }
    },
    clickPercent: function (event) {
        return (event.pageX - timeline.offsetLeft) / timelineWidth;
    },
    mouseDown: function (music) {
        onplayhead = true;
        //window.addEventListener('mousemove', protocall.view.moveplayhead, true);
        music.removeEventListener('timeupdate', protocall.view.timeUpdate(music, pButton, pButton2), false);
    },
    searchUserDetails: function (searchText) {
        console.log("searchText", searchText);
        var data = {"name": searchText},
        deepPath = "globalsearchusingsearchapi",
                page = "home",
                callback = protocall.view.searchResults;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    searchResults: function (result) {
        console.log("result>>>>>>>>>>", result);
        $("#searchBarDiv").show();
        var resultValueHTML = "";
        if (result.resultMap.TypeCode == "4012") {
            resultValueHTML += '<li style="margin:10px;cursor:default;padding:10px;">'
                    + '<p class="searchItemUserName" style="color:#585858" class="opensans-regular f-sz-16">No Search Result Found</p>'
                    + '</li>';
            $("#searchResultUL").html($(resultValueHTML));
        } else {
            var matchedResultValue = result.resultMap.MatchedDocumentList;
            $.each(matchedResultValue, function (index, resultValue) {
                resultValueHTML += '<li style="margin:10px;cursor:pointer;border-bottom: 1px solid #d4d4d4;padding:10px;" id="searchItem_' + index + '" class="snap" data-type="selectedSearchItem">'
                        + '<p class="searchItemUserName" style="color:#585858" class="opensans-regular f-sz-16">' + resultValue.firstName + '</p>'
                        + '<p class="opensans-regular f-sz-12 searchItemRole" style="margin-bottom: 5px;">' + resultValue.role + '</p>'
                        + '<p class="searchItemEmail" style="display:none">' + resultValue.emailId + '</p>'
                        + '</li>';
            });
            $("#searchResultUL").append($(resultValueHTML));
            $("#searchResultUL li:last-child").css("border-bottom", "none");
        }
    },
    showSearchResult: function (e) {
        var currentTarget = $(e.currentTarget);
        console.log("currentTarget showSearchResult", currentTarget);
        var userEmailId = currentTarget.find("p.searchItemEmail").text();
        var userName = currentTarget.find("p.searchItemUserName").text();
        var userRole = currentTarget.find("p.searchItemRole").text();
        $(".search-ip").val(userName, +'&nbsp' + userRole);
        $("#searchBarDiv").hide();
        var data = {"emailId": userEmailId, "role": userRole},
        deepPath = "detailsofretrieveduserfromglobalsearch",
                page = "home",
                callback = protocall.view.showUserDetails;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    showUserDetails: function (result) {
        localStorage.setItem("SUBMENU", "CUSTOMER_PAGE");
        if (PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW) {
            //HeaderTemplate.Menu.DynamicHeaderTemplate();
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            //protocall.displaySpinner(false);
            //protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        }

        console.log("showUserDetails result>>>>>>>>>>>>>>>>", result);
        if(result.resultMap.TypeCode != "4014"){
			$(".content-holder").empty();
			$(".content-holder").addClass("spinner1");
			$(".content-holder").css("opacity", "0.5");
			var requiredUserDetails = result.resultMap.RequiredDetails, requiredUserEmailId = "";
			var requiredUserCarrierId = result.resultMap.RequiredDetails.carrierId;
			var givenRole = result.resultMap.GivenRole;
			if (givenRole == "agencyrepresentative") {
				requiredUserEmailId = result.resultMap.RequiredDetails.agencyRepresentativeId.email;
			} else if (givenRole == "carrierrepresentative") {
				requiredUserEmailId = result.resultMap.RequiredDetails.carrierRepresentativeId.email;
			} else {
				requiredUserEmailId = result.resultMap.RequiredDetails.emailId.email;
			}
			protocall.customer.loadCustomersViewFeed(requiredUserEmailId, requiredUserCarrierId);
			console.log("requiredUserDetails>>>>>>>>>>>>", requiredUserDetails.length);
		}
    }
};
protocall.home = {
    gotAchieveResponse: function () {
        protocall.view.loadHomePage(true);
    },
    /*Naveen 19-2-2015 Chnage start*/

    initHomePage: function () {
        if (sessionStorage.loginType == 'SuperAdmin') {
            //make a server call to get the information about the super admin

            console.log("super admin made the server call");
            var data = "";
            var page = "home";
            var deepPath = "";
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW == true) {
                deepPath = "preferredvendorlistsortedbyname";
            } else {
                deepPath = "superadmindashboarddesign";
            }

            var callback = protocall.view.superAdminPage;
            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        } else {
            HOMEPAGERESPONSE.RECURRINGALERTDFEEDS = [];
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"};
                var path = utils.server.getServerPath("agencydashboarddesign");
                var request = path(data).execute(function (resp) {
                    if (resp.error) {
                        t.server.handleError(resp);
                    } else {
                        localStorage.setItem("customers_data", JSON.stringify(resp.resultMap.userTab));
                        HOMEPAGERESPONSE.CUSTOMERDATA = resp.resultMap.userTab;
                        localStorage.setItem("users", JSON.stringify(resp.resultMap.carrierTab));
                    }
                });
            }
            // alert("home");
            localStorage.setItem("SUBMENU", "HOME_PAGE");
            //protocall.displaySpinner(false);
            console.log("HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.length", HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.length);
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW || HOMEPAGERESPONSE.SORTBYRECENTVIEW || HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED || HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED || HOMEPAGERESPONSE.FEEDSICONCLICKED || HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED) {
                $(".content-holder").addClass("spinner1");
                $(".content-holder").css("opacity", "0.5");
            } else {
                protocall.displaySpinner(true);
            }
            console.log("HOMEPAGERESPONSE.HOMEPAGESTUBBEDDATA", HOMEPAGERESPONSE.HOMEPAGESTUBBEDDATA);
            CONSTANTS.PGNUMBER = 0;
            var pageNumber = ++CONSTANTS.PGNUMBER;
            var data = {"pageNumber": pageNumber},
            deepPath = "",
                    page = "home",
                    callback = protocall.home.loadHomePageData,
                    authId = "",
                    spinnerMsg = "";
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                deepPath = "filterfeedbyalphabetical";
            } else {
                deepPath = "filterfeedbyalertdate";
            }
            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        }

    },
    loadViewArchivedFeedsResponse: function (dataValue) {
        console.log("loadViewArchivedFeedsResponse", dataValue);
        if (dataValue !== "undefined" && dataValue.resultMap !== "undefined") {
            if (dataValue.resultMap.TypeCode !== "undefined" && dataValue.resultMap.TypeCode == "4051") {
                console.log("archived successfully");
                console.log("HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE", HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE);
                var feedBlockValues = $(".feed-block");
                $.each(HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE, function (index, element) {
                    console.log("element", element);
                    $.each(feedBlockValues, function (index, alertFeeds) {
                        if (element == ($(alertFeeds).find(".inner-share-spacing").attr("id"))) {
                            $(this).remove();
                        }
                    });
                });
                HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE = [];
				$("a.archives").css("visibility", "hidden");
			}
            $(".content-holder").removeClass("spinner1");
        }
    },
    /*Naveen 19-2-2015 Chnage end*/
    initLoginPage: function () {

        var template = LoginTemplate.login.staticLoginTemplate();
        $(".container").addClass("container");
        $(".container").removeClass("container-maxwidth");
        $("#page").empty();
        $("#page").append($(template));
		$("#id_loginfadeinout").fadeIn();
        $("#id_loginfadeinout").fadeIn("slow");
        $("#id_loginfadeinout").fadeIn(3000);
		if(HOMEPAGERESPONSE.SIGNUPREGISTRATIONDONE){
			var text = "Registered Successfully";
			$(".signup-success").html(text);
			$("#signUpSuccess").fadeIn();
			$("#signUpSuccess").fadeIn("slow");
			//$("#signUpSuccess").fadeOut("slow");
			$("#signUpSuccess").fadeOut(3000);
			protocall.displaySpinner(false);
		} else {
			$(".signup-success").html("");
		}
    },
    initSignUpPage: function () {
        var template = LoginTemplate.login.staticSignUpTemplate();
        $(".container").addClass("container");
        $(".container").removeClass("container-maxwidth");
        $("#page").empty();
        $("#page").append($(template));
        $(".c_signup").fadeIn();
        $(".c_signup").fadeIn("slow");
        $(".c_signup").fadeIn(3000);
    },
    initResetPasswordPage: function () {
        var template = LoginTemplate.login.staticResetPasswordTemplate();
        $(".container").addClass("container");
        $(".container").removeClass("container-maxwidth");
        $("#page").empty();
        $("#page").append($(template));
        $(".c_resetpassword").fadeIn();
        $(".c_resetpassword").fadeIn("slow");
        $(".c_resetpassword").fadeIn(3000);
    },
    /*Naveen 19-2-2015 Chnage start*/
    loadHomePageData: function (data, page) {
        console.log("data", data);
        if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED || HOMEPAGERESPONSE.POLICYALERTCLICKED || HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED || HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED || HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED || HOMEPAGERESPONSE.FEEDSICONCLICKED) {
            HOMEPAGERESPONSE.RECURRINGALERTDFEEDS = [];
        }
        protocall.util.viewingHomePageData(data);
    },
    loadingAlertFeeds: function (pageNumber, deepPath, page) {
        console.log("page number------>", pageNumber);
        var data = {"pageNumber": pageNumber};
        callback = protocall.home.loadingHomePageFeeds;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    loadingHomePageFeeds: function (data, page) {
        protocall.util.viewingHomePageData(data);
    },
    loadFeed: function (tempObj) {
		var deepPath = "",page = "";
        $(".content-holder").empty();
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
		 var html = staticTemplate.home.staticFeedViewTemplate(tempObj);
        $(".content-holder").append($(html));
		if(tempObj.gender == ""){
			$(".gender-show").css("display","none");
		} else {
			$(".gender-show").css("display","block");
		}
		if(tempObj.birthday == ""){
			$(".birthday-show").css("display","none");
			$(".birthday-icon").css("display","none");
		} else {
			$(".gender-show").css("display","block");
			$(".birthday-icon").css("display","block");
		}
		var data = {
            "userId": tempObj.userEmail,
            "alertId": tempObj.alertId
        };
       var deepPath = "clickonalertfeed";
        var page = "home";
        var callback = protocall.home.loadViewRelatedFeeds;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        protocall.events.GlobalContainerScrollevent();
    },
    loadViewRelatedFeeds: function (dataValue) {
        var policyDetailsValues = {}, insurancePolicyDetails = "";
        HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED = true;
        CONSTANTS.HASNEXTPAGE = false;
        console.log("responseData>>>>>>>>>>>>", dataValue);
        var feedHTML = "";
        if (dataValue.resultMap.TypeCode !== "undefined" && dataValue.resultMap.TypeCode == "4011") {
            if (dataValue.resultMap.RelatedFeeds !== "undefined" && dataValue.resultMap.RelatedFeeds.length !== "undefined" && dataValue.resultMap.RelatedFeeds.length !== 0) {
                var relatedFeedsValue = dataValue.resultMap.RelatedFeeds;
                HOMEPAGERESPONSE.RELATEDFEEDS = dataValue.resultMap.RelatedFeeds;
                HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS = dataValue.resultMap.CommonUserDetails;
                HOMEPAGERESPONSE.RELATEDFEEDSLOADED = true;
                policyDetailsValues = dataValue.resultMap.PoliciesDetails;
                if (policyDetailsValues !== "undefined" && policyDetailsValues.length !== 0) {
                    $.each(policyDetailsValues, function (index, policyDetail) {
                        insurancePolicyDetails += staticTemplate.home.insurencePolicyDetails(policyDetail);
                    });
                    $(".policy-main-blk").empty();
                    $(".policy-main-blk").append($(insurancePolicyDetails));
                }
                console.log("policyDetailsValues>>>>>>>>>>>>", policyDetailsValues);
                $.each(relatedFeedsValue, function (index, alertDetailsValue) {
                    console.log("alertDetailsValue.alertDetails index", alertDetailsValue.alertDetails.length);
                    var alertType = alertDetailsValue.alertDetails.type;
                    feedHTML += template.viewRelatedFeeds(alertDetailsValue, alertType);
                });
                if (feedHTML == "") {
                    feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
                }
                console.log("policyDetailsValues.length", policyDetailsValues.length);
                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");
            }
        } else if (dataValue.resultMap.TypeCode !== "undefined" && dataValue.resultMap.TypeCode == "4014") {
            $(".content-holder").empty();
            $(".content-holder").html(dataValue.resultMap.AlertMessage);
        }
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(feedHTML));
        $(".content-holder").removeClass("spinner1");
        $(".content-holder").css("opacity", "1");
    },
    displayMyAlertsFeeds: function () {
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = true;
        HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
        CONSTANTS.PGNUMBER = 0;


        var page = "home",
                pageNumber = ++CONSTANTS.PGNUMBER,
                data = {"pageNumber": 1},
        deepPath = "filterfeedbyalertdate",
                callback = protocall.home.loadHomePageData;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    displayArchiveFeeds: function () {
        var totalLen = 1, totalHTML = "";
        var archiveTemplate = staticTemplate.home.staticArchiveFeedTemplate();
        totalHTML = archiveTemplate;
        $(".content-holder").empty();
        $(".content-holder").append($(totalHTML));
        protocall.events.GlobalContainerScrollevent();
    },
    displayIncidentsFeeds: function () {
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = true;
        HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = false;
        CONSTANTS.PGNUMBER = 0;
        var page = "home",
                pageNumber = ++CONSTANTS.PGNUMBER,
                data = {"pageNumber": pageNumber},
        deepPath = "filterfeedbyalertdate",
                callback = protocall.home.loadHomePageData;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        var page = "carriers";
        var data = {},
                deepPath = "carrierdashboarddesign",
                page = "home",
                callback = protocall.carrier.getresponsecarrieragency,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    displayPoliciesFeeds: function () {
        HOMEPAGERESPONSE.POLICYALERTCLICKED = true;
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = false;
        CONSTANTS.PGNUMBER = 0;
        var page = "home",
                pageNumber = ++CONSTANTS.PGNUMBER,
                data = {"pageNumber": pageNumber},
        deepPath = "filterfeedbyalertdate",
                callback = protocall.home.loadHomePageData;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    }
    /*Naveen 19-2-2015 Chnage end*/
};
protocall.carrier = {
    getresponseagencydetails: function (data) {
        localStorage.setItem("AGENCY_ADMIN_TOTAL_DETAILS", JSON.stringify(data));
    },
    getresponsecarrieragency: function (data) {
        console.log("manojkrish", data);
        // if (data.resultMap.TypeCode == "4011") {
        //  alert("d");
        localStorage.setItem("CARRIERAGENCYTOTALDETAILS", JSON.stringify(data));
        localStorage.setItem("customers_data", JSON.stringify(data.resultMap.customerTab));
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            if (localStorage.LoginType == 'Admin') {
                HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.userTab;
            }
        } else {
            if (localStorage.LoginType == 'Admin') {
                HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.customerTab.CustomerDetails;
            } else {
                HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.customerTab.userDetails;
            }
        }
        // }
        //HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.customerTab;
    },
    initAgenciesPage: function () {
        localStorage.setItem("SUBMENU", "AGENICES_PAGE");
        CustomerdynamicTemplate.customer.loadCarrierOwnerAgenciesPage(null);
    },
    initCarrierOwnerAgenciesPage: function () {
        localStorage.setItem("SUBMENU", "CARRIERS_AGENCY_PAGE");
        //   alert("o");
        CustomerdynamicTemplate.customer.loadCarrierOwnerAgenciesPage(null);
    },
    initAgencyPage: function () {

//        var page = "agency";
//        var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
//        deepPath = "agencydashboarddesign",
        //                page = "home",
        AgencydynamicTemplate.agency.agencyDetailViewTemplate();
//                authId = "",
//                spinnerMsg = "";
//        utils.server.makeServerCall(page, data, callback, deepPath);

    },
    initCarrierPage: function () {

        localStorage.setItem("SUBMENU", "CARRIER_PAGE");
        localStorage.mycarvalue1 = "mysortselected";
        localStorage.mycarvalue2 = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            if (localStorage.getItem("AGENCYCARRIERTABDATA") == undefined) {
                var page = "carriers";
                var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
                deepPath = "agencydashboarddesign",
                        page = "home",
                        callback = CarrierdynamicTemplate.carrier.loadcarriercontent,
                        authId = "",
                        spinnerMsg = "";
                utils.server.makeServerCall(page, data, callback, deepPath);
            } else {
                CarrierdynamicTemplate.carrier.loadcarriercontent(null, null);
            }
        } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            //  var page = "carriers";
            // var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
            // deepPath = "agencydashboarddesign",
            //   page = "home",
            CarrierdynamicTemplate.carrier.loadcarriercontent();
            // authId = "",
            //spinnerMsg = "";
            //utils.server.makeServerCall(page, data, callback, deepPath);
        } else if (localStorage.LoginType == 'SuperAdmin') {
            localStorage.setItem("TABNAME", "Carriers");
            CarrierdynamicTemplate.carrier.loadcarriercontent();
        }


    },
    initCarrierPageSort: function () {


        var page = "carriers";
        var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
        deepPath = "carrierlistsortedbyname",
                page = "home",
                callback = CarrierdynamicTemplate.carrier.loadcarriercontentSort,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    loadCarrierAdminAssociatedCustomers: function () {

        var totalHTML = "<div>No Records </div>";
        var resp = JSON.parse(localStorage.getItem("ASSOCIATEFEED"));
        //$("#id-carrierassociatedblock").html('');
        //    $("#id-carrierassociatedblock").append(totalHTML);

        // alert(resp.resultMap.agencyTab[0].AssociatedCustomerDetail.length);

        //   try {
        if (resp.resultMap.agencyTab[0].AssociatedCustomerDetail.length != undefined) {
            if (resp.resultMap.agencyTab[0].AssociatedCustomerDetail.length > 0) {
                totalHTML = "";
            }
            for (var index = 0; index < resp.resultMap.agencyTab[0].AssociatedCustomerDetail.length; index++) {

                var name = resp.resultMap.agencyTab[0].AssociatedCustomerDetail[index].firstName;
                // alert(name);
                var location = resp.resultMap.agencyTab[0].AssociatedCustomerDetail[index].residentialCity + "," + resp.resultMap.agencyTab[0].AssociatedCustomerDetail[index].residentialState;
                var email = resp.resultMap.agencyTab[0].AssociatedCustomerDetail[index].emailId.email;
                var carrierid = resp.resultMap.agencyTab[0].AssociatedCustomerDetail[index].carrierId;
                var image = resp.resultMap.agencyTab[0].AssociatedCustomerDetail[index].profilePicture;
                // alert(name);
                if (name == undefined) {
                    name = "";
                }
                if (location == undefined) {
                    location = "";
                }
                if (email == undefined) {
                    email = "";
                }

                // var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                if (image == undefined) {
                    image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                } else {
                    image = "https://proto-call-test.appspot.com/file/" + image;
                }
//rep id

                var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="dt-viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                        + 'alt="" class="carrier-img-width"> '
                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                        + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                        + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                totalHTML += associateBlock;
            }
        }
        //  } //catch (err) {
        //  totalHTML = "<div>No Records </div>";
        // }

        //        alert(totalHTML);
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
//            }
        //            
        var Omega = '\u003E';
        $(".mb-submenu-in").empty();
        $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap CarrierAgencies t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"carrieragency\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                + "<span class=\"sub-menu-text inline-block v-align-mid\"> AGENCIES </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div><div class=\"tab-rb-submenu inline-block v-align-mid\" style=\"width:69%;\"><div class=\"tab-rb-submenu-in-block p-relative\"><div href=\"#\" class=\"snap submenu-sort right f-sz-16 ptsans-light p-relative\" data-type=\"page\" data-submenu=\"sortbycustomer\"><div class=\"sort-text f-italic\">Sort by</div><div class=\"sprite-im drop-down-icon submenu-drop-icon\">&nbsp;</div></div>"
                + "<a href=\"#\" class=\"snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative\" data-type=\"page\" data-submenu=\"editcarrierowner_agencydetails\"  style=\"display:none;\">"
                + "<div class=\"sprite-im edit-icon inline-block tab-icon v-align-mid\" style=\"display:inline-block;margin-left:0px;margin-right: 5px;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" > Edit </div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a></div></div>");
        //        });
    },
    loadCarrierAdminAssociatedRep: function () {

        var totalHTML = "<div>No Records </div>";
        var resp = JSON.parse(localStorage.getItem("ASSOCIATEFEED"));
        //$("#id-carrierassociatedblock").html('');
        //    $("#id-carrierassociatedblock").append(totalHTML);

        //   try {
        if (resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail.length != undefined) {
            if (resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail.length > 0) {
                totalHTML = "";
            }
            for (var index = 0; index < resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail.length; index++) {

                var name = resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail[index].name;
                // alert(name);
                var location = resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail[index].location;
                //  var email = resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail[index].emailId.email;
                var email = undefined;
                var carrierid = resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail[index].agencyRepresentativeId.email;
                //  var image = resp.resultMap.AssociatedRepresentatives[index].profilePicture;

                var image = undefined;
                // alert(name);
                if (name == undefined) {
                    name = "";
                }
                if (location == undefined) {
                    location = "";
                }
                if (email == undefined) {
                    email = "";
                }

                // var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                if (image == undefined) {
                    image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                } else {
                    image = "https://proto-call-test.appspot.com/file/" + image;
                }
//rep id

                var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view  left p-relative" data-type=""> <div class=" p-relative"> <div class="associated-background p-relative">'
                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                        + 'alt="" class="carrier-img-width"> '
                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                        + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                        + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                totalHTML += associateBlock;
            }
        }
//        } catch (err) {
//            totalHTML = "<div>No Records </div>";
//        }

        //        alert(totalHTML);
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
//            }
        //        });
    },
    loadCarrierAssociatedCustomers: function () {

        var totalHTML = "<div>No Records </div>";
        var resp = JSON.parse(localStorage.getItem("carrierrepcustomers_data"));
        //$("#id-carrierassociatedblock").html('');
        //    $("#id-carrierassociatedblock").append(totalHTML);

        try {
            if (resp.resultMap.agencyTab[0].associatedCustomers.length != undefined) {
                if (resp.resultMap.agencyTab[0].associatedCustomers.length > 0) {
                    totalHTML = "";
                }
                for (var index = 0; index < resp.resultMap.agencyTab[0].associatedCustomers.length; index++) {

                    var name = resp.resultMap.agencyTab[0].associatedCustomers[index].firstName;
                    // alert(name);
                    var location = resp.resultMap.agencyTab[0].associatedCustomers[index].residentialCity + "," + resp.resultMap.agencyTab[0].associatedCustomers[index].residentialState;
                    var email = resp.resultMap.agencyTab[0].associatedCustomers[index].emailId.email;
                    var carrierid = resp.resultMap.agencyTab[0].associatedCustomers[index].carrierId;
                    var image = resp.resultMap.agencyTab[0].associatedCustomers[index].profilePicture;
                    // alert(name);
                    if (name == undefined) {
                        name = "";
                    }
                    if (location == undefined) {
                        location = "";
                    }
                    if (email == undefined) {
                        email = "";
                    }

                    // var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    if (image == undefined) {
                        image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    } else {
                        image = "https://proto-call-test.appspot.com/file/" + image;
                    }
//rep id

                    var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="dt-viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                            + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                            + 'alt="" class="carrier-img-width"> '
                            + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                            + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                            + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                            + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                    totalHTML += associateBlock;
                }
            }
        } catch (err) {
            totalHTML = "<div>No Records </div>";
        }

        //        alert(totalHTML);
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
//            }
        //        });
    },
    loadCarrierAssociatedReps: function () {
        var totalHTML = "<div>No Records </div>";
        var resp = JSON.parse(localStorage.getItem("carrierrepcustomers_data"));
        //$("#id-carrierassociatedblock").html('');
        //    $("#id-carrierassociatedblock").append(totalHTML);
        try {
            if (resp.resultMap.agencyTab[0].associatedRepresentative.length != undefined) {
                if (resp.resultMap.agencyTab[0].associatedRepresentative.length > 0) {
                    totalHTML = "";
                }
                for (var index = 0; index < resp.resultMap.agencyTab[0].associatedRepresentative.length; index++) {

                    var name = resp.resultMap.agencyTab[0].associatedRepresentative[index].name;
                    var location = resp.resultMap.agencyTab[0].associatedRepresentative[index].location;
                    var email = resp.resultMap.agencyTab[0].associatedRepresentative[index].agencyRepresentativeId.email;
                    var carrierid = resp.resultMap.agencyTab[0].associatedRepresentative[index].agencyId;
                    var image = resp.resultMap.agencyTab[0].associatedRepresentative[index].profilePicture;
                    // alert(name);
                    if (name == undefined) {
                        name = "";
                    }
                    if (location == undefined) {
                        location = "";
                    }
                    if (email == undefined) {
                        email = "";
                    }

                    // var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    if (image == undefined) {
                        image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    } else {
                        image = "https://proto-call-test.appspot.com/file/" + image;
                    }
//rep id

                    var associateBlock = '<div id=' + email + '  value=' + carrierid + '  class="carrier-feed-associated-view   left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                            + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                            + 'alt="" class="carrier-img-width"> '
                            + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                            + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                            + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                            + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                    totalHTML += associateBlock;
                }
            }
        } catch (err) {
            totalHTML = "<div>No Records </div>";
        }

        //        alert(totalHTML);
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
    },
    loadAssociatedAgencies: function () {
        var totalHTML = "<div>No Records </div>";
        var resp = JSON.parse(localStorage.getItem("carrierrepcustomers_data"));
        //$("#id-carrierassociatedblock").html('');
        //    $("#id-carrierassociatedblock").append(totalHTML);
        try {
            if (resp.resultMap.customerTab.length != undefined) {
                if (resp.resultMap.customerTab.length > 0) {
                    totalHTML = "";
                }
                for (var index = 0; index < resp.resultMap.customerTab.length; index++) {

                    var name = resp.resultMap.customerTab[index].associatedAgency.agencyName;
                    var location = resp.resultMap.customerTab[index].associatedAgency.city + "," + resp.resultMap.customerTab[index].associatedAgency.state;
                    var email = resp.resultMap.customerTab[index].associatedAgency.emailId.email;
                    var carrierid = resp.resultMap.customerTab[index].associatedAgency.carrierAgencyId;
                    var image = resp.resultMap.customerTab[index].associatedAgency.agencyLogo;
                    // alert(name);
                    if (name == undefined) {
                        name = "";
                    }
                    if (location == undefined) {
                        location = "";
                    }
                    if (email == undefined) {
                        email = "";
                    }

                    // var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    if (image == undefined) {
                        image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    } else {
                        image = "https://proto-call-test.appspot.com/file/" + image;
                    }
//rep id

                    var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view myagenciesView left p-relative" data-type="viewagenciesfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                            + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                            + 'alt="" class="carrier-img-width"> '
                            + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                            + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                            + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                            + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                    totalHTML += associateBlock;
                }
            }
        } catch (err) {
            totalHTML = "<div>No Records </div>";
        }

        //        alert(totalHTML);
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
//            }
        //        });
    },
    loadCarrierOwnerCustomersAssociatedAgencies: function () {
        var totalHTML = "<div>No Records </div>";
        var resp = JSON.parse(localStorage.getItem("ASSOCIATEFEED"));
        // alert("1"+resp.resultMap.customerTab[1].AssociatedAgencyRepresentativeDetails.name);

        //$("#id-carrierassociatedblock").html('');
        //    $("#id-carrierassociatedblock").append(totalHTML);
        //        try {
        if (resp.resultMap.customerTab[1].AssociatedAgencyRepresentativeDetails = undefined) {
//                if (resp.resultMap.customerTab[1].AssociatedAgencyRepresentativeDetails.length > 0) {
//                    totalHTML = "";
            //                }
            //.for (var index = 0; index < resp.resultMap.customerTab[1].AssociatedAgencyRepresentativeDetails.length; index++) {

            var name = resp.resultMap.customerTab[1].AssociatedAgencyRepresentativeDetails.name;
            var location = resp.resultMap.customerTab[1].AssociatedAgencyRepresentativeDetails.location;
            var email = resp.resultMap.customerTab[1].AssociatedAgencyRepresentativeDetails.agencyRepresentativeId.email;
            var carrierid = resp.resultMap.customerTab[1].AssociatedAgencyRepresentativeDetails.agencyId;
            // var image = resp.resultMap.AssociatedRepresentatives[index].email;

            // alert(name);

            if (name == undefined) {
                name = "";
            }
            if (location == undefined) {
                location = "";
            }
            if (email == undefined) {
                email = "";
            }

            var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    if (image == undefined) {
//                        image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    } else {
//                        image = "https://proto-call-test.appspot.com/file/" + image;
//
//                    }
//rep id

            var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view  carrier-feed-assigntocustomeroverlay-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                    + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                    + 'alt="" class="carrier-img-width"> '
                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                    + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                    + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                    + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
            totalHTML += associateBlock;
            // alert(totalHTML);
            // }
        }
//        } catch (err) {
//            totalHTML = "<div>No Records </div>";
//        }

        //        alert(totalHTML);
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        //            }
    },
    loadCarrierOwnerCustomersAssociatedReps: function () {
        var totalHTML = "<div>No Records </div>";
        var resp = JSON.parse(localStorage.getItem("ASSOCIATEFEED"));
        //$("#id-carrierassociatedblock").html('');
        //    $("#id-carrierassociatedblock").append(totalHTML);
        try {
            if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails != undefined) {
                if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails.length > 0) {
                    totalHTML = "";
                }
                for (var index = 0; index < resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails.length; index++) {

                    var name = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].name;
                    var location = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].location;
                    var email = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].carrierRepresentativeId.email;
                    var carrierid = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].carrierId;
                    // var image = resp.resultMap.AssociatedRepresentatives[index].email;

                    // alert(name);

                    if (name == undefined) {
                        name = "";
                    }
                    if (location == undefined) {
                        location = "";
                    }
                    if (email == undefined) {
                        email = "";
                    }

                    var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    if (image == undefined) {
//                        image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    } else {
//                        image = "https://proto-call-test.appspot.com/file/" + image;
//
//                    }
//rep id

                    var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view  carrier-feed-assigntocustomeroverlay-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                            + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                            + 'alt="" class="carrier-img-width"> '
                            + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                            + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                            + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                            + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                    totalHTML += associateBlock;
                }
            }
        } catch (err) {
            totalHTML = "<div>No Records </div>";
        }

        //        alert(totalHTML);
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
//            }
        //        });
    },
    loadAssociatedReps: function () {
        var totalHTML = "<div>No Records </div>";
        var resp = JSON.parse(localStorage.getItem("ASSOCIATEFEED"));
        //$("#id-carrierassociatedblock").html('');
        //    $("#id-carrierassociatedblock").append(totalHTML);
        try {
            if (resp.resultMap.AssociatedRepresentatives.length != undefined) {
                if (resp.resultMap.AssociatedRepresentatives.length > 0) {
                    totalHTML = "";
                }
                for (var index = 0; index < resp.resultMap.AssociatedRepresentatives.length; index++) {

                    var name = resp.resultMap.AssociatedRepresentatives[index].name;
                    var location = resp.resultMap.AssociatedRepresentatives[index].location;
                    var email = resp.resultMap.AssociatedRepresentatives[index].carrierRepresentativeId.email;
                    var carrierid = resp.resultMap.AssociatedRepresentatives[index].carrierId;
                    // var image = resp.resultMap.AssociatedRepresentatives[index].email;

                    // alert(name);

                    if (name == undefined) {
                        name = "";
                    }
                    if (location == undefined) {
                        location = "";
                    }
                    if (email == undefined) {
                        email = "";
                    }

                    var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    if (image == undefined) {
//                        image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    } else {
//                        image = "https://proto-call-test.appspot.com/file/" + image;
//
//                    }
//rep id

                    var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view  carrier-feed-assigntocustomeroverlay-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                            + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                            + 'alt="" class="carrier-img-width"> '
                            + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                            + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                            + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                            + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                    totalHTML += associateBlock;
                }
            }
        } catch (err) {
            totalHTML = "<div>No Records </div>";
        }

        //        alert(totalHTML);
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
//            }
        //        });
    },
    loadAssociatedCustomers: function () {
        var totalHTML = "<div>No Records</div>";
        var resp = JSON.parse(localStorage.getItem("ASSOCIATEFEED"));
        try {
            if (resp.resultMap.AssociatedCustomers.length > 1) {
                totalHTML = "";
            }

            for (var index = 0; index < resp.resultMap.AssociatedCustomers.length; index++) {
                var name = resp.resultMap.AssociatedCustomers[index].firstName;
                var location = resp.resultMap.AssociatedCustomers[index].residentialCity;
                var email = resp.resultMap.AssociatedCustomers[index].emailId.email;
                var carrierid = resp.resultMap.AssociatedCustomers[index].carrierId;
                // var image = resp.resultMap.AssociatedCustomers[index].email;

                //  alert(name);
                if (name == undefined) {
                    name = "";
                }
                if (location == undefined) {
                    location = "";
                }
                if (email == undefined) {
                    email = "";
                }

                var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    if (image == undefined) {
//                        image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    } else {
//                        image = "https://proto-call-test.appspot.com/file/" + image;
//
//                    }

                var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                        + 'alt="" class="carrier-img-width"> '
                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-left">' + name + '</div> '
                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                        + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';
                totalHTML += associateBlock;
            }

        } catch (err) {
            totalHTML = "<div>No Records</div>";
        }
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
    },
    loadCarrierOwner_MyRepsAssociatedCustomers: function (contentHtml) {
        var totalHTML = "<div>No Records</div>";
        var resp = JSON.parse(localStorage.getItem("ASSOCIATEFEED"));
        try {
            if (resp.resultMap.AssociatedCustomers.length > 1) {
                totalHTML = "";
            }

            for (var index = 0; index < resp.resultMap.myRepTab[0].AssociatedCustomerDetails.length; index++) {


                var name = resp.resultMap.myRepTab[0].AssociatedCustomerDetails[index].firstName;
                var location = resp.resultMap.myRepTab[0].AssociatedCustomerDetails[index].residentialCity;
                var email = resp.resultMap.myRepTab[0].AssociatedCustomerDetails[index].emailId.email;
                var carrierid = resp.resultMap.myRepTab[0].AssociatedCustomerDetails[index].carrierId;
                // var image = resp.resultMap.AssociatedCustomers[index].email;

                //  alert(name);
                if (name == undefined) {
                    name = "";
                }
                if (location == undefined) {
                    location = "";
                }
                if (email == undefined) {
                    email = "";
                }

                var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    if (image == undefined) {
//                        image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
//                    } else {
//                        image = "https://proto-call-test.appspot.com/file/" + image;
                //
                //                    }

                var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                        + 'alt="" class="carrier-img-width"> '
                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-left">' + name + '</div> '
                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                        + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div>  ';
                totalHTML += associateBlock;
            }

        } catch (err) {
            totalHTML = "<div>No Records</div>";
        }

        $(".content-holder").empty();
        $(".content-holder").append(contentHtml + totalHTML);
        protocall.events.GlobalContainerScrollevent();
        $("#id-customers-headername").text(" > " + localStorage.getItem("id-customers-headername"));

    },
    openSelect: function (selector) {
        var element = $(selector)[0], worked = false;
        if (document.createEvent) { // all browsers
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            worked = element.dispatchEvent(e);
        } else if (element.fireEvent) { // ie
            worked = element.fireEvent("onmousedown");
        }
        if (!worked) { // unknown browser / error
            //alert("It didn't worked in your browser.");
        }
    },
    loadFeed: function (Carrierid) {
        //var html = staticTemplate.carriers.staticCarrierFeedViewTemplate(Carrierid);
        if (PAGEREFRESH.ISPAGEREFRESHEDFORCARRIERFEEDVIEW) {
            //HeaderTemplate.Menu.DynamicHeaderTemplate();
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            protocall.events.GlobalContainerScrollevent();
            //protocall.displaySpinner(false);
            //protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        }
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.carriers.staticCarrierFeedViewTemplate(Carrierid);
            totalHTML = totalHTML + template;
        }

        if (sessionStorage.loginType != 'SuperAdmin') {
            var dropDownContent = '<div class="associated-carrierview p-relative"> <div class="p-relative ">'
                    + '<select id="id-associatedropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED CUSTOMERS</option><option>ASSOCIATED REPS</option></select> '
                    + '<div id="associatedownarrow" class="p-relative inline-block"> <div id="associatedownarrow" class="id-associatedownarrow sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot">';
            totalHTML = totalHTML + dropDownContent;
        }
        $(".container").addClass("container-maxwidth");
        // $(".container").removeClass("container");
        totalHTML = totalHTML + "</div>";
        console.log("totalHTML>>>>>>>>>>>>>>>>>", totalHTML);
        if (!(PAGEREFRESH.ISPAGEREFRESHEDFORCARRIERFEEDVIEW)) {
            $(".rel-feeds-content").empty();
            $(".rel-feeds-content").append($(totalHTML));
        }
        $(".content-holder").empty();
        $(".content-holder").append($(totalHTML));
        protocall.events.GlobalContainerScrollevent();


        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {

            if (localStorage.LoginType == 'Admin') {
                $(".mb-submenu").empty();
                $(".mb-submenu").append("<div class=\"mb-submenu-in p-relative\"> <div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox snap left f-sz-16 ptsans-light carriers t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> carriers</span><span id=\"id-carrierpage-headertext\"></span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div><div class=\"tab-rb-submenu inline-block v-align-mid\" style=\"width:69%;\"><div class=\"tab-rb-submenu-in-block p-relative\" style='display:none;'><div href=\"#\" class=\"snap submenu-sort right f-sz-16 ptsans-light p-relative\" data-type=\"page\" data-submenu=\"sortbycarrier\" >div class=\"sort-text f-italic\">Recent</div><div class=\"sprite-im drop-down-icon submenu-drop-icon\">&nbsp;</div></div></div></div></div>");
                var Omega = '\u003E';
                $("#id-carrierpage-headertext").text(Omega + "   " + localStorage.getItem("TEMP_CARRIERNAME"));
                $('#id-carrierpage-headertext').prop(Omega + "   " + localStorage.getItem("TEMP_CARRIERNAME"));
            }
        }

        if (sessionStorage.loginType != 'SuperAdmin') {
            localStorage.setItem("ASSOCIATEFEED", null);
            if (localStorage.getItem("ASSOCIATEFEED") == "null") {
                var data = {carrierId: Carrierid};
                //var totalHTML = "";
                var path = utils.server.getServerPath("associatedcustomerandrepresentative");
                var request = path(data).execute(function (resp) {
                    if (resp.error) {
                        t.server.handleError(resp);
                    } else {
                        localStorage.setItem("ASSOCIATEFEED", JSON.stringify(resp));
                        protocall.carrier.loadAssociatedCustomers();
                    }
                });
            }

            protocall.carrier.loadAssociatedCustomers();
        }

    }


};
protocall.customer = {
    initCustomerPage: function () {

        localStorage.setItem("SUBMENU", "CUSTOMER_PAGE");
        localStorage.setItem("ARRAY_CUSTOMERS_LIST", "");
        localStorage.myvalue1 = "mysortselected";
        localStorage.myvalue2 = "";
        if (localStorage.LoginType == undefined) {
            var page = "customers";
            var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
            deepPath = "agencydashboarddesign",
                    page = "customers",
                    callback = CustomerdynamicTemplate.customer.loadcustomercontent,
                    authId = "",
                    spinnerMsg = "";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            if (localStorage.LoginType == 'Admin') {
                var page = "customers";
                var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
                deepPath = "agencydashboarddesign",
                        page = "customers",
                        callback = CustomerdynamicTemplate.customer.loadcustomercontent,
                        authId = "",
                        spinnerMsg = "";
                utils.server.makeServerCall(page, data, callback, deepPath);
            }
            if (localStorage.LoginType == 'Representatives') {
                // alert("1");
                CustomerdynamicTemplate.customer.loadcustomercontent(null, null);
            }
        } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Admin') {
                CustomerdynamicTemplate.customer.loadcarrierAdmincustomercontent(null, null);
            }

            if (localStorage.LoginType == 'Representatives') {
                CustomerdynamicTemplate.customer.loadcarrierRepcustomercontent(null, null);
            }
        } else if (sessionStorage.loginType == 'SuperAdmin') {
            localStorage.setItem("TABNAME", "Customers");
            CustomerdynamicTemplate.customer.loadcustomercontent(null, null);
        }

    },
    initCustomerPageSort: function () {

        var page = "customers";
        var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
        deepPath = "userlistsortedbyname",
                page = "customers",
                callback = CustomerdynamicTemplate.customer.loadcustomercontentSortedbyName,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    loadCustomersViewFeed: function (emailID, carrierId) {

        if (sessionStorage.loginType == 'SuperAdmin') {
            var data = HOMEPAGERESPONSE.SUPERADMINCUSTOMERS;
            localStorage.setItem("ARRAY_CUSTOMERS_LIST", emailID);
            var html = "";
            var status = 0;
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (element.emailId.email == emailID) {

                    html = staticTemplate.customers.staticCustomerViewTemplate(element);
                    status = 1;
                }
            }

            if (status == 0) {
                html = "<div> No Records </div>";
            } else {
                html + "</div>";
            }
            // var totalHTML = html;
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            protocall.events.GlobalContainerScrollevent();
            $(".container").addClass("container-maxwidth");

            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);

            $(".invitereps").css("display", "none");

        } else {
            if (PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW) {
                //HeaderTemplate.Menu.DynamicHeaderTemplate();
                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
                var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                //protocall.displaySpinner(false);
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            }
            var data = JSON.parse(localStorage.getItem("customers_data"));
            console.log("virew c", data);
            localStorage.setItem("ARRAY_CUSTOMERS_LIST", emailID);
            var html = "";
            var status = 0;

            console.log("odoodo--->", data);

            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    for (var index = 0; index < data.length; index++) {
                        var element = data[index].CustomerDetails;
                        if (element.emailId.email == emailID) {
                            html = staticTemplate.customers.staticCustomerViewTemplate(element);
                            status = 1;
                        }
                    }
                } else {
                    for (var index = 0; index < data.length; index++) {
                        var element = data[index].userDetails;
                        if (element.emailId.email == emailID) {
                            html = staticTemplate.customers.staticCustomerViewTemplate(element);
                            status = 1;
                        }
                    }
                }
            } else {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (element.emailId.email == emailID) {
                        html = staticTemplate.customers.staticCustomerViewTemplate(element);
                        status = 1;
                    }
                }
            }


            if (status == 0) {
                html = "<div> No Records </div>";
            } else {
                html + "</div>";
            }


            // var totalHTML = html;
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            protocall.events.GlobalContainerScrollevent();
            $(".container").addClass("container-maxwidth");

            //$(".container").removeClass("container");
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            if (!(PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW)) {
                $(".rel-feeds-content").empty();
                $(".rel-feeds-content").append(html);
            }
            if (localStorage.LoginType == 'Representatives') {
                var Omega = '\u003E';
                $(".mb-submenu-in").empty();
                $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                        + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
            }

            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {

                if (localStorage.LoginType == 'Admin') {
                    var Omega = '\u003E';
                    $(".mb-submenu-in").empty();
                    $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                            + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a><a href=\"/assignrep\" class=\"snap submenu-tab bg-color-green right f-sz-16 ptsans-light assignrep p-relative\" data-type=\"page\" data-submenu=\"assignrep\" style='width: 10%;padding-left: 15px;margin-right: 0px;'><div class=\"sprite-im inline-block tab-icon v-align-mid\" style=\"display:none;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\"> assign rep</div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a></div>");
                }
            }

            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {

                if (localStorage.LoginType == 'Admin') {
                    var Omega = '\u003E';
                    $(".mb-submenu-in").empty();
                    $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                            + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
                }
            }

            localStorage.setItem("ASSOCIATEFEED", null);
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {

                    protocall.carrier.loadAssociatedAgencies();
                }

                if (localStorage.LoginType == 'Admin') {
                    var response = JSON.parse(localStorage.getItem("CARRIERAGENCYTOTALDETAILS"));
                    localStorage.setItem("ASSOCIATEFEED", JSON.stringify(response));
                    protocall.carrier.loadCarrierOwnerCustomersAssociatedReps();
                }
            } else if (localStorage.getItem("ASSOCIATEFEED") == "null") {
                var data = {carrierId: carrierId};
                var path = utils.server.getServerPath("associatedcustomerandrepresentative");
                var request = path(data).execute(function (resp) {
                    if (resp.error) {
                        t.server.handleError(resp);
                    } else {
                        localStorage.setItem("ASSOCIATEFEED", JSON.stringify(resp));
                        protocall.customer.loadAssociateCarrier(carrierId, emailID);
                        if (localStorage.LoginType == undefined) {
                            protocall.carrier.loadAssociatedReps();
                        }
                        if (localStorage.LoginType == 'Admin') {
                            protocall.carrier.loadAssociatedReps();
                        }
                        if (localStorage.LoginType == 'Representatives') {
                            protocall.customer.loadAssociateCarrier(carrierId, emailID);
                        }

                    }
                });
            }

            if (localStorage.LoginType == undefined) {
                protocall.customer.loadAssociateCarrier(carrierId, emailID);
                protocall.carrier.loadAssociatedReps();
            }
            if (localStorage.LoginType == 'Admin') {
                protocall.customer.loadAssociateCarrier(carrierId, emailID);
                protocall.carrier.loadAssociatedReps();
            }


            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        }




    },
    loadSuperAdminIndividualViewFeed: function (idValue) {

        var data = HOMEPAGERESPONSE.HOMEPAGEDATA;
        var html = "";
        var status = 0;
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            if (element.preferredVendorId == idValue) {
                html = staticTemplate.customers.staticHomeIndividulaViewTemplate(element);
                status = 1;
            }
        }

        if (status == 0) {
            html = "<div>No records</div>";
        }

        //   html = staticTemplate.customers.staticAegnciesViewTemplate(data);
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        protocall.events.GlobalContainerScrollevent();
        $(".container").addClass("container-maxwidth");
        //   $(".container").removeClass("container");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append(html);
        protocall.events.GlobalContainerScrollevent();
        var Omega = '\u003E';
        $("#id-carrierpage-headertext").text(Omega + "   " + localStorage.getItem("id-customers-headername"));
        $('#id-carrierpage-headertext').prop('title', localStorage.getItem("id-customers-headername"));
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);

    },
    loadAgenciesViewFeed: function (emailID, carrierId) {


        var data = "";

        if (sessionStorage.loginType == 'SuperAdmin') {

            data = HOMEPAGERESPONSE.SUPERADMINAGENCIES;
            localStorage.setItem("ARRAY_CUSTOMERS_LIST", emailID);
            var html = "";
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (element.emailId.email == emailID) {
                    html = staticTemplate.customers.staticAegnciesViewTemplate(element);
                    status = 1;
                }
            }

            //   html = staticTemplate.customers.staticAegnciesViewTemplate(data);
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            protocall.events.GlobalContainerScrollevent();
            $(".container").addClass("container-maxwidth");
            //   $(".container").removeClass("container");
            $(".rel-feeds-content").empty();
            $(".rel-feeds-content").append(html);
            protocall.events.GlobalContainerScrollevent();
            var Omega = '\u003E';
            $("#id-carrierpage-headertext").text(Omega + "   " + localStorage.getItem("id-customers-headername"));
            $('#id-carrierpage-headertext').prop('title', localStorage.getItem("id-customers-headername"));

            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);

        }
        else {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    var response = JSON.parse(localStorage.getItem("CARRIERAGENCYTOTALDETAILS"));
                    data = response.resultMap.agencyTab[0].AgencyDetail;
                } else {
                    data = JSON.parse(localStorage.getItem("agencies_data"));
                }
            } else {
                data = JSON.parse(localStorage.getItem("agencies_data"));
            }


            localStorage.setItem("ARRAY_CUSTOMERS_LIST", emailID);
            var html = "";
            var status = 0;
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    html = staticTemplate.customers.staticAegnciesViewTemplate(data);
                    status = 1;
                } else {
                    html = staticTemplate.customers.staticAegnciesViewTemplate(data);
                    status = 1;
                }
            } else {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (element.emailId.email == emailID) {
                        html = staticTemplate.customers.staticAegnciesViewTemplate(element);
                        status = 1;
                    }
                }
            }
            if (status == 0) {
                html = "<div> No Records </div>";
            } else {
                html + "</div>";
            }


            // var totalHTML = html;
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            protocall.events.GlobalContainerScrollevent();
            $(".container").addClass("container-maxwidth");
            //   $(".container").removeClass("container");
            $(".rel-feeds-content").empty();
            $(".rel-feeds-content").append(html);
            protocall.events.GlobalContainerScrollevent();
            var Omega = '\u003E';
            $("#id-carrierpage-headertext").text(Omega + "   " + localStorage.getItem("id-customers-headername"));
            $('#id-carrierpage-headertext').prop('title', localStorage.getItem("id-customers-headername"));
//        if (localStorage.LoginType == 'Representatives') {
//            var Omega = '\u003E';
//            $(".mb-submenu-in").empty();
//            $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div>"
//                    + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
            //        }
            localStorage.setItem("ASSOCIATEFEED", null);
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {

                    protocall.carrier.loadCarrierAssociatedCustomers();
                    //protocall.carrier.loadCarrierAssociatedReps();
                    var Omega = '\u003E';
                    $(".mb-submenu-in").empty();
                    $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap agencies-info t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"agencies\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                            + "<span class=\"sub-menu-text inline-block v-align-mid\"> AGENCIES </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
                }
                if (localStorage.LoginType == 'Admin') {
                    var response = JSON.parse(localStorage.getItem("CARRIERAGENCYTOTALDETAILS"));
                    localStorage.setItem("ASSOCIATEFEED", JSON.stringify(response));
                    protocall.carrier.loadCarrierAdminAssociatedCustomers();
                    // protocall.carrier.loadCarrierAssociatedCustomers();
                    //protocall.carrier.loadCarrierAssociatedReps();


                }
            } else if (localStorage.getItem("ASSOCIATEFEED") == "null") {
                var data = {carrierId: carrierId};
                var path = utils.server.getServerPath("associatedcustomerandrepresentative");
                var request = path(data).execute(function (resp) {
                    if (resp.error) {
                        t.server.handleError(resp);
                    } else {
                        localStorage.setItem("ASSOCIATEFEED", JSON.stringify(resp));
                        if (localStorage.LoginType == undefined) {
                            protocall.carrier.loadAssociatedReps();
                        }

                    }
                });
            }

        }


        $(".content-holder").removeClass("spinner1");
        $(".content-holder").css("opacity", "1");
        protocall.events.GlobalContainerScrollevent();
    },
    loadAssociateCarrier: function (carrierId, emailID) {
        var totalHTML = "<div>No Records </div>";
        localStorage.setItem("ASSOCIATE_CARRIER", "<div>No Records </div>");
        var userTab = JSON.parse(localStorage.getItem("customers_data"));
        console.log("djhdhhdg", userTab);
        for (var index = 0; index < userTab.length; index++) {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    var temp_carriedid = userTab[index].CustomerDetails.carrierId;
                    var temp_emailid = userTab[index].CustomerDetails.emailId.email;
                    if (temp_carriedid == carrierId && temp_emailid == emailID) {
                        var agencyemail = userTab[index].CustomerDetails.agencyRepresentativeId.email;
                        var alertlistarr = [];
                        alertlistarr = userTab[index].CustomerDetails.policyListWithCarrier;
                        if (alertlistarr.length > 0) {
                            console.log("", emailID + "" + agencyemail + "" + carrierId + "" + alertlistarr);
                            var datalist = {userId: emailID, agencyRepresentativeId: agencyemail, carrierId: carrierId, alertList: alertlistarr};
							var path = utils.server.getServerPath("userwithpoliciesandotherproduct");
                            var request = path(datalist).execute(function (resp) {
                                if (resp.error) {
                                    t.server.handleError(resp);
                                } else {
                                    var carrierIds = "";

                                    console.log(resp);
                                    for (var i = 0; i < resp.resultMap.Policies.length; i++) {
                                        if (totalHTML == "<div>No Records </div>") {
                                            totalHTML = "";
                                        }

                                        var carrierPic = resp.resultMap.Policies[i].carrierDetails.carrierLogo;
                                        var carrierId = resp.resultMap.Policies[i].carrierDetails.carrierId;
                                        var carrierName = resp.resultMap.Policies[i].carrierDetails.carrierName;
                                        var carrierEmail = resp.resultMap.Policies[i].carrierDetails.emailId.email;
                                        var carrierLocation = resp.resultMap.Policies[i].carrierDetails.city + "," + resp.resultMap.Policies[i].carrierDetails.state;
                                        carrierIds += "," + carrierId;
                                        if (carrierPic != undefined) {
                                            carrierPic = "https://proto-call-test.appspot.com/file/" + carrierPic;
                                        } else {
                                            carrierPic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                                        }

                                        if (carrierName == undefined)
                                        {
                                            carrierName = ' ';
                                        }

                                        if (carrierEmail == undefined)
                                        {
                                            carrierEmail = ' ';
                                        }
                                        if (carrierLocation == undefined)
                                        {
                                            carrierLocation = ' ';
                                        }

//<div class="carrier-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview" 
//data-id="5587210c-3fb9-4060-96d0-e92a4badf67d">view </div>

                                        var associateBlock = '';
                                        associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative snap" data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                                + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                                                + 'alt="" class="carrier-img-width"> '
                                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                                + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                                                + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                                                + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                                        if (localStorage.LoginType == 'Representatives') {
                                            associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative " data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                                                    + 'alt="" class="carrier-img-width"> '
                                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                                    + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                                                    + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                                                    + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                                        }

                                        if (totalHTML == "") {
                                            totalHTML += associateBlock;
                                        } else {
                                            if (totalHTML.indexOf(associateBlock) > -1) {
                                            } else {
                                                totalHTML += associateBlock;
                                            }
                                        }

                                    }

                                    carrierIds = "";
                                    localStorage.setItem("ASSOCIATE_CARRIER", totalHTML);
                                    //  alert(localStorage.getItem("ASSOCIATE_CARRIER"));
                                    if (localStorage.LoginType == 'Representatives') {
                                        $("#id-carrierassociatedblock").html('');
                                        if (localStorage.getItem("ASSOCIATE_CARRIER") == undefined || localStorage.getItem("ASSOCIATE_CARRIER") == "") {
                                            localStorage.setItem("ASSOCIATE_CARRIER", "<div>No Records</div>");
                                        } else {
                                            $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                                        }

                                        // $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                                    }

                                }
                            });
                        }
                    }
                } else {
                    var temp_carriedid = userTab[index].userDetails.carrierId;
                    var temp_emailid = userTab[index].userDetails.emailId.email;
                    if (temp_carriedid == carrierId && temp_emailid == emailID) {
                        var agencyemail = userTab[index].userDetails.agencyRepresentativeId.email;
                        var alertlistarr = [];
                        alertlistarr = userTab[index].userDetails.policyListWithCarrier;
                        if (alertlistarr.length > 0) {
                            console.log("", emailID + "" + agencyemail + "" + carrierId + "" + alertlistarr);
                            var datalist = {userId: emailID, agencyRepresentativeId: agencyemail, carrierId: carrierId, alertList: alertlistarr};
                            var path = utils.server.getServerPath("userwithpoliciesandotherproduct");
                            var request = path(datalist).execute(function (resp) {
                                if (resp.error) {
                                    t.server.handleError(resp);
                                } else {
                                    var carrierIds = "";

                                    console.log(resp);
                                    for (var i = 0; i < resp.resultMap.Policies.length; i++) {
                                        if (totalHTML == "<div>No Records </div>") {
                                            totalHTML = "";
                                        }

                                        var carrierPic = resp.resultMap.Policies[i].carrierDetails.carrierLogo;
                                        var carrierId = resp.resultMap.Policies[i].carrierDetails.carrierId;
                                        var carrierName = resp.resultMap.Policies[i].carrierDetails.carrierName;
                                        var carrierEmail = resp.resultMap.Policies[i].carrierDetails.emailId.email;
                                        var carrierLocation = resp.resultMap.Policies[i].carrierDetails.city + "," + resp.resultMap.Policies[i].carrierDetails.state;
                                        carrierIds += "," + carrierId;
                                        if (carrierPic != undefined) {
                                            carrierPic = "https://proto-call-test.appspot.com/file/" + carrierPic;
                                        } else {
                                            carrierPic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                                        }

                                        if (carrierName == undefined)
                                        {
                                            carrierName = ' ';
                                        }

                                        if (carrierEmail == undefined)
                                        {
                                            carrierEmail = ' ';
                                        }
                                        if (carrierLocation == undefined)
                                        {
                                            carrierLocation = ' ';
                                        }

//<div class="carrier-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview" 
//data-id="5587210c-3fb9-4060-96d0-e92a4badf67d">view </div>

                                        var associateBlock = '';
                                        associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative snap" data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                                + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                                                + 'alt="" class="carrier-img-width"> '
                                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                                + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                                                + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                                                + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                                        if (localStorage.LoginType == 'Representatives') {
                                            associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative " data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                                                    + 'alt="" class="carrier-img-width"> '
                                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                                    + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                                                    + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                                                    + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                                        }

                                        if (totalHTML == "") {
                                            totalHTML += associateBlock;
                                        } else {
                                            if (totalHTML.indexOf(associateBlock) > -1) {
                                            } else {
                                                totalHTML += associateBlock;
                                            }
                                        }

                                    }

                                    carrierIds = "";
                                    localStorage.setItem("ASSOCIATE_CARRIER", totalHTML);
                                    //  alert(localStorage.getItem("ASSOCIATE_CARRIER"));
                                    if (localStorage.LoginType == 'Representatives') {
                                        $("#id-carrierassociatedblock").html('');
                                        if (localStorage.getItem("ASSOCIATE_CARRIER") == undefined || localStorage.getItem("ASSOCIATE_CARRIER") == "") {
                                            localStorage.setItem("ASSOCIATE_CARRIER", "<div>No Records</div>");
                                        } else {
                                            $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                                        }

                                        // $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                                    }

                                }
                            });
                        }
                    }
                }
            } else {
                if (localStorage.LoginType == 'Admin') {
                    var temp_carriedid = userTab[index].carrierId;
                    var temp_emailid = userTab[index].emailId.email;
                    if (temp_carriedid == carrierId && temp_emailid == emailID) {
                        var agencyemail = userTab[index].agencyRepresentativeId.email;
                        var alertlistarr = [];
                        alertlistarr = userTab[index].policyListWithCarrier;
                        if (alertlistarr.length > 0) {
                            console.log("", emailID + "" + agencyemail + "" + carrierId + "" + alertlistarr);
                            var datalist = {userId: emailID, agencyRepresentativeId: agencyemail, carrierId: carrierId, alertList: alertlistarr};
                            var path = utils.server.getServerPath("userwithpoliciesandotherproduct");
                            var request = path(datalist).execute(function (resp) {
                                if (resp.error) {
                                    t.server.handleError(resp);
                                } else {
                                    var carrierIds = "";

                                    console.log(resp);
                                    for (var i = 0; i < resp.resultMap.Policies.length; i++) {
                                        if (totalHTML == "<div>No Records </div>") {
                                            totalHTML = "";
                                        }

                                        var carrierPic = resp.resultMap.Policies[i].carrierDetails.carrierLogo;
                                        var carrierId = resp.resultMap.Policies[i].carrierDetails.carrierId;
                                        var carrierName = resp.resultMap.Policies[i].carrierDetails.carrierName;
                                        var carrierEmail = resp.resultMap.Policies[i].carrierDetails.emailId.email;
                                        var carrierLocation = resp.resultMap.Policies[i].carrierDetails.city + "," + resp.resultMap.Policies[i].carrierDetails.state;
                                        carrierIds += "," + carrierId;
                                        if (carrierPic != undefined) {
                                            carrierPic = "https://proto-call-test.appspot.com/file/" + carrierPic;
                                        } else {
                                            carrierPic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                                        }

                                        if (carrierName == undefined)
                                        {
                                            carrierName = ' ';
                                        }

                                        if (carrierEmail == undefined)
                                        {
                                            carrierEmail = ' ';
                                        }
                                        if (carrierLocation == undefined)
                                        {
                                            carrierLocation = ' ';
                                        }

//<div class="carrier-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview" 
//data-id="5587210c-3fb9-4060-96d0-e92a4badf67d">view </div>

                                        var associateBlock = '';
                                        associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative snap" data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                                + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                                                + 'alt="" class="carrier-img-width"> '
                                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                                + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                                                + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                                                + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                                        if (localStorage.LoginType == 'Representatives') {
                                            associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative " data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                                                    + 'alt="" class="carrier-img-width"> '
                                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                                    + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                                                    + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                                                    + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                                        }

                                        if (totalHTML == "") {
                                            totalHTML += associateBlock;
                                        } else {
                                            if (totalHTML.indexOf(associateBlock) > -1) {
                                            } else {
                                                totalHTML += associateBlock;
                                            }
                                        }

                                    }

                                    carrierIds = "";
                                    localStorage.setItem("ASSOCIATE_CARRIER", totalHTML);
                                    //  alert(localStorage.getItem("ASSOCIATE_CARRIER"));
                                    if (localStorage.LoginType == 'Representatives') {
                                        $("#id-carrierassociatedblock").html('');
                                        if (localStorage.getItem("ASSOCIATE_CARRIER") == undefined || localStorage.getItem("ASSOCIATE_CARRIER") == "") {
                                            localStorage.setItem("ASSOCIATE_CARRIER", "<div>No Records</div>");
                                        } else {
                                            $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                                        }

                                        // $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                                    }
                                }
                            });
                        }
                    }
                } else {
                    var temp_carriedid = userTab[index].carrierId;
                    var temp_emailid = userTab[index].emailId.email;
                    if (temp_carriedid == carrierId && temp_emailid == emailID) {
                        var agencyemail = userTab[index].agencyRepresentativeId.email;
                        var alertlistarr = [];
                        alertlistarr = userTab[index].policyListWithCarrier;
                        if (alertlistarr.length > 0) {
                            console.log("", emailID + "" + agencyemail + "" + carrierId + "" + alertlistarr);
                            var datalist = {userId: emailID, agencyRepresentativeId: agencyemail, carrierId: carrierId, alertList: alertlistarr};
                            var path = utils.server.getServerPath("userwithpoliciesandotherproduct");
                            var request = path(datalist).execute(function (resp) {
                                if (resp.error) {
                                    t.server.handleError(resp);
                                } else {
                                    var carrierIds = "";

                                    console.log(resp);
                                    for (var i = 0; i < resp.resultMap.Policies.length; i++) {
                                        if (totalHTML == "<div>No Records </div>") {
                                            totalHTML = "";
                                        }

                                        var carrierPic = resp.resultMap.Policies[i].carrierDetails.carrierLogo;
                                        var carrierId = resp.resultMap.Policies[i].carrierDetails.carrierId;
                                        var carrierName = resp.resultMap.Policies[i].carrierDetails.carrierName;
                                        var carrierEmail = resp.resultMap.Policies[i].carrierDetails.emailId.email;
                                        var carrierLocation = resp.resultMap.Policies[i].carrierDetails.city + "," + resp.resultMap.Policies[i].carrierDetails.state;
                                        carrierIds += "," + carrierId;
                                        if (carrierPic != undefined) {
                                            carrierPic = "https://proto-call-test.appspot.com/file/" + carrierPic;
                                        } else {
                                            carrierPic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                                        }

                                        if (carrierName == undefined)
                                        {
                                            carrierName = ' ';
                                        }

                                        if (carrierEmail == undefined)
                                        {
                                            carrierEmail = ' ';
                                        }
                                        if (carrierLocation == undefined)
                                        {
                                            carrierLocation = ' ';
                                        }

//<div class="carrier-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview" 
//data-id="5587210c-3fb9-4060-96d0-e92a4badf67d">view </div>

                                        var associateBlock = '';
                                        associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative snap" data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                                + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                                                + 'alt="" class="carrier-img-width"> '
                                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                                + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                                                + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                                                + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                                        if (localStorage.LoginType == 'Representatives') {
                                            associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative " data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                                                    + 'alt="" class="carrier-img-width"> '
                                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                                    + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                                                    + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                                                    + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                                        }

                                        if (totalHTML == "") {
                                            totalHTML += associateBlock;
                                        } else {
                                            if (totalHTML.indexOf(associateBlock) > -1) {
                                            } else {
                                                totalHTML += associateBlock;
                                            }
                                        }

                                    }

                                    carrierIds = "";
                                    localStorage.setItem("ASSOCIATE_CARRIER", totalHTML);
                                    //  alert(localStorage.getItem("ASSOCIATE_CARRIER"));
                                    if (localStorage.LoginType == 'Representatives') {
                                        $("#id-carrierassociatedblock").html('');
                                        if (localStorage.getItem("ASSOCIATE_CARRIER") == undefined || localStorage.getItem("ASSOCIATE_CARRIER") == "") {
                                            localStorage.setItem("ASSOCIATE_CARRIER", "<div>No Records</div>");
                                        } else {
                                            $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                                        }

                                        // $("#id-carrierassociatedblock").append(localStorage.getItem("ASSOCIATE_CARRIER"));
                                    }

                                }
                            });
                        }
                    }
                }
            }

        }


    },
    loadFeedSetting: function () {
        var html = staticTemplate.customers.staticSettingViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        protocall.events.GlobalContainerScrollevent();
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.customers.staticSettingViewTemplate();
            totalHTML = totalHTML + template;
        }
        $(".container").addClass("container-maxwidth");
        //$(".container").removeClass("container");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(totalHTML));
    },
    loadFeed: function () {
        var html = staticTemplate.customers.staticCustomerViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        protocall.events.GlobalContainerScrollevent();
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.customers.staticCustomerViewTemplate();
            totalHTML = totalHTML + template;
        }
        $(".container").addClass("container-maxwidth");
        // $(".container").removeClass("container");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(totalHTML));
    },
}

protocall.myRep = {initMyRepsPage: function () {
		HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
		HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        localStorage.myrepvalue1 = "mysortselected";
        localStorage.myrepvalue2 = "";
        localStorage.setItem("SUBMENU", "MYREPS_PAGE");
        var page = "myrepspage";
        var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
        deepPath = "agencydashboarddesign",
                page = "myrepspage",
                callback = MyrepsdynamicTemplate.myreps.MyrepsDynamicList,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    initCarrierRepsPage: function () {

        localStorage.setItem("SUBMENU", "CARRIER_REPS_PAGE");
        MyrepsdynamicTemplate.myreps.CarrierRepsDynamicList();
    },
    initMyRepsPageSort: function () {
		HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
		HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        var page = "myrepspage";
        var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
        deepPath = "agencyrepresentativelistsortedbyname",
                page = "myrepspage",
                callback = MyrepsdynamicTemplate.myreps.MyrepsDynamicListSort,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    loadHomePageData: function (data, page) {         //console.log(data, page);         feedHTML1 = '<div class="customer-home-parent clr-fl p-relative">';
        var feedHTML = "";
        //console.log("datalength",data.resultMap.userTab.length);
        if (data.resultMap != null && data.resultMap != "") {
            var resultReps = data.resultMap.repTab;
            //console.log(resultCarrier.length)

            for (var mp = 0; mp < resultReps.length; mp++) {
                var rep = resultReps[mp];
                console.log(rep)

                if (rep.agencyRepresentativeId == undefined) {
                    repEmail = ' ';
                } else {
                    repEmail = rep.agencyRepresentativeId.email;
                }
                if (rep.profilePicture == undefined)

                {

                    profilePicture = "http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg";
                } else {
                    var profilePath = rep.profilePicture;
                    profilePicture = ProfileAPI + profilePath;
                    //console.log(pic)
                    //profilePicture "pic/profilePicture";
                    //console.log(profilePicture);
                }


                feedHTML += template.RepsfeedsTemplateHTML(rep);
            }
            var feedHTML2 = '</div>';
            $(".container").addClass("container");
            $(".container").removeClass("container-maxwidth");
            $(".content-holder").empty();
            $(".content-holder").append($(feedHTML1 + feedHTML + feedHTML2));
            protocall.events.GlobalContainerScrollevent();
            //console.log(feedHTML)
        }
    },
}


protocall.InviteRep = {sendemailinvite: function ($el) {
        var email = $("#inviterepemail").val();
        if (email == '') {
            $(".invite-reps-text").css("color", "red");
            $(".invite-reps-text").css("display", "none");
            $(".invite-reps-text").html("Email should not be blank").fadeIn("slow");
            return false;
        }

        if (email != '') {
            var checkemail = isValidEmailAddress(email);
            if (checkemail == false) {
                $(".invite-reps-text").css("color", "red");
                $(".invite-reps-text").css("display", "none");
                $(".invite-reps-text").html("Enter valid email").fadeIn("slow");
                return false;
            }
            function isValidEmailAddress(email) {
                var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
                return pattern.test(email);
            }
            ;
        }

        var page = "InviteRep";
		var roleValue;
		if(localStorage.getItem("LOGIN_LABEL") == "Agency"){
			roleValue = 1;
		} else if(localStorage.getItem("LOGIN_LABEL") == "Carrier") {
			roleValue = 2;
		} else {
			roleValue = 3;
		}
        //var emailList     = [ {"email":"dhfsf.p@tringapps.com"}, {"email":"sdjfhsdgfs.k@tringapps.com"} ];
        var emailList = [{"email": email}];
        var deepPath = "sendinvitation";
        //var link = "/#signup-"+roleValue;
        //var link = "http://localhost/Protocall-FinaBuild/Protocall-Mar-25/#signup-"+roleValue;
        var link = "https://1-dot-windy-shoreline-89117.appspot.com/#signup-"+roleValue;
        var resetPassword = false;
        var callback = protocall.InviteRep.InviteRepbyEmail;
        var content = sessionStorage.agencyName + 'is inviting you to join in protocall.Please use the below link to signup in protocall and the link will expire in 24 hours.';
        var data = {"emailList": emailList, "link": link, "resetPassword": resetPassword, "text": content};
        utils.server.makeServerCall(page, data, callback, deepPath);
        $(".invite-reps-text").css("color", "green");
        $(".invite-reps-text").css("display", "none");
        $(".invite-reps-text").html("Invitation sent successfully!").fadeIn("slow");
    },
    InviteRepbyEmail: function ($el) {
        vendor - profile - info
        return false;
    }
}


protocall.myProfile = {loadFeedSetting: function ($el) {
        localStorage.setItem("SUBMENU", "SETTINGS_PAGE");
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Admin') {
                utils.server.carrierOwnerSettingSubmenu();
                var page = "settings";
                var data = {};
                var callback = utils.server.MysettingsResponse;
                var deepPath = "settingsinagencydesign";
                utils.server.makeServerCall(page, data, callback, deepPath);
                //utils.server.MysettingsResponse();
            }
        } else {
            var page = "settings";
            var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"};
            var callback = utils.server.MysettingsResponse;
            var deepPath = "settingsinagencydesign";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
    },
    loadMyCarrierRepProfile: function ($el) {

        var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
        $(".mb-submenu-in").empty();
        $(".mb-submenu-in").append($(submenu));
        var html = staticTemplate.customers.dynamicMyProfileViewTemplate();
        protocall.carrier.loadCarrierOwner_MyRepsAssociatedCustomers(html);
    },
    loadMyProfileView: function ($el) {
        popUpContent.closePopUpContent();
        localStorage.setItem("SUBMENU", "PROFILE_PAGE");
        var html = staticTemplate.customers.staticMyProfileViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append(html);
        $(".mb-submenu").empty();
        var subMenu = '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid" style="width:20%;"><a href="#" class="snap left f-sz-16 ptsans-light myprofile t-upper p-relative f-color-green" data-type="page" data-submenu="myprofile"><div class=""><div class="sprite-im myprofile-icon inline-block v-align-mid mr-space-10" style="margin-top:-1px"></div><span class="sub-menu-text inline-block v-align-mid"> my profile</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="myprofile-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:80%;"><div class="tab-rb-submenu-in-block p-relative"><a href="/edit" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light edit p-relative" data-type="page" data-submenu="edit"><div class="sprite-im inline-block edit-icon v-align-mid" style="display:block;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "> edit</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a><a href="/#" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="dt-resetpassword" style="width:150px">'
                + '<div class="sprite-im inline-block v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title1 t-caps inline-block f-color-w v-align-mid " > Reset Password </div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a></div></div>';
        $(".mb-submenu").append(subMenu);
        protocall.events.GlobalContainerScrollevent();
        this.setSelectedClassPopContent($el);
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
    },
    setSelectedClassPopContent: function ($el) {
        var $popUpContent = $("#pop-up-content");
        if ($popUpContent && $popUpContent.length > 0 && $popUpContent.is(":visible")) {
            if ($popUpContent.find(".prof-view-overlay").length > 0) {
                $(".prof-view-overlay").removeClass("pop-selected-color");
                $el.addClass("pop-selected-color");
            }
        }

    }

}
/*Naveen 23-2-2015 Chnage start*/
protocall.util = {
    viewingHomePageData: function (dataValue) {
        //debugger;
        console.log("data in viewing home page data", dataValue);
        var header = "",
                content = "",
                totalHtml = "",
                feedHTML = ""
        footer = "";
        console.log("data in viewingHomePageData", dataValue);
        console.log("dataValue.resultMap.isNextPage", dataValue.resultMap.isNextPage);
        CONSTANTS.HASNEXTPAGE = false;
        if (dataValue !== "undefined" && dataValue.resultMap !== "undefined") {
			if (HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED) {
				HOMEPAGERESPONSE.UNREADFEEDCOUNT = dataValue.resultMap.count;
				/* if (alertDetailsValue.alertStatusDetails.status == undefined) {
					HOMEPAGERESPONSE.UNREADFEEDCOUNT = HOMEPAGERESPONSE.UNREADFEEDCOUNT + 1;
					} */
				} else {
					HOMEPAGERESPONSE.UNREADFEEDCOUNT = HOMEPAGERESPONSE.UNREADFEEDCOUNT;
				}
            if (dataValue.resultMap.isNextPage == true) {
                console.log("is Next page is true");
                CONSTANTS.HASNEXTPAGE = true;
            } else {
                CONSTANTS.HASNEXTPAGE = false;
            }
            if (dataValue.resultMap.TypeCode !== "undefined" && dataValue.resultMap.TypeCode == "4011" && CONSTANTS.HASNEXTPAGE == true) {
                PAGE_COUNT = 0;
                //console.log("resultMap.ArrayOfAlertDetails.length", dataValue.resultMap.ArrayOfAlertDetails.length);
                if (dataValue.resultMap.ArrayOfAlertDetails !== "undefined" && dataValue.resultMap.ArrayOfAlertDetails.length !== "undefined" && dataValue.resultMap.ArrayOfAlertDetails.length !== 0) {
                    $.each(dataValue.resultMap.ArrayOfAlertDetails, function (index, alertDetailsValue) {
                        console.log("alertDetailsValue.alertDetails index", alertDetailsValue.alertDetails.length);
                        var alertType = alertDetailsValue.alertDetails.type;
                        // alert(alertType);
                        if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                            console.log("HOMEPAGERESPONSE.INCIDENTALERTSCLICKED", HOMEPAGERESPONSE.INCIDENTALERTSCLICKED);
                            console.log("alertDetailsValue.alertDetails INCIDENTALERTSCLICKED", alertDetailsValue.alertDetails.length);
                            feedHTML += template.incidentAlertFeedHMLT(alertDetailsValue, alertType);
                        } else if (HOMEPAGERESPONSE.POLICYALERTCLICKED) {
                            console.log("HOMEPAGERESPONSE.POLICYALERTCLICKED", HOMEPAGERESPONSE.POLICYALERTCLICKED);
                            console.log("alertDetailsValue.alertDetails POLICYALERTCLICKED", alertDetailsValue.alertDetails.length);
                            feedHTML += template.policyAlertFeedHMLT(alertDetailsValue, alertType);
                        } else {
                            feedHTML += template.feedsTemplateHTML(alertDetailsValue);
                            console.log("HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADEDCOUNT", HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADEDCOUNT);
                        }
                        HOMEPAGERESPONSE.RECURRINGALERTDFEEDS.push(alertDetailsValue);
                    });
                    /*Naveen 23-2-2015 Changes Start */
                    if (feedHTML == "" && HOMEPAGERESPONSE.POLICYALERTCLICKED) {
                        feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
                    }
                    if (feedHTML == "" && HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                        feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
                    }
                    if (feedHTML == "" && HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED) {
                        feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
                    }
                    /*Naveen 23-2-2015 Changes End */
                    console.log("HOMEPAGERESPONSE.INCIDENTALERTSCLICKED 2", HOMEPAGERESPONSE.INCIDENTALERTSCLICKED);
                }
            } else if (dataValue.resultMap.AlertMessage != "undefined" && dataValue.resultMap.TypeCode == "4012") {
                PAGE_COUNT++;
                feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
            }
        }
        if (CONSTANTS.PGNUMBER == 1) {
            header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            content = '<div class="container"><div class="content-holder">' + feedHTML + '</div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            totalHtml = header + content + footer;
            var pageNumber = protocall.grabHashPage();
            if (pageNumber == "carriers") {
                protocall.view.loadCarrierPage(true);
            } else if (pageNumber == "customers") {
                protocall.view.loadCustomerPage(true);
            } else if (pageNumber == "myreps") {
                protocall.view.loadMyRepsPage(true);
            } else if (pageNumber == "myProfileView") {
                var $el = $(".myProfileView");
                protocall.view.viewProfileViewPage(true, $el);
            } else if (pageNumber == "carrieragency") {
                protocall.view.loadCarrierOwnerAgenciesPage(true);
            } else {
                $("#page").empty();
                $("#page").append(totalHtml);
            }
            protocall.events.GlobalContainerScrollevent();
        } else {
            var pageNumber = protocall.grabHashPage();
            if (pageNumber == "carriers") {
                protocall.view.loadCarrierPage(true);
            } else if (pageNumber == "customers") {
                protocall.view.loadCustomerPage(true);
            } else if (pageNumber == "myreps") {
                protocall.view.loadMyRepsPage(true);
            } else if (pageNumber == "myProfileView") {
                var $el = $(".myProfileView");
                protocall.view.viewProfileViewPage(true, $el);
            } else if (pageNumber == "carrieragency") {
                protocall.view.loadCarrierOwnerAgenciesPage(true);
            } else {
                IsLoadNextPage = true;
                if (PAGE_COUNT == 0) {
                    $(".content-holder").append($(feedHTML));
                } else if (PAGE_COUNT == 1) {
                    $(".content-holder").append($(feedHTML));
                }
            }

            protocall.events.GlobalContainerScrollevent();
        }
        $(".content-holder").removeClass("spinner1");
        $(".topContainer").css("box-shadow", "inset 0px 8px 8px #E9EFF0");
        if (HOMEPAGERESPONSE.UNREADFEEDCOUNT !== 0) {
            $(".mb-submenu").find("a.myalerts span.cnt-no").text(HOMEPAGERESPONSE.UNREADFEEDCOUNT);
        } else {
            $(".mb-submenu").find("a.myalerts span.cnt-blk").text("");
        }
        protocall.events.mouseOverCheckbox();
        protocall.displaySpinner(false);
        protocall.events.containerScrollEvent();
        protocall.events.GlobalContainerScrollevent();
        protocall.view.subMenuSelectedTab();
        $(".content-holder").find(".spinner1").removeClass("spinner1");
        $(".content-holder").find(".bottomSpinner").removeClass("bottomSpinner");
        $(".content-holder").find("#scrollingDiv").empty();
        $(".content-holder").css("opacity", "1");
        $('#id-agencyprofilelogo').attr('src', sessionStorage.agencyLogo);
        if (localStorage.LoginType == undefined) {
            $(".edit-cover-pic").css("display", "block");
            $(".edit-agency-pic").css("display", "block");
        }
        if (localStorage.LoginType == 'Admin') {
            $(".edit-cover-pic").css("display", "block");
            $(".edit-agency-pic").css("display", "block");
            //edit-agency-pic
        }
        if (localStorage.LoginType == 'Representatives') {             // alert("dd");
            $(".edit-cover-pic").css("display", "none");
            $(".edit-agency-pic").css("display", "none");
        }
        if (localStorage.LoginType == 'Representatives') {             // alert("dd");
            $(".edit-cover-pic").css("display", "none");
            $(".edit-agency-pic").css("display", "none");
        }

    }
} /*Naveen 23-2-2015 Chnage end*/

//--------------------------- Agency Logo Added By Manoj -----------------------------------
function readBrowserURL(input) {
    if (input.files && input.files[0]) {
        var filePath = $("#inputfile").val();
        if (filePath) {
            var startIndex = (filePath.indexOf('\\') >= 0 ? filePath.lastIndexOf('\\') : filePath.lastIndexOf('/'));
            var filename = filePath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
            var textElement = document.getElementById("id-agency-logo-name");
            textElement.value = filename;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#id-agencyprofilelogo').attr('src', e.target.result);
            $('.setAgencyPic').attr('src', e.target.result);
            sessionStorage.agencyLogo = e.target.result;
			sessionStorage.profilePicAfterUpdate = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        console.log("sessionStorage.profilePicAfterUpdate", sessionStorage.profilePicAfterUpdate);
    }
}

function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}
function loadtimePicker() {

    for (var hour = 1; hour <= 12; hour++) {
        for (var min = 0; min < 60; min++) {
            $("#pushmessagetimepicker").append('<option>' + minTwoDigits(hour) + ":" + minTwoDigits(min) + '</option>');
        }
    }

}

function checkboxStatus(idValue) {

    if (idValue === "radio-button-now") {
        document.getElementById("radio-button-now").checked = true;
        document.getElementById("radio-button-later").checked = false;
        $(".later-box").css("display", "none");
    } else if (idValue === "radio-button-later") {
        document.getElementById("radio-button-now").checked = false;
        document.getElementById("radio-button-later").checked = true;
        $(".later-box").css("display", "block");
        loadtimePicker();
    } else if (idValue == "radio-button-agency") {
        document.getElementById("radio-button-agency").checked = true;
        document.getElementById("radio-button-rep").checked = false;
    } else if (idValue == "radio-button-rep") {
        document.getElementById("radio-button-rep").checked = true;
        document.getElementById("radio-button-agency").checked = false;
    } else if (idValue == "radio-button-public") {
        document.getElementById("radio-button-public").checked = true;
        document.getElementById("radio-button-private").checked = false;
        document.getElementById("radio-button-custom").checked = false;
        $(".rep-content-blk").css("opacity", "0.5");
        $(".rep-content-blk").find("input", "div").attr('disabled', 'disabled');
        $(".switchsample").css("pointer-events", "none");
    } else if (idValue == "radio-button-private") {
        document.getElementById("radio-button-public").checked = false;
        document.getElementById("radio-button-private").checked = true;
        document.getElementById("radio-button-custom").checked = false;
        $(".rep-content-blk").css("opacity", "0.5");
        $(".rep-content-blk").find("input", "div").attr('disabled', 'disabled');
        $(".switchsample").css("pointer-events", "none");
    } else if (idValue == "radio-button-custom") {
        $(".rep-content-blk").find("input", "div").attr('disabled', false);
        // $('#id-switch-on').removeAttr("onclick");
        $(".switchsample").css("pointer-events", "auto");
        $(".rep-content-blk").css("opacity", "1");
        document.getElementById("radio-button-public").checked = false;
        document.getElementById("radio-button-private").checked = false;
        document.getElementById("radio-button-custom").checked = true;
    }
}

function hideVendorTextboxes() {
    $("#id-vendor-preferredvendorid").css("visibility", "hidden");
    $("#id-vendor-type").css("visibility", "hidden");
    $("#id-vendor-name").css("visibility", "hidden");
    $("#id-vendor-phone").css("visibility", "hidden");
    $("#id-vendor-address1").css("visibility", "hidden");
    $("#id-vendor-address2").css("visibility", "hidden");
    $("#id-vendor-city").css("visibility", "hidden");
    $("#id-vendor-state").css("visibility", "hidden");
    $("#id-vendor-zipcode").css("visibility", "hidden");
}


function hideAgencyTextboxes() {
    $("#id-carrier-agencyid").css("visibility", "hidden");
    $("#id-carrier-masteragencyid").css("visibility", "hidden");
    $("#id-carrier-agencytype").css("visibility", "hidden");
    $("#id-carrier-agencyname").css("visibility", "hidden");
    $("#id-carrier-agencyaddress1").css("visibility", "hidden");
    $("#id-carrier-agencyaddress2").css("visibility", "hidden");
    $("#id-carrier-agencycity").css("visibility", "hidden");
    $("#id-carrier-agencystate").css("visibility", "hidden");
    $("#id-carrier-agencyzipcode").css("visibility", "hidden");
    $("#id-carrier-agencyphone").css("visibility", "hidden");
    $("#id-carrier-agencyemail").css("visibility", "hidden");
}

function editAgencySaveData() {
    addBottomBorder();
    hideAgencyTextboxes();
    document.getElementById("id-carrier-edit").innerHTML = "edit";
    document.getElementById("id-c-agencyid").innerHTML = $("#id-carrier-agencyid").val();
    document.getElementById("id-c-masteragencyid").innerHTML = $("#id-carrier-masteragencyid").val();
    document.getElementById("id-c-agencytype").innerHTML = $("#id-carrier-agencytype").val();
    document.getElementById("id-c-agencyname").innerHTML = $("#id-carrier-agencyname").val();
    document.getElementById("id-c-agencyaddress1").innerHTML = $("#id-carrier-agencyaddress1").val();
    document.getElementById("id-c-agencyaddress2").innerHTML = $("#id-carrier-agencyaddress2").val();
    document.getElementById("id-c-agencycity").innerHTML = $("#id-carrier-agencycity").val();
    document.getElementById("id-c-agencystate").innerHTML = $("#id-carrier-agencystate").val();
    document.getElementById("id-c-agencyzip").innerHTML = $("#id-carrier-agencyzipcode").val();
    document.getElementById("id-c-agencyphone").innerHTML = $("#id-carrier-agencyphone").val();
    document.getElementById("id-c-agencyemail").innerHTML = $("#id-carrier-agencyemail").val();
    $("#id-c-agencyid").show();
    $("#id-c-masteragencyid").show();
    $("#id-c-agencytype").show();
    $("#id-c-agencyname").show();
    $("#id-c-agencyaddress1").show();
    $("#id-c-agencyaddress2").show();
    $("#id-c-agencycity").show();
    $("#id-c-agencystate").show();
    $("#id-c-agencyzip").show();
    $("#id-c-agencyphone").show();
    $("#id-c-agencyemail").show();
    var agencyid = document.getElementById("id-carrier-agencyid").value;
    var masteragencyid = document.getElementById("id-carrier-masteragencyid").value;
    var agencytype = document.getElementById("id-carrier-agencytype").value;
    var agencyname = document.getElementById("id-carrier-agencyname").value;
    var agencyaddress1 = document.getElementById("id-carrier-agencyaddress1").value;
    var agencyaddress2 = document.getElementById("id-carrier-agencyaddress2").value;
    var agencycity = document.getElementById("id-carrier-agencycity").value;
    var agencystate = document.getElementById("id-carrier-agencystate").value;
    var agencyzipcode = document.getElementById("id-carrier-agencyzipcode").value;
    var agencyphone = document.getElementById("id-carrier-agencyphone").value;
    var agencyemail = document.getElementById("id-carrier-agencyemail").value;
    page = "agencysavepage";

    //
    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
        deepPath = "editcarrier";
        var data = {carrierId: masteragencyid, carrierName: agencyname, address: agencyaddress1, address2: agencyaddress2, city: agencycity, state: agencystate, zip: agencyzipcode,
            phone: agencyphone, emailId: agencyemail};
        utils.server.displayMessage("Successfully Saved..!");
        //  var callback = utils.server.getCodeResponseAssignCustomers;
        utils.server.makeServerCall(page, data, null, deepPath);
    } else {
        deepPath = "editagency";
        var data = {agencyId: masteragencyid, agencyName: agencyname, address: agencyaddress1, address2: agencyaddress2, agencyOwner: "agencyowner", agencyType: agencytype, carrierAgencyId: agencyid
            , city: agencycity, state: agencystate, zipcode: agencyzipcode, phone: agencyphone, emailId: agencyemail};
        utils.server.displayMessage("Successfully Saved..!");
        // var callback = utils.server.getCodeResponseAssignCustomers;
        utils.server.makeServerCall(page, data, null, deepPath);
    }
}

function editAgencyEditData() {
    removerBottomBorder();
//    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
//        document.getElementById("id-carrier-edit").innerHTML = "Save";
//    } else {
//        document.getElementById("id-carrier-edit").innerHTML = "Edit";
//    }

    document.getElementById("id-carrier-edit").innerHTML = "Save";

    $("#id-c-agencyid").hide();
    $("#id-c-masteragencyid").hide();
    $("#id-c-agencytype").hide();
    $("#id-c-agencyname").hide();
    $("#id-c-agencyaddress1").hide();
    $("#id-c-agencyaddress2").hide();
    $("#id-c-agencycity").hide();
    $("#id-c-agencystate").hide();
    $("#id-c-agencyzip").hide();
    $("#id-c-agencyphone").hide();
    $("#id-c-agencyemail").hide();
    $("#id-carrier-agencyid").css("visibility", "visible");
    $("#id-carrier-masteragencyid").css("visibility", "visible");
    $("#id-carrier-agencytype").css("visibility", "visible");
    $("#id-carrier-agencyname").css("visibility", "visible");
    $("#id-carrier-agencyaddress1").css("visibility", "visible");
    $("#id-carrier-agencyaddress2").css("visibility", "visible");
    $("#id-carrier-agencycity").css("visibility", "visible");
    $("#id-carrier-agencystate").css("visibility", "visible");
    $("#id-carrier-agencyzipcode").css("visibility", "visible");
    $("#id-carrier-agencyphone").css("visibility", "visible");
    $("#id-carrier-agencyemail").css("visibility", "visible");
    document.getElementById("id-carrier-agencyid").value = document.getElementById("id-c-agencyid").innerHTML;
    document.getElementById("id-carrier-masteragencyid").value = document.getElementById("id-c-masteragencyid").innerHTML;
    document.getElementById("id-carrier-agencytype").value = document.getElementById("id-c-agencytype").innerHTML;
    document.getElementById("id-carrier-agencyname").value = document.getElementById("id-c-agencyname").innerHTML;
    document.getElementById("id-carrier-agencyaddress1").value = document.getElementById("id-c-agencyaddress1").innerHTML;
    document.getElementById("id-carrier-agencyaddress2").value = document.getElementById("id-c-agencyaddress2").innerHTML;
    document.getElementById("id-carrier-agencycity").value = document.getElementById("id-c-agencycity").innerHTML;
    document.getElementById("id-carrier-agencystate").value = document.getElementById("id-c-agencystate").innerHTML;
    document.getElementById("id-carrier-agencyzipcode").value = document.getElementById("id-c-agencyzip").innerHTML;
    document.getElementById("id-carrier-agencyphone").value = document.getElementById("id-c-agencyphone").innerHTML;
    document.getElementById("id-carrier-agencyemail").value = document.getElementById("id-c-agencyemail").innerHTML;
}

function editVendorSaveData() {
    addBottomBorder();
    document.getElementById("id-carrier-edit").innerHTML = "edit";
    $("#id-v-preferredvendorid").css("visibility", "visible");
    $("#id-v-vendortype").css("visibility", "visible");
    $("#id-v-vendorname").css("visibility", "visible");
    $("#id-v-vendorphone").css("visibility", "visible");
    $("#id-v-address1").css("visibility", "visible");
    $("#id-v-address2").css("visibility", "visible");
    $("#id-v-city").css("visibility", "visible");
    $("#id-v-state").css("visibility", "visible");
    $("#id-v-zipcode").css("visibility", "visible");
    $("#id-v-preferredvendorid").css("display", "block");
    $("#id-v-vendortype").css("display", "block");
    $("#id-v-vendorname").css("display", "block");
    $("#id-v-vendorphone").css("display", "block");
    $("#id-v-address1").css("display", "block");
    $("#id-v-address2").css("display", "block");
    $("#id-v-city").css("display", "block");
    $("#id-v-state").css("display", "block");
    $("#id-v-zipcode").css("display", "block");
    hideVendorTextboxes();
    document.getElementById("id-v-preferredvendorid").innerHTML = $("#id-vendor-preferredvendorid").val();
    document.getElementById("id-v-vendortype").innerHTML = $("#id-vendor-type").val();
    document.getElementById("id-v-vendorname").innerHTML = $("#id-vendor-name").val();
    document.getElementById("id-v-vendorphone").innerHTML = $("#id-vendor-phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
    document.getElementById("id-v-address1").innerHTML = $("#id-vendor-address1").val();
    document.getElementById("id-v-address2").innerHTML = $("#id-vendor-address2").val();
    document.getElementById("id-v-city").innerHTML = $("#id-vendor-city").val();
    document.getElementById("id-v-state").innerHTML = $("#id-vendor-state").val();
    document.getElementById("id-v-zipcode").innerHTML = $("#id-vendor-zipcode").val();
    var preferredvendorid = $("#id-vendor-preferredvendorid").val();
    var type = document.getElementById("id-vendor-type").value;
    var name = document.getElementById("id-vendor-name").value;
    var phone = document.getElementById("id-vendor-phone").value;
    var address1 = document.getElementById("id-vendor-address1").value;
    var address2 = document.getElementById("id-vendor-address2").value;
    var city = document.getElementById("id-vendor-city").value;
    var state = document.getElementById("id-vendor-state").value;
    var zipcode = document.getElementById("id-vendor-zipcode").value;
    // alert(SERVICEID + "" + name + " " + type + "" + zipcode + "" + phone);

    if (preferredvendorid != "" || preferredvendorid != null) {
        page = "vendorsavepage";
        var data = {preferredVendorId: SERVICEID, name: name, serviceType: type, zipcode: zipcode, phone: phone,
            address: address1, address2: address2, city: city, state: state};
        utils.server.displayMessage("Successfully Saved..!");
        deepPath = "editpreferredvendorservice";
        utils.server.makeServerCall(page, data, null, deepPath);
        utils.server.loadPrefferedvendorsdetails();
    }


}

function editVendorEditData() {
    removerBottomBorder();
//    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
//        document.getElementById("id-carrier-edit").innerHTML = "Save";
//    } else {
//        document.getElementById("id-carrier-edit").innerHTML = "Edit";
//    }

    document.getElementById("id-carrier-edit").innerHTML = "Save";

//    document.getElementById("id-v-preferredvendorid").style.visibility = "hidden";
//    document.getElementById("id-v-vendortype").style.visibility = "hidden";
//    document.getElementById("id-v-vendorname").style.visibility = "hidden";
//    document.getElementById("id-v-vendorphone").style.visibility = "hidden";
//    document.getElementById("id-v-address1").style.visibility = "hidden";
//    document.getElementById("id-v-address2").style.visibility = "hidden";
//    document.getElementById("id-v-city").style.visibility = "hidden";
//    document.getElementById("id-v-state").style.visibility = "hidden";
//    document.getElementById("id-v-zipcode").style.visibility = "hidden";
    $("#id-vendor-preferredvendorid").css("visibility", "visible");
    $("#id-vendor-type").css("visibility", "visible");
    $("#id-vendor-name").css("visibility", "visible");
    $("#id-vendor-phone").css("visibility", "visible");
    $("#id-vendor-address1").css("visibility", "visible");
    $("#id-vendor-address2").css("visibility", "visible");
    $("#id-vendor-city").css("visibility", "visible");
    $("#id-vendor-state").css("visibility", "visible");
    $("#id-vendor-zipcode").css("visibility", "visible");
    document.getElementById("id-vendor-preferredvendorid").value = document.getElementById("id-v-preferredvendorid").innerHTML;
    document.getElementById("id-vendor-type").value = document.getElementById("id-v-vendortype").innerHTML;
    document.getElementById("id-vendor-name").value = document.getElementById("id-v-vendorname").innerHTML;
    document.getElementById("id-vendor-phone").value = document.getElementById("id-v-vendorphone").innerHTML;
    document.getElementById("id-vendor-address1").value = document.getElementById("id-v-address1").innerHTML;
    document.getElementById("id-vendor-address2").value = document.getElementById("id-v-address2").innerHTML;
    document.getElementById("id-vendor-city").value = document.getElementById("id-v-city").innerHTML;
    document.getElementById("id-vendor-state").value = document.getElementById("id-v-state").innerHTML;
    document.getElementById("id-vendor-zipcode").value = document.getElementById("id-v-zipcode").innerHTML;
    $("#id-v-preferredvendorid").hide();
    $("#id-v-vendortype").hide();
    $("#id-v-vendorname").hide();
    $("#id-v-vendorphone").hide();
    $("#id-v-address1").hide();
    $("#id-v-address2").hide();
    $("#id-v-city").hide();
    $("#id-v-state").hide();
    $("#id-v-zipcode").hide();
}

function removerBottomBorder() {
    var className = document.getElementsByClassName("carrier-border-view");
    for (var i = 0; i < className.length; i++) {
        className[i].style.borderBottom = "0px";
    }

}
function addBottomBorder() {
    var className = document.getElementsByClassName("carrier-border-view");
    if (REFERENCE_TYPE === "agency_info") {
        for (var i = 0; i < className.length - 2; i++) {
            className[i].style.borderBottom = "1px solid #ccc";
        }
    } else if (REFERENCE_TYPE === "vendor_info") {
        for (var i = 0; i < className.length - 2; i++) {
            className[i].style.borderBottom = "1px solid #ccc";
        }
    }
}

function editDataInfo() {
    var innerHtmlValue = document.getElementById("id-carrier-edit").innerHTML;
    if (REFERENCE_TYPE === "agency_info") {
        if (innerHtmlValue.trim().toLowerCase() == "edit") {
            editAgencyEditData();
            IsAgencyDataChanged = true;
        } else {
            editAgencySaveData();
        }
    } else if (REFERENCE_TYPE == "vendor_info") {
        if (innerHtmlValue.trim().toLowerCase() == "edit") {
            editVendorEditData();
            IsVendorDataChanged = true;
        } else {
            editVendorSaveData();
        }
    }
}
//------------------------------------------------------------------------------


function readURL(input) {
	if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.ageny-img-width').attr('src', e.target.result);
            $('.setProfilePic').attr('src', e.target.result);
            sessionStorage.profilePicAfterUpdate = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}


$("#id-norecords").animate({
    width: "20%",
    opacity: 1,
    marginLeft: "0.2in",
    fontSize: "16px"
}, 1500);

function GetSlider() {
    var currentPosition = 0;
    var slideWidth = 500;
    var slides = $('.slide');
    var numberOfSlides = slides.length;
    var slideShowInterval;
    var speed = 30000000;

    //Assign a timer, so it will run periodically
    slideShowInterval = setInterval(changePosition, speed);

    slides.wrapAll('<div id="slidesHolder"></div>')

    slides.css({'float': 'left'});

    //set #slidesHolder width equal to the total width of all the slides
    $('#slidesHolder').css('width', slideWidth * numberOfSlides);

    $('#slideshow')
            .prepend('<span class="nav" id="leftNav">Move Left</span>')
            .append('<span class="nav" id="rightNav">Move Right</span>');

    manageNav(currentPosition);

    //tell the buttons what to do when clicked
    $('.nav').bind('click', function () {

        //determine new position
        currentPosition = ($(this).attr('id') == 'rightNav')
                ? currentPosition + 1 : currentPosition - 1;

        //hide/show controls
        manageNav(currentPosition);
        clearInterval(slideShowInterval);
        slideShowInterval = setInterval(changePosition, speed);
        moveSlide();
    });

    function manageNav(position) {
        //hide left arrow if position is first slide
        if (position == 0) {
            $('#leftNav').hide()
        }
        else {
            $('#leftNav').show()
        }
        //hide right arrow is slide position is last slide
        if (position == numberOfSlides - 1) {
            $('#rightNav').hide()
        }
        else {
            $('#rightNav').show()
        }
    }


    /*changePosition: this is called when the slide is moved by the 
     timer and NOT when the next or previous buttons are clicked*/
    function changePosition() {
        if (currentPosition == numberOfSlides - 1) {
            currentPosition = 0;
            manageNav(currentPosition);
        } else {
            currentPosition++;
            manageNav(currentPosition);
        }
        moveSlide();
    }


    //moveSlide: this function moves the slide 
    function moveSlide() {
        $('#slidesHolder')
                .animate({'marginLeft': slideWidth * (-currentPosition)});
    }
}

function convertImgToBase64URL(url, callback, outputFormat){
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null; 
    };
    img.src = url;
}