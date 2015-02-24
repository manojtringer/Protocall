var CustomerdynamicTemplate = {
    carrier: {
        CustomerDynamicHeaderTemplate: function () {

            var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"> </div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="' + sessionStorage.profilePic + '" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span> Hi, </span> <span class="t-caps"> ' + sessionStorage.agencyName + '</span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon"> &nbsp; </div><div class="clear"> </div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Home </span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Carriers </span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Customers </span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> My Reps </span> </div></a> </div><div class="mb-submenu"><div class="mb-submenu-in p-relative"><div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light customers t-upper p-relative f-color-green" data-type="page" data-submenu="customers"><div class=""><div class="sprite-im inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid"> customers</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="customers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:70%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div><a href="/assignrep" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light assignrep p-relative" data-type="page" data-submenu="assignrep"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> assign rep</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a><a href="/pushmessage" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light pushmessage p-relative" data-type="page" data-submenu="pushmessage"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> push message</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity"> &nbsp; </div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid"> &nbsp; </div><div class="inline-block f-sz-12 v-align-mid opensans-regular "> Edit </div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps"> ' + sessionStorage.agencyName + ' </div><div class="opensans-regular text-ellipsis f-italic agency-email"> ' + sessionStorage.agencyEmail + ' </div></div></a> </div></div></div></div>';

            return Header;
        }

    },
    customer: {
        loadcustomercontent: function (data, page) {
            if (data.resultMap != null && data.resultMap != "") {
                localStorage.setItem("customers_data", JSON.stringify(data.resultMap.userTab));
                var resultCustomer = data.resultMap.userTab;
                var template = '';
                for (var c = 0; c < resultCustomer.length; c++) {
                    var cus = resultCustomer[c];
                    if (cus.emailId == undefined) {
                        cusEmail = ' ';
                    } else {
                        cusEmail = cus.emailId.email;
                    }
                    if (cus.lastName == undefined)
                    {
                        lastName = ' ';
                    } else {
                        lastName = cus.lastName;
                    }
                    if (cus.profilePicture == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = cus.profilePicture;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        //profilePicture = ProfileAPI + profilePath;
                    }
                    template += CustomerdynamicTemplate.customer.CustomerDynamicList(cus);
                }

                var header = CustomerdynamicTemplate.carrier.CustomerDynamicHeaderTemplate();
                console.log(template);
                var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div></div>';
                var footer = HomedynamicTemplate.home.HomeDynamicFooterTemplate();

                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                protocall.displaySpinner(false);
                 protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            }
        },
        CustomerDynamicList: function (cus) {

            if (cus.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + cus.profilePicture;
            } else {
                profilePicture = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
            }

            var html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"> <div class=\"topview-leftcontent\"><img src=\"" + profilePicture + "\" alt=\"\" class=\"carrier-img-width\"></div> <div class=\"topview-rightcontent\"> <div class=\"topview-rightcontentcarrier-name t-caps \">" + cus.firstName + "</div> <div class=\"topview-rightcontentcarrier-location t-caps \">" + cus.residentialCity + "</div> <div class=\"topview-rightcontentcarrier-email\">" + cusEmail + "</div> </div> <input type=\"checkbox\" class=\"snap p-absolute\" data-type=\"customersCheckBox\" id=" + cusEmail + " name=\"\"> <label for=" + cusEmail + " class=\"customer-feed-label\"></label> </div> <div class=\"downview p-relative\"> <div id=" + cusEmail + " class=\"carrier-view mycustomerView p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap\" data-type=\"viewcustomerfeedview\">view</div> </div> </div>";

            return html;

        }
    }
};
