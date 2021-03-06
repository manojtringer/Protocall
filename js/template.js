
// String Replace >>> html = html.replace(/{{example}}/g, example);
var template = {
    subMenuTabHTML: function () {
        var html = '<a href="/{{subMenuTab-name}}" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light {{subMenuTab-name}} p-relative" data-type="page" data-submenu="{{subMenuTab-name}}">'
                + '<div class="sprite-im {{subMenuTab-icon-class}} inline-block tab-icon v-align-mid" style="{{isSubMenuTabIconCl}}">&nbsp;</div>'
                + '<div class="submenu-title t-caps inline-block f-color-w v-align-mid ">{{subMenuTab-name-title}}</div>'
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
				+'<a href="javascript:void(0)" class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" id="subMenuToShow" style="display:none;float:left;"></a>'
                + '<a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="{{bc-title}}-customer" style="{{isBC_Name}}">{{customer-name}}</a>'
        //+'</div>';
        return html;
    },
    subMenuSortHTML: function () {
        var html = '<div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby">'
                + '<div class="sort-text f-italic" id="sortByHome">Sort by</div>'
                + '<div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div>'
                + '</div>';

        return html;
    },
    subMenuBlk: function () {
        var html = '<div class="mb-submenu-in p-relative">'
                + '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid" style="width:50%;">'
                // BreadCrumb Zone
                + '{{breadcrumb_block}}'
                + '</div>'
                + '<div class="tab-rb-submenu  inline-block v-align-mid" style="width:69%;">'
                + '<div class="tab-rb-submenu-in-block p-relative">'
                // Tab Zone
                + '{{tab_block}}'
                + '</div>'
                + '</div>'
                + '</div>';
        return html;

    },
    /*Naveen Chnages 19-2-2015 start */
    feedsTemplateHTML: function (alertDetailsValue) {
        var alertType = "";
        if (alertDetailsValue.alertDetails.type !== "undefined") {
            alertType = alertDetailsValue.alertDetails.type;
        }
        var incedentAlertFeed = template.incidentAlertFeedHMLT(alertDetailsValue, alertType);
        var policyAlertFeed = template.policyAlertFeedHMLT(alertDetailsValue, alertType);
        html = '<div class="feed-block clr-fl">'
                + incedentAlertFeed
                + policyAlertFeed
                + '</div>';
        return html;

    },
    viewRelatedFeeds: function (relatedFeedValue, alertTypeValue) {
        var incedentAlertFeed = template.incidentAlertFeedHMLT(relatedFeedValue, alertTypeValue);
        var policyAlertFeed = template.policyAlertFeedHMLT(relatedFeedValue, alertTypeValue);
        html = '<div class="feed-block clr-fl">'
                + incedentAlertFeed
                + policyAlertFeed
                + '</div>';
        return html;
    },
    /*Naveen 23-2-2015 Changes Start */
    incidentAlertFeedHMLT: function (alertDetailsValue, alertType) {
        var noOfOtherPartyRecordsCount = alertDetailsValue.NoofOtherPartyRecord, noOfAudioRecordCount = alertDetailsValue.NoofAudioRecord, noOfPictureRecord = alertDetailsValue.NoofPictureRecord, html = "", alertFeedHtml = "";
        console.log("alertDetailsValue.length", alertDetailsValue.alertDetails);
        if (alertType == "incidentalert") {
            if (noOfOtherPartyRecordsCount === undefined && noOfPictureRecord === undefined && noOfAudioRecordCount === undefined) {
                console.log("condition satisfied");
                noOfOtherPartyRecordsCount = 0;
                noOfPictureRecord = 0;
                noOfAudioRecordCount = 0;
            }
            var incidentrightSideFeed = template.rightSideFeed(alertDetailsValue, alertType);
            alertFeedHtml = '<div class="rg-block left p-relative">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-docs-pad p-relative docs-block t-center">'
                    + '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc" id=' + alertDetailsValue.alertDetails.alertId + '>'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + noOfOtherPartyRecordsCount + '</span></div>'
                    + '<div class="feed-menu-text bold">Text</div>'
                    + '</div>'
                    + '</a>'
                    + '<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc" id=' + alertDetailsValue.alertDetails.alertId + '>'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + noOfPictureRecord + '</span></div>'
                    + '<div class="feed-menu-text bold">Photos</div>'
                    + '</div>'
                    + '</a>'
                    + '<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc" id=' + alertDetailsValue.alertDetails.alertId + '>'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + noOfAudioRecordCount + '</span></div>'
                    + '<div class="feed-menu-text bold">Voice</div>'
                    + '</div>'
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                html = '<div class="feed-block clr-fl">'
                        + incidentrightSideFeed
                        + alertFeedHtml
                        + '</div>';
            } else {
                console.log("incident else");
                html = incidentrightSideFeed + alertFeedHtml;
            }
        }
        return html;
    },
    policyAlertFeedHMLT: function (alertDetailsValue, alertType) {
        var html = "", alertFeedHtml = "";
        console.log("alertDetailsValue in policyAlertFeedHMLT", alertDetailsValue.length)
        if (alertType == "policyalert") {
            var policyrightSideFeed = template.rightSideFeed(alertDetailsValue, "Policy Alert");
            alertFeedHtml = '<div class="rg-block left p-relative">'
                    + '<div class="feed-det bg-color-dblue p-relative" style="margin-left:7px">'
                    + '<div class="feed-docs-pad p-relative docs-block t-center">'
                    + '<a href="/changecoverage" class="snap feed-addRemove-block inline-block v-align-mid f-sz-14 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
                    + '<div class="t-center">'
                    + '<div class="sprite-im inline-block v-align-mid message-green-icon">&nbsp;</div>'
                    + '<span class="feed-addRemove-text inline-block v-align-mid t-caps">' + alertDetailsValue.alertDetails.policyChange + '</span>'
                    + '</div>'
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            if (HOMEPAGERESPONSE.POLICYALERTCLICKED) {
                html = '<div class="feed-block clr-fl">'
                        + policyrightSideFeed
                        + alertFeedHtml
                        + '</div>';
            } else {
                console.log("in policyalerts else");
                html = policyrightSideFeed + alertFeedHtml;
            }
        }

        return html;
    },
    /*Naveen 23-2-2015 Changes End */
    /*Naveen 23-2-2015 Changes Start */
    rightSideFeed: function (alertDetailsValue, alertType) {
        console.log("alertDetails in feedsTemplateHTML", alertDetailsValue);
        var html = "", firstName = "", lastName = "", alertDate = "", alertTime = "", bDay = "", bDate = "", residentialCity = "", phoneNumber = "", feedUserEmail = "", alertFeedHtml = "", profilePicture = "", rightSideAlerFeedHTML = "", viewArchiveFeedHTML = "";
        if (HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED) {
            firstName = HOMEPAGERESPONSE.COMMONUSERDETAILS.firstName;
            lastName = HOMEPAGERESPONSE.COMMONUSERDETAILS.lastName;
            console.log("lastName", lastName);
            if (lastName == undefined) {
                lastName = "";
            }
            if (alertDetailsValue.alertDetails.alertDate !== "undefined") {
                alDate = alertDetailsValue.alertDetails.alertDate;
                alertDate = moment(Number(alDate)).format('MMM D, YYYY');
                alertTime = moment(Number(alDate)).format('h:mmA');
            }
            birthday = HOMEPAGERESPONSE.COMMONUSERDETAILS.birthday;
			if (alertDetailsValue.IncidentDetails != undefined) {
				if(alertDetailsValue.IncidentDetails.incidentCity != undefined){
					if(alertType == "incidentalert") {
						residentialCity = alertDetailsValue.IncidentDetails.incidentCity;
					} 
				} else {
					residentialCity = "";
				}
			} else {
				residentialCity = "";
			}
			if(HOMEPAGERESPONSE.COMMONUSERDETAILS.residentialCity != undefined){
				if(alertType == "policyalert") {
					residentialCity = HOMEPAGERESPONSE.COMMONUSERDETAILS.residentialCity;
				}
			} else {
				residentialCity = "";
			}
			phoneNumber = HOMEPAGERESPONSE.COMMONUSERDETAILS.phoneNumber;
            feedUserEmail = HOMEPAGERESPONSE.COMMONUSERDETAILS.userEmail;
            profilePicture = HOMEPAGERESPONSE.COMMONUSERDETAILS.profilePicture;
            try {
                if (profilePicture == undefined) {
                    profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                }
            } catch (err) {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }
            bDate = HOMEPAGERESPONSE.COMMONUSERDETAILS.birthday;
            alertId = alertDetailsValue.alertDetails.alertId;
            //alertDate = HOMEPAGERESPONSE.COMMONUSERDETAILS.alertDate;
        } else {
            if (alertDetailsValue.userDetails.firstName !== "undefined") {
                firstName = alertDetailsValue.userDetails.firstName;
            }
            if (alertDetailsValue.userDetails.lastName !== undefined) {
                lastName = alertDetailsValue.userDetails.lastName;
            }
            if (alertDetailsValue.alertDetails.alertDate !== "undefined") {
                alDate = alertDetailsValue.alertDetails.alertDate;
                alertDate = moment(Number(alDate)).format('MMM D, YYYY');
                alertTime = moment(Number(alDate)).format('h:mmA');
            }
            if (alertDetailsValue.userDetails.birthDate !== "undefined") {
                bDay = alertDetailsValue.userDetails.birthDate;
                bDate = moment(bDay).format('MMM D, YYYY');
            }
            /* if (alertDetailsValue.userDetails.residentialCity !== "undefined") {
                residentialCity = alertDetailsValue.userDetails.residentialCity;
            } */
			if(alertType == "incidentalert"){
				if (alertDetailsValue.IncidentDetails != undefined) {
					if(alertDetailsValue.IncidentDetails.incidentCity != undefined){
						if(alertType == "incidentalert") {
							residentialCity = alertDetailsValue.IncidentDetails.incidentCity;
						} 
					} else {
						residentialCity = "NA";
					}
				} else {
					residentialCity = "";
				}
			} else {
			residentialCity = alertDetailsValue.userDetails.residentialCity;
			}
			/* if (alertDetailsValue.userDetails.residentialCity != undefined) {
				if(alertType == "policyalert"){
					residentialCity = alertDetailsValue.userDetails.residentialCity;
				}
			} else {
				residentialCity = "";
			} */
			if (alertDetailsValue.userDetails.phone.number !== "undefined") {
                phoneNumber = alertDetailsValue.userDetails.phone.number;
            }
            if (alertDetailsValue.userDetails.emailId.email !== "undefined") {
                feedUserEmail = alertDetailsValue.userDetails.emailId.email;
            }
            console.log("alertType", alertType);
            try {
                if (alertDetailsValue.userDetails.profilePicture != undefined) {
                    profilePicture = HOMEPAGERESPONSE.PROFILEAPI + alertDetailsValue.userDetails.profilePicture;
                } else {
                    profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                }
            } catch (err) {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }
            if (alertDetailsValue.alertDetails.alertId !== "undefined") {
                alertId = alertDetailsValue.alertDetails.alertId;
            }
        }
        if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
            viewArchiveFeedHTML = "";
        } else {
            viewArchiveFeedHTML = '<input style="z-index:10;" id=' + alertId + ' type="checkbox" class="checkbox snap" data-type="archiveCheckBox"><label for=' + alertId + '></label>';
        }

        var repNameLists = "";
        var repNameFlag = 0;

        //sharedNameAndTheirRole

        try {
            if (alertDetailsValue.sharedNameAndTheirRole != undefined) {

                for (var index = 0; index < alertDetailsValue.sharedNameAndTheirRole.length; index++) {

                    var repName = alertDetailsValue.sharedNameAndTheirRole[index];

                    if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                        if (repName.index("agencyrepresentative") > -1) {
                            repNameLists += repName.substring(0, index("@")) + ",";
                            repNameFlag = 1;
                        }
                    } else {
                        if (repName.index("carrierrepresentative") > -1) {
                            repNameLists += repName.substring(0, index("@")) + ",";
                            repNameFlag = 1;
                        }
                    }

                }


            }
        } catch (err) {

        }

        if (alertType == "incidentalert") {
            alertType = "Incident Alert";
        }


        var agencyName = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {

            if (alertDetailsValue.alertDetails.agencyName != undefined) {
                agencyName = '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper" style="margin-left:4px;">' + alertDetailsValue.alertDetails.agencyName + '</div>';
            }

        } else {
            agencyName = "";
        }

        rightSideAlerFeedHTML = '<div class="lf-block left">'
                + '<div class="leftblk-spacing" style="padding-right: 10px;">'
                + '<div class="feed-det bg-color-dblue p-relative" >'
                + '<div class="feed-det-pad p-relative">'
                + '<div class="feed-pic-b inline-block v-align-mid">'
                + '<div class="feed-user-pic-box">'
                + viewArchiveFeedHTML
                + '<img src="' + profilePicture + '" alt="" class="feeduserpic">'
                + '</div>'
                + '</div>'
                + '<div class="feed-user-det-b inline-block v-align-mid">'
                + '<div class="top-b p-relative">'
                + '<div class="p-relative inline-block v-align-top">'
                + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                + '</div>'
                + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps" style="margin-left:5px;">' + firstName + ' ' + lastName + '</div>'
                + agencyName + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper" style="margin-left:4px;">' + alertTime + '</div>'
                + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps" style="margin-left:-7px;">' + alertType + '</div>';

        if (repNameFlag == 1) {
            rightSideAlerFeedHTML += '<div class="sprite-im inline-block assigedrep-icon">&nbsp;</div><div title=' + repNameLists + ' class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps" style="   cursor: pointer; margin-left: 5px; text-overflow: ellipsis;">' + repNameLists + '</div>'
            repNameFlag = 0;
        }


        rightSideAlerFeedHTML += '</div>'
                + '<div class="bot-b" style="width:103%;">'
                + '<div class="p-relative inline-block v-align-bot" style="margin-left:-2px;">'
                + '<div class="sprite-im calendar-icon calendar-icon-pos" style="float:left;">&nbsp;</div>'
                + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps" style="float:left;margin-left:5px;">' + alertDate + '</div>'
                + '</div>'

                + '<div class="p-relative inline-block v-align-bot">'
                + '<div class="sprite-im map-icon map-icon-pos" style="float:left;">&nbsp;</div>'
                + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps" style="float:left;margin-left:5px;">' + residentialCity + '</div>'
                + '</div>'

                + '<div class="p-relative inline-block v-align-bot">'
                + '<div class="sprite-im phone-icon phone-icon-pos" style="float:left;">&nbsp;</div>'
                + '<div id="id-custphone" class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps" style="float:left;margin-left:5px;">' + phoneNumber + '</div>'
                + '</div>'

                + '<div class="p-relative inline-block v-align-bot">'
                + '<div class="sprite-im email-icon email-icon-pos" style="float:left;">&nbsp;</div>'
                + '<div id="id-custemail" title=' + feedUserEmail + ' class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin" style="float:left;margin-left:4px;  text-overflow: ellipsis;">' + feedUserEmail + '</div>'
                + '</div>'

                + '</div>'
                + '</div>'
                + '<div class="feed-user-share-b inline-block v-align-mid" style="margin-left:25px;">'
                + '<div class="myshare">'
                + '<div class="inner-share-spacing snap" data-type="share" id=' + alertId + '>'
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
                + '<span class="feed-menu-text inline-block v-align-mid f-color-w" name=' + alertId + ' id=' + feedUserEmail + '>View</span>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>';
        return rightSideAlerFeedHTML;
    },
    /*Naveen 23-2-2015 Changes End */
    /*Naveen Chnages 19-2-2015 end */
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
        var html = '<div class="mb-submenu-in p-relative"><div class="tab-rb-submenu inline-block v-align-mid"><div class="p-relative "><a style="width:115px;"  href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light myalerts p-relative selected-tab" data-type="page" data-submenu="myalerts"><span class="submenu-title t-caps f-color-w">My Alerts</span><span class="cnt-blk">(<span class="cnt-no">24</span>)</span></a><a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light incidents p-relative" data-type="page" data-submenu="incidents"><div class="submenu-title t-caps inline-block f-color-w v-align-mid">incidents</div></a><a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="policies"><span class="submenu-title t-caps f-color-w">Policies</span></a><a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="archives"><span class="submenu-title t-caps f-color-w">Archive</span></a><a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="view_archives"><span class="submenu-title t-caps f-color-w">View Archived</span></a><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div><div class="clear"></div></div></div>';
        return html;
    }




};
