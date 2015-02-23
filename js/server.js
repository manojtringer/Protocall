var utils = {
	
	
};
utils.server = {
    
    authendicate:function() {

		
     },
     makeServerCall: function(page,data,callback,deepPath) {
       //console.log(page,data,callback,deepPath);
        console.log("make server call");
		var self = utils.server;
        var response=this.getData(page,data,callback,deepPath);
        if(response != "undefined" || response != null || typeof response != undefined) {
            return response;
        }
     },
     getData: function(page,data,callback,deepPath) {
               //console.log(deepPath);
               var ref= page;
               var data=data;
               var path = this.getServerPath(deepPath);
 		       var request = path(data).execute(function(resp) {
                if(resp.error) {
                    console.log("error");
					utils.server.handleError(resp,ref,false);
                } else {
					console.log("success");
                    if(typeof callback != "undefined" && callback != null) {
                        callback(resp,ref);
                    } else {
                        return resp;
                    }
                }
                //t.ui.hidePageSpinner();
                //t.form.hideFormSpinner();
            });
     },
	 
     makeBackgroundCall: function(page,data,callback,deepPath,spinner) {
            var ref=page;
            var data=data;
            var bgcheck=true;
            if(spinner) {
                 t.form.showFormSpinner();
            }
            var path = this.getServerPath(deepPath);
            var request = path(data).execute(function(resp) {
                if(resp.error) {
                    t.server.handleError(resp,ref,bgcheck);
                } else {
                    if(typeof callback != "undefined" && callback != null) {
                        callback(resp,page);
                    } else {
                        if(page == "getcategory") {
                            t.callback.loadServiceCategory(resp);
                        }
                    }
                }
                t.form.hideFormSpinner();
            });
            return request;
     },
	 
     handleError: function(data,ref,bgcheck) {
	
        if(!bgcheck) {
            console.log(data,ref);
            //with ref you can handle the error with particular requirements
            if(ref == "loginforuser") {
                    //CURRENT_PAGE = DASHBOARD;
                   // t.ui.navigatePage();
                   t.ui.handleLoginError(data); 
            } else if(ref == "referenceCodeVerification") {
                    //$('#spRefCode').focus();
                    $('#spRefCode').parents(".row").find('.input-holder').addClass("error-block");
                    $('#spRefCode').parents(".row").find('.error').html("Please enter the valid reference code");
                    $('#spRefCode').parents(".row").find('.error').css("opacity","1");
            } else if(ref == "registrationemailverfication") {
                    $('#spEmail').parents('.row').find('.input-holder').addClass('error-block');
                    $('#spEmail').parents('.row').find('.error').html("Email already exists, Please choose a different email id");
                    $('#spEmail').parents('.row').find('.error').css("opacity","1");
                     $('#spEmail').focus();
            } else if(ref == "updatesetting") {                
                t.set.settingErrorHandling(data);
            }else {                
                var serverErrorMessage=JSON.parse(data.message).ErrorMessage;
                t.ui.showToast(serverErrorMessage);
            }
        } else {
            if(ref == "serviceslotcreation") {
                console.log(data);
                t.schedule.handleServiceSlotError(data);
                // handle service slot error handling
            }
			if(ref == "manualpasswordupdate") {
				t.set.handleUpdatePwdError(data);
			}
        }
    },
    getServerPath: function(deepPath) {
        var path = gapi.client.protocall;
        deepPath = deepPath.split(".");
        for(var i=0; i<deepPath.length; i++) {
            console.log("path",deepPath[i]);
            path = path[deepPath[i]];
        }
        return path;
    },
	
    gotloginresponse: function(data) {
//userDetails
//name
//resultMap
console.log("myvinoth",data);

				
			    
			if(data.resultMap.TypeCode == '4002'){
			var error = "Your password is wrong, check whether the caplock is enabled";
				protocall.displaySpinner(false);
			$('.login-error').html(error);return false
			}
			else if(data.resultMap.TypeCode == '4005'){
			var error = "You are not a registered user";
				protocall.displaySpinner(false);
			$('.login-error').html(error);return false
			}
			else if(data.resultMap.TypeCode == '4007'){
			var error = "Provide your agencyId";
				protocall.displaySpinner(false);
			$('.login-error').html(error);return false
			}

	
	

		if(data.resultMap.TypeCode == '4001'){


			$("#homecontent").css("display", "block");
			localStorage.loggedIn    = "true";
                        localStorage.imageURl    = "http://2-dot-proto-call-test.appspot.com/file/";
                        localStorage.profilePic  = localStorage.imageURl+data.resultMap.userDetails.profilePicture; 
			localStorage.agencyEmail = data.resultMap.userDetails.agencyRepresentativeId.email;
                        localStorage.agencyLogo  = localStorage.imageURl+data.resultMap.agencyDetails.agencyLogo;
                        localStorage.agencyName  = data.resultMap.userDetails.firstName;
                        localStorage.agencyPhone = data.resultMap.agencyDetails.phone.number; 
			localStorage.agencyId    = data.resultMap.agencyId;
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
	
    imagesToServer: function(form, callback, isFormData, ref, qs,pagespinner) {        
        if(pagespinner) {
            t.ui.showPageSpinner()
        } else {
            t.form.showFormSpinner();
        }
        isFormData = (typeof isFormData=="undefined" || isFormData==false)?false:true;
        var formData;
        if(!isFormData) {
            var isValidSubmit;
            if(!isValidSubmit) {
                return;
            }
            formData = new FormData(form[0]);
        } else {
            formData = form;
            console.log(formData);
        }
        $.ajax({
            type: "POST",
            url: BASE_URL+qs,
            processData: false,
            contentType: false,
            data: formData,
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
            // do what ever you want with the server response
            if(pagespinner) {
                t.ui.hidePageSpinner();
            } else {
                t.ui.hidePageSpinner();
            }
            if(!isFormData) {
                p.resetForm(form);
            }
            callback(data, form, isFormData, ref);
            },
            error: function(data) {
                console.log(data);
                console.log(data.responseText);
                var errorCode=JSON.parse(data.responseText).ErrorCode;
                var errorMessage=JSON.parse(data.responseText).ErrorMessage;
                if(errorCode == "E4004") {
                    errorMessage="User already exist, Please try again with different User Name or Email-ID";
                }
                if(pagespinner) {
                    t.ui.hidePageSpinner();
                } else {
                    t.ui.hidePageSpinner();
                }
                t.ui.showToast(errorMessage);
            }
        });
        return false;
    },
    getCodeResponse: function(code) {
        var message="Somthing Went wrong, please try again";
        if(code == "E4004") {
                message="User already exist, Please try again with different User Name or Email-ID";
        } else if(code == "S2001") {
            message="Data Created Successfully...";
        }
        return message;
    },
    generalRequest: function(data,type, callback, qs,ref,pagespinner) {
        if(pagespinner) {
            t.ui.showPageSpinner();
        }
        $.ajax({
            type: type,
            retryMax: 3,
            timeout: 15000,
            url: BASE_URL+qs,
            data:data,
            xhrFields: {
               withCredentials: true
            },
            success: function(data) {
                if(callback) {
                    callback(data,ref);
                }
                if(pagespinner) {
                    t.ui.hidePageSpinner();
                }
            },
            error: function(jqXHRError,textStatus,errorThrown) {
                if(callback) {
                    callback(jqXHRError,ref);
                } 
                if(pagespinner) {
                    t.ui.hidePageSpinner();
                }
                t.ui.showToast(textStatus);
            }
        });
    },
};
