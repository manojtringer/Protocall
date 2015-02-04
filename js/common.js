/* jQuery should be loaded before using this */

/**************** Common configuration *********************/
// vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
// 		(/firefox/i).test(navigator.userAgent) ? 'Moz' :
// 		(/trident/i).test(navigator.userAgent) ? 'ms' :
// 		'opera' in window ? 'O' : '',
//         isAndroid = (/android/gi).test(navigator.appVersion),
//         isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
//         isPlaybook = (/playbook/gi).test(navigator.appVersion),
//         isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),
// 
//         has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(),
//         hasTouch = 'ontouchstart' in window && !isTouchPad,
//         hasTransform = vendor + 'Transform' in document.documentElement.style,
//         hasTransitionEnd = isIDevice || isPlaybook,
//         
//         RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize'
//         START_EV = hasTouch ? 'touchstart' : 'mousedown';
//         MOVE_EV = hasTouch ? 'touchmove' : 'mousemove';
//         END_EV = hasTouch ? 'touchend' : 'mouseup';
//         CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseout';
//         
// browserPrefix = $.browser.webkit?"webkit":($.browser.mozilla?"moz":($.browser.msie?"ms":($.browser.opera?"o":"")));
// cssPrefix = $.browser.webkit?"-webkit-":($.browser.mozilla?"-moz-":($.browser.msie?"-ms-":($.browser.opera?"-o-":"")));
// 
// BS = {
//   filereader: typeof FileReader != 'undefined',
//   dnd: 'draggable' in document.createElement('span'),
//   formdata: !!window.FormData,
//   progress: "upload" in new XMLHttpRequest,
//   storages: typeof(Storage)!=="undefined"?true:false,
//   workers: typeof(Worker)!=="undefined"?true:false,
//   websql: window.openDatabase?true:false,
//   fileSystem: (window.requestFileSystem || window.webkitRequestFileSystem)?true:false,
//   indexedDb: window.mozIndexedDB?window.mozIndexedDB:(window.webkitIndexedDB? window.webkitIndexedDB:false),
//   indexedDbDelete: window.indexedDB?(window.indexedDB.deleteDatabase?true:false):false
// };        
//   
//   
browserPrefix = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
		(/firefox/i).test(navigator.userAgent) ? 'moz' :
		(/trident/i).test(navigator.userAgent) ? 'ms' :
		'opera' in window ? 'o' : '';
/*******************************************************/   

// if same js file is called multiple times, use a global var to check the loading scripts and loaded scripts to check the state


// ENVIRONMENT
var environment = "live";  //dev, live

API_CONTROLS_LIST = "/api/";

API_ROOT = "https://2-dot-proto-call-test.appspot.com";
// Constants

CHANNEL_API_JS = "/_ah/channel/jsapi";
CHANNEL_API = "reset/channel"; // channelToken
MONTH_SHORT_NAME = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
DEFAULT_USER_AVATAR = "images/default-avatar.png";

PAGE_URL = {"login":"", "myDevices":"mydevices"};
OVERLAY_TITLE = {"signup":"Sign Up", "invite":"Invite", "login":"Login", "addDeviceHelp":"Add Device Help", "addNewDevice":"Add Device", "accessRequest": "Access Request"};
KEY_PRESSED = {"ESC":27,"ENTER":13, "BACKSPACE":8};
// [“sakthi.v@tringapps.com”] Blocked user email id as json array

DEVICE_TYPE = {printer:"Printer", router:"Router"};
// $LOCATION_NAME ="http://protocallfy-dev.appspot.com/country.json"
// $data = json_decode($LOCATION_NAME, true);
 // console.log('country array');
// console.log($LOCATION_NAME);
VOWEL = {"a":true, "e":true, "i":true, "o":true, "u":true, };

ERROR_MSG = {
    ajaxFailed: "Oops! This action could not be completed now! Please try again"
};
// "Oops! Server is unreachable.Please try again."
// "Oops! Server is down.Please try again."
// "Oops! This action could not be completed now! Please try again"
SPINNER_MSG = {
   
}

PROMPT_MSG = {
    addDevice: "Do you want to add {device} under your protocallfy profile?"
}
// page names stored
LOGIN_PAGE = "login";
MY_HOME_PAGE = "home";
CustomerFeed_Page= 'loadhome';
MY_CUSTOMER_PAGE = "mycustomer";
CUSTOMER_PROFILE_PAGE = "customerprofile";
MY_CARRIER_PAGE = "mycarrier";
MY_REPS_PAGE = "myreps";
MY_SETTINGS_PAGE = "mysettings";
//regular expressions
PHONE_REGEX = /((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}/;
MULTIPLE_EMAIL_REGEX = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*([,])*)*$/;
EMAIL_REGEX = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
NAME_REGEX = /^[a-zA-Z ]*$/;
INT_REGEX = /^[0-9]+$/;
ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9-_]+$/;
USERNAME_REGEX = /^[a-zA-Z0-9-_]+$/;
URL_REGEX = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
// URL_REGEX_2 = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
var stable_icon = true; // invite icon highlight
//other constants
MENU_HEIGHT = 40;
FORM_SUBMIT_OPACITY = 0.5;

//global var
var user = null;                // user object holding user personal info
var myHome = null;           // object holding the information about default home page
var myCarrier = null;        // object holding the information about carrier details
var myCustomer = null;       // object holding the information about customer
var customerProfile= null;   //object holding each customer profile details    
var myReps = null;           //object holding represntative details
var carrierProfile = null;   //object holding each carrier information
var mySettings = null;       //object holding setting details
	   
