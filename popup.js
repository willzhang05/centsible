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
        //document.getElementById("toggle-form").submit();
    });
}



//(function() {
   
    // setInterval(function() { console.log(disabled) }, 100); 
    
//})();
