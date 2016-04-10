window.onload = function() {
    var amount = document.getElementById("money");
    amount.style.fontSize = "16px";
    chrome.storage.sync.get("balance", function (balance) {
        if(balance.balance < 0) {
            amount.style.color = "red";
        } else {
            amount.innerHTML = balance.balance;
            if(amount.innerHTML.length == 1) {
                amount.innerHTML = balance.balance + "00";
            }
            amount.innerHTML = "Current Balance in Account: $" + (amount.innerHTML).substring(0, (amount.innerHTML).length - 2) + "." + (amount.innerHTML).substring((amount.innerHTML).length - 2)
            amount.style.color = "green";
        }
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
    var idBox = document.getElementById("capitalone-id");
    idBox.style.width = "200px";
    chrome.storage.sync.get("id", function(value) {
    idBox.value = value.id;
    }); 
    document.getElementById("submit").addEventListener("click", function() {
        chrome.storage.sync.set({"id" : idBox.value}, function() {
            console.log("Saved value " + idBox.value + " to Chrome Storage");
        });
    });
}

function setToggleValue(bool) {
    chrome.storage.sync.set({"disabled" : bool}, function() {
        console.log("Saved toggle state " + bool + " to Chrome Storage");
     });
}