//var myDevicesview = null;
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
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
protocall = {
    init: function() {
		console.log("came2",loggedIn);
        var hash = window.location.hash.replace("#", "");
        if(networkStatus) {
            //if required the callbacks can be passed;
            new networkStatus();
        }
	    if(this.isLoggedIn()) {
		    //this.displayLoginPage();
			console.log("one",loggedIn);
			this.loadPage(localStorage.currentPage);
        } else {
           console.log(API_ROOT+CHANNEL_API_JS);
			var s = new loadScripts(API_ROOT+CHANNEL_API_JS, function() {
			       //jini.channel.getToken();
				   
			});
		    this.loadPage(localStorage.currentPage);
			
            setTimeout(function() {
                window.scrollTo(0,1); //to fix refresh scrolling issue when page is reloaded with page scrolled
            }, 300);
        }
		console.log("calling");
		//protocall.view.pageTransition(LOGIN_PAGE, MY_STATIC_PAGE);
        this.createEvents();
        if(hash!="") {
            hash = hash.split("/");
            if(hash[0]=="resetpassword") {
                protocall.displayResetPassword(hash);
            }
        }
        //create common event listeners
    },
    editProfile: function(e) {
        
    },
    logout: function(e) {
        if(networkStatus) {
            protocall.channel.closeChannel(); 
            protocall.ajax.request(API+LOGOUT_URL, "", "GET", function() {
                protocall.clearPrevPageObj();
              //  localStorage.clear();
                protocall.view.pageTransition(null, LOGIN_PAGE);
        
                //reset all global variable
                user = null;                // user object holding user personal info
                myDevices = null;           // object holding the information about my devices
                deviceController = null     // object holding the device details and controller functions
            });
        } else {
            //need to find clearing cross domain session
            toast.display("Please check your network connection");
        }
    },
    displayResetPassword: function(data) {
        window.location.hash = "";
        protocall.logout();
        var obj = {};
        obj.type = data[0];
        obj.token = data[1];
        var html = protocall.html.overlay.getResetPasswordUI(obj);
        var $overlay = $("#overlay");
        $("#overlay .overlay_content .content_area").html(html);
        $overlay.css({"display":"block", "opacity":"0"});
        protocall.displayOverlay();
    },
    removeSpace: function(str) {
        return str.replace(/ /g,'');
    },
    loadPage: function(page) {
	console.log(17171717)
	this.clearPrevPageObj();
	if(page && page==CustomerFeed_Page) {
			myHome =null;	
			//alert(page);
            protocall.loadhome_data();
            localStorage.currentPage = CustomerFeed_Page;
       }else if(page && page==MY_CARRIER_PAGE){
	          myCarrier =null;	
			//alert(page);
            protocall.loadcarrier_data();
            localStorage.currentPage = MY_CARRIER_PAGE;
			}
            else {
				
			    protocall.loadcarrier_data();
                localStorage.currentPage = CustomerFeed_Page;
                this.clearStorage();
            }
               console.log("two",loggedIn);
		
    },
    clearPrevPageObj: function() {
        if(myHome) {
            myHome.__destructor();
			console.log(1)
            myHome = null;
        }
        if(myCarrier) {
            myCarrier.__destructor();
            myCarrier = null;
        }
        if(myCustomer) {
            myCustomer.__destructor();
            myCustomer = null;
        }
		if(customerProfile) {
            customerProfile.__destructor();
            customerProfile = null;
        }
		if(carrierProfile) {
            carrierProfile.__destructor();
            carrierProfile = null;
        }
		if(myReps) {
            myReps.__destructor();
            myReps = null;
        }
		if(mySettings) {
            mySettings.__destructor();
            mySettings = null;
        }
    },
    createEvents: function() {
		console.log("event create");
        $(document).keyup(function(e) {
            protocall.handleShortCuts(e);
        });
        $(document).click(function(e) {
            //callback.call(protocall, e, options.data);
			console.log("handle",e.target);
			console.log('protocall');
            protocall.handleClick(e);
			
        });
		 // $(".menuHome").click(function(e) {
            // //callback.call(protocall, e, options.data);
			// console.log("handle",e.target);
            // protocall.handleClick(e);
			
        // });
		$(".cont-img").click(function(e) {
			var img_id = $(this).attr('id');
			
			if(img_id =="invite_img"){
				$('#invite_img').addClass("invite_over");
				$('#thing_img').removeClass("thing_over");
				$('#thingshow_slide').hide();
				$('#inviteshow_slide').show();
				 $('#thg_txt').css("color","#C6C6C6");
                               $('#invt_txt').css("color","#FFFFFF");
				}else if(img_id =="thing_img"){
				
				$('#thing_img').addClass("thing_over");
				$('#invite_img').removeClass("invite_over");
				$('#thingshow_slide').show();
				$('#inviteshow_slide').hide();
				 $('#invt_txt').css("color","#C6C6C6");
                               $('#thg_txt').css("color","#FFFFFF");
			}	
		});
		var scrollPosition;
		var animatePosition=0;
		var flag = false;
		var a = 0;
		var b = 0;
        $('#thingshow_slide').scroll(function() {
			var scroll = $('#thingshow_slide').scrollTop();
			
			if (scroll > 370) {
				a = -(scroll-370) ; 
				if(a <=50 ){
					$('#personal_machine').css({"position":"fixed","margin-top":a+"px"});
					if (scroll >= 423) {
						$('#personal_autodup').show();
						a = 50;
						}else{
						$('#personal_autodup').hide();

					}
					
					}else{
					
					$('#personal_autodup').hide();
					}
			} else {
				
				$('#personal_machine').css({"position":"fixed","margin-top":"0px"});
				$('#personal_autodup').hide();
				if (scroll >= 423) {
					$('#personal_autodup').hide();
					
				}
			}
			
			
			if (scroll > 736) {
				b=-(scroll-736) ; 
				if(b<=50){
					$('#personal_autodup').css({"position":"fixed","margin-top":b+"px"});
					if (scroll > 785) {
						$('#personal_autodup').hide();
						$('#personal_securitydup').show();
						}else{
						$('#personal_securitydup').hide();
						$('#personal_autodup').show();
					}
					}else{
					$('#personal_autodup').css({"position":"fixed","margin-top":"0px"});
				}
			}
			else{
				$('#personal_autodup').css({"position":"fixed","margin-top":"0px"});
				$('#personal_securitydup').hide();
			}
        });
        $(".menu-account").click(function(e) {
            protocall.toggleProfileMenu(e);
        });
        $(window).on("resize", function(e) {
            protocall.handleResize(e);
        });
        $(".menuIcon.btn-nav").click(function(e) {
            protocall.toggleMenu(e);
        });
        $(".nested-menu-toggle").click(function(e) {
            var $el = $(e.target).parent().parent();
            if($el.data("type")=="togglesubmenu") {
                protocall.menu.toggleSubMenu($el);
            }
        });
    },
    handleShortCuts: function(e) {
        // document.activeElement
        // $("*:focus")
        var code = (e.which)
        if(KEY_PRESSED.ESC) {
            protocall.closeDropMenu();
            if($(".promptMsg").length>0) {
                protocall.hideOverlay();
            } else if($(".promptMsg").length>0) {
                $(".promptMsg").submit();
            }
        }
    },
    clickEvents:function(e){
     	
       var $click = $(e.currentTarget);
       if($click.data("type")=="clickon") {
       	console.log(10101010);
            var toPage;
            if($click.data("topage")==MY_HOME_PAGE) {
            	console.log(13131313);
                toPage = MY_HOME_PAGE;
            } else  if($click.data("topage")==MY_CUSTOMER_PAGE){
			console.log(1414141414);
			toPage = MY_CUSTOMER_PAGE;
			console.log(1515151515);
			}
			else  if($click.data("topage")==MY_CARRIER_PAGE){
			console.log(1414141414);
			toPage = MY_CARRIER_PAGE;
			console.log(1515151515);
			}
			else  if($click.data("topage")==CUSTOMER_PROFILE_PAGE){
			console.log(1414141414);
			toPage = CUSTOMER_PROFILE_PAGE;
			console.log(1515151515);
			}
			else  if($click.data("topage")==MY_REPS_PAGE){
			console.log(1414141414);
			toPage = MY_REPS_PAGE;
			console.log(1515151515);
			}
			else  if($click.data("topage")==MY_SETTINGS_PAGE){
			console.log(1414141414);
			toPage = MY_SETTINGS_PAGE;
			console.log(1515151515);
			}
           else {
                //default page
				console.log(2000000)
                toPage = MY_HOME_PAGE;
            }
            protocall.view.pageTransition(localStorage.currentPage, toPage);
			console.log(1616161616);
         }
		 
		 console.log("click",$click);
     } ,   
     navigation_slide:function(e){
     	
      	    
       var current_attr = $(e.currentTarget).attr("slide");
         if(current_attr == "slide-trigger")
         {
        	 	$( "#page-slideup" ).css("display","block");
        	 	
            setTimeout(function() {
                	$( "#page-slideup" ).css("top","0%");
   		  	   
            }, 100);        	 	
       
         } 
         else  if(current_attr == "slide-down"){
           
            $( "#page-slideup" ).css("top","101%");
   			 setTimeout(function() {
                	$( "#page-slideup" ).css("display","none");
            }, 300);  
            
   		 }
     } ,   
    handleClick: function(e) {
	console.log('handleclick');
        var $el = $(e.target);
		/*if($el.data("type")=="clicklink") {
			alert("came");
			var referencepage = $el.data('ref');
			    protocall.destructprotocall_data();
               $("#pContent").show();				
			 if(referencepage == "loadhome") {
                toPage = "loadhome";
				protocall.loadhome_data();
			  }
			  if(referencepage == "loadcarrier") {
                toPage = "loadcarrier";
				protocall.loadcarrier_data();
			  }
		}	*/
		if($el.data("type")=="clicklink") {
			//alert("came");
			var referencepage = $el.data('ref');
			 $("#pContent").show();				
			 if(referencepage == "loadhome") {
                toPage = "loadhome";
				protocall.loadhome_data();
			  }
			  else if(referencepage == "loadcarrier") {
                toPage = "loadcarrier";
				protocall.loadcarrier_data();
			  }
		}
          else if($el.data("ref")=="loadhome") {
			  protocall.loadhome_data();
			  }
		
        protocall.closeDropMenu(e);
    },
	loadhome_data: function() {
	if( myHome == null){
			console.log("createdhome");
			        var s = new loadScripts("js/home.js?"+(new Date).getTime(), function() {
				    myHome = new protocall.myHome();
					console.log('myhome load');
            });
		 }else{
		console.log('not null');
		 }
		 },
	
	loadcarrier_data: function() {
	if( myCarrier == null){
			console.log("createdhome");
			        var s = new loadScripts("js/carrier.js?"+(new Date).getTime(), function() {
				    myCarrier = new protocall.myCarrier();
					console.log('myCarrier load');
            });
		 }else{
		 myCarrier = new protocall.myCarrier();
		 }
		 },
	
	destructprotocall_data:function(){
		
		$("#pContent").hide();
		$("#contentArea").empty();
		myHome=null;
		myCarrier=null;
	},
	
	reset_passing: function() {
		
		var reset_forget = $("#newpass").val();
		var new_forget = $("#crpass").val();
		var error_trough = $("#notmatch");
		
		var first_trough = $("#new_lent");
		var second_trough = $("#crpass_lent");
		
		var mobj = {}
		mobj.id= reset_passwordid;
		mobj.password= reset_forget;
		
		//console.log("mobj",JSON.Stringify()
		
					if($("#newpass").val().length >=6){
					
					  first_trough.hide();
								if($("#crpass").val().length >=6){
								   second_trough.hide();
										if( reset_forget == new_forget){
													if(reset_passwordid!=""){
															
																		error_trough.hide();				
																		var request = gapi.client.protocallfy.resetPassword(mobj).execute(function(resp) {	
																			
																			
																			console.log(JSON.stringify(resp));
																						if(resp.responseCode == 200) {
																						
																						   data = {"title":resp.alertMessage.title, "action":"", "message":resp.alertMessage.message};
																						   protocall.view.prompt(data);
																						   
																						 } else {
																						   
																					
																					
																						   data = {"title":resp.alertMessage.title, "action":"", "message":resp.alertMessage.message};
																						   protocall.view.prompt(data);
																						}
																		});
														
														
													}
									  }
									  else{
										error_trough.show();
									  }
							  }else{
							  second_trough.show();
								
							  }
				  }else{
				  first_trough.show();
					
				  }
	  
    },
	
	
	
	forget_passwd: function() {
       var email_forget = $("#f-email").val();
	   
		var mobj = {}
		mobj.email= email_forget;
		   
	   console.log("mobj",mobj)
	   
			var $forgotPass = $(".forget-pass");
		var $blockhd = $(".blockhd");
			var $respas = $(".reset-pass");
			//var curmail = $("#f-email").val();
			
			//$forgotPass.show();
			//$blockhd.show();
			//$respas.hide();
	   if( this.validateEmail($("#f-email").val())){
	   $("#emaillen").hide();
	    
	   if(email_forget!=""){
		//this.makeBackgroundCall("forgotPassword",mobj,this.forgetresp,"forgotPassword");
		
		   var request = gapi.client.protocallfy.forgotPassword(mobj).execute(function(resp) {	
			   console.log("mobqwqwqwj",resp)
			   if(resp.responseCode == 200) {
				   
				   data = {"title":resp.alertMessage.title, "action":"", "message":resp.alertMessage.message};
				   protocall.view.prompt(data);
				   
			   } else {
			   
			      data = {"title":resp.alertMessage.title, "action":"", "message":resp.alertMessage.message};
				   protocall.view.prompt(data);
				   
			   }

		   });
		
		
       }
	   
	   }
	   else{
	      $("#emaillen").show();
	   }
    },
	
	validateEmail: function (email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	},
    showSignUpBlk: function() {
        var $blk = $("#signInBlk");
        $blk.css({"opacity":"0"});
        protocall.events.createTransitionEndEvent($blk, function(e) {
            protocall.events.removeTransitionEndEvent($blk);
            $blk.hide();
            $(".authBlkBg").addClass("signupBlkBg");
            $("#signUpBlk").css({"display":"block","opacity":"1"});
            $("#r-firstName").focus();
            $("#loginPage").scrollTop(0);
            $(".register_icon_blk").hide();
        });
    },
    closeSignUpBlk: function() {
        var $blk = $("#signUpBlk");
        $("#signUpBlk").css({"opacity":"0"});
        $(".authBlkBg").removeClass("signupBlkBg");
         protocall.events.createTransitionEndEvent($blk, function(e) {
            protocall.events.removeTransitionEndEvent($blk);
            $blk.hide();
            $("#signInBlk").css({"display":"block","opacity":"1"});
            $("l-firstName").focus();
            $("#loginPage").scrollTop(0);
            $(".register_icon_blk").show();
        });
    },
    togglePasswordVisibility: function($el) {
        var id = $el.data("id");
        if($el.is(":checked")) {console.log($("#"+id).length)
            $("#"+id).attr("type", "text");
        } else {
            $("#"+id).attr("type", "password");
        }
    },
    handleResize: function(e) {
        if(localStorage.currentPage=="devicecontroller" && deviceController) {
            deviceController.handleResize(e);
        }
        var h = $(window).height();
        protocall.positionOverlay();
       if($(window).width()<1000) {
            this.menu.collapse();
        }
        
        if(h>635) {
            var t = ((h-76-135-420)/2); //window height - header height - footer height - register block height
            console.log(t)
            $("#auth-valign").css("padding-top", t+"px");
        } else {
            $("#auth-valign").css("padding-top", "0px");
        }
    },
    toggleProfileMenu: function(e) {
        e.stopPropagation();
        var $dropmenu = $("#dropmenu");
        if(!$dropmenu.is(":visible")) {
            this.showProfileMenu(e);
        } else {
            this.closeDropMenu(e);
        }
    },
    showProfileMenu: function(e) {
        var $html = this.getProfileMenuHtml();
        var $dropmenu = $("#dropmenu");
        $("#dropmenu .drop_content").html($html);
        var w = $(window).width()-160;
        $dropmenu.addClass("profile no-anim");
        $("#dropmenu").css({"display":"block", "opacity":"0","top":"25px", "left":w+"px"});
        $dropmenu.removeClass("no-anim");
        setTimeout(function() {
            $dropmenu.css({"opacity":"1","top":"55px"});
        }, 0);
    },
    closeDropMenu: function(e) {;
        var menu = $("#dropmenu");
        if(menu.is(":visible")) {
            // create animation and event to hide it 
            protocall.events.createTransitionEndEvent(menu, function(e) {
                protocall.events.removeTransitionEndEvent(menu);
                menu.hide();
                $("#dropmenu .drop_content").empty();
                menu.attr("class", "arrow_box anim");
            });
            menu.css({"opacity":"0", "top":(menu.position().top-30)+"px"});
        }
    },
    getProfileMenuHtml: function() {
        return $('<ul class="no-bullets profile_menu_options list-border"><li onclick="protocall.profile.displayEditProfile(this)"><div><a href="#profile" onclick="protocall.editProfile(event);">Edit Profile</a></div></li><li onclick="protocall.logout(event);"><div><a href="#login">Sign Out</a></div></li></ul>');
    },
    appendOverlayContent: function($content, clear) {
        if(clear) {
            $("#overlay .overlay_content .content_area").empty();
        }
        $("#overlay .overlay_content .content_area").append($content);
    },
    positionOverlay: function() {
        var $overlay = $("#overlay");
        if($overlay.length>0 && $overlay.is(":visible")) {
            var $overlay_content = $(".overlay_content");
            var wW = $(window).width();
            var wH = $(window).height();
            var t = ($(window).height()-$overlay_content.height())/2;
            t = t<20?20:t;
            $overlay_content.css("top", t+"px");
        }
    },
    toggleMenu: function(e) {
        var $obj = $(e.currentTarget);
        if($obj.data("toggle")=="collapse") {
            this.menu.collapse();
        } else {
            this.menu.expand();
        }
		},
	signoutMenu: function(e) {
	var $obj = $(e.currentTarget);
		if($obj.data("toggle")=="openOut") {
		console.log(202020)
		this.menu.openOut();
		}else {
            this.menu.closeIn();
        }
		
    },
    isLoggedIn: function() {
		//alert("cameee");
		console.log("three",loggedIn);
		
		//protocall.view.pageTransition(LOGIN_PAGE, MY_STATIC_PAGE);
        return localStorage.loggedIn?true:false;
    },
    setUrl: function(page) {
        page = page?page:'';
        location.href = '#' + page;
    },
    displayLoginPage: function() {
        this.setUrl(PAGE_URL.login);
        this.clearStorage();
    },
    clearStorage: function() {
        //localStorage.clear();
    },
    convertResStructure: function(data) {
        var newObj = {};
        try {
            for(var i in data) {
                if(i=="enrollmentURL" || i=="guid") {
                    continue;   
                }
                newObj[i] = {};
                newObj[i].items = [];
                if(typeof data[i]!="object") {
                    // throw "data is not object";
                    newObj[i] = data[i];
                }
                for(key in data[i]) {
                    if(key == "items" && data[i][key].values) {
                        for(var j=0;j<data[i].items.values.length;j++) {//console.log(data[i].items.values[j])
                            var innerObj = {};
                            for(var k=0;k<data[i].items.values[j].length;k++) {
                                innerObj[data[i].items.keys[k]] = data[i].items.values[j][k];
                            }
                            newObj[i].items.push(innerObj);
                        }    
                    } 
                    if(key!="items" && key!="values") {
                        newObj[i][key] = data[i][key];
                    }
                }
            }
            return newObj;
        } catch(e) {
            console.log("Error in processing data", e.message);
            return data;
        }
    },
    displayOverlay: function() {
        var $overlay = $("#overlay");
        if($overlay.length>0) {
            var $content = $("#overlay .content");
            $content.css({"max-height":($(window).height()-100)+"px", "overflow":"auto"});
            $overlay.css({"display":"block", "opacity":"0"});
            protocall.positionOverlay();
            $overlay.css({"display":"block", "opacity":"1"});
            if($overlay.find("form input[type='text']").length>0) {
                $overlay.find("form input[type='text']")[0].focus();
            } else {
                console.log($overlay.find("input:first-child").length)
                $overlay.find("input[type='submit']").focus();
            }
        }
    },
    hideOverlay: function() {
        var $overlay = $("#overlay");
        if($overlay.length>0 && $overlay.is(":visible")) {
            $overlay.css("opacity","0");
            protocall.events.createTransitionEndEvent($overlay, function(e) {
                protocall.events.removeTransitionEndEvent($overlay);
                $(".overlay_content .content_area").empty();
                $(".overlay_content").attr("class", "overlay_content");
                $("#overlay").hide();
				 $('#l-password').val('');
				 $('.form-submit').val('');
				 $(".addPlaceForm").removeClass("disable");
				 $(".signUpForm").removeClass("disable");
				 
				 
				var $forgotPass = $(".forget-pass");
				var $blockhd = $(".blockhd");
				var $respas = $(".reset-pass");
				var $forget_pas = $(".forget-pass");
				$forgotPass.show();
				$blockhd.show();
				$respas.hide();
				$forget_pas.hide();
				 
				
				var $loadhd = $(".loadhd");
				var $blk = $("#signUpBlk");
				$("#signUpBlk").css({"opacity":"0"});
				$(".authBlkBg").removeClass("signupBlkBg");
				protocall.events.createTransitionEndEvent($blk, function(e) {
					protocall.events.removeTransitionEndEvent($blk);
					$blk.hide();
					$("#signInBlk").css({"display":"block","opacity":"1"});
					$("l-firstName").focus();
					$("#loginPage").scrollTop(0);
					$(".register_icon_blk").show();
					
					//$loadhd.hide();
				});
				
            });
			
        }
    },
    getFormToJsonDS: function(form) {
        var obj = $(form).serializeArray();
        var output = {};
        for(var i=0;i<obj.length;i++) {
            output[obj[i].name] = obj[i].value;
        }
        return JSON.stringify(output);
    },
    getFormOverlayHtml: function(obj, title, buttonLabel) {
        buttonLabel = buttonLabel?buttonLabel:"Submit"
        var $blk = $("<div>");
        var $h = $('<h1 class="overlayHColor">'+title+'</h1>');
        $blk.append($h);
        var $div = $('<div class="content">');
        $blk.append($div);
        $div = $('<div>');
        $blk.append($div);
        obj.submit = obj.submit?obj.submit:"";
        var url = obj.url?obj.url:"";
        var $form = $('<form name="'+protocall.removeSpace(title)+'form" class="'+protocall.removeSpace(title)+'Form overlayForm" method="POST" action="'+url+'" onsubmit="event.preventDefault();'+obj.submit+'"><input type="hidden" name="deviceUDID" value="'+this.deviceUDID+'"><input type="hidden" name="code" value="'+obj.code+'">');
        $div.append($form);
        for(var i=0;i<obj.form.length;i++) {
            var $el = protocall.view.getOverlayFormField(obj.form[i]);
            $form.append($el);
        }
        var buttonObj = {"type":"button", "value":buttonLabel};
        var $el = protocall.view.getOverlayFormField(buttonObj);
        $form.append($el);
        return $blk
        
    },
    get_time_diff: function(datetime) {
        if(!datetime) return null;
        //var datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456";
        var datetime = new Date( datetime ).getTime();
        
        var now = new Date().getTime();
        if( isNaN(datetime) )
        {
            return "";
        }
        if (datetime < now) {
            var milisec_diff = now - datetime;
        } else {
            var milisec_diff = datetime - now;
        }
        var date_diff = new Date( milisec_diff );
        var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
        
        var hr = date_diff.getUTCHours();
        var min = date_diff.getUTCMinutes();
        var sec = date_diff.getUTCSeconds();
        
        var dayClass = days==0?'zero hide':'';
        days = (days>0 && days<10)?'0'+days:days;
        hr = hr<10?'0'+hr:hr;
        min = min<10?'0'+min:min;
        sec = sec<10?'0'+sec:sec;
        
        return "<div class='day_diff "+dayClass+"'>"+days + " Days </div><div class='time_diff'>"+ hr + " : " + min + " : " + sec + "</div>";
    },
    hasAccessGiven: function(obj, accessObj) {
        var id = obj.deviceUDID;
        var output = null; //console.log(accessObj)
        if(accessObj && accessObj.length>0) {
            for(var i=0;i<accessObj.length;i++) {
                if(accessObj[i].deviceID==id) {
                    output = accessObj[i];
                    break;
                }
            }
            return output;
        } else {
            return output;
        }
    },
    submitForm: function(form, callback, options) {
	//alert('add form');
	console.log(form)
        //$form = $($form);
        var success = false;
        try {
            options = options?options:{};
            options.data = options.data?options.data:null;
            success = protocall.validate.formData(form);
            if(success && !$(form).hasClass("disable")) {
                var url = $(form).attr("action");
                var method = $(form).attr("method");
                var data = protocall.getFormToJsonDS(form);
                options.callbackRef = options.callbackRef?options.callbackRef:this;
                callback = callback?callback:null;
                protocall.ajax.request(API+url, data, method, callback, options);
            }
        } catch(e) {
            console.log(e.message);
        }
    },
	
    sendAction: function(url) {
        var options = {};
        options.callbackRef = this;
        protocall.ajax.request(url, "", "GET", this.sendActionResp, options);
    },
    sendActionResp: function(data) {
        if(!data.error) {
            protocall.hideOverlay();
        } else {
            //display error message
        }
    }
}
protocall.menu = {
    expand: function() {
				
        },			
    collapse: function() {
    		console.log("sample")
      $(".nested-menu-toggle").hide();
  		//$(".home-map").css("margin-left","-=369","transition","0.25s");
  		
		$rpa =$( ".right-padding" );
        $rpa.css({
   		 	marginLeft: 0,
   		 	paddingLeft: 38,
  				});
				$rhb = $("#hBar");
				$rhb.css({
						 paddingLeft: 0,
						 zIndex: 1,
						 marginLeft: 0
						 });
					// $rmn =	$(".menu-notify");
					 // $rmn.css({
						// right: 0
						
						
						// });
				    $rhm = $( ".home-map" );
		             $rhm.css({
							marginLeft: 54
  				}				
  		        ); 
				$rvs = $( ".vertical-slide" );
				$rvs.css("marginLeft","0px");
				 $rvs.css({
							zIndex: 9999
  				}				
  		        ); 
		 protocall.events.createTransitionEndEvent(($($rpa,$rhb,$rhm,$rvs)), function() {
		 protocall.events.removeTransitionEndEvent($rpa,$rhb,$rhm,$rvs);
		 $( ".right-padding" ).css({
   		 	display:"block"
  				}
  		); 

		$( ".vertical-slide" ).css({
							opacity: 0
  				}				
  		        ); 
		  $(".expand-menu").css("opacity","1");
		  $(".expand-menu").addClass("animate-expand");
					$(".animate-expand").css({
				    left:-16
						}
						);	
		 });
		 // $(".menu-notify")css({
						// 'marginRight': '71',
						// 'right': '512',
						// 'position': 'absolute'
						// });
		  $(".left-menu").css("overflowY","hidden");
				$(".home-map").addClass("transition-title");
				 $( "#mBar" ).css({
   		 	     zIndex:0
  				 });
				 // $( ".Myhome" ).css({
   		 	     // opacity:0
  				 // });
				 // $( ".sp-home" ).css({
   		 	     // opacity:0
  				 // });
				
					console.log(60000)
					//$("#mBar").addClass("home-Bar"); 
		         //$("#mBar").removeClass("m-index");
  				
  		
  		//$(".Myhome").css("opacity","0");
  		
		//$("#hBar").removeClass("index-bar");
		$("#pContent").removeClass("index-bar");
		$("#hBar").removeClass("z-bar");
		$("#pContent").addClass("z-index");
		//$("#hBar").addClass("z-index");
		
        $(".nested-menu-blk").parent().css("height", MENU_HEIGHT+"px");
        //$("#page-menu").addClass("close");
       $("#page-menu").removeClass("m-open");
    },
    /*toggleSubMenu: function($el) {
        var nestedLi = $el.find(".nested-menu-blk ul li");
        if(nestedLi.length>0) {
           if($el.css("height")==MENU_HEIGHT+"px") {
                $el.css("height", ((nestedLi.length+1)*MENU_HEIGHT)+"px");
                $el.find(".nested-menu-toggle").addClass("rotate180");
           } else {
                $el.css("height", MENU_HEIGHT+"px");
                $el.find(".nested-menu-toggle").removeClass("rotate180");
           }
        }
    }*/
}

