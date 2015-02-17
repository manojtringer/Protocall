
// String Replace >>> html = html.replace(/{{example}}/g, example);
var template = {
    subMenuTabHTML: function () {
        var html = '<a href="/{{subMenuTab-name}}" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light {{subMenuTab-name}} p-relative" data-type="page" data-submenu="{{subMenuTab-name}}">'
                + '<div class="sprite-im {{subMenuTab-icon-class}} inline-block tab-icon v-align-mid" style="{{isSubMenuTabIconCl}}">&nbsp;</div>'
                + '<div class="submenu-title t-caps inline-block f-color-w v-align-mid">{{subMenuTab-name-title}}</div>'
                + '<div class="cnt-blk inline-block v-align-mid" style="{{isSubMenuTabCountCl}}">(<span class="cnt-no">{{subMenuTab-count}}</span>)</div>'
                + '</a>';
        return html;
    },
    subMenuBreadCrumbHTML: function () {
        var html = //'<div class="bcrum-lb-submenu left">'
                '<a href="#" class="snap left f-sz-16 ptsans-light {{bc-title}} t-upper p-relative f-color-green" data-type="page" data-submenu="{{bc-title}}" class="">'
                + '<div class="">'
                + '<div class="sprite-im  inline-block v-align-mid {{bc-icon-class}} mr-space-10 ">&nbsp;</div>'
                + '<span class="sub-menu-text  inline-block v-align-mid">{{bc-name-title}}</span>'
                + '</div>'
                + '</a>'
                + '<div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="{{isBC_Name}}">></div>'
                + '<a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="{{bc-title}}-customer" style="{{isBC_Name}}">{{customer-name}}</a>'
        //+'</div>';
        return html;
    },
    subMenuSortHTML: function () {
        var html = '<div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby">'
                + '<div class="sort-text f-italic">Sort by</div>'
                + '<div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div>'
                + '</div>';

        return html;
    },
    subMenuBlk: function () {
        var html = '<div class="mb-submenu-in p-relative">'
                + '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid">'
                // BreadCrumb Zone
                + '{{breadcrumb_block}}'
                + '</div>'
                + '<div class="tab-rb-submenu  inline-block v-align-mid" style="width:70%;">'
                + '<div class="tab-rb-submenu-in-block p-relative">'
                // Tab Zone
                + '{{tab_block}}'
                + '</div>'
                + '</div>'
                + '</div>';
        return html;

    },
    /*Naveen 16-2-2015 changes Start */
    feedsTemplateHTML: function () {
        //console.log("dynamic-feed",a)
        var leftSideFeedHTML = "", rightSideFeedHTML = "", html = "", innereachCount = 0, outereachCount = 0;
        var otherPartyRecords = 0, otherPartyAudioRecords = 0, otherPartyPicRecords = 0, totalHTML = "";
        var profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
        //console.log("RESPONSE.LEFTSIDEFEED", RESPONSE.LEFTSIDEFEED);
        //console.log("RESPONSE.RIGHTSIDEFEED", RESPONSE.RIGHTSIDEFEED);
        $(".container").addClass("container");
        $(".container").removeClass("container-maxwidth");
        $(".content-holder").empty();
        $.each(RESPONSE.LEFTSIDEFEED, function (index, leftSideFeed) {
            //console.log("leftSideFeed", leftSideFeed);
            outereachCount++;
            console.log("outereachCount", outereachCount);
            var alertDate = leftSideFeed.alertDetails.alertDate;
            console.log("alertDate", alertDate);
            var alertTime = moment(Number(alertDate)).format('h:mmA');
            console.log("alertTime", alertTime);
            var bDay = leftSideFeed.userDetails.birthDate;
            var bDate = moment(bDay).format('ll');
            var feedUserEmail = leftSideFeed.userDetails.emailId.email;
            leftSideFeedHTML = '<div class="lf-block left">'
                    + '<div class="leftblk-spacing">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-det-pad p-relative">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box">'
                    + '<img src="' + profilePicture + '" alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-det-b inline-block v-align-mid">'
                    + '<div class="top-b p-relative">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">' + leftSideFeed.userDetails.firstName + ' ' + leftSideFeed.userDetails.lastName + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">' + alertTime + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">' + leftSideFeed.alertDetails.type + '</div>'
                    // + '<div class="p-relative inline-block v-align-mid">'
                    //  + '<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
                    //    + '</div>'
                    //+ '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div>'
                    + '</div>'
                    + '<div class="bot-b">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">' + bDate + '</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">' + leftSideFeed.userDetails.residentialCity + '</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">' + leftSideFeed.userDetails.phone.number + '</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">' + feedUserEmail + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-share-b inline-block v-align-mid">'
                    + '<div class="myshare">'
                    + '<div class="inner-share-spacing snap" data-type="share">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="myview">'
                    + '<div class="inner-view-spacing snap" data-type="view">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">View</span>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            //console.log("leftSideFeedHTML", leftSideFeedHTML);
            $.each(RESPONSE.RIGHTSIDEFEED, function (index, rightSideFeed) {
                //console.log("inner each");
                //console.log("leftSideFeed.alertDetails.alertId", leftSideFeed.alertDetails.alertId);
                //console.log("rightSideFeed.alertId", rightSideFeed.alertId);
                //console.log("rightSideFeed.alertId", leftSideFeed.alertDetails.type);
                if ((leftSideFeed.alertDetails.alertId == rightSideFeed.alertId) && leftSideFeed.alertDetails.type !== "policyalert") {
                    innereachCount++;
                    console.log("innereachCount", innereachCount);
                    console.log("rightSideFeed.NoofOtherPartyRecord", rightSideFeed.NoofOtherPartyRecord);
                    console.log("rightSideFeed.NoofPictureRecord", rightSideFeed.NoofPictureRecord);
                    console.log("rightSideFeed.NoofAudioRecord", rightSideFeed.NoofAudioRecord);
                    console.log("condition satisfied");
                    if (rightSideFeed.NoofOtherPartyRecord !== "undefined") {
                        otherPartyRecords = 0;
                    } else {
                        otherPartyRecords = rightSideFeed.NoofOtherPartyRecord;
                    }
                    if (rightSideFeed.NoofPictureRecord !== "undefined") {
                        otherPartyPicRecords = 0;
                    } else {
                        otherPartyPicRecords = rightSideFeed.NoofPictureRecord;
                    }
                    if (rightSideFeed.NoofAudioRecord == "undefined") {
                        otherPartyAudioRecords = 0;
                    } else {
                        otherPartyAudioRecords = rightSideFeed.NoofAudioRecord;
                    }

                    rightSideFeedHTML = leftSideFeedHTML + '<div class="rg-block left p-relative">'
                            + '<div class="feed-det bg-color-dblue p-relative">'
                            + '<div class="feed-docs-pad p-relative docs-block t-center">'
                            + '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc">'
                            + '<div class="t-center p-relative">'
                            + '<div class="doc-icon-box" >'
                            + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                            + '</div>'
                            + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + otherPartyRecords + '</span></div>'
                            + '<div class="feed-menu-text bold">Text</div>'
                            + '</div>'
                            + '</a>'
                            + '<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc">'
                            + '<div class="t-center p-relative">'
                            + '<div class="doc-icon-box" >'
                            + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                            + '</div>'
                            + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + otherPartyPicRecords + '</span></div>'
                            + '<div class="feed-menu-text bold">Photos</div>'
                            + '</div>'
                            + '</a>'
                            + '<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc">'
                            + '<div class="t-center p-relative">'
                            + '<div class="doc-icon-box" >'
                            + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                            + '</div>'
                            + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + otherPartyAudioRecords + '</span></div>'
                            + '<div class="feed-menu-text bold">Voice</div>'
                            + '</div>'
                            + '</a>'
                            + '</div>'
                            + '</div>'
                            + '</div>';
                    template.showHomePageInfo(rightSideFeedHTML);
                    //console.log("rightSideFeedHTML", rightSideFeedHTML);
                } else if ((leftSideFeed.alertDetails.alertId == rightSideFeed.alertId) && leftSideFeed.alertDetails.type == "policyalert") {
                    console.log("else block");
                    rightSideFeedHTML = leftSideFeedHTML + '<div class="rg-block left p-relative">'
                            + '<div class="feed-det bg-color-dblue p-relative">'
                            + '<div class="feed-docs-pad p-relative docs-block t-center">'
                            + '<a href="/changecoverage" class="snap feed-addRemove-block inline-block v-align-mid f-sz-14 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
                            + '<div class="t-center">'
                            + '<div class="sprite-im inline-block v-align-mid message-green-icon">&nbsp;</div>'
                            + '<span class="feed-addRemove-text inline-block v-align-mid t-caps">' + leftSideFeed.alertDetails.policyChange + '</span>'
                            + '</div>'
                            + '</a>'
                            + '</div>'
                            + '</div>'
                            + '</div>';
                    template.showHomePageInfo(rightSideFeedHTML);
                }
                //totalHTML = totalHTML+rightSideFeedHTML;
            });
            /* html = html+'<div class="feed-block clr-fl">'
             +rightSideFeedHTML
             + '</div>'
             //console.log("html",html); */
        });
        //return html;
        protocall.displaySpinner(false);
        protocall.displaySpinnerForAlerts(false);
    },
    showHomePageInfo: function (rightSideFeedHTML) {
        console.log("showHomePageInfo");
        var html = '<div id="loadingAlerts" style="display:none;">Loading . . . </div><div class="feed-block clr-fl">'
                + rightSideFeedHTML
                + '</div>';
        $(".content-holder").append($(html));
    },
    /*Naveen 16-2-2015 changes End */
    /*Naveen 16-2-2015 changes End */
    CarrierfeedsTemplateHTML: function (c) {
        // console.log(cus)
        // cEmail =c.emailId.email;
        //console.log(cEmail)
        var html = '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative opensans-regular"><div class="carrierlogo-pic"><img src="' + profilePicture + '" alt="" class="carrier-img-width"></div> </div> <div class="carrier-info bg-color-white p-relative carrier-groupblock opensans-regular"> '
                + '<div class="carrier-name t-caps t-center">' + c.carrierName + '</div> <div class="carrier-location t-caps t-center">' + c.state + '</div> <div class="carrier-email t-center">' + cEmail + '</div></div> <div class="carrier-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view </div></div>';
        return html;
    },
    CustomerfeedsTemplateHTML: function (cus) {
        console.log(cus)
        var html = '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                + '<img src="' + profilePicture + '" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                + '<div class="carrier-name t-caps t-center">' + cus.firstName + '</div>'
                + '<div class="carrier-location  t-caps t-center">' + cus.residentialCity + '</div><div class="carrier-email t-center">' + cusEmail + '</div></div>'
                + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>';
        return html;
    },
    RepsfeedsTemplateHTML: function (rep) {
        console.log(rep)
        var html = '<div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="' + profilePicture + '" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">' + rep.name + '</div><div class="carrier-location t-caps">' + rep.location + '</div><div class="carrier-email">' + repEmail + '</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div>';
        return html;
    },
    feedDocsTemplate: function () {
        var html = '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc">'
                + '<div class="t-center p-relative">'
                + '<div class="doc-icon-box" >'
                + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                + '</div>'
                + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                + '<div class="feed-menu-text bold">Text</div>'
                + '</div>'
                + '</a>'
                + '<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc">'
                + '<div class="t-center p-relative">'
                + '<div class="doc-icon-box" >'
                + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                + '</div>'
                + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                + '<div class="feed-menu-text bold">Photos</div>'
                + '</div>'
                + '</a>'
                + '<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc">'
                + '<div class="t-center p-relative">'
                + '<div class="doc-icon-box" >'
                + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                + '</div>'
                + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                + '<div class="feed-menu-text bold">Voice</div>'
                + '</div>'
                + '</a>';
        return html;
    },
    feedAddRemoveTemplate: function () {
        var html = '<a href="/{{addremove-link}}" class="snap feed-addRemove-block inline-block v-align-mid f-sz-14 opensans-regular f-color-green changeCoverage p-relative" data-type="{{addremove-link}}">'
                + '<div class="t-center">'
                + '<div class="sprite-im inline-block v-align-mid message-green-icon">&nbsp;</div>'
                + '<span class="feed-addRemove-text inline-block v-align-mid t-caps">{{addremove-text}}</span>'
                + '</div>'
                + '</a>';
        return html;
    },
    //agency template feed ui
    agencyProfiletemplate: function () {
        var html = '<div class="agenyparent-class bg-color-white"><div class="p-relative"><div class="agenyleft-profile inline-block v-align-mid p-relative"><div class="agenyleft-image border-all">'
                + '<div class="overflow-hidden">'
                + '<div class="agenypic-info"><img src="{{my-prof-pic}}"alt="" class="ageny-img-width"></div>'
                + '<div class="v-align-mid opensans-regular text-color-overlay f-sz-12 p-relative"><div class="sprite-im calendar-icon inline-block">&nbsp;</div>'
                + '<div class="t-upper inline-block">Change Image</div>'
                + '</div></div></div></div><div class="agenyright-profile inline-block v-align-mid"><div class="agenyparent-block"><div class ="agenyinternal-block">'
                + '{{prof-info-group}}' //iterate
                + '</div></div></div></div></div>';
    },
    agencyProfileDetailsGrouptemplate: function () {
        var html = '<div class="agenygroup-block border-bot opensans-regular"><div class="agenychild-block"><div class="agenytitle-block  inline-block p-relative">{{prof-content-title}}</div>'
                + '<div class="agenycontent-block  inline-block p-relative">{{prof-content-detail}}</div></div></div>';
        return html;
    },
    GetarchiveMenu: function () {
        console.log("GetarchiveMenu", RESPONSE.LEFTSIDEFEED.length);
        var html = '<div class="mb-submenu-in p-relative"><div class="tab-rb-submenu inline-block v-align-mid"><div class="p-relative "><a href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light myalerts p-relative selected-tab" data-type="page" data-submenu="myalerts"><span class="submenu-title t-caps f-color-w">My Alerts</span><span class="cnt-blk">(<span class="cnt-no">' + RESPONSE.LEFTSIDEFEED.length + '</span>)</span></a><a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light incidents p-relative" data-type="page" data-submenu="incidents"><div class="submenu-title t-caps inline-block f-color-w v-align-mid">incidents</div></a><a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="policies"><span class="submenu-title t-caps f-color-w">Policies</span></a><a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="archives"><span class="submenu-title t-caps f-color-w">Archives</span></a><a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="view_archives"><span class="submenu-title t-caps f-color-w">View Archived</span></a><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div><div class="clear"></div></div></div>';
        return html;
    }




};
