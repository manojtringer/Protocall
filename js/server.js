var utils = {
};
var RESPONSE_ARRAY = [];
var ASSIGNTOCUSOVERLAY_REPEMAILID = "";
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
    gotagencyLogoEditresponse: function (data) {
//        sessionStorage.userName = data.resultMap.editedDetails.firstName;
//        sessionStorage.userPhoneNumber = data.resultMap.editedDetails.phone.number;
        if (data.resultMap.TypeCode == "4051") {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                sessionStorage.agencyEmail = data.resultMap.editedAgencyDetails.emailId.email;
                sessionStorage.agencyName = data.resultMap.editedAgencyDetails.agencyName;
            } else {
                sessionStorage.agencyEmail = data.resultMap.EditedCarrierDetails.emailId.email;
                sessionStorage.agencyName = data.resultMap.EditedCarrierDetails.carrierName;
            }

            $("#adminEmailIDValue").html(sessionStorage.agencyEmail);
            $("#agencyNameValue").html(sessionStorage.agencyName);
        }
    },
    gotprofileEditresponse: function (data) {
        if (data.resultMap.TypeCode == "4051") {
            sessionStorage.userPhoneNumber = data.resultMap.editedDetails.phone.number;
            if (sessionStorage.loginType == 'AgencyAdmin' || sessionStorage.loginType == 'CarrierAdmin') {
                sessionStorage.userEmailId = data.resultMap.editedDetails.emailId.email;
                sessionStorage.userName = data.resultMap.editedDetails.firstName;
            } else if (sessionStorage.loginType == 'AgencyRepresentative') {
                sessionStorage.userEmailId = data.resultMap.editedDetails.agencyRepresentativeId.email;
                sessionStorage.userName = data.resultMap.editedDetails.name;
            } else if (sessionStorage.loginType == 'CarrierRepresentative') {
                sessionStorage.userEmailId = data.resultMap.editedDetails.carrierRepresentativeId.email;
                sessionStorage.userName = data.resultMap.editedDetails.name;
            } else {
                sessionStorage.userEmailId = data.resultMap.editedDetails.emailId.email;
            }
            //sessionStorage.userEmailId = data.resultMap.editedDetails.emailId.email;
            $("#namenew").html(sessionStorage.userName);
            $("#phonenew").html(sessionStorage.userPhoneNumber);
            $("#emailnew").html(sessionStorage.userEmailId);
            $("#profileUserName").html(sessionStorage.userName);
        }
    },
    getData: function (page, data, callback, deepPath) {
        //console.log(deepPath);
        var ref = page;
        var data = data;
        var path = this.getServerPath(deepPath);
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
                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");
                $(".content-holder").empty();
                $(".content-holder").html('<h3 style="color:red">Service Not Available</h3>');
                $(".content-holder").fadeIn();
                $(".content-holder").fadeIn("slow");
                $(".content-holder").fadeIn(300);
                /* var serverErrorMessage = JSON.parse(data.message);
                 t.ui.showToast(serverErrorMessage); */
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
    gotRsksj: function (data) {
        RESPONSE.ASSOCIATEFEED[0] = data;
        protocall.carrier.loadAssociatedCustomers();
    },
    gotloginresponse: function (data) {
//userDetails
//name
//resultMap


        //  console.log("myvinoth", data);

        //alert(data.resultMap.TypeCode);

        // alert("4001" + localStorage.getItem("LOGIN_LABEL") + "-->" + localStorage.LoginType);



        if (data.resultMap.TypeCode == '4001') {
            sessionStorage.loggedIn = "true";
            localStorage.imageURl = "http://2-dot-proto-call-test.appspot.com/file/";
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {

                if (localStorage.LoginType == 'Admin') {
                    sessionStorage.loginType = 'AgencyAdmin';

                    if (data.resultMap.agencyDetails.agencyName == undefined) {
                        sessionStorage.agencyName = "";
                    } else {
                        sessionStorage.agencyName = data.resultMap.agencyDetails.agencyName;
                    }

                    if (data.resultMap.userDetails.firstName == undefined) {
                        sessionStorage.userName = "";
                    } else {
                        sessionStorage.userName = data.resultMap.userDetails.firstName;
                    }

                    // alert(sessionStorage.agencyName+","+sessionStorage.userName);
                }
                if (localStorage.LoginType == 'Representatives') {
                    sessionStorage.loginType = 'AgencyRepresentative';
                    sessionStorage.userEmailId = data.resultMap.userDetails.agencyRepresentativeId.email;
                    if (data.resultMap.agencyDetails.agencyName == undefined) {
                        sessionStorage.agencyName = "";
                    } else {
                        sessionStorage.agencyName = data.resultMap.agencyDetails.agencyName;
                    }

                    if (data.resultMap.userDetails.name == undefined) {
                        sessionStorage.userName = "";
                    } else {
                        sessionStorage.userName = data.resultMap.userDetails.name;
                    }


                    //                    sessionStorage.agencyName = "Manoj";
                }

                //  alert("1"+sessionStorage.loginType);
                sessionStorage.loggedIn = "true";
                localStorage.imageURl = "http://2-dot-proto-call-test.appspot.com/file/";
                // sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                sessionStorage.agencyEmail = data.resultMap.agencyDetails.emailId.email;
                sessionStorage.agencyPhone = data.resultMap.agencyDetails.phone.number;
                if (data.resultMap.userDetails.phone !== undefined) {
                    sessionStorage.userPhoneNumber = data.resultMap.userDetails.phone.number;
                } else {
                    sessionStorage.userPhoneNumber = "";
                }

                sessionStorage.agencyId = data.resultMap.agencyId;
                try {
                    if (sessionStorage.loginType != 'AgencyRepresentative') {
                        sessionStorage.userEmailId = data.resultMap.userDetails.emailId.email;
                    }
                } catch (err) {
                    sessionStorage.userEmailId = "";
                }

                // alert(sessionStorage.userEmailId);

                if (data.resultMap.userDetails.profilePicture != undefined) {
                    sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                } else {
                    sessionStorage.profilePic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                }

                if (data.resultMap.agencyDetails.agencyLogo != undefined) {
                    sessionStorage.agencyLogo = localStorage.imageURl + data.resultMap.agencyDetails.agencyLogo;
                } else {
                    sessionStorage.agencyLogo = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                }

            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {

                if (localStorage.LoginType == 'Admin') {

                    sessionStorage.loginType = 'CarrierAdmin';
                    sessionStorage.agencyEmail = data.resultMap.userDetails.emailId.email;
                    sessionStorage.profilePic = localStorage.imageURl + data.resultMap.carrierDetails.profilePicture;
                    sessionStorage.agencyLogo = localStorage.imageURl + data.resultMap.carrierDetails.carrierLogo;
                    sessionStorage.agencyPhone = data.resultMap.carrierDetails.phone.number;
                    try {
                        sessionStorage.userEmailId = data.resultMap.userDetails.emailId.email;
                    } catch (err) {
                        sessionStorage.userEmailId = "";
                    }
                    sessionStorage.userPhoneNumber = data.resultMap.userDetails.phone.number;

                    if (data.resultMap.carrierDetails.carrierName == undefined) {
                        sessionStorage.agencyName = "";
                    } else {
                        sessionStorage.agencyName = data.resultMap.carrierDetails.carrierName;
                    }

                    if (data.resultMap.userDetails.firstName == undefined) {
                        sessionStorage.userName = "";
                    } else {
                        sessionStorage.userName = data.resultMap.userDetails.firstName;
                    }

                    if (data.resultMap.userDetails.profilePicture != undefined) {
                        sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                    } else {
                        sessionStorage.profilePic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    }
                }
                if (localStorage.LoginType == 'Representatives') {
                    sessionStorage.loginType = 'CarrierRepresentative';
                    //  sessionStorage.agencyName = data.resultMap.userDetails.name;
                    sessionStorage.agencyEmail = data.resultMap.userDetails.carrierRepresentativeId.email;
                    sessionStorage.agencyLogo = localStorage.imageURl + data.resultMap.carrierDetails.carrierLogo;
                    sessionStorage.agencyPhone = data.resultMap.carrierDetails.phone.number;
                    sessionStorage.agencyId = data.resultMap.carrierDetails.carrierId;
                    sessionStorage.userEmailId = data.resultMap.userDetails.carrierRepresentativeId.email;
                    sessionStorage.userPhoneNumber = data.resultMap.userDetails.phone.number;

                    try {
                        if (sessionStorage.loginType != 'CarrierRepresentative') {
                            sessionStorage.userEmailId = data.resultMap.userDetails.emailId.email;
                        }
                    } catch (err) {
                        sessionStorage.userEmailId = "";
                    }

                    if (data.resultMap.carrierDetails.carrierName == undefined) {
                        sessionStorage.agencyName = "";
                    } else {
                        sessionStorage.agencyName = data.resultMap.carrierDetails.carrierName;
                    }

                    if (data.resultMap.userDetails.name == undefined) {
                        sessionStorage.userName = "";
                    } else {
                        sessionStorage.userName = data.resultMap.userDetails.name;
                    }

                    if (data.resultMap.userDetails.profilePicture != undefined) {
                        sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                    } else {
                        sessionStorage.profilePic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    }
                }
            }



            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (localStorage.LoginType == 'Admin') {
                    var page = "carriers";
                    var data = {},
                            deepPath = "agencydashboarddesign",
                            page = "home",
                            callback = protocall.carrier.getresponseagencydetails,
                            authId = "",
                            spinnerMsg = "";
                    utils.server.makeServerCall(page, data, callback, deepPath);
                }

                if (localStorage.LoginType == 'Representatives') {
                    var dataq = {};
                    var path = utils.server.getServerPath("agencydashboarddesignforrepresentativelogin");
                    var request = path(dataq).execute(function (resp) {
                        if (resp.error) {
                            t.server.handleError(resp);
                        } else {
                            RESPONSE.AGENCY_ADMIN_TOTAL_DETAILS[0] = resp;
                            // localStorage.setItem("AGENCY_ADMIN_TOTAL_DETAILS", JSON.stringify(resp));
                            RESPONSE.AGENCYLOGIN_DATA[0] = resp;
                            // localStorage.setItem("AGENCYLOGIN_DATA", JSON.stringify(resp));
                            RESPONSE.customers_data[0] = resp.resultMap.CustomerTab;
                            //localStorage.setItem("customers_data", JSON.stringify(resp.resultMap.CustomerTab));
                            HOMEPAGERESPONSE.CUSTOMERDATA = resp.resultMap.CustomerTab;
                        }
                    });
                }

            }
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    var dataq = {};
                    var path = utils.server.getServerPath("carrierdashboarddesignforrepresentativelogin");
                    var request = path(dataq).execute(function (resp) {
                        if (resp.error) {
                            t.server.handleError(resp);
                        } else {
                            debugger;
                            RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                            // localStorage.setItem("CARRIERAGENCYTOTALDETAILS", JSON.stringify(resp));
                            RESPONSE.CARRIERREP_DATA[0] = resp;
                            //  localStorage.setItem("CARRIERREP_DATA", JSON.stringify(resp));
                            RESPONSE.customers_data[0] = resp.resultMap.customerTab;
                            // localStorage.setItem("customers_data", JSON.stringify(resp.resultMap.customerTab));
                            RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
                            // localStorage.setItem("agencies_data", JSON.stringify(resp.resultMap.agencyTab[0].agencyDetail));
                            RESPONSE.carrierrepcustomers_data[0] = resp;
                            //localStorage.setItem("carrierrepcustomers_data", JSON.stringify(resp));
                        }
                    });
                }
                if (localStorage.LoginType == 'Admin') {

                    var page = "carriers";
                    var data = {},
                            deepPath = "carrierdashboarddesign",
                            page = "home",
                            async = false,
                            callback = protocall.carrier.getresponsecarrieragency,
                            authId = "",
                            spinnerMsg = "";
                    utils.server.makeServerCall(page, data, callback, deepPath);
                }
            }


            if (localStorage.LoginType == 'SuperAdmin') {
                sessionStorage.loginType = 'SuperAdmin';

                if (data.resultMap.userDetails.name == undefined) {
                    sessionStorage.userName = "";
                } else {
                    sessionStorage.userName = data.resultMap.userDetails.name;
                }

                if (data.resultMap.userDetails.profilePicture == undefined) {
                    sessionStorage.profilePic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                } else {
                    sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                }

                if (data.resultMap.userDetails.usaEmployeeId.email == undefined) {
                    sessionStorage.superAdminEmailId = data.resultMap.userDetails.usaEmployeeId.email;
                } else {
                    sessionStorage.superAdminEmailId = data.resultMap.userDetails.usaEmployeeId.email;
                }
            }


            protocall.setPageNavigation(HOME_PAGE);



            /* var header   = HomedynamicTemplate.home.HomeDynamicHeaderTemplate();
             
             var template = staticTemplate.home.staticFeedTemplate();
             
             var content = '<div class="container"> <div class="content-holder">'+template+'</div></div></div></div>';
             var footer   = HomedynamicTemplate.home.HomeDynamicFooterTemplate()
             
             $("#page").empty();
             
             totalHtml = header+content+footer;
             
             $("#page").append(totalHtml); */
            protocall.displaySpinner(true);
        } else if (data.resultMap.TypeCode == '4002') {
            var error = "Your password is wrong, check whether the caplock is enabled";
            protocall.displaySpinner(false);
            showAlertBox(error);
            // $('.login-error').html(error);
            return false
        }
        else if (data.resultMap.TypeCode == '4005') {
            var error = "You are not a registered user";
            showAlertBox(error);
            protocall.displaySpinner(false);
            // $('.login-error').html(error);
            return false
        } else if (data.resultMap.TypeCode == '4006') {
            var error = "You are not a registered user";
            showAlertBox(error);
            protocall.displaySpinner(false);
            // $('.login-error').html(error);
            return false
        }
        else if (data.resultMap.TypeCode == '4007') {
            var error = "Provide your agencyId";
            protocall.displaySpinner(false);
            showAlertBox(error);
            //$('.login-error').html(error);
            return false
        }








    },
    //ADDED BY MANOJ FRIDAY 17 2015---->STARTS HERE
    //ADDED BY MANOJ FRIDAY 17 2015---->STARTS HERE
    assignToCustomers: function (repEmailId) {
        ASSIGNTOCUSOVERLAY_REPEMAILID = "";
        ASSIGNTOCUSOVERLAY_REPEMAILID = repEmailId;
        protocall.displaySpinner(true);
        utils.server.gotAssignCustomersResponse();
        //var page = "pageassigncustomersoverlay";
        //var data = {};
        //var callback = utils.server.gotAssignCustomersResponse;
        //var deepPath = "userlist";
        // utils.server.makeServerCall(page, data, callback, deepPath);
    },
    gotAssignCustomersResponse: function (data, page) {



        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            //  if (localStorage.LoginType == 'Admin') {
            data = RESPONSE.customers_data[0];
            // data = JSON.parse(localStorage.getItem("customers_data"));
            console.log("4675", data);
            //CustomerDetails
            RESPONSE_ARRAY = [];
            var feedHtml = staticTemplate.home.assignCustomersTemplate();
            for (var index = 0; index < data.length; index++) {
                var customerName = data[index].CustomerDetails.firstName;
                try {

                    customerName = customerName + " " + data[index].CustomerDetails.lastName;
                } catch (err) {

                }

                //if (customerName == customerName.indexOf("undefined") > -1) {
                customerName = customerName.replace("undefined", " ");
                //  }

                var customerCity = data[index].CustomerDetails.residentialCity;
                var customerState = data[index].CustomerDetails.residentialState;
                var customerEmailId = data[index].CustomerDetails.emailId.email;
                if (customerState == null || customerState == "") {
                    customerState = "";
                } else {
                    customerState = "," + customerState;
                }

                RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                feedHtml = feedHtml + tempHtml;
                tempHtml = "";
                console.log("Name" + customerName + "City,State" + customerCity + customerState + customerEmailId);
            }
            var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assigncustomers'>Assign</div> </div> ";
            var finalHtml = feedHtml + buttonHtml;
            overlay.displayOverlay(finalHtml);
            sharewithRepSelectAllDropDown("true");
            protocall.displaySpinner(false);
            $("#id-overlayaiigncustomers").click();
            //}
        } else {
            data = RESPONSE.customers_data[0];
            // data = JSON.parse(localStorage.getItem("customers_data"));
            RESPONSE_ARRAY = [];
            var feedHtml = staticTemplate.home.assignCustomersTemplate();
            for (index = 0; index < data.length; index++) {
                var customerName = data[index].firstName;
                try {
                    customerName = customerName + " " + data[index].lastName;
                } catch (err) {

                }
                // if (customerName == customerName.indexOf("undefined") > -1) {
                customerName = customerName.replace("undefined", " ");
                // }
                var customerCity = data[index].residentialCity;
                var customerState = data[index].residentialState;
                var customerEmailId = data[index].emailId.email;
                if (customerState == null || customerState == "") {
                    customerState = "";
                } else {
                    customerState = "," + customerState;
                }

                RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                feedHtml = feedHtml + tempHtml;
                tempHtml = "";
                console.log("Name" + customerName + "City,State" + customerCity + customerState + customerEmailId);
            }
            var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assigncustomers'>Assign</div> </div> ";
            var finalHtml = feedHtml + buttonHtml;
            overlay.displayOverlay(finalHtml);
            sharewithRepSelectAllDropDown("true");
            protocall.displaySpinner(false);
            $("#id-overlayaiigncustomers").click();
        }


    },
    shareToRep: function (alertid) {

        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            ALERTID = alertid;
            protocall.displaySpinner(true);
            var page = "pagesharewithrepoverlay";
            var data = {};
            var callback = utils.server.gotShareWithRepResponse;
            var deepPath = "carrierrepresentativenamewithlocation";
            utils.server.makeServerCall(page, data, callback, deepPath);
        } else {
            ALERTID = alertid;
            protocall.displaySpinner(true);
            var page = "pagesharewithrepoverlay";
            var data = {};
            var callback = utils.server.gotShareWithRepResponse;
            var deepPath = "agencyrepresentativenamewithlocation";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
    },
    assignToRep: function () {
        // CUSTOMERS_LIST = customersEmailIds;
        protocall.displaySpinner(false);
        //   var page = "assignToRepsPage";
        // var data = {};
        // var callback = utils.server.gotAssignToRepResponse;
//        var deepPath = "agencyrepresentativenamewithlocation";
//        utils.server.makeServerCall(page, data, callback, deepPath);
        utils.server.gotAssignToRepResponse();
    },
    gotShareWithRepResponse: function (data, page) {


        RESPONSE_ARRAY = [];
        var feedHtml = staticTemplate.home.shareWithRepTemplate();
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
                var customerName = "";
                var customerCity = "";
                var customerState = "";
                var customerEmailId = "";
                try {
                    if (data.resultMap.RepresentativeDetails[index].location == undefined) {
                        try {
                            customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                            customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                        } catch (err1) {
                            customerCity = "";
                        }
                    } else {
                        customerCity = data.resultMap.RepresentativeDetails[index].location;
                    }

                } catch (err) {
                    try {
                        customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                        customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                    } catch (err1) {
                        customerCity = "";
                    }
                }
                try {

                    if (data.resultMap.RepresentativeDetails[index].name == undefined) {
                        customerName = data.resultMap.RepresentativeDetails[index].firstName;
                        try {
                            customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                        } catch (err) {

                        }
                        //if (customerName == customerName.indexOf("undefined") > -1) {
                        customerName = customerName.replace("undefined", " ");
                        //}
                    } else {
                        customerName = data.resultMap.RepresentativeDetails[index].name;
                        try {
                            customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                        } catch (err) {

                        }
                        //if (customerName == customerName.indexOf("undefined") > -1) {
                        customerName = customerName.replace("undefined", " ");
                        // }
                    }
                } catch (err) {
                    // alert(data.resultMap.RepresentativeDetails[index]);
                    console.log("owner data--->", data.resultMap.RepresentativeDetails[index]);
                    customerName = data.resultMap.RepresentativeDetails[index].firstName;
                    try {
                        customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                    } catch (err) {

                    }
                }

                //if (customerName == customerName.indexOf("undefined") > -1) {
                customerName = customerName.replace("undefined", " ");
                //}

                var charcustomerName = "";

                try {
                    charcustomerName = customerName.charAt(0).toUpperCase();
                } catch (err) {

                }

                try {
                    if (data.resultMap.RepresentativeDetails[index].carrierRepresentativeId.email == undefined) {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                    } else {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].carrierRepresentativeId.email;
                    }

                } catch (err) {
                    // console.log("errorrrrr", data.resultMap.RepresentativeDetails[index]);
                    customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                }
                if (customerCity == undefined) {
                    customerCity = "NA";
                }
                RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
                //<input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'>
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + charcustomerName + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                feedHtml = feedHtml + tempHtml;
                tempHtml = "";
            }
        } else {
            for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
                var customerName = "";
                var customerCity = "";
                var customerState = "";
                var customerEmailId = "";
                try {
                    if (data.resultMap.RepresentativeDetails[index].location == undefined) {
                        try {
                            customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                            customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                        } catch (err1) {
                            customerCity = "";
                        }
                    } else {
                        customerCity = data.resultMap.RepresentativeDetails[index].location;
                    }

                } catch (err) {
                    try {
                        customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                        customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                    } catch (err1) {
                        customerCity = "";
                    }
                }
                try {

                    if (data.resultMap.RepresentativeDetails[index].name == undefined) {
                        customerName = data.resultMap.RepresentativeDetails[index].firstName;
                        try {
                            customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                        } catch (err) {

                        }
                    } else {
                        customerName = data.resultMap.RepresentativeDetails[index].name;
                        try {
                            customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                        } catch (err) {

                        }
                    }
                    // if (customerName == customerName.indexOf("undefined") > -1) {
                    customerName = customerName.replace("undefined", " ");
                    // }
                } catch (err) {
                    // alert(data.resultMap.RepresentativeDetails[index]);
                    console.log("owner data--->", data.resultMap.RepresentativeDetails[index]);
                    customerName = data.resultMap.RepresentativeDetails[index].firstName;
                    try {
                        customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                    } catch (err) {

                    }
                    // if (customerName == customerName.indexOf("undefined") > -1) {
                    customerName = customerName.replace("undefined", " ");
                    // }
                }

                var charcustomerName = "";

                try {
                    charcustomerName = customerName.charAt(0).toUpperCase();
                } catch (err) {

                }

                try {
                    if (data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email == undefined) {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                    } else {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email;
                    }

                } catch (err) {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                }
                if (customerCity == undefined) {
                    customerCity = "NA";
                }
                RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
                //<input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'>
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + charcustomerName + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                feedHtml = feedHtml + tempHtml;
                tempHtml = "";
            }
        }

        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_sharerepwithcustomers'>Share</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;
        overlay.displayOverlay(finalHtml);
        sharewithRepSelectAllDropDown("false");
        protocall.displaySpinner(false);
    },
    gotAssignToRepResponse: function (data1, page) {

        var data = "";
        RESPONSE_ARRAY = [];

        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            //data = JSON.parse(localStorage.getItem("AGENCY_ADMIN_TOTAL_DETAILS"));
            data = RESPONSE.AGENCY_ADMIN_TOTAL_DETAILS[0];

            var flag = 0;
            $('.getSelectedCustomers').each(function () {
                str = this.checked ? "1" : "0";
                if (str == "1") {
                    flag = 1;
                }
            });

            if (flag == 0) {
                if (localStorage.getItem("ARRAY_CUSTOMERS_LIST") == "" || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == null || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == undefined) {
                    //$(".error").html("Please select atleat a Customer..!");
                    showAlertBox("Please select atleat a Customer..!");
                    // $(".error").css("display", "block");
                    //  alert("2");
                    // $(".error").css("padding-top", "10px");
                    //$(".error").css("padding-bottom", "10px");
                    //$('.error').delay(3000).slideUp('slow');

                    return false;
//                    setTimeout(myFunction, 3000);
//                    function myFunction() {
//                        overlay.closeOverlay();
//                    }
                }
            }

            var feedHtml = staticTemplate.home.assignToRepTemplate();


            for (var index = 0; index < data.resultMap.repTab.length; index++) {
                var customerName = "";
                var customerCity = "";
                var customerState = "";
                var customerEmailId = "";
                //            alert(customerEmailId);

                try {
                    if (data.resultMap.repTab[index].location == undefined) {
                        try {
                            customerCity = data.resultMap.repTab[index].residentialCity;
                            customerState = data.resultMap.repTab[index].residentialState;
                        } catch (err1) {
                            customerCity = "";
                        }
                    } else {
                        customerCity = data.resultMap.repTab[index].location;
                    }

                } catch (err) {
                    try {
                        customerCity = data.resultMap.repTab[index].residentialCity;
                        customerState = data.resultMap.repTab[index].residentialState;
                    } catch (err1) {
                        customerCity = "";
                    }
                }
                try {

                    if (data.resultMap.repTab[index].name == undefined) {
                        var firstName = data.resultMap.repTab[index].firstName;
                        try {
                            firstName = firstName + " " + data.resultMap.repTab[index].lastName;
                        } catch (err) {

                        }
                    } else {
                        firstName = data.resultMap.repTab[index].name;
                        try {
                            firstName = firstName + " " + data.resultMap.repTab[index].lastName;
                        } catch (err) {

                        }
                    }
                } catch (err) {
                    // alert(data.resultMap.RepresentativeDetails[index]);
                    console.log("owner data--->", data.resultMap.repTab[index]);
                    firstName = data.resultMap.repTab[index].firstName;
                    try {
                        firstName = firstName + "  " + data.resultMap.repTab[index].lastName;
                    } catch (err) {

                    }
                }

                //if (firstName == firstName.indexOf("undefined") > -1) {
                firstName = firstName.replace("undefined", " ");
//
                // }


                var charcustomerName = "";

                try {
                    charcustomerName = customerName.charAt(0).toUpperCase();
                } catch (err) {

                }

                try {
                    if (data.resultMap.repTab[index].agencyRepresentativeId.email == undefined) {
                        customerEmailId = data.resultMap.repTab[index].emailId.email;
                    } else {
                        customerEmailId = data.resultMap.repTab[index].agencyRepresentativeId.email;
                    }
                } catch (err) {
                    customerEmailId = data.resultMap.repTab[index].emailId.email;
                }

                if (customerCity == undefined) {
                    customerCity = "NA";
                }
                RESPONSE_ARRAY[index] = [firstName, customerCity, customerState, customerEmailId];
                //<input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'>
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + firstName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                feedHtml = feedHtml + tempHtml;
                tempHtml = "";
            }
            var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assignToReps'>Assign</div> </div> ";
            var finalHtml = feedHtml + buttonHtml;
            overlay.displayOverlay(finalHtml);
            sharewithRepSelectAllDropDown("false");


            // alert(flag + "data--" + localStorage.getItem("ARRAY_CUSTOMERS_LIST"));

            // protocall.displaySpinner(false);
        } else {

            var flag = 0;
            $('.getSelectedCustomers').each(function () {
                str = this.checked ? "1" : "0";
                if (str == "1") {
                    flag = 1;
                }
            });

            // alert(flag + "data--" + localStorage.getItem("ARRAY_CUSTOMERS_LIST"));
            if (flag == 0) {
                if (localStorage.getItem("ARRAY_CUSTOMERS_LIST") == "" || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == null || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == undefined) {
//                    $(".error").html("Please select atleat a Customer..!");
//                    $(".error").css("display", "block");
//                    //  alert("2");
//                    $(".error").css("padding-top", "10px");
//                    $(".error").css("padding-bottom", "10px");
//                    $('.error').delay(3000).slideUp('slow');
                    showAlertBox("Please select atleat a Customer..!");
                    return  false;

//                    setTimeout(myFunction, 3000);
//                    function myFunction() {
//                        overlay.closeOverlay();
//                    }
                }
            }

            data = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
            //data = JSON.parse(localStorage.getItem("CARRIERAGENCYTOTALDETAILS"));
            var feedHtml = staticTemplate.home.assignToRepTemplate();
            for (var index = 0; index < data.resultMap.myRepTab.length; index++) {
                var customerName = "";
                var customerCity = "";
                var customerState = "";
                var customerEmailId = "";

                console.log("dhagsdfhg----->", data.resultMap.myRepTab[index].RepresentativeDetails);

                try {
                    customerEmailId = data.resultMap.myRepTab[index].RepresentativeDetails.carrierRepresentativeId.email;
                } catch (err) {

                    customerEmailId = data.resultMap.myRepTab[index].RepresentativeDetails.emailId.email;
                }

                try {
                    if (data.resultMap.myRepTab[index].RepresentativeDetails.name == undefined) {
                        customerName = data.resultMap.myRepTab[index].RepresentativeDetails.firstName;
                        try {
                            customerName = customerName + " " + data.resultMap.myRepTab[index].RepresentativeDetails.lastName;
                        } catch (err) {

                        }
                    } else {
                        customerName = data.resultMap.myRepTab[index].RepresentativeDetails.name;
                        try {
                            customerName = customerName + " " + data.resultMap.myRepTab[index].RepresentativeDetails.lastName;
                        } catch (err) {

                        }
                    }

                } catch (err) {


                }
                // if (customerName == customerName.indexOf("undefined") > -1) {
                customerName = customerName.replace("undefined", " ");
                //  }

                try {
                    if (data.resultMap.myRepTab[index].RepresentativeDetails.location != undefined) {
                        customerCity = data.resultMap.myRepTab[index].RepresentativeDetails.location;
                    } else {
                        customerCity = data.resultMap.myRepTab[index].RepresentativeDetails.residentialCity;
                        customerState = data.resultMap.myRepTab[index].RepresentativeDetails.residentialState;
                    }

                } catch (err) {

                }
                //            alert(customerEmailId);


                if (customerCity == undefined) {
                    customerCity = "NA";
                }
                var charcustomerName = "";

                try {
                    charcustomerName = customerName.charAt(0).toUpperCase();
                } catch (err) {

                }


//customerName.charAt(0).toUpperCase()



                // if (customerName != undefined) {
                RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
                console.log("assp name ", customerName);
                // alert(customerName);
                //<input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'>
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + "  id='name" + index + "' name='" + charcustomerName + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                feedHtml = feedHtml + tempHtml;
                tempHtml = "";
                // }
            }
            var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assignToReps'>Assign</div> </div> ";
            var finalHtml = feedHtml + buttonHtml;
            overlay.displayOverlay(finalHtml);
            sharewithRepSelectAllDropDown("false");

        }


    },
    gotPrivacyResponse: function (data, page) {

        RESPONSE_ARRAY = [];
        var feedHtml = staticTemplate.home.privacyTemplate();
        for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
//            var customerName = data.resultMap.RepresentativeDetails[index].name;
//            var customerCity = data.resultMap.RepresentativeDetails[index].location;
//            var customerState = "";
//            var customerEmailId = data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email;
            var privacy = data.resultMap.RepresentativeDetails[index].privacy;

            if (privacy == undefined || privacy == "undefined") {
                privacy = "off";
            }
//            
            var carrierAgencyRepresentativeId = data.resultMap.RepresentativeDetails[index].carrierAgencyRepresentativeId;



            var customerName = "";
            var customerCity = "";
            var customerState = "";
            var customerEmailId = "";
            //            alert(customerEmailId);

            try {
                if (data.resultMap.RepresentativeDetails[index].location == undefined) {
                    try {
                        customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                        customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                    } catch (err1) {
                        customerCity = "";
                    }
                } else {
                    customerCity = data.resultMap.RepresentativeDetails[index].location;
                }

            } catch (err) {
                try {
                    customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                    customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                } catch (err1) {
                    customerCity = "";
                }
            }
            try {

                if (data.resultMap.RepresentativeDetails[index].name == undefined) {
                    customerName = data.resultMap.RepresentativeDetails[index].firstName;
                    try {
                        customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                    } catch (err) {

                    }
                } else {
                    customerName = data.resultMap.RepresentativeDetails[index].name;
                    try {
                        customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                    } catch (err) {

                    }
                }
            } catch (err) {
                // alert(data.resultMap.RepresentativeDetails[index]);
                console.log("owner data--->", data.resultMap.RepresentativeDetails[index]);
                customerName = data.resultMap.RepresentativeDetails[index].firstName;
                try {
                    customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                } catch (err) {

                }
            }
            // if (customerName == customerName.indexOf("undefined") > -1) {
            customerName = customerName.replace("undefined", " ");
            //}
            var charcustomerName = "";

            try {
                charcustomerName = customerName.charAt(0).toUpperCase();
            } catch (err) {

            }

            try {
                if (data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email == undefined) {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                } else {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email;
                }
            } catch (err) {
                try {
                    if (data.resultMap.RepresentativeDetails[index].carrierRepresentativeId.email == undefined) {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                    } else {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].carrierRepresentativeId.email;
                    }
                } catch (err) {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                }
            }






            if (carrierAgencyRepresentativeId == "undefined" || carrierAgencyRepresentativeId == null) {
                carrierAgencyRepresentativeId = "";
            }

            if (privacy == "on") {
                toggleStyle = "margin-left:50px";
                //toggleStyleOff = "margin-left:-9px";
                console.log("privacy--->name", customerName + " status" + privacy + "50");
            } else {

                toggleStyle = "margin-left:-10px";
                console.log("privacy--->name", customerName + " status" + privacy + "-10");
                //toggleStyleOn = "margin-left:-px";
            }

            var privacystatus = "";

            if (privacy == "undefined") {
                privacystatus = customerEmailId + "#off";
            } else {
                privacystatus = customerEmailId + "#" + privacy;
            }


            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId, privacy, carrierAgencyRepresentativeId, privacystatus];
            var toggleStyleOn = "";
            var toggleStyleOff = "";

            var tempHtml = "";

            if (customerEmailId != sessionStorage.userEmailId) {
                tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label1\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:20%;\">" + customerName + "</div> "
                        + "<div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"switchsample bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                        + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"  onclick=\"moveani(" + index + ",\'id-switch-on\', \'id" + index + "-switch-container\')\"><div  class=\"togglevalue" + index + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\"  onclick=\"moveani(" + index + ",\'id-switch-off\', \'id" + index + "-switch-container\')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
            } else {
                tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label1\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:20%;\">" + customerName + "</div> "
                        + "<div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"switchsample bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                        + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"><div  class=\"togglevalue" + index + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\" > OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
            }

            feedHtml = feedHtml + tempHtml;
            tempHtml = "";
        }

        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='overlaybtnPrivacySend'>Save</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;
        overlay.displayOverlay(finalHtml);

        //rep-content-blk
        $(".rep-content-blk").css("opacity", "0.5");
        $(".rep-content-blk").find("input", "div").attr('disabled', 'disabled');
        $(".switchsample").css("pointer-events", "none");
        //  $("#id-switch-off").css("pointer-events", "none");
        //sharewithRepSelectAllDropDown("false");


    },
    //ADDED BY MANOJ FRIDAY 17 2015---->STARTS HERE
    gotSendAppLinkResponse: function (data, page) {

        RESPONSE_ARRAY = [];
        var feedHtml = staticTemplate.home.sendAppLinkTemplate($(".app-download-bar").html());
        for (var index = 0; index < data.result.resultObject.length; index++) {
            var customerName = data.result.resultObject[index].name;
            try {
                customerName = customerName + " " + data.result.resultObject[index].lastName;
            } catch (err) {

            }
            // if (customerName == customerName.indexOf("undefined") > -1) {
            customerName = customerName.replace("undefined", " ");
            // }
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
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + "   id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
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
    submitPushMessage: function () {

        var scheduledDate = "";
        var dateofschedule = "";
        var booleanValue = true;

        if ($('#radio-button-now').is(':checked')) {
            booleanValue = true;
            var date = new Date();
            scheduledDate = date.getTime();
            //alert(scheduledDate);
        } else if ($('#radio-button-later').is(':checked')) {
            booleanValue = false;
            dateofschedule = $("#datepicker").val() + " " + $("#pushmessagetimepicker").val() + " " + $("#ampmtimepicker").val();
            var date = Date.parse(dateofschedule);
            scheduledDate = date;
        }

        // utils.server.displayMessage("Successfully Send..!");
        var page = "pushmessagepage";
        var data = {isNow: booleanValue, targetString: $("#idpushmessage-textarea").val(), agencyId: sessionStorage.ownerId, scheduledDate: scheduledDate};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "sendpushmessage";
        utils.server.makeServerCall(page, data, callback, deepPath);
        protocall.closeOverlay();
        showAlertBox("Successfully Send..!");

    },
    submitAddVendorDetails: function () {
        var page = "addvendorpage";
        var data = {name: $("#id-vendorname").val(), serviceType: $("#id-vendortype").val(), state: $("#id-vendorstate").val(), zipcode: $("#id-vendorzip").val(),
            phone: $("#id-vendorphone").val(), address: $("#id-vendoraddress1").val(), city: $("#id-vendorcity").val()};

        if ($("#id-vendorname").val() != "" && $("#id-vendortype").val() != "" && $("#id-vendorstate").val() != "" && $("#id-vendorzip").val() != "" &&
                $("#id-vendorphone").val() != "" && $("#id-vendoraddress1").val() != "" && $("#id-vendorcity").val() != "") {
            var deepPath = "createpreferredvendorservice";
            var callback = utils.server.gotAddvendorReponse;
            utils.server.makeServerCall(page, data, callback, deepPath);
            utils.server.loadPrefferedvendorsdetails();
            showAlertBox("Successfully Saved..!");
        } else {
            // $(".success2").css("display", "none");
            $(".error2").css("display", "block");
            $(".error2").css("padding-top", "4px");
            $(".error2").css("padding-bottom", "10px");
            $(".error2").html("No Empty Values..!");
            $('.error2').delay(2000).slideUp('slow');
//              showAlertBox("Successfully Send..!");
//            utils.server.displayError2("No Empty Values..!");
        }
    },
    gotAddvendorReponse: function () {
        utils.server.displayMessage2("Successfully Saved..!");
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

        var representativeId = [];
        var index = 0;
        var subindex = 0;

        if ($('#radio-button-public').is(':checked')) {
            for (var i = 0; i < RESPONSE_ARRAY.length; i++) {
                // RESPONSE_ARRAY[i][4] = RESPONSE_ARRAY[i][4].replace("on", "off");
                if (RESPONSE_ARRAY[i][3] != sessionStorage.userEmailId) {
                    representativeId[i] = RESPONSE_ARRAY[i][6].replace("on", "off");
                }

            }
        } else
        if ($('#radio-button-private').is(':checked')) {
            for (var i = 0; i < RESPONSE_ARRAY.length; i++) {
                // RESPONSE_ARRAY[i][4] = RESPONSE_ARRAY[i][4].replace("off", "on");
                if (RESPONSE_ARRAY[i][3] != sessionStorage.userEmailId) {
                    representativeId[i] = RESPONSE_ARRAY[i][6].replace("off", "on");
                }
            }
        } else {
            var index = 0;
            $('input[type=checkbox]').each(function () {

                if ($('.togglevalue' + index).html() != undefined) {
                    //  console.log("ssss--->", $('.togglevalue' + index).html());

                    if ($('.togglevalue' + index).html() != "undefined" || $('.togglevalue' + index).html() != undefined) {

                        if ($('.togglevalue' + index).html().indexOf(sessionStorage.userEmailId) > -1) {
                        } else {
                            representativeId[index] = $('.togglevalue' + index).html();
                            index++;
                        }
                    }
                }
            });
        }

//        $(".success1").html("Sucessfully Saved..!");
//        $(".error1").css("display", "none");
//        $(".success1").css("display", "block");
//        $(".success1").css("padding-top", "4px");
//        $(".success1").css("padding-bottom", "10px");
//        $('.success1').delay(2000).slideUp('slow');

        var page = "submitprivacydata";
        var data = {alertList: representativeId};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "editprivacy";
        utils.server.makeServerCall(page, data, callback, deepPath);
        protocall.closeOverlay();
        showAlertBox("Sucessfully Saved..!");
    },
    submitSendAppLinkData: function () {
        var representativeId = [];
        var index = 0;
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId.push($(this).val());
                index++;
            }
        });
        // protocall.displaySpinner(true);
        if (index == 0) {
            $(".error2").html("Please select atleat a name to share..!");
            $(".error2").css("display", "block");
            $(".error2").css("padding-top", "10px");
            $(".error2").css("padding-bottom", "10px");
            $('.error2').delay(2000).slideUp('slow');
            return false;
        }

        var page = "sendapplinkpage";
        var data = {applicationLink: $(".app-download-bar").html(), message: $(".textarea").val(), userIdList: representativeId};
        utils.server.displayMessage2("Send Successfully...!");
        var deepPath = "sendsetuplink";
        utils.server.makeServerCall(page, data, null, deepPath);
    },
    submitAssignCustomersData: function () {
        var index = 0;
        var customersEmailIds = [];
        var Rep_Num = "";
        Rep_Num = "agencyowner@gmail.com";

        //alert(Rep_Num);
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                //alert(RESPONSE_ARRAY[index][3]);
                customersEmailIds.push($(this).val());
            }
            index++;
        });
        // protocall.displaySpinner(true);
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
        $(".content-holder").append(html + "</form>");
        $('.settings-agency-bar').css("background-color", "#f34f4e");
        $('#id-agency-view-load').css("color", "white");
        $('.settings-vendor-bar').css("background-color", "#ccc");
        $('#id-preferred-vendors-view-load').css("color", "black");
        $("#id-preferred-vendors-view-load").click();
        RESPONSE.SETTINGTAB_PreferredVendorDATA[0] = data.resultMap.listOfPreferredVendor;
        //localStorage.setItem("SETTINGTAB_PreferredVendorDATA", JSON.stringify(data.resultMap.listOfPreferredVendor));
    },
    carrierOwnerMyProfileSubmenu: function () {
        $(".mb-submenu").empty();
        $(".mb-submenu").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"snap left f-sz-16 ptsans-light myprofile t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"myprofile\"><div class=\"\"><div class=\"sprite-im inline-block v-align-mid mr-space-10 \">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> my profile</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"myprofile-customer\" style=\"display:none;\"></a></div><div class=\"tab-rb-submenu inline-block v-align-mid\" style=\"width:69%;\"><div class=\"tab-rb-submenu-in-block p-relative\"><a href=\"/edit\" class=\"snap submenu-tab bg-color-green right f-sz-16 ptsans-light edit p-relative\" data-type=\"page\" data-submenu=\"edit\"><div class=\"sprite-im inline-block edit-icon v-align-mid\" style=\"display:inline-block;margin-left:0px;margin-right: 5px;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid \"> edit</div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;  float: left;  margin-right: 10px;  margin-top: 10px\">(<span class=\"cnt-no\"></span>)</div></a></div></div>");
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
    },
    carrierOwnerSettingSubmenu: function () {
        $(".mb-submenu").empty();
        $(".mb-submenu").append("<div class=\"mb-submenu-in p-relative\"><div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\">"
                + "<a href=\"#\" class=\"snap left f-sz-16 ptsans-light settings t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"settings\">"
                + "<div class=\"\"><div class=\"sprite-im settings-icon inline-block v-align-mid mr-space-10 \" style=\"  margin-top: 5px;\">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> settings</span></div></a>"
                + "<div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div>"
                + "<a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"settings-customer\" style=\"display:none;\">"
                + "</a></div><div class=\"tab-rb-submenu inline-block v-align-mid\" style=\"width:69%;\"><div class=\"tab-rb-submenu-in-block p-relative\">"
                + "<a href=\"/privacy\" class=\"snap submenu-tab bg-color-green right f-sz-16 ptsans-light privacy p-relative\" data-type=\"page\" data-submenu=\"privacy\">"
                + "<div class=\"sprite-im inline-block tab-icon v-align-mid\" style=\"display:none;display:block;float: left; margin-top: 10px;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid \"> privacy</div>"
                + "<div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a>"
                + "<a id=\"id-base_edit_box\" href=\"#\" class=\"snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative\" data-type=\"agency-edit-load\" data-submenu=\"agency-edit-load\">"
                + "<div class=\"sprite-im inline-block edit-icon v-align-mid\" style=\"display:block;float: left; margin-top: 10px;\">&nbsp;</div>"
                + "<div id='id-carrier-edit' class=\"submenu-title t-caps inline-block f-color-w v-align-mid \"> Edit </div>"

                + "<a id=\"id-base_preferred_edit_box\" href=\"#\" class=\"snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative\" style=\"display: none;\" data-type=\"agency-remove-load\" data-submenu=\"agency-remove-load\">"
                + "<div class=\"sprite-im inline-block edit-icon v-align-mid\" style=\"display:block;float: left; margin-top: 10px;\">&nbsp;</div>"
                + "<div id='id-carrier-edit' class=\"submenu-title t-caps inline-block f-color-w v-align-mid \"> Edit </div>"


                + "<a id='id-viewaddvendor' href=\"#\" class=\"snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative\" data-type=\"agency-addvendor-load\" data-submenu=\"agency-addvendor-load\" style=\"display:none;\">"
                + "<div class=\"sprite-im inline-block add-icon v-align-mid\" style=\"display:block;float: left; margin-top: 10px;\">&nbsp;</div>"
                + "<div class=\"submenu-title t-caps inline-block f-color-w v-align-mid \" > Add Vendor </div>"
                + "<div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a></div></div></div>");
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
    },
    MysettingsResponse: function (data) {
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Admin') {
                RESPONSE.SETTINGTAB_PreferredVendorDATA[0] = data.resultMap.listOfPreferredVendor;
                // localStorage.setItem("SETTINGTAB_PreferredVendorDATA", JSON.stringify(data.resultMap.listOfPreferredVendor));
                //  var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                var html = staticTemplate.customers.staticSettingsTemplate(data);
                //  TEMPSETTINGSPAGE = "";
                TEMPSETTINGSPAGE = html;
                $(".content-holder").empty();
                $(".content-holder").append(TEMPSETTINGSPAGE + "</form>");
                $('.settings-agency-bar').css("background-color", "#f34f4e");
                $('#id-agency-view-load').css("color", "white");
                $('.settings-vendor-bar').css("background-color", "#ccc");
                $('#id-preferred-vendors-view-load').css("color", "black");
                utils.server.carrierOwnerSettingSubmenu();

            }
        } else {
            RESPONSE.SETTINGTAB_PreferredVendorDATA[0] = data.resultMap.listOfPreferredVendor;
            // localStorage.setItem("SETTINGTAB_PreferredVendorDATA", JSON.stringify(data.resultMap.listOfPreferredVendor));
            // var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var html = staticTemplate.customers.staticSettingsTemplate(data);
            //  TEMPSETTINGSPAGE = "";
            TEMPSETTINGSPAGE = html;
            $(".content-holder").empty();
            $(".content-holder").append(TEMPSETTINGSPAGE + "</form>");
            $('.settings-agency-bar').css("background-color", "#f34f4e");
            $('#id-agency-view-load').css("color", "white");
            $('.settings-vendor-bar').css("background-color", "#ccc");
            $('#id-preferred-vendors-view-load').css("color", "black");

            var subMenu = '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid" style="width: 20%;"><a href="#" class="snap left f-sz-16 ptsans-light settings t-upper p-relative f-color-green" data-type="page" data-submenu="settings"><div class=""><div class="sprite-im settings-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid"> settings</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="settings-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width: 80%;"><div class="tab-rb-submenu-in-block p-relative"><a href="/save" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light save p-relative" data-type="page" data-submenu="save" style="display:none;"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "> save</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a><a href="/privacy" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light privacy p-relative" data-type="page" data-submenu="privacy"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "> privacy</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class="cnt-no"></span>)</div></a></div></div>';
            $(".mb-submenu").empty();
            $(".mb-submenu").append(subMenu);
            $(".mb-menu a.selected-tab").removeClass("selected-tab");
            localStorage.setItem("SELECTED_SETTINGS_TAB", "AGENCY_TAB");
        }
        protocall.displaySpinner(false);

    },
    getResponseForPreferredVendor: function (idvalue) {
        var data = RESPONSE.SETTINGTAB_PreferredVendorDATA[0];
        // var data = JSON.parse(localStorage.getItem("SETTINGTAB_PreferredVendorDATA"));

        var footer = "";
        var status = 0;
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            if (element.preferredVendorId == idvalue) {
                footer = '</div><div class="vendor-detail-block"> <div class="vendor-view-block inline-block v-align-mid p-relative "> '
                        + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> '
                        + '<div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> '
                        + '<div  class="carrier-left-title t-right left">preferred vendor id</div> '
                        + '<div id="id-v-preferredvendorid" class="carrier-left-content t-left right " style="visibility: visible">' + element.preferredVendorId + '</div> '
                        + '<input id="id-vendor-preferredvendorid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> '
                        + '</div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> '
                        + '<div class="carrier-left-title t-right left">type</div> '
                        + '<div id="id-v-vendortype" class="carrier-left-content t-left right" style="visibility: visible">' + element.serviceType + '</div>'
                        + '<select id="id-vendor-type" class="carrier-left-content-textbox t-left right p-absolute" style="visibility: hidden"><option>Towing Service</option><option>Home Restoration</option></select>'
//                        + '<input id="id-vendor-type" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden">'
                        + '</div> </div> </div> </div><div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">name</div> <div id="id-v-vendorname" class="carrier-left-content t-left right " style="visibility: visible">' + element.name + '</div> '
                        + '<input id="id-vendor-name" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div>'
                        + '<div id="id-v-vendorphone" class="carrier-left-content t-left right" style="visibility: visible">' + (element.phone).replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3') + '</div> <input id="id-vendor-phone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-v-address1" class="carrier-left-content t-left right ">' + element.address + '</div> <input id="id-vendor-address1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-v-address2" class="carrier-left-content t-left right">' + element.address2 + '</div> <input id="id-vendor-address2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div id="id-v-city" class="carrier-left-content t-left right ">' + element.city + '</div> <input id="id-vendor-city" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div id="id-v-state" class="carrier-left-content t-left right t-upper">' + element.state + '</div> <input id="id-vendor-state" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div id="id-v-zipcode" class="carrier-left-content t-left right ">' + element.zipcode + '</div> <input id="id-vendor-zipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left"></div> <div class="carrier-left-content t-left right t-upper"></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-right right t-caps opensans-regular"> </div> </div> </div> </div> <div class="vendor-back-button"> <div id="id_back_button" class="vendor-back-bar inline-block p-relative bg-color-green" style="cursor:pointer;">'
                        + '<div class="p-relative inline-block t-caps t-right v-align-mid opensans-regular f-color-w">back</div> </div> </div> </div></div> </form>';
                status = 1;
                break;
            }
            if (status == 1) {
                break;
            }
        }

        if (status == 0) {
            footer = "<div>No records</div>";
        }

        $(".content-holder").empty();
        $(".content-holder").append(TEMPSETTINGSPAGE + footer);
        $('.settings-agency-bar').css("background-color", "#ccc");
        $('#id-agency-view-load').css("color", "black");
        $('.settings-vendor-bar').css("background-color", "#f34f4e");
        $('#id-preferred-vendors-view-load').css("color", "white");
        $("#id-canecelbutton").css("display", "none");
        protocall.view.LoadVendorInfo();

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
                + '<select id="id-vendor-type" class="carrier-left-content-textbox t-left right p-absolute" style="visibility: hidden"><option>Towing Service</option><option>Home Restoration</option></select>'
