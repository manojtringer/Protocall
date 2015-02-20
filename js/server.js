var utils = {
};
utils.server = {
    authendicate: function () {


    },
    makeServerCall: function (page, data, callback, deepPath) {
        //console.log(page,data,callback,deepPath);
        console.log("make server call");
        var self = utils.server;
        var response = this.getData(page, data, callback, deepPath);
        if (response != "undefined" || response != null || typeof response != undefined) {
            return response;
        }
    },
    getData: function (page, data, callback, deepPath) {
        //console.log(deepPath);
        var ref = page;
        var data = data;
        var path = this.getServerPath(deepPath);
        console.log("geetha response", path);
        var request = path(data).execute(function (resp) {
            if (resp.error) {
                console.log("error");
                utils.server.handleError(resp, ref, false);
            } else {
                console.log("success");
                if (typeof callback != "undefined" && callback != null) {
                    callback(resp, ref);
                } else {
                    return resp;
                }
            }
            //t.ui.hidePageSpinner();
            //t.form.hideFormSpinner();
        });
    },
    makeBackgroundCall: function (page, data, callback, deepPath, spinner) {
        var ref = page;
        var data = data;
        var bgcheck = true;
        if (spinner) {
            t.form.showFormSpinner();
        }
        var path = this.getServerPath(deepPath);
        var request = path(data).execute(function (resp) {
            if (resp.error) {
                t.server.handleError(resp, ref, bgcheck);
            } else {
                if (typeof callback != "undefined" && callback != null) {
                    callback(resp, page);
                } else {
                    if (page == "getcategory") {
                        t.callback.loadServiceCategory(resp);
                    }
                }
            }
            t.form.hideFormSpinner();
        });
        return request;
    },
    handleError: function (data, ref, bgcheck) {

        if (!bgcheck) {
            console.log(data, ref);
            //with ref you can handle the error with particular requirements
            if (ref == "loginforuser") {
                //CURRENT_PAGE = DASHBOARD;
                // t.ui.navigatePage();
                t.ui.handleLoginError(data);
            } else if (ref == "referenceCodeVerification") {
                //$('#spRefCode').focus();
                $('#spRefCode').parents(".row").find('.input-holder').addClass("error-block");
                $('#spRefCode').parents(".row").find('.error').html("Please enter the valid reference code");
                $('#spRefCode').parents(".row").find('.error').css("opacity", "1");
            } else if (ref == "registrationemailverfication") {
                $('#spEmail').parents('.row').find('.input-holder').addClass('error-block');
                $('#spEmail').parents('.row').find('.error').html("Email already exists, Please choose a different email id");
                $('#spEmail').parents('.row').find('.error').css("opacity", "1");
                $('#spEmail').focus();
            } else if (ref == "updatesetting") {
                t.set.settingErrorHandling(data);
            } else {
                var serverErrorMessage = JSON.parse(data.message).ErrorMessage;
                t.ui.showToast(serverErrorMessage);
            }
        } else {
            if (ref == "serviceslotcreation") {
                console.log(data);
                t.schedule.handleServiceSlotError(data);
                // handle service slot error handling
            }
            if (ref == "manualpasswordupdate") {
                t.set.handleUpdatePwdError(data);
            }
        }
    },
    getServerPath: function (deepPath) {
        var path = gapi.client.protocall;
        deepPath = deepPath.split(".");
        for (var i = 0; i < deepPath.length; i++) {
            console.log("path", deepPath[i]);
            path = path[deepPath[i]];
        }
        return path;
    },
    gotloginresponse: function (data) {
//userDetails
//name
//resultMap
        console.log("myvinoth", data);



        if (data.resultMap.TypeCode == '4002') {
            var error = "Your password is wrong, check whether the caplock is enabled";
            protocall.displaySpinner(false);
            $('.login-error').html(error);
            return false
        }
        else if (data.resultMap.TypeCode == '4005') {
            var error = "You are not a registered user";
            protocall.displaySpinner(false);
            $('.login-error').html(error);
            return false
        }
        else if (data.resultMap.TypeCode == '4007') {
            var error = "Provide your agencyId";
            protocall.displaySpinner(false);
            $('.login-error').html(error);
            return false
        }




        if (data.resultMap.TypeCode == '4001') {


            $("#homecontent").css("display", "block");
            sessionStorage.loggedIn = "true";
            sessionStorage.imageURl = "http://2-dot-proto-call-test.appspot.com/file/";
            sessionStorage.profilePic = sessionStorage.imageURl + data.resultMap.userDetails.profilePicture;
            sessionStorage.agencyEmail = data.resultMap.userDetails.agencyRepresentativeId.email;
            sessionStorage.agencyLogo = sessionStorage.imageURl + data.resultMap.agencyDetails.agencyLogo;
            sessionStorage.agencyName = data.resultMap.userDetails.firstName;
            sessionStorage.agencyPhone = data.resultMap.agencyDetails.phone.number;
            sessionStorage.agencyId = data.resultMap.agencyId;
            protocall.setPageNavigation(HOME_PAGE);

            /* var header   = HomedynamicTemplate.home.HomeDynamicHeaderTemplate();
             
             var template = staticTemplate.home.staticFeedTemplate();
             
             var content = '<div class="container"> <div class="content-holder">'+template+'</div></div></div></div>';
             
             var footer   = HomedynamicTemplate.home.HomeDynamicFooterTemplate()
             
             $("#page").empty();
             
             totalHtml = header+content+footer;
             
             $("#page").append(totalHtml); */
            protocall.displaySpinner(true);
        }

    },
    //ADDED BY MANOJ FRIDAY 17 2015---->STARTS HERE
    //ADDED BY MANOJ FRIDAY 17 2015---->STARTS HERE
    gotAssignCustomersResponse: function (data, page) {

        var feedHtml = staticTemplate.home.assignCustomersTemplate();

        for (index = 0; index < data.result.resultObject.length; index++) {
            var customerName = data.result.resultObject[index].name;
            var customerCity = data.result.resultObject[index].city;
            var customerState = data.result.resultObject[index].state;
            var customerEmailId = data.result.resultObject[index].userId.email;

            if (customerState == null || customerState == "") {
                customerState = "";
            } else {
                customerState = "," + customerState;
            }

            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
            feedHtml = feedHtml + tempHtml;
            tempHtml = "";
            console.log("Name" + customerName + "City,State" + customerCity + customerState + customerEmailId);
        }
        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assigncustomers'>Assign</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;
        overlay.displayOverlay(finalHtml);
    },
    shareToRep: function (alertid) {
        ALERTID = alertid;
        protocall.displaySpinner(true);
        var page = "pagesharewithrepoverlay";
        var data = {};
        var callback = utils.server.gotShareWithRepResponse;
        var deepPath = "agencyrepresentativenamewithlocation";
        utils.server.makeServerCall(page, data, callback, deepPath);

    },
    gotShareWithRepResponse: function (data, page) {

        RESPONSE_ARRAY = [];

        var feedHtml = staticTemplate.home.shareWithRepTemplate();

        for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
            var customerName = data.resultMap.RepresentativeDetails[index].name;
            var customerCity = data.resultMap.RepresentativeDetails[index].location;
            var customerState = "";
            var customerEmailId = data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email;
//            alert(customerEmailId);

            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
            feedHtml = feedHtml + tempHtml;
            tempHtml = "";
        }
        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_sharerepwithcustomers'>Share</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;

        overlay.displayOverlay(finalHtml);
        sharewithRepSelectAllDropDown("false");


    },
    gotPrivacyResponse: function (data, page) {

        RESPONSE_ARRAY = [];

        var feedHtml = staticTemplate.home.privacyTemplate();

        for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
            var customerName = data.resultMap.RepresentativeDetails[index].name;
            var customerCity = data.resultMap.RepresentativeDetails[index].location;
            var customerState = "";
            var customerEmailId = data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email;
//            alert(customerEmailId);

            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];

            var tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\">" + customerName + "</div> <div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>#5454547</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\"> <span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\" onclick=\"moveani(\'id-switch-on\', \'id" + index + "-switch-container\')\"> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\" onclick=\"moveani(\'id-switch-off\', \'id" + index + "-switch-container\')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </label>  ";
            feedHtml = feedHtml + tempHtml;
            tempHtml = "";
        }

        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_sharerepwithcustomers'>Share</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;

        overlay.displayOverlay(finalHtml);
        //sharewithRepSelectAllDropDown("false");


    },
    //ADDED BY MANOJ FRIDAY 17 2015---->STARTS HERE
    gotSendAppLinkResponse: function (data, page) {

        RESPONSE_ARRAY = [];
        var feedHtml = staticTemplate.home.sendAppLinkTemplate($(".app-download-bar").html());

        for (var index = 0; index < data.result.resultObject.length; index++) {
            var customerName = data.result.resultObject[index].name;
            var customerCity = data.result.resultObject[index].city;
            var customerState = data.result.resultObject[index].state;
            var customerEmailId = data.result.resultObject[index].userId.email;



            if (customerState == null || customerState == "") {
                customerState = "";
            } else {
                customerState = "," + customerState;
            }

            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
//
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
            feedHtml = feedHtml + tempHtml;
            tempHtml = "";
        }
        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_sendapplink'>Send</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;

        overlay.displayOverlay(finalHtml);
//        
//        for (index = 0; index < data.result.resultObject.length; index++) {
//            var customerName = data.result.resultObject[index].name;
//            var customerCity = data.result.resultObject[index].city;
//            var customerState = data.result.resultObject[index].state;
//            var customerEmailId = data.result.resultObject[index].userId.email;
//
//            if (customerState == null || customerState == "") {
//                customerState = "";
//            } else {
//                customerState = "," + customerState;
//            }
//
//            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
//            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
//            feedHtml = feedHtml + tempHtml;
//            tempHtml = "";
//            console.log("Name" + customerName + "City,State" + customerCity + customerState + customerEmailId);
//        }
//        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_sendapplink'>Send</div> </div> ";
//        var finalHtml = feedHtml + buttonHtml;
//        overlay.displayOverlay(finalHtml);

        sharewithRepSelectAllDropDown("true");


    },
    submitAddVendorDetails: function () {
        var page = "addvendorpage";
        var data = {serviceName: $("#id-vendorname").val(), serviceType: $("#id-vendortype").val(), state: $("#id-vendorstate").val(), zipcode: $("#id-vendorzip").val(),
            phone: $("#id-vendorphone").val(), address1: $("#id-vendoraddress1").val(), address2: $("#id-vendoraddress2").val(), city: $("#id-vendorcity").val()};
        utils.server.displayMessage("Successfully Saved..!");
        var deepPath = "createservice";
        utils.server.makeServerCall(page, data, null, deepPath);

        utils.server.loadPrefferedvendorsdetails();



    },
    loadPrefferedvendorsdetails: function () {

        var delay = 2000;
        setTimeout(function () {
            var page = "settings";
            var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"};
            var callback = utils.server.settingsResponse;
            var deepPath = "settingsinagencydesign";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }, delay);

    },
    submitPrivacyData: function () {
        var fromMailId = "agencyowner@gmail.com";
        var representativeId = "";
        var alertID = ALERTID;
        var index = 0;
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId = RESPONSE_ARRAY[index][3];
                index++;
            }

        });
        protocall.displaySpinner(true);

        if (index == 0) {
            $(".error").html("Please select atleat a name to share..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            return false;
        }

        var page = "shareWithRepPage";
        var data = {fromUserId: fromMailId, alertId: alertID, toUserId: representativeId};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "sharewithrepresentative";
        utils.server.makeServerCall(page, data, callback, deepPath);

    },
    submitSendAppLinkData: function () {
        var representativeId = [];
        var index = 0;
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId.push(RESPONSE_ARRAY[index][3]);
                index++;
            }
        });
        protocall.displaySpinner(true);

        if (index == 0) {
            $(".error").html("Please select atleat a name to share..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            return false;
        }


        var page = "sendapplinkpage";
        var data = {applicationLink: $(".app-download-bar").html(), message: $(".textarea").val(), userIdList: representativeId};
        utils.server.displayMessage("Send Successfully...!");
        var deepPath = "sendsetuplink";
        utils.server.makeServerCall(page, data, null, deepPath);
    },
    submitAssignCustomersData: function () {
        var index = 0;
        var customersEmailIds = [];
        var Rep_Num = "agencyowner@gmail.com";

        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                alert(RESPONSE_ARRAY[index][3]);
                customersEmailIds.push(RESPONSE_ARRAY[index][3]);
            }
            index++;
        });
        protocall.displaySpinner(true);

