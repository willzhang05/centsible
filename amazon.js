var id = "57092e1b319313dd1b4310e8";

$.get("https://sysadmin.wzhang.me/" + id + "/accounts?key=7183aadcbc7ff9d602fb63db7fe93f2b", function(data) {
    var json = data[0]; //.substring(1, data.length - 1));
    var balance = parseInt(json["balance"]);
    checkPrice(balance);
});

function checkPrice(balance) {
    var price = document.getElementsByClassName("a-size-medium a-color-price sc-price sc-white-space-nowrap  sc-price-sign")[0].innerHTML;
    price = parseInt(price.substring(1, price.length).replace(".", ""));
    if(balance - price < 0) {
        chrome.storage.sync.get("disabled", function (bool) {
            if(chrome.runtime.lastError) {
                isDisabled = false;
                return;
            }
            isDisabled = bool.disabled;
            modifyButton(isDisabled);
        });
     }
}

function modifyButton(isDisabled) {  
        var checkoutButtons = document.getElementsByName("proceedToCheckout");
        if(!isDisabled) {
            checkoutButtons[0].setAttribute("disabled", true);
        } else {    
            checkoutButtons[0].removeAttribute("disabled");
        }
    }

