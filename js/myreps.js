var MyrepsdynamicTemplate = {
    myreps: {
        

     MyrepsDynamicHeaderTemplate: function () {
	
         var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"> </div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="'+localStorage.profilePic+'" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span> Hi, </span> <span class="t-caps">'+localStorage.agencyName+'</span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon"> &nbsp; </div><div class="clear"> </div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Home </span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Carriers </span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Customers </span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> My Reps </span> </div></a> </div><div class="mb-submenu"><div class="mb-submenu-in p-relative"><div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light myreps t-upper p-relative f-color-green" data-type="page" data-submenu="myreps"><div class=""><div class="sprite-im inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid"> my reps</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="myreps-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:70%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div><a href="/invitereps" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light invitereps p-relative" data-type="page" data-submenu="invitereps"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> invite reps</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a><a href="/privacy" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light privacy p-relative" data-type="page" data-submenu="privacy"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> privacy</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="'+localStorage.agencyLogo+'" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity"> &nbsp; </div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid"> &nbsp; </div><div class="inline-block f-sz-12 v-align-mid opensans-regular "> Edit </div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps"> '+localStorage.agencyName+' </div><div class="opensans-regular text-ellipsis f-italic agency-email"> '+localStorage.agencyEmail+' </div></div></a> </div></div></div></div>';

	 return Header;
     },

    
      MyrepsDynamicList: function () {

	var content = '<div class="customer-home-parent clr-fl p-relative"><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="https://proto-call-test.appspot.com/file/AMIfv95YmPUyxXo3e62nUUdm-AGNvCorFClL2IuieLcG-6GdaLJXVHOmNx_1ejImPbb7O2OkWg7PnT8LJobzDZRfjSHIKEkuLjAF3APeTTGhy_nZ3LU2QYBjcbfNGEEfSkxIxfBKnYTIcUo8HueEUyMakOlF9C7YzT1iCC8DcVCe_eJvNujkrmKEhVo08IbDZ_sp4Z2gZUvG" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Carol Powell</div><div class="carrier-location t-caps">California</div><div class="carrier-email">agencyRepresentative@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="https://proto-call-test.appspot.com/file/AMIfv96Tk5Oq2ZPxUk8MoX_Br9omTBuiK4vPCyk3LMOrzfBKKU7j8nLLTcqzAhtPhcwIclGvA5ikFuKsevV15VldfyheEt1zosSZiUzNSoEn0LNn8zY7SpZ6TIDooxhWIId7Su4rXGm07uSVUIxJ1i9wu8CYk7eHr9-hNOCivsgb4tJl9Q0muc-ozUAhvPXmOpXDFxYRuapy" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Carol Powell</div><div class="carrier-location t-caps">California</div><div class="carrier-email">agencyrepresentative@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Aravind</div><div class="carrier-location t-caps">Orissa</div><div class="carrier-email">aravind@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Balaji</div><div class="carrier-location t-caps">Dharamapuri</div><div class="carrier-email">balaji@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">fareeth</div><div class="carrier-location t-caps">tirunelveli</div><div class="carrier-email">fareeth@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Ishu</div><div class="carrier-location t-caps">Velacherri</div><div class="carrier-email">ishu@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Carol Powell</div><div class="carrier-location t-caps">California</div><div class="carrier-email">j.sukumar1993@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">John</div><div class="carrier-location t-caps">UK</div><div class="carrier-email">john@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Jospi</div><div class="carrier-location t-caps">Canada</div><div class="carrier-email">jospi@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Kaveri</div><div class="carrier-location t-caps">Chennai</div><div class="carrier-email">kaveri@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Manoj</div><div class="carrier-location t-caps">Coimbatore</div><div class="carrier-email">manoj@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Mariya</div><div class="carrier-location t-caps">Austraila</div><div class="carrier-email">mariya@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Merii</div><div class="carrier-location t-caps">UK</div><div class="carrier-email">merii@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Raj</div><div class="carrier-location t-caps">madurai</div><div class="carrier-email">raj@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Sakthi</div><div class="carrier-location t-caps">Karnata</div><div class="carrier-email">sakthi@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Seema111</div><div class="carrier-location t-caps">Madurai111</div><div class="carrier-email">seema11@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Seema</div><div class="carrier-location t-caps">Madurai</div><div class="carrier-email">seema@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Sudar</div><div class="carrier-location t-caps">Dharamapuri</div><div class="carrier-email">sss@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Sukumar</div><div class="carrier-location t-caps">Dharamapuri</div><div class="carrier-email">sukumar@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Surendhar</div><div class="carrier-location t-caps">Kerala</div><div class="carrier-email">surendhar@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">Teena</div><div class="carrier-location t-caps">USA</div><div class="carrier-email">teena@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">xyzsss</div><div class="carrier-location t-caps">xylo</div><div class="carrier-email">xys@gmail.com</div><div class="carrier-location t-caps">#QA387</div></div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div></div>';

        return content;
      }


  }
};
