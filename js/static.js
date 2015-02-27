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
        matchReleaseClaimTemplate: function () {
            var html = '<h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2>'
                    + '<div class="o-sub-content p-relative">'
                    + '<div class="alert-mess-text f-sz-18 t-center opensans-regular bold">The claim has been released to the carrier!</div>'
                    + '<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay">Done</div>'
                    + '</div>';
            return html;
        },
        sendAppLinkTemplate: function (data) {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Send app link to the customers</h2> <div class="o-sub-content-top border-bot p-relative"> <div class="link-content p-relative"> <div class="link opensans-regular f-sz-18">Link</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder=' + data + ' /> </div> </div> <div class="link-content p-relative"> <div class="message opensans-regular f-sz-18">Message</div> <div class="message-box textBox-placeholder-italic border-all"> <textarea draggable="false" class="textarea opensans-regular" placeholder="Type message" maxlength="170"></textarea> </div> </div> </div> '
                    + ' <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic"> <input type="search"'
                    + 'class="opensans-regular" id="id-overlaysendapplink"  placeholder="Search.." onkeyup="sendAppLinkkeyup(event)"  onkeypress="sendAppLinkkeyup(event)" /> <div  id="id-sendapplinksearchicon" class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + 'f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<select id="timepicker" class="none-1 opensans-regular left" onchange="Sharewithrep_sortbyBox1()"> <option selected> None </option> <option>Alphabetical</option> <option>City,State</option> </select>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <select id="timepicker2" class="none-1 opensans-regular left" onchange="sharewithRepSortbyBox2()"> <option selected> None </option> <option>Select All</option> <option>Section A</option> <option>Section B</option><option>Section C</option><option>Section D</option><option>Section E</option></select>  '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY,STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form>';
            return html;
        },
        editAgencyPicTemplate: function () {
            var html = '<div class="header-panel border-bot"> <div class="left-content-panel t-left left f-color-green f-sz-18 opensans-regular">'
                    + 'Agency Profile</div> <div class="right-content-panel t-right right f-color-red f-sz-12 opensans-regular"> <i>Manage Agency</i></div>'
                    + '</div> <div class="o-sub-content p-relative"> <div class="carriers-left-content left "> <div class="profile-pic-content"> '
                    + '<div id="id-agency-logo" class="agency-logo p-relative"> <img src="images/Logo.png" alt="" id="id-agencyprofilelogo" class="agencyprofilelogo"> '
                    + '</div> </div> </div> <div class="carriers-right-content left "> <div class="c-agency-logo"> '
                    + '<input type="text" id="id-agency-logo-name" class="txt-agency-logo-name opensans-regular f-sz-14" value="Agency Logo.jpg" disabled> '
                    + '<input type="file" style="display:none;" id="inputfile" onchange="readURL(this)" /> '
                    + '<div class="browse-button-content p-absolute f-color-w f-sz-16 opensans-regular" onclick="javascript:document.getElementById(\'inputfile\').click();"> Browse </div>'
                    + '</div> <div class="c-agency-name"> <input type="text" class="txt-agency-name opensans-regular f-sz-14" value="John Doe"> </div>'
                    + '<div class="c-agency-emailid"> <input type="text" class="txt-agency-emailid opensans-regular f-sz-14" value="johndoe@gmail.com"> </div> </div>'
                    + '</div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Save</div>';
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
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Push Message</h2> <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="c-textarea text-box-outer textBox-placeholder-italic"> <textarea draggable="false" id="idpushmessage-textarea" class="textarea opensans-regular" placeholder="Type message" maxlength="170"></textarea> </div> <div class="delivery-box clr-fl"> <div class="delivery-time left opensans-regular">Delivery Time</div> <div class="deliverytime-content left opensans-regular clr-fl"> <div class="now left"> <input id="radio-button-now" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-now\')"> <span class="txt-now opensans-regular f-sz-15">Now</span> </div> <div class="later left"> <input id="radio-button-later" type="radio" value="later" onclick="checkboxStatus(\'radio-button-later\')"> <span class="txt-later opensans-regular f-sz-15">Later</span> </div> </div> </div> </div> <div class="later-box clr-fl" style="display: none"> <div class="select-date-content left opensans-regular"> <div class="select-date left opensans-regular">Select Date</div> <div class="text-box-outer textBox-placeholder-italic left push-select-dropdown border-all p-relative"> '
                    + '<input id="datepicker" type="date" size="9" class="c-datepicker opensans-regular left" placeholder="22-11-2014" editable="false"/> <div class="sprite-im datepicker-icon p-absolute"></div> </div> </div> <div class="time-content left opensans-regular clr-fl"> <div class="time left opensans-regular">Time</div> <div class="text-box-outer textBox-placeholder-italic left time-dropdown-1 border-all p-relative" data-type="dt-time-dropdown"> '
                    + '<select id="pushmessagetimepicker" class="none-1 opensans-regular left"> </select> <div class="sprite-im drop-down-icon push-drop-down-icon-1 p-absolute"></div> </div> <div class="text-box-outer textBox-placeholder-italic left time-dropdown-2 border-all p-relative" data-type="dt-am-pm-dropdown"> <select id="ampmtimepicker" class="none-1 opensans-regular left"> <option selected> AM </option> <option>PM</option> </select> <div class="sprite-im drop-down-icon push-drop-down-icon-2 p-absolute"></div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn-pushmessage">Send</div> </div>';
            return html;
        },
        privacyTemplate: function () {
            var html = '  <h2 class="t-center f-color-green opensans-regular" style="">Privacy</h2> <div class="o-sub-content p-relative"> <h3 class="enable-text t-center f-sz-18 opensans-regular "><b>Enable / disable privacy option for your agency</b></h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-public" class="left" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-public\')">Make all profile public <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id-switchtop1-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(-1,\'id-switch-on\', \'id-switchtop1-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(-1,\'id-switch-off\', \'id-switchtop1-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-private" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-private\')"> Make all profile private <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id-switchtop2-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(-1,\'id-switch-on\', \'id-switchtop2-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(-1,\'id-switch-off\', \'id-switchtop2-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-custom" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-custom\')">Custom <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id-switchtop3-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(-1,\'id-switch-on\', \'id-switchtop3-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(-1,\'id-switch-off\', \'id-switchtop3-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <div class="text-box-outer textBox-placeholder-italic border-all"> '
                    + ' <input id="id-overlayprivacy" type="search" class="opensans-regular" placeholder="Search.." onkeyup="privacykeyup(event)"  onkeypress="privacykeyup(event)" /> <div id="id-privacysearchicon" class="c-privacysearch-icon search-icon sprite-im p-absolute"></div></div> <div class="success1" style=" display:none; color: green;"></div><div class="error1" style=" display:none; color: red;"></div> <div class="rep-block"> <div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold" style="width:25%;">Member Names</div> <div class="nameRepId opensans-regular t-upper left text-color-overlay bold">Rep ID</div> <div class="name-title opensans-regular t-upper right text-color-overlay bold">Private / Public</div> </div> <div class="rep-content-blk"> <form> '

                    ;
            return html;
        },
        /*Added by Naveen - Start */
        /*Naveen 23-2-2015 Chnage start*/
        showPhotsOverlayTemplate: function (alertID) {
            var numberOfPictures = 0, pictureThumbNailViewHTML = "", imageTextSavePrintHTML = "", originalImageHTML = "", sliderBar = "";
            console.log("HOMEPAGERESPONSE.RECURRINGALERTDFEEDS showPhotsOverlayTemplate", HOMEPAGERESPONSE.RECURRINGALERTDFEEDS);
            $.each(HOMEPAGERESPONSE.RECURRINGALERTDFEEDS, function (index, alertDetailsValue) {
                var alerIDValue = alertDetailsValue.alertDetails.alertId;
                if (alertID == alertDetailsValue.alertDetails.alertId) {
                    console.log("condition satisfied alertDetailsValue", alertDetailsValue);
                    numberOfPictures = alertDetailsValue.NoofPictureRecord;
                    RESPONSE.PICTUREDETAILS = alertDetailsValue.PictureDetails;
                    console.log("noOfPictureRecords", numberOfPictures);
                }
            });
            console.log("RESPONSE.PICTUREDETAILS Length", RESPONSE.PICTUREDETAILS.length);
            console.log("numberOfPictures", numberOfPictures);
            $.each(RESPONSE.PICTUREDETAILS, function (i, element) {
                console.log("media id", element.mediaId);
                RESPONSE.MEDIAIDFORPICTURE.push(element.mediaId);
                RESPONSE.IMAGEURLS.push(element.file);
                RESPONSE.IMGETEXT.push(element.imageText);
            });
            /* if (numberOfPictures > 5) {
             sliderBar = '<div id="slider-vertical" style="float:left;position: absolute;height: 332px;left: 96px;top: 10px;">'
             + '</div>';
             } */
            for (var i = 1, j = 0; i <= numberOfPictures; i++, j++) {
                console.log("in for loop");
                var pictureValue = HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.IMAGEURLS[j];
                pictureThumbNailViewHTML = pictureThumbNailViewHTML
                        + '<div style="margin-bottom: 10px;cursor:pointer;" class="overalyPhots" data-type="thumbNail" name=' + RESPONSE.MEDIAIDFORPICTURE[j] + '><img src=' + pictureValue + ' style="max-width:100%;" /></div>';
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
                    + '<div style="width:50%;float:left;margin-top:25px;margin-left:25px;color:#939393" class"opensans-regular">'
                    + '<span id="imageinformation" style="color:rgb(47,156,161);">' + RESPONSE.IMGETEXT[0] + '</span><span>,New jersy</span>'
                    + '</div>'
                    + '<a id="downloadImageLink" style="float:left;margin-left:20px;margin-top:20px;" href=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.IMAGEURLS[0] + ' download>'
                    + '<img src="images/saveImage.png" style="margin-right:10px;" />'
                    + '</a>'
                    + '<a id="printImageICON" style="float:left;margin-left:20px;margin-top:20px;" href="#" data-type="printPage">'
                    + '<img src="images/printImage.png" />'
                    + '</a>'
                    + '</div>'
                    + '<div style="width:100%;position: absolute;top: 69px;background:white;border-top:2px solid #939393">'
                    + '<div style="width:80%;position: absolute;  margin: auto;  top: 65px;  left: 72px;">'
                    + '<div style="margin: auto;position: absolute;top: 31px;left: 113px;">'
                    + '<div style="max-height: 220px;  max-width: 300px;  margin-left: auto;  margin-right: auto;" id="viewImage">'
                    + '<img src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.IMAGEURLS[0] + ' style="max-height: 220px;max-width: 300px;"/>'
                    + '</div>'
                    + '<div style="position: absolute;top: 77px;">'
                    + '<div style="position: absolute;left: -139px;display:none;" id="previousICON">'
                    + '<a href="javascript:void(0)" class="overalyPhots previous" data-type="previous"><img src="images/backwardArrow.png" /></a>'
                    + '</div>'
                    + '<div style="position: absolute;right: -289px;top:10px;" id="nextICON">'
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
            var numberOfAudio = 0, voiceThumbNailViewHTML = "", resultThumbNail = "", originalAudioFileHTML = "", resultOriginaAudioFile = "", sliderBar = "";
            $.each(HOMEPAGERESPONSE.RECURRINGALERTDFEEDS, function (index, alertDetailsValue) {
                var alerIDValue = alertDetailsValue.alertDetails.alertId;
                if (alertID == alertDetailsValue.alertDetails.alertId) {
                    console.log("condition satisfied alertDetailsValue", alertDetailsValue);
                    numberOfAudio = alertDetailsValue.NoofAudioRecord;
                    RESPONSE.AUDIODETAILS = alertDetailsValue.AudioDetails;
                    //console.log("noOfPictureRecords",numberOfPictures);
                }
            });
            console.log("audioDetailsArray", RESPONSE.AUDIODETAILS.length);
            $.each(RESPONSE.AUDIODETAILS, function (i, element) {
                audioTimeStamp = element.lastModified;
                audioTime = moment(Number(audioTimeStamp)).format('h:mmA');
                console.log("media id", element.mediaId);
                RESPONSE.MEDIAID.push(element.mediaId);
                RESPONSE.AUDIOTEXT.push(element.fileName);
                RESPONSE.TIMESTAMPAUDIO.push(audioTime);
                RESPONSE.AUDIOURLS.push(element.file);
            });
            console.log("RESPONSE.MEDIAID", RESPONSE.MEDIAID);
            /* if (numberOfAudio > 5) {
             sliderBar = '<div id="slider-vertical" style="float:left;position: absolute;height: 332px;left: 96px;top: 10px;">'
             + '</div>';
             } */
            for (var i = 1, j = 0; i <= numberOfAudio; i++, j++) {
                var audioValue = HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[j];
                console.log();
                voiceThumbNailViewHTML = voiceThumbNailViewHTML
                        + '<div style="text-align:center;color:#939393;margin-bottom:10px;background:white;cursor:pointer;" class="opensans-regular audioOverlay" data-type="thumbNail" name=' + RESPONSE.MEDIAIDFORPICTURE[j] + '>'
                        + '<img src="images/voiceRecording.png" style="max-width:30px;"/>'
                        + '<p id="mediaID" name=' + audioValue + '>' + RESPONSE.MEDIAID[j] + '</p>'
                        + '<p style="">' + RESPONSE.TIMESTAMPAUDIO[j] + '</p>'
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
                    + '<div style="width:50%;float:left;margin-top:25px;margin-left:25px;color:#939393" class"opensans-regular">'
                    + '<span id="voiceinformation" style="color:rgb(47,156,161);">' + RESPONSE.AUDIOTEXT[0] + '</span><span>,New jersy</span>'
                    + '</div>'
                    + '<a id="downloadAudioLink" style="float:left;margin-left:20px;margin-top:20px;" href=' + audioValue + ' download>'
                    + '<img src="images/saveImage.png" style="margin-right:10px;"/>'
                    + '</a>'
                    + '<a style="float:left;margin-left:20px;margin-top:20px;" href="#">'
                    + '<img src="images/printImage.png" />'
                    + '</a>'
                    + '</div>'

                    + '<div style="width:100%;position: absolute;top: 69px;background:white;border-top:2px solid #939393;min-height:406px;">'


                    + '<div style="width:80%;position: absolute;  margin: auto;  top: 160px;  left: 120px;" id="viewVoice">'
                    + '<audio id="music" preload="none" controls style="">'
                    + '<source src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[0] + '>'
                    + '<source src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[0] + '>'
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
            var resultThumbNail = "", noofDocuments = 0, sliderBar = "", resultDocumentFile = "", documentThumbNailViewHTML = "", originalImageHTML = "", imageTextSavePrintHTML = "";
            $.each(HOMEPAGERESPONSE.RECURRINGALERTDFEEDS, function (i, element) {
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
                console.log("element.fileName", element.fileName);
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
            for (var i = 1, j = 0; i <= noofDocuments; i++, j++) {
                console.log("in for loop");
                documentThumbNailViewHTML = documentThumbNailViewHTML
                        + '<div style="text-align:center;color:#939393;margin-bottom: 10px;background: white;height: 90px;cursor:pointer;" class="opensans-regular overlayDocs" data-type="thumbNail"><p style="padding-top:30px;" id=' + RESPONSE.OTHERPARTYIDS[j] + '>' + RESPONSE.NAMES[j] + '</p></div>';
            }
            /* docTextSavePrintHTML = '<span class="spanCLassElement t-left f-color-green opensans-regular" style="margin:0px">' + RESPONSE.NAMES[0] + '</span>'; */
            originalDocumentHTML = '<div class="leftDiv">'
                    + '<p id="textOverlayName">'
                    + '<span class="firstSpan">Name</span>'
                    + '<span class="secondSpan">' + RESPONSE.NAMES[0] + '</span>'
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
                    + '<div style="width:50%;float:left;margin-top:25px;margin-left:25px;color:#939393" class"opensans-regular">'
                    + '<span id="textinformation" style="color:rgb(47,156,161);">' + RESPONSE.NAMES[0] + '</span>'
                    + '</div>'
                    + '<a id="downloadTextLink" style="float:left;margin-left:20px;margin-top:20px;" href="#" download>'
                    + '<img src="images/saveImage.png" style="margin-right:10px;"/>'
                    + '</a>'
                    + '<a id="printTextOverlay" style="float:left;margin-left:20px;margin-top:20px;" href="#" data-type="printPage">'
                    + '<img src="images/printImage.png" />'
                    + '</a>'
                    + '</div>'

                    + '<div style="width:100%;position: absolute;top: 69px;background:white;border-top:2px solid #939393;min-height:406px;">'
                    + '<div style="width:80%;position: absolute;  margin: auto;  top: 33px;  left: 70px;" id="viewText">'
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
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Property Policy</h2> <div class="o-sub-content p-relative"> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Name</div> <div class="policy-value t-left right f-sz-16">Ideal Insurance &#38; co</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Number</div> <div class="policy-value t-left right f-sz-16">#4567</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Due Amount</div> <div class="policy-value t-left right f-sz-16"><span class="money-sym">$</span>255</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Next Due Date</div> <div class="policy-value t-left right date-format f-sz-16">25 Feb 2015</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Property</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Policy duration</div> <div class="policy-value t-left right f-sz-16">Sep 2012 to Sep 2015</div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Done</div> </div> ';
            return html;
        },
        healthPolicyTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Health Policy</h2> <div class="o-sub-content p-relative"> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Name</div> <div class="policy-value t-left right f-sz-16">Ideal Insurance &#38; co</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Number</div> <div class="policy-value t-left right f-sz-16">#4567</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Due Amount</div> <div class="policy-value t-left right f-sz-16"><span class="money-sym">$</span>255</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Next Due Date</div> <div class="policy-value t-left right date-format f-sz-16">25 Feb 2015</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Property</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Policy duration</div> <div class="policy-value t-left right f-sz-16">Sep 2012 to Sep 2015</div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Done</div> </div> ';
            return html;
        },
        vehiclePolicyTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Vehicle Policy</h2> <div class="o-sub-content p-relative"> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Name</div> <div class="policy-value t-left right f-sz-16">Ideal Insurance &#38; co</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Carrier Number</div> <div class="policy-value t-left right f-sz-16">#4567</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Due Amount</div> <div class="policy-value t-left right f-sz-16"><span class="money-sym">$</span>255</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Next Due Date</div> <div class="policy-value t-left right date-format f-sz-16">25 Feb 2015</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Property</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-right left f-sz-16">Policy duration</div> <div class="policy-value t-left right f-sz-16">Sep 2012 to Sep 2015</div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Done</div> </div> ';
            return html;
        },
        addVendorDetailsTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Add Vendor details</h2> <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="left-sub-content left p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Type</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input id="id-vendortype" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 1</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input id="id-vendoraddress1" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Phone</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input id="id-vendorphone" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">State</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input id="id-vendorstate" type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> <div class="right-sub-content right p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Name</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input id="id-vendorname" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 2</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input id="id-vendoraddress2" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">City</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input id="id-vendorcity" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Zip</div> <div class="url-box right text-box-outer textBox-placeholder-italic border-all"> <input id="id-vendorzip" type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn_addvendordetails">Save</div> ';
            return html;
        },
//        editVendorDetailsTemplate: function () {
//            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Edit Vendor details</h2> <div class="o-sub-content p-relative"> <div class="left-sub-content left p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Type</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 1</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Phone</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">State</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> <div class="right-sub-content right p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Name</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 2</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">City</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Zip</div> <div class="url-box right text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Save</div> ';
//            return html;
//        },
        staticFeedViewTemplate: function (recurringAlertFeeds, currentTarget) {
            console.log("staticFeedTemplate recurringAlertFeeds", recurringAlertFeeds);
            console.log("staticFeedTemplate currentTarget", currentTarget);
            var userEmail = currentTarget.find("div span").attr("id"), profilePicture = "", alertFeed = "";
            noOfOtherPartyRecordsCount = "", noOfAudioRecordCount = "", noOfPictureRecord = "";
            $.each(recurringAlertFeeds, function (index, viewAlertFeed) {
                if (userEmail == viewAlertFeed.userDetails.emailId.email) {
                    console.log("matchFound");
                    profilePicture = HOMEPAGERESPONSE.PROFILEAPI + viewAlertFeed.userDetails.profilePicture;
                    firstName = viewAlertFeed.userDetails.firstName;
                    lastName = viewAlertFeed.userDetails.lastName;
                    //userName = firstName+''+lastName;
                    gender = viewAlertFeed.userDetails.gender;
                    bDay = viewAlertFeed.userDetails.birthDate;
                    bDate = moment(bDay).format('ll');
                    residentialCity = viewAlertFeed.userDetails.residentialCity;
                    phoneNumber = viewAlertFeed.userDetails.phone.number;
                    alertType = viewAlertFeed.alertDetails.type;
                    alertDate = viewAlertFeed.alertDetails.alertDate;
                    alertTime = moment(Number(alertDate)).format('h:mmA');
                    noOfOtherPartyRecordsCount = viewAlertFeed.NoofOtherPartyRecord;
                    noOfAudioRecordCount = viewAlertFeed.NoofAudioRecord;
                    noOfPictureRecord = viewAlertFeed.NoofPictureRecord;
                    alertId = viewAlertFeed.alertDetails.alertId;
                    if (alertType == "policyalert") {
                        policyChangeValue = viewAlertFeed.alertDetails.PolicyChangeSelected;
                    }
                }
            });
            console.log("alertType");
            if (alertType == "incidentalert") {
                if (noOfOtherPartyRecordsCount === undefined && noOfPictureRecord === undefined && noOfAudioRecordCount === undefined) {
                    console.log("condition satisfied");
                    noOfOtherPartyRecordsCount = 0;
                    noOfPictureRecord = 0;
                    noOfAudioRecordCount = 0;
                }
                alertFeed = '<div class="feed-det bg-color-dblue p-relative">'
                        + '<div class="feed-docs-pad p-relative docs-block t-center">'
                        + '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc" id=' + alertId + '>'
                        + '<div class="t-center p-relative">'
                        + '<div class="doc-icon-box" >'
                        + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + noOfOtherPartyRecordsCount + '</span></div>'
                        + '<div class="feed-menu-text bold">Text</div>'
                        + '</div>'
                        + '</a>'
                        + '<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc" id=' + alertId + '>'
                        + '<div class="t-center p-relative">'
                        + '<div class="doc-icon-box" >'
                        + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + noOfPictureRecord + '</span></div>'
                        + '<div class="feed-menu-text bold">Photos</div>'
                        + '</div>'
                        + '</a>'
                        + '<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc" id=' + alertId + '>'
                        + '<div class="t-center p-relative">'
                        + '<div class="doc-icon-box" >'
                        + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">' + noOfAudioRecordCount + '</span></div>'
                        + '<div class="feed-menu-text bold">Voice</div>'
                        + '</div>'
                        + '</a>'
                        + '</div>'
                        + '</div>';
            } else {
                alertFeed = '<a href="/changecoverage" class="snap feed-doc-btn block f-sz-17 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
                        + '<div class="t-center p-relative">'
                        + '<div class="sprite-im message-green-icon center-icon">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-addRemove-text t-center p-relative t-caps">Add / change coverage on home</div>'
                        + '</a>';
            }
            var html = '<div class="view-feed-block">'
                    + '<div class="view-in-blocks inline-block v-align-mid bg-color-dblue p-relative">'
                    + '<div class="p-relative">'
                    + '<div class="feed-user-top-details">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box border-all">'
                    + '<img src=' + profilePicture + ' alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'

                    + '<div class="feed-user-details-top inline-block v-align-mid">'
                    + '<div class="line1">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps bold">' + firstName + '&nbsp' + lastName + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">' + alertTime + '</div>'
                    + '</div>'
                    + '<div class="line1">' + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-name t-caps">' + gender + '</div>'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-bday t-upper">' + bDate + '</div>'
                    + '</div>'
                    + '<div class="feed-user-other-details">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">' + bDate + '</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">' + residentialCity + '</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">' + phoneNumber + '</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">' + userEmail + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>' + '<div class="feed-user-bottom-details">'
                    + '<div class="inline-block v-align-mid">'
                    + '<a href="/share" class="snap feed-btn bg-color-green block f-sz-14 opensans-regular f-color-w share p-relative t-center" data-type="share">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
                    + '</div>'
                    + '</a>'
                    + '<div class="bg-color-green block feed-btn f-sz-14 opensans-regular f-color-w p-relative t-center alert-type-box">' + alertType + ''
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
                    + '<div class="inline-block v-align-mid" style="margin-left:70px;">'
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
                    + '<div class="insurance-policy-blk">'
                    + '<div class="policy-det-blk inline-block  v-align-mid">'
                    + '<input type="checkbox" id="policy1" name="" class="checkbox" />'
                    + '<label for="policy1" class="policy-label">'
                    + '<div class="p-relative insurance-main-det inline-block v-align-top">'
                    + '<div class="insurance-tit-blk">'
                    + '<div class="f-sz-16 inline-block opensans-regular">Ideal Insurance,</div>'
                    + '<div class="f-sz-13	inline-block opensans-regular">#454723</div>'
                    + '</div>'
                    + '<div class="insurance-det-blk">'
                    + '<ul class="ins-sub-det-group f-sz-12 opensans-regular">'
                    + '<li class="t-left">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Due Amount">Due Amount</span>'
                    + '<span class="inline-block v-align-mid t-center">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">$244</span>'
                    + '</li>'
                    + '<li class="t-left">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Next Due Date">Next Due Date</span>'
                    + '<span class="inline-block v-align-mid t-center">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">Oct 25, 2026</span>'
                    + '</li>'
                    + '<li class="t-left">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Policy Type">Policy Type</span>'
                    + '<span class="inline-block v-align-mid t-center">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">Property</span>'
                    + '</li>' + '</div>'
                    + '</div>'
                    + '</label>'
                    + '</div>'
                    + '<div class="policy-btn-blk inline-block p-relative v-align-mid">'
                    + '<div class="p-relative f-sz-12 opensans-regular t-center">'
                    + '<div class="date-blk p-relative">'
                    + '<span class="bold">Sep 24,2014</span>'
                    + '<span>to</span>'
                    + '<span class="bold">Oct 25,2026</span>'
                    + '</div>'
                    + '<div class="match-blk p-relative">'
                    + '<a href="/matchReleaseClaim" class="snap bg-color-green block f-sz-12 ptsans-light t-upper t-center matchReleaseClaim p-relative f-color-w" data-type="matchReleaseClaim">'
                    + '<div>Match & Release Claim</div>'
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="insurance-policy-blk">'
                    + '<div class="policy-det-blk inline-block  v-align-mid">'
                    + '<input type="checkbox" id="policy2" name="" class="checkbox" />'
                    + '<label for="policy2" class="policy-label">'
                    + '<div class="p-relative insurance-main-det inline-block v-align-top">'
                    + '<div class="insurance-tit-blk">'
                    + '<div class="f-sz-16 inline-block opensans-regular">Ideal Insurance,</div>'
                    + '<div class="f-sz-13	inline-block opensans-regular">#454723</div>'
                    + '</div>'
                    + '<div class="insurance-det-blk">'
                    + '<ul class="ins-sub-det-group f-sz-12 opensans-regular">'
                    + '<li class="t-left">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Due Amount">Due Amount</span>'
                    + '<span class="inline-block v-align-mid t-center">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">$244</span>'
                    + '</li>'
                    + '<li class="t-left">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Next Due Date">Next Due Date</span>'
                    + '<span class="inline-block v-align-mid t-center">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">Oct 25, 2026</span>'
                    + '</li>'
                    + '<li class="t-left">'
                    + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head" title="Policy Type">Policy Type</span>'
                    + '<span class="inline-block v-align-mid t-center">:</span>'
                    + '<span class="t-left inline-block v-align-mid bold">Property</span>'
                    + '</li>' + '</div>'
                    + '</div>'
                    + '</label>'
                    + '</div>'
                    + '<div class="policy-btn-blk inline-block p-relative v-align-mid">'
                    + '<div class="p-relative f-sz-12 opensans-regular t-center">'
                    + '<div class="date-blk p-relative">'
                    + '<span class="bold">Sep 24,2014</span>'
                    + '<span>to</span>'
                    + '<span class="bold">Oct 25,2026</span>'
                    + '</div>'
                    + '<div class="match-blk p-relative">'
                    + '<a href="/matchReleaseClaim" class="snap bg-color-green block f-sz-12 ptsans-light t-upper t-center matchReleaseClaim p-relative f-color-w" data-type="matchReleaseClaim">'
                    + '<div>Match & Release Claim</div>	'
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
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

            resultCarrier = JSON.parse(localStorage.getItem("users"));

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

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">carrier id</div> <div class="carrier-view-id inline-block">' + viewdata.carrierId + '</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="' + HOMEPAGERESPONSE.PROFILEAPI + viewdata.carrierLogo + '" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-regular f-color-w"><a href="' + viewdata.website.value + '" target="_blank">website</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w"><a href="' + viewdata.facebookPage + '" target="_blank">facebook</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency name</div> <div class="carrier-left-content t-left right ">' + viewdata.carrierName + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">' + viewdata.address + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + viewdata.address + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">' + viewdata.state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">' + viewdata.city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right"><a href="tel:' + viewdata.phone.number + '">' + viewdata.phone.number + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">' + viewdata.zip + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a href="mailto:' + carrieremail + '">' + carrieremail + '</a></div> </div> </div> </div> </div> </div> </div> '
//                    + '<div class="associated-carrierview p-relative"> <div class="p-relative ">'
//                    + '<select class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED REPS</option><option>ASSOCIATED CUTOMERS</option></select> '
//                    + '<div id="associatedownarrow" class="p-relative inline-block"> <div id="associatedownarrow" class="sprite-im drop-down-icon">&nbsp;</div> </div> </div> <div class="associated-carrier-feed p-relative border-bot"> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">james jeo</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">Hugh jackman</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">smith</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">anderson</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> </div> </div>';
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
            if (data.phone.number != undefined) {
                phone = data.phone.number;
            } else {
                phone = "";
            }

            if (data.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + data.profilePicture;
            } else {
                profilePicture = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
            }
            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="customer-view-feed inline-block v-align-mid p-relative"> <div class="customer-logo-view p-relative"> <div class="customerlogo-viewpic"> <img src=' + profilePicture + ' alt="" class="carrier-img-width"> </div> </div> '
                    + '<div class="customer-view-name opensans-regular t-caps t-center p-relative">' + firstname + '</div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">first name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> '
                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">last name</div> <div class="carrier-left-content t-left right">' + lastename + '</div> <div class="customer-view-mbapp p-relative inline-block v-align-top right"> <div class="sprite-im carrier-mobile-icon">&nbsp;</div> </div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">gender</div> <div class="carrier-left-content t-left right ">' + gender + '</div>'
                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">occupation</div> <div class="carrier-left-content t-left right">' + occupation + '</div> '
                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">year of birth</div>'
                    + '<div class="carrier-left-content t-left right ">' + dob + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential city</div> <div class="carrier-left-content t-left right">' + city + '</div>'
                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">residential state</div> '
                    + '<div class="carrier-left-content t-left right t-upper ">' + state + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential zipcode</div>'
                    + '<div class="carrier-left-content t-left right">' + zipcode + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right t-caps left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a href="mailto:' + email + '">' + email + '</a></div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                    + '<div class="carrier-left-content t-left right"><a href="tel:' + phone + '">' + phone + '</a></div> </div> </div> </div> </div> <div class="customer-view-button p-relative"> <div class="customer-view-policy inline-block t-caps t-center opensans-regular">policies</div> <div class="customer-policy-button p-relative inline-block bg-color-red t-caps t-center opensans-regular f-color-w snap" data-type="dt-propertypolicy">property policy</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-healthpolicy">health policy</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-vehiclepolicy">vehicle policy</div> </div> </div> </div> <div class="associated-carrierview p-relative"> <div class="p-relative "> <div class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED REPS</div> <div id="associatedownarrow" class="p-relative inline-block" style="display:none;"> <div  class="sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';

            return html;
        },
        staticSettingsTemplate: function (data) {

            console.log(data);

            var html = ' <form id="carrier-form"> <div class="carrier-view-parent p-relative"> <div class="app-link t-upper opensans-regular p-relative">app download link</div> <div class="app-parent p-relative"> '
                    + '<div class="app-download-bar inline-block p-relative bg-color-white">' + data.resultMap.appDownloadLink + '</div> <div class="send-app-bar inline-block p-relative border-all bg-color-green t-caps t-center opensans-regular f-color-w"><a class="snap f-color-w" href="javascript:void(0)" data-type="sendapplink" >send app link</a></div> </div> <div class="settings-click-button clr-fl"><div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div> <div class="settings-agency-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-agency-view-load" data-type="agency-view-load" >agency</a></div> <div class="settings-vendor-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-preferred-vendors-view-load" data-type="preferred vendors-view-load" >preferred vendors</a></div> <div class="settings-edit-bar right inline-block p-relative bg-color-green "><div class="p-relative inline-block"> <div class="edit-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"> <a id="id-carrier-edit" class="snap f-color-w" href="javascript:void(0)" data-type="agency-edit-load">edit</a></div> </div><div class="removevendor-bar right inline-block p-relative bg-color-green "> <div class="p-relative inline-block"> <div class="remove-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="snap f-color-w" href="javascript:void(0)" data-type="agency-remove-load" >remove</a></div> </div> <div class="addvendor-bar right inline-block p-relative bg-color-green "> <div class="p-relative inline-block"> <div class="add-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="snap f-color-w" href="javascript:void(0)" data-type="agency-addvendor-load" >add vendor</a></div></div></div> <div class="bg-color-white"><div class="agency-view-block"><div class="settings-view-leftblock inline-block v-align-mid p-relative"> <div class="settings-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-upper">agency id</div> '
                    + '<div class="carrier-view-id inline-block">' + data.resultMap.agencyDetails.agencyId + '</div> </div> <div class="settings-logo-view p-relative"> '
                    + '<div class="settingslogo-viewpic"> <img src=http://2-dot-proto-call-test.appspot.com/file/' + data.resultMap.agencyDetails.agencyLogo + ' alt="" class="carrier-img-width"> </div> </div> <div class="settings-view-social p-relative clr-fr"> <div class="settings-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> '
                    + '<div class="carrier-website-name inline-block t-caps opensans-regular f-color-w t-center"><a href="' + data.resultMap.agencyDetails.website.value + '">website</a></div> </div> <div class="settings-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w t-center">facebook</div> </div> </div> </div> <div class="settings-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier agency id</div> '
                    + '<div id="id-c-agencyid" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.carrierAgencyId + '</div> <input id="id-carrier-agencyid" class="carrier-left-content-textbox t-left right p-absoalute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">master agency id</div> '
                    + '<div class="carrier-left-content t-left right" id="id-c-masteragencyid" style="visibility: visible">' + data.resultMap.agencyDetails.agencyId + '</div> <input id="id-carrier-masteragencyid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency type</div> '
                    + '<div id="id-c-agencytype" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.agencyType + '</div> <input id="id-carrier-agencytype" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">name</div> '
                    + '<div id="id-c-agencyname" class="carrier-left-content t-left right" style="visibility: visible">' + data.resultMap.agencyDetails.agencyName + '</div> <input id="id-carrier-agencyname" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                    + '<div id="id-c-agencyaddress1" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.address + '</div> <input id="id-carrier-agencyaddress1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                    + '<div id="id-c-agencyaddress2" class="carrier-left-content t-left right" style="visibility: visible">' + data.resultMap.agencyDetails.address2 + '</div> <input id="id-carrier-agencyaddress2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> '
                    + '<div id="id-c-agencycity" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.city + '</div> <input id="id-carrier-agencycity" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> '
                    + '<div id="id-c-agencystate" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.agencyDetails.state + '</div> <input id="id-carrier-agencystate" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> '
                    + '<div id="id-c-agencyzip" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.zipcode + '</div> <input id="id-carrier-agencyzipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                    + '<div id="id-c-agencyphone" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.agencyDetails.phone.number + '</div> <input id="id-carrier-agencyphone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right left t-caps">email</div>'
                    + '<div id="id-c-agencyemail" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.emailId.email + '</div> <input id="id-carrier-agencyemail" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left"></div> <div class="carrier-left-content t-left right t-upper"></div> </div> </div> </div> </div> </div></div> <div class="preferred-vendor-block inline-block v-align-mid p-relative clr-fl"> <div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-upper opensans-regular "> <div id ="id-vendornamebox" class="carrier-left-title t-upper t-left inline-block ">name</div> '
                    + '<div id ="id-vendortypebox" class="carrier-left-title t-right inline-block">type</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-upper opensans-regular"> <div class="carrier-left-title t-left inline-block">phone</div> <div class="carrier-left-title t-right inline-block">state,city</div> </div> </div> </div>';

            for (var index = 0; index < data.resultMap.listOfPreferredVendor.length; index++) {

                html += '<div id="item_' + index + '" class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular ">'
                        + '<input type="checkbox" id="removevendor_' + index + '" value=' + data.resultMap.listOfPreferredVendor[index].serviceId + ' class="checkbox remove-vendor"> <label for="removevendor_' + index + '" class="vendor-label"></label>'
                        + '<div id="id-prefeeredvendorbox" class="carrier-left-title t-left inline-block ">'
                        + '<a id=' + data.resultMap.listOfPreferredVendor[index].serviceId + ' class="preferredvendor snap name-color" href="javascript:void(0)" data-type="vendor-profile-info" >' + data.resultMap.listOfPreferredVendor[index].serviceName + '</a></div> '
                        + '<div id="id-vendortypebox" class="carrier-left-title t-right inline-block">' + data.resultMap.listOfPreferredVendor[index].serviceType + '</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> '
                        + '<div class="carrier-left-title t-left inline-block">' + data.resultMap.listOfPreferredVendor[index].city + '</div> '
                        + '<div class="carrier-left-title t-right inline-block">' + data.resultMap.listOfPreferredVendor[index].city + "," + data.resultMap.listOfPreferredVendor[index].state + '</div> </div> </div> </div> ';
            }


            return html;

        },
        staticMyProfileViewTemplate: function () {
            var html = '<div class="agenyparent-class bg-color-white"> <div class="p-relative"> <form> <div class="agenyleft-profile inline-block v-align-mid p-relative"> <div class="agenyleft-image"> <div class="overflow-hidden"> <div class="agenypic-info"> <img src=' + sessionStorage.profilePic + ' alt="" class="ageny-img-width"> </div><div class="v-align-mid opensans-regular text-color-overlay f-sz-12 p-relative" style="padding:0px 25px;"> <div class="sprite-im profcamera-icon inline-block"> &nbsp; </div><div class="t-upper inline-block"> Change Image </div><input type="file" name="agency-prof-img" id="agency-prof-img" onchange="readURL(this);"/> </div></div></div></div><div class="agenyright-profile inline-block v-align-mid"> <div class="agenyparent-block"> <div class="agenyinternal-block"> <div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Name </div><div class="agenycontent-block inline-block p-relative"> <span class="profile-result-cls" id="nameview"> ' + sessionStorage.agencyName + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="namenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative" > Phone </div><div class="agenycontent-block inline-block p-relative"> <span class="profile-result-cls" id="phoneview"> ' + sessionStorage.agencyPhone + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="phonenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Email </div><div class="agenycontent-block inline-block p-relative"> <span class="profile-result-cls" id="emailview"> ' + sessionStorage.agencyEmail + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="emailnew"> </div></div></div></div></div></form> </div></div>';
            return html;
        }
    },
    myreps: {
        inviteRepsTemplate: function () {
            var html = '<h2 class="t-left f-color-green opensans-regular" style="">Invite Reps</h2>'
                    + '<div class="o-sub-content p-relative">'
                    + '<div class="f-sz-14 t-left opensans-regular invite-reps-text">User will have access to all the features of Dashboard</div>'
                    + '<div class="text-box-outer">'
                    + '<input type="text" class="opensans-regular" placeholder="Mail Address" />'
                    + '</div>'
                    + '<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Done</div>'
                    + '</div>';
            return html;
        },
        staticRepsTemplate: function () {
            var html = '<div class="customer-home-parent clr-fl p-relative"> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> </div>';
            return html;
        }
    }
};
