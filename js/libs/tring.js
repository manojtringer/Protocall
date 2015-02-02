/*
 * tring JavaScript Library v0.1
 *
 * Date: 25 June 2014
 * Author: Arun Rajesh R
 * Company: Tringapps Research Labs Private Ltd
 * 
 */
"use strict";
var tring, _t;
(function (window, document) {
    // tring returns new Library object that hold our selector. Ex: tring('.wrapper')
    tring = _t = function (params) {
        try {
            return selector_(params);
        } catch(e) {
            console.log("common error", e.message)
        }
    };
     
    // In our Library we get our selector with querySelectorAll (we do not support < ie8)
    // We also add selector length, version and twitter/github or whatever you like as information about your library.
    var selector_ = function (params) {
        if (typeof params == 'object') {
            this[0] = window;
        } else {
            // Get params
            var selector = document.querySelectorAll(params),
                i = 0;
            // Get selector length
            this.length = selector.length;
            this.version = '0.1';
            //this.extendComputedFn('height|width') 
            // Add selector to object for method chaining
            for (; i < this.length; i++) {
                this[i] = selector[i];
            }
        }        
        // Return as object
        return this;
    };
    // Assign our tring object to global window object.
    if(!window.tring) {
        window.tring = window._t = tring;
    }
    function getHeightOrWidth(elem, prop) {
        return elem["offset"+prop]?elem["offset"+prop]:elem.innerHeight;
    }
    
    // Expose the prototype object via myQuery.fn so methods can be added later
    tring.fn = selector_.prototype = {
        // API Methods
        hide: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'none';
            }
            return this;
        },
        show: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'block';
            }
            return this;
        },
        css: function(key, val) {
            if(typeof key=="string") {
                try {
                    for (var i = 0; i < this.length; i++) {
                        this[i].style[key] = val;
                    }
                    return this;
                } catch(e) {
                    return null;
                }
            } else if(typeof key=="object") {
                this.setMultiCss(key);
            }
        },
        setMultiCss: function(obj) {
            for (var i = 0; i < this.length; i++) {
                for(var key in obj) {
                    //if(!obj.hasOwnProperty(key)) {
                        this[i].style[key] = obj[key];
                    //}
                }
            }
        },
        remove: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].parentNode.removeChild(this[i]);
            }
            return this;
        },  
        extendComputedFn: function(attrs) {
            var arr = attrs.split("|"),
		    i = arr.length;
            
            while ( i-- ) {
                var key = arr[i];
                tring.fn[ key ] = function() {
                    return (getHeightOrWidth(this[0], this.capitalCamelCase(key)));
                };
            }
        },
        // height: function() {
//             return getHeightOrWidth(this[0], 'Height');
//         },
//         width: function() {
//             return getHeightOrWidth(this[0], 'Width');
//         },
//         innerWeight: function() {
//             return this[0].innerWidth;
//         },
//         innerHeight: function() {
//             return this[0].innerWidth;
//         },
//         outerWeight: function() {
//             return this[0].outerWidth
//         },
//         outerHeight: function() {
//             return this[0].outerWidth
//         },
        camelCase: function(s) {
            return s.toLowerCase().replace(/-(.)/g, function(match, group1) {
                return group1.toUpperCase();
            });
        },
        capitalCamelCase: function(s) {
            return (s||'').toLowerCase().replace(/(\b|-)\w/g, function(m) {
                return m.toUpperCase().replace(/-/,'');
            });
        }
        // More methods here, each using 'return this', to enable chaining
    };
})(window, document);

tring.ajax = function(options, callback, bubbling) {
    bubbling = (typeof bubbling!=="undefined")?bubbling:true;
    var successCallback, failureCallback, request,
    params = {
        method: "GET",
        url: null,
        scope: this,
        success: null,
        fail: null
    },
    response = {
        status: 0,
        text: null,
        xml: null,
        statusText: null
    };
    if(typeof options=="object") {
        for(var i in options) {
            params[i] = options[i];
        }
    } else if(typeof options==="string") {
        params.url = options;
        params.success = callback;
        params.fail = callback;
    }
    request = new XMLHttpRequest();
    request.open(params.method, params.url, bubbling);
    request.onload = function (e) {
        if (request.readyState === 4) {
            // Check if the get was successful.
            response.status = request.status;
            response.statusText = request.statusText;
            if (request.status === 200) {
                response.text = request.responseText;
                try {
                    response.xml = request.responseXML;
                } catch(e) {
                }
                //console.log(request.responseText);
            } else {
                //console.error(request.statusText);
            }
            if(params.success) {
                params.success.call(params.scope, response)
            }
        }
    };
    request.onerror = function (e) {
        response.statusText = "Error in making call";
        response.status;
        if(params.fail) {
            params.fail.call(params.scope, response);
        }
    };
    request.send(null);
};

tring.fn.on = function(eventName, callback, bubbling, options) {
    bubbling = typeof bubbling!=="undefined"?bubbling:true;
    var params = {
        scope: this,
        data: null
    }
    if(typeof options=="object") {
        for(var i in options) {
            params[i] = options[i];
        }
    }
    for (var i = 0; i < this.length; i++) {
        //this[i];
        this[i].addEventListener(eventName, function (e) {
            if(callback) {
                //call is not used as the params can be passed as an array, but for apply each param has to be specified
                callback.apply(params.scope, e, params.data);
            }
        }, bubbling)
    }
};

tring.fn.off = function(eventName, callback, data) {
    for (var i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, function() {
            callback.apply(params.scope, data);
        }, false);
    }
}

