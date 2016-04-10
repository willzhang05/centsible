var disabled = false;
window.onload = function() {
    var settings = document.getElementById("settings");
    console.log(settings);
    settings.addEventListener("click", function() {
        var w = window.open("settings.html", "_blank");
        w.focus();
    });
    var toggle = document.getElementById("toggle-box");
    chrome.storage.sync.get("disabled", function (bool) {
        if(chrome.runtime.lastError) {
            toggle.checked = true;
            return;
        }
        console.log(bool.disabled);
        toggle.checked = bool.disabled;
        setToggleValue(toggle.checked);
    });
    toggle.addEventListener("click", function() {
       //*if(isToggled)V {
         /*   toggle.checked = "checked";
        }
`       
    disabled = toggle.checked;*/
        //chrome.storage.sync.set({"disabled" : toggle.checked}, function() {
            /*chrome.storage.sync.get("disabled", function (bool) {
                console.log(bool);
            });*/
            setToggleValue(toggle.checked);
        //});
        //document.getElementById("toggle-form").submit();
    });
}

function setToggleValue(bool) {
        chrome.storage.sync.set({"disabled" : bool}, function() {
            console.log("Saved toggle state " + bool + " to Chrome Storage");
        });
}

/*(function() {
    console.log(document.title);
    if(document.title.indexOf("Amazon.com Shopping Cart") != -1) {
        
    }
    // setInterval(function() { console.log(disabled) }, 100); 
    
})();*/
