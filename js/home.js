var HomedynamicTemplate = {
    home: {
        

     HomeDynamicHeaderTemplate: function () {
		 var sortText = "";
		 if(HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW){
			sortText = "Alphabetical";
		} else if(HOMEPAGERESPONSE.SORTBYRECENTVIEW) {
			sortText = "Recent";
		} else {
			sortText = "Recent";
		}
		 var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"></div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="'+localStorage.profilePic+'" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span>Hi,</span> <span class="t-caps">'+localStorage.agencyName+'</span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon">&nbsp;</div><div class="clear"></div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w selected-tab" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Home</span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Carriers</span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Customers</span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">My Reps</span> </div></a> </div><div class="mb-submenu"> <div class="mb-submenu-in p-relative"> <div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> <a href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light myalerts p-relative" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w">My Alerts</span> <span class="cnt-blk">(<span class="cnt-no">'+HOMEPAGERESPONSE.RECURRINGALERTDFEEDS.length+'</span>)</span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light incidents p-relative" data-type="page" data-submenu="incidents"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid">incidents</div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="policies"> <span class="submenu-title t-caps f-color-w">Policies</span> </a> <a href="/archives" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light archives p-relative" data-type="page" data-submenu="archives"> <span class="submenu-title t-caps f-color-w">Archives</span> </a> <a href="/viewarchives" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light view_archives p-relative" data-type="page" data-submenu="view_archives"> <span class="submenu-title t-caps f-color-w">View Archived</span> </a> <div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby"> <div class="sort-text f-italic">'+sortText+'</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div><div class="clear"></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="'+localStorage.agencyLogo+'" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity">&nbsp;</div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid">&nbsp;</div><div class="inline-block f-sz-12 v-align-mid opensans-regular ">Edit</div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps">'+localStorage.agencyName+'</div><div class="opensans-regular text-ellipsis f-italic agency-email">'+localStorage.agencyEmail+'</div></div></a> </div></div></div></div>';

		
	 return Header;
     },

     HomeDynamicFooterTemplate: function () {

	var footer = '<footer class="p-absolute bg-color-dblue"> <div class="p-relative foot-in clr-fl"> <div class="foot-lb left"> <span class="foot-web-addr opensans-regular f-sz-12">protocol.com</span> </div><div class="foot-rb right"> <div class="foot-nav opensans-regular f-sz-12"> <a href="/help" class="help snap footer-links" data-type="help">Help</a> <a href="/faq" class="faq snap footer-links" data-type="faq">FAQ</a> <a href="/privacy" class="privacy snap footer-links" data-type="privacy">Privacy</a> <a href="/tc" class="tc snap footer-links" data-type="tc">Terms &#38; Conditions</a> </div></div></div></footer>';

       return footer;

     },


     HomeDynamicFeedTemplate: function () {

	var Feed = '<div class="feed-block clr-fl"><div class="lf-block left"><div class="leftblk-spacing"><div class="feed-det bg-color-dblue p-relative"><div class="feed-det-pad p-relative"><div class="feed-pic-b inline-block v-align-mid"><div id="" class="feed-user-pic-box"><img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"></div></div><div class="feed-user-det-b inline-block v-align-mid"><div class="top-b p-relative"><div class="p-relative inline-block v-align-top"><div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">John Doe</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">12:08PM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">policyalert</div></div><div class="bot-b"><div class="p-relative inline-block v-align-bot"><div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Jan 6, 1993</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">chennai</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">7299202663</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">suresh.r@tringapps.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"><div class="myshare"><div class="inner-share-spacing snap" data-type="share"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span></div></div></div><div class="myview"><div class="inner-view-spacing snap" data-type="view"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span></div></div></div></div></div></div></div></div><div class="rg-block left p-relative"><div class="feed-det bg-color-dblue p-relative"><div class="feed-docs-pad p-relative docs-block t-center"><a href="/changecoverage" class="snap feed-addRemove-block inline-block v-align-mid f-sz-14 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage"><div class="t-center"><div class="sprite-im inline-block v-align-mid message-green-icon">&nbsp;</div><span class="feed-addRemove-text inline-block v-align-mid t-caps">Add/Remove Vehilce</span></div></a></div></div></div></div><div class="feed-block clr-fl"><div class="lf-block left"><div class="leftblk-spacing"><div class="feed-det bg-color-dblue p-relative"><div class="feed-det-pad p-relative"><div class="feed-pic-b inline-block v-align-mid"><div id="" class="feed-user-pic-box"><img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"></div></div><div class="feed-user-det-b inline-block v-align-mid"><div class="top-b p-relative"><div class="p-relative inline-block v-align-top"><div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">11:49AM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">incidentalert</div></div><div class="bot-b"><div class="p-relative inline-block v-align-bot"><div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Jul 9, 1987</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">New Jersey</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"><div class="myshare"><div class="inner-share-spacing snap" data-type="share"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span></div></div></div><div class="myview"><div class="inner-view-spacing snap" data-type="view"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span></div></div></div></div></div></div></div></div><div class="rg-block left p-relative"><div class="feed-det bg-color-dblue p-relative"><div class="feed-docs-pad p-relative docs-block t-center"><a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im text-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Text</div></div></a><a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Photos</div></div></a><a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Voice</div></div></a></div></div></div></div>';

       return Feed;
     },

     HomeDynamicIncidentFeedTemplate: function () {

	var Feed = '<div class="feed-block clr-fl"><div class="lf-block left"><div class="leftblk-spacing"><div class="feed-det bg-color-dblue p-relative"><div class="feed-det-pad p-relative"><div class="feed-pic-b inline-block v-align-mid"><div id="" class="feed-user-pic-box"><img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"></div></div><div class="feed-user-det-b inline-block v-align-mid"><div class="top-b p-relative"><div class="p-relative inline-block v-align-top"><div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">11:49AM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">incidentalert</div></div><div class="bot-b"><div class="p-relative inline-block v-align-bot"><div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Jul 9, 1987</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">New Jersey</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"><div class="myshare"><div class="inner-share-spacing snap" data-type="share"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span></div></div></div><div class="myview"><div class="inner-view-spacing snap" data-type="view"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span></div></div></div></div></div></div></div></div><div class="rg-block left p-relative"><div class="feed-det bg-color-dblue p-relative"><div class="feed-docs-pad p-relative docs-block t-center"><a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im text-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Text</div></div></a><a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Photos</div></div></a><a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Voice</div></div></a></div></div></div></div>';

       return Feed;
     }, 


     HomeDynamicPolicyFeedTemplate: function () {

	var Feed = '<div class="feed-block clr-fl"><div class="lf-block left"><div class="leftblk-spacing"><div class="feed-det bg-color-dblue p-relative"><div class="feed-det-pad p-relative"><div class="feed-pic-b inline-block v-align-mid"><div id="" class="feed-user-pic-box"><img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"></div></div><div class="feed-user-det-b inline-block v-align-mid"><div class="top-b p-relative"><div class="p-relative inline-block v-align-top"><div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">John Doe</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">12:08PM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">policyalert</div></div><div class="bot-b"><div class="p-relative inline-block v-align-bot"><div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Jan 6, 1993</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">chennai</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">7299202663</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">suresh.r@tringapps.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"><div class="myshare"><div class="inner-share-spacing snap" data-type="share"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span></div></div></div><div class="myview"><div class="inner-view-spacing snap" data-type="view"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span></div></div></div></div></div></div></div></div><div class="rg-block left p-relative"><div class="feed-det bg-color-dblue p-relative"><div class="feed-docs-pad p-relative docs-block t-center"><a href="/changecoverage" class="snap feed-addRemove-block inline-block v-align-mid f-sz-14 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage"><div class="t-center"><div class="sprite-im inline-block v-align-mid message-green-icon">&nbsp;</div><span class="feed-addRemove-text inline-block v-align-mid t-caps">Add/Remove Vehilce</span></div></a></div></div></div></div>';

       return Feed;
     },

     HomeDynamicArchiveFeedTemplate: function () {

	var Feed = '<div class="feed-block clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="feed-det bg-color-dblue p-relative"> <div class="feed-det-pad p-relative"> <div class="feed-pic-b inline-block v-align-mid"> <div id="" class="feed-user-pic-box"> <span id="archiveFeed"><input type="checkbox" id="feedcheck1" name="" class="checkbox"><label for="feedcheck1" class="feed-label"></label></span> <img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"> </div></div><div class="feed-user-det-b inline-block v-align-mid"> <div class="top-b p-relative"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">policy alert</div><div class="p-relative inline-block v-align-mid"> <div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div></div><div class="bot-b"> <div class="p-relative inline-block v-align-bot"> <div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"> <div class="myshare"> <div class="inner-share-spacing snap" data-type="share"> <div class="t-center mid-align"> <div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span> </div></div></div><div class="myview"> <div class="inner-view-spacing snap" data-type="view"> <div class="t-center mid-align"> <div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span> </div></div></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="feed-det bg-color-dblue p-relative"> <div class="feed-docs-pad p-relative docs-block t-center"> <a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im text-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Text</div></div></a> <a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Photos</div></div></a> <a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Voice</div></div></a> </div></div></div></div><div class="feed-block clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="feed-det bg-color-dblue p-relative"> <div class="feed-det-pad p-relative"> <div class="feed-pic-b inline-block v-align-mid"> <div id="" class="feed-user-pic-box"> <input type="checkbox" id="feedcheck2" name="" class="checkbox"><label for="feedcheck2" class="feed-label"></label> <img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"> </div></div><div class="feed-user-det-b inline-block v-align-mid"> <div class="top-b p-relative"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">policy alert</div><div class="p-relative inline-block v-align-mid"> <div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div></div><div class="bot-b"> <div class="p-relative inline-block v-align-bot"> <div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"> <div class="myshare"> <div class="inner-share-spacing snap" data-type="share"> <div class="t-center mid-align"> <div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span> </div></div></div><div class="myview"> <div class="inner-view-spacing snap" data-type="view"> <div class="t-center mid-align"> <div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span> </div></div></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="feed-det bg-color-dblue p-relative"> <div class="feed-docs-pad p-relative docs-block t-center"> <a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im text-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Text</div></div></a> <a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Photos</div></div></a> <a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Voice</div></div></a> </div></div></div></div>';

       return Feed;
     },


     HomeDynamicViewArchiveFeedTemplate: function () {

	var Feed = '<div class="feed-block clr-fl"><div class="lf-block left"><div class="leftblk-spacing"><div class="feed-det bg-color-dblue p-relative"><div class="feed-det-pad p-relative"><div class="feed-pic-b inline-block v-align-mid"><div id="" class="feed-user-pic-box"><img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"></div></div><div class="feed-user-det-b inline-block v-align-mid"><div class="top-b p-relative"><div class="p-relative inline-block v-align-top"><div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Elizabeth undefined</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">11:47AM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">incidentalert</div></div><div class="bot-b"><div class="p-relative inline-block v-align-bot"><div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Mar 6, 1995</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 100</div><div class="p-relative inline-block v-align-bot"><div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">tomcruise@mail.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"><div class="myshare"><div class="inner-share-spacing snap" data-type="share"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span></div></div></div><div class="myview"><div class="inner-view-spacing snap" data-type="view"><div class="t-center mid-align"><div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span></div></div></div></div></div></div></div></div><div class="rg-block left p-relative"><div class="feed-det bg-color-dblue p-relative"><div class="feed-docs-pad p-relative docs-block t-center"><a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im text-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Text</div></div></a><a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Photos</div></div></a><a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc"><div class="t-center p-relative"><div class="doc-icon-box"><div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">0</span></div><div class="feed-menu-text bold">Voice</div></div></a></div></div></div></div>';

       return Feed;
     }		






  }
};