protocall.support = {
    isTransitionSupported: function() {
        var thisBody = document.body || document.documentElement,
            thisStyle = thisBody.style,
            support = thisStyle.transition !== undefined || 
                      thisStyle.WebkitTransition !== undefined || 
                      thisStyle.MozTransition !== undefined || 
                      thisStyle.MsTransition !== undefined || 
                      thisStyle.OTransition !== undefined;
        return support;
    }
}

protocall.auth = {
    resetPassword: function(form) {
        var success = false;
        try {
            success = protocall.validate.formData(form);
            if(success && !$(form).hasClass("disable")) {
                var data = this.getRegistrationDS(form);
                var options = {};
                options.callbackRef = this;
                // $(form).css("opacity", FORM_SUBMIT_OPACITY);
                $(form).addClass("disable");
                protocall.ajax.request(API+RESET_PASSWORD_URL, data, "POST", this.resetPasswordResp, options);
                //API
            }
        } catch(e) {
            console.log(e.stack);
        }
    },
	allowLocation:function(form){
	console.log("located map");
	 $(".fade-effect").css({
		'opacity':'1',
		'position':'relative',
		'top':'0'
	});
	$("#map-canvas").css({
		'opacity':'0',
		
	});
		
	},
    resetPasswordResp: function(data) {
        if(!data.error) {
            toast.display("Password changed successfully");
            protocall.hideOverlay();
        } else {
            toast.display(data.status);
            $(".resetPasswordForm").removeClass("disable");
            //$(".resetPasswordForm").css("opacity", "1");
        }
    },
    showForgotPassword: function() {
        // var $forgotPass = $(".forgotPasswordForm");
        // var $el = $forgotPass.find(".fp-msg");
		// $forgotPass[0].reset();
        // $el.find(".msg").html("")
        // $el.hide();
        // $forgotPass.find(".formElDiv").show();
        // $(".loginForm").hide();
        // $forgotPass.show();
		
		var $forgotPass = $(".forget-pass");
		var $blockhd = $(".blockhd");
		$forgotPass.show();
		$blockhd.hide();
		
    },
    closeForgotPassword: function() {
        var $forgotPass = $(".forgotPasswordForm");
        var $el = $forgotPass.find(".fp-msg");
        $forgotPass.hide();
        $(".loginForm").show();
        $forgotPass[0].reset();
        $el.find(".msg").html("")
        $el.hide();
        $forgotPass.find(".formElDiv").show();
        
    },
	
	
	//forget password sample
	
	addPlace: function(form) {
        var success = false;
        try {
            success = protocall.validate.formData(form);
			console.log(success)
            if(success && !$(form).hasClass("disable")) {
			console.log(success)
                var data = this.getRegistrationDS(form);
				console.log(form)
                var options = {};
                options.callbackRef = this;
                //$(form).css("opacity", FORM_SUBMIT_OPACITY);
                $(form).addClass("disable");
			
				/* ------------------------- end point  ------------------------------------------*/	
				// console.log(data);
                data = JSON.parse(data);
				var mobj = {}
				var email ={}
				
				console.log(data);
				
				
				mobj.name = data.title;
				mobj.addressLine1 = data.addressLine1;
				mobj.addressLine2 = data.addressLine2;
				mobj.country = data.country;
				mobj.state = data.state;
				mobj.zipCode = data.zipCode;
				// email.email = data.email;
				// mobj.email= email;
				// mobj.password= data.password;
				/* ------------------------- end point  ------------------------------------------*/
				
				console.log("reig",mobj);
				
				this.makeBackgroundCall("addPlace",mobj,this.addPlaceResp,"addPlace");
				
				
                //API
            }
        } catch(e) {
            console.log(e.stack);
        }
    },
	
	
	
	
	
    register: function(form) {
        var success = false;
        try {
            success = protocall.validate.formData(form);
            if(success && !$(form).hasClass("disable")) {
                var data = this.getRegistrationDS(form);
                var options = {};
                options.callbackRef = this;
                //$(form).css("opacity", FORM_SUBMIT_OPACITY);
                $(form).addClass("disable");
			
				/* ------------------------- end point  ------------------------------------------*/	
				// console.log(data);
                data = JSON.parse(data);
				var mobj = {}
				var email ={}
				
				console.log(data);
				console.log("data_name",data.firstName)
				
				mobj.name = data.firstName;
				email.email = data.email;
				mobj.email= email;
				mobj.password= data.password;
				/* ------------------------- end point  ------------------------------------------*/
				
				console.log("reig",mobj);
				
				this.makeBackgroundCall("signUp",mobj,this.registerResp,"signUp");
				
				
                //API
            }
        } catch(e) {
            console.log(e.stack);
        }
    },
    forgotPassword: function(form) {
        var success = false;
        try {
            success = protocall.validate.formData(form);
            if(success && !$(form).hasClass("disable")) {
                var data = $.trim($("#fp-email").val());
                var options = {};
                options.callbackRef = this;
                // $(form).css("opacity", FORM_SUBMIT_OPACITY);
                $(form).addClass("disable");
                protocall.ajax.request(API+FORGOT_PASSWORD_URL, data, "POST", this.forgotPasswordResp, options);
                //API
            }
        } catch(e) {
            console.log(e.message);
        }
    },
  
	login: function(form) {
		var success = false;
        try {
            success = protocall.validate.formData(form);
			
            if(success && !$(form).hasClass("disable")) {
                var data = this.getRegistrationDS(form);
				
				//	alert(data);
                var options = {};
                options.callbackRef = this;
                // $(form).css("opacity", FORM_SUBMIT_OPACITY);
                $(form).addClass("disable");
				
				/* ------------------------- end point  ------------------------------------------*/	
				// console.log(data);
                data = JSON.parse(data);
				var mobj = {}
				var email ={}
				email.email = data.email;
				mobj.email= email;
				mobj.password= data.password;
				/* ------------------------- end point  ------------------------------------------*/			
				//console.log("test",mobj);
				this.makeBackgroundCall("signIn",mobj,this.loginResp,"signIn");
				
			}
			} catch(e) {
            console.log(e.message);
        }
    },
	
	
	makeBackgroundCall: function(page,data,callback,deepPath) {
		
		//console.log("asdfadfasdfasdfadsf",data)
		var ref=page;
		var data=data;
		var path = this.getServerPath(deepPath);
		var request = path(data).execute(function(resp) {	
			if(resp.error) {
				//alert(JSON.stringify(resp));
			} else {
				console.log("coming here")
				if(typeof callback != "undefined" && callback != null) {
					callback(resp,page);
				} else {
					
				}
			}
		});
		return request;
	},
	
	
	getServerPath: function(deepPath) {
		var path = gapi.client.protocall;
	
		//console.log(deepPath);
		// for(var i=0; i<deepPath.length; i++) {
			// // console.log(path,deepPath[i]);
			// path = path[deepPath[i]];
		// }
		path = path[deepPath];
		return path;
	},
	
	
    getRegistrationDS: function(form) {
        var obj = $(form).serializeArray();
        var output = {};
        for(var i=0;i<obj.length;i++) {
            output[obj[i].name] = obj[i].value;
        }
        return JSON.stringify(output);
    },
	
	
    registerResp: function(data) {
        $(".registerForm").removeClass("disable");
		//alert("came");
		console.log("data",JSON.stringify(data));
	
       if(data.responseCode == 200) {
          
			//this.closeSignUpBlk();
			
			//this.closeSignUpBlk();
			// if( data.alertMessage.title != "undefined"){
			
		   // data = {"title":data.alertMessage.title, "action":"", "message":data.alertMessage.message};
			// }else{
			
			  // data = {"title":data.alertMessage.title, "action":"", "message":data.alertMessage.message};
			 // }
             data = {"title":data.alertMessage.title, "action":"", "message":data.alertMessage.message};
			protocall.view.prompt(data);
		  
        } else {
		  data = {"title":data.alertMessage.title, "action":"", "message":data.alertMessage.message};
				   protocall.view.prompt(data);
        }
    },
	addPlaceResp: function(data) {
	$(".addPlaceForm").removeClass("disable");
       // $(".registerForm").removeClass("disable");
		//alert("came");
		console.log("data",JSON.stringify(data));
       if(data.responseCode == 200) {
             data = {"title":"Add Profile", "action":"", "message":"Profile added successfully"};
			 protocall.view.prompt(data);
        } else {
		  data = {"title":data.alertMessage.title, "action":"", "message":data.alertMessage.message};
				   protocall.view.prompt(data);
        }
    },
    forgotPasswordResp: function(data) {
        var $form = $(".forgotPasswordForm");
        //$form.css("opacity", "1");
        $(".forgotPasswordForm").removeClass("disable");
        if(!data.error) {
            data = data.data;
            //toast.display(data.status);
            $(".forgotPasswordForm")[0].reset();
            var $el = $(".forgotPasswordForm .fp-msg");
            $el.find(".msg").html(data.status)
            $el.css("visibility", "visible");
            $el.show();
            $form.find(".formElDiv").hide();
        } else {
            toast.display(data.status);
            // handle the error
        }
    },

	loginResp: function(data) {
        // $(".loginForm").css("opacity", "1");
		
		console.log(JSON.stringify(data))
				
		console.log("----------------------------------------------------------------------")
		
        $(".loginForm").removeClass("disable");
        if(data.responseCode == 200) {
		  protocall.channel.createChannel();
            protocall.channel.init();
			toast.display(data.status);
			$(".loginForm")[0].reset();
			console.log("yes",loggedIn);
			
			console.log("ststic page");
			loggedIn=data.userProfile.isConfirmed;
			protocall.view.pageTransition(LOGIN_PAGE, MY_STATIC_PAGE);
			localStorage.loggedIn = "true";
        } else {
			console.log(data.alertMessage.description);
			data = {"title":data.alertMessage.title, "action":"", "message": data.alertMessage.message};
		    protocall.view.prompt(data);
        }
    },
    invite: function(form) {
        var success = false;
        try {
            success = protocall.validate.formData(form);
            //console.log();
            if(success && !$(form).hasClass("disable")) {
                var data = protocall.getFormToJsonDS(form);
                var options = {};
                options.callbackRef = this;
                //$(form).css("opacity", FORM_SUBMIT_OPACITY);
                $(form).addClass("disable");
                protocall.ajax.request(API+INVITE_URL, data, "POST", this.inviteResp, options);
                //API
            }
        } catch(e) {
            console.log(e.message);
        }
    },
    inviteResp: function(data) {
        //$(".inviteForm").css("opacity", "1");
        $(".inviteForm").removeClass("disable");
        if(!data.error) {
            data = data.data;
            //toast.display(data.status);
            data = {"title":OVERLAY_TITLE.invite, "action":"", "message": data.status};
            $(".inviteForm")[0].reset();
        } else {
            toast.display(data.status);
            // handle the error
        }
    },
    getInviteDS: function(form) {
        var $form = $(form);
        var ds = {};
        var contact = $(form).find("input[name=contact]").val();
        if(protocall.validate.emailValidation(contact)) {
            ds["email"] = contact;
        } else {
            var regex = /\d+/g;
            ds["phoneNo"] = contact.match(/\d+/g).join().replace(/,/g, "");
        }
        ds["name"] = $(form).find("#i-firstname").val();
        //
        //ds = {"email":"aruny.rajesh@gmail.com", "name":"Arun"};
        return JSON.stringify(ds);
    },
}
protocall.profile = {
    displayEditProfile: function() {
        var html = protocall.html.overlay.getEditProfileHtml();
        var $overlay = $("#overlay");
        $("#overlay .overlay_content").addClass("overlayFormContent");
        $("#overlay .overlay_content .content_area").html(html);
        $overlay.css({"display":"block", "opacity":"0"});
        protocall.positionOverlay();
        protocall.displayOverlay();
    },
    updateProfilePic: function(obj) {
        if (obj.files && obj.files[0] && typeof FileReader !== "undefined" && (/image/i).test(obj.files[0].type)) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(".editProfileForm .pic_blk img").attr('src', e.target.result);
                user.setProfilePic(e.target.result);
            }
            reader.readAsDataURL(obj.files[0]);
        }
        var formData = new FormData($(".editProfileForm")[0]);
        var options = {};
        options.callbackRef = this;
        options.contentType = false;
        options.processData = false;
        protocall.ajax.request(API+PROFILE_PIC_UPDATE_URL, formData, "POST", this.profilePicUpdateResp, options);
    },
    profilePicUpdateResp: function(data) {
        if(!data.error) {
            data = data.data;
            toast.display(data.status);
        } else {
            toast.display(data.status);
            // handle the error
        }
    },
    updateProfileForm: function(form) {
        var success = false;
        try {
            success = protocall.validate.formData(form);
            if(success && !$(form).hasClass("disable")) {
                var data = protocall.getFormToJsonDS(form);
                var options = {};
                options.callbackRef = this;
                //$(form).css("opacity", FORM_SUBMIT_OPACITY)
                $(form).addClass("enable");
                options.data = data;
                protocall.ajax.request(API+PROFILE_UPDATE_URL, data, "POST", this.profileUpdateResp, options);
                //API
            }
        } catch(e) {
            console.log(e.message);
        }
    },
    profileUpdateResp: function(data, obj) {
        // $(".editProfileForm").css("opacity", "1")
        $(".editProfileForm").removeClass("disable");
        if(!data.error) {
            data = data.data;
            toast.display(data.status);
            user.setProfileInfo(JSON.parse(obj));
        } else {
            toast.display(data.status);
            // handle the error
        }
    },
    enableChangePassword: function(obj) {
        $(obj).hide();
        $(".newPasswordBlk").show();
        $("#p-oldPassword").removeAttr("disabled");
        $("#cancelChangePassword").show();
    },
    disableChangePassword: function(obj) {
        $(".newPasswordBlk").hide();
        console.log($("#p-oldPassword"))
        $("#p-oldPassword").attr("disabled", "true");
        $("#changePassword").show();
        $("#cancelChangePassword").hide();
        $("#p-newPassword, #p-oldPassword").val("");
    },
    showPasswordText: function(obj) {
        if($(obj).is(":checked")) {
            $("#p-newPassword").attr("type", "text");
        } else {
            $("#p-newPassword").attr("type", "password");
        }
    }
}

