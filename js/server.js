//ADDED BY MANOJ FRIDAY 13 2015---->STARTS HERE
var RESPONSE_ARRAY = [];
//---------------------------------------------
var utils = {
};
utils.server = {
    authendicate: function () {


    },
    makeServerCall: function (page, data, callback, deepPath) {
        console.log(page, data, callback, deepPath);
        var self = utils.server;
        var response = this.getData(page, data, callback, deepPath);
        console.log(response);
        if (response !== "undefined" || response !== null || typeof response !== undefined) {
            return response;
        }
    },
    getData: function (page, data, callback, deepPath) {
        console.log(deepPath);
        var ref = page;
        var data = data;
        var path = this.getServerPath(deepPath);
        console.log(path);
        console.log("geetha response", path + "" + data);
        var request = path(data).execute(function (resp) {
            console.log(request);
            if (resp.error) {
                console.log("error");
                utils.server.handleError(resp, ref, false);
            } else {
                console.log("success");
                if (typeof callback !== "undefined" && callback !== null) {
                    console.log("response1" + resp + "" + ref);
                    callback(resp, ref);
                } else {
                    console.log("response2" + resp);
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



        if (data.resultMap.TypeCode === '4002') {
            var error = "Your password is wrong, check whether the caplock is enabled";
            protocall.displaySpinner(false);
            $('.login-error').html(error);
            return false
        }
        else if (data.resultMap.TypeCode === '4005') {
            var error = "You are not a registered user";
            protocall.displaySpinner(false);
            $('.login-error').html(error);
            return false
        }
        else if (data.resultMap.TypeCode === '4007') {
            var error = "Provide your agencyId";
            protocall.displaySpinner(false);
            $('.login-error').html(error);
            return false
        }




        if (data.resultMap.TypeCode === '4001') {

            $("#homecontent").css("display", "block");
            localStorage.loggedIn = "true";
            localStorage.agencyEmail = data.resultMap.emailId;
            localStorage.agencyId = data.resultMap.agencyId;
            protocall.setPageNavigation(HOME_PAGE);

            var header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"></div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="https://uniwallpapers.files.wordpress.com/2012/06/animal-nature-21.jpg" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span>Hi,</span> <span class="t-caps">John Doe</span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon">&nbsp;</div><div class="clear"></div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Home</span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Carriers</span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Customers</span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">My Reps</span> </div></a> </div><div class="mb-submenu"> <div class="mb-submenu-in p-relative"> <div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> <a href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light myalerts p-relative selected-tab" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w">My Alerts</span> <span class="cnt-blk">(<span class="cnt-no">24</span>)</span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light incidents p-relative" data-type="page" data-submenu="incidents"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid">incidents</div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="policies"> <span class="submenu-title t-caps f-color-w">Policies</span> </a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="archives"> <span class="submenu-title t-caps f-color-w">Archives</span> </a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="view_archives"> <span class="submenu-title t-caps f-color-w">View Archived</span> </a> <div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby"> <div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div><div class="clear"></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="http://www.ecouterre.com/wp-content/uploads/2012/02/bunny-537x402.jpg" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity">&nbsp;</div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid">&nbsp;</div><div class="inline-block f-sz-12 v-align-mid opensans-regular ">Edit</div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps">Auto care</div><div class="opensans-regular text-ellipsis f-italic agency-email">Insure@autocare.com</div></div></a> </div></div></div></div>';

            var template = protocall.home.initHomePage();

            var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div></div>';

            var footer = '<footer class="p-absolute bg-color-dblue"> <div class="p-relative foot-in clr-fl"> <div class="foot-lb left"> <span class="foot-web-addr opensans-regular f-sz-12">protocol.com</span> </div><div class="foot-rb right"> <div class="foot-nav opensans-regular f-sz-12"> <a href="/help" class="help snap footer-links" data-type="help">Help</a> <a href="/faq" class="faq snap footer-links" data-type="faq">FAQ</a> <a href="/privacy" class="privacy snap footer-links" data-type="privacy">Privacy</a> <a href="/tc" class="tc snap footer-links" data-type="tc">Terms &#38; Conditions</a> </div></div></div></footer>';

            $("#page").empty();

            totalHtml = header + content + footer;

            $("#page").append(totalHtml);
            protocall.displaySpinner(false);
        }

    },
    //ADDED BY MANOJ FRIDAY 13 2015---->STARTS HERE
    gotAssignCustomersResponse: function (data, page) {

//        TypeCode List:  4031 - Successfully assigned the List of Customers under the selected representative, 
//                4032 - Please select atleast one customer for the given representative, 
//                4033 - Authentication Error: Only admin or superadmin can assign customers to the representatives

        var feedHtml = staticTemplate.home.assignCustomersTemplate();

        for (index = 0; index < data.result.resultObject.length; index++) {
            var customerName = data.result.resultObject[index].name;
            var customerCity = data.result.resultObject[index].city;
            var customerState = data.result.resultObject[index].state;
            var customerEmailId = data.result.resultObject[index].userId.email;

            if (customerState === null || customerState === "") {
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
    gotShareWithRepResponse: function (data, page) {


        var feedHtml = staticTemplate.home.shareWithRepTemplate();

        for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
            var customerName = data.resultMap.RepresentativeDetails[index].name;
            var customerCity = data.resultMap.RepresentativeDetails[index].location;
            var customerState = "";
//            var customerEmailId = data.resultMap.RepresentativeDetails[index].agencyRepresentativeId[0].email;

            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, "customerEmailId"];

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
            feedHtml = feedHtml + tempHtml;
            tempHtml = "";
        }
        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assigncustomers'>Assign</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;
        overlay.displayOverlay(finalHtml);
    },
    //----------------------------------------------------------
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
    //ADDED BY MANOJ FRIDAY 16 2015---->STARTS HERE
    submitAssignCustomersData: function () {
        var index = 0;
        var customersEmailIds = [];
        var Rep_Num = "agencyRepresentative@gmail.com";

        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str === "1") {
                alert(RESPONSE_ARRAY[index][3]);
                customersEmailIds.push(RESPONSE_ARRAY[index][3]);
            }
            index++;
        });
        protocall.displaySpinner(true);

//          ********************** Doubts here ---------------------->

        var root = {};
        root[0] = customersEmailIds;

        var page = "assignCustomersPage";
        var data = {userList: root, representativeId: Rep_Num};
        var callback = getCodeResponseAssignCustomers;
        var deepPath = "assigncustomer";
        makeServerCall(page, data, callback, deepPath);

//     *************************    Doubts here ---------------------->

    },
    getCodeResponseAssignCustomers: function (data)
    {
        var message = "";
        console.log(data);
        if (data.resultMap.TypeCode === '4031') {
            alert("Successfully");
            message = "Successfully assigned the List of Customers under the selected representative";

        }
        if (data.resultMap.TypeCode === '4032') {
            alert("atleast one customer");
            message = "Please select atleast one customer for the given representative";

        }
        if (data.resultMap.TypeCode === '4033') {
            alert("Authentication Erro");
            message = "Authentication Error: Only admin or superadmin can assign customers to the representatives";

        }

        alert(message);
    },
    //---------------------------------------------------------------------------
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

//ADDED BY MANOJ FRIDAY 16 2015---->STARTS HERE
function onKeyPressEventAssignCustomers(tag) {
    var edValue = document.getElementById(tag);
    var searchText = edValue.value;
    if (searchText !== "" && searchText !== null) {
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            if (RESPONSE_ARRAY[index][0].indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = RESPONSE_ARRAY[index][2];

                if (customerState === null || customerState === "") {
                    customerState = "";
                }

                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            }
        }

        if (finalHtml === "<form>") {
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

            if (customerState === null || customerState === "") {
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

function onKeyPressEventshareWithRep(tag) {
    var edValue = document.getElementById(tag);
    var searchText = edValue.value;
    if (searchText !== "" && searchText !== null) {
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            if (RESPONSE_ARRAY[index][0].indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            }
        }

        if (finalHtml === "<form>") {
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

function sortbyBox1() {

    var selectedOption = document.getElementById("timepicker").value;
    if (selectedOption === "Alphabetical") {
        RESPONSE_ARRAY.sort();
        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = RESPONSE_ARRAY[index][2];

            if (customerState === null || customerState === "") {
                customerState = "";
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml === "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

    } else {

        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = RESPONSE_ARRAY[index][2];

            if (customerState === null || customerState === "") {
                customerState = "";
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + customerState + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";

        }

        if (finalHtml === "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    }
    $(".rep-content-blk").html(finalHtml + "</form>");

}

function Sharewithrep_sortbyBox1() {

    var selectedOption = document.getElementById("timepicker").value;
    if (selectedOption === "Alphabetical") {
        RESPONSE_ARRAY.sort();
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];


            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml === "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

    } else {

        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {

            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'>" + customerCity + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";

        }

        if (finalHtml === "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    }
    $(".rep-content-blk").html(finalHtml + "</form>");

}

function assignCustomersSortbyBox2() {
    var selectedOption = document.getElementById("timepicker2").value;

    if (selectedOption === "Select All") {
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

    if (selectedOption === "Select All") {
        $('.checkbox').each(function () {
            this.checked = true;
        });
    } else {
        $("input[name='" + selectedOption.charAt(8).toUpperCase() + "']").each(function () {
            this.checked = true;
        });
    }

}
//-------------------------------------------------------------------------------