//          ********************** Doubts here ---------------------->

        console.log(customersEmailIds);

        var page = "assignCustomersPage";
        var data = {userList: customersEmailIds, representativeId: Rep_Num};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "assigncustomer";
        utils.server.makeServerCall(page, data, callback, deepPath);

//     *************************    Doubts here ---------------------->

    },
    settingsResponse: function (data) {


        var html = staticTemplate.customers.staticSettingsTemplate(data);
        TEMPSETTINGSPAGE = "";
        TEMPSETTINGSPAGE = html;

        $(".content-holder").empty();
        $(".content-holder").append(TEMPSETTINGSPAGE + "</form>");
        $('.settings-agency-bar').css("background-color", "#f34f4e");
        $('#id-agency-view-load').css("color", "white");
        $('.settings-vendor-bar').css("background-color", "#ccc");
        $('#id-preferred-vendors-view-load').css("color", "black");
        $("#id-preferred-vendors-view-load").click();







    },
    MysettingsResponse: function (data) {

        alert("dd1");
        var html = staticTemplate.customers.staticSettingsTemplate(data);
        TEMPSETTINGSPAGE = "";
        TEMPSETTINGSPAGE = html;

        alert("4");
        $(".content-holder").empty();
        $(".content-holder").append(TEMPSETTINGSPAGE + "</form>");
        $('.settings-agency-bar').css("background-color", "#f34f4e");
        $('#id-agency-view-load').css("color", "white");
        $('.settings-vendor-bar').css("background-color", "#ccc");
        $('#id-preferred-vendors-view-load').css("color", "black");
        alert("5");

    },
    getResponseForPreferredVendor: function (idvalue) {
        page = "settingspage";
        var dataq = {serviceId: idvalue};
        callback = utils.server.settingsPreffredVendor;
        deepPath = "readservice";
        utils.server.makeServerCall(page, dataq, callback, deepPath);
    },
    settingsPreffredVendor: function (data) {


        var footer = '</div><div class="vendor-detail-block"> <div class="vendor-view-block inline-block v-align-mid p-relative "> '
                + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> '
                + '<div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> '
                + '<div  class="carrier-left-title t-right left">preferred vendor id</div> '
                + '<div id="id-v-preferredvendorid" class="carrier-left-content t-left right " style="visibility: visible">' + data.serviceId + '</div> '
                + '<input id="id-vendor-preferredvendorid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> '
                + '</div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> '
                + '<div class="carrier-left-title t-right left">type</div> '
                + '<div id="id-v-vendortype" class="carrier-left-content t-left right" style="visibility: visible">' + data.serviceType + '</div>'
                + '<input id="id-vendor-type" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden">'
                + '</div> </div> </div> </div><div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">name</div> <div id="id-v-vendorname" class="carrier-left-content t-left right " style="visibility: visible">' + data.serviceName + '</div> <input id="id-vendor-name" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div id="id-v-vendorphone" class="carrier-left-content t-left right" style="visibility: visible">' + data.phone.number + '</div> <input id="id-vendor-phone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-v-address1" class="carrier-left-content t-left right ">' + data.address1 + '</div> <input id="id-vendor-address1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-v-address2" class="carrier-left-content t-left right">' + data.address2 + '</div> <input id="id-vendor-address2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div id="id-v-city" class="carrier-left-content t-left right ">' + data.city + '</div> <input id="id-vendor-city" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div id="id-v-state" class="carrier-left-content t-left right t-upper">' + data.state + '</div> <input id="id-vendor-state" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div id="id-v-zipcode" class="carrier-left-content t-left right ">' + data.zipcode + '</div> <input id="id-vendor-zipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left"></div> <div class="carrier-left-content t-left right t-upper"></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-right right t-caps opensans-regular"> </div> </div> </div> </div> <div class="vendor-back-button"> <div class="vendor-back-bar inline-block p-relative bg-color-green "> <div class="p-relative inline-block t-caps t-right v-align-mid opensans-regular f-color-w">back</div> </div> </div> </div></div> </form>';

        $(".content-holder").empty();
        $(".content-holder").append(TEMPSETTINGSPAGE + footer);

        $('.settings-agency-bar').css("background-color", "#ccc");
        $('#id-agency-view-load').css("color", "black");
        $('.settings-vendor-bar').css("background-color", "#f34f4e");
        $('#id-preferred-vendors-view-load').css("color", "white");
        protocall.view.LoadVendorInfo();

    },
    submitShareWithRepsData: function () {

        var fromMailId = "agencyowner@gmail.com";
        var representativeId = "";
        var alertID = ALERTID;
        var index = 0;
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId = RESPONSE_ARRAY[index][3];
                index++;
            }

        });
        protocall.displaySpinner(true);

        if (index == 0) {
            $(".error").html("Please select atleat a representative to share..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            return false;
        }
        if (index > 1) {
            $(".error").html("You can select only one representative at a time..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            return false;
        }

        var page = "shareWithRepPage";
        var data = {fromUserId: fromMailId, alertId: alertID, toUserId: representativeId};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "sharewithrepresentative";
        utils.server.makeServerCall(page, data, callback, deepPath);

    },
    displayError: function (message) {
        $(".success").css("display", "none");
        $(".error").css("display", "block");
        $(".error").css("padding-top", "4px");
        $(".error").css("padding-bottom", "10px");
    },
    displayMessage: function (message) {
        $(".success").html(message);
        $(".error").css("display", "none");
        $(".success").css("display", "block");
        $(".success").css("padding-top", "4px");
        $(".success").css("padding-bottom", "10px");

    },
    getCodeResponseAssignCustomers: function (data)
    {
        var message = "";

        if (data.resultMap.TypeCode == '4031') {
            message = "Successfully assigned the List of Customers under the selected representative";
            utils.server.displayMessage(message);

        }
        if (data.resultMap.TypeCode == '4032') {
            alert("atleast one customer");
            message = "Please select atleast one customer for the given representative";
            utils.server.errorMessage(message);

        }
        if (data.resultMap.TypeCode == '4033') {
            alert("Authentication Erro");
            message = "Authentication Error: Only admin or superadmin can assign customers to the representatives";
            utils.server.errorMessage(message);
        }
        if (data.resultMap.TypeCode == '4034') {
            message = "Shared data  successfully..!";
            utils.server.displayMessage(message);
        }





    },
    imagesToServer: function (form, callback, isFormData, ref, qs, pagespinner) {
        if (pagespinner) {
            t.ui.showPageSpinner()
        } else {
            t.form.showFormSpinner();
        }
        isFormData = (typeof isFormData == "undefined" || isFormData == false) ? false : true;
        var formData;
        if (!isFormData) {
            var isValidSubmit;
            if (!isValidSubmit) {
                return;
            }
            formData = new FormData(form[0]);
        } else {
            formData = form;
            console.log(formData);
        }
        $.ajax({
            type: "POST",
            url: BASE_URL + qs,
            processData: false,
            contentType: false,
            data: formData,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                // do what ever you want with the server response
                if (pagespinner) {
                    t.ui.hidePageSpinner();
                } else {
                    t.ui.hidePageSpinner();
                }
                if (!isFormData) {
                    p.resetForm(form);
                }
                callback(data, form, isFormData, ref);
            },
            error: function (data) {
                console.log(data);
                console.log(data.responseText);
                var errorCode = JSON.parse(data.responseText).ErrorCode;
                var errorMessage = JSON.parse(data.responseText).ErrorMessage;
                if (errorCode == "E4004") {
                    errorMessage = "User already exist, Please try again with different User Name or Email-ID";
                }
                if (pagespinner) {
                    t.ui.hidePageSpinner();
                } else {
                    t.ui.hidePageSpinner();
                }
                t.ui.showToast(errorMessage);
            }
        });
        return false;
    },
    getCodeResponse: function (code) {
        var message = "Somthing Went wrong, please try again";
        if (code == "E4004") {
            message = "User already exist, Please try again with different User Name or Email-ID";
        } else if (code == "S2001") {
            message = "Data Created Successfully...";
        }
        return message;
    },
    generalRequest: function (data, type, callback, qs, ref, pagespinner) {
        if (pagespinner) {
            t.ui.showPageSpinner();
        }
        $.ajax({
            type: type,
            retryMax: 3,
            timeout: 15000,
            url: BASE_URL + qs,
            data: data,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if (callback) {
                    callback(data, ref);
                }
                if (pagespinner) {
                    t.ui.hidePageSpinner();
                }
            },
            error: function (jqXHRError, textStatus, errorThrown) {
                if (callback) {
                    callback(jqXHRError, ref);
                }
                if (pagespinner) {
                    t.ui.hidePageSpinner();
                }
                t.ui.showToast(textStatus);
            }
        });
    },
};

