
// String Replace >>> html = html.replace(/{{example}}/g, example);
var template = {
	
	// headerHTML:function(){
		// var html = '<header class="w-pad">'
					// '<div class="logo-info-blk clr-fl p-relative">
					// <div class="lf-block left clr-fl header-left-panel">
						// <div class="left">
							// <div class="logo-holder">
								// <img src="images/Logo.png" alt="" class="logo" />
							// </div>
						// </div>
						// <div class="left search-blk">
							// <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();">
								// <div class="searchbox-holder">
									// <input class="search-ip opensans-regular" type="search" name="" placeholder="Search">
								// </div>
							// </form>
						// </div>					
					// </div>					
					// <div class="rg-block left p-relative">
						// <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link">
							// <div id="" class="left user-pic-box">
								// <img src="http://jinigram-dot-soy-key-327.appspot.com/jinigram/service/file/AMIfv94GuelwXfPdF_mNVpTLNC7hT5MU3UzzkD_zBmXLLVxhv7RWlnTrLB7f68jrdJHgD47Y8Qcp2Ojv2e8PF3roruK51bvgbk0Khg4BQ1ZYCHozuSVoEuIHyBC5btQ76HOyw9gXgsonabMRvNLraMx9FLqbsFQrM1ybvPkBG3gbbvb318LhzxP5oyxR7D2ZAMNpLhoa-VoOEtMn3lpItqOqm6ps1DtGlA" alt="Profile pic" class="setProfilePic">
							// </div>
							// <div class="left user-info">
								// <div class="opensans-regular text-ellipsis">
									// <span>Hi</span>
									// <span class="t-caps">John Doe</span>
								// </div>		
							// </div>
							// <div class="left sprite-im drop-down-icon user-drop-icon">&nbsp;</div>
						// </a>
					// </div>
				// </div>
			// </header>'
		
		
	// }
	
	subMenuTabHTML:function(){
		var html = '<a href="/{{subMenuTab-name}}" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light {{subMenuTab-name}} p-relative" data-type="page" data-submenu="{{subMenuTab-name}}">'
										+'<div class="sprite-im {{subMenuTab-icon-class}} inline-block tab-icon v-align-mid" style="{{isSubMenuTabIconCl}}">&nbsp;</div>'
										+'<div class="submenu-title t-caps inline-block f-color-w v-align-mid">{{subMenuTab-name}}</div>'
										+'<div class="cnt-blk inline-block v-align-mid" style="{{isSubMenuTabCountCl}}">(<span class="cnt-no">{{subMenuTab-count}}</span>)</div>'
					+'</a>';
		return html;
	},
	
	subMenuBreadCrumbHTML:function(){
		var html = '<div class="bcrum-lb-submenu left">'
									+'<a href="#" class="snap left f-sz-16 ptsans-light {{bc-title}} t-upper p-relative f-color-green" data-type="page" data-submenu="{{bc-title}}" class="">'
									+	'<div class="clr-fl">'
									+		'<div class="sprite-im left {{bc-icon-class}} mr-space-10 mt-space-ic">&nbsp;</div>'
									+		'<span class="sub-menu-text left">{{bc-title}}</span>'
									+	'</div>'
									+'</a>'
									+'<div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="{{isBC}}">></div>'
									+'<a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="{{bc-title}}-customer" style="{{isBC}}">{{customer-name}}</a>'
					+'</div>';
		return html;		
	},
	
	subMenuSortHTML:function(){
		var html= '<div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby">'
						+'<div class="sort-text f-italic">Sort by</div>'
						+'<div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div>'
				+'</div>';
				
		return html;		
	},
	
	feedsTemplateHTML:function(){
		var html = '<div class="feed-block clr-fl">'
						+'<div class="lf-block left">'
						+	'<div class="feed-det bg-color-dblue p-relative">'
						+		'<div class="feed-det-pad p-relative">'
						+			'<div class="feed-pic-b inline-block v-align-mid">'
						+				'<div id="" class="feed-user-pic-box">'
						+					'<img src="{{feed-customer-img}}" alt="" class="feeduserpic">'
						+				'</div>'
						+			'</div>'
						+			'<div class="feed-user-det-b inline-block v-align-mid">'
						+				'<div class="top-b p-relative">'
						+					'<div class="p-relative inline-block v-align-top" style="{{isMobilePresent}}">'
						+						'<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
						+					'</div>'
						+					'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">{{feed-customer-name}}</div>'
						+					'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">{{feed-time}}</div>'
						+					'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">{{feed-alert-type}}</div>'
						+					'<div class="p-relative inline-block v-align-mid" style="{{isRepPresent}}">'
						+						'<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
						+					'</div>'
						+					'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps" style="{{isRepPresent}}">{{rep-name}}</div>'
						+				'</div>'
						+				'<div class="bot-b">'
						+					'<div class="p-relative inline-block v-align-bot">'
						+						'<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
						+					'</div>'
						+					'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">{{feed-date}}</div>'
						+					'<div class="p-relative inline-block v-align-bot">'
						+						'<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
						+					'</div>'
						+					'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">{{feed-location}}</div>'
						+					'<div class="p-relative inline-block v-align-bot">'
						+						'<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
						+					'</div>'
						+					'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">{{feed-customer-phone}}</div>'
						+					'<div class="p-relative inline-block v-align-bot">'
						+						'<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
						+					'</div>'
						+					'<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">{{feed-customer-email}}</div>'
						+				'</div>'
						+			'</div>'
						+			'<div class="feed-user-share-b inline-block v-align-mid">'
						+				'<a href="/share" class="snap feed-btn bg-color-green inline-block v-align-mid f-sz-14 opensans-regular f-color-w share p-relative" data-type="share">'
						+					'<div class="t-center mid-align">'
						+						'<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
						+						'<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
						+					'</div>'
						+				'</a>'
						+				'<a href="/view" class="snap feed-btn bg-color-green inline-block v-align-mid f-sz-14 opensans-regular f-color-w view p-relative" data-type="view">'
						+					'<div class="t-center mid-align">'
						+						'<div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div>'
						+						'<span class="feed-menu-text inline-block v-align-mid f-color-w">View</span>'
						+					'</div>'
						+				'</a>'
						+			'</div>'
						+		'</div>'
						+	'</div>'
						+'</div>'
						+'<div class="rg-block left p-relative">'
						+	'<div class="feed-det bg-color-dblue p-relative">'
						+		'<div class="feed-docs-pad p-relative docs-block t-center">'
						
						+			'{{feed-right-template}}'
						
						
						+		'</div>'							
						+	'</div>'
						+'</div>'					
					+'</div>';
		return html;
	},
	
	feedDocsTemplate:function(){
		var html = '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc">'
						+					'<div class="t-center p-relative">'
						+						'<div class="doc-icon-box" >'
						+							'<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'																							
						+						'</div>'
						+						'<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
						+						'<div class="feed-menu-text bold">Text</div>'
						+					'</div>'
						+			'</a>'
						+			'<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc">'
						+					'<div class="t-center p-relative">'
						+						'<div class="doc-icon-box" >'
						+							'<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'																							
						+						'</div>'
						+						'<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'	
						+						'<div class="feed-menu-text bold">Photos</div>'
						+					'</div>'
						+			'</a>'
						+			'<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc">'
						+					'<div class="t-center p-relative">'
						+						'<div class="doc-icon-box" >'
						+							'<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'																								
						+						'</div>'
						+						'<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
						+						'<div class="feed-menu-text bold">Voice</div>'
						+					'</div>'
						+			'</a>';
		return html;		
	},
	
	feedAddRemoveTemplate:function(){
		var html = '<a href="/{{addremove-link}}" class="snap feed-addRemove-block inline-block v-align-mid f-sz-14 opensans-regular f-color-green changeCoverage p-relative" data-type="{{addremove-link}}">'
						+					'<div class="t-center">'
						+						'<div class="sprite-im inline-block v-align-mid message-green-icon">&nbsp;</div>'
						+						'<span class="feed-addRemove-text inline-block v-align-mid t-caps">{{addremove-text}}</span>'
						+					'</div>'
						+			'</a>';
		return html;		
	}
	


};