tring.fn.ready = function(callback) {
    for (var i = 0; i < this.length; i++) {
        this[i].onload = function() {
            callback.apply(params.scope, this[i]);
        }
    }
}
// 
// function removeAllEvents(node, event) {
//     if(node in _eventHandlers) {
//         var handlers = _eventHandlers[node];
//         if(event in handlers) {
//             var eventHandlers = handlers[event];
//             for(var i = eventHandlers.length; i--;) {
//                 var handler = eventHandlers[i];
//                 node.removeEventListener(event, handler[0], handler[1]);
//             }
//         }
//     }
// }


// var snakes = document.querySelector('#snakes'),
//     birds = document.querySelector('#birds');
// 
// snakes.addEventListener('click', function (e) {
// 
//     // To access the parent of a certain element in the DOM tree, we use the parentNode method.
// 
//     var parent = e.target.parentNode;
// 
//     console.log("Parent: " + parent.id);
// 
// 
//     // For the opposite, calling the .children method gets all child elements of the selected object.
// 
//     console.log("Children: ");
//     var children = e.target.children;
// 
//     // This returns a HTMLCollection (a type of array), so we have to iterate to access every child's content.
// 
//     for (var i = 0; i < children.length; i++) {
// 
//         console.log(children[i].textContent);
// 
//     }
// });
// 
// 
// birds.addEventListener('click', function (e) {
// 
//     // Getting the nearest sibling to our element is self-explanatory.
// 
//     var previous = e.target.previousElementSibling;
// 
//     if (previous) {
//         console.log("Previous sibling: " + previous.textContent);
// 
//     }
// 
//     var next = e.target.nextElementSibling;
// 
//     if (next) {
//         console.log("Next sibling: " + next.textContent);
// 
//     }
// 
//     // However, to acquire all the siblings of a node is a bit more complex.
//     // We have to take all of its parent's children and then exclude the original element.
//     // This is done by using filter and calling a function that checks every child one by one.
// 
//     console.log("All siblings: ");
// 
//     Array.prototype.filter.call(e.target.parentNode.children, function (child) {
//         if (child !== e.target) {
//             console.log(child.textContent);
//         }
//     });
// 
// });


// $.fn.extend = function (key, callback) {
//     console.log(this, key)
//         this[key] = callback;
// }("height", function() {return this[0].innerHeight;});

//tring.extend("height", function() {return this[0].innerHeight;});

//array can be looped with arr.forEach(key, val)
//object can be looped with for(key in obj)

 
// Example usage
// $('p').hide().remove();

// Add a plugin
// $.fn.pluginName = function() {
//     for (var i = 0; i < this.length; i++) {
//         this[i].style.color = '#333';
//     }
//     return this;
// }



// 
// var ninjaTurtles = ["Donatello", "Leonardo", "Michelangelo", "Raphael"];
// 
// // ForEach automatically iterates through an array.
// 
// ninjaTurtles.forEach(function (entry) {
//     console.log(entry);
// });
// 
// // The map method calls a function on every element of an array and creates a new array with the results.
// 
// var lovesPizza = ninjaTurtles.map(function (entry) {
// 
//     return entry.concat(" loves pizza!");
// 
// });
// 
// console.log(lovesPizza);



/*
 * js = arrow of js files or string url
 * callback on all file loaded, it gets called even on error with error details
 * options (object)
 *      listen => method that is called when each file is loaded
 *      scope  => scope object
 * usage: var s = new loadScripts(params); => new obj to ensure no conflict on multiple calls
 */
var loadScripts = function(js, callback, options) {
    this.scripts = [], this.tot = 0, this.len = 0, this.error = {},
    this.scope = (options && options.scope)?options.scope:null;
    this.listen = (options && options.listen)?options.listen:null;
    this.error.error = false;
    this.error.files = [];
    if(typeof js=="string") {
        this.scripts[0] = js;
    } else {
        this.scripts = js;
    }
    this.tot = this.len = this.scripts.length;
    this.callback = callback?callback:null;
    this.callback = callback?callback:null;
    this.load();
}
loadScripts.prototype.load = function() {
    var oHead, oScript;
    var self = this;
    while(this.scripts.length) {
        oHead =  document.getElementsByTagName("head")[0] || document.documentElement;
        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = this.scripts[0];
        //console.log(this)
        oScript.onload = function(e) {console.log("loaded", this.len);
            self.loaded(e);
        };
        oScript.onerror = function(e) {console.log("error", this.len);
            self.error.files.push(this.src);
            self.error.error = true;
            self.loaded(e);
        };
        oHead.insertBefore(oScript, oHead.firstChild);
        this.scripts.shift();
    }
}
loadScripts.prototype.loaded = function(e) {
    --this.len;
    try {
        (this.len==0 && this.callback)?(this.callback.call(this.scope, this.error)):"";
        if(this.listen) {
            this.listen.call(this.scope, e, (((this.tot-this.len)/this.tot)*100).toFixed(2));
        }
    } catch(e) {
        console.log(e);
    }
}

//remove duplicate in an array
//return names.slice().sort(function(a,b){return a - b}).reduce(function(a,b){if (a.slice(-1)[0] !== b) a.push(b);return a;},[]);
Array.prototype.removeDuplicates = function (){
    var temp=new Array();
    label:for(i=0;i<this.length;i++){
        for(var j=0; j<temp.length;j++ ){//check duplicates
            if(temp[j]==this[i])//skip if already present 
               continue label;      
        }
        temp[temp.length] = this[i];
    }
    return temp;
} 