//ADDED BY MANOJ FRIDAY 18 2015---->STARTS HERE

function sharewithRepSelectAllDropDown(isNone) {

    if (isNone == "true") {
        $("#timepicker2").prop("disabled", false);
        $('#timepicker2').empty();
        $('#timepicker2').append('<option> None </option>');
        $('#timepicker2').append('<option> Select All </option>');
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        $.each(alphabet, function (letter) {
            $('#timepicker2').append($('<option> Section ' + alphabet[letter] + '</option>'));
        });
    } else {
        $("#timepicker2").prop("disabled", true);
        $('#timepicker2').empty();
        $('#timepicker2').append('<option> None </option>');
    }

}

function onKeyPressEventAssignCustomers(tag) {

    $('#id-overlayaiigncustomers').live("keypress", function (e) {
        if (e.keyCode == 13) {
            var edValue = document.getElementById(tag);
            var searchText = edValue.value;
            if (searchText !== "" && searchText !== null) {
                var finalHtml = "<form>";
                for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

                    if (RESPONSE_ARRAY[index][0].indexOf(searchText) > -1) {
                        var customerName = RESPONSE_ARRAY[index][0];
                        var customerCity = RESPONSE_ARRAY[index][1];
                        var customerState = RESPONSE_ARRAY[index][2];

                        if (customerState == null || customerState == "") {
                            customerState = "";
                        }

                        var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                        finalHtml = finalHtml + tempHtml;
                        tempHtml = "";
                    }
                }

                if (finalHtml == "<form>") {
                    var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
                    finalHtml = finalHtml + tempHtml;
                }

                $(".rep-content-blk").html(finalHtml + "</form>");
            } else {
                var finalHtml = "<form>";
                for (index = 0; index < RESPONSE_ARRAY.length; index++) {
                    var customerName = RESPONSE_ARRAY[index][0];
                    var customerCity = RESPONSE_ARRAY[index][1];
                    var customerState = RESPONSE_ARRAY[index][2];

                    if (customerState == null || customerState == "") {
                        customerState = "";
                    } else {
                        customerState = "," + customerState;
                    }

                    var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                    finalHtml = finalHtml + tempHtml;
                    tempHtml = "";
                }

                $(".rep-content-blk").html(finalHtml + "</form>");
            }

        }
    });


}

