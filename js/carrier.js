var CarrierdynamicTemplate = {
    carrier: {
        CarrierDynamicHeaderTemplate: function () {

            var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"> </div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="' + sessionStorage.profilePic + '" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span> Hi, </span> <span class="t-caps">' + sessionStorage.agencyName + ' </span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon"> &nbsp; </div><div class="clear"> </div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Home </span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w selected-tab" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Carriers </span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Customers </span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> My Reps </span> </div></a> </div><div class="mb-submenu"><div class="mb-submenu-in p-relative"><div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="carrier-headerbox snap left f-sz-16 ptsans-light carriers t-upper p-relative f-color-green" data-type="page" data-submenu="carriers"><div class="">'
                    + '<div class="sprite-im carriers-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div>'
                    + '<span class="sub-menu-text inline-block v-align-mid"> carriers</span><span id="id-carrierpage-headertext"></span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="carriers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:70%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbycarrier"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity"> &nbsp; </div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid"> &nbsp; </div><div class="inline-block f-sz-12 v-align-mid opensans-regular "> Edit </div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps"> ' + sessionStorage.agencyName + ' </div><div class="opensans-regular text-ellipsis f-italic agency-email"> ' + sessionStorage.agencyEmail + ' </div></div></a> </div></div></div></div>';

            return Header;
        },
        loadcarriercontent: function (data, page) {

            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (data.resultMap != null && data.resultMap != "") {
                    var resultCarrier = data.resultMap.carrierTab;
                    localStorage.setItem("customers_data", JSON.stringify(data.resultMap.userTab));
                    localStorage.setItem("users", JSON.stringify(resultCarrier));

                    var template = '';
                    for (var rc = 0; rc < resultCarrier.length; rc++) {
                        var c = resultCarrier[rc];
                        if (c.emailId == undefined) {
                            cEmail = ' ';
                            console.log(cEmail);
                        } else {
                            cEmail = c.emailId.email;
                            console.log(cEmail);
                        }
                        if (c.carrierLogo == undefined)

                        {

                            profilePicture = "https://proto-call-test.appspot.com/file/AMIfv95gsNeXXhLvQYjWfzFNDL7J7AQEbMbR2o21zlAe-4CvYI8xrZurkzK4NBR1nRbmmjbpTl_ZdAUMZs8LJgRw7rx9LdYj2km00q-HF9Nl_rEgqtEN9NZP0nYX2DB0EGwyuFQNKIsPnquZMD-uvgnIVU02EJiKwpLBzuGuqNXmtLtyTDGLYwBMtdJTmKLkawOaeFmWrLw_";

                        } else {

                            var profilePath = c.carrierLogo;
                            profilePicture = "https://proto-call-test.appspot.com/file/" + profilePath;
                        }

                        template += CarrierdynamicTemplate.carrier.CarrierDynamicList(c);
                    }
                    var header = HeaderTemplate.Menu.DynamicHeaderTemplate();

                    var content = '<div class="topContainer"><div class="container"> <div class="content-holder">' + template + '</div></div></div></div></div>';
                    var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();

                    $("#page").empty();
                    totalHtml = header + content + footer;
                    $("#page").append(totalHtml);
                    protocall.displaySpinner(false);
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
                       protocall.events.GlobalContainerScrollevent();
                }
            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();

                CarrierdynamicTemplate.carrier.loadAssociatedCustomersForCarrier(header);

            }

        },
        loadAssocaiteCustomersDataForCarrier: function () {
            var totalHTML = "<div>No Records </div>";
            var response = JSON.parse(localStorage.getItem("CARRIERREP_DATA"));
            var resp = response;
            try {
                if (resp.resultMap.carrierTab[2].length != undefined) {
                    // if (resp.resultMap.AssociatedRepresentatives.length > 0) {
                    totalHTML = "";
                    // }
                    for (var index = 0; index < resp.resultMap.carrierTab[2].length; index++) {

                        var name = resp.resultMap.carrierTab[2][index].firstName;
                        var location = resp.resultMap.carrierTab[2][index].residentialState;
                        var email = resp.resultMap.carrierTab[2][index].emailId.email;
                        var carrierid = resp.resultMap.carrierTab[2][index].agencyId;
                        var image = resp.resultMap.carrierTab[2][index].profilePicture;

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

                        //var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                        if (image == undefined) {
                            image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                        } else {
                            image = "https://proto-call-test.appspot.com/file/" + image;

                        }
//rep id

                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="viewcustomerfeedview"> <div class="border-all p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width"> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';

                        totalHTML += associateBlock;
                    }
                }
            } catch (err) {
                totalHTML = "<div>No Records </div>";
            }

            $("#id-carrierassociatedblock").html('');
            $("#id-carrierassociatedblock").append(totalHTML);
        },
        loadAssocaiteAgenciesDataForCarrier: function () {
            var totalHTML = "<div>No Records </div>";
            var response = JSON.parse(localStorage.getItem("CARRIERREP_DATA"));
            var resp = response;
            try {
                if (resp.resultMap.carrierTab[0].length != undefined) {
                    // if (resp.resultMap.AssociatedRepresentatives.length > 0) {
                    totalHTML = "";
                    // }
                    for (var index = 0; index < resp.resultMap.carrierTab[0].length; index++) {

                        var name = resp.resultMap.carrierTab[0][index].agencyName;
                        var location = resp.resultMap.carrierTab[0][index].city + "," + resp.resultMap.carrierTab[0][index].state;
                        var email = resp.resultMap.carrierTab[0][index].emailId.email;
                        var carrierid = resp.resultMap.carrierTab[0][index].agencyId;
                        var image = resp.resultMap.carrierTab[0][index].agencyLogo;

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

                        //var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                        if (image == undefined) {
                            image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                        } else {
                            image = "https://proto-call-test.appspot.com/file/" + image;

                        }
//rep id

                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view myagenciesView left p-relative" data-type="viewagenciesfeedview"> <div class="border-all p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width"> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';

                        totalHTML += associateBlock;
                    }
                }
            } catch (err) {
                totalHTML = "<div>No Records </div>";
            }

            $("#id-carrierassociatedblock").html('');
            $("#id-carrierassociatedblock").append(totalHTML);

        },
        loadAssociatedCustomersForCarrier: function (contenthtml) {
            var response = JSON.parse(localStorage.getItem("CARRIERREP_DATA"));
            var template = CarrierdynamicTemplate.carrier.carrierRepdynamicView(response);

            var totalHTML = "<div>No Records </div>";
            var resp = response;

            //$("#id-carrierassociatedblock").html('');
            //    $("#id-carrierassociatedblock").append(totalHTML);
            try {
                if (resp.resultMap.carrierTab[2].length != undefined) {
                    // if (resp.resultMap.AssociatedRepresentatives.length > 0) {
                    totalHTML = "";
                    // }
                    for (var index = 0; index < resp.resultMap.carrierTab[2].length; index++) {

                        var name = resp.resultMap.carrierTab[2][index].firstName;
                        var location = resp.resultMap.carrierTab[2][index].residentialState;
                        var email = resp.resultMap.carrierTab[2][index].emailId.email;
                        var carrierid = resp.resultMap.carrierTab[2][index].agencyId;
                        var image = resp.resultMap.carrierTab[2][index].profilePicture;

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

                        //var image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                        if (image == undefined) {
                            image = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                        } else {
                            image = "https://proto-call-test.appspot.com/file/" + image;

                        }
//rep id

                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="viewcustomerfeedview"> <div class="border-all p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width"> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';

                        totalHTML += associateBlock;
                    }
                }
            } catch (err) {
                totalHTML = "<div>No Records </div>";
            }
            var temp_html = template + totalHTML + "</div>";
            var contenta = contenthtml + '<div class="topContainer"><div class="container"> <div class="content-holder">' + temp_html + '</div></div></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();

            $("#page").empty();
            $("#page").append(contenta + footer);
            protocall.displaySpinner(false);
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
               protocall.events.GlobalContainerScrollevent();
