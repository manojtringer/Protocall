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
        sendAppLinkTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Send app link to the customers</h2> <div class="o-sub-content-top border-bot p-relative"> <div class="link-content p-relative"> <div class="link opensans-regular f-sz-18">Link</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="https://protocall.com/app.store/detail?" /> </div> </div> <div class="link-content p-relative"> <div class="message opensans-regular f-sz-18">Message</div> <div class="message-box textBox-placeholder-italic border-all"> <textarea draggable="false" class="textarea opensans-regular" placeholder="Type message" maxlength="170"></textarea> </div> </div> </div> '
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
        privacyTemplate: function () {
            var html = '  <h2 class="t-center f-color-green opensans-regular" style="">Privacy</h2> <div class="o-sub-content p-relative"> <h3 class="enable-text t-center f-sz-18 opensans-regular "><b>Enable / disable privacy option for your agency</b></h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-public" class="left" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-public\')">Make all profile public <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id-switch-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(\'id-switch-on\', \'id-switch-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(\'id-switch-off\', \'id-switch-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-private" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-private\')"> Make all profile private <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id2-switch-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(\'id-switch-on\', \'id2-switch-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(\'id-switch-off\', \'id2-switch-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-custom" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-custom\')">Custom <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id3-switch-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(\'id-switch-on\', \'id3-switch-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(\'id-switch-off\', \'id3-switch-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <div class="text-box-outer textBox-placeholder-italic border-all"> '
                    + '<input type="search" class="opensans-regular" id="id-overlayprivacy"  placeholder="Search.." onkeyup="privacykeyup(event)"  onkeypress="privacykeyup(event)" /> <div id="id-privacysearchicon" class="c-privacysearch-icon search-icon sprite-im p-absolute"></div></div> <div class="rep-block"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">Member Names</div> <div class="nameRepId opensans-regular t-upper left text-color-overlay bold">Rep ID</div> <div class="name-title opensans-regular t-upper right text-color-overlay bold">Private / Public</div> </div> <div class="rep-content-blk"> <form> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name1" name="" class="checkbox" /> <label for="name1" class="rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="nameRepId f-sz-14 text-color-overlay left"><i>#5454547</i></div> <div class="t-caps f-sz-13 right t-right location-color rep-location"> <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id4-switch-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(\'id-switch-on\', \'id4-switch-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(\'id-switch-off\', \'id4-switch-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name2" name="" class="checkbox" /> <label for="name2" class="rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="nameRepId f-sz-14 text-color-overlay left"><i>#5454547</i></div> <div class="t-caps f-sz-13 right t-right location-color rep-location"> <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id5-switch-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(\'id-switch-on\', \'id5-switch-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(\'id-switch-off\', \'id5-switch-container\')"> OFF</span> <input type="checkbox" checked=""></div></div></div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name3" name="" class="checkbox" /> <label for="name3" class="rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="nameRepId f-sz-14 text-color-overlay left"><i>#5454547</i></div> <div class="t-caps f-sz-13 right t-right location-color rep-location"> <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id6-switch-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(\'id-switch-on\', \'id6-switch-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(\'id-switch-off\', \'id6-switch-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name4" name="" class="checkbox" /> <label for="name4" class="rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="nameRepId f-sz-14 text-color-overlay left"><i>#5454547</i></div> <div class="t-caps f-sz-13 right t-right location-color rep-location"> <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id7-switch-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(\'id-switch-on\', \'id7-switch-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(\'id-switch-off\', \'id7-switch-container\')"> OFF</span> <input type="checkbox" checked=""></div></div></div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name5" name="" class="checkbox" /> <label for="name5" class="rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="nameRepId f-sz-14 text-color-overlay left"><i>#5454547</i></div> <div class="f-sz-13 right t-right location-color rep-location"> <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id8-switch-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(\'id-switch-on\', \'id8-switch-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(\'id-switch-off\', \'id8-switch-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </div> </div> </label> </div> </form> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtnPrivacySend">Send</div> </div> </div> ';
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
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Push Message</h2> <div class="o-sub-content p-relative"> <div class="c-textarea text-box-outer textBox-placeholder-italic"> <textarea draggable="false" class="textarea opensans-regular" placeholder="Type message" maxlength="170"></textarea> </div> <div class="delivery-box clr-fl"> <div class="delivery-time left opensans-regular">Delivery Time</div> <div class="deliverytime-content left opensans-regular clr-fl"> <div class="now left"> <input id="radio-button-now" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-now\')"> <span class="txt-now opensans-regular f-sz-15">Now</span> </div> <div class="later left"> <input id="radio-button-later" type="radio" value="later" onclick="checkboxStatus(\'radio-button-later\')"> <span class="txt-later opensans-regular f-sz-15">Later</span> </div> </div> </div> </div> <div class="later-box clr-fl"> <div class="select-date-content left opensans-regular"> <div class="select-date left opensans-regular">Select Date</div> <div class="text-box-outer textBox-placeholder-italic left push-select-dropdown border-all p-relative"> <input id="datepicker" type="date" size="9" class="c-datepicker opensans-regular left" placeholder="22-11-2014" /> <div class="sprite-im datepicker-icon p-absolute"></div> </div> </div> <div class="time-content left opensans-regular clr-fl"> <div class="time left opensans-regular">Time</div> <div class="text-box-outer textBox-placeholder-italic left time-dropdown-1 border-all p-relative" data-type="dt-time-dropdown"> <select id="timepicker" class="none-1 opensans-regular left"> <option selected> 10:25 </option> <option>10:30</option> <option>10:35</option> </select> <div class="sprite-im drop-down-icon push-drop-down-icon-1 p-absolute"></div> </div> <div class="text-box-outer textBox-placeholder-italic left time-dropdown-2 border-all p-relative" data-type="dt-am-pm-dropdown"> <select id="timepicker" class="none-1 opensans-regular left"> <option selected> AM </option> <option>PM</option> </select> <div class="sprite-im drop-down-icon push-drop-down-icon-2 p-absolute"></div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Send</div> </div>';
            return html;
        },
        /*Added by Naveen - Start */
        showPhotsOverlayTemplate: function (resultObject) {
            var numberOfPictures = 0, pictureThumbNailViewHTML = "", sliderBar = "", imageTextSavePrintHTML = "", originalImageHTML = "";
            $.each(resultObject, function (i, element) {
                console.log("in static method", element);
                console.log("in static method", element.NoofPictureRecord);
                console.log("Audio Details", element.PictureDetails);
                numberOfPictures = element.NoofPictureRecord;
                RESPONSE.PICTUREDETAILS = element.PictureDetails;
            });
            console.log("RESPONSE.PICTUREDETAILS", RESPONSE.PICTUREDETAILS);
            console.log("numberOfPictures", numberOfPictures);
            $.each(RESPONSE.PICTUREDETAILS, function (i, element) {
                console.log("media id", element.mediaId);
                RESPONSE.MEDIAIDFORPICTURE.push(element.mediaId);
                RESPONSE.IMAGEURLS.push(element.imageSource);
                RESPONSE.IMGETEXT.push(element.imageText);
            });
            if (numberOfPictures > 5) {
                sliderBar = '<div id="slider-vertical" style="float:left;position: absolute;height: 332px;left: 96px;top: 10px;">'
                        + '</div>';
            }
            for (var i = 1, j = 0; i <= numberOfPictures; i++, j++) {
                console.log("in for loop");
                pictureThumbNailViewHTML = pictureThumbNailViewHTML
                        + '<div style="padding: 0px;margin: 0px;width: 99px;height: 100px;margin-bottom: 10px;background: #fff;cursor:pointer;" class="overalyPhots" data-type="thumbNail" name=' + RESPONSE.MEDIAIDFORPICTURE[j] + '><img src=' + RESPONSE.IMAGEURLS[j] + ' style="width: 100%; height: 100%" /></div>';
            }
            imageTextSavePrintHTML = imageTextSavePrintHTML
                    + '<span class="spanCLassElement t-left f-color-green opensans-regular" style="margin:0px">' + RESPONSE.IMGETEXT[0] + '</span><span class="spanCLassElement f-italic" style="margin:0px;color:#939393;font-size:11px">,New jersy</span>';
            originalImageHTML = originalImageHTML + '<div id="viewingImage"><img src=' + RESPONSE.IMAGEURLS[0] + ' /></div>';
            console.log("originalImageHTML", originalImageHTML);

            console.log("showPhotsOverlayTemplate");
            var html = '<div class="o-sub-content p-relative">'
                    + '<div>'
                    + '<div style="float:left;">'
                    + '<div id="thumbNailImages">'
                    + pictureThumbNailViewHTML
                    + '</div>'
                    + '</div>'
                    + sliderBar
                    + '<div style="width: 80%;float:left;padding:10px 0px;height: 300px;position: fixed;left: 120px;top: 15px;background: #fff;">'
                    + '<div style="border-bottom: 1px solid #b9b8b8;position: absolute;padding-bottom: 15px;left: 16px;width: 485px;" id="imageinformation">'
                    + imageTextSavePrintHTML
                    + '<img src="images/saveImage.png" style="width:20px;height:20px;position: absolute;right: 170px;"/>'
                    + '<img src="images/printImage.png" style="width:20px;height:20px;position: absolute;right: 135px;"/>'
                    + '</div>'
                    + '<div style="width: 400px;position: absolute;top: 90px;left: 140px;" id="originalImageDIV">'
                    + '<a href="javascript:void(0)" class="overalyPhots previous" data-type="previous" style="position: absolute;top: 65px;left: -131px;"><img src="images/backwardArrow.png" /></a>'
                    + originalImageHTML
                    + '<a href="javascript:void(0)" class="overalyPhots next" data-type="next" style="position: absolute;top: 73px;right: 43px;"><img src="images/frontArrow.png" /></a>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            return html;
        },
        showAudioOverlayTemplate: function (resultObject) {
            console.log("in audio");
            var numberOfAudio = 0, thumbNailViewHTML = "", resultThumbNail = "", originalAudioFileHTML = "", resultOriginaAudioFile = "", sliderBar = "";
            $.each(resultObject, function (i, element) {
                console.log("in static method", element);
                console.log("in static method", element.NoofAudioRecord);
                console.log("Audio Details", element.AudioDetails);
                numberOfAudio = element.NoofAudioRecord;
                RESPONSE.AUDIODETAILS = element.AudioDetails;
                //audioDetailsArray.push(element.AudioDetails);
            });
            console.log("audioDetailsArray", RESPONSE.AUDIODETAILS.length);
            $.each(RESPONSE.AUDIODETAILS, function (i, element) {
                console.log("media id", element.mediaId);
                RESPONSE.MEDIAID.push(element.mediaId);
                RESPONSE.AUDIOTEXT.push(element.fileName);
                RESPONSE.TIMESTAMPAUDIO.push(element.timeStamp);
                RESPONSE.AUDIOURLS.push(element.audioSourceURL);
            });
            console.log("RESPONSE.MEDIAID", RESPONSE.MEDIAID);
            if (numberOfAudio > 5) {
                sliderBar = '<div id="slider-vertical" style="float:left;position: absolute;height: 332px;left: 96px;top: 10px;">'
                        + '</div>';
            }
            //numberOfAudio = 2;
            for (var i = 1, j = 0; i <= numberOfAudio; i++, j++) {
                console.log("in for loop");
                thumbNailViewHTML = thumbNailViewHTML + '<div style="height: 75px;width: 85px;margin-top: 10px;background: #fff;cursor:pointer;" class="audioOverlay" data-type="thumbNail">'
                        + '<img src="images/voiceRecording.png" style="max-width:30px;position: relative;left: 25px;"/>'
                        + '<p style="color:#939393;font-size:11px;position: relative;left: 13px;" id="mediaID" name=' + RESPONSE.AUDIOURLS[j] + '>' + RESPONSE.MEDIAID[j] + '</p>'
                        + '<p style="color:#939393;font-size:11px;position: relative;  left: 13px;">' + RESPONSE.TIMESTAMPAUDIO[j] + '</p>'
                        + '</div>';
            }
            originalAudioFileHTML = originalAudioFileHTML + '<div style="width: 479px;float: right;padding-top: 12px;padding-bottom: 10px;padding-right: 70px;padding-left: 15px;height: 310px;background: #fff;position: fixed;left: 108px;top: 9px;" id="originalAudio">'
                    + '<div>'
                    + '<p class="spanCLassElement t-left f-color-green opensans-regular" style="margin:0px">' + RESPONSE.AUDIOTEXT[0] + '<span  style="font-size:11px">,New jersy</span></p>'
                    + '<p style="color:#939393;font-size:12px">' + RESPONSE.TIMESTAMPAUDIO[0] + '</p>'
                    + '</div>'
                    + '<div style="padding:30px;border-top: 1px solid #b9b8b8;margin-top: 10px;width: 476px;">'
                    + '<audio id="music" preload="none" controls style="position: relative;left: 75px;top: 25px;">'
                    + '<source src=' + RESPONSE.AUDIOURLS[0] + '>'
                    + '<source src=' + RESPONSE.AUDIOURLS[0] + '>'
                    + '</audio>'
                    + '</div>'
                    + '</div>';
            resultThumbNail = thumbNailViewHTML;
            resultOriginaAudioFile = originalAudioFileHTML;
            console.log("resultThumbNail", resultThumbNail);
            var html = '<div class="o-sub-content p-relative" style = "background-color:none;">'
                    + '<div>'
                    + '<div style="float:left;" id="audioThumbNailView">'
                    + resultThumbNail
                    + '</div>'
                    + sliderBar
                    + resultOriginaAudioFile
                    + '</div>'
                    + '</div>';
            return html;
        },
        showDocumentOverlayTemplate: function (resultObject) {
            var resultThumbNail = "", noofDocuments = 0, sliderBar = "", resultDocumentFile = "", documentThumbNailViewHTML = "", originalImageHTML = "", imageTextSavePrintHTML = "";
            $.each(resultObject, function (i, element) {
                console.log("in static method", element);
                console.log("Audio Details", element.OtherPartyDetails);
                noofDocuments = element.NoofOtherPartyRecord;
                console.log("noofDocuments", noofDocuments);
                RESPONSE.OTHERPARTYDETAILS = element.OtherPartyDetails;
                //audioDetailsArray.push(element.AudioDetails);
            });
            console.log("RESPONSE.OTHERPARTYDETAILS", RESPONSE.OTHERPARTYDETAILS.length);
            $.each(RESPONSE.OTHERPARTYDETAILS, function (i, element) {
                console.log("media id", element.fileName);
                RESPONSE.OTHERPARTYIDS.push(element.otherPartyId);
                RESPONSE.NAMES.push(element.fileName);
                RESPONSE.ROLE.push(element.role);
                RESPONSE.PHONE.push(element.phone.number);
                RESPONSE.ADDRESS.push(element.address.address);
                RESPONSE.INSURANCECO.push(element.carrier);
                RESPONSE.POLICY.push(element.policyNumber);
                RESPONSE.VEHICLENO.push(element.vehicleIdentificationNumber);
                RESPONSE.VEHICLEMODEL.push(element.model);
                RESPONSE.DRIVINGLICENCESTATE.push(element.driverLicenseState);
                RESPONSE.DRIVINGLICENCENUMBER.push(element.driverLicenseNumber);
                RESPONSE.INJURIES.push(element.injuries);
                RESPONSE.OTHERINFORMATION.push(element.otherInformation);
            });
            if (noofDocuments > 5) {
                sliderBar = '<div id="slider-vertical" style="float:left;position: absolute;height: 332px;left: 96px;top: 10px;">'
                        + '</div>';
            }
            for (var i = 1, j = 0; i <= noofDocuments; i++, j++) {
                console.log("in for loop");
                documentThumbNailViewHTML = documentThumbNailViewHTML
                        + '<div style="padding: 0px;margin: 0px;width: 99px;height: 100px;margin-bottom: 10px;background: #fff;cursor:pointer;" class="overlayDocs" data-type="thumbNail"><p style="text-align: center;padding-top: 33px;">' + RESPONSE.NAMES[j] + '</p></div>';
            }
            docTextSavePrintHTML = '<span class="spanCLassElement t-left f-color-green opensans-regular" style="margin:0px">' + RESPONSE.NAMES[0] + '</span>';
            originalDocumentHTML = '<div class="leftDiv">'
                    + '<p>'
                    + '<span class="firstSpan">Name</span>'
                    + '<span class="secondSpan">' + RESPONSE.NAMES[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Role</span>'
                    + '<span class="secondSpan">' + RESPONSE.ROLE[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Phone</span>'
                    + '<span class="secondSpan">' + RESPONSE.PHONE[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Address</span>'
                    + '<span class="secondSpan">' + RESPONSE.ADDRESS[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Insurance co</span>'
                    + '<span class="secondSpan">' + RESPONSE.INSURANCECO[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Policy #</span>'
                    + '<span class="secondSpan">' + RESPONSE.POLICY[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Auto Yr/make/model</span>'
                    + '<span class="secondSpan">' + RESPONSE.VEHICLEMODEL[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Auto License plate state & Number</span>'
                    + '<span class="secondSpan">' + RESPONSE.VEHICLENO[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Drivers License State</span>'
                    + '<span class="secondSpan">' + RESPONSE.DRIVINGLICENCESTATE[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Drivers License Number</span>'
                    + '<span class="secondSpan">' + RESPONSE.DRIVINGLICENCENUMBER[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Injuries</span>'
                    + '<span class="secondSpan">' + RESPONSE.INJURIES[0] + '</span>'
                    + '</p>'
                    + '<p>'
                    + '<span class="firstSpan">Other info</span>'
                    + '<span class="secondSpan">' + RESPONSE.OTHERINFORMATION[0] + '</span>'
                    + '</p>'
                    + '</div>';
            var html = '<div class="o-sub-content p-relative">'
                    + '<div>'
                    + '<div id="thumbNailDocs">'
                    + documentThumbNailViewHTML
                    + '</div>'
                    + '</div>'
                    + sliderBar
                    + '<div style="width: 80%;float:left;padding:10px 0px;height: 400px;position: fixed;left: 120px;top: 15px;background: #fff;">'
                    + '<div style="border-bottom: 1px solid #b9b8b8;position: absolute;padding-bottom: 15px;left: 16px;width: 485px;" id="docinformation">'
                    + docTextSavePrintHTML
                    + '<img src="images/saveImage.png" style="width:20px;height:20px;position: absolute;right: 170px;"/>'
                    + '<img src="images/printImage.png" style="width:20px;height:20px;position: absolute;right: 135px;"/>'
                    + '</div>'
                    + '<div id="originalDocDIV">'
                    + originalDocumentHTML
                    + '</div>'
                    + '</div>';
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
        /*Added by Naveen - End */

        //ADDED BY MANOJ FRIDAY 17 2015---->STARTS HERE

        shareWithRepTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Share with Representatives</h2>'
                    + ' <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic"> <input type="search"'
                    + 'class="opensans-regular"  id="id-overlaysharewithrep"  placeholder="Search.." onkeyup="sharewithrepkeyup(event)"  onkeypress="sharewithrepkeypress(event)" /> <div id="id-sharewithrepsearchicon" class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + 'f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<select id="timepicker" class="none-1 opensans-regular left" onchange="Sharewithrep_sortbyBox1(\'sharewithrep\')"> <option selected> None </option> <option>Alphabetical</option> <option>City,State</option> </select>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <select id="timepicker2" class="none-1 opensans-regular left" onchange="sharewithRepSortbyBox2()"> <option selected> None </option> <option>Select All</option> <option>Section A</option> <option>Section B</option><option>Section C</option><option>Section D</option><option>Section E</option></select>  '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY,STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form>';
            return html;
        },
        assignCustomersTemplate: function (e) {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Assign Customers</h2>'
                    + ' <div class="o-sub-content p-relative"> <div class="text-box-outer p-relative textBox-placeholder-italic"> <input type="search"'
                    + 'class="opensans-regular"  id="id-overlayaiigncustomers"   onkeyup="onKeyPressEventAssignCustomers(\'id-overlayaiigncustomers\')" placeholder="Search.." /> <div id="id-assignCustomersSearchIcon" class="c-search-icon search-icon sprite-im  p-absolute" ></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + 'f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<select id="timepicker" class="none-1 opensans-regular left" onchange="sortbyBox1()"> <option selected> None </option> <option>Alphabetical</option> <option>City,State</option> </select>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <select id="timepicker2" class="none-1 opensans-regular left" onchange="assignCustomersSortbyBox2()"> <option selected> None </option> <option>Select All</option> <option>Section A</option> <option>Section B</option><option>Section C</option><option>Section D</option><option>Section E</option></select>  '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY,STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form>';
            return html;
        },
        //----------------------------------------------
        assignToRepTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Assign To Representatives</h2>'
                    + ' <div class="o-sub-content p-relative"> <div class="text-box-outer p-relative textBox-placeholder-italic"> <input type="search"'
                    + 'class="opensans-regular" placeholder="Search.." /> <div class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + 'f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<input type="text" class="opensans-regular p-relative" placeholder="None" /> '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <input type="text" class="opensans-regular p-relative" placeholder="None" /> '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY,STATE</div> </div> <div class="rep-content-blk"> <form> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name1" name="" class="checkbox" /> <label for="name1" class=" rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="t-caps f-sz-13 right f-italic t-right location-color rep-location">NewYork, CA</div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name2" name="" class="checkbox" /> <label for="name2" class=" rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="t-caps f-sz-13 right f-italic t-right location-color rep-location">NewYork, CA</div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name3" name="" class="checkbox" /> <label for="name3" class=" rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="t-caps f-sz-13 right f-italic t-right location-color rep-location">NewYork, CA</div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name4" name="" class="checkbox" /> <label for="name4" class=" rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="t-caps f-sz-13 right f-italic t-right location-color rep-location">NewYork, CA</div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name5" name="" class="checkbox" /> <label for="name5" class=" rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="t-caps f-sz-13 right f-italic t-right location-color rep-location">NewYork, CA</div> </div> </label> </div> <div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative"> <input type="checkbox" id="name6" name="" class="checkbox" /> <label for="name6" class=" rep-label"> <div class="lbl-in-block p-relative"> <div class="f-sz-14 text-color-overlay left rep-name">Anderson</div> <div class="t-caps f-sz-13 right f-italic t-right location-color rep-location">NewYork, CA</div> </div> </label> </div> </form> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Assign</div> </div> ';
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
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Add Vendor details</h2> <div class="o-sub-content p-relative"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="left-sub-content left p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Type</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 1</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Phone</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">State</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> <div class="right-sub-content right p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Name</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 2</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">City</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Zip</div> <div class="url-box right text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn_addvendordetails">Save</div> ';
            return html;
        },
        editVendorDetailsTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Edit Vendor details</h2> <div class="o-sub-content p-relative"> <div class="left-sub-content left p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Type</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 1</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Phone</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">State</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> <div class="right-sub-content right p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Name</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 2</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">City</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Zip</div> <div class="url-box right text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Save</div> ';
            return html;
        },
        staticFeedViewTemplate: function () {
            var html = '<div class="view-feed-block">'
                    + '<div class="view-in-blocks inline-block v-align-mid bg-color-dblue p-relative">'
                    + '<div class="p-relative">'
                    + '<div class="feed-user-top-details">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box border-all">'
                    + '<img src="http://www.wallpaper-valley.com/animal/animal_13.jpg" alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'

                    + '<div class="feed-user-details-top inline-block v-align-mid">'
                    + '<div class="line1">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps bold">Hugh Jackman</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
                    + '</div>'
                    + '<div class="line1">' + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-name t-caps">Male</div>'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-bday t-upper">19/05/1985</div>'
                    + '</div>'
                    + '<div class="feed-user-other-details">'
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
                    + '</div>' + '<div class="feed-user-bottom-details">'
                    + '<div class="inline-block v-align-mid">'
                    + '<a href="/share" class="snap feed-btn bg-color-green block f-sz-14 opensans-regular f-color-w share p-relative t-center" data-type="share">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
                    + '</div>'
                    + '</a>'
                    + '<div class="bg-color-green block feed-btn f-sz-14 opensans-regular f-color-w p-relative t-center alert-type-box">Incident Alert'
                    + '</div>'
                    + '</div>'

                    + '<div class="inline-block v-align-mid" style="display:none;">'
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
                    + '</div>'
                    + '<div class="inline-block v-align-mid">'
                    + '<a href="/changecoverage" class="snap feed-doc-btn block f-sz-17 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
                    + '<div class="t-center p-relative">'
                    + '<div class="sprite-im message-green-icon center-icon">&nbsp;</div>'
                    + '</div>'
                    + '<div class="feed-addRemove-text t-center p-relative t-caps">Add / change coverage on home</div>'
                    + '</a>'
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
        staticCarrierFeedViewTemplate: function () {
            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">CARRIER ID</div> <div class="carrier-view-id inline-block">#HP092 542</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <a href="#"><div class="carrier-website-name inline-block t-caps opensans-regular f-color-w">WEBSITE</div></a> </div> <div class="carrier-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <a href="#"><div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w">FACEBOOK</div> </a></div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier name</div> <div class="carrier-left-content t-left right ">way to safe</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">westere parkway</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">san francisco</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">us</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">san francisco</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right">(914)000 000 00</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">9401</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> <div class="carrier-left-content t-left right">waytosafe@mail.com</div> </div> </div> </div> </div> </div> </div> <div class="associated-carrierview p-relative"> <div class="p-relative "> <select class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option value="">ASSOCIATED CUSTOMERS</option><option value="">ASSOCIATED REPS</option></select> <div class="c-associatedropdownicon p-relative inline-block"> <div class="sprite-im drop-down-icon">&nbsp;</div> </div> </div> <div class="associated-carrier-feed p-relative border-bot"> <div class="carrier-feed-associated-view left p-relative"> <div id="id-associatedblock" class="border-all p-relative"> <div class="c-associate-carrier p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">james jeo</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div id="id-associatedblock" class="border-all p-relative"> <div class="c-associate-carrier p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">Hugh jackman</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div id="id-associatedblock"  class="border-all p-relative"> <div class="c-associate-carrier p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">smith</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div id="id-associatedblock" class="border-all p-relative"> <div class="c-associate-carrier p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">anderson</div> <div class="carrier-location t-caps t-center">location</div> </div> </div> </div> </div> </div> </div>';
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
        staticCustomerViewTemplate: function () {
            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="customer-view-feed inline-block v-align-mid p-relative"> <div class="customer-logo-view p-relative"> <div class="customerlogo-viewpic"> <img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"> </div> </div> <div class="customer-view-name opensans-regular t-caps t-center p-relative">richardson</div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">first name</div> <div class="carrier-left-content t-left right ">richardson</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">last name</div> <div class="carrier-left-content t-left right">john</div> <div class="customer-view-mbapp p-relative inline-block v-align-top right"> <div class="sprite-im carrier-mobile-icon">&nbsp;</div> </div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">gender</div> <div class="carrier-left-content t-left right ">male</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">occupation</div> <div class="carrier-left-content t-left right">doctor</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">year of birth</div> <div class="carrier-left-content t-left right ">12-11-1986</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential city</div> <div class="carrier-left-content t-left right">california</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">residential state</div> <div class="carrier-left-content t-left right t-upper ">us</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential zipcode</div> <div class="carrier-left-content t-left right">9401</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right t-caps left">email</div> <div class="carrier-left-content t-left right">richardson@mail.com</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right">(415)914-00000</div> </div> </div> </div> </div> <div class="customer-view-button p-relative"> <div class="customer-view-policy inline-block t-caps t-center opensans-regular">policies</div> <div class="customer-policy-button p-relative inline-block bg-color-red t-caps t-center opensans-regular f-color-w snap" data-type="dt-propertypolicy">property policy</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-healthpolicy">health policy</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-regular f-color-w snap" data-type="dt-vehiclepolicy">vehicle policy</div> </div> </div> </div> <div class="associated-carrierview p-relative"> <div class="p-relative "> <div class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">associated reps</div> <div class="p-relative inline-block"> <div class="sprite-im drop-down-icon">&nbsp;</div> </div> </div> <div class="associated-carrier-feed p-relative border-bot"> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">james jeo</div> <div class="carrier-location t-caps t-center">location</div> <div class="carrier-location t-center">mail@mail.com</div> </div> </div> </div> </div> <div class="carrier-feed-associated-view left p-relative"> <div class="border-all p-relative"> <div class="p-relative"> <div class="associated-carrier-pic inline-block "> <img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"> </div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-center">robert</div> <div class="carrier-location t-caps t-center">location</div> <div class="carrier-location t-center">mail@mail.com</div> </div> </div> </div> </div></div>';
            return html;
        },
        staticSettingsTemplate: function (data) {
            var html = ' <form id="carrier-form"> <div class="carrier-view-parent p-relative"> <div class="app-link t-upper opensans-regular p-relative">app download link</div> <div class="app-parent p-relative"> <div class="app-download-bar inline-block p-relative bg-color-white">https://protocall.com/app.store/detail?</div> <div class="send-app-bar inline-block p-relative border-all bg-color-green t-caps t-center opensans-regular f-color-w"><a class="snap" href="javascript:void(0)" data-type="sendapplink" >send app link</a></div> </div> <div class="settings-click-button clr-fl"> <div class="settings-agency-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" data-type="agency-view-load" >agency</a></div> <div class="settings-vendor-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" data-type="preferred vendors-view-load" >preferred vendors</a></div> <div class="settings-edit-bar right inline-block p-relative bg-color-green "><div class="p-relative inline-block"> <div class="edit-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"> <a id="id-carrier-edit" class="snap" href="javascript:void(0)" data-type="agency-edit-load">edit</a></div> </div><div class="removevendor-bar right inline-block p-relative bg-color-green "> <div class="p-relative inline-block"> <div class="remove-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="snap" href="javascript:void(0)" data-type="agency-remove-load" >remove</a></div> </div> <div class="addvendor-bar right inline-block p-relative bg-color-green "> <div class="p-relative inline-block"> <div class="add-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="snap" href="javascript:void(0)" data-type="agency-addvendor-load" >add vendor</a></div></div></div> <div class="bg-color-white"><div class="agency-view-block"><div class="settings-view-leftblock inline-block v-align-mid p-relative"> <div class="settings-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">AGENCY ID</div> <div class="carrier-view-id inline-block" style="visibility: visible">' + data.agencyId + '</div> </div> <div class="settings-logo-view p-relative"> <div class="settingslogo-viewpic"> <img src="http://2-dot-proto-call-test.appspot.com/file/AMIfv97MlBFkvIl9CA5XX_zC1zN01dFtkewx0sYvxI7lv4Qb5-dklazbb8jk3xD81OakfKUw-7pr2a6XDd6VGoZy_RK56DqYFmwz3_XHhW2oivquQz_mLLTWbvNwIhUbu1uYKGAsY71mU4u8_EBGzhH19oFVPfmT428qiNmLkDJaVBYrE7PlAmx941B01w87YybOcgwD62aq" alt="" class="carrier-img-width"> </div> </div> <div class="settings-view-social p-relative clr-fr"> <div class="settings-view-website p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-regular f-color-w t-center"><a href="' + data.website.value + '">website</a></div> </div> <div class="settings-view-facebook p-relative left bg-color-green"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w t-center">facebook</div> </div> </div> </div> <div class="settings-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier agency id</div> <div id="id-c-agencyid" class="carrier-left-content t-left right " style="visibility: visible">' + data.carrierAgencyId + '</div> <input id="id-carrier-agencyid" class="carrier-left-content-textbox t-left right p-absoalute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">master agency id</div> <div class="carrier-left-content t-left right" id="id-c-masteragencyid" style="visibility: visible">' + data.agencyId + '</div> <input id="id-carrier-masteragencyid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency type</div> <div id="id-c-agencytype" class="carrier-left-content t-left right " style="visibility: visible">master type</div> <input id="id-carrier-agencytype" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">name</div> <div id="id-c-agencyname" class="carrier-left-content t-left right" style="visibility: visible">' + data.agencyName + '</div> <input id="id-carrier-agencyname" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-c-agencyaddress1" class="carrier-left-content t-left right " style="visibility: visible">' + data.address + '</div> <input id="id-carrier-agencyaddress1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-c-agencyaddress2" class="carrier-left-content t-left right" style="visibility: visible">478 western gateway</div> <input id="id-carrier-agencyaddress2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div id="id-c-agencycity" class="carrier-left-content t-left right " style="visibility: visible">' + data.city + '</div> <input id="id-carrier-agencycity" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div id="id-c-agencystate" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.result.state + '</div> <input id="id-carrier-agencystate" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div id="id-c-agencyzip" class="carrier-left-content t-left right " style="visibility: visible">' + data.result.zipcode + '</div> <input id="id-carrier-agencyzipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div id="id-c-agencyphone" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.result.phone.number + '</div> <input id="id-carrier-agencyphone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right left t-caps">email</div> <div id="id-c-agencyemail" class="carrier-left-content t-left right " style="visibility: visible">' + localStorage.agencyEmail + '</div> <input id="id-carrier-agencyemail" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left"></div> <div class="carrier-left-content t-left right t-upper"></div> </div> </div> </div> </div> </div></div><div class="preferred-vendor-block inline-block v-align-mid p-relative clr-fl"> <div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-upper opensans-regular "> <div class="carrier-left-title t-upper t-left inline-block ">name</div> <div class="carrier-left-title t-right inline-block">type</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-upper opensans-regular"> <div class="carrier-left-title t-left inline-block">phone</div> <div class="carrier-left-title t-right inline-block">state,city</div> </div> </div> </div> <div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular "><div class="carrier-left-title t-left inline-block "><a class="snap name-color" href="javascript:void(0)" data-type="vendor-profile-info" >anderson</a></div> <div class="carrier-left-title t-right inline-block">service</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> <div class="carrier-left-title t-left inline-block">(440)914-00000</div> <div class="carrier-left-title t-right inline-block">california</div> </div> </div> </div> <div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular "> <div class="carrier-left-title t-left inline-block ">Robert</div> <div class="carrier-left-title t-right inline-block">contrator</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> <div class="carrier-left-title t-left inline-block">(440)914-00000</div> <div class="carrier-left-title t-right inline-block">newyork</div> </div> </div> </div> <div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular "> <div class="carrier-left-title t-left inline-block ">sandra</div> <div class="carrier-left-title t-right inline-block">contrator</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> <div class="carrier-left-title t-left inline-block">(440)914-00000</div> <div class="carrier-left-title t-right inline-block">newyork</div> </div> </div> </div> </div><div class="preferred-vendor-remove-block inline-block v-align-mid p-relative clr-fl"> <div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-upper opensans-regular "> <div class="carrier-left-title t-upper t-left inline-block ">name</div> <div class="carrier-left-title t-right inline-block">type</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-upper opensans-regular"> <div class="carrier-left-title t-left inline-block">phone</div> <div class="carrier-left-title t-right inline-block">state,city</div> </div> </div> </div> <div class="vendor-block-remove"><div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular"> <input type="checkbox" id="removevendor" name="" class="checkbox remove-vendor"> <label for="removevendor" class="vendor-label"></label> <div class="carrier-left-title vendor-remove-margin t-left inline-block ">anderson</div> <div class="carrier-left-title t-right inline-block">service</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> <div class="carrier-left-title t-left inline-block">(440)914-00000</div> <div class="carrier-left-title t-right inline-block">california</div> </div> </div> </div> </div><div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular "> <input type="checkbox" id="removevendor-1" name="" class="checkbox"> <label for="removevendor-1" class="vendor-label"></label> <div class="carrier-left-title t vendor-remove-margin -left inline-block ">Robert</div> <div class="carrier-left-title t-right inline-block">contrator</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> <div class="carrier-left-title t-left inline-block">(440)914-00000</div> <div class="carrier-left-title t-right inline-block">newyork</div> </div> </div> </div> <div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular "> <input type="checkbox" id="removevendor-2" name="" class="checkbox"> <label for="removevendor-2" class="vendor-label"></label> <div class="carrier-left-title vendor-remove-margin t-left inline-block ">sandra</div> <div class="carrier-left-title t-right inline-block">contrator</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> <div class="carrier-left-title t-left inline-block">(440)914-00000</div> <div class="carrier-left-title t-right inline-block">newyork</div> </div> </div> </div> </div><div class="vendor-detail-block"> <div class="vendor-view-block inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div  class="carrier-left-title t-right left">preferred vendor id</div> <div id="id-v-preferredvendorid" class="carrier-left-content t-left right " style="visibility: visible">#55475546</div> <input id="id-vendor-preferredvendorid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">type</div> <div id="id-v-vendortype" class="carrier-left-content t-left right" style="visibility: visible">#55475546</div> <input id="id-vendor-type" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">name</div> <div id="id-v-vendorname" class="carrier-left-content t-left right " style="visibility: visible">anderson</div> <input id="id-vendor-name" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div id="id-v-vendorphone" class="carrier-left-content t-left right" style="visibility: visible">(455)994-00000</div> <input id="id-vendor-phone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-v-address1" class="carrier-left-content t-left right ">3951 westere parkway</div> <input id="id-vendor-address1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-v-address2" class="carrier-left-content t-left right">478 western gateway</div> <input id="id-vendor-address2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div id="id-v-city" class="carrier-left-content t-left right ">california</div> <input id="id-vendor-city" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div id="id-v-state" class="carrier-left-content t-left right t-upper">us</div> <input id="id-vendor-state" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div id="id-v-zipcode" class="carrier-left-content t-left right ">9401</div> <input id="id-vendor-zipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left"></div> <div class="carrier-left-content t-left right t-upper"></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-right right t-caps opensans-regular"> </div> </div> </div> </div> <div class="vendor-back-button"> <div class="vendor-back-bar inline-block p-relative bg-color-green "> <div class="p-relative inline-block t-caps t-right v-align-mid opensans-regular f-color-w">back</div> </div> </div> </div></div> </form>';
            return html;

        },
        staticMyProfileViewTemplate: function () {
            var html = '<div class="agenyparent-class bg-color-white"> <div class="p-relative"> <form> <div class="agenyleft-profile inline-block v-align-mid p-relative"> <div class="agenyleft-image"> <div class="overflow-hidden"> <div class="agenypic-info"> <img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="ageny-img-width"> </div><div class="v-align-mid opensans-regular text-color-overlay f-sz-12 p-relative" style="padding:0px 25px;"> <div class="sprite-im profcamera-icon inline-block"> &nbsp; </div><div class="t-upper inline-block"> Change Image </div><input type="file" name="agency-prof-img" id="agency-prof-img" onchange="readURL(this);"/> </div></div></div></div><div class="agenyright-profile inline-block v-align-mid"> <div class="agenyparent-block"> <div class="agenyinternal-block"> <div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Name </div><div class="agenycontent-block inline-block p-relative"> <span class="profile-result-cls" id="nameview"> ' + localStorage.agencyName + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="namenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative" > Phone </div><div class="agenycontent-block inline-block p-relative"> <span class="profile-result-cls" id="phoneview"> ' + localStorage.agencyPhone + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="phonenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Email </div><div class="agenycontent-block inline-block p-relative"> <span class="profile-result-cls" id="emailview"> ' + localStorage.agencyEmail + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="emailnew"> </div></div></div></div></div></form> </div></div>';
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
