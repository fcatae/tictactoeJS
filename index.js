$(function() {   
   
   console.log("indexjs diz: document ready");
   
   $("body").attrchange({
    trackValues: true, // set to true so that the event object is updated with old & new values
    callback: function(evnt) {
        console.log("attr change");
        if(evnt.attributeName == "display") { // which attribute you want to watch for changes
            if(evnt.newValue.search(/inline/i) == -1) {

                // your code to execute goes here...
            }
        }
    }
});
 
});