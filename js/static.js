var staticTemplate = {
    home: {
        staticFeedTemplate: function () {
            var html = '<div class="feed-block clr-fl">'
                    + '<div class="lf-block left">'
                    + '<div class="leftblk-spacing">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-det-pad p-relative">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box">'
                    + '<img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-det-b inline-block v-align-mid">'
                    + '<div class="top-b p-relative">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">incident alert</div>'
                    + '<div class="p-relative inline-block v-align-mid">'
                    + '<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div>'
                    + '</div>'
                    + '<div class="bot-b">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div>'
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
                    + '</div>'
                    + '<div class="rg-block left p-relative">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-docs-pad p-relative docs-block t-center">'
                    + '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc">'
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
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'


                    + '<div class="feed-block clr-fl">'
                    + '<div class="lf-block left">'
                    + '<div class="leftblk-spacing">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-det-pad p-relative">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box">'
                    + '<img src="http://www.wallpaper-valley.com/animal/animal_13.jpg" alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-det-b inline-block v-align-mid">'
                    + '<div class="top-b p-relative">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">incident alert</div>'
                    + '<div class="p-relative inline-block v-align-mid">'
                    + '<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div>'
                    + '</div>'
                    + '<div class="bot-b">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div>'
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
                    + '</div>'
                    + '<div class="rg-block left p-relative">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-docs-pad p-relative docs-block t-center">'
                    + '<a href="/changecoverage" class="snap feed-addRemove-block inline-block v-align-mid f-sz-14 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
                    + '<div class="t-center">'
                    + '<div class="sprite-im inline-block v-align-mid message-green-icon">&nbsp;</div>'
                    + '<span class="feed-addRemove-text inline-block v-align-mid t-caps">Add / change coverage on home</span>'
                    + '</div>'
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            return html;
        },
        staticPoliciesFeedTemplate: function () {
            var html = '<div class="feed-block clr-fl">'
                    + '<div class="lf-block left">'
                    + '<div class="leftblk-spacing">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-det-pad p-relative">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box">'
                    + '<img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-det-b inline-block v-align-mid">'
                    + '<div class="top-b p-relative">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">policy alert</div>'
                    + '<div class="p-relative inline-block v-align-mid">'
                    + '<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div>'
                    + '</div>'
                    + '<div class="bot-b">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div>'
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
                    + '</div>'
                    + '<div class="rg-block left p-relative">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-docs-pad p-relative docs-block t-center">'
                    + '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc">'
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
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            return html;
        },
        staticArchiveFeedTemplate: function () {
            var html = '<div class="feed-block clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="feed-det bg-color-dblue p-relative"> <div class="feed-det-pad p-relative"> <div class="feed-pic-b inline-block v-align-mid"> <div id="" class="feed-user-pic-box"> <input type="checkbox" id="feedcheck" name="" class="checkbox"><label for="feedcheck" class="feed-label"></label> <img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"> </div></div><div class="feed-user-det-b inline-block v-align-mid"> <div class="top-b p-relative"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">policy alert</div><div class="p-relative inline-block v-align-mid"> <div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div></div><div class="bot-b"> <div class="p-relative inline-block v-align-bot"> <div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"> <div class="myshare"> <div class="inner-share-spacing snap" data-type="share"> <div class="t-center mid-align"> <div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span> </div></div></div><div class="myview"> <div class="inner-view-spacing snap" data-type="view"> <div class="t-center mid-align"> <div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span> </div></div></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="feed-det bg-color-dblue p-relative"> <div class="feed-docs-pad p-relative docs-block t-center"> <a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im text-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Text</div></div></a> <a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Photos</div></div></a> <a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text bold">Voice</div></div></a> </div></div></div></div>';
            return html;
        },
        matchReleaseClaimTemplate: function (contentValue) {
            var html = '<h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2>'
                    + '<div class="o-sub-content p-relative">'
                    + '<div class="alert-mess-text f-sz-18 t-center opensans-regular bold">'+contentValue+'</div>'
                    + '<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay">Done</div>'
                    + '</div>';
            return html;
        },
        sendAppLinkTemplate: function (data) {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Send app link to the customers</h2> <div class="o-sub-content-top border-bot p-relative"> <div class="link-content p-relative"> <div class="link opensans-regular f-sz-18">Link</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder=' + data + ' /> </div> </div> <div class="link-content p-relative"> <div class="message opensans-regular f-sz-18">Message</div> <div class="message-box textBox-placeholder-italic border-all"> <textarea draggable="false" class="textarea opensans-regular" placeholder="Type message" maxlength="170"></textarea> </div> </div> </div> '
                    + ' <div class="o-sub-content p-relative"> <div class="success2" style=" display:none; color: green;"></div><div class="error2" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic"> <input type="search"'
                    + 'class="opensans-regular" id="id-overlaysendapplink"  placeholder="Search.." onkeyup="sendAppLinkkeyup(event)"  onkeypress="sendAppLinkkeyup(event)" /> <div  id="id-sendapplinksearchicon" class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + 'f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<select id="timepicker" class="none-1 opensans-regular left" onchange="sendAppLinkSortbyBox1()"> <option selected> None </option> <option>Alphabetical</option> <option>City,State</option> </select>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <select id="timepicker2" class="none-1 opensans-regular left" onchange="sendAppLinkSortbyBox2()"> <option selected> None </option> <option>Select All</option> <option>Section A</option> <option>Section B</option><option>Section C</option><option>Section D</option><option>Section E</option></select>  '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY,STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form>';
            return html;
        },
        editAgencyPicTemplate: function () {
            var html = '<div class="header-panel border-bot"> <div class="left-content-panel t-left left f-color-green f-sz-18 opensans-regular">'
                    + 'Agency Profile</div> <div class="right-content-panel t-right right f-color-red f-sz-12 opensans-regular snap" id="id-manageagency" data-type="manage_agency"> <i>Manage Agency</i></div>'
                    + '</div> <div class="o-sub-content p-relative"> <div class="carriers-left-content left "> <div class="profile-pic-content"> '
                    + '<div id="id-agency-logo" class="agency-logo p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="" id="id-agencyprofilelogo" class="agencyprofilelogo"> '
                    + '</div> </div> </div> <div class="carriers-right-content left "> <div class="c-agency-logo"> '
                    + '<input type="text" id="id-agency-logo-name" class="txt-agency-logo-name opensans-regular f-sz-14" value="Agency Logo.jpg" disabled> '
                    + '<input type="file" style="display:none;" id="inputfile1" onchange="readBrowserURL(this)" /> '
                    + '<div class="browse-button-content p-absolute f-color-w f-sz-16 opensans-regular" onclick="javascript:document.getElementById(\'inputfile1\').click();"> Browse </div>'
                    + '</div> <div class="c-agency-name" style="display:none;"> <input id="agencyNameInOverlay" type="text" class="txt-agency-name opensans-regular f-sz-14" value="' + sessionStorage.agencyName + '"> </div>'
                    + '<div id="agencyEmailOverlay" class="c-agency-emailid" style="display:none;"> <input type="text" class="txt-agency-emailid opensans-regular f-sz-14" value="' + sessionStorage.agencyEmail + '"> </div> </div>'
                    + '</div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="agencyPicEdit">Save</div>';
            return html;
        },
        passwordResetAlertTemplate: function () {
            var html = '<h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2> <div class="o-sub-content p-relative"> <div class="alert-mess-text f-sz-18 t-center opensans-regular bold">Do you wish to Reset your Password ?</div> <div class="o-btn-yes snap opensans-regular left p-relative t-center bg-color-green f-color-w" data-type="dtoverlayrestpassyes">Yes</div> <div class="o-btn-no snap opensans-regular left p-relative t-center bg-color-green f-color-w" data-type="dtoverlayrestpassno">No</div> </div> ';
            return html;
        },
        passwordResetEmailAlertTemplate: function () {
            var html = ' <h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2> <div class="o-sub-content p-relative"> <div class="alert-mess-text f-sz-18 t-center opensans-regular bold">Your request has been send to the admin.You will <br> receive reset password mail shortly.</div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Done</div> </div> ';
            return html;
        },
        pushMessageTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Push Message</h2> <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="c-textarea text-box-outer textBox-placeholder-italic"> <textarea draggable="false" id="idpushmessage-textarea" class="textarea opensans-regular" placeholder="Type message" maxlength="170"></textarea> </div> <div class="delivery-box clr-fl"> <div class="delivery-time left opensans-regular">Delivery Time</div> <div class="deliverytime-content left opensans-regular clr-fl"> <div class="now left"> <input id="radio-button-now" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-now\')"> <span class="txt-now opensans-regular f-sz-15" onclick="checkboxStatus(\'radio-button-now\')">Now</span> </div> <div class="later left"> <input id="radio-button-later" type="radio" value="later" onclick="checkboxStatus(\'radio-button-later\')"> <span class="txt-later opensans-regular f-sz-15" onclick="checkboxStatus(\'radio-button-later\')">Later</span> </div> </div> </div> </div> <div class="later-box clr-fl" style="display: none"> <div class="select-date-content left opensans-regular"> <div class="select-date left opensans-regular">Select Date</div> <div class="text-box-outer textBox-placeholder-italic left push-select-dropdown border-all p-relative"> '
                    + '<input id="datepicker" type="date" size="9" class="c-datepicker opensans-regular left" placeholder="22-11-2014" editable="false"/> <div class="sprite-im datepicker-icon p-absolute"></div> </div> </div> <div class="time-content left opensans-regular clr-fl"> <div class="time left opensans-regular">Time</div> <div class="text-box-outer textBox-placeholder-italic left time-dropdown-1 border-all p-relative" data-type="dt-time-dropdown"> '
                    + '<select id="pushmessagetimepicker" class="none-1 opensans-regular left"> </select> <div class="sprite-im drop-down-icon push-drop-down-icon-1 p-absolute"></div> </div> <div class="text-box-outer textBox-placeholder-italic left time-dropdown-2 border-all p-relative" data-type="dt-am-pm-dropdown"> <select id="ampmtimepicker" class="none-1 opensans-regular left"> <option selected> AM </option> <option>PM</option> </select> <div class="sprite-im drop-down-icon push-drop-down-icon-2 p-absolute"></div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn-pushmessage">Send</div> </div>';
            return html;
        },
        privacyTemplate: function () {
            var html = '  <h2 class="t-center f-color-green opensans-regular" style="">Privacy</h2> <div class="o-sub-content p-relative"> <h3 class="enable-text t-center f-sz-18 opensans-regular "><b>Enable / disable privacy option for your agency</b></h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-public" class="left" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-public\')">Make all profile public <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> '
                    + '<div id="id-switchtop1-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick=""> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick=""> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-private" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-private\')"> Make all profile private <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id-switchtop2-container" class="bootstrap-switch-container" style="margin-left: 50px;"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick=""> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick=""> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-custom" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-custom\')">Custom <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on" style="display:none;"> <div id="id-switchtop3-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(-1,\'id-switch-on\', \'id-switchtop3-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(-1,\'id-switch-off\', \'id-switchtop3-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <div class="text-box-outer textBox-placeholder-italic border-all"> '
                    + ' <input id="id-overlayprivacy" type="search" class="opensans-regular" placeholder="Search.." onkeyup="privacykeyup(event)"  onkeypress="privacykeyup(event)" /> <div id="id-privacysearchicon" class="c-privacysearch-icon search-icon sprite-im p-absolute"></div></div> <div class="success1" style=" display:none; color: green;"></div><div class="error1" style=" display:none; color: red;"></div> <div class="rep-block"> <div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold" style="width:25%;">Member Names</div> <div class="nameRepId opensans-regular t-upper left text-color-overlay bold">Rep ID</div> <div class="name-title opensans-regular t-upper right text-color-overlay bold">Private / Public</div> </div> <div class="rep-content-blk"> <form> '

                    ;
            return html;
        },
        /*Added by Naveen - Start */
        /*Naveen 23-2-2015 Chnage start*/
        showPhotsOverlayTemplate: function (alertID) {
            RESPONSE.LOCATION = "";
            RESPONSE.MEDIAIDFORPICTURE = [], RESPONSE.IMAGEURLS = [], RESPONSE.PICTUREDETAILS = [], RESPONSE.IMGETEXT = [];
            var numberOfPictures = 0, pictureThumbNailViewHTML = "", imageTextSavePrintHTML = "", originalImageHTML = "", sliderBar = "";
            console.log("HOMEPAGERESPONSE.RECURRINGALERTDFEEDS showPhotsOverlayTemplate", HOMEPAGERESPONSE.RECURRINGALERTDFEEDS);
            if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                photoFeedValues = HOMEPAGERESPONSE.RELATEDFEEDS;
            } else {
                photoFeedValues = HOMEPAGERESPONSE.RECURRINGALERTDFEEDS;
            }
            $.each(photoFeedValues, function (index, alertDetailsValue) {
                var alerIDValue = alertDetailsValue.alertDetails.alertId;
                if (alertID == alertDetailsValue.alertDetails.alertId) {
                    console.log("condition satisfied alertDetailsValue", alertDetailsValue);
                    numberOfPictures = alertDetailsValue.NoofPictureRecord;
                    RESPONSE.PICTUREDETAILS = alertDetailsValue.PictureDetails;
                    if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                        RESPONSE.LOCATION = HOMEPAGERESPONSE.COMMONUSERDETAILS.residentialCity;
                    } else {
                        RESPONSE.LOCATION = alertDetailsValue.userDetails.residentialCity;
                    }

                    /* if (alertDetailsValue.userDetails.residentialCity != undefined && alertDetailsValue.userDetails.residentialCity != null && alertDetailsValue.userDetails.residentialCity != "") {
                     RESPONSE.STATENAME.push("," + alertDetailsValue.userDetails.residentialCity);
                     } else {
                     RESPONSE.STATENAME.push(" ");
                     } */
                    console.log("noOfPictureRecords", numberOfPictures);
                }
            });

            RESPONSE.STATENAME = [];
            //console.log("RESPONSE.PICTUREDETAILS Length", RESPONSE.PICTUREDETAILS.length);
            console.log("numberOfPictures", numberOfPictures);
            $.each(RESPONSE.PICTUREDETAILS, function (i, element) {
                console.log("media id", element.mediaId);
                RESPONSE.MEDIAIDFORPICTURE.push(element.mediaId);
                RESPONSE.IMAGEURLS.push(element.file);
                RESPONSE.IMGETEXT.push(element.fileName);
            });
            /* if (numberOfPictures > 5) {
             sliderBar = '<div id="slider-vertical" style="float:left;position: absolute;height: 332px;left: 96px;top: 10px;">'
             + '</div>';
             } */
            for (var i = 0, j = 0; i <= numberOfPictures - 1; i++, j++) {
                console.log("in for loop");
                var pictureValue = HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.IMAGEURLS[i];
                pictureThumbNailViewHTML = pictureThumbNailViewHTML
                        + '<div style="margin-bottom: 10px;cursor:pointer;" class="overalyPhots" data-type="thumbNail" name=' + RESPONSE.MEDIAIDFORPICTURE[i] + '><img src=' + pictureValue + ' style="max-width:100%;" /></div>';
            }
            /* imageTextSavePrintHTML = imageTextSavePrintHTML
             + '<span class="spanCLassElement t-left f-color-green opensans-regular" style="margin:0px">' + RESPONSE.IMGETEXT[0] + '</span><span class="spanCLassElement f-italic" style="margin:0px;color:#939393;font-size:11px">,New jersy</span>'; */
            //originalImageHTML = originalImageHTML + '<div id="viewingImage"><img src=' + HOMEPAGERESPONSE.PROFILEAPI+RESPONSE.IMAGEURLS[0] + ' /></div>';
            /* console.log("originalImageHTML", originalImageHTML); */

            console.log("showPhotsOverlayTemplate");
            var html = '<div class="o-sub-content p-relative">'
                    + '<div style="position:relative;width:100%;">'
                    /*Thumbnail Image */
                    + '<div style="min-width: 17%;width: 17%;overflow: auto;position: absolute;left: 10px;height: 476px;">'
                    + '<div style="width:80%;margin:auto;max-height: 431px;" id="thumbNailViewForImages">'
                    + pictureThumbNailViewHTML
                    + '</div>'
                    + '</div>'
                    /*Thumbnail Image */
                    + '<div style="width:80%;background:white;position: absolute;left: 131px;min-height:476px;">'
                    + '<div style="height:70px;color:#585858;position: absolute;;width: 100%;background:white;">'
                    + '<div style="width:50%;float:left;margin-top:25px;margin-left:25px;color:#939393" class="opensans-regular">'
                    + '<span id="imageinformation" style="color:rgb(47,156,161);">' + RESPONSE.IMGETEXT[0] + ',</span><span style="margin-left:5px;">' + RESPONSE.LOCATION + '</span>'
                    + '</div>'
                    + '<a id="downloadImageLink" class="sprite-im download-icon" style="float:left;margin-left:20px;margin-top:20px;" href=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.IMAGEURLS[0] + ' download>&nbsp;</a>'
                    + '<a id="printImageICON" class="sprite-im printImage-icon" style="float:left;margin-left:20px;margin-top:20px;" href="#" data-type="printPage">&nbsp;</a>'
                    + '</div>'
                    + '<div style="width:100%;position: absolute;top: 69px;background:white;border-top:2px solid #939393">'
                    + '<div style="width:80%;position: absolute;  margin: auto;  top: 35px;  left: 17px;">'
                    + '<div style="margin: auto;position: absolute;top: 31px;left: 113px;">'
                    + '<div style="max-height: 220px;  max-width: 300px;  margin-left: auto;  margin-right: auto;" id="viewImage">'
                    + '<img src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.IMAGEURLS[0] + ' style="max-height: 220px;max-width: 300px;"/>'
                    + '</div>'
                    + '<div style="position: absolute;top: 77px;">'
                    + '<div style="position: absolute;left: -78px;display:none;" id="previousICON">'
                    + '<a href="javascript:void(0)" class="overalyPhots previous" data-type="previous"><img src="images/backwardArrow.png" /></a>'
                    + '</div>'
                    + '<div style="position: absolute;right: -353px;top:10px;" id="nextICON">'
                    + '<a href="javascript:void(0)" class="overalyPhots next" data-type="next"><img src="images/frontArrow.png" /></a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            return html;
        },
        /*Naveen 23-2-2015 Chnage end*/
        showAudioOverlayTemplate: function (alertID) {
            console.log("in audio");
            RESPONSE.STATENAME = "";
            RESPONSE.AUDIODETAILS = [], RESPONSE.MEDIAID = [], RESPONSE.AUDIOTEXT = [], RESPONSE.TIMESTAMPAUDIO = [], RESPONSE.AUDIOURLS = [];
            var numberOfAudio = 0, voiceThumbNailViewHTML = "", resultThumbNail = "", originalAudioFileHTML = "", resultOriginaAudioFile = "", sliderBar = "", voiceFeedValues = {};
            if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                voiceFeedValues = HOMEPAGERESPONSE.RELATEDFEEDS;
            } else {
                voiceFeedValues = HOMEPAGERESPONSE.RECURRINGALERTDFEEDS;
            }
            $.each(voiceFeedValues, function (index, alertDetailsValue) {
                var alerIDValue = alertDetailsValue.alertDetails.alertId;
                if (alertID == alertDetailsValue.alertDetails.alertId) {
                    console.log("condition satisfied alertDetailsValue", alertDetailsValue);
                    numberOfAudio = alertDetailsValue.NoofAudioRecord;
                    RESPONSE.AUDIODETAILS = alertDetailsValue.AudioDetails;
                    if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                        RESPONSE.STATENAME = HOMEPAGERESPONSE.COMMONUSERDETAILS.residentialCity;
                    } else {
                        RESPONSE.STATENAME = alertDetailsValue.userDetails.residentialCity;
                    }
                    /* if (element.residentialCity != undefined && element.residentialCity != null && element.residentialCity != "") {
                     RESPONSE.STATENAME.push("," + element.residentialCity);
                     } else {
                     RESPONSE.STATENAME.push(" ");
                     } */
                    //console.log("noOfPictureRecords",numberOfPictures);
                }
            });
            console.log("audioDetailsArray", RESPONSE.AUDIODETAILS.length);
            RESPONSE.AUDIODETAILTIME = [];
            $.each(RESPONSE.AUDIODETAILS, function (i, element) {
                audioTimeStamp = element.lastModified;
                audioTime = moment(Number(audioTimeStamp)).format('h:mmA');
                var timeValue = element.lastModified;
                console.log("media id", element.mediaId);

                RESPONSE.MEDIAID.push(element.mediaId);
                RESPONSE.AUDIOTEXT.push(element.fileName);
                RESPONSE.TIMESTAMPAUDIO.push(audioTime);
                RESPONSE.AUDIOURLS.push(element.file);
                /* if (element.residentialCity != undefined && element.residentialCity != null && element.residentialCity != "") {
                 RESPONSE.STATENAME.push("," + element.residentialCity);
                 } else {
                 RESPONSE.STATENAME.push(" ");
                 } */
                RESPONSE.AUDIODETAILTIME.push(JSON.parse(JSON.stringify(moment(Number(timeValue)).format("Do MMM YY, h:mm A")).replace("th", " ")));
            });
            console.log("RESPONSE.MEDIAID", RESPONSE.MEDIAID);
            /* if (numberOfAudio > 5) {
             sliderBar = '<div id="slider-vertical" style="float:left;position: absolute;height: 332px;left: 96px;top: 10px;">'
             + '</div>';
             } */
            for (var i = 0, j = 0; i <= numberOfAudio - 1; i++, j++) {
                var audioValue = HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[i];
                var audioValueToBeDownloaded = HOMEPAGERESPONSE.PROFILEAPIFORAUDIO + RESPONSE.AUDIOTEXT[0] + ".m4a?key=" + RESPONSE.AUDIOURLS[0];
                //console.log();
                voiceThumbNailViewHTML = voiceThumbNailViewHTML
                        + '<div style="text-align:center;color:#939393;margin-bottom:10px;background:white;cursor:pointer;" class="opensans-regular audioOverlay" data-type="thumbNail" name=' + RESPONSE.MEDIAIDFORPICTURE[i] + '>'
                        + '<img src="images/voiceRecording.png" style="max-width:30px;"/>'
                        + '<p id="mediaID" name=' + audioValue + '>' + RESPONSE.MEDIAID[i] + '</p>'
                        + '<p style="">' + RESPONSE.TIMESTAMPAUDIO[i] + '</p>'
                        + '</div>';
            }
            console.log("voiceThumbNailViewHTML", voiceThumbNailViewHTML);
            var html = '<div class="o-sub-content p-relative">'
                    + '<div style="position:relative;width:100%;">'
                    /*Thumbnail voice */
                    + '<div style="min-width: 17%;width: 17%;overflow: auto;position: absolute;left: 10px;height: 476px;">'
                    + '<div style="width:80%;margin:auto;max-height: 431px;" id="thumbNailViewForVoice">'
                    + voiceThumbNailViewHTML
                    + '</div>'
                    + '</div>'
                    /*Thumbnail voice */
                    + '<div style="width:80%;background:white;position: absolute;left: 131px;min-height:476x;">'
                    + '<div style="height:70px;color:#585858;position: absolute;;width: 100%;background:white;>'
                    + '<div style="height:70px;height:70px;color:#585858;position: absolute;;width: 100%;background:white;">'
                    + '<div style="width:50%;float:left;margin-top:25px;margin-left:25px;color:#939393" class="opensans-regular">'
                    + '<span id="voiceinformation" style="color:rgb(47,156,161);">' + RESPONSE.AUDIOTEXT[0] + '</span><span id="locationInformation" style="color:rgb(47,156,161);font-style:italic;font-size:12px;">,&nbsp' + RESPONSE.STATENAME + '</span>'
                    + '</div>'
                    + '<a id="downloadAudioLink" style="float:left;margin-left:20px;margin-top:20px;" href=' + audioValueToBeDownloaded + ' class="sprite-im download-icon" download>&nbsp;</a>'
                    + '<div style="width:50%;float:left;margin-top:-15px;margin-left:25px;color:#939393" class="audiodetailestime">' + RESPONSE.AUDIODETAILTIME[0] + '</div>'
                    + '</div>'
                    + '<div style="width:100%;position: absolute;top: 69px;background:white;border-top:2px solid #939393;min-height:406px;">'
                    + '<div style="width:80%;position: absolute;  margin: auto;  top: 160px;  left: 120px;" id="viewVoice">'
                    + '<audio id="music" preload="none" controls style="">'
                    + '<source id="id-media_source" src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[0] + '>'
                    + '<source id="id-media_source" src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[0] + '>'
                    + '</audio>'
                    + '</div>'


                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';


            return html;
        },
        /*Naveen 23-2-2015 Changes Start */
        showDocumentOverlayTemplate: function (alertID) {
            RESPONSE.NAMES = [], RESPONSE.OTHERPARTYNAMES = [], RESPONSE.ROLE = [], RESPONSE.PHONE = [], RESPONSE.ADDRESS = [], RESPONSE.INSURANCECO = [], RESPONSE.POLICY = [], RESPONSE.VEHICLENO = [], RESPONSE.VEHICLEMODEL = [], RESPONSE.DRIVINGLICENCESTATE = [], RESPONSE.DRIVINGLICENCENUMBER = [], RESPONSE.INJURIES = [], RESPONSE.OTHERINFORMATION = [], RESPONSE.OTHERPARTYIDS = [];
            var resultThumbNail = "", noofDocuments = 0, sliderBar = "", resultDocumentFile = "", documentThumbNailViewHTML = "", originalImageHTML = "", imageTextSavePrintHTML = "", docFeedValues = {};
            if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                docFeedValues = HOMEPAGERESPONSE.RELATEDFEEDS;
            } else {
                docFeedValues = HOMEPAGERESPONSE.RECURRINGALERTDFEEDS;
            }
            $.each(docFeedValues, function (i, element) {
                var alerIDValue = element.alertDetails.alertId;
                if (alertID == element.alertDetails.alertId) {
                    console.log("in static method", element);
                    console.log("Audio Details", element.OtherPartyDetails);
                    noofDocuments = element.NoofOtherPartyRecord;
                    console.log("noofDocuments", noofDocuments);
                    RESPONSE.OTHERPARTYDETAILS = element.OtherPartyDetails;
                }
                //audioDetailsArray.push(element.AudioDetails);
            });
            console.log("RESPONSE.OTHERPARTYDETAILS", RESPONSE.OTHERPARTYDETAILS.length);
            $.each(RESPONSE.OTHERPARTYDETAILS, function (i, element) {
                console.log("media id", element.fileName);
                console.log("role", element.role);
                //console.log("phone.number", element.phone.number);
                //console.log("address.address", element.address.address);
                console.log("carrier", element.carrier);
                console.log("policyNumber", element.policyNumber);
                console.log("vehicleIdentificationNumber", element.vehicleIdentificationNumber);
                console.log("model", element.model);
                console.log("driverLicenseState", element.driverLicenseState);
                console.log("driverLicenseNumber", element.driverLicenseNumber);
                console.log("injuries", element.injuries);
                console.log("otherInformation", element.otherInformation);
                //RESPONSE.OTHERPARTYIDS.push(element.otherPartyId);
                if (element.otherPartyId !== undefined) {
                    RESPONSE.OTHERPARTYIDS.push(element.otherPartyId);
                }
                console.log("element.otherPartyName", element.otherPartyName);
                if (element.otherPartyName !== undefined) {
                    console.log("if");
                    RESPONSE.OTHERPARTYNAMES.push(element.otherPartyName);
                } else {
                    RESPONSE.OTHERPARTYNAMES.push("Nil");
                }
                if (element.fileName !== undefined) {
                    console.log("if");
                    RESPONSE.NAMES.push(element.fileName);
                } else {
                    RESPONSE.NAMES.push("Nil");
                }
                if (element.role !== undefined) {
                    RESPONSE.ROLE.push(element.role);
                } else {
                    RESPONSE.ROLE.push("Nil");
                }
                if (element.phone !== undefined) {
                    RESPONSE.PHONE.push(element.phone.number);
                } else {
                    RESPONSE.PHONE.push("Nil");
                }
                if (element.address !== undefined) {
                    RESPONSE.ADDRESS.push(element.address.address);
                } else {
                    RESPONSE.ADDRESS.push("Nil");
                }
                if (element.carrier !== undefined) {
                    RESPONSE.INSURANCECO.push(element.carrier);
                } else {
                    RESPONSE.INSURANCECO.push("Nil");
                }
                if (element.policyNumber !== undefined) {
                    RESPONSE.POLICY.push(element.policyNumber);
                } else {
                    RESPONSE.POLICY.push("Nil");
                }
                if (element.vehicleIdentificationNumber !== undefined) {
                    RESPONSE.VEHICLENO.push(element.vehicleIdentificationNumber);
                } else {
                    RESPONSE.VEHICLENO.push("Nil");
                }
                if (element.model !== undefined) {
                    RESPONSE.VEHICLEMODEL.push(element.model);
                } else {
                    RESPONSE.VEHICLEMODEL.push("Nil");
                }
                if (element.driverLicenseState !== undefined) {
                    RESPONSE.DRIVINGLICENCESTATE.push(element.driverLicenseState);
                } else {
                    RESPONSE.DRIVINGLICENCESTATE.push("Nil");
                }
                if (element.driverLicenseNumber !== undefined) {
                    RESPONSE.DRIVINGLICENCENUMBER.push(element.driverLicenseNumber);
                } else {
                    RESPONSE.DRIVINGLICENCENUMBER.push("Nil");
                }
                if (element.injuries !== undefined) {
                    RESPONSE.INJURIES.push(element.injuries);
                } else {
                    RESPONSE.INJURIES.push("Nil");
                }
                if (element.otherInformation !== undefined) {
                    RESPONSE.OTHERINFORMATION.push(element.otherInformation);
                } else {
                    RESPONSE.OTHERINFORMATION.push("Nil");
                }
            });
            /* if (noofDocuments > 4) {
             sliderBar = '<div id="slider-vertical" style="float:left;position: absolute;height: 332px;left: 96px;top: 10px;">'
             + '</div>';
             } */
            var textDownload = HOMEPAGERESPONSE.TEXTDOWNLOADURL;
            for (var i = 0, j = 0; i <= noofDocuments - 1; i++, j++) {
                console.log("in for loop");
                documentThumbNailViewHTML = documentThumbNailViewHTML
                        + '<div style="text-align:center;color:#939393;margin-bottom: 10px;background: white;height: 90px;cursor:pointer;" class="opensans-regular overlayDocs" data-type="thumbNail"><p style="padding-top:30px;" id=' + RESPONSE.OTHERPARTYIDS[i] + '>' + RESPONSE.NAMES[i] + '</p></div>';
            }
            /* docTextSavePrintHTML = '<span class="spanCLassElement t-left f-color-green opensans-regular" style="margin:0px">' + RESPONSE.NAMES[0] + '</span>'; */
            originalDocumentHTML = '<div class="leftDiv">'
                    + '<p id="textOverlayName">'
                    + '<span class="firstSpan">Name</span>'
                    + '<span class="secondSpan">' + RESPONSE.OTHERPARTYNAMES[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayRole">'
                    + '<span class="firstSpan">Role</span>'
                    + '<span class="secondSpan">' + RESPONSE.ROLE[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayPhone">'
                    + '<span class="firstSpan">Phone</span>'
                    + '<span class="secondSpan">' + RESPONSE.PHONE[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayAddress">'
                    + '<span class="firstSpan">Address</span>'
                    + '<span class="secondSpan">' + RESPONSE.ADDRESS[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayInsurence">'
                    + '<span class="firstSpan">Insurance co</span>'
                    + '<span class="secondSpan">' + RESPONSE.INSURANCECO[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayPolicy">'
                    + '<span class="firstSpan">Policy #</span>'
                    + '<span class="secondSpan">' + RESPONSE.POLICY[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayModel">'
                    + '<span class="firstSpan">Auto Yr/make/model</span>'
                    + '<span class="secondSpan">' + RESPONSE.VEHICLEMODEL[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayAutoLicensePlate">'
                    + '<span class="firstSpan">Auto License plate state & Number</span>'
                    + '<span class="secondSpan">' + RESPONSE.VEHICLENO[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayDriversLicenseState">'
                    + '<span class="firstSpan">Drivers License State</span>'
                    + '<span class="secondSpan">' + RESPONSE.DRIVINGLICENCESTATE[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayDriversLicenseNumber">'
                    + '<span class="firstSpan">Drivers License Number</span>'
                    + '<span class="secondSpan">' + RESPONSE.DRIVINGLICENCENUMBER[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayInjuries">'
                    + '<span class="firstSpan">Injuries</span>'
                    + '<span class="secondSpan">' + RESPONSE.INJURIES[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayOtherInfo">'
                    + '<span class="firstSpan">Other info</span>'
                    + '<span class="secondSpan">' + RESPONSE.OTHERINFORMATION[0] + '</span>'
                    + '</p>'
                    + '</div>';
            var firstTextDownload = textDownload + RESPONSE.OTHERPARTYIDS[0];
            var html = '<div class="o-sub-content p-relative">'
                    + '<div style="position:relative;width:100%;">'
                    /*Thumbnail Text */
                    + '<div style="min-width: 17%;width: 17%;overflow: auto;position: absolute;left: 10px;height: 476px;">'
                    + '<div style="width:80%;margin:auto;max-height: 431px;" id="thumbNailViewForText">'
                    + documentThumbNailViewHTML
                    + '</div>'
                    + '</div>'
                    /*Thumbnail Text */
                    + '<div style="width:80%;background:white;position: absolute;left: 131px;min-height:476x;">'
                    + '<div style="height:70px;color:#585858;position: absolute;;width: 100%;background:white;>'
                    + '<div style="height:70px;height:70px;color:#585858;position: absolute;;width: 100%;background:white;">'
                    + '<div style="width:50%;float:left;margin-top:25px;margin-left:25px;color:#939393" class="opensans-regular">'
                    + '<span id="textinformation" style="color:rgb(47,156,161);">' + RESPONSE.NAMES[0] + '</span>'
                    + '</div>'
                    + '<a id="copyTextOverlay" class="sprite-im copy-clipBoard-icon" style="float:left;margin-left:20px;margin-top:20px;" href="javascript:void(0)" data-type="copyText">&nbsp;</a>'
                    + '<a id="downloadTextLink" class="sprite-im download-icon" style="float:left;margin-left:20px;margin-top:20px;" href=' + firstTextDownload + ' download>&nbsp;</a>'
                    + '<a id="printTextOverlay" class="sprite-im printImage-icon" style="float:left;margin-left:20px;margin-top:20px;" href="javascript:void(0)" data-type="printPage">&nbsp;</a>'
                    + '</div>'
                    + '<div style="width:100%;position: absolute;top: 69px;background:white;border-top:2px solid #939393;min-height:406px;">'
                    + '<div style="width:80%;position: absolute;  margin: auto;  top: 33px;  left: 43px;" id="viewText">'
                    + originalDocumentHTML
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            /* var html = '<div class="o-sub-content p-relative">'
             + '<div>'
             + '<div id="thumbNailDocs">'
             + documentThumbNailViewHTML
             + '</div>'
             + '</div>'
             //+ sliderBar
             + '<div style="width: 80%;float:left;padding:10px 0px;height: 400px;position: fixed;left: 120px;top: 15px;background: #fff;">'
             + '<div style="border-bottom: 1px solid #b9b8b8;position: absolute;padding-bottom: 15px;left: 16px;width: 485px;" id="docinformation">'
             + docTextSavePrintHTML
             +'<a href="#">'
             + '<img src="images/saveImage.png" style="width:20px;height:20px;position: absolute;right: 170px;"/>'
             +'</a>'
             +'<a data-type="printPage" class="printPageClass" href="#">'
             + '<img src="images/printImage.png" style="width:20px;height:20px;position: absolute;right: 135px;"/>'
             +'</a>'
             + '</div>'
             + '<div id="originalDocDIV">'
             + originalDocumentHTML
             + '</div>'
             + '</div>'; */
            return html;
            /* var html = '<div class="o-sub-content p-relative" style = "background-color:none;">'
             + '<div>'
             + '<div style="float:left;" id="audioThumbNailView">'
             + documentThumbNailViewHTML
             + '</div>'
             + sliderBar
             + resultDocumentFile
             + '</div>'
             + '</div>';
             return html; */
        },
        /*Naveen 23-2-2015 Changes End */
        /*Added by Naveen - End */

        shareWithRepTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Share with Representatives</h2>'
                    + ' <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic"> <input type="search"'
                    + 'class="opensans-regular"  id="id-overlaysharewithrep"  placeholder="Search.." onkeyup="sharewithrepkeyup(event)"  onkeypress="sharewithrepkeypress(event)" /> <div id="id-sharewithrepsearchicon" class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + 'f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<select id="timepicker" class="none-1 opensans-regular left" onchange="Sharewithrep_sortbyBox1(\'sharewithrep\')"> <option selected> None </option> <option>Alphabetical</option> <option>City,State</option> </select>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <select id="timepicker2" class="none-1 opensans-regular left" onchange="sharewithRepSortbyBox2()"> <option selected> None </option></select>'
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY,STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form>';
            return html;
        },
        assignCustomersTemplate: function (e) {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Assign Customers</h2>'
                    + ' <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic"> <input type="search"'
                    + 'class="opensans-regular"  id="id-overlayaiigncustomers"   onkeyup="assignToCustomerkeyup(event)" onkeypress="assignToCustomerkeypress(event)" placeholder="Search.." /> <div id="id-assignCustomersSearchIcon" class="c-search-icon search-icon sprite-im  p-absolute" ></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + 'f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<select id="timepicker" class="none-1 opensans-regular left" onchange="sortbyBox1()"> <option selected> None </option> <option>Alphabetical</option> <option>City,State</option> </select>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <select id="timepicker2" class="none-1 opensans-regular left" onchange="sortbyBox2()"> <option selected> None </option> <option>Select All</option> <option>Section A</option> <option>Section B</option><option>Section C</option><option>Section D</option><option>Section E</option></select>  '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY,STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form>';
            return html;
        },
        assignToRepTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Assign To Representatives</h2>'
                    + ' <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic"> <input type="search"'
                    + 'class="opensans-regular"  id="id-overlaysharewithrep"  placeholder="Search.." onkeyup="sharewithrepkeyup(event)"  onkeypress="sharewithrepkeypress(event)" /> <div id="id-sharewithrepsearchicon" class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + 'f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<select id="timepicker" class="none-1 opensans-regular left" onchange="Sharewithrep_sortbyBox1(\'sharewithrep\')"> <option selected> None </option> <option>Alphabetical</option> <option>City,State</option> </select>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <select id="timepicker2" class="none-1 opensans-regular left" onchange="sharewithRepSortbyBox2()"> <option selected> None </option></select>'
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY,STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form>';
            return html;
        },
        properyPolicyTemplate: function () {
            var html = "";
            var dueDate = "", startDate, endDate;
            for (i = 0; i < HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT; i++) {
                dueDate = moment(new Date(parseInt(HOMEPAGERESPONSE.PROPERTYNEXTPAYMENTAMOUNTDATE[i]))).format('MMM D, YYYY');
                startDate = moment(new Date(parseInt(HOMEPAGERESPONSE.PROPERTYDURATIONSTARTDATE[i]))).format('MMM YYYY');
                endDate = moment(new Date(parseInt(HOMEPAGERESPONSE.PROPERTYDURATIONENDDATE[i]))).format('MMM YYYY');
                html += '<div id="slideshow"> <div id="slideshowWindow"> <div class="slide"><div ><h2 class="t-left f-color-green opensans-regular" style="">Property Policy</h2> <div class="o-sub-content p-relative"> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Name</div> <div class="policy-value t-left right f-sz-16">' + HOMEPAGERESPONSE.PROPERTYCARRIERNAMES[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Number</div> <div class="policy-value t-left right f-sz-16">' + HOMEPAGERESPONSE.PROPERTYPHONENUMBER[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Due Amount</div> <div class="policy-value t-left right f-sz-16"><span class="money-sym">$</span>' + HOMEPAGERESPONSE.PROPERTYNEXTPAYMENTAMOUNT[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Next Due Date</div> <div class="policy-value t-left right date-format f-sz-16">' + dueDate + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Property</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Policy duration</div> <div class="policy-value t-left right f-sz-16">' + startDate + ' to ' + endDate + '</div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay">Done</div></div> </div></div></div></div>';

            }
            return html;
        },
        healthPolicyTemplate: function () {
            var html = "";
            var dueDate = "", startDate, endDate;
            for (i = 0; i < HOMEPAGERESPONSE.OTHERPOLICYCOUNT; i++) {
                dueDate = moment(new Date(parseInt(HOMEPAGERESPONSE.OTHERNEXTPAYMENTAMOUNTDATE[i]))).format('MMM D, YYYY');
                startDate = moment(new Date(parseInt(HOMEPAGERESPONSE.OTHERDURATIONSTARTDATE[i]))).format('MMM YYYY');
                endDate = moment(new Date(parseInt(HOMEPAGERESPONSE.OTHERDURATIONENDDATE[i]))).format('MMM YYYY');
                html += '<div id="slideshow"> <div id="slideshowWindow"> <div class="slide"><div ><h2 class="t-left f-color-green opensans-regular" style="">Others</h2> <div class="o-sub-content p-relative"> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Name</div> <div class="policy-value t-left right f-sz-16">' + HOMEPAGERESPONSE.OTHERCARRIERNAMES[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Number</div> <div class="policy-value t-left right f-sz-16">' + HOMEPAGERESPONSE.OTHERPHONENUMBER[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Due Amount</div> <div class="policy-value t-left right f-sz-16"><span class="money-sym">$</span>' + HOMEPAGERESPONSE.OTHERNEXTPAYMENTAMOUNT[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Next Due Date</div> <div class="policy-value t-left right date-format f-sz-16">' + dueDate + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Other</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Policy duration</div> <div class="policy-value t-left right f-sz-16">' + startDate + ' to ' + endDate + '</div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay">Done</div></div> </div></div></div></div>';

            }
            return html;
        },
        vehiclePolicyTemplate: function () {
            var html = "";
            var dueDate = "", startDate, endDate;
            for (i = 0; i < HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT; i++) {
                dueDate = moment(new Date(parseInt(HOMEPAGERESPONSE.VEHICLENEXTPAYMENTAMOUNTDATE[i]))).format('MMM D, YYYY');
                startDate = moment(new Date(parseInt(HOMEPAGERESPONSE.VEHICLEDURATIONSTARTDATE[i]))).format('MMM YYYY');
                endDate = moment(new Date(parseInt(HOMEPAGERESPONSE.VEHICLEDURATIONENDDATE[i]))).format('MMM YYYY');
                html += '<div id="slideshow"> <div id="slideshowWindow"> <div class="slide"><div ><h2 class="t-left f-color-green opensans-regular" style="">Vehicles/Watercrafts</h2> <div class="o-sub-content p-relative"> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Name</div> <div class="policy-value t-left right f-sz-16">' + HOMEPAGERESPONSE.VEHICLECARRIERNAMES[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Number</div> <div class="policy-value t-left right f-sz-16">' + HOMEPAGERESPONSE.VEHICLEPHONENUMBER[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Due Amount</div> <div class="policy-value t-left right f-sz-16"><span class="money-sym">$</span>' + HOMEPAGERESPONSE.VEHICLENEXTPAYMENTAMOUNTDATE[i] + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Next Due Date</div> <div class="policy-value t-left right date-format f-sz-16">' + dueDate + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Vehicle</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Policy duration</div> <div class="policy-value t-left right f-sz-16">' + startDate + ' to ' + endDate + '</div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay">Done</div></div> </div></div></div></div>';

            }
            return html;
        },
        addVendorDetailsTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Add Vendor details</h2> <div class="o-sub-content p-relative"> <div class="success2" style=" display:none; color: green;"></div><div class="error2" style=" display:none; color: red;"></div><div class="left-sub-content left p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Type</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all">'
                    + '<select tabindex="1" class="opensans-regular" id="id-vendortype"><option>Towing Service</option><option>Home Restoration</option></select>'
                    + '</div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 1</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="3" id="id-vendoraddress1" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">City</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="5" id="id-vendorcity" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Zip</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="7" id="id-vendorzip" type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> <div class="right-sub-content right p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Name</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="2" id="id-vendorname" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 2</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="4" id="id-vendoraddress2" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">State</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="6"  id="id-vendorstate" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Phone</div> <div class="url-box right text-box-outer textBox-placeholder-italic border-all"> <input tabindex="8" id="id-vendorphone" type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn_addvendordetails">Save</div> ';
            return html;
        },
//        editVendorDetailsTemplate: function () {
//            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Edit Vendor details</h2> <div class="o-sub-content p-relative"> <div class="left-sub-content left p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Type</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 1</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Phone</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">State</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> <div class="right-sub-content right p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Name</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 2</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">City</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Zip</div> <div class="url-box right text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Save</div> ';
//            return html;
//        },
        staticFeedViewTemplate: function (tempObj) {
            console.log("alertType");
            console.log("tempObj", tempObj.alertType);
            var genderDiv = "";
            if (tempObj.alertType == "incidentalert") {
                if (noOfOtherPartyRecordsCount === undefined && noOfPictureRecord === undefined && noOfAudioRecordCount === undefined) {
                    console.log("condition satisfied");
                    tempObj.noOfOtherPartyRecordsCount = 0;
                    tempObj.noOfPictureRecord = 0;
                    tempObj.noOfAudioRecordCount = 0;
                }
                alertFeed = '<div class="inline-block v-align-mid" style="margin-right:10px;">'
                        + '<a href="/text" class="snap feed-doc-btn block f-sz-14 opensans-regular textDoc p-relative" data-type="textDoc" name="textDocView" id=' + tempObj.alertId + '>'
                        + '<div class="t-center p-relative bg-color-white f-color-green">'
                        + '<div class="doc-icon-box inline-block">'
                        + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-menu-text inline-block f-color-green">Files</div>'
                        + '</div>'
                        + '<div class="t-center p-relative bg-color-green f-color-w">'
                        + '<div class="file-count inline-block">' + tempObj.noOfOtherPartyRecordsCount + '</div>'
                        + '<div class="inline-block">View</div>'
                        + '</div>'
                        + '</a>'
                        + '</div>'
                        + '<div class="inline-block v-align-mid" style="margin-right:10px;">'
                        + '<a href="/photos" class="snap feed-doc-btn block f-sz-14 opensans-regular photosDoc p-relative" data-type="photosDoc" name="photosDocView" id=' + tempObj.alertId + '>'
                        + '<div class="t-center p-relative bg-color-white f-color-green">'
                        + '<div class="doc-icon-box inline-block">'
                        + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-menu-text inline-block f-color-green">Photos</div>'
                        + '</div>'
                        + '<div class="t-center p-relative bg-color-green f-color-w">'
                        + '<div class="file-count inline-block">' + tempObj.noOfPictureRecord + '</div>'
                        + '<div class="inline-block">View</div>'
                        + '</div>'
                        + '</a>'
                        + '</div>'
                        + '<div class="inline-block v-align-mid" style="margin-top:0px;">'
                        + '<a href="/voice" class="snap feed-doc-btn block f-sz-14 opensans-regular voiceDoc p-relative" data-type="voiceDoc" name="voiceDocView"  id=' + tempObj.alertId + '>'
                        + '<div class="t-center p-relative bg-color-white f-color-green">'
                        + '<div class="doc-icon-box inline-block">'
                        + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-menu-text inline-block f-color-green">Voice</div>'
                        + '</div>'
                        + '<div class="t-center p-relative bg-color-green f-color-w">'
                        + '<div class="file-count inline-block">' + tempObj.noOfAudioRecordCount + '</div>'
                        + '<div class="inline-block">View</div>'
                        + '</div>'
                        + '</a>'
                        + '</div>';
                /* alertFeed = '<div class="feed-det bg-color-dblue p-relative">'
                 + '<div class="feed-docs-pad p-relative docs-block t-center">'
                 + '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc" id=' + tempObj.alertId + '>'
                 + '<div class="t-center p-relative">'
                 + '<div class="doc-icon-box" >'
                 + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                 + '</div>'
                 + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + tempObj.noOfOtherPartyRecordsCount + '</span></div>'
                 + '<div class="feed-menu-text bold">Text</div>'
                 + '</div>'
                 + '</a>'
                 + '<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc" id=' + tempObj.alertId + '>'
                 + '<div class="t-center p-relative">'
                 + '<div class="doc-icon-box" >'
                 + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                 + '</div>'
                 + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + tempObj.noOfPictureRecord + '</span></div>'
                 + '<div class="feed-menu-text bold">Photos</div>'
                 + '</div>'
                 + '</a>'
                 + '<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc" id=' + tempObj.alertId + '>'
                 + '<div class="t-center p-relative">'
                 + '<div class="doc-icon-box" >'
                 + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                 + '</div>'
                 + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + tempObj.noOfAudioRecordCount + '</span></div>'
                 + '<div class="feed-menu-text bold">Voice</div>'
                 + '</div>'
                 + '</a>'
                 + '</div>'
                 + '</div>';  */
            } else {
                alertFeed = '<a href="/changecoverage" class="snap feed-doc-btn block f-sz-17 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
                        + '<div class="t-center p-relative">'
                        + '<div class="sprite-im message-green-icon center-icon">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-addRemove-text t-center p-relative t-caps" id="policyMessageForPolicyAlert">' + tempObj.policyMessage + '</div>'
                        + '</a>';
            }
            if (tempObj.gender == undefined) {
                genderDiv = '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-name t-caps gender">' + tempObj.gender + '</div>';
            } else {
                genderDiv = "";
            }

            /* if (tempObj.profilePicture !== "undefined") {
             profilePicture = tempObj.profilePicture;
             } else {
             profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
             } */
            var html = '<div class="view-feed-block">'
                    + '<div class="view-in-blocks inline-block v-align-mid bg-color-dblue p-relative">'
                    + '<div class="p-relative">'
                    + '<div class="feed-user-top-details">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box border-all">'
                    + '<img src=' + profilePicture + ' alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-details-top inline-block v-align-mid" style="width:79%;color: #3e3e3e;">'
                    + '<div class="line1" style="margin-bottom:3px;">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps bold" style="margin-left:5px;">' + tempObj.firstName + '&nbsp' + tempObj.lastName + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">' + tempObj.alertTime + '</div>'
                    + '<div class="sprite-im archieve-icon" id="id-achieveicon">&nbsp;</div>';
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (localStorage.LoginType == 'Representatives') {
                    html += '<div class="archieve-icon" id="id-achieveicon" style="margin-right:20px;">Archive</div>';
                }
            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    html += '<div class="archieve-icon" id="id-achieveicon" style="margin-right:20px;">Archive</div>';
                }
            }

            html += '</div>'
                    + '<div class="line1">' + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-name t-caps">' + tempObj.gender + '</div>'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im birthday-icon">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-bday t-upper">' + tempObj.birthday + '</div>'
                    + '</div>'
                    + '<div class="feed-user-other-details" style="margin-top:10px !important;">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps" style="width: 30%;">' + tempObj.alertDate + '</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps" style="width: 24%;">' + tempObj.residentialCity + '</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos" style="float:left;">&nbsp;</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps" style="float:left;">' + tempObj.phoneNumber + '</div>'
                    + '</div>'

                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos" style="float:left;">&nbsp;</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin"  style="float:left;margin-left: 10px;">' + tempObj.userEmail + '</div>'
                    + '</div>'

                    + '</div>'
                    + '</div>'
                    + '</div>' + '<div class="feed-user-bottom-details">'
                    + '<div class="inline-block v-align-mid">'
                    + '<a href="/share" class="snap feed-btn bg-color-green block f-sz-14 opensans-regular f-color-w share p-relative t-center" data-type="share">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
                    + '<span id="id-sharetorep" class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
                    + '</div>'
                    + '</a>'
                    + '<div class="bg-color-green block feed-btn f-sz-14 opensans-regular f-color-w p-relative t-center alert-type-box t-caps">' + tempObj.alertType + ''
                    + '</div>'
                    + '</div>'

                    /* + '<div class="inline-block v-align-mid" style="display:none;">'
                     + '<a href="/text" class="snap feed-doc-btn block f-sz-14 opensans-regular textDoc p-relative" data-type="textDoc">'
                     + '<div class="t-center p-relative bg-color-white f-color-green">'
                     + '<div class="doc-icon-box inline-block">'
                     + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                     + '</div>'
                     + '<div class="feed-menu-text inline-block f-color-green">Files</div>'
                     + '</div>'
                     + '<div class="t-center p-relative bg-color-green f-color-w">'
                     + '<div class="file-count inline-block">2</div>'
                     + '<div class="inline-block">View</div>'
                     + '</div>'
                     + '</a>'
                     + '</div>'
                     + '<div class="inline-block v-align-mid" style="display:none;">'
                     + '<a href="/photos" class="snap feed-doc-btn block f-sz-14 opensans-regular photosDoc p-relative" data-type="photosDoc">'
                     + '<div class="t-center p-relative bg-color-white f-color-green">'
                     + '<div class="doc-icon-box inline-block">'
                     + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                     + '</div>'
                     + '<div class="feed-menu-text inline-block f-color-green">Photos</div>'
                     + '</div>'
                     + '<div class="t-center p-relative bg-color-green f-color-w">'
                     + '<div class="file-count inline-block">2</div>'
                     + '<div class="inline-block">View</div>'
                     + '</div>'
                     + '</a>'
                     + '</div>'
                     + '<div class="inline-block v-align-mid" style="display:none;">'
                     + '<a href="/voice" class="snap feed-doc-btn block f-sz-14 opensans-regular voiceDoc p-relative" data-type="voiceDoc">'
                     + '<div class="t-center p-relative bg-color-white f-color-green">'
                     + '<div class="doc-icon-box inline-block">'
                     + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                     + '</div>'
                     + '<div class="feed-menu-text inline-block f-color-green">Voice</div>'
                     + '</div>'
                     + '<div class="t-center p-relative bg-color-green f-color-w">'
                     + '<div class="file-count inline-block">2</div>'
                     + '<div class="inline-block">View</div>'
                     + '</div>'
                     + '</a>'
                     + '</div>' */
                    + '<div class="inline-block v-align-mid">'
                    /* + '<a href="/changecoverage" class="snap feed-doc-btn block f-sz-17 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
                     + '<div class="t-center p-relative">'
                     + '<div class="sprite-im message-green-icon center-icon">&nbsp;</div>'
                     + '</div>'
                     + '<div class="feed-addRemove-text t-center p-relative t-caps">Add / change coverage on home</div>'
                     + '</a>' */
                    + alertFeed
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="view-in-blocks inline-block v-align-mid bg-color-dblue p-relative">'
                    + '<div class="p-relative policy-main-blk">'
                    + '</div>'
                    + '</div>'
                    + '<div class="related-feeds p-relative">'
                    + '<div class="rel-feeds-title border-bot text-color-overlay">'
                    + '<div class="f-sz-14 opensans-regular t-upper">Related Feeds</div>'
                    + '</div>'
                    + '<div class="rel-feeds-content">'
                    + '</div>'
                    + '</div>'

                    + '</div>';
            return html;
        },
        insurencePolicyDetails: function (insurencePolicyDetail) {
            //RESPONSE.POLICYIDS = [];
            var matchedRadioButtonHTML = "";
            console.log("insurencePolicyDetail>>>>>>>>>>>>", insurencePolicyDetail);
            var policyDetailsValue = insurencePolicyDetail.policyDetails,
                    carrierName = insurencePolicyDetail.carrierDetails.carrierName,
                    carrierPolicyNumber = insurencePolicyDetail.policyDetails.carrierPolicyNumber,
                    carrierId = insurencePolicyDetail.policyDetails.carrierId,
                    dueAmount = insurencePolicyDetail.policyDetails.nextPaymentAmountDue,
                    dueDate = insurencePolicyDetail.policyDetails.nextPaymentDueDate,
                    dueDateOfPolicy = moment(new Date(parseInt(dueDate))).format('MMM D, YYYY'),
                    effectiveDate = insurencePolicyDetail.policyDetails.effectiveDate,
                    effectiveDateOfPolicy = moment(new Date(parseInt(effectiveDate))).format('MMM D, YYYY'),
                    expiryDate = insurencePolicyDetail.policyDetails.expirationDate,
                    matchAndOrReleaseClaimHTML = "",
                    policyType = "",
                    policyId = insurencePolicyDetail.policyDetails.policyId;
            RESPONSE.POLICYIDS.push(policyId);
            exipryDateOfPolicy = moment(new Date(parseInt(expiryDate))).format('MMM D, YYYY'),
                    policyCoverageDetails = insurencePolicyDetail.PolicyCoverageDetails,
                    incidentId = HOMEPAGERESPONSE.COMMONUSERDETAILS.incidentIdValue;
            if (policyCoverageDetails) {
                $.each(policyCoverageDetails, function (index, value) {
                    console.log("value>>>>>>>>>>>>>>>", value);
                    if (value.carrierVehiclesWatercraftsId !== undefined) {
                        policyType = "Vehicle";
                        return false;
                    } else if (value.carrierPropertyId !== undefined) {
                        policyType = "Property";
                        return false;
                    } else {
                        policyType = "Other Product";
                        return false;
                    }
                });
            }
            var hiddenPolicyDetailsHTML = '<div class="matchAndReleaseClaim" style="display:none;">'
                    + '<span class="incidentDateSpan">' + incidentId + '</span>'
                    + '<span class="carrierIdSpan">' + carrierId + '</span>'
                    + '<span class="policyIdSpan">' + policyId + '</span>'
                    + '<span class="policyTypeSpan">' + policyType + '</span>'
                    + '</div>';
            if (HOMEPAGERESPONSE.COMMONUSERDETAILS.alertType == "incidentalert") {
                matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                        + '<a href="/matchReleaseClaim" class="snap bg-color-green block f-sz-12 ptsans-light t-upper t-center matchReleaseClaim p-relative f-color-w" data-type="matchReleaseClaim" id=' + policyId + '>'
                        + '<div>Match & Release Claim</div>'
                        + hiddenPolicyDetailsHTML
                        + '</a>'
                        + '</div>';
            } else {
                matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                        + '<a href="/matchClaim" class="snap bg-color-green block f-sz-12 ptsans-light t-upper t-center matchReleaseClaim p-relative f-color-w" data-type="matchClaim" id=' + policyId + '>'
                        + '<div>Match</div>'
                        + hiddenPolicyDetailsHTML
                        + '</a>'
                        + '</div>';
            }
            console.log("count value is");
            if (HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy != undefined && (HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy == "Matched" && HOMEPAGERESPONSE.COMMONUSERDETAILS.alertType == "policyalert")) {
                var matchedPolicyID = HOMEPAGERESPONSE.COMMONUSERDETAILS.incidentIdValue;
                if (matchedPolicyID == policyId) {
                    matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue" style="box-sizing: border-box;padding: 5px;-webkit-appearance: none;width: 21px;height: 20px;border: 1px solid darkgray; border-radius: 73px;outline: none;box-shadow: 0 0 5px 0px gray inset;"/>'
                            + '<label for=' + policyId + '>'
                    matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                            + '<a href="javascrip:void(0)" class="selected-tab snap bg-color-green block f-sz-12 ptsans-light t-upper t-center matchReleaseClaim p-relative f-color-w" id=' + policyId + '>'
                            + '<div>Match</div>'
                            + hiddenPolicyDetailsHTML
                            + '</a>'
                            + '</div>';
                } else if (RESPONSE.MATCHEDPOLICYID == policyId) {
                    matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue" style="box-sizing: border-box;padding: 5px;-webkit-appearance: none;width: 21px;height: 20px;border: 1px solid darkgray; border-radius: 73px;outline: none;box-shadow: 0 0 5px 0px gray inset;"/>'
                            + '<label for=' + policyId + '>'
                    matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                            + '<a href="javascrip:void(0)" class="selected-tab snap bg-color-green block f-sz-12 ptsans-light t-upper t-center matchReleaseClaim p-relative f-color-w" id=' + policyId + '>'
                            + '<div>Match</div>'
                            + hiddenPolicyDetailsHTML
                            + '</a>'
                            + '</div>';
                } else {
                    matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue" style="box-sizing: border-box;padding: 5px;-webkit-appearance: none;width: 21px;height: 20px;border: 1px solid darkgray; border-radius: 73px;outline: none;box-shadow: 0 0 5px 0px gray inset;"/>'
                            + '<label for=' + policyId + '>'
                }
            } else {
                matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue" style="box-sizing: border-box;padding: 5px;-webkit-appearance: none;width: 21px;height: 20px;border: 1px solid darkgray; border-radius: 73px;outline: none;box-shadow: 0 0 5px 0px gray inset;"/>'
                        + '<label for=' + policyId + '>'
            }
            /* } else {
             matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue" style="box-sizing: border-box;padding: 5px;-webkit-appearance: none;width: 21px;height: 20px;border: 1px solid darkgray; border-radius: 73px;outline: none;box-shadow: 0 0 5px 0px gray inset;"/>'
             + '<label for=' + policyId + '>'
             } */
            var html = '<div class="insurance-policy-blk">'
                    + '<div class="policy-det-blk inline-block  v-align-mid">'
                    + matchedRadioButtonHTML
                    + '<div class="p-relative insurance-main-det inline-block v-align-top">'
                    + '<div class="insurance-tit-blk">'
                    + '<div class="f-sz-16 inline-block opensans-regular" style="margin-left:10px;" >' + carrierName + ',</div>'
                    + '<div class="f-sz-13	inline-block opensans-regular">' + carrierPolicyNumber + '</div>'
                    + '</div>'
                    + '<div class="insurance-det-blk">'
                    + '<ul class="ins-sub-det-group f-sz-12 opensans-regular">'
                    + '<li class="t-left" style="margin-bottom:3px;">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Due Amount">Due Amount</span>'
                    + '<span class="inline-block v-align-mid t-center" style="margin-right:10px;">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">$' + dueAmount + '</span>'
                    + '</li>'
                    + '<li class="t-left" style="margin-bottom:3px;">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Next Due Date">Next Due Date</span>'
                    + '<span class="inline-block v-align-mid t-center" style="margin-right:10px;">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">' + dueDateOfPolicy + '</span>'
                    + '</li>'
                    + '<li class="t-left" style="margin-bottom:3px;">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Policy Type">Policy Type</span>'
                    + '<span class="inline-block v-align-mid t-center" style="margin-right:10px;">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">' + policyType + '</span>'
                    + '</li>' + '</ul></div>'
                    + '</div>'
                    + '</label>'
                    + '</div>'
                    + '<div class="policy-btn-blk inline-block p-relative v-align-mid">'
                    + '<div class="p-relative f-sz-12 opensans-regular t-center">'
                    + '<div class="date-blk p-relative" style="margin-bottom:24px;font-style: italic;">'
                    + '<span class="bold">' + effectiveDateOfPolicy + '</span>'
                    + '<span>to</span>'
                    + '<span class="bold">' + exipryDateOfPolicy + '</span>'
                    + '</div>'
                    + matchAndOrReleaseClaimHTML
                    + '</div>'
                    + '</div>'
                    + '</div>';
            return html;
        }
    },
    // settings:{

    // },
    carriers: {
        staticCarrierTemplate: function () {
            var html = '<div class="carrier-home-parent p-relative"><div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular"><div class="carrier-name t-caps t-center">way to safe</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular"><div class="carrier-name t-caps t-center">health plus</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">auto owners insurance</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">safe co insurance</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">IEE master corp</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">auto owner insurance</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">way to safe</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div></div></div>';
            return html;
        },
        staticCarrierFeedViewTemplate: function (Carrieremail) {

            console.log("bbb", Carrieremail);
            resultCarrier = RESPONSE.users[0];
            // resultCarrier = JSON.parse(localStorage.getItem("users"));
            for (var rc = 0; rc < resultCarrier.length; rc++) {
                var result = resultCarrier[rc];
                if (result.carrierId == Carrieremail) {
                    viewdata = result;
                    //console.log("test",result);
                }
            }


            console.log("vin", viewdata);
            if (viewdata.emailId.email == undefined) {
                var carrieremail = '';
            } else {
                var carrieremail = viewdata.emailId.email;
            }

            var name, address1, address2, state, city, number, mail;

            if (viewdata.carrierName == undefined) {
                name = "";
            } else {
                name = viewdata.carrierName;
            }
            if (viewdata.address == undefined) {
                address1 = "";
            } else {
                address1 = viewdata.address;
            }
            if (viewdata.address2 == undefined) {
                address2 = "";
            } else {
                address2 = viewdata.address;
            }
            if (viewdata.state == undefined) {
                state = "";
            } else {
                state = viewdata.state;
            }
            if (viewdata.city == undefined) {
                city = "";
            } else {
                city = viewdata.city;
            }
            if (viewdata.phone.number == undefined) {
                number = "";
            } else {
                number = viewdata.phone.number;
            }
            if (viewdata.zip == undefined) {
                zip = "";
            } else {
                zip = viewdata.zip;
            }
            if (viewdata.facebookPage == undefined) {
                facebookPage = "#";
            } else {
                facebookPage = viewdata.facebookPage;
            }


            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">CARRIER ID :</div> <div class="carrier-view-id inline-block">' + viewdata.carrierId + '</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="' + HOMEPAGERESPONSE.PROFILEAPI + viewdata.carrierLogo + '" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-regular "><a class="f-color-w" href="' + viewdata.website.value + '" target="_blank">WEBSITE</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w"><a class="f-color-w" href="' + facebookPage + '" target="_blank">FACEBOOK</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency name</div> '
                    + '<div class="carrier-left-content t-left right ">' + name + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div>'
                    + '<div class="carrier-left-content t-left right">' + address1 + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div>'
                    + '<div class="carrier-left-content t-left right">' + address2 + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> '
                    + '<div class="carrier-left-content t-left right ">' + city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right">'
                    + '<a href="tel:' + viewdata.phone.number + '">' + number + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div>'
                    + '<div class="carrier-left-content t-left right ">' + zip + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + carrieremail.replace("\"\"", "") + '  href="mailto:' + carrieremail + '">' + carrieremail + '</a></div> </div> </div> </div> </div> </div> </div> '
//                    + '<div class="associated-carrierview p-relative"> <div class="p-relative ">'
//                    + '<select class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED CUSTOMERS</option></select> '
//                    + '<div id="associatedownarrow" class="p-relative inline-block"> <div id="associatedownarrow" class="sprite-im drop-down-icon">&nbsp;</div> </div> </div> <div class="associated-carrier-feed p-relative border-bot"> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">james jeo</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">Hugh jackman</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">smith</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">anderson</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> </div> </div>';

            localStorage.setItem("TEMP_CARRIERNAME", viewdata.carrierName);
            // alert(c.carrierName);
            var Omega = '\u003E';
            $("#id-carrierpage-headertext").text(Omega + "   " + viewdata.carrierName);
            $('#id-carrierpage-headertext').prop(Omega + "   " + viewdata.carrierName);
            return html;
        }

    },
    customers: {
        staticCustomerTemplate: function () {
            var html = '<div class="customer-home-parent clr-fl p-relative"><div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">James jeo</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w  snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '</div>';
            return html;
        },
        staticHomeIndividulaViewTemplate: function (viewdata) {
            var firstname, address1, address2, city, state, zipcode, phone, preferredVendorId = "";
            var profilePicture = "";

            if (viewdata.name != undefined) {
                firstname = viewdata.name;
            } else {
                firstname = "";
            }

            if (viewdata.address != undefined) {
                address1 = viewdata.address;
            } else {
                address1 = "";
            }
            if (viewdata.address2 != undefined) {
                address2 = viewdata.address2;
            } else {
                address2 = "";
            }
            if (viewdata.city != undefined) {
                city = viewdata.city;
            } else {
                city = "";
            }
            if (viewdata.state != undefined) {
                state = viewdata.state;
            } else {
                state = "";
            }
            if (viewdata.zipcode != undefined) {
                zipcode = viewdata.zipcode;
            } else {
                zipcode = "";
            }
            if (viewdata.phone != undefined) {
                phone = viewdata.phone;
            } else {
                phone = "";
            }
            if (viewdata.preferredVendorId != undefined) {
                preferredVendorId = viewdata.preferredVendorId;
            } else {
                preferredVendorId = "";
            }
            var html = '<div class="carrier-view-parent bg-color-white p-relative"><div class="carrier-view-rightblock inline-block v-align-mid p-relative " style="width:100% !important;"> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left"> name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">' + address1 + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">' + state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">' + city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right">'
                    + '<a href="tel:' + phone + '">' + phone + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> '
                    + '<div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">' + zipcode + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">preferred VendorId</div> '
                    + '<div class="carrier-left-content t-left right">' + preferredVendorId + '</div> </div> </div> </div> </div> </div> </div> ';

            var Omega = '\u003E';
            $("#id-customers-headername").text(Omega + "   " + firstname);
            localStorage.setItem("id-customers-headername", firstname);
            $(".pushmessage").css("display", "none");
            protocall.events.GlobalContainerScrollevent();
            return html;
        },
        staticAegnciesViewTemplate: function (viewdata) {
            var firstname, lastename, gender, occupation, dob, city, state, zipcode, email, phone = "";
            var profilePicture = "";
//            //undefined
            if (viewdata.agencyName != undefined) {
                firstname = viewdata.agencyName;
            } else {
                firstname = "";
            }
//            if (data.lastname != undefined) {
//                lastename = data.lastname;
//            } else {
//                lastename = "";
//            }
//            if (data.gender != undefined) {
//                gender = data.gender;
//            } else {
//                gender = "";
//            }
//            if (data.occupation != undefined) {
//                occupation = data.occupation;
//            } else {
//                occupation = "";
//            }
//            if (data.birthDate != undefined) {
//                dob = data.birthDate;
//            } else {
//                dob = "";
//            }
//            if (data.city != undefined) {
//                city = data.city;
//            } else {
//                city = "";
//            }
//            if (data.state != undefined) {
//                state = data.state;
//            } else {
//                state = "";
//            }
            if (viewdata.zipcode != undefined) {
                zipcode = viewdata.zipcode;
            } else {
                if (viewdata.zip != undefined) {
                    zipcode = viewdata.zip;
                } else {
                    zipcode = "";
                }

            }
//            if (data.emailId.email != undefined) {
//                email = data.emailId.email;
//            } else {
//                email = "";
//            }
//            var phoneHtml = "";
//            if (data.phone.number != undefined) {
//                phone = data.phone.number;
//                phoneHtml = "<a href=\"tel:" + data.phone.number + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:block;\">&nbsp;</div></a>";
//            } else {
//                phone = "";
//                phoneHtml = "<div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:none;\">&nbsp;</div>";
//            }
//
            if (viewdata.agencyLogo != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + viewdata.agencyLogo;
            } else {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }

//            //  }


            var dropdownHtml = "";
            if (localStorage.LoginType == undefined) {
                dropdownHtml = '<select id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED CARRIER</option></select>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.LoginType == 'Admin') {
                dropdownHtml = '<select id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED CARRIER</option></select>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.LoginType == 'Representatives') {
                dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CARRIER</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }

            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    dropdownHtml = '<select id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED CUSTOMERS</option><option>ASSOCIATED REPS</option></select>'
                            + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                            + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
                }
                if (localStorage.LoginType == 'Representatives') {
                    dropdownHtml = '<select id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED CUSTOMERS</option><option>ASSOCIATED REPS</option></select>'
                            + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                            + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
                }
            }
            if (viewdata.address2 == undefined) {
                address2 = "";
            } else {
                address2 = viewdata.address2;
            }


            console.log("viewdataaa", viewdata);

            if (viewdata.website == undefined) {
                website = "#";
            } else {
                website = viewdata.website.value;
            }
            if (viewdata.facebookPage == undefined) {
                facebook = "#";
            } else {
                facebook = viewdata.facebookPage;
            }

            if (viewdata.phone == undefined) {
                phonenum = "#";
            } else {
                phonenum = viewdata.phone.number;
            }

            if (viewdata.emailId == undefined) {
                email = "#";
            } else {
                email = viewdata.emailId.email;
            }

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">AGENCY ID :</div> <div class="carrier-view-id inline-block">' + viewdata.agencyId + '</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="' + profilePicture + '" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-regular ">'
                    + '<a class="f-color-w" href="' + website + '" target="_blank">WEBSITE</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w"><a class="f-color-w" href="' + facebook + '" target="_blank">FACEBOOK</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">' + viewdata.address + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">' + viewdata.state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">' + viewdata.city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right">'
                    + '<a href="tel:' + phonenum + '">' + phonenum + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> '
                    + '<div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">' + zipcode + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div> </div> </div> </div> </div> </div> </div> ' + dropdownHtml;
//            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="customer-view-feed inline-block v-align-mid p-relative"> <div class="customer-logo-view p-relative"> <div class="customerlogo-viewpic"> <img src=' + profilePicture + ' alt="" class="carrier-img-width"> </div> </div> '
//                    + '<div class="customer-view-name opensans-regular t-caps t-center p-relative">' + firstname + '</div> </div> <div id="id-carrier-view-rightblock" class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">first name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> '
//                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">last name</div> <div class="carrier-left-content t-left right">' + lastename + '</div> <div class="customer-view-mbapp p-relative inline-block v-align-top right"> '
//                    + phoneHtml + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">gender</div> <div class="carrier-left-content t-left right ">' + gender + '</div>'
//                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">occupation</div> <div class="carrier-left-content t-left right">' + occupation + '</div> '
//                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">year of birth</div>'
//                    + '<div class="carrier-left-content t-left right ">' + dob + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential city</div> <div class="carrier-left-content t-left right">' + city + '</div>'
//                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">residential state</div> '
//                    + '<div class="carrier-left-content t-left right t-upper ">' + state + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential zipcode</div>'
//                    + '<div class="carrier-left-content t-left right">' + zipcode + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right t-caps left">email</div> '
//                    + '<div class="carrier-left-content t-left right"><a href="mailto:' + email + '">' + email + '</a></div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
//                    + '<div class="carrier-left-content t-left right"><a href="tel:' + phone + '">' + phone + '</a></div> </div> </div> </div> </div> <div class="customer-view-button p-relative"  style="display:none;"> <div class="customer-view-policy inline-block t-caps t-center opensans-regular">policies</div> <div class="customer-policy-button p-relative inline-block bg-color-red t-caps t-center opensans-regular f-color-w snap" data-type="dt-propertypolicy">property policy</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-healthpolicy">health policy</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-vehiclepolicy">vehicle policy</div> </div> </div> </div> <div class="associated-carrierview p-relative"> <div class="p-relative "> '
//                    + dropdownHtml;



//                    + '<select id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED CARRIER</option></select>'
//                    + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
//                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';

            var Omega = '\u003E';
            $("#id-customers-headername").text(Omega + "   " + firstname);
            localStorage.setItem("id-customers-headername", firstname);
            $(".pushmessage").css("display", "none");
            protocall.events.GlobalContainerScrollevent();
            return html;
        },
        staticCustomerViewTemplate: function (data) {
            var firstname, lastename, gender, occupation, dob, city, state, zipcode, email, phone = "";
            var profilePicture = "";
            //undefined
            if (data.firstName != undefined) {
                firstname = data.firstName;
            } else {
                firstname = "";
            }
            if (data.lastname != undefined) {
                lastename = data.lastname;
            } else {
                lastename = "";
            }
            if (data.gender != undefined) {
                gender = data.gender;
            } else {
                gender = "";
            }
            if (data.occupation != undefined) {
                occupation = data.occupation;
            } else {
                occupation = "";
            }
            if (data.birthDate != undefined) {
                dob = data.birthDate;
            } else {
                dob = "";
            }
            if (data.residentialCity != undefined) {
                city = data.residentialCity;
            } else {
                city = "";
            }
            if (data.residentialState != undefined) {
                state = data.residentialState;
            } else {
                state = "";
            }
            if (data.residentialZipcode != undefined) {
                zipcode = data.residentialZipcode;
            } else {
                zipcode = "";
            }
            if (data.emailId.email != undefined) {
                email = data.emailId.email;
            } else {
                email = "";
            }
            var phoneHtml = "";
            try {
                if (data.phone.number != undefined) {
                    phone = data.phone.number;
                    phoneHtml = "<a href=\"tel:" + data.phone.number + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:block;\">&nbsp;</div></a>";
                } else {
                    phone = "";
                    phoneHtml = "<div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:none;\">&nbsp;</div>";
                }
            } catch (err) {
                phone = "";
                phoneHtml = "<div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:none;\">&nbsp;</div>";
            }

            if (data.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + data.profilePicture;
            } else {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }

            //  }



            var dropdownHtml = "";
            if (localStorage.LoginType == undefined) {
                dropdownHtml = '<select id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED CARRIER</option></select>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.LoginType == 'Admin') {
                dropdownHtml = '<select id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED CARRIER</option></select>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.LoginType == 'Representatives') {
                dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CARRIER</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED AGENCIES</div>'
                            + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                            + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
                }
                if (localStorage.LoginType == 'Admin') {
                    dropdownHtml = '<select id="id-customers-dropdown1" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED AGENCY</option></select>'
                            + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                            + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
                }
            }

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="customer-view-feed inline-block v-align-mid p-relative"> <div class="customer-logo-view p-relative"> <div class="customerlogo-viewpic"> <img src=' + profilePicture + ' alt="" class="carrier-img-width"> </div> </div> '
                    + '<div class="customer-view-name opensans-regular t-caps t-center p-relative">' + firstname + '</div>';

            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (localStorage.LoginType == 'Representatives') {
                    html += "<div class=\"sprite-im carrier-mobile-icon\" style=\"    margin-left: 45%;    margin-top: 5%;\"></div>";
                    phoneHtml = "";
                }

            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    html += "<div class=\"sprite-im carrier-mobile-icon\" style=\"    margin-left: 45%;    margin-top: 5%;\"></div>";
                    phoneHtml = "";
                }
            }

            html += '</div> <div id="id-carrier-view-rightblock" class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">first name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> '
                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">last name</div> <div class="carrier-left-content t-left right">' + lastename + '</div> <div class="customer-view-mbapp p-relative inline-block v-align-top right"> '
                    + phoneHtml + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">gender</div> <div class="carrier-left-content t-left right ">' + gender + '</div>'
                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">occupation</div> <div class="carrier-left-content t-left right">' + occupation + '</div> '
                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">year of birth</div>'
                    + '<div class="carrier-left-content t-left right ">' + dob + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential city</div> <div class="carrier-left-content t-left right">' + city + '</div>'
                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">residential state</div> '
                    + '<div class="carrier-left-content t-left right t-upper ">' + state + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential zipcode</div>'
                    + '<div class="carrier-left-content t-left right">' + zipcode + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right t-caps left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                    + '<div class="carrier-left-content t-left right"><a href="tel:' + phone + '">' + phone + '</a></div> </div> </div> </div> </div> <div class="customer-view-button p-relative" > <div class="customer-view-policy inline-block t-caps t-center opensans-regular">policies</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-regular f-color-w snap " data-type="dt-propertypolicy" id="showPolicies">Show Policies</div></div> </div> </div> <div class="associated-carrierview p-relative"> <div class="p-relative "> '
                    + dropdownHtml;
//                    + '<select id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED CARRIER</option></select>'
//                    + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
//                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';

            var Omega = '\u003E';
            $("#id-customers-headername").text(Omega + "   " + firstname);
            localStorage.setItem("id-customers-headername", firstname);
            $(".pushmessage").css("display", "none");
            return html;
        },
        staticSettingsTemplate: function (data) {
            //console.log(data);
            var html = "";
            var website = "";
            var faceBook = "";

            console.log("setinsdjgfhg", data);

            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    /* RESPONSE.BACKGROUNDCOLORVALUE = data.resultMap.agencyDetails.color;
                     RESPONSE.THEMECOLOR = data.resultMap.agencyDetails.themeColor;
                     RESPONSE.FRAMECOLOR = data.resultMap.agencyDetails.frameColor; */
                    try {
                        if (data.resultMap.carrierDetails.website.value == undefined) {
                            website = "";
                        } else {
                            website = data.resultMap.carrierDetails.website.value;
                        }
                    } catch (err) {

                    }

                    try {
                        if (data.resultMap.carrierDetails.facebookPage == undefined) {
                            faceBook = "";
                        } else {
                            faceBook = data.resultMap.carrierDetails.facebookPage;
                        }
                    } catch (err) {

                    }

                    html = ' <form id="carrier-form"> <div class="settings-click-button clr-fl"><div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div> <div class="settings-agency-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-agency-view-load" data-type="agency-view-load" >AGENCY</a></div> <div class="settings-vendor-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-preferred-vendors-view-load" data-type="preferred vendors-view-load" >PREFERRED VENDORS</a></div> '
                            + '<div class="settings-edit-bar right inline-block p-relative bg-color-green snap" data-type="agency-edit-load" style="display:none;"><div class="p-relative inline-block"> <div class="edit-icon sprite-im" style="margin-top:7px !important;">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w" style="margin-left: 25px;"> <a id="id-carrier-edit" class="f-color-w" href="javascript:void(0)" >edit</a></div>'
                            + '</div><div class="removevendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-remove-load" style="display:none"> <div class="p-relative inline-block"> <div class="remove-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="f-color-w" href="javascript:void(0)"  >remove</a></div> </div> <div class="addvendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-addvendor-load" style="display:none"> <div class="p-relative inline-block"> <div class="add-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="f-color-w" href="javascript:void(0)"  >add vendor</a></div></div></div> <div class="bg-color-white"><div class="agency-view-block"><div class="settings-view-leftblock inline-block v-align-mid p-relative"> <div class="settings-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-upper">Carrier id</div> '
                            + '<div class="carrier-view-id inline-block">' + data.resultMap.carrierDetails.carrierId + '</div> </div> <div class="settings-logo-view p-relative"> '
                            + '<div class="settingslogo-viewpic"> <img id="id-agencypic" src=http://2-dot-proto-call-test.appspot.com/file/' + data.resultMap.carrierDetails.carrierLogo + ' alt="" class="carrier-img-width"> <div id="id-edit-agency-pic" class=\"edit-agency-pic p-absolute anim bg-color-red f-color-w snap\" data-type=\"editAgencyPic\" style=\"display: none;\"> <div class=\"p-relative t-center\" style=\" margin-left: -9px;\"> <div class=\"sprite-im Edit-icon inline-block v-align-mid\"> &nbsp; </div><div class=\"inline-block f-sz-12 v-align-mid opensans-regular \"> Edit </div></div></div></div> </div> <div class="settings-view-social p-relative clr-fr"> <div class="settings-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> '
                            + '<div class="carrier-website-name inline-block t-caps opensans-regular f-color-w t-center"><a target="_blank" href="' + website + '" class="f-color-w">WEBSITE</a></div> </div> <div class="settings-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w t-center"><a target="_blank" href="' + faceBook + '" class="f-color-w">FACEBOOK</a></div> </div> </div> </div> <div class="settings-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier  id</div> '
                            + '<div id="id-c-agencyid" class="carrier-left-content t-left right " style="visibility: visible"></div> <input id="id-carrier-agencyid" class="carrier-left-content-textbox t-left right p-absoalute" type="text" value="" style="visibility: hidden;margin-right:7%;"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">Master Carrier id</div> '
                            + '<div class="carrier-left-content t-left right" id="id-c-masteragencyid" title=' + data.resultMap.carrierDetails.carrierId + ' style="visibility: visible">' + data.resultMap.carrierDetails.carrierId + '</div> <input id="id-carrier-masteragencyid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden" readonly> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">Carrier Type</div> '
                            + '<div id="id-c-agencytype" class="carrier-left-content t-left right " style="visibility: visible"></div> '
                            + '<select id="id-carrier-agencytype" class="carrier-left-content-textbox t-left right p-absolute" style="visibility: hidden"><option>Master Type</option><option>Branch</option></select> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">name</div> '
                            + '<div id="id-c-agencyname" class="carrier-left-content t-left right" style="visibility: visible">' + data.resultMap.carrierDetails.carrierName + '</div> <input id="id-carrier-agencyname" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                            + '<div id="id-c-agencyaddress1" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.carrierDetails.address + '</div> <input id="id-carrier-agencyaddress1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                            + '<div id="id-c-agencyaddress2" class="carrier-left-content t-left right" style="visibility: visible"></div> <input id="id-carrier-agencyaddress2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> '
                            + '<div id="id-c-agencycity" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.carrierDetails.city + '</div> <input id="id-carrier-agencycity" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> '
                            + '<div id="id-c-agencystate" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.carrierDetails.state + '</div> <input id="id-carrier-agencystate" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> '
                            + '<div id="id-c-agencyzip" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.carrierDetails.zip + '</div> <input id="id-carrier-agencyzipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                            + '<div id="id-c-agencyphone" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.carrierDetails.phone.number + '</div> <input id="id-carrier-agencyphone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div>'

                            + '<div class=\"carrier-view-block p-relative \"> <div id=\"id-carrier-border-view\" class=\"carrier-border-view border-bot clr-fl\"> <div class=\"carrier-view-left p-relative left\" style="  width: 50%;"> <div class=\"carrier-left-width t-caps opensans-regular clr-fl\"> <div class=\"carrier-left-title t-right left\">Website</div><div id=\"id-c-agencywebsite\" class=\"carrier-left-content t-left right \" style=\"visibility: visible\">' + website + '</div><input id=\"id-carrier-agencywebsite\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div><div class=\"carrier-view-right right t-caps opensans-regular\"> <div class=\"carrier-left-width clr-fl\"> <div class=\"carrier-left-title t-right left\">Facebook</div>'
                            + '<div id=\"id-c-agencyfacebook\" class=\"carrier-left-content t-left right t-upper\" style=\"visibility: visible\">' + faceBook + '</div><input id=\"id-carrier-agencyfacebook\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div></div></div>'
                            + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right left t-caps">email</div>'


                            + '<div id="id-c-agencyemail" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.carrierDetails.emailId.email + '</div> <input id="id-carrier-agencyemail" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div>'
                            + '</div></div> <div class="preferred-vendor-block inline-block v-align-mid p-relative clr-fl">'
                            + '<div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-upper opensans-regular "> <div id ="id-vendornamebox" class="carrier-left-title t-upper t-left inline-block " style="color:black">name</div> '
                            + '<div id ="id-vendortypebox" class="carrier-left-title t-right inline-block" style="color:black">type</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-upper opensans-regular"> <div class="carrier-left-title t-left inline-block" style="color:black">phone</div> <div class="carrier-left-title t-right inline-block" style="color:black">state,city</div> </div> </div> </div>';
                    // alert("1" + data.resultMap.listOfPreferredVendor[0].serviceId);
                    if (data.resultMap.listOfPreferredVendor[0].serviceId == undefined) {
                        // alert('2');
                        html += "<div>There were no preferredVendor for this carrier</div>";
                    } else {
                        for (var index = 0; index < data.resultMap.listOfPreferredVendor.length; index++) {

                            html += '<div id="item_' + index + '" class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular ">'
                                    + '<input type="checkbox" id="removevendor_' + index + '" value=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="checkbox remove-vendor"> <label for="removevendor_' + index + '" class="vendor-label"></label>'
                                    + '<div id="id-prefeeredvendorbox" class="carrier-left-title t-left inline-block " style="margin-left: 25px;width: 46%;">'
                                    + '<a id=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="preferredvendor snap name-color" href="javascript:void(0)" data-type="vendor-profile-info" >' + data.resultMap.listOfPreferredVendor[index].name + '</a></div> '
                                    + '<div id="id-vendortypebox" class="carrier-left-title t-right inline-block">' + data.resultMap.listOfPreferredVendor[index].serviceType + '</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> '
                                    + '<div class="carrier-left-title t-left inline-block"><a href="tel:' + data.resultMap.listOfPreferredVendor[index].phone + '">' + (data.resultMap.listOfPreferredVendor[index].phone).replace(/(\d\d\d)\s*(\d\d\d)\s*(.*?)$/, '$1-$2-$3') + '</a></div> '
                                    + '<div class="carrier-left-title t-right inline-block">' + data.resultMap.listOfPreferredVendor[index].city + "," + data.resultMap.listOfPreferredVendor[index].state + '</div> </div> </div> </div> ';
                        }
                    }

                }
            } else {
                try {
                    if (data.resultMap.agencyDetails.website.value == undefined) {
                        website = "";
                    } else {
                        website = data.resultMap.agencyDetails.website.value;
                    }
                } catch (err) {

                }

                try {
                    if (data.resultMap.agencyDetails.facebookPage == undefined) {
                        faceBook = "";
                    } else {
                        faceBook = data.resultMap.agencyDetails.facebookPage;
                    }
                } catch (err) {

                }
                RESPONSE.BACKGROUNDCOLORVALUE = data.resultMap.agencyDetails.color;
                RESPONSE.THEMECOLOR = data.resultMap.agencyDetails.themeColor;
                RESPONSE.FRAMECOLOR = data.resultMap.agencyDetails.frameColor;
                html = ' <form id="carrier-form"> <div class="carrier-view-parent p-relative"> <div class="app-link t-upper opensans-regular p-relative">app download link</div> <div class="app-parent p-relative"> '
                        + '<div class="app-download-bar inline-block p-relative bg-color-white">' + data.resultMap.appDownloadLink + '</div> <div class="send-app-bar inline-block p-relative border-all bg-color-green t-caps t-center opensans-regular f-color-w snap"  data-type="sendapplink" ><a class="f-color-w" href="javascript:void(0)" >send app link</a></div> </div> <div class="settings-click-button clr-fl"><div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div> <div class="settings-agency-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-agency-view-load" data-type="agency-view-load" >AGENCY</a></div> <div class="settings-vendor-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-preferred-vendors-view-load" data-type="preferred vendors-view-load" >PREFERRED VENDORS</a></div> '
                        + '<div class=\"settings-edit-bar right inline-block p-relative bg-color-green snap\" data-type=\"agency-edit-load\" style=\"display: block;\"><div class=\"p-relative inline-block\"> <div class=\"edit-icon sprite-im\" style="margin-top:7px !important;">&nbsp;</div></div><div class=\"p-relative inline-block t-caps t-right opensans-regular f-color-w\" style=\"margin-left: 25px;\"> <a id=\"id-carrier-edit\" class=\"f-color-w\" href=\"javascript:void(0)\">Edit</a></div></div>'
                        + '<div id="id-canecelbutton" class="settings-edit-bar right inline-block p-relative bg-color-green snap" data-type="" style="margin-right: 8px;display:none;"><div class="p-relative inline-block"> <div class="edit-icon sprite-im" style="display:none;">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w" style="margin-left: 25px;  margin-top: 9px;"> <a id="" class="f-color-w" href="javascript:void(0)" >Cancel</a></div>'
                        + '</div><div id="id-editremovebar" class="removevendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-remove-load"> <div class="p-relative inline-block"> <div class="remove-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a id="id-preffervendoreditremovebar" class="f-color-w" href="javascript:void(0)"  >Edit</a></div> </div> <div class="addvendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-addvendor-load"> <div class="p-relative inline-block"> <div class="add-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="f-color-w" href="javascript:void(0)"  >add vendor</a></div></div></div> <div class="bg-color-white"><div class="agency-view-block"><div class="settings-view-leftblock inline-block v-align-mid p-relative"> <div class="settings-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-upper">agency id</div> '
                        + '<div class="carrier-view-id inline-block">' + data.resultMap.agencyDetails.agencyId + '</div> </div> <div class="settings-logo-view p-relative"> '
                        + '<div class="settingslogo-viewpic"> <img id="id-agencypic" src=http://2-dot-proto-call-test.appspot.com/file/' + data.resultMap.agencyDetails.agencyLogo + ' alt="" class="carrier-img-width"> <div id="id-edit-agency-pic" class=\"edit-agency-pic p-absolute anim bg-color-red f-color-w snap\" data-type=\"editAgencyPic\" style=\"display: none;\"> <div class=\"p-relative t-center\" style=\" margin-left: -9px;\"> <div class=\"sprite-im Edit-icon inline-block v-align-mid\"> &nbsp; </div><div class=\"inline-block f-sz-12 v-align-mid opensans-regular \"> Edit </div></div></div></div> </div> <div class="settings-view-social p-relative clr-fr"> <div class="settings-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> '
                        + '<div class="carrier-website-name inline-block t-caps opensans-regular f-color-w t-center"><a target="_blank" href="' + website + '" class="f-color-w">WEBSITE</a></div> </div> <div class="settings-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w t-center"><a target="_blank" href="' + faceBook + '" class="f-color-w">FACEBOOK</a></div> </div> </div> </div> <div class="settings-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier id</div> '
                        + '<div id="id-c-agencyid" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.carrierAgencyId + '</div> <input id="id-carrier-agencyid" class="carrier-left-content-textbox t-left right p-absoalute" type="text" value="" style="visibility: hidden;margin-right:-7%;"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">master agency id</div> '
                        + '<div class="carrier-left-content t-left right" id="id-c-masteragencyid" title=' + data.resultMap.agencyDetails.agencyId + ' style="visibility: visible">' + data.resultMap.agencyDetails.agencyId + '</div> <input id="id-carrier-masteragencyid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden" readonly> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency type</div> '
                        + '<div id="id-c-agencytype" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.agencyType + '</div> '
                        + '<select id="id-carrier-agencytype" class="carrier-left-content-textbox t-left right p-absolute" style="visibility: hidden"><option>Master Type</option><option>Branch</option></select></div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">name</div> '
                        + '<div id="id-c-agencyname" class="carrier-left-content t-left right" style="visibility: visible">' + data.resultMap.agencyDetails.agencyName + '</div> <input id="id-carrier-agencyname" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-c-agencyaddress1" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.address + '</div> <input id="id-carrier-agencyaddress1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-c-agencyaddress2" class="carrier-left-content t-left right" style="visibility: visible">' + data.resultMap.agencyDetails.address2 + '</div> <input id="id-carrier-agencyaddress2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> '
                        + '<div id="id-c-agencycity" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.city + '</div> <input id="id-carrier-agencycity" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> '
                        + '<div id="id-c-agencystate" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.agencyDetails.state + '</div> <input id="id-carrier-agencystate" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative " > <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> '
                        + '<div id="id-c-agencyzip" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.zipcode + '</div> <input id="id-carrier-agencyzipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                        + '<div id="id-c-agencyphone" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.agencyDetails.phone.number + '</div> <input id="id-carrier-agencyphone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> '

                        + '<div class=\"carrier-view-block p-relative \"> <div id=\"id-carrier-border-view\" class=\"carrier-border-view border-bot clr-fl\"> <div class=\"carrier-view-left p-relative left\" style="  width: 50%;"> <div class=\"carrier-left-width t-caps opensans-regular clr-fl\"> <div class=\"carrier-left-title t-right left\">Website</div><div id=\"id-c-agencywebsite\" class=\"carrier-left-content t-left right \" style=\"visibility: visible\">' + website + '</div><input id=\"id-carrier-agencywebsite\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div><div class=\"carrier-view-right right t-caps opensans-regular\" style="width: 50%;"> <div class=\"carrier-left-width clr-fl\"> <div class=\"carrier-left-title t-right left\">Facebook</div>'
                        + '<div id=\"id-c-agencyfacebook\" class=\"carrier-left-content t-left right t-upper\" style=\"visibility: visible\">' + faceBook + '</div><input id=\"id-carrier-agencyfacebook\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div></div></div>'
                        + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right left t-caps">email</div>'

                        + '<div id="id-c-agencyemail" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.emailId.email + '</div> <input id="id-carrier-agencyemail" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl" style="height:31px;"> <div class="carrier-left-title t-right left">Background Color</div> <div class="carrier-left-content t-left right t-upper" style="margin-top:-4px;margin-right:0px;" ><input type="color" id="color_Name" style="width:187px;" value = ' + data.resultMap.agencyDetails.color + ' /></div></div> </div> </div> </div>'
                        + '<div class="carrier-view-block p-relative ">'
                        + '<div id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl">'
                        + '<div class="carrier-view-left p-relative left" style="  width: 50%;">'
                        + '<div class="carrier-left-width t-caps opensans-regular clr-fl" style="height:31px;">'
                        + '<div class="carrier-left-title t-right left">Emergency Popup Color</div>'
                        + '<div id="themeColorValue" class="carrier-left-content t-left right " style="visibility: visible"><input type="color" id="theme_color_value" style="width:187px;margin-top:-4px;" value = ' + data.resultMap.agencyDetails.themeColor + ' /></div>'
                        + '</div>'
                        + '</div>'
                        + '<div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;">'
                        + '<div class="carrier-left-width clr-fl" style="height:31px;">'
                        + '<div class="carrier-left-title t-right left">CardDetails Color</div>'
                        + '<div id="frameColorValue" class="carrier-left-content t-left right t-upper" style="visibility: visible"><input type="color" id="frame_color_value" style="width:187px;margin-top:-4px;" value = ' + data.resultMap.agencyDetails.frameColor + ' /></div>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div></div>'
                        + '<div class="preferred-vendor-block inline-block v-align-mid p-relative clr-fl">'
                        + '<div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-upper opensans-regular "> <div id ="id-vendornamebox" class="carrier-left-title t-upper t-left inline-block " style="color:black">name</div> '
                        + '<div id ="id-vendortypebox" class="carrier-left-title t-right inline-block" style="color:black">type</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-upper opensans-regular"> <div class="carrier-left-title t-left inline-block" style="color:black">phone</div> <div class="carrier-left-title t-right inline-block" style="color:black">state,city</div> </div> </div> </div>';
                for (var index = 0; index < data.resultMap.listOfPreferredVendor.length; index++) {

                    html += '<div id="item_' + index + '" class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular ">'
                            + '<input type="checkbox" id="removevendor_' + index + '" value=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="checkbox remove-vendor"> <label for="removevendor_' + index + '" class="vendor-label" style="display:none"></label>'
                            + '<div id="id-prefeeredvendorbox" class="carrier-left-title t-left inline-block " style="margin-left: 25px;width: 46%;">'
                            + '<a id=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="preferredvendor snap name-color" href="javascript:void(0)" data-type="vendor-profile-info" >' + data.resultMap.listOfPreferredVendor[index].name + '</a></div> '
                            + '<div id="id-vendortypebox" class="carrier-left-title t-right inline-block">' + data.resultMap.listOfPreferredVendor[index].serviceType + '</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> '
                            + '<div class="carrier-left-title t-left inline-block"><a href="tel:' + data.resultMap.listOfPreferredVendor[index].phone + '">' + (data.resultMap.listOfPreferredVendor[index].phone).replace(/(\d\d\d)\s*(\d\d\d)\s*(.*?)$/, '$1-$2-$3') + '</a></div> '
                            + '<div class="carrier-left-title t-right inline-block">' + data.resultMap.listOfPreferredVendor[index].city + "," + data.resultMap.listOfPreferredVendor[index].state + '</div> </div> </div> </div> ';
                }

            }


            return html;
        },
        dynamicMyProfileViewTemplate: function () {
            debugger;
			var data = "";
//            setTimeout(function () {

            var tempCarriedId = localStorage.getItem("CARRIERADMIN_MYREPID");
			if((RESPONSE.CARRIERAGENCYTOTALDETAILS).length != 0){
				data = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
			} else {
				data = JSON.parse(localStorage.getItem("customerDetailsValue"));
			}
            
            //  var data = JSON.parse(localStorage.getItem("CARRIERAGENCYTOTALDETAILS"));
            console.log("Manoj---->", data);


            var html = "<div> No records </div>";

            for (var index = 0; index < data.resultMap.myRepTab.length; index++) {
                var name, phone, email, profilepic = '';
                try {
                    if (data.resultMap.myRepTab[index].RepresentativeDetails.carrierRepresentativeId.email == tempCarriedId) {
                        var details = data.resultMap.myRepTab[index].RepresentativeDetails;
                        if (details.name != undefined) {
                            name = details.name;
                        } else {
                            name = '';
                        }

                        localStorage.setItem("id-customers-headername", name);

                        if (details.phone.number != undefined) {
                            phone = details.phone.number;
                        } else {
                            phone = '';
                        }
                        if (details.carrierRepresentativeId.email != undefined) {
                            email = details.carrierRepresentativeId.email;
                        } else if (details.agencyRepresentativeId.email != undefined) {
                            email = details.agencyRepresentativeId.email;
                        } else {
                            email = '';
                        }
                        if (details.profilePicture != undefined) {
                            profilepic = HOMEPAGERESPONSE.PROFILEAPI + details.profilePicture;
                        } else {
                            profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcPNRtKYiBvLn1TGvtd2JZQrg_P4IubK34BlZIEcmnel20KIINiVxnPV0';
                        }
                        html = "";
                        localStorage.setItem("CARRIERREP_EMAILID", email);
                        html = '<div class="agenyparent-class bg-color-white"> <div class="p-relative"> <form> <div class="agenyleft-profile inline-block v-align-mid p-relative"> '
                                + '<div class="agenyleft-image"> <div class="overflow-hidden"> <div class="agenypic-info"> <img src=' + profilepic + ' alt="" class="ageny-img-width"> </div><div id="id-changeimg" class="v-align-mid opensans-regular text-color-overlay f-sz-12 p-relative" style="padding:0px 25px;display:none;"> <div class="sprite-im profcamera-icon inline-block"> &nbsp; </div><div class="t-upper inline-block"> Change Image </div><input type="file" name="agency-prof-img" id="agency-prof-img" onchange="readURL(this);"/> </div></div></div></div><div class="agenyright-profile inline-block v-align-mid"> <div class="agenyparent-block"> <div class="agenyinternal-block"> <div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Name </div><div class="agenycontent-block inline-block p-relative"> '
                                + '<span class="profile-result-cls" id="nameview"> ' + name + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="namenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative" > Phone </div><div class="agenycontent-block inline-block p-relative"> '
                                + '<span class="profile-result-cls" id="phoneview"> ' + phone + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="phonenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Email </div><div class="agenycontent-block inline-block p-relative">'
                                + '<span class="profile-result-cls" id="emailview"> ' + email + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="emailnew" readonly> </div></div></div></div></div></form> </div></div>';

                        var dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CUSTOMERS</div>'
                                + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                                + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';

                        html = html + dropdownHtml;
                        break;
                    }
                } catch (err) {
                    if (data.resultMap.myRepTab[index].RepresentativeDetails.emailId.email == tempCarriedId) {
                        var name, phone, email, profilepic = '';
                        var details = data.resultMap.myRepTab[index].RepresentativeDetails;
                        if (details.firstName != undefined) {
                            name = details.firstName;
                        } else {
                            name = '';
                        }

                        localStorage.setItem("id-customers-headername", name);

                        if (details.phone.number != undefined) {
                            phone = details.phone.number;
                        } else {
                            phone = '';
                        }
                        if (details.emailId.email != undefined) {
                            email = details.emailId.email;
                        } else if (details.emailId.email != undefined) {
                            email = details.emailId.email;
                        } else {
                            email = '';
                        }
                        if (details.profilePicture != undefined) {
                            profilepic = HOMEPAGERESPONSE.PROFILEAPI + details.profilePicture;
                        } else {
                            profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcPNRtKYiBvLn1TGvtd2JZQrg_P4IubK34BlZIEcmnel20KIINiVxnPV0';
                        }
                        html = "";
                        localStorage.setItem("CARRIERREP_EMAILID", email);
                        html = '<div class="agenyparent-class bg-color-white"> <div class="p-relative"> <form> <div class="agenyleft-profile inline-block v-align-mid p-relative"> '
                                + '<div class="agenyleft-image"> <div class="overflow-hidden"> <div class="agenypic-info"> <img src=' + profilepic + ' alt="" class="ageny-img-width"> </div><div id="id-changeimg" class="v-align-mid opensans-regular text-color-overlay f-sz-12 p-relative" style="padding:0px 25px;display:none;"> <div class="sprite-im profcamera-icon inline-block"> &nbsp; </div><div class="t-upper inline-block"> Change Image </div><input type="file" name="agency-prof-img" id="agency-prof-img" onchange="readURL(this);"/> </div></div></div></div><div class="agenyright-profile inline-block v-align-mid"> <div class="agenyparent-block"> <div class="agenyinternal-block"> <div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Name </div><div class="agenycontent-block inline-block p-relative"> '
                                + '<span class="profile-result-cls" id="nameview"> ' + name + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="namenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative" > Phone </div><div class="agenycontent-block inline-block p-relative"> '
                                + '<span class="profile-result-cls" id="phoneview"> ' + phone + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="phonenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Email </div><div class="agenycontent-block inline-block p-relative">'
                                + '<span class="profile-result-cls" id="emailview"> ' + email + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="emailnew" readonly> </div></div></div></div></div></form> </div></div>';

                        var dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CUSTOMERS</div>'
                                + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                                + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';

                        html = html + dropdownHtml;
                        break;
                    }
                }

            }

            return html;

//            }, 500);



        },
        staticMyProfileViewTemplate: function () {

            if (sessionStorage.userName == undefined) {
                userName = "";
            } else {
                userName = sessionStorage.userName;
            }

            if (sessionStorage.userPhoneNumber == undefined) {
                agencyPhone = "";
            } else {
                agencyPhone = sessionStorage.userPhoneNumber;
            }

            if (sessionStorage.userEmailId == undefined) {
                agencyEmail = "";
            } else {
                agencyEmail = sessionStorage.userEmailId;
            }

            if (sessionStorage.profilePic == undefined) {
                profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            } else {
                profilePic = sessionStorage.profilePic;
            }

            var html = '<div class="agenyparent-class bg-color-white"> <div class="p-relative"> <form> <div class="agenyleft-profile inline-block v-align-mid p-relative"> <div class="agenyleft-image"> <div class="overflow-hidden"> <div class="agenypic-info">'
                    + '<img src=' + profilePic + ' alt="" class="ageny-img-width"> </div><div class="v-align-mid opensans-regular text-color-overlay f-sz-12 p-relative"  id="id-changeimg"  style="padding:0px 25px;display:none;"> <div class="sprite-im profcamera-icon inline-block"> &nbsp; </div><div class="t-upper inline-block"> Change Image </div><input type="file" name="agency-prof-img" id="agency-prof-img" onchange="readURL(this);"/> </div></div></div></div><div class="agenyright-profile inline-block v-align-mid"> <div class="agenyparent-block"> <div class="agenyinternal-block"> <div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Name </div><div class="agenycontent-block inline-block p-relative">'
                    + '<span class="profile-result-cls" id="nameview"> ' + userName + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="namenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative" > Phone </div><div class="agenycontent-block inline-block p-relative">'
                    + '<span class="profile-result-cls" id="phoneview"> ' + agencyPhone + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="phonenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Email </div><div class="agenycontent-block inline-block p-relative"> '
                    + '<span class="profile-result-cls" id="emailview"> ' + agencyEmail + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="emailnew" readonly> </div></div></div></div></div></form> </div></div>';
            return html;
        }
    },
    myreps: {
        inviteRepsTemplate: function () {
            var html = "";
            if (sessionStorage.loginType == 'SuperAdmin') {
                html = '<h2 class="t-left f-color-green opensans-regular" style="">Invite ' + localStorage.getItem("TABNAME") + '</h2>'
                        + '<div class="o-sub-content p-relative">'
                        + '<div class="f-sz-14 t-left opensans-regular invite-reps-text">User will have access to all the features of Dashboard</div>'
                        + '<div class="text-box-outer">'
                        + '<input type="text" class="opensans-regular" id="inviterepemail" placeholder="Mail Address" />'
                        + '</div>'
                        + '<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="InvitemyRep">Done</div>'
                        + '</div>';
            } else {
                html = '<h2 class="t-left f-color-green opensans-regular" style="">Invite Reps</h2>'
                        + '<div class="o-sub-content p-relative">'
                        + '<div class="f-sz-14 t-left opensans-regular invite-reps-text">User will have access to all the features of Dashboard</div>'
                        + '<div class="text-box-outer">'
                        + '<input type="text" class="opensans-regular" id="inviterepemail" placeholder="Mail Address" />'
                        + '</div>'
                        + '<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="InvitemyRep">Done</div>'
                        + '</div>';
            }


            return html;
        },
        staticRepsTemplate: function () {
            var html = '<div class="customer-home-parent clr-fl p-relative"> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> </div>';
            return html;
        }
    }
};
