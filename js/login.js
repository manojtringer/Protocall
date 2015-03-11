var LoginTemplate = {
    login: {
        staticLoginTemplate: function () {
            var html = '<div id="id_loginfadeinout" class="ctrl-blk" style="display:none;position: relative;top: -32px;"><div class="login-logo" style="position: absolute;right: 488px;top: -6px;"><img src="images/Logo.png" alt="" ></div><div class="ctrl-login-box" style="position: absolute;top: 157px;right: 58px;"><div class="login-type-box1"><div class="mylistbox mysnap" data-type="superadmin">Super Admin</div><div class="mylistbox mysnap" data-type="admin" style="background: #f34f4e;" >Admin</div><div class="mylistbox mysnap" data-type="representatives">Representatives</div></div><div class="login-type-box2" style="position:absolute;"><div class="login-head">LOGIN</div><div class="login-error"></div><form method="post" onsubmit = "return loginmask();"><div class="box"><div class="userbox"><select name="usertype" id="usertype"> <optgroup label="Carriers"> <option value="saab">Acuity</option> </optgroup> <optgroup label="Agency"> <option value="49c03e36-f3f1-4132-8115-2f74c8a7bae3" selected>Brooker Insurance Agency</option></optgroup></select></div><div style="position:absolute;top: 93px;right: 27px;" class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div><div class="userbox"><input type="text" name="email" value="" placeholder="Email" id="email"/></div><div class="passbox"><input type="password" name="password" value="" placeholder="password" id="password"/></div><div class="logbutton snap" data-type ="login-yes" ><input type="submit" name="login" value="Login" class="loginbutton"/></div> <div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="dtresetpassword">Reset Password ?</div> </form></div></div></div></div>';
            return html;
        },
        superloginContent: function () {
            var html = '<div class="box" style="display:none;padding:0px;"> <div class="userbox"><input type="hidden" name="test" id="test" value=""/><input type="text" name="email" value="" placeholder="Email" id="email"> </div><div class="passbox"> <input type="password" name="password" value="" placeholder="password" id="password"> </div><div class="logbutton snap" data-type="login-yes"> <input type="submit" name="login" value="Login" class="loginbutton"> </div><div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="dtresetpassword"> Reset Password ? </div></div>';
            return html;
        },
        agencyloginContent: function () {
            var html = '<div class="box" style="display:none;padding:0px;"><div class="userbox"><select name="usertype" id="usertype"> <optgroup label="Carriers"><option value="saab">Acuity</option>  <optgroup label="Agency"> <option value="49c03e36-f3f1-4132-8115-2f74c8a7bae3" selected="">Brooker Insurance Agency</option></optgroup></select></div><div style="position:absolute;top: 93px;right: 27px;" class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div><div class="userbox"><input type="text" name="email" value="" placeholder="Email" id="email"></div><div class="passbox"><input type="password" name="password" value="" placeholder="password" id="password"></div><div class="logbutton snap" data-type="login-yes"><input type="submit" name="login" value="Login" class="loginbutton"></div> <div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="dtresetpassword">Reset Password ?</div> </div>';
            return html;
        },
        carrierloginContent: function () {
            var html = '<div class="box" style="display:none;padding:0px;"><div class="userbox"><select name="usertype" id="usertype"> <optgroup label="Carriers"> <option value="saab">Acuity</option>  </optgroup> <optgroup label="Agency"> <option value="49c03e36-f3f1-4132-8115-2f74c8a7bae3" selected="">Brooker Insurance Agency</option></optgroup></select></div><div style="position:absolute;top: 93px;right: 27px;" class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div><div class="userbox"><input type="text" name="email" value="" placeholder="Email" id="email"></div><div class="passbox"><input type="password" name="password" value="" placeholder="password" id="password"></div><div class="logbutton snap" data-type="login-yes"><input type="submit" name="login" value="Login" class="loginbutton"></div> <div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="dtresetpassword">Reset Password ?</div> </div>';
            return html;
        },
        staticSignUpTemplate: function () {

            var html = ' <div id="page" class="c_signup page" style="opacity:1;display:none;"> <div class="m-width"> <div class="root-logo-content p-absolute"> <img src="images/Logo.png" alt="" class="" /> </div> <div class="signup-root-content p-relative"> <div class="signup-parent-content p-relative"> <div class="o-signup p-absolute"> <div class="o-signup-icon sprite-im icon-profile-icon p-relative "></div></div> <div class="signup-text p-relative opensans-regular f-color-red f-sz-20 t-center">SIGN UP</div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left icon-profile-icon p-relative"></div> <input type="text" class="firstname-textbox left p-relative" placeholder="First Name"> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left icon-profile-icon p-relative"></div> <input type="text" class="firstname-textbox left p-relative" placeholder="Last Name"> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left icon-profile-icon p-relative"></div> <input type="text" class="firstname-textbox left p-relative" placeholder="Email ID"> <div id="id-emailid-infobox" class="c-info-icon sprite-im left icon-profile-icon p-absolute snap" data-type="dt-emailid-infobox" ><span class="right">This will be your user name</span></div> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left icon-profile-icon p-relative"></div> <input type="text" class="firstname-textbox left p-relative" placeholder="Password"> <div id="id-emailpassword-infobox" class="c-info-icon sprite-im left icon-profile-icon p-absolute snap" data-type="dt-password-infobox"><span>&nbsp;Min 10 characters: max 128 characters <br/> &nbsp; 1 digit <br/>&nbsp;&nbsp;need 1 uppercase <br/>&nbsp;&nbsp;need 1 lower case</span></div> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left icon-profile-icon p-relative"></div> <input type="text" class="firstname-textbox left p-relative" placeholder="Re-type Password"> </div> <div class="completed-button snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn"> COMPLETE SIGN UP</div> <div class="login-text p-relative opensans-regular f-color-green f-sz-16 t-center snap" data-type="login">Login ?</div> </div> </div> </div> </div>';
            return html;
        },
        staticResetPasswordTemplate: function () {
            var html = ' <div id="page" class="c_resetpassword page" style="opacity:1;display:none;"> <div class="m-width"> <div class="root-logo-content p-absolute"> <img src="images/Logo.png" alt="" class="" /> </div> <div class="signup-root-content p-relative"> <div class="signup-parent-content p-relative"> <div class="o-signup-reset p-absolute"> <div class="o-signup-icon sprite-im icon-profile-icon p-relative "></div></div> <div class="signup-text p-relative opensans-regular f-color-red f-sz-20 t-center">RESET PASSWORD</div> <div class="c-firstname p-relative border-all"> <input type="text" class="firstname-textbox left p-relative" placeholder="James12@gmail.com" readonly> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left icon-profile-icon p-relative"></div> <input type="password" class="firstname-textbox left p-relative" placeholder="New Password"> <div id="id-emailid-infobox" class="c-info-icon sprite-im left icon-profile-icon p-absolute snap" data-type="dt-emailid-infobox" ><span class="right">This will be new password</span></div> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left icon-profile-icon p-relative"></div> <input type="password" class="firstname-textbox left p-relative" placeholder="Re-type Password"> </div> <div class="completed-button snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="dtoverlayresetpassword"> RESET PASSWORD</div> <div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="login"> Login ?</div> </div> </div> </div> </div>';
            return html;
        }
    }
}

$(document).on("click", ".mysnap", function (e) {

    var $el = $(e.currentTarget);
    var type = $el.data("type") ? $el.data("type") : null;
    $(".mysnap").css("background", "lightgrey");
    $(this).css("background", "#f34f4e");

    //alert("type" + type);

    if (type == 'superadmin') {
        var loginContent = LoginTemplate.login.superloginContent();
        localStorage.LoginType = "SuperAdmin";
    }
    if (type == 'admin') {
        var loginContent = LoginTemplate.login.agencyloginContent();
        localStorage.LoginType = "Admin";
    }
    if (type == 'representatives') {
        var loginContent = LoginTemplate.login.carrierloginContent();
        localStorage.LoginType = "Representatives";
    }

    $(".box").empty();
    $(".box").append($(loginContent));
    $(".box").fadeIn("slow");

});