/*
 * Modal class to maintain the data and storages
 */
 
t_modal = function() {
    this.version =  "1.0";
    function createLocalStorage() {
        window.localStorage = function() {}
        localStorage.prototype.clear = function(key) {
            if(key) {
                delete this[key];
            } else {
                for(var i in this) {
                    if(typeof this[i]!="function") {
                        delete this[i];
                    }
                }
            }
        }
        localStorage = new localStorage()
    };
    try {
        //this.storageSupport = window.localStorage?true:false;
        if(!window.localStorage) {
            createLocalStorage();
        }
    } catch(e) {
            createLocalStorage();
    }
};

t_modal.prototype.getItem = function(key) {
    return window.localStorage[key];
};

t_modal.prototype.setItem = function(key, val) {
    try {
		window.localStorage[key] = val;
	} catch (e) {
	 	 if (e == QUOTA_EXCEEDED_ERR) {
	 	 	 console.log('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
	 	 	 if(window.localStorage.clear) {
	 	 	    window.localStorage.clear();
	 	 	 } else {
	 	 	    window.localStorage = {};
	 	 	 }
	 	 	 window.localStorage[key] = val;
		}
	}
};

/***** offline ******/
/*
 * creating the network status object will by default give the online offline toast on top
 */
var networkStatus = function(conf) {
    var options = {
	    onlineCallback: null,
	    offlineCallback: null,
	    scope: null,
	};
	for(var i in conf) options[i] = conf[i];
	var div = null,
	timer = null,
	isOnline = function (e) {
	    if(options.onlineCallback) {
	        options.onlineCallback.call(options.scope, e);
	    }
        window.isOnline = true;
        window.isOffline = false;
        clearTimer();
        if(!div) {
            div = getHtml();
            document.body.appendChild(div)
        }
        div.innerHTML = "Connection Established!";
        timer = setTimeout(function() {
            if(div) {
                document.body.removeChild(div);
                div = null;
            }
        }, 4000)
    },
    isOffline = function (e) {
        console.log(options);
        if(options.offlineCallback) {
	        options.offlineCallback.call(options.scope, e);
	    }
        window.isOnline = false;
        window.isOffline = true;
        clearTimer();
        if(!div) {
            div = getHtml();
            document.body.appendChild(div)
        }
        div.innerHTML = "Network connection lost...";
    };
    
	if (window.addEventListener) {
        /*
            Works well in Firefox and Opera with the 
            Work Offline option in the File menu.
            Pulling the ethernet cable doesn't seem to trigger it.
            Later Google Chrome and Safari seem to trigger it well
        */
		window.addEventListener("online", isOnline, false);
		window.addEventListener("offline", isOffline, false);
	}
	else {
		/*
			Works in IE with the Work Offline option in the 
			File menu and pulling the ethernet cable
		*/
		document.body.ononline = isOnline;
		document.body.onoffline = isOffline;
	}
	var getHtml = function() {
	    var div = document.createElement("div");
	    div.setAttribute("id", "auto-msg-network-status");
	    div.setAttribute("style", "position:fixed;top:0;left:0;right:0;margin:auto;width:250px;height:25px;line-height:25px;background:rgba(0,0,0,0.8);color: #FFF;text-align:center;border-radius: 0 0 3px 3px;z-index:999;")
	    return div;
	};
	var clearTimer = function() {
	    if(timer!=null) {
            clearTimeout(timer);
            timer = null;
        }
	};
	if(navigator.onLine) {
	    window.isOnline = true;
        window.isOffline = false;
	} else {
	    window.isOnline = false;
        window.isOffline = true;
        //console.log(typeof navigator.onLine!=="undefined")
        if(typeof navigator.onLine!=="undefined") {
            if(!div) {
                div = getHtml();
                document.body.appendChild(div)
            }
            div.innerHTML = "No network connection";
        }
	}
};


/*
// The event handlers below all use this function to display status messages.
// Since the handlers all display status messages this way, they return false
// to cancel the event and prevent the browser from displaying its own status.
function status(msg) {
    // Display the message in the document element with id "statusline"
    //document.getElementById("statusline").innerHTML = msg;
    console.log(msg);  // And also in the console for debugging
}

// Each time the application is loaded, it checks its manifest file.
// The checking event is always fired first when this process begins.
window.applicationCache.onchecking = function() {
    console.log("Checking for a new version.");
    return false;
};

// If the manifest file has not changed, and the app is already cached,
// the noupdate event is fired and the process ends.
window.applicationCache.onnoupdate = function() {
    console.log("This version is up-to-date.")
    return false;
};

// If the application is not already cached, or if the manifest has changed,
// the browser downloads and caches everything listed in the manifest.
// The downloading event signals the start of this download process.
window.applicationCache.ondownloading = function() {
    console.log("Downloading new version");
    window.progresscount = 0;  // Used in the progress handler below
    return false;
};

// progress events are fired periodically during the downloading process,
// typically once for each file downloaded. 
window.applicationCache.onprogress = function(e) {
    // The event object should be a progress event (like those used by XHR2)
    // that allows us to compute a completion percentage, but if not,
    // we keep count of how many times we've been called.
    var progress = "";
    if (e && e.lengthComputable) // Progress event: compute percentage
        progress = " " + Math.round(100*e.loaded/e.total) + "%"
    else                         // Otherwise report # of times called
        progress = " (" + ++progresscount + ")"

    console.log("Downloading new version" + progress);
    return false;
};

// The first time an application is downloaded into the cache, the browser
// fires the cached event when the download is complete.
window.applicationCache.oncached = function() {
    console.log("This application is now cached locally");
    return false;
};

// When an already-cached application is updated, and the download is complete
// the browser fires "updateready". Note that the user will still be seeing
// the old version of the application when this event arrives.
window.applicationCache.onupdateready = function() {
    applicationCache.swapCache()
    console.log("A new version has been downloaded.  Reload to run it");
    
    return false;
};

// If the browser is offline and the manifest cannot be checked, an "error"
// event is fired. This also happens if an uncached application references
// a manifest file that does not exist
window.applicationCache.onerror = function() {
    console.log("Couldn't load manifest or cache application");
    return false;
};
*/

// 
// 
// a = function() {}
// a.prototype.clear = function(key) {
//     if(key) {
//         delete this[key];
//     } else {
//         for(var i in this) {
//             if(typeof this[i]!="function") {
//                 delete this[i];
//             }
//         }
//     }
// }
// a = new a()
// a["check"] = "val";
// a["new"] = "newVal";
