// protocall.myHome = function(data) {
    // console.log('myhome page');
	// //formBlock();
	// setMenuBar ();
	// serverInit();
	// localStorage.setItem("currentPage","loadhome");
// },
// function serverInit(){
			// var Root = 'https://2-dot-proto-call-test.appspot.com/_ah/api';
			// console.log("rootplace",loggedIn);
			// gapi.client.load('protocall', 'v1',authendiacte,Root);
// }
// function authendiacte(){
				// customerInfo();
			    // //policyInfo();
// }





// }
			// function customerInfo(){
				// var data = new Object();
			    // console.log(data);
				  // var html_childarea = "";
				
				 // var request = gapi.client.protocall.userlist(data).execute(function(resp) {	
				 // if(resp.resultObject){
					                          // var devices = resp.resultObject;
											  // var devicesLength = resp.resultObject.length;
				// var requestPolicy = gapi.client.protocall.alertlist(data).execute(function(resp) {	
								// for (var i = 0; i < devicesLength; i++) { 
								// //console.log(devices[i]);
											// userEmail = devices[i].emailId.email;
											 // var html_policytype = "";
				
										      // var alert = resp.resultObject;
											  // var alertLength = resp.resultObject.length;
								// for (var j = 0; j< alertLength; j++) { 
								// console.log(alert[j]);
															// alertEmail = alert[j].userId.email;
															 	// if(userEmail == alertEmail ){
														          // html_policytype +='<div><span class="incidentalert_span">'+alert[j].type+'</span></div>';
																 // var  alertdate = alert[j].alertDate;
														          // var myTime =new Date(alertdate);
																 // // console.log(Date(new Date(alert[j].alertDate)));
                                                                  // console.log(myTime);
											  // } 	
											   // }
											   // html_childarea +='<div><div class="customerinfo_div"> <div class="customerinfo"> <div class="customerinfodiv_up"> <div class="mobileicon_div"> </div> <div class="customerdetailes_div"> <span class="customername_span">' +devices[i].firstName+' '+devices[i].lastName+'  </span> <span class="customertime_span"> 10.55 PM </span>'+html_policytype+'</div> <div class="icon2_div"> </div> <div class="icon2name_span"> <span > Robert </span></div> </div> <div class="customerinfodiv_down"> <div class="bdayicon_contentdiv"> <div class="bdayicon_div"> </div> <span class="bdayDate_span"> '+devices[i].birthDate+' </span> </div> <div class="placeicon_contentdiv"> <div class="placeicon_div"> </div> <span class="placename_span"> '+devices[i].residentialCity+' </span> </div> <div class="telephoneicon_contentdiv"> <div class="telephoneicon_div"> </div> <span class="telephonenumber_span">   '+devices[i].phone.number+'</span> </div> <div class="emailicon_contentdiv"> <div class="emailicon_div"> </div> <span class="emailid_span"> '+devices[i].emailId.email+' </span> </div></div></div></div> </div><div class="shareinfo_div"> <div class="shareinfo_contentarea"> <div class="share_div"> <div class="leftsideshare_div"> <div class="leftsidesharecontent"> <div class="shareicon"></div> <span class="sharetext">Share</span> </div> </div> <div class="rightsideview_div"> <div class="rightsidesharecontent"> <div class="viewicon"></div> <div class="viewtext"><span >View</span></div> </div> </div> </div> </div> </div> </div> </div> <div class="right_dynamicdiv"> <div class="div1_rightsidediv_contentarea"> <div class="textcounts_div"> <div class="c_textcount_div"> <div class="parent_textcount_div"> <div class="textcount">2</div> </div> </div> <div class="c_texticon_div"> <div class="parent_texticon_div"> <div class="texticon"></div> </div> </div> <div class="c_text">Text</div> </div> <div class="photoscounts_div"> <div class="c_textcount_div"> <div class="parent_textcount_div"> <div class="textcount">2</div> </div> </div> <div class="c_texticon_div"> <div class="parent_texticon_div"> <div class="photoicon"></div> </div> </div> <div class="c_text">Photos</div> </div> <div class="voicecounts_div"> <div class="c_textcount_div"> <div class="parent_textcount_div"> <div class="textcount">2</div> </div> </div> <div class="c_texticon_div"> <div class="parent_texticon_div"> <div class="voiceicon"></div> </div> </div> <div class="c_text">Voice</div> </div> </div> </div> </div>';
							  // }
							    // var $html = '<div><div><section class="section_div"> <div class="parentsection_div"> <div class="feeds_div"> <div class="feedicon"></div> <div class="textfeed">FEEDS</div> </div> <div class="malerts_div"> <div class="myalert_div"> <div class="myalert_parent"> <div class="alertstext">My Alerts</div> </div> </div> <div class="incidents_div"> <div class="incidents_parent"> <div class="alertstext">Incidents</div> </div> </div> <div class="policies_div"> <div class="policies_parent"> <div class="alertstext">Policies</div> </div> </div> </div> <div class="msortby_div"> <div class="sortbydiv_contentarea"> <div class="sortby_text"><i>Sort by</i></div> <div class="sortby_arrow_div"></div> </div> </div> </div> </section> <hr> <div class="dynamic_section"> <div class="left_dynamicdiv"> <div class="leftdiv_contentdiv"> <div class="image_div"> <img src="images/Logo.png" class="customerimage"> </div> <div>'+html_childarea+'</div> </div>';
							 // $("#contentArea").empty();
							 // $("#contentArea").append($html);	
					  // });
				 // }
				 // else{
			    // console.log('alert');
				 // }
				// });
				// }
// setMenuBar = function () {
       // var $menu_bar = $("#hBar .menu-hBar > a");
       // $menu_bar.attr("class", "");
       // $menu_bar.html("");
       // $menu_bar.off("click");
        // selectMenu();
    // };
	// function selectMenu() {
        // $("nav li.selected").removeClass("selected");
        // $("nav .a-checkmyHome").parent().addClass("selected");
    // }
// var addTopage = function(html, clear, prepend) {
        // var $blk = $("#contentArea");
        // if(clear) {
			// $blk.html("");
        // }
        // if(prepend) {
			// $("#contentArea").prepend(html);
        // } else {
			// $("#contentArea").append(html);
        // }
    // }