//                +'<input id="id-vendor-type" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden">'
                + '</div> </div> </div> </div><div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">name</div> <div id="id-v-vendorname" class="carrier-left-content t-left right " style="visibility: visible">' + data.serviceName + '</div> <input id="id-vendor-name" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div id="id-v-vendorphone" class="carrier-left-content t-left right" style="visibility: visible">' + (data.phone.number).replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3') + '</div> <input id="id-vendor-phone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-v-address1" class="carrier-left-content t-left right ">' + data.address1 + '</div> <input id="id-vendor-address1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-v-address2" class="carrier-left-content t-left right">' + data.address2 + '</div> <input id="id-vendor-address2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div id="id-v-city" class="carrier-left-content t-left right ">' + data.city + '</div> <input id="id-vendor-city" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div id="id-v-state" class="carrier-left-content t-left right t-upper">' + data.state + '</div> <input id="id-vendor-state" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div id="id-v-zipcode" class="carrier-left-content t-left right ">' + data.zipcode + '</div> <input id="id-vendor-zipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left"></div> <div class="carrier-left-content t-left right t-upper"></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-right right t-caps opensans-regular"> </div> </div> </div> </div> <div class="vendor-back-button"> <div id="id_back_button" class="vendor-back-bar inline-block p-relative bg-color-green " style="cursor:pointer;"> '
                + '<div class="p-relative inline-block t-caps t-right v-align-mid opensans-regular f-color-w" >back</div> </div> </div> </div></div> </form>';
        $(".content-holder").empty();
        $(".content-holder").append(TEMPSETTINGSPAGE + footer);
        $('.settings-agency-bar').css("background-color", "#ccc");
        $('#id-agency-view-load').css("color", "black");
        $('.settings-vendor-bar').css("background-color", "#f34f4e");
        $('#id-preferred-vendors-view-load').css("color", "white");
        protocall.view.LoadVendorInfo();
    },
    submitShareWithRepsData: function () {

        // var fromMailId = "agencyowner@gmail.com";
        var fromMailId = sessionStorage.userEmailId;
        var representativeId = [];
        var alertID = ALERTID;
        var index = 0;
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId[index] = $(this).val();
                index++;
            }

        });

        if (index == 0) {
            $(".error").html("Please select atleat a representative to share..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            $('.error').delay(2000).slideUp('slow');
            return false;
        }

        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                // representativeId[index] = $(this).val();
                // index++;
                var page = "shareWithRepPage";
				var toUserIdValue = $(this).val();
                var data = {fromUserId: fromMailId, alertId: alertID, toUserId: toUserIdValue};
                var callback = utils.server.getCodeResponseAssignCustomers;
                var deepPath = "sharewithrepresentative";
                utils.server.makeServerCall(page, data, callback, deepPath);
            }

        });

