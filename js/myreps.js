var MyrepsdynamicTemplate = {
    myreps: {
        MyrepsDynamicHeaderTemplate: function () {

            var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"> </div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="' + sessionStorage.profilePic + '" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span> Hi, </span> <span class="t-caps">' + sessionStorage.agencyName + '</span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon"> &nbsp; </div><div class="clear"> </div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Home </span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Carriers </span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Customers </span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> My Reps </span> </div></a> </div><div class="mb-submenu"><div class="mb-submenu-in p-relative"><div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light myreps t-upper p-relative f-color-green" data-type="page" data-submenu="myreps"><div class="">'
                    + '<div class="sprite-im myreps-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid"> my reps</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="myreps-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:70%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbyreps"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div><a href="/invitereps" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light invitereps p-relative" data-type="page" data-submenu="invitereps"><div class="sprite-im invite-reps-icon inline-block tab-icon v-align-mid" style="display:block;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> invite reps</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a><a href="/privacy" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light privacy p-relative" data-type="page" data-submenu="privacy"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> privacy</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity"> &nbsp; </div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid"> &nbsp; </div><div class="inline-block f-sz-12 v-align-mid opensans-regular "> Edit </div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps"> ' + sessionStorage.agencyName + ' </div><div class="opensans-regular text-ellipsis f-italic agency-email"> ' + sessionStorage.agencyEmail + ' </div></div></a> </div></div></div></div>';

            return Header;
        },
        CarrierRepsDynamicList: function () {

            var datares = JSON.parse(localStorage.getItem("CARRIERAGENCYTOTALDETAILS"));
            console.log("wow", datares);
            if (datares.resultMap.myRepTab != null && datares.resultMap.myRepTab != "") {

                var resultreps = datares.resultMap.myRepTab;
                var template = '';
                for (var c = 0; c < resultreps.length; c++) {
                    var rep = resultreps[c];
                    if (rep.carrierRepresentativeId.email == undefined) {
                        cusEmail = ' ';
                    } else {
                        cusEmail = rep.carrierRepresentativeId.email;
                    }
                    if (rep.name == undefined)
                    {
                        lastName = ' ';
                    } else {
                        lastName = rep.name;
                    }
                    if (rep.profilePicture == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = rep.profilePicture;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        // profilePicture = ProfileAPI + profilePath;
                    }
                    template += MyrepsdynamicTemplate.myreps.carrierRepstemplate(rep);
                }

                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div></div>';
                var footer = HomedynamicTemplate.home.HomeDynamicFooterTemplate();

                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
                protocall.displaySpinner(false);
                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");

            }
        },
        carrierRepstemplate: function (rep) {
            console.log("vimeo", rep);
            var profilePicture, name, location, carrierAgencyRepresentativeId = "";

            //undefined
            if (rep.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + rep.profilePicture;
            } else {
                profilePicture = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
            }
            if (rep.name != undefined) {
                name = rep.name;
            } else {
                name = "";
            }
            if (rep.location != undefined) {
                location = rep.location;
            } else {
                location = "";
            }
            if (rep.carrierRepresentativeId.email != undefined) {
                carrierRepresentativeEmail = rep.carrierRepresentativeId.email;
            } else {
                carrierRepresentativeEmail = "";
            }

            if (rep.carrierCarrierRepresentativeId != undefined) {
                var carrepId = rep.carrierCarrierRepresentativeId;
            } else {
                var carrepId = "";
            }

            var htmlData = '<div class="reps-feed-screen clr-fl left border-all p-relative">'
                    + '<div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left ">'
                    + '<img src=' + profilePicture + ' alt="" class="carrier-img-width"></div>'
                    + '<div class="reps-profile-info-root">'
                    + '<div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">' + name + '</div>'
                    + '<div class="carrier-location t-caps">' + location + '</div><div class="carrier-email">'
                    + '<a href="mailto:' + carrierRepresentativeEmail + '">' + carrierRepresentativeEmail + '</a></div>'
                    + '<div class="carrier-id t-caps">#' + carrepId + '</div></div></div></div>'
                    + '<div id="' + rep.carrierId + '" class="Carrierreps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="viewCarrierRep">View</div><div style="border-left: solid 1px white;" id=""  class="Carrierreps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">Assign</div></div>';

            return htmlData;

        },
        MyrepsDynamicList: function (data) {

            if (data.resultMap != null && data.resultMap != "") {
                localStorage.setItem("myreps_data", JSON.stringify(data.resultMap.repTab));
                var resultreps = data.resultMap.repTab;
                var template = '';
                for (var c = 0; c < resultreps.length; c++) {
                    var rep = resultreps[c];
                    if (rep.agencyRepresentativeId.email == undefined) {
                        cusEmail = ' ';
                    } else {
                        cusEmail = rep.agencyRepresentativeId.email;
                    }
                    if (rep.name == undefined)
                    {
                        lastName = ' ';
                    } else {
                        lastName = rep.name;
                    }
                    if (rep.profilePicture == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = rep.profilePicture;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        // profilePicture = ProfileAPI + profilePath;
                    }
                    template += MyrepsdynamicTemplate.myreps.RepsDynamicList(rep);
                }

                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div></div>';
                var footer = HomedynamicTemplate.home.HomeDynamicFooterTemplate();

                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                protocall.displaySpinner(false);
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
            }
        },
        MyrepsDynamicListSort: function (data) {

            if (data.resultMap != null && data.resultMap != "") {
                localStorage.setItem("myreps_data", JSON.stringify(data.resultMap.repTab));
                var resultreps = data.resultMap.ArrayOfCarriersDetails;
                var template = '';
                for (var c = 0; c < resultreps.length; c++) {
                    var rep = resultreps[c];
                    if (rep.agencyRepresentativeId.email == undefined) {
                        cusEmail = ' ';
                    } else {
                        cusEmail = rep.agencyRepresentativeId.email;
                    }
                    if (rep.name == undefined)
                    {
                        lastName = ' ';
                    } else {
                        lastName = rep.name;
                    }
                    if (rep.profilePicture == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = rep.profilePicture;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        // profilePicture = ProfileAPI + profilePath;
                    }
                    template += MyrepsdynamicTemplate.myreps.RepsDynamicList(rep);
                }

                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div></div>';
                var footer = HomedynamicTemplate.home.HomeDynamicFooterTemplate();

                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                protocall.displaySpinner(false);
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
            }
        },
        CarrierRepsviewSubmenu: function () {
            
            var Submenu = '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light carrierreps t-upper p-relative f-color-green" data-type="page" data-submenu="carrierreps"><div class=""><div class="sprite-im customers-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid"> My Reps</span><span id="id-customers-headername">&gt;   Kragesh</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="customers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:70%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbycustomer"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div>'
                    +'<a href="#" id="" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative" data-type="page" data-submenu="dt-assigncustomer"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> assign Customers</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a><a href="/pushmessage" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light pushmessage p-relative" data-type="page" data-submenu="pushmessage" style="display: none;"><div class="sprite-im message-icon inline-block tab-icon v-align-mid" style="display:block;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> push message</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a><a href="/edit" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light edit p-relative" data-type="page" data-submenu=""><div class="sprite-im  inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "> edit</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a></div></div>';
            return Submenu;
        },
        RepsDynamicList: function (rep) {

            var profilePicture, name, location, agencyRepresentativeId, carrierAgencyRepresentativeId = "";

            //undefined
            if (rep.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + rep.profilePicture;
            } else {
                profilePicture = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
            }
            if (rep.name != undefined) {
                name = rep.name;
            } else {
                name = "";
            }
            if (rep.location != undefined) {
                location = rep.location;
            } else {
                location = "";
            }
            if (rep.agencyRepresentativeId.email != undefined) {
                agencyRepresentativeId = rep.agencyRepresentativeId.email;
            } else {
                agencyRepresentativeId = "";
            }

            if (rep.carrierAgencyRepresentativeId != undefined) {
                carrierAgencyRepresentativeId = rep.carrierAgencyRepresentativeId;
            } else {
                carrierAgencyRepresentativeId = "";
            }

            var htmlData = '<div class="reps-feed-screen clr-fl left border-all p-relative">'
                    + '<div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left ">'
                    + '<img src=' + profilePicture + ' alt="" class="carrier-img-width"></div>'
                    + '<div class="reps-profile-info-root">'
                    + '<div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">' + name + '</div>'
                    + '<div class="carrier-location t-caps">' + location + '</div><div class="carrier-email">'
                    + '<a href="mailto:' + agencyRepresentativeId + '">' + agencyRepresentativeId + '</a></div>'
                    + '<div class="carrier-location t-caps">' + carrierAgencyRepresentativeId + '</div></div></div></div>'
                    + '<div id=' + agencyRepresentativeId + '  class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div>';

            return htmlData;

        }

    }
};
