var disabled = false;
window.onload = function() {
    var settings = document.getElementById("settings");
    console.log(settings);
    settings.addEventListener('click', function() {
        var w = window.open("settings.html", "_blank");
        w.focus();
    });
    var toggle = document.getElementById("toggle-box");
    toggle.addEventListener('click', function() {
        disabled = toggle.checked;
        chrome.storage.sync.set({'disabled' : disabled}, function() {
            console.log(disabled);
        });
        //document.getElementById("toggle-form").submit();
    });
}


function getAccountInfoFromId(id) {
    
}

/*(function() {
    console.log(document.title);
    if(document.title.indexOf("Amazon.com Shopping Cart") != -1) {
        
    }
    // setInterval(function() { console.log(disabled) }, 100); 
    
})();*/