//        if (index > 1) {
//            $(".error").html("You can select only one representative at a time..!");
//            $(".error").css("display", "block");
//            $(".error").css("padding-top", "10px");
//            $(".error").css("padding-bottom", "10px");
//            $('.error').delay(2000).slideUp('slow');
//            return false;
//        }


    },
    submitAssignToCustomers: function () {
        var representativeId = '';
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Admin') {
                representativeId = localStorage.getItem("CARRIERREP_EMAILID");
            }
        } else {
            representativeId = ASSIGNTOCUSOVERLAY_REPEMAILID;
        }


        var subIndex = 0;
        CUSTOMERS_LIST = [];

        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                //  alert($(this).val());
                CUSTOMERS_LIST[subIndex] = $(this).val();
                subIndex++;
            }


        });
        //protocall.displaySpinner(true);

        if (subIndex == 0) {
            $(".error").html("Please select atleat a customers to Assign..!");
            $(".error").css("display", "block");
            $(".success").css("display", "none");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            $('.error').delay(2000).slideUp('slow');

            return false;
        }

        var page = "assignToCustomersOverlay";
        var data = {representativeId: representativeId, userList: CUSTOMERS_LIST};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "assigncustomer";
        utils.server.makeServerCall(page, data, callback, deepPath);


    },
    submitAssignToRepsData: function () {

        var representativeId = "";
        var index = 0;
        CUSTOMERS_LIST = [];
        var cusIndex = 0;
        var cusSubIndex = 0;

        $('.getSelectedCustomers').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                CUSTOMERS_LIST[cusSubIndex] = $(this).val();
                cusSubIndex++;
            }
            cusIndex++;
        });

        if (cusSubIndex == 0) {
            CUSTOMERS_LIST[0] = localStorage.getItem("ARRAY_CUSTOMERS_LIST");
        }

        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId = $(this).val();
                index++;
            }

        });
        // protocall.displaySpinner(true);
        if (index == 0) {
            $(".error").html("Please select atleat a representative to share..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            $('.error').delay(2000).slideUp('slow');
            return false;
        }
        if (index > 1) {
            $(".error").html("You can select only one representative at a time..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            $('.error').delay(2000).slideUp('slow');
            return false;
        }

        var page = "assignToRepsPage";
        var data = {representativeId: representativeId, userList: CUSTOMERS_LIST};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "assigncustomer";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    displayError: function (message) {
        // alert("dd1");
        //showAlertBox(message);
//        $(".success").css("display", "none");
//        $(".error").css("display", "block");
//        $(".error").css("visibility", "visible");
//        $(".error").css("padding-top", "4px");
//        $(".error").css("padding-bottom", "10px");
//        $(".error").html(message);
//        $('.error').delay(2000).slideUp('slow');
    },
    displayError2: function (message) {
        // showAlertBox(message);
//        $(".success2").css("display", "none");
//        $(".error2").css("display", "block");
//        $(".error2").css("padding-top", "4px");
//        $(".error2").css("padding-bottom", "10px");
//        $(".error2").html(message);
//        $('.error2').delay(2000).slideUp('slow');
    },
    displayMessage: function (message) {
        //showAlertBox(message);
//        $(".success").html(message);
//        $(".error").css("display", "none");
//        $(".success").css("display", "block");
//        $(".success").css("padding-top", "4px");
//        $(".success").css("padding-bottom", "10px");
//        $('.success').delay(2000).slideUp('slow');
    },
    displayMessage2: function (message) {
        //  showAlertBox(message);
//        $(".success2").html(message);
//        $(".error2").css("display", "none");
//        $(".success2").css("display", "block");
//        $(".success2").css("padding-top", "4px");
//        $(".success2").css("padding-bottom", "10px");
//        $('.success2').delay(2000).slideUp('slow');

    },
    getCodeResponseAssignCustomers: function (data)
    {
        protocall.closeOverlay();

        var message = "";
        if (data.resultMap.TypeCode == '4031') {
            message = "The representative has been successfully assigned to the customer.";
            showAlertBox(message);
            utils.server.displayMessage(message);
            setTimeout(function () {
                if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                    if (localStorage.LoginType == 'Representatives') {
                        var dataq = {};
                        var path = utils.server.getServerPath("carrierdashboarddesignforrepresentativelogin");
                        var request = path(dataq).execute(function (resp) {
                            if (resp.error) {
                                t.server.handleError(resp);
                            } else {
                                debugger;
                                RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                                // localStorage.setItem("CARRIERAGENCYTOTALDETAILS", JSON.stringify(resp));
                                RESPONSE.CARRIERREP_DATA[0] = resp;
                                //  localStorage.setItem("CARRIERREP_DATA", JSON.stringify(resp));
                                RESPONSE.customers_data[0] = resp.resultMap.customerTab;
                                // localStorage.setItem("customers_data", JSON.stringify(resp.resultMap.customerTab));
                                RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
                                // localStorage.setItem("agencies_data", JSON.stringify(resp.resultMap.agencyTab[0].agencyDetail));
                                RESPONSE.carrierrepcustomers_data[0] = resp;
                                //localStorage.setItem("carrierrepcustomers_data", JSON.stringify(resp));
                            }
                        });
                    }
                    if (localStorage.LoginType == 'Admin') {

                        var page = "carriers";
                        var data = {},
                                deepPath = "carrierdashboarddesign",
                                page = "home",
                                async = false,
                                callback = protocall.carrier.getresponsecarrieragency,
                                authId = "",
                                spinnerMsg = "";
                        utils.server.makeServerCall(page, data, callback, deepPath);
                    }
                }


                //protocall.view.viewCustomerFeed(true, localStorage.selectedEmail, localStorage.carrierIDValue);
                //localStorage.carrierIDValue="";
                //localStorage.selectedEmail="";
            }, 1000);

        }
        if (data.resultMap.TypeCode == '4032') {
            //alert("atleast one customer");
            message = "Please select atleast one customer for the given representative";
            showAlertBox(message);
            utils.server.errorMessage(message);
        }
        if (data.resultMap.TypeCode == '4033') {
            //alert("Authentication Erro");
            message = "Authentication Error: Only admin or superadmin can assign customers to the representatives";
            showAlertBox(message);
            utils.server.errorMessage(message);
        }
        if (data.resultMap.TypeCode == '4034') {
            message = "Shared data  successfully..!";
            showAlertBox(message);
            utils.server.displayMessage(message);
        }

        if (data.resultMap.TypeCode == '4012') {
            message = "No device token were registered to send the push notification";
            showAlertBox(message);
            utils.server.displayError(message);
        }



    },
    imagesToServer: function (form, callback, isFormData, qs, pagespinner, imageType, imageContentType) {
        isFormData = (typeof isFormData == "undefined" || isFormData == false) ? false : true;
        var formData;
        var imageValue;
        var res;
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
        var imageUploadURL = HOMEPAGERESPONSE.PROFILEAPIFORIMAGE + qs + "?typeOfImage=" + imageType;
        if (imageType == "profilePicture") {
            imageValue = sessionStorage.profilePicAfterUpdate;
        } else {
            imageValue = sessionStorage.agencyLogo;
        }
        if (imageContentType == "image/jpeg") {
            res = imageValue.slice(0, 23);
        } else if (imageContentType == "image/png") {
            res = imageValue.slice(0, 22);
        }
        var imageValueAfterReplace = imageValue.replace(res, "");
        console.log("imageValueAfterReplace", imageValueAfterReplace);

        $.ajax({
            type: "POST",
            url: imageUploadURL, processData: false,
            contentType: imageContentType,
            data: imageValueAfterReplace,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                callback(data, form, isFormData);
                HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKED = false;
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
    profilePicResponse: function (data) {
        console.log("profilepicupdate", data);
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
            retryMax: 3, timeout: 15000,
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
    var searchText = $(tag).val().toUpperCase();
    if (searchText !== "" && searchText !== null) {
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            if (RESPONSE_ARRAY[index][0].toUpperCase().indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = RESPONSE_ARRAY[index][2];
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var location = customerCity;
                if (RESPONSE_ARRAY[index][2] != undefined) {
                    if (RESPONSE_ARRAY[index][2] != "") {
                        location = location + "," + RESPONSE_ARRAY[index][2];
                    }
                }

                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }
        $(".rep-content-blk").html(finalHtml + "</form>");
    }
}

function onKeyPressEventshareWithRep(tag) {
    var searchText = $(tag).val().toUpperCase();
    if (searchText !== "" && searchText !== null) {
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            if (RESPONSE_ARRAY[index][0].toUpperCase().indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = RESPONSE_ARRAY[index][2];
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var location = customerCity;
                if (RESPONSE_ARRAY[index][2] != undefined) {
                    if (RESPONSE_ARRAY[index][2] != "") {
                        location = location + "," + RESPONSE_ARRAY[index][2];
                    }
                }
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
        var subIndex = 0;
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            if (RESPONSE_ARRAY[index][0].toUpperCase().indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = "";
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var privacy = RESPONSE_ARRAY[index][4];
                var carrierAgencyRepresentativeId = RESPONSE_ARRAY[index][5];
                var privacystatus = RESPONSE_ARRAY[index][6];
                if (carrierAgencyRepresentativeId == "undefined" || carrierAgencyRepresentativeId == null) {
                    carrierAgencyRepresentativeId = "";
                }
                //   var toggleStyleOn = "";
                // var toggleStyleOff = "";

                if (privacy == "on") {
                    toggleStyle = "margin-left:50px";
                    //toggleStyleOff = "margin-left:-9px";
                    console.log("privacy--->name", customerName + " status" + privacy + "50");
                } else {
                    toggleStyle = "margin-left:-10px";
                    console.log("privacy--->name", customerName + " status" + privacy + "-10");
                    //toggleStyleOn = "margin-left:-px";
                }

                if (privacy == "undefined") {
                    privacy = customerEmailId + "#off";
                } else {
                    privacy = customerEmailId + "#" + privacy;
                }

                //  console.log("privacy--->name" + subIndex, privacy);

                var tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id='name" + subIndex + "'  class=\"checkbox\" / > <label for='name" + subIndex + "' class=\"rep-label1\" > <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:20%;\">" + customerName + "</div> " + "<div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + subIndex + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                        + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"  onclick=\"moveani(" + subIndex + ",\'id-switch-on\', \'id" + subIndex + "-switch-container\')\"><div  class=\"togglevalue" + subIndex + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\"  onclick=\"moveani(" + subIndex + ",\'id-switch-off\', \'id" + subIndex + "-switch-container\')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
                subIndex++;
            }
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        //var buttonHtml = "</div> </div> <div class=\"o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w\" data-type=\"overlaybtn\">Send</div> </div> </div> ";
        $(".rep-content-blk").html(finalHtml + "</form>");
    } else {
        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = "";
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var privacy = RESPONSE_ARRAY[index][4];
            var carrierAgencyRepresentativeId = RESPONSE_ARRAY[index][5];
            var privacystatus = RESPONSE_ARRAY[index][6];
            if (carrierAgencyRepresentativeId == "undefined" || carrierAgencyRepresentativeId == null) {
                carrierAgencyRepresentativeId = "";
            }

// var location=customerCity;
//                if(RESPONSE_ARRAY[index][2]!=undefined){
//                    if(RESPONSE_ARRAY[index][2]!=""){
//                        location=location+","+RESPONSE_ARRAY[index][2];
//                    }
//                }
            var toggleStyle = "";
            if (privacy == "on") {
                toggleStyle = "margin-left:50px";
                //toggleStyleOff = "margin-left:-9px";

            } else {
                toggleStyle = "margin-left:-10px";
                //toggleStyleOn = "margin-left:-px";
            }

            if (privacy == "undefined") {
                privacy = customerEmailId + "#off";
            } else {
                privacy = customerEmailId + "#" + privacy;
            }


            var tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label1\" > <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:20%;\">" + customerName + "</div> "
                    + "<div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                    + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"  onclick=\"moveani(" + index + ",\'id-switch-on\', \'id" + index + "-switch-container\')\"><div  class=\"togglevalue" + index + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\"  onclick=\"moveani(" + index + ",\'id-switch-off\', \'id" + index + "-switch-container\')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        // var buttonHtml = "</div> </div> <div class=\"o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w\" data-type=\"overlaybtn\">Send</div> </div> </div> ";
        $(".rep-content-blk").html(finalHtml + "</form>");
    }


}

function sortbyBox1() {
    var selectedOption = document.getElementById("timepicker").value;
    if (selectedOption == "Alphabetical") {
        RESPONSE_ARRAY.sort();
        $('#timepicker2').empty();
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        $.each(alphabet, function (letter) {
            $('#timepicker2').append($('<option> Section ' + alphabet[letter] + '</option>'));
        });
        // sharewithRepSelectAllDropDown("true");
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = RESPONSE_ARRAY[index][2];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "" + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

    } else if (selectedOption == "City,State") {
        $('#timepicker2').empty();
        var TEMP_ARRAY = [];
        for (var i = 0; i < RESPONSE_ARRAY.length; i++) {
            TEMP_ARRAY[i] = RESPONSE_ARRAY[i][1];
            if (RESPONSE_ARRAY[i][2] != undefined && RESPONSE_ARRAY[i][2] != "undefined") {
                if (RESPONSE_ARRAY[i][2] != "") {
                    TEMP_ARRAY[i] = TEMP_ARRAY[i] + "" + RESPONSE_ARRAY[i][2];
                }

            }

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
            var customerState = RESPONSE_ARRAY[index][2];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "" + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    } else {
        $('#timepicker2').empty();
        sharewithRepSelectAllDropDown("true");
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = RESPONSE_ARRAY[index][2];
            var customerEmailId = RESPONSE_ARRAY[index][3];

            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "" + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
        $("#timepicker2").prop("disabled", false);
        $('#timepicker2').empty();
        $('#timepicker2').append('<option> None </option>');
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        $.each(alphabet, function (letter) {
            $('#timepicker2').append($('<option> Section ' + alphabet[letter] + '</option>'));
        });


        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
            if (RESPONSE_ARRAY[i][2] != undefined && RESPONSE_ARRAY[i][2] != "undefined") {
                if (RESPONSE_ARRAY[i][2] != "") {
                    TEMP_ARRAY[i] = TEMP_ARRAY[i] + "," + RESPONSE_ARRAY[i][2];
                }

            }
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
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
    if (selectedOption == "None") {
        //        $('.checkbox').each(function () {
//            this.checked = true;
//        });
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {             //if (RESPONSE_ARRAY[index][1].indexOf(selectedOption) > -1) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";             //}
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        $(".rep-content-blk").html(finalHtml + "</form>");
    } else if (selectedOption.indexOf("Section") > -1) {
        var char = selectedOption.trim().charAt(8).toUpperCase();
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];

            if (customerName.charAt(0) == char) {
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var location = customerCity;
                if (RESPONSE_ARRAY[index][2] != undefined) {
                    if (RESPONSE_ARRAY[index][2] != "") {
                        location = location + "," + RESPONSE_ARRAY[index][2];
                    }
                }
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            }
        }
        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
        $(".rep-content-blk").html(finalHtml + "</form>");


//        $("input[name='" + selectedOption.trim().charAt(8).toUpperCase() + "']").each(function () {
//
//            if (this.checked == true) {
//                this.checked = false;
//            } else {
//                this.checked = true;
//            }
//        });
    } else {
        //sharewithRepSelectAllDropDown("false");

        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            if (RESPONSE_ARRAY[index][1].indexOf(selectedOption.split(',')[0]) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var location = customerCity;
                if (RESPONSE_ARRAY[index][2] != undefined) {
                    if (RESPONSE_ARRAY[index][2] != "") {
                        location = location + "," + RESPONSE_ARRAY[index][2];
                    }
                }
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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

//sendAppLinkSortbyBox1
function sendAppLinkSortbyBox1() {
    var selectedOption = document.getElementById("timepicker").value;
    if (selectedOption == "Alphabetical") {
        RESPONSE_ARRAY.sort();

        $("#timepicker2").prop("disabled", false);
        $('#timepicker2').empty();
        $('#timepicker2').append('<option> None </option>');
        $('#timepicker2').append('<option>Select All</option>');
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        $.each(alphabet, function (letter) {
            $('#timepicker2').append($('<option> Section ' + alphabet[letter] + '</option>'));
        });

        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];

            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
            if (RESPONSE_ARRAY[i][2] != undefined && RESPONSE_ARRAY[i][2] != "undefined") {
                if (RESPONSE_ARRAY[i][2] != "") {
                    TEMP_ARRAY[i] = TEMP_ARRAY[i] + "," + RESPONSE_ARRAY[i][2];
                }

            }
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
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
            var customerEmailId = RESPONSE_ARRAY[index][3];

            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
function sendAppLinkSortbyBox2() {
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
            if (RESPONSE_ARRAY[index][1].indexOf(selectedOption.split(',')[0]) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = RESPONSE_ARRAY[index][2];
                var customerEmailId = RESPONSE_ARRAY[index][3];

                var location = customerCity;
                if (RESPONSE_ARRAY[index][2] != undefined) {
                    if (RESPONSE_ARRAY[index][2] != "") {
                        location = location + "," + RESPONSE_ARRAY[index][2];
                    }
                }
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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

function sortbyBox2() {
    var selectedOption = document.getElementById("timepicker2").value;
    if (selectedOption == "Select All") {
        $('.checkbox').each(function () {
            this.checked = true;
        });
    } else if (selectedOption.indexOf("Section") > -1) {
//        $("input[name='" + selectedOption.trim().charAt(8).toUpperCase() + "']").each(function () {
//            if (this.checked == true) {
//                this.checked = false;
//            } else {
//                this.checked = true;
//            }
//        });

        var char = selectedOption.trim().charAt(8).toUpperCase();
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];

            if (customerName.charAt(0) == char) {
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var location = customerCity;
                if (RESPONSE_ARRAY[index][2] != undefined) {
                    if (RESPONSE_ARRAY[index][2] != "") {
                        location = location + "" + RESPONSE_ARRAY[index][2];
                    }
                }
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
        //sharewithRepSelectAllDropDown("false");

        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            if (RESPONSE_ARRAY[index][1].indexOf(selectedOption.split(',')[0]) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = RESPONSE_ARRAY[index][2];
                var customerEmailId = RESPONSE_ARRAY[index][3];

                var location = customerCity;
                if (customerState != undefined) {
                    if (customerState != "") {
                        location = location + "" + customerState;
                    }
                }


                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + location + "</div> </div> </label> </div>";
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
    if (Ucode == 13) {
        onKeyPressEventshareWithRep("#id-overlaysharewithrep");
    }

    onKeyPressEventshareWithRep("#id-overlaysharewithrep");
}

function sharewithrepkeyup(e) {
    onKeyPressEventshareWithRep("#id-overlaysharewithrep");
}

function assignToCustomerkeypress(e) {
    var Ucode = e.keyCode ? e.keyCode : e.charCode;
    if (Ucode == 13) {
        onKeyPressEventAssignCustomers("#id-overlayaiigncustomers");
    }

    onKeyPressEventAssignCustomers("#id-overlayaiigncustomers");
}

function assignToCustomerkeyup(e) {
    onKeyPressEventAssignCustomers("#id-overlayaiigncustomers");
}

function sendAppLinkkeyup(e) {
    onKeyPressEventshareWithRep("#id-overlaysendapplink");
}

function privacykeyup(e) {
    onKeyPressEventPrivacy("#id-overlayprivacy");
}

function moveani(index, idValue, idcontainerValue) {
    if (idValue === "id-switch-off") {
        var value = $('.togglevalue' + index).text();

        $('.togglevalue' + index).text(value.replace("off", "on"));
        document.getElementById(idcontainerValue).style.marginLeft = "50px";
//        if (index > 0) {
//            $('.togglevalue' + index).text("on");
//        }
    } else if (idValue === "id-switch-on") {
        var value = $('.togglevalue' + index).text();

        $('.togglevalue' + index).text(value.replace("on", "off"));
//        if (index > 0) {
//            $('.togglevalue' + index).text("off");
//        }
        document.getElementById(idcontainerValue).style.marginLeft = "-10px";
    }

}


//-------------------------------------------------------------------------------