protocall.events = {
    createTransitionEndEvent: function($el, callback, options) {
        var event = (browserPrefix!="ms" && browserPrefix!="moz")?(browserPrefix+"TransitionEnd"):"transitionend";
        event = event.charAt(0).toLowerCase() + event.slice(1);
        this.createEvent($el, event, callback, options);
    },
    createEvent: function($el, event, callback, options) {
        options = options?options:{};
        options.callbackRef = options.callbackRef?options.callbackRef:this;
        options.data = options.data?options.data:null;
        $el.on(event, function(e) {
            $(e.target).hide();
            callback.call(options.callbackRef, e, options.data);
        } )
    },
    removeEvent: function($el, event, options) {
        $el.off(event);
    },
    removeTransitionEndEvent: function($el) {
        var event = (browserPrefix!="ms" && browserPrefix!="moz")?(browserPrefix+"TransitionEnd"):"transitionend";
        event = event.charAt(0).toLowerCase() + event.slice(1);
        this.removeEvent($el, event);
    }
}

protocall.view = {
    
    loadSpinner: function() {
        
    },
    removeLoadSpinner: function() {
        
    },
    displayActionPrompt: function(data) {
        if(!data.actionMessage) return;
        promptData = {};
        promptData.title = data.actionTitle?data.actionTitle:"Alert";
        promptData.message = data.actionMessage?data.actionMessage:"";
        promptData.action = data.action?data.action:"";
        promptData.callback = data.callback?data.callback:"protocall.hideOverlay();";
        promptData.buttons = [];
        if(data.actionCode!="") {
            var acceptUrl = API+(DEVICE_ACCEPT.replace("{accept}","true"));
            acceptUrl = acceptUrl.replace("{actionCode}", data.actionCode);
            var rejectUrl = API+(DEVICE_ACCEPT.replace("{accept}","false"));
            rejectUrl = rejectUrl.replace("{actionCode}", data.actionCode);
            console.log(data.actionCode, rejectUrl)
            var reject = {"type":"button", "onclick":"event.preventDefault();protocall.sendAction(\'"+rejectUrl+"\')", "value":"Reject"}
            promptData.buttons.push(reject);
            var accept = {"type":"button", "onclick":"event.preventDefault();protocall.sendAction(\'"+acceptUrl+"\')", "value":"Accept"}
            promptData.buttons.push(accept);
        } else {
            var accept = {"type":"submit", "onclick":"", "value":"Ok"}
            promptData.buttons.push(accept);
        }
        this.prompt(promptData);
    },
	
    prompt: function(data) {
		
		console.log("okkkk",data);
        data = data?data:{};
        data.title = data.title?data.title:"Message";
        data.action = data.action?data.action:"";
        data.callback = data.callback?data.callback:"protocall.hideOverlay();";
        data.buttons = data.buttons?data.buttons:{};
        
        var $blk = $("<div>");
        var $h = $('<h1 class="overlayHColor">'+data.title+'</h1>');
        $blk.append($h);
        var $div = $('<div class="content">');
        $blk.append($div);
        $div = $('<div>');
        $blk.append($div);
        var $form = $('<form name="'+protocall.removeSpace(data.title)+'form" class="promptMsg '+protocall.removeSpace(data.title)+'Form overlayForm" method="POST" action="'+data.action+'" onsubmit="event.preventDefault();'+data.callback+'" style="text-align:center;">');
        $div.append($form);
        if(data.form) {
            for(var i=0;i<data.form.length;i++) {
                var $el = protocall.view.getOverlayFormField(data.form[i]);
                $form.append($el);
            }
        }
        $form.append($('<p class="confirm_msg">'+data.message+'</p>'));
        $buttonsBlk = $('<div class="buttonBlk">');
        $form.append($buttonsBlk);
        if(data.buttons.length>0) {
           for(var i=0;i<data.buttons.length;i++) {
                var params = "";
                if(data.buttons[i].onclick) {
                    params += "onclick=\""+data.buttons[i].onclick+"\"";
                }
                data.buttons[i].attributes = data.buttons[i].attributes?data.buttons[i].attributes:"";
                $buttonsBlk.append($('<input type="'+data.buttons[i].type+'" name="button" value="'+data.buttons[i].value+'" '+params+' '+data.buttons[i].attributes+'>'));
           }
        } else {
            if(data.buttons.cancel) {
                $buttonsBlk.append('<input type="button" name="button" value="Cancel" data-close="overlay">');
            }
            var buttonAction = data.callback?"":"data-close='overlay'";
            $form.append(' <input type="submit" name="submit" value="Ok" '+buttonAction+'></div>');
        }
        
        protocall.appendOverlayContent($blk, true);
        protocall.displayOverlay();
    },
    displaySpinner: function(blk, msg) {
        blk = blk?blk:"body";
        $(blk).addClass("spinner fixed");
        // msg = msg?msg:"Loading...";
//         var $html = $('<div id="spinner" style="display:block;opacity:1;"><div><div><figure><img src="images/spinner.gif" width="128" height="128" align="center"></figure><div>'+msg+'</div></div></div></div>');
//         $(blk).append($html);
    },
    hideSpinner: function(blk) {
        blk = blk?blk:"body";
        $(blk).removeClass("spinner fixed");
        $("#spinner").remove();
    },
    showPasswordText: function(obj) {
        var item = $(obj).data("fieldname");
        if($(obj).is(":checked")) {
            $("."+item).attr("type", "text");
        } else {
            $("."+item).attr("type", "password");
        }
    },
    showAddDeviceHelp: function() {
        if($("#overlay").is(":visible")) return;
        var $blk = $("<div>");
        var $h = $('<h1 class="overlayHColor">'+OVERLAY_TITLE.addDeviceHelp+'</h1>');
        $blk.append($h);
        var $div = $('<div class="content">');
        $blk.append($div);
        $div = $('<div>');
        $blk.append($div);
        var $form = $('<form name="addDeviceHelpform" class="promptMsg overlayForm" method="POST" action="" onsubmit="event.preventDefault();" style="text-align:center;">');
        $div.append($form);
        $form.append($('<div class="addDeviceHelpBlk" style="height:264px;"></div>'));
        $buttonsBlk = $('<div class="buttonBlk">');
        $form.append(' <input type="button" name="button" value="Ok" style="visibility:hidden;position:absolute;"></div>');
        
        protocall.appendOverlayContent($blk, true);
        protocall.displayOverlay();
        protocall.anim.addDeviceHelp();
    },
    createUserMenu: function(menu) {
        if(menu) {
            if(menu.myDevices) {
                if(menu.myDevices.length<=0) {
                    $(".a-mydevices").find(".nested-menu-toggle").hide();
                }
                var $li = $("nav .a-mydevices").parent();
                var $el = $(".a-mydevices").parent().find(".nested-menu-blk ul");
                $el.empty();
                var h = MENU_HEIGHT;
                if(!$("#page-menu").hasClass("close")) {
                    h = (menu.myDevices.length+1)*MENU_HEIGHT;
                }
                $li.css("height", h+"px");
                for(var i=0;i<menu.myDevices.length;i++) {
                    $el.append($('<li><a href="#mydevices" class="a-name" title="'+menu.myDevices[i].deviceType+' ('+menu.myDevices[i].deviceName+')" data-type="mydevice" data-udid="'+menu.myDevices[i].deviceUDID+'" data-device="'+menu.myDevices[i].deviceType+'">'+menu.myDevices[i].modelName+' <em data-type="mydevice" data-udid="'+menu.myDevices[i].deviceUDID+'" data-device="'+menu.myDevices[i].deviceType+'">('+menu.myDevices[i].deviceName+')</em></a></li>'))
                }
            } else {
                $(".a-mydevices").find(".nested-menu-toggle").hide();
            }
            if(menu.familyDevices) {
                if(menu.familyDevices.length<=0) {
                    $(".a-relatives").find(".nested-menu-toggle").hide();
                }
            } else {
                $(".a-relatives").find(".nested-menu-toggle").hide();
            }
        }
    },
    pageTransition: function(fromPage, toPage) {
        //in corresponding display pages check if obj exists and global var not null then display method in class has to be called
        $("#contentArea").css("height", "auto");
        if(protocall.support.isTransitionSupported()) {
            if(fromPage==null && toPage==LOGIN_PAGE) {
                // logout case
                var $innerPage = $("#contentArea");
                protocall.events.createTransitionEndEvent($("#contentArea, #page-menu, #hBar"), function(e) {
                    protocall.events.removeTransitionEndEvent($("#contentArea, #page-menu, #hBar"));
                    $innerPage.hide();
                    $innerPage.empty();
                    $("#loginPage").css({"opacity":"1", "display":"block"});
                    $("#page-menu, #hBar").css({"display":"none"});
                    $("#pContent").hide();
                });
				
                $("#contentArea, #page-menu, #hBar").css("opacity", "0");
            } else {
                // loggedin case
                hideBlkEl = fromPage==LOGIN_PAGE?"#loginPage":"#contentArea1";
                if(fromPage==LOGIN_PAGE) {
                    $(".registerForm, .loginForm, .inviteForm").each(function() {
                        $(this)[0].reset();
                    });
                }
                if($(hideBlkEl).css("opacity")=="1") {
                    protocall.events.createTransitionEndEvent($(hideBlkEl), function(e) {
                        protocall.events.removeTransitionEndEvent($(hideBlkEl));
                        $("#pContent").show();
                        $("#contentArea").empty();
						//$("#page-menu").fadeIn(250);
                        protocall.loadPage(toPage);
						
                    });
                    $(hideBlkEl).css("opacity", "0");
                } else {console.log("efgh")
				    $("#page-menu").fadeIn(250);
                    $("#pContent").show();
                    $("#contentArea").empty();
                    //protocall.loadPage(toPage);
                }
            }
        } else {
            // use the same if condition but instead of transition event use timeout method
        }
    },
    loadMyDevicesFiles: function() {
        
    },
    displayMainPage: function() {
        $("#pContent").show();
        $("#contentArea").css({"opacity":"1","display":"block"});
    },
    displayCustomerProfilePage: function() {
        $("#page-menu, #hBar").css({"opacity":"1","display":"block"});
        $("#contentArea").css({"opacity":"0","display":"block"});
        $("#contentArea").empty();
        this.updateBasicInfo();
        if(protocall.customerProfile) {
            customerProfile = null;
            if(customerProfile==null) {
                customerProfile = new protocall.customerProfile();
            }
			else {
                customerProfile.__destructor();
                customerProfile = new protocall.customerProfile();
            }
        } else {
            var js = ["js/libs/jquery.wookmark.min.js", "js/customer_profile.js?"+(new Date).getTime()];
            var s = new loadScripts(js, function() {
                customerProfile = new protocall.customerProfile();
            });
        }
    },
    displayMyCarrierPage: function() {
        $("#page-menu, #hBar").css({"opacity":"1","display":"block"});
        $("#contentArea").css({"opacity":"0","display":"block"});
        $("#contentArea").empty();
        this.updateBasicInfo();
        if(protocall.myCarrier) {
            myCarrier = null;
            if(myCarrier==null) {
                myCarrier = new protocall.myCarrier();
            }
			else {
                myCarrier.__destructor();
                myCarrier = new protocall.mySettings();
            }
        } else {
            var s = new loadScripts("js/usage.js?"+(new Date).getTime(), function() {
                myCarrier = new protocall.myCarrier();
            });
        }
    },
    displayMyHomePage: function() {
        $("#page-menu, #hBar").css({"opacity":"1","display":"block"});
        $("#contentArea").css({"opacity":"0","display":"block"});
        $("#contentArea").empty();
        this.updateBasicInfo();
        if(protocall.myHome) {
            myHome = null;
            if(myHome==null) {
                myHome = new protocall.myHome();
            }
			else {
                myHome.__destructor();
                myHome = new protocall.mySettings();
            }
        } else {
            var s = new loadScripts("js/home.js?"+(new Date).getTime(), function() {
                myHome = new protocall.myHome();
            });
        }
    },
	displayMyCustomerPage: function() {
        $("#page-menu, #hBar").css({"opacity":"1","display":"block"});
        $("#contentArea").css({"opacity":"0","display":"block"});
        $("#contentArea").empty();
        this.updateBasicInfo();
        if(protocall.myCustomer) {
            
            if(myCustomer==null) {
                myCustomer = new protocall.myCustomer();
            }
			else {
                myCustomer.__destructor();
                myCustomer = new protocall.mySettings();
            }
        } else {
            var s = new loadScripts("js/customer.js?"+(new Date).getTime(), function() {
				console.log(11111)
                myCustomer = new protocall.myCustomer();
			    myCustomer.displayBlocks();
            });
        }
    },
	displayMyRepsPage: function() {
        $("#page-menu, #hBar").css({"opacity":"1","display":"block"});
        $("#contentArea").css({"opacity":"1","display":"block"});
        $("#contentArea").empty();
        this.updateBasicInfo();
        if(protocall.myReps) {
            
            if(myReps==null) {
                myReps = new protocall.myReps();
            }
			else {
                myReps.__destructor();
                myReps = new protocall.mySettings();
            }
        } else {
            var s = new loadScripts("js/myreps.js?"+(new Date).getTime(), function() {
				console.log(9999)
                myReps = new protocall.myReps();
				myReps.displayBlocks();
            });
        }
    },
    displayMySettingsPage: function() {
        $("#page-menu, #hBar").css({"opacity":"1","display":"block"});
        $("#contentArea").css({"opacity":"0","display":"block"});
        $("#contentArea").empty();
        this.updateBasicInfo();
        if(protocall.mySettings) {
            if(mySettings==null) {
                mySettings = new protocall.mySettings();
            } else {
                mySettings.__destructor();
                mySettings = new protocall.mySettings();
            }
        } else {
            var s = new loadScripts("js/my_settings.js?"+(new Date).getTime(), function() {
                mySettings = new protocall.mySettings();
            });
        }
    },
    getOverlayFormField: function(obj, options) {
        obj.value = obj.value?obj.value:"";
        obj.info = obj.info?obj.info:"";
        var info = "";
        var id="";
        var className = "";
        if(!info) {
            info = "hide";
        }
        if(obj.id) {
            id = 'id="'+obj.id+'"';
        }
        if(obj.required) {
            className = "required";
        }
        if(obj.type == "hidden") {
            return '<input type="hidden" name="'+obj.name+'" value="'+obj.value+'">';
        } else if(obj.type=="textfield" || obj.type=="email" || obj.type=="dateTime") {
            var type = (obj.type=="textfield" || obj.type=="dateTime")?"text":(obj.type=="email"?"email":"password");
            
            return $('<div class="clrBlk overlayForm'+obj.name+'"><div class="fl labelBlk"><label>'+obj.label+'</label></div><div class="fieldDiv"><a href="#" class="sprite info-icon abs-right '+info+'">&nbsp;</a><div style="position: relative;overflow: hidden;padding: 0 20px;"><input type="'+type+'" name="'+obj.name+'" value="'+obj.value+'" '+id+' class="'+className+'" data-label="'+obj.label+'"></div></div></div>');
            
        } else if( obj.type=="password") {
        
            // return $('<div class="clrBlk overlayForm'+obj.name+'"><div class="fl labelBlk row2"><label>'+obj.label+'</label></div><div class="fieldDiv"><a href="#" class="sprite info-icon abs-right '+info+'">&nbsp;</a><div style="position: relative;overflow: hidden;padding: 0 20px;"><input type="'+type+'" name="'+obj.name+'" value="'+obj.value+'" '+id+' class="'+className+'"></div></div></div>');
            
            var style ="";
            if(obj.defaultDisplay=="false") {
                style = 'display:none;';
            }
            return $('<div class="clrBlk overlayForm'+obj.name+'" style="'+style+'"><div class="fl row2"><div class="clrBlk"><div class="fl labelBlk"><label>'+obj.label+'</label></div> <div class="fieldDiv"><div style="position: relative;overflow: hidden;padding: 0 20px;"><input type="'+obj.type+'" name="'+obj.name+'" value="'+obj.value+'" id="wifi-password" placeholder="**********" data-minlen="6" class="'+className+' '+obj.name+'-changeView" data-label="'+obj.label+'"></div></div></div></div><div class="fl row2"><div class="clrBlk"><div class="fl labelBlk"><input type="checkbox" value="" id="wifi-showPassword" onchange="protocall.view.showPasswordText(this)" data-fieldname="'+obj.name+'-changeView"><label for="wifi-showPassword">Show Password</label></div></div></div></div>');
            
        } else if(obj.type=="selectbox") {
            var html = "";
            var optionsHtml = "";
            if(options) {
                for(var i in options) {
                    optionsHtml += i+"='"+options[i]+"'";
                }
                console.log(optionsHtml)
            }
            html += '<div class="clrBlk"><div class="fl labelBlk"><label>'+obj.label+'</label></div><div class="fieldDiv"><a href="#" class="sprite info-icon abs-right '+info+'"">&nbsp;</a><div style="position: relative;overflow: hidden;padding: 0 20px;"><select name="'+obj.name+'" '+id+' class="'+className+'" '+optionsHtml+'>'
            for(var key in obj.options) {
                html += '<option value='+obj.options[key]+'>'+key+'</option>';
            }
            html += '</select></div></div></div>'
            return $(html);
        } else if(obj.type=="checkbox") {
            obj.info = obj.info?obj.info:"";
            return $('<div class="clrBlk"><div class="fl labelBlk"><label>'+obj.label+'</label></div><div class="fieldDiv"><div style="position: relative;overflow: hidden;padding: 0 20px;"><input type="checkbox" name="'+obj.name+'" value="" id="'+obj.name+'_overlay" class="'+className+'"><label for="'+obj.name+'_overlay">'+obj.info+'</label></div></div></div>');
        } else if(obj.type="button") {
            return $('<div class="clrBlk"><!-- div class="fl labelBlk"><label>&nbsp;</label></div --><div class="fieldDiv buttonsDiv"><div style="position: relative;overflow: hidden;padding: 0 20px;"><input type="submit" name="overlayForm" value="'+obj.value+'"></div></div></div>');
        }
            
    },
    hideLoginPage: function() {
        $("#loginPage").css("opacity", "0");
    }
    // document.getElementById("page-menu").style.display = "block";
//         document.getElementById("hBar").style.display = "block";
//         document.getElementById("pContent").style.display = "block";
}