function onKeyPressEventshareWithRep(tag) {
    var searchText = $(tag).val().toUpperCase();
    if (searchText !== "" && searchText !== null) {
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            if (RESPONSE_ARRAY[index][0].toUpperCase().indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            }
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        $(".rep-content-blk").html(finalHtml + "</form>");
    } else {
        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        $(".rep-content-blk").html(finalHtml + "</form>");
    }


}


function onKeyPressEventPrivacy(tag) {

    var searchText = $(tag).val().toUpperCase();
    if (searchText !== "" && searchText !== null) {
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            if (RESPONSE_ARRAY[index][0].toUpperCase().indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id=\"name" + index + "\" name=\"\" class=\"checkbox\"> <label for=\"name" + index + "\" class=\"rep-label\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\">" + customerName + "</div> <div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>#5454547</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\"> <span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\" onclick=\"moveani('id-switch-on', 'id" + index + "-switch-container')\"> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\" onclick=\"moveani('id-switch-off', 'id" + index + "-switch-container')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            }
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        var buttonHtml = "</div> </div> <div class=\"o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w\" data-type=\"overlaybtn\">Send</div> </div> </div> ";
        $(".rep-content-blk").html(finalHtml + "</form>" + buttonHtml);
    } else {
        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id=\"name" + index + "\" name=\"\" class=\"checkbox\"> <label for=\"name" + index + "\" class=\"rep-label\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\">" + customerName + "</div> <div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>#5454547</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\"> <span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\" onclick=\"moveani('id-switch-on', 'id" + index + "-switch-container')\"> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\" onclick=\"moveani('id-switch-off', 'id" + index + "-switch-container')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        var buttonHtml = "</div> </div> <div class=\"o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w\" data-type=\"overlaybtn\">Send</div> </div> </div> ";
        $(".rep-content-blk").html(finalHtml + "</form>" + buttonHtml);
    }


}

function sortbyBox1() {

    var selectedOption = document.getElementById("timepicker").value;
    if (selectedOption == "Alphabetical") {
        RESPONSE_ARRAY.sort();
        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = RESPONSE_ARRAY[index][2];

            if (customerState == null || customerState == "") {
                customerState = "";
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

    } else if (selectedOption == "City,State") {

        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = RESPONSE_ARRAY[index][2];

            if (customerState == null || customerState == "") {
                customerState = "";
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";

        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    }
    $(".rep-content-blk").html(finalHtml + "</form>");

}

var unique = function (origArr) {
    var newArr = [],
            origLen = origArr.length,
            found, x, y;

    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] == newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(origArr[x]);
        }
    }
    return newArr;
}