//            }
//        });
        },
        loadcarriercontentSort: function (data, page) {

            if (data.resultMap != null && data.resultMap != "") {
                var resultCarrier = data.resultMap.ArrayOfCarriersDetails;
                localStorage.setItem("users", JSON.stringify(resultCarrier));

                var template = '';
                for (var rc = 0; rc < resultCarrier.length; rc++) {
                    var c = resultCarrier[rc];
                    if (c.emailId == undefined) {
                        cEmail = ' ';
                        console.log(cEmail);
                    } else {
                        cEmail = c.emailId.email;
                        console.log(cEmail);
                    }
                    if (c.carrierLogo == undefined)

                    {

                        profilePicture = "https://proto-call-test.appspot.com/file/AMIfv95gsNeXXhLvQYjWfzFNDL7J7AQEbMbR2o21zlAe-4CvYI8xrZurkzK4NBR1nRbmmjbpTl_ZdAUMZs8LJgRw7rx9LdYj2km00q-HF9Nl_rEgqtEN9NZP0nYX2DB0EGwyuFQNKIsPnquZMD-uvgnIVU02EJiKwpLBzuGuqNXmtLtyTDGLYwBMtdJTmKLkawOaeFmWrLw_";

                    } else {

                        var profilePath = c.carrierLogo;
                        profilePicture = "https://proto-call-test.appspot.com/file/" + profilePath;
                    }

                    template += CarrierdynamicTemplate.carrier.CarrierDynamicList(c);
                }
                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();

                var content = '<div class="topContainer"><div class="container"> <div class="content-holder">' + template + '</div></div></div></div></div>';
                var footer = HomedynamicTemplate.home.HomeDynamicFooterTemplate();

                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                protocall.displaySpinner(false);
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
                   protocall.events.GlobalContainerScrollevent();
            }
        },
        carrierRepdynamicView: function (response) {
            console.log(response);
            var viewdata = response.resultMap.carrierTab[1];
            var address2 = "";
            var facebook = "";
            if (viewdata.address2 == undefined) {
                address2 = "";
            } else {
                address2 = viewdata.address2;
            }

            if (viewdata.facebookPage == undefined) {
                facebook = "";
            } else {
                facebook = viewdata.facebookPage;
            }

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">AGENCY ID :</div> <div class="carrier-view-id inline-block">' + viewdata.carrierId + '</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="' + HOMEPAGERESPONSE.PROFILEAPI + viewdata.carrierLogo + '" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-regular "><a class="f-color-w" href="' + viewdata.website.value + '" target="_blank">WEBSITE</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w"><a class="f-color-w" href="' + facebook + '" target="_blank">FACEBOOK</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency name</div> <div class="carrier-left-content t-left right ">' + viewdata.carrierName + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">' + viewdata.address + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">' + viewdata.state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">' + viewdata.city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right"><a href="tel:' + viewdata.phone.number + '">' + viewdata.phone.number + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">' + viewdata.zip + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a href="mailto:' + viewdata.emailId.email + '">' + viewdata.emailId.email + '</a></div> </div> </div> </div> </div> </div> </div> '

//            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">CARRIER ID :</div> <div class="carrier-view-id inline-block">\' + viewdata.carrierId + \'</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="\' + HOMEPAGERESPONSE.PROFILEAPI + viewdata.carrierLogo + \'" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-regular "><a class="f-color-w" href="\' + viewdata.website.value + \'" target="_blank">WEBSITE</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w"><a class="f-color-w" href="\' + viewdata.facebookPage + \'" target="_blank">FACEBOOK</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier name</div> <div class="carrier-left-content t-left right ">\' + viewdata.carrierName + \'</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">\' + viewdata.address + \'</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">\' + viewdata.address + \'</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">\' + viewdata.state + \'</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">\' + viewdata.city + \'</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right"><a href="tel:\' + viewdata.phone.number + \'">\' + viewdata.phone.number + \'</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">\' + viewdata.zip + \'</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
//                    + '<div class="carrier-left-content t-left right"><a href="mailto:\' + carrieremail + \'">\' + carrieremail + \'</a></div> </div> </div> </div> </div> </div> </div> '

            var dropDownContent = '<div class="associated-carrierview p-relative"> <div class="p-relative ">'
                    + '<select id="id-associatedropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED CUSTOMERS</option><option>ASSOCIATED AGENCIES</option></select> '
                    + '<div id="associatedownarrow" class="p-relative inline-block"> <div id="associatedownarrow" class="id-associatedownarrow sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot">';

            return html + dropDownContent;
        },
        CarrierDynamicList: function (c) {
            var html = '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative opensans-regular"><div class="mycarrierlogo-pic"><img  src="' + profilePicture + '" alt="" class="mycarrier-img-width snap" data-type="viewcarrierfeedview" data-id = "' + c.carrierId + '"></div> </div> <div class="carrier-info bg-color-white p-relative carrier-groupblock opensans-regular"> <div class="carrier-name t-caps t-center">' + c.carrierName + '</div> <div class="carrier-location t-caps t-center">' + c.state + '</div> '
                    + '<div class="carrier-email t-center"><a href="mailto:' + cEmail + '">' + cEmail + '</a></div></div> <div class="carrier-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview" data-id = "' + c.carrierId + '">view </div></div>';

            return html;

        }
    }
};