protocall.ajax = {
    request: function(url, data, type, callback, options) {
        options = options?options:{};
        options.callbackRef = options.callbackRef?options.callbackRef:this;
        options.contentType = (options.contentType || options.contentType===false)?options.contentType:"application/json";
        options.processData = (options.processData || options.processData===false)?options.processData:true;
        options.data = options.data?options.data:null;
        type = type?type:"GET";
        data = data?data:"";
        options.withCredentials = (typeof options.withCredentials!="undefined" && options.withCredentials===false)?options.withCredentials:true;
        var xhr = $.ajax({
            type: type,
            retryMax: 3,
            data: data,
            processData: options.processData,
            context: options.callbackRef,
            contentType: options.contentType,
            timeout: 15000,
            url: url,
            xhrFields: {
                withCredentials: options.withCredentials
            },
            success: function(data) {
                if(user) {
                    user.setProfileInfo();
                }
                if(callback) {
                    var resp = {"success":"true"}
                    if(environment=="dev") {
                        if(typeof data=="string") {
                            resp.data = JSON.parse(data);  // remove json parse for live
                        } else {
                            resp.data = data;
                        }
                    } else {
                        resp.data = data;
                    }
                    callback.call(options.callbackRef, resp, options.data);
                }
            },
            error: function(jqXHRError,textStatus,errorThrown) {
                if(callback) {
                    try {
                        var respText = JSON.parse(jqXHRError.responseText);
                        var data = {"error": "true", "status":respText.ErrorMessage};
                        callback.call(options.callbackRef, data, options.data);
                    } catch(e) {
                        var respText = {};
                        respText["ErrorMessage"] = jqXHRError.responseText?jqXHRError.responseText:ERROR_MSG.ajaxFailed;
                        var data = {"error": "true", "status":respText.ErrorMessage}
                        callback.call(options.callbackRef, data, options.data);
                    }
                } 
            }
        });
        return xhr;
    },
  
       
}