function Sharewithrep_sortbyBox1(idvalue) {

    var selectedOption = document.getElementById("timepicker").value;
    if (selectedOption == "Alphabetical") {
        RESPONSE_ARRAY.sort();
        if (idvalue == "sharewithrep") {
            sharewithRepSelectAllDropDown("false");
        } else {
            sharewithRepSelectAllDropDown("true");
        }

        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];


            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

    } else if (selectedOption == "City,State") {
//        //sharewithRepSelectAllDropDown("false");
        //--***************  Section Sortby Box 2
        $('#timepicker2').empty();
        $("#timepicker2").prop("disabled", false);
        var TEMP_ARRAY = [];
        for (var i = 0; i < RESPONSE_ARRAY.length; i++) {
            TEMP_ARRAY[i] = RESPONSE_ARRAY[i][1];
        }
        TEMP_ARRAY = unique(TEMP_ARRAY);
        for (var i = 0; i < TEMP_ARRAY.length; i++) {
            $('#timepicker2').append($('<option> ' + TEMP_ARRAY[i] + '</option>'));
        }

        //--***************  Section Sortby Box 2
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];


            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    } else {
        if (idvalue == "sharewithrep") {
            sharewithRepSelectAllDropDown("false");
        } else {
            sharewithRepSelectAllDropDown("true");
        }
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";

        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

    }


    $(".rep-content-blk").html(finalHtml + "</form>");

}

