var disabled = false;
window.onload = function() {
    var amount = document.getElementById("money");  
    chrome.storage.sync.get("balance", function (balance) {
        if(balance.balance < 0) {
            amount.style.color = "red";
        } else {
            amount.innerHTML = balance.balance;
            if(amount.innerHTML.length == 1) {
                amount.innerHTML = balance.balance + "00";
            }
            amount.innerHTML = "$" + (amount.innerHTML).substring(0, (amount.innerHTML).length - 2) + "." + (amount.innerHTML).substring((amount.innerHTML).length - 2)
            amount.style.color = "green";
        }
    });
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
        setToggleValue(toggle.checked);
    });
}

function setToggleValue(bool) {
    chrome.storage.sync.set({"disabled" : bool}, function() {
        console.log("Saved toggle state " + bool + " to Chrome Storage");
     });
}
