var CarrierdynamicTemplate = {
    carrier: {
        

     CarrierDynamicHeaderTemplate: function () {
	
         var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"> </div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="'+sessionStorage.profilePic+'" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span> Hi, </span> <span class="t-caps">'+sessionStorage.agencyName+' </span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon"> &nbsp; </div><div class="clear"> </div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Home </span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w selected-tab" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Carriers </span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Customers </span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> My Reps </span> </div></a> </div><div class="mb-submenu"><div class="mb-submenu-in p-relative"><div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light carriers t-upper p-relative f-color-green" data-type="page" data-submenu="carriers"><div class=""><div class="sprite-im inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid"> carriers</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="carriers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:70%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="'+sessionStorage.agencyLogo+'" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity"> &nbsp; </div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid"> &nbsp; </div><div class="inline-block f-sz-12 v-align-mid opensans-regular "> Edit </div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps"> '+sessionStorage.agencyName+' </div><div class="opensans-regular text-ellipsis f-italic agency-email"> '+sessionStorage.agencyEmail+' </div></div></a> </div></div></div></div>';

	 return Header;
     },
 
     	 loadcarriercontent: function (data,page) {

			if (data.resultMap!= null && data.resultMap!= "") {
			var resultCarrier = data.resultMap.carrierTab;

localStorage.setItem("users",JSON.stringify(resultCarrier));


			var template = '';
			 for (var rc = 0; rc < resultCarrier.length; rc++) {
	 	var c = resultCarrier[rc];
				if(c.emailId == undefined){
					cEmail =' ';
					console.log(cEmail);
				}else{
						cEmail = c.emailId.email;
						console.log(cEmail);
				}
				if(c.carrierLogo == undefined)
						
						{
							
							profilePicture = "https://proto-call-test.appspot.com/file/AMIfv95gsNeXXhLvQYjWfzFNDL7J7AQEbMbR2o21zlAe-4CvYI8xrZurkzK4NBR1nRbmmjbpTl_ZdAUMZs8LJgRw7rx9LdYj2km00q-HF9Nl_rEgqtEN9NZP0nYX2DB0EGwyuFQNKIsPnquZMD-uvgnIVU02EJiKwpLBzuGuqNXmtLtyTDGLYwBMtdJTmKLkawOaeFmWrLw_";
								
						}else{
							
							var profilePath = c.carrierLogo;
							profilePicture = "https://proto-call-test.appspot.com/file/"+profilePath;
						}
				
 template += CarrierdynamicTemplate.carrier.CarrierDynamicList(c);
}
                var header   = CarrierdynamicTemplate.carrier.CarrierDynamicHeaderTemplate();
		
          	var content  = '<div class="container"> <div class="content-holder">'+template+'</div></div></div></div>';
		var footer   = HomedynamicTemplate.home.HomeDynamicFooterTemplate();

		$("#page").empty();
		totalHtml = header+content+footer;
		$("#page").append(totalHtml);
		protocall.displaySpinner(false);
}



},

          CarrierDynamicList: function (c) {
  
		var html = '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative opensans-regular"><div class="mycarrierlogo-pic"><img src="'+profilePicture+'" alt="" class="mycarrier-img-width"></div> </div> <div class="carrier-info bg-color-white p-relative carrier-groupblock opensans-regular"> <div class="carrier-name t-caps t-center">'+c.carrierName+'</div> <div class="carrier-location t-caps t-center">'+c.state+'</div> <div class="carrier-email t-center">'+cEmail+'</div></div> <div class="carrier-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview" data-id = "'+c.carrierId+'">view </div></div>';

	 return html;
     
}



  }
};
