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
//CONSTANTS
var CONSTANTS = {
    MODAL_OPACITY: 1,
    FORM_SUBMIT_OPACITY: 0.2,
    CHANNEL_TOKEN: null,
    LINK_TYPE: {
        PAGE: "page", HOME_PAGE: "home", CARRIERS_PAGE: "carriers", CUSTOMERS_PAGE: "customers", MY_REP_PAGE: "myreps", LOGIN_page: "login",
        VIEW_FEED: "view", FEEDS: "feeds", SHARE_TO_REP: "share", CLOSE_OVERLAY: "closeOverlay", CLOSE_POPUP: "closePopUp", EDIT_AGENCY_PIC: "editAgencyPic",
        MY_ALERTS: "myalerts", INCIDENTS: "incidents", POLICIES: "policies", MATCH_RELEASE_CLAIMS: "matchReleaseClaim", INVITE_REPS: "invitereps",
        ASSIGN_TO_REPS: "assignrep", PHOTS_OVERLAY_DISPLAY: "photosDoc", THUMB_NAIL: "thumbNail", PREVIOUS: "previous", NEXT: "next", VIEW_CARRIER_FEEDVIEW: "viewcarrierfeedview", PUSHMESSAGE: "pushmessage", PRIVACY: "privacy", ARCHIVES: "archives", VIEW_ARCHIVES: "view_archives", SORTBY: "sortby", MY_PROFILE: "profile-link", VIEW_CUSTOMER_FEEDVIEW: "customerprofileviewfeed", SETTINGS_PAGE: "mysettings", PROFILE_PAGE: "myProfileView", SENDAPPLINK: "sendapplink", AUDIO_OVERLAY: "voiceDoc", AUDIO_PLAY: "playAudio", AGENCY_VIEW_LOAD: "agency-view-load", PREFERRED_VENDOE_VIEW_LOAD: "preferred vendors-view-load", AGENCY_EDIT_LOAD: "agency-edit-load", AGENCY_REMOVE_LOAD: "agency-remove-load", AGENCY_ADD_VENDOR_LOAD: "agency-addvendor-load", VENDOR_PROFILE_INFO: "vendor-profile-info",
        ASSIGN_TO_CUSTOMERS: "dt-assigncustomer", PROPERTY_POLICY: "dt-propertypolicy", HEALTH_POLICY: "dt-healthpolicy", VEHICLE_POLICY: "dt-vehiclepolicy",
        PROFILEEDIT: "edit", EDIT_PROFILEIMAGE: "dt-changeImage"
    },
    ERROR_MSG: {
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
    ALERT_LIST: "alertlist",
    AGENCY_DASHBOARD_DESIGN: "agencydashboarddesign",
    GIVE_RECORDED_BY_USER: "giverecordedbyuser"
};
//PAGE NAMES
CURRENT_PAGE = "";
LOGIN_PAGE = "";
HOME_PAGE = "home";
CARRIERS_PAGE = "carriers";
CUSTOMERS_PAGE = "customers";
MY_REP_PAGE = "myreps";
SETTINGS_PAGE = "mysettings";
PROFILE_PAGE = "myProfileView";
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
});
protocall = {
    init: function () {
        protocall.displaySpinner(true);
        if (this.isLoggedIn()) {
            var pageNameFromURL = this.grabHashPage();
            if (pageNameFromURL !== "" && typeof pageNameFromURL !== "undefined" && pageNameFromURL.length != 0) {
                this.setPageNavigation(pageNameFromURL);
            } else {
                this.setPageNavigation(localStorage.currentPage);
            }
        } else {
            var pageNameFromURL = this.grabHashPage();
            if (pageNameFromURL !== "" && typeof pageNameFromURL !== "undefined" && pageNameFromURL.length != 0) {
                this.setPageNavigation(pageNameFromURL);
            }
            //else if((typeof localStorage != "undefined" && localStorage != null && localStorage.length !=0) && (localStorage.currentPage!=null && localStorage.currentPage!="")){
            //	this.setPageNavigation(localStorage.currentPage);	
            //} 
            else {
                this.setPageNavigation(HOME_PAGE);
            }
            setTimeout(function () {
                window.scrollTo(0, 1); //to fix refresh scrolling issue when page is reloaded with page scrolled
            }, 300);
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
        this.displaySpinner(true);
        this.setLocalStorage(page);
        if (page == HOME_PAGE) {
            this.view.loadHomePage(false);
        } else if (page == CARRIERS_PAGE) {
            this.view.loadCarrierPage(false);
        } else if (page == CUSTOMERS_PAGE) {
            this.view.loadCustomerPage(false);
        } else if (page == MY_REP_PAGE) {
            this.view.loadMyRepsPage(false);
        } else if (page == SETTINGS_PAGE) {
            var $el = $(".mysettings");
            this.view.viewSettingsPage(false, $el);
        } else if (page == PROFILE_PAGE) {
            var $el = $(".myProfileView");
            this.view.viewProfileViewPage(false, $el);
        }

        if (subMenu.length > 0) {
            var subMenuName = subMenu[0];
            console.log("SubMenu Name", subMenuName)
            if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_FEED) {
                this.view.viewFeed(false);
            }
            else if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW) {
                this.view.viewCarrierViewFeed(false);
            }
            else if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW) {
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

        }
    },
    setPage: function (page, url, title, data) {
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
            return localStorage.loggedIn ? true : false;
        } else {
            if (CONSTANTS.ISLOGGEDIN) {
                return true;
            } else {
                return false;
            }
        }
    },
    setMenuSelection: function (page, subMenu) {
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
        if (page == CONSTANTS.LINK_TYPE.HOME_PAGE) {
            $(".mb-menu a.home").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CARRIERS_PAGE) {
            $(".mb-menu a.carriers").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE) {
            $(".mb-menu a.customers").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.MY_REP_PAGE) {
            $(".mb-menu a.myreps").addClass("selected-tab");
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
        $(document).on("scroll", function (e) {
            protocall.events.handleScroll();
        });
        $(document).on("click", ".snap", function (e) {
            e.stopPropagation();
            protocall.events.handleClick(e);
        });
        $(document).on("click", ".overalyPhots", function (e) {
            e.stopPropagation();
            console.log(".o-content");
            protocall.events.handleClickForPhotosOverlay(e);
        });
        $(document).on("click", ".audioOverlay", function (e) {
            e.stopPropagation();
            console.log(".o-content");
            protocall.events.handleClickForAudioOverlay(e);
        });
        $(window).on("resize", function (e) {
            protocall.events.handleResize(e);
        });
    },
    handleScroll: function () {


    },
    handleClick: function (e) {
        var $el = $(e.currentTarget);
        if ($el.prop("tagName") == "A") {
            e.preventDefault();
        }
        var type = $el.data("type") ? $el.data("type") : null;
        var page = $el.data("page") ? $el.data("page") : null;
        var subMenu = $el.data("submenu") ? $el.data("submenu") : null;
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
                switch (subMenu) {
                    case CONSTANTS.LINK_TYPE.CARRIERS_PAGE:
                        protocall.view.loadCarrierPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE:
                        protocall.view.loadCustomerPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.FEEDS:
                        protocall.view.loadHomePage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.MY_ALERTS:
                        protocall.view.loadMyAlertsFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.INCIDENTS:
                        protocall.view.loadIncidentsFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.POLICIES:
                        protocall.view.loadPoliciesFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.ARCHIVES:
                        protocall.view.loadArchiveFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.VIEW_ARCHIVES:
                        protocall.view.loadviewArchivedFeeds($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.INVITE_REPS:
                        protocall.view.loadInviteReps($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.ASSIGN_TO_REPS:
                        protocall.view.loadAssignToReps($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBY:
                        protocall.view.loadSortBy($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.PUSHMESSAGE:
                        protocall.view.pushMessage($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.PRIVACY:
                        protocall.view.privacy($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.PROFILEEDIT:
                        protocall.view.editProfileDetails();
                        break;
                    default:
                        break;
                }
                break;
            case CONSTANTS.LINK_TYPE.SETTINGS_PAGE:
                protocall.view.viewSettingsPage(true, $el);
                break;
            case CONSTANTS.LINK_TYPE.PROFILE_PAGE:
                protocall.view.viewProfileViewPage(true, $el);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW:
                protocall.view.viewCustomerViewFeed(true);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW:
                protocall.view.viewCarrierViewFeed(true);
                break;
            case CONSTANTS.LINK_TYPE.MY_PROFILE:
                protocall.view.loadProfile($el);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_FEED:
                protocall.view.viewFeed(true);
                break;
            case CONSTANTS.LINK_TYPE.SHARE_TO_REP:
                protocall.view.shareToRep();
                break;
            case CONSTANTS.LINK_TYPE.ASSIGN_TO_CUSTOMERS:
                protocall.view.assignToCustomers();
                break;
            case CONSTANTS.LINK_TYPE.PROPERTY_POLICY:
                protocall.view.properityPolicy();
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
            case CONSTANTS.LINK_TYPE.AGENCY_REMOVE_LOAD:
                var vendorCheck = document.getElementById('removevendor');
                if (vendorCheck.checked) {
                    console.log(00000000)
                    //alert('vendor-remove');
                    //$(".vendor-block-remove").remove()
                    $(".vendor-block-remove").css({
                        'display': 'none'
                    });
                } else {
                    //alert('test');
                    protocall.view.LoadAgencyRemove();
                }
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_ADD_VENDOR_LOAD:
                protocall.view.LoadAddVendor();
                break;
            case CONSTANTS.LINK_TYPE.VENDOR_PROFILE_INFO:
                protocall.view.LoadVendorInfo();
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
            case CONSTANTS.LINK_TYPE.PHOTS_OVERLAY_DISPLAY:
                protocall.view.staticPhotOverlayDisplay();
                break;
            case CONSTANTS.LINK_TYPE.AUDIO_OVERLAY:
                protocall.view.staticAudioOverlayDisplay();
                break;
            case CONSTANTS.LINK_TYPE.EDIT_PROFILEIMAGE:
                protocall.view.editProfileImage();
                break;
            default:
                break;
        }

    },
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
        console.log("handleClickForAudioThumbNail");
        console.log($(e.currentTarget));
        $("#audioThumbNailView>div").removeClass("activeAudio");
        $(e.currentTarget).addClass("activeAudio");
        var currentMediaID = $(e.currentTarget).find("p#mediaID").text(), mainAudioHTML = "";
        console.log("RESPONSE.AUDIODETAILS", RESPONSE.AUDIODETAILS);
        $.each(RESPONSE.AUDIODETAILS, function (i, element) {
            console.log("media id", element.mediaId);
            if (currentMediaID == element.mediaId) {
                console.log("condition satisfied");
                mainAudioHTML = '<p class="spanCLassElement t-left f-color-green opensans-regular" style="margin:0px">' + element.fileName + '<span  style="font-size:11px">,New jersy</span></p>'
                        + '<p style="color:#939393;font-size:12px">' + element.timeStamp + '</p>'
                        + '<div style="padding:30px;border-top: 1px solid #b9b8b8;margin-top: 10px;width: 476px;">'
                        + '<audio id="music" preload="none" controls style="position: relative;left: 75px;top: 25px;">'
                        + '<source src=' + element.audioSourceURL + '>'
                        + '<source src=' + element.audioSourceURL + '>'
                        + '</audio>'
                        + '<div class="voice-ctrler">'
                        + '<div>prev</div><div><button id="pButton2" class="play audioOverlay" data-type="playAudio"></button></div><div>next</div>'
                        + '</div>';
            }
        });
        $("#originalAudio").html(mainAudioHTML);
    },
    handleResize: function () {


    }
};
//protocall view functions
protocall.view = {
    loadHomePage: function (isClickEvent) {
        console.log("Load Home Page");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.home.initHomePage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, "");
        }
        protocall.displaySpinner(false);
        var $myAlerts = $(".myalerts")
        protocall.view.setSelectedLinkClasses($myAlerts, true);
    },
    loadCarrierPage: function (isClickEvent) {
        console.log("Load Carrier Page");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        //Call the below in carrier.js
        protocall.carrier.initCarrierPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadCustomerPage: function (isClickEvent) {
        console.log("Load Customer Page");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        //Call the below in customer.js
        protocall.customer.initCustomerPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadMyRepsPage: function (isClickEvent) {
        console.log("Load My Reps Page");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
        //Call the below in myreps.js
        protocall.myRep.initMyRepsPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.MY_REP_PAGE, CONSTANTS.LINK_TYPE.MY_REP_PAGE, CONSTANTS.LINK_TYPE.MY_REP_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    viewFeed: function (isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
        }
        protocall.home.loadFeed();
        //Call the below dynamically
        var breadCrumbObj = {};
        breadCrumbObj.customerName = "Hugh Jackman";
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.HOME_PAGE, breadCrumbObj);
        protocall.displaySpinner(false);
    },
    viewCustomerViewFeed: function (isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
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
        protocall.displaySpinner(false);
    },
    viewSettingsPage: function (isClickEvent, $el) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.SETTINGS_PAGE);
        //	protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.SETTINGS_PAGE, CONSTANTS.LINK_TYPE.SETTINGS_PAGE, CONSTANTS.LINK_TYPE.SETTINGS_PAGE, "");
        }
        protocall.myProfile.loadFeedSetting($el);
        protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.SETTINGS_PAGE);
        protocall.displaySpinner(false);
    },
    viewProfileViewPage: function (isClickEvent, $el) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.PROFILE_PAGE);
        //	protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.PROFILE_PAGE, CONSTANTS.LINK_TYPE.PROFILE_PAGE, CONSTANTS.LINK_TYPE.PROFILE_PAGE, "");
        }
        protocall.myProfile.loadMyProfileView($el);
        protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.PROFILE_PAGE);
        protocall.displaySpinner(false);
    },
    viewCarrierViewFeed: function (isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW, CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW, "");
        }
        protocall.carrier.loadFeed();
        //Call the below dynamically
        var breadCrumbObj = {};
        breadCrumbObj.customerName = "Way to Safe";
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.CARRIERS_PAGE, breadCrumbObj);
        protocall.displaySpinner(false);
    },
    loadMyAlertsFeeds: function ($el, isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.MY_ALERTS);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.MY_ALERTS, CONSTANTS.LINK_TYPE.MY_ALERTS, "");
        }
        protocall.home.displayMyAlertsFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
    },
    loadIncidentsFeeds: function ($el, isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS, CONSTANTS.LINK_TYPE.INCIDENTS, "");
        }
        protocall.home.displayIncidentsFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
    },
    loadPoliciesFeeds: function ($el, isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES, CONSTANTS.LINK_TYPE.POLICIES, "");
        }
        protocall.home.displayPoliciesFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
    },
    loadArchiveFeeds: function ($el, isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.ARCHIVES);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.ARCHIVES, CONSTANTS.LINK_TYPE.ARCHIVES, "");
        }
        protocall.home.displayArchiveFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
    },
    loadviewArchivedFeeds: function ($el, isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES, CONSTANTS.LINK_TYPE.VIEW_ARCHIVES, "");
        }
        protocall.home.displayMyAlertsFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
    },
    setSelectedLinkClasses: function ($el, isSet) {
        if (isSet) {
            $el.addClass("selected-tab");
        } else {
            $el.removeClass("selected-tab");
        }
    },
    loadSortBy: function ($el) {
        var html = '<div><div class="prof-view-overlay-sort">Recent</div><div class="prof-view-overlay-sort">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadProfile: function ($el) {
        var html = '<div><div class="prof-view-overlay snap myProfileView" data-type="myProfileView">My Profile</div><div class="prof-view-overlay snap mysettings" data-type="mysettings">Settings</div>'
                + '<div class="prof-view-overlay">Help</div><div class="prof-view-overlay">Log out</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    shareToRep: function () {
        var html = staticTemplate.home.shareWithRepTemplate();
        overlay.displayOverlay(html);
    },
    assignToCustomers: function () {
        var html = staticTemplate.home.assignCustomersTemplate();
        overlay.displayOverlay(html);
    },
    properityPolicy: function () {
        var html = staticTemplate.home.properyPolicyTemplate();
        overlay.displayOverlay(html);
    },
    addVendorDetails: function () {
        var html = staticTemplate.home.addVendorDetailsTemplate();
        overlay.displayOverlay(html);
    },
    healthPolicy: function () {
        var html = staticTemplate.home.healthPolicyTemplate();
        overlay.displayOverlay(html);
    },
    vehiclePolicy: function () {
        var html = staticTemplate.home.vehiclePolicyTemplate();
        overlay.displayOverlay(html);
    },
    sendAppLink: function () {
        var html = staticTemplate.home.sendAppLinkTemplate();
        overlay.displayOverlay(html);
    },
    LoadAgencyInfo: function () {

        $("#id-settings-agency-bar").css("background-color", "#f34f4e");
        $("#id-settings-vendor-bar").css("background-color", "#ccc");

        if (IsVendorDataChanged === true) {
            editVendorSaveData();
            IsVendorDataChanged = false;
        }

        hideAgencyTextboxes();
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
    },
    LoadPreferrredvendorInfo: function () {

        if (IsAgencyDataChanged === true) {
            editAgencySaveData();
            IsAgencyDataChanged = false;
        }
        $("#id-settings-agency-bar").css("background-color", "#ccc");
        $("#id-settings-vendor-bar").css("background-color", "#f34f4e");
        hideVendorTextboxes();
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
    //    Added By Manoj
    pushMessage: function () {
        var html = staticTemplate.home.pushMessageTemplate();
        overlay.displayOverlay(html);
    },
    privacy: function () {
        var html = staticTemplate.home.privacyTemplate();
        overlay.displayOverlay(html);
    },
    editProfileDetails: function () {
        REFERENCE_TYPE = "profile_editinfo";
        editDataInfo();
    },
    editProfileImage: function () {
        editProfileImage();
    },
    /*Added by Naveen -- Start*/
    staticPhotOverlayDisplay: function () {
        $.ajax({
            url: 'sampleJson.json',
            type: 'GET',
            success: function (data) {
                console.log("in success", data.resultObject);
                RESPONSE.RESULTOBJECT = data.resultObject;
                var html = staticTemplate.home.showPhotsOverlayTemplate(RESPONSE.RESULTOBJECT);
                overlay.displayOverlay(html);
                console.log("in photo");
                overlay.sliderControl();
                $("#thumbNailImages div:nth-child(1)").addClass("activeAudio");
                protocall.displaySpinner(false);
            },
            error: function (e) {
                console.log("in error");
            }
        });
    },
    staticAudioOverlayDisplay: function () {
        $.ajax({
            url: 'sampleJson.json',
            type: 'GET',
            success: function (data) {
                console.log("in success", data.resultObject);
                RESPONSE.RESULTOBJECT = data.resultObject;
                var html = staticTemplate.home.showAudioOverlayTemplate(data.resultObject);
                overlay.displayOverlay(html);
                console.log("in function");
                overlay.audioInit(data.resultObject);
                $("#audioThumbNailView div:nth-child(1)").addClass("activeAudio");
                protocall.displaySpinner(false);
            },
            error: function (e) {
                console.log("in error");
            }
        });
    },
    /*Added by Naveen -- End*/
    editAgencyPic: function () {
        var html = staticTemplate.home.editAgencyPicTemplate();
        overlay.displayOverlay(html);
    },
    LoadAgencyEdit: function () {
        editDataInfo();
    },
    matchReleaseClaimAlert: function () {
        var html = staticTemplate.home.matchReleaseClaimTemplate();
        overlay.displayOverlay(html);
    },
    loadInviteReps: function () {
        var html = staticTemplate.myreps.inviteRepsTemplate();
        overlay.displayOverlay(html);
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
        }

    },
    displayOrignalImage: function (currentTarget) {
        $("#thumbNailImages>div").removeClass("activeAudio");
        currentTarget.addClass("activeAudio");
        var currentMediaID = currentTarget.attr("name"), mainAudioHTML = "";
        $.each(RESPONSE.PICTUREDETAILS, function (i, element) {
            console.log("media id", element.mediaId);
            if (currentMediaID == element.mediaId) {
                mainImageHTML = '<img src=' + element.imageSource + ' />';
                imageInformationHTML = element.imageText;
            }
        });
        $("#viewingImage").html(mainImageHTML);
        $("#imageinformation span:first-child").html(imageInformationHTML);
    },
    displayOrignalImage: function (currentTarget) {
        $("#thumbNailImages>div").removeClass("activeAudio");
        currentTarget.addClass("activeAudio");
        var currentMediaID = currentTarget.attr("name"), mainAudioHTML = "";
        $.each(RESPONSE.PICTUREDETAILS, function (i, element) {
            console.log("media id", element.mediaId);
            if (currentMediaID == element.mediaId) {
                mainImageHTML = '<img src=' + element.imageSource + ' />';
                imageInformationHTML = element.imageText;
            }
        });
        $("#viewingImage").html(mainImageHTML);
        $("#imageinformation span:first-child").html(imageInformationHTML);
    },
            displayPreviousImage: function () {
                var $divElement = $("#thumbNailImages"), activeAudioClass = false;
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
        var $divElement = $("#thumbNailImages"), activeAudioClass = false;
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
        var indexValue = $("#thumbNailImages div").index(liEleme) + 1, nextElementToBeloaded;
        if (indexValue !== 0 && indexValue < $("#thumbNailImages div").length) {
            nextElementToBeloaded = $("#thumbNailImages div:eq( " + indexValue + " )");
            $("#thumbNailImages div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            imageSrcTobeLoadedBack = nextElementToBeloaded.find("img").attr("src");
            $("#viewingImage").html('<img src=' + imageSrcTobeLoadedBack + ' />');
        }
    },
    loadingScrollPrevious: function (liEleme) {
        var indexValue = $("#thumbNailImages div").index(liEleme) - 1, nextElementToBeloaded;
        console.log("loadingScrollBack" + indexValue);
        if (indexValue !== -1) {
            nextElementToBeloaded = $("#thumbNailImages div:eq( " + indexValue + " )");
            $("#thumbNailImages div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            imageSrcTobeLoadedBack = nextElementToBeloaded.find("img").attr("src");
            console.log("imageSrcTobeLoaded" + imageSrcTobeLoadedBack);
            $("#viewingImage").html('<img src=' + imageSrcTobeLoadedBack + ' />');
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
    }
};
protocall.home = {
    initHomePage: function () {
        var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"},
        deepPath = "agencydashboarddesign",
                page = "home",
                callback = protocall.home.loadHomePageData,
                authId = "",
                spinnerMsg = "";
        //Hardcoding Agency ID
        //var agencyID = "8d087b9a-1ca5-47e3-9332-23659c5692b3";
        //Building Request 
        //data.agencyId = agencyID;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        protocall.view.buildHomeMenuBlk(page);
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        // var totalHTML = "";
        // var totalLen = 5;
        // for(var h = 0; h < totalLen; h++){
        // var template = staticTemplate.home.staticFeedTemplate();
        // totalHTML = totalHTML + template;
        // }


    },
    loadHomePageData: function (data, page) {
        //console.log(data, page);
        var feedHTML = "";
        //console.log("datalength",data.resultMap.userTab.length);
        if (data.resultMap.userTab != null && data.resultMap.userTab != "" && data.resultMap.userTab.length > 0) {
            var result = data.resultMap.userTab;
            for (var r = 0; r < result.length; r++) {
                //console.log(result[r]);
                var a = result[r];
                feedHTML += template.feedsTemplateHTML(a);
            }
            $(".container").addClass("container");
            $(".container").removeClass("container-maxwidth");
            $(".content-holder").empty();
            $(".content-holder").append($(feedHTML));
            //console.log(feedHTML)
        }
    },
    buildScreen: function (data, template) {


    },
    loadFeed: function () {
        var html = staticTemplate.home.staticFeedViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.home.staticFeedTemplate();
            totalHTML = totalHTML + template;
        }
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(totalHTML));
    },
    displayMyAlertsFeeds: function () {
        var totalLen = 1, totalHTML = "";
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.home.staticFeedTemplate();
            totalHTML = totalHTML + template;
        }
        var policyTemplate = staticTemplate.home.staticPoliciesFeedTemplate();
        totalHTML = totalHTML + policyTemplate;
        $(".content-holder").empty();
        $(".content-holder").append($(totalHTML));
    },
    displayArchiveFeeds: function () {
        var totalLen = 1, totalHTML = "";
        /*for(var h = 0; h < totalLen; h++){
         var template = staticTemplate.home.staticFeedTemplate();
         totalHTML = totalHTML + template;
         }*/
        var archiveTemplate = staticTemplate.home.staticArchiveFeedTemplate();
        totalHTML = archiveTemplate;
        $(".content-holder").empty();
        $(".content-holder").append($(totalHTML));
    },
    displayIncidentsFeeds: function () {
        var totalLen = 1, totalHTML = "";
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.home.staticFeedTemplate();
            totalHTML = totalHTML + template;
        }
        $(".content-holder").empty();
        $(".content-holder").append($(totalHTML));
    },
    displayPoliciesFeeds: function () {
        var totalHTML = "";
        var policyTemplate = staticTemplate.home.staticPoliciesFeedTemplate();
        totalHTML = totalHTML + policyTemplate;
        $(".content-holder").empty();
        $(".content-holder").append($(totalHTML));
    },
};
protocall.carrier = {
    initCarrierPage: function () {
        $(".content-holder").empty();
        var page = "carriers";
        protocall.view.buildSubMenuBlk(page);
        var template = staticTemplate.carriers.staticCarrierTemplate();
        $(".container").addClass("container-maxwidth");
        $(".container").removeClass("container");
        $(".content-holder").empty();
        $(".content-holder").append($(template));
    },
    loadFeed: function () {
        var html = staticTemplate.carriers.staticCarrierFeedViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.carriers.staticCarrierFeedViewTemplate();
            totalHTML = totalHTML + template;
        }
        $(".container").addClass("container-maxwidth");
        $(".container").removeClass("container");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(totalHTML));
    },
};
protocall.customer = {
    initCustomerPage: function () {
        $(".content-holder").empty();
        var page = "customers";
        protocall.view.buildSubMenuBlk(page);
        var template = staticTemplate.customers.staticCustomerTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(template));
        $(".container").addClass("container-maxwidth");
        $(".container").removeClass("container");
    },
    loadFeedSetting: function () {
        var html = staticTemplate.customers.staticSettingViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.customers.staticSettingViewTemplate();
            totalHTML = totalHTML + template;
        }
        $(".container").addClass("container-maxwidth");
        $(".container").removeClass("container");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(totalHTML));
    },
    loadFeed: function () {
        var html = staticTemplate.customers.staticCustomerViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.customers.staticCustomerViewTemplate();
            totalHTML = totalHTML + template;
        }
        $(".container").addClass("container-maxwidth");
        $(".container").removeClass("container");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(totalHTML));
    },
}

