var id = "57092e1b319313dd1b4310e8";

$.get("https://sysadmin.wzhang.me/" + id + "/accounts?key=7183aadcbc7ff9d602fb63db7fe93f2b", function(data) {
    var json = data[0]; //.substring(1, data.length - 1));
    var balance = parseInt(json["balance"]);
    checkPrice(balance);
});

function checkPrice(balance) {
    var price = document.getElementsByClassName("amount")[2].innerHTML;
    price = price.trim();
    price = parseInt(price.substring(1, price.length).replace(".", ""));
    
    console.log(balance - price);
    if(balance - price < 0) {
        chrome.storage.sync.get("disabled", function (bool) {
            if(chrome.runtime.lastError) {
                var isDisabled = false;
                return;
            }
            var isDisabled = bool.disabled;
            modifyButton(isDisabled);
        });
     }
}

function modifyButton(isDisabled) {  
        var checkoutButtons = document.getElementsByClassName("button button-primary has-icon-right");
        console.log(checkoutButtons[0]);
        console.log(isDisabled);
        var modal = document.createElement("div");
        checkoutButtons[0].parentNode.appendChild(modal);
        if(!isDisabled) {
            checkoutButtons[0].setAttribute("disabled", true);
            checkoutButtons[0].removeAttribute("href");
            alert("Insufficient Funds");
        } else {    
            checkoutButtons[0].removeAttribute("disabled");
        }
}