function assignCustomersSortbyBox2() {
    var selectedOption = document.getElementById("timepicker2").value;

    if (selectedOption == "Select All") {
        $('.checkbox').each(function () {
            this.checked = true;
        });
    } else {
        $("input[name='" + selectedOption.charAt(8).toUpperCase() + "']").each(function () {
            this.checked = true;
        });
    }

}

function sharewithRepSortbyBox2() {
    var selectedOption = document.getElementById("timepicker2").value;

    if (selectedOption == "Select All") {
        $('.checkbox').each(function () {
            this.checked = true;
        });
    } else if (selectedOption.indexOf("Section") > -1) {
        $("input[name='" + selectedOption.trim().charAt(8).toUpperCase() + "']").each(function () {

            if (this.checked == true) {
                this.checked = false;
            } else {
                this.checked = true;
            }

        });
    } else {
        //sharewithRepSelectAllDropDown("false");

        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            if (RESPONSE_ARRAY[index][1].indexOf(selectedOption) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            }
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        $(".rep-content-blk").html(finalHtml + "</form>");
    }

}

$(document).on('click', '#id-sharewithrepsearchicon', function () {
    onKeyPressEventshareWithRep("#id-overlaysharewithrep");
});

$(document).on('click', '#id-sendapplinksearchicon', function () {
    onKeyPressEventshareWithRep("#id-overlaysendapplink");
});
$(document).on('click', '#id-privacysearchicon', function () {
    onKeyPressEventPrivacy("#id-overlayprivacy");
});


function sharewithrepkeypress(e) {
    var Ucode = e.keyCode ? e.keyCode : e.charCode;

    if (Ucode == 13)
    {
        onKeyPressEventshareWithRep("#id-overlaysharewithrep");
    }

    onKeyPressEventshareWithRep("#id-overlaysharewithrep");
}

function sharewithrepkeyup(e) {
    onKeyPressEventshareWithRep("#id-overlaysharewithrep");
}


function sendAppLinkkeyup(e) {
    onKeyPressEventshareWithRep("#id-overlaysendapplink");
}

function privacykeyup(e) {
    onKeyPressEventPrivacy("#id-overlayprivacy");
}

function moveani(idValue, idcontainerValue) {

    if (idValue === "id-switch-off") {
        document.getElementById(idcontainerValue).style.marginLeft = "50px";
    } else if (idValue === "id-switch-on") {
        document.getElementById(idcontainerValue).style.marginLeft = "-8px";
    }

}

//-------------------------------------------------------------------------------