protocall.myRep = {
    initMyRepsPage: function () {
        $(".content-holder").empty();
        var page = "myreps"
        protocall.view.buildSubMenuBlk(page);
        protocall.view.buildSubMenuBlk(page);
        var template = staticTemplate.myreps.staticRepsTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(template));
        $(".container").addClass("container-maxwidth");
        $(".container").removeClass("container");
    }
}


protocall.myProfile = {
    loadFeedSetting: function ($el) {
        var html = staticTemplate.customers.staticSettingsTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        this.setSelectedClassPopContent($el);
        REFERENCE_TYPE = "agency_info";
        $("#id-settings-agency-bar").css("background-color", "#f34f4e");
        $("#id-settings-vendor-bar").css("background-color", "#ccc");
        hideAgencyTextboxes();
    },
    loadMyProfileView: function ($el) {
        var html = staticTemplate.customers.staticMyProfileViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        this.setSelectedClassPopContent($el);
        hideProfileTextboxes();
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

//--------------------------- Agency Logo Added By Manoj -----------------------------------
function readURL(input) {
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
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function checkboxStatus(idValue) {

    if (idValue === "radio-button-now") {
        document.getElementById("radio-button-now").checked = true;
        document.getElementById("radio-button-later").checked = false;
    } else if (idValue === "radio-button-later") {
        document.getElementById("radio-button-now").checked = false;
        document.getElementById("radio-button-later").checked = true;
    } else if (idValue === "radio-button-public") {
        document.getElementById("radio-button-public").checked = true;
        document.getElementById("radio-button-private").checked = false;
        document.getElementById("radio-button-custom").checked = false;
    } else if (idValue === "radio-button-private") {
        document.getElementById("radio-button-public").checked = false;
        document.getElementById("radio-button-private").checked = true;
        document.getElementById("radio-button-custom").checked = false;
    } else if (idValue === "radio-button-custom") {
        document.getElementById("radio-button-public").checked = false;
        document.getElementById("radio-button-private").checked = false;
        document.getElementById("radio-button-custom").checked = true;
    }
}


function moveani(idValue, idcontainerValue) {

    if (idValue === "id-switch-off") {
        document.getElementById(idcontainerValue).style.marginLeft = "50px";
    } else if (idValue === "id-switch-on") {
        document.getElementById(idcontainerValue).style.marginLeft = "-8px";
    }
}

function hideAgencyTextboxes() {
    $("#id-carrier-agencyid").hide();
    $("#id-carrier-masteragencyid").hide();
    $("#id-carrier-agencytype").hide();
    $("#id-carrier-agencyname").hide();
    $("#id-carrier-agencyaddress1").hide();
    $("#id-carrier-agencyaddress2").hide();
    $("#id-carrier-agencycity").hide();
    $("#id-carrier-agencystate").hide();
    $("#id-carrier-agencyzipcode").hide();
    $("#id-carrier-agencyphone").hide();
    $("#id-carrier-agencyemail").hide();
}


function hideProfileTextboxes() {
    $("#id-settings-profileName").hide();
    $("#id-settings-profilePhonenumber").hide();
    $("#id-settings-profileEmailId").hide();
}

function hideVendorTextboxes() {
    $("#id-vendor-preferredvendorid").hide();
    $("#id-vendor-type").hide();
    $("#id-vendor-name").hide();
    $("#id-vendor-phone").hide();
    $("#id-vendor-address1").hide();
    $("#id-vendor-address2").hide();
    $("#id-vendor-city").hide();
    $("#id-vendor-state").hide();
    $("#id-vendor-zipcode").hide();
}

function editAgencySaveData() {
    addBottomBorder();

    hideAgencyTextboxes();
    document.getElementById("id-carrier-edit").innerHTML = "edit";
    document.getElementById("id-c-agencyid").innerHTML = document.getElementById("id-carrier-agencyid").value;
    document.getElementById("id-c-masteragencyid").innerHTML = document.getElementById("id-carrier-masteragencyid").value;
    document.getElementById("id-c-agencytype").innerHTML = document.getElementById("id-carrier-agencytype").value;
    document.getElementById("id-c-agencyname").innerHTML = document.getElementById("id-carrier-agencyname").value;
    document.getElementById("id-c-agencyaddress1").innerHTML = document.getElementById("id-carrier-agencyaddress1").value;
    document.getElementById("id-c-agencyaddress2").innerHTML = document.getElementById("id-carrier-agencyaddress2").value;
    document.getElementById("id-c-agencycity").innerHTML = document.getElementById("id-carrier-agencycity").value;
    document.getElementById("id-c-agencystate").innerHTML = document.getElementById("id-carrier-agencystate").value;
    document.getElementById("id-c-agencyzip").innerHTML = document.getElementById("id-carrier-agencyzipcode").value;
    document.getElementById("id-c-agencyphone").innerHTML = document.getElementById("id-carrier-agencyphone").value;
    document.getElementById("id-c-agencyemail").innerHTML = document.getElementById("id-carrier-agencyemail").value;
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

}

function editAgencyEditData() {
    removerBottomBorder();
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
    $("#id-carrier-agencyid").show();
    $("#id-carrier-masteragencyid").show();
    $("#id-carrier-agencytype").show();
    $("#id-carrier-agencyname").show();
    $("#id-carrier-agencyaddress1").show();
    $("#id-carrier-agencyaddress2").show();
    $("#id-carrier-agencycity").show();
    $("#id-carrier-agencystate").show();
    $("#id-carrier-agencyzipcode").show();
    $("#id-carrier-agencyphone").show();
    $("#id-carrier-agencyemail").show();

}

function editVendorSaveData() {
    addBottomBorder();
    document.getElementById("id-carrier-edit").innerHTML = "edit";
    $("#id-v-preferredvendorid").show();
    $("#id-v-vendortype").show();
    $("#id-v-vendorname").show();
    $("#id-v-vendorphone").show();
    $("#id-v-address1").show();
    $("#id-v-address2").show();
    $("#id-v-city").show();
    $("#id-v-state").show();
    $("#id-v-zipcode").show();
    hideVendorTextboxes();
    document.getElementById("id-v-preferredvendorid").innerHTML = document.getElementById("id-vendor-preferredvendorid").value;
    document.getElementById("id-v-vendortype").innerHTML = document.getElementById("id-vendor-type").value;
    document.getElementById("id-v-vendorname").innerHTML = document.getElementById("id-vendor-name").value;
    document.getElementById("id-v-vendorphone").innerHTML = document.getElementById("id-vendor-phone").value;
    document.getElementById("id-v-address1").innerHTML = document.getElementById("id-vendor-address1").value;
    document.getElementById("id-v-address2").innerHTML = document.getElementById("id-vendor-address2").value;
    document.getElementById("id-v-city").innerHTML = document.getElementById("id-vendor-city").value;
    document.getElementById("id-v-state").innerHTML = document.getElementById("id-vendor-state").value;
    document.getElementById("id-v-zipcode").innerHTML = document.getElementById("id-vendor-zipcode").value;
}

function editVendorEditData() {
    removerBottomBorder();
    document.getElementById("id-carrier-edit").innerHTML = "Save";

    $("#id-vendor-preferredvendorid").show();
    $("#id-vendor-type").show();
    $("#id-vendor-name").show();
    $("#id-vendor-phone").show();
    $("#id-vendor-address1").show();
    $("#id-vendor-address2").show();
    $("#id-vendor-city").show();
    $("#id-vendor-state").show();
    $("#id-vendor-zipcode").show();
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

function editProfileData() {

    var className = document.getElementsByClassName("agenygroup-block");
    for (var i = 0; i < className.length; i++) {
        className[i].style.borderBottom = "0px";
    }

    document.getElementById("id-submenu-title").innerHTML = "Save";

    $("#id-settings-profileName").show();
    $("#id-settings-profilePhonenumber").show();
    $("#id-settings-profileEmailId").show();

    document.getElementById("id-settings-profileName").value = document.getElementById("id-set-profileName").innerHTML;
    document.getElementById("id-settings-profilePhonenumber").value = document.getElementById("id-set-profilePhone").innerHTML;
    document.getElementById("id-settings-profileEmailId").value = document.getElementById("id-set-profileEmailId").innerHTML;

    $("#id-set-profileName").hide();
    $("#id-set-profilePhone").hide();
    $("#id-set-profileEmailId").hide();
}

function saveProfileData() {

    var className = document.getElementsByClassName("agenygroup-block");
    for (var i = 0; i < className.length - 1; i++) {
        className[i].style.borderBottom = "1px solid #ccc";
    }

    document.getElementById("id-submenu-title").innerHTML = "edit";

    $("#id-settings-profileName").hide();
    $("#id-settings-profilePhonenumber").hide();
    $("#id-settings-profileEmailId").hide();

    document.getElementById("id-set-profileName").innerHTML = document.getElementById("id-settings-profileName").value;
    document.getElementById("id-set-profilePhone").innerHTML = document.getElementById("id-settings-profilePhonenumber").value;
    document.getElementById("id-set-profileEmailId").innerHTML = document.getElementById("id-settings-profileEmailId").value;

    $("#id-set-profileName").show();
    $("#id-set-profilePhone").show();
    $("#id-set-profileEmailId").show();

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

function editProfileImage() {
    document.getElementById("id-profileedit-fileOpenDialgue").click();
    var uploadElement = document.getElementById('id-profileedit-fileOpenDialgue'),
            alertValue = function () {
                if (uploadElement.value) {
                    var startIndex = (uploadElement.value.indexOf('\\') >= 0 ? uploadElement.value.lastIndexOf('\\') :
                            uploadElement.value.lastIndexOf('/'));
                    var filename = uploadElement.value.substring(startIndex);
                    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                        filename = filename.substring(1);
                    }
                }
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#id-profileedit-image').attr('src', e.target.result);
                };
                reader.readAsDataURL(uploadElement.files[0]);
            };

    if (window.addEventListener) {
        uploadElement.addEventListener('change', alertValue);
    }
    else {
        uploadElement.attachEvent('onchange', alertValue);
    }



}

function editDataInfo() {

    if (REFERENCE_TYPE === "agency_info") {
        var innerHtmlValue = document.getElementById("id-carrier-edit").innerHTML;
        if (innerHtmlValue.trim() === "edit") {
            editAgencyEditData();
            IsAgencyDataChanged = true;
        } else {
            editAgencySaveData();
        }
    } else if (REFERENCE_TYPE === "vendor_info") {
        var innerHtmlValue = document.getElementById("id-carrier-edit").innerHTML;
        if (innerHtmlValue.trim() === "edit") {
            editVendorEditData();
            IsVendorDataChanged = true;
        } else {
            editVendorSaveData();
        }
    } else if (REFERENCE_TYPE === "profile_editinfo") {
        var innerHtmlValue = document.getElementById("id-submenu-title").innerHTML;
        if (innerHtmlValue.trim() === "edit") {
            editProfileData();
        } else {
            saveProfileData();
        }
    }
}

//------------------------------------------------------------------------------

