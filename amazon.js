var balance;
var id = "57092e1b319313dd1b4310e8";
$.get("https://sysadmin.wzhang.me/" + id + "/accounts?key=7183aadcbc7ff9d602fb63db7fe93f2b", function(data) {
    var json = data[0]; //.substring(1, data.length - 1));
    console.log(json);
    var balance = parseInt(json["balance"]);
    console.log(balance);
    
    var price = document.getElementsByClassName("a-size-medium a-color-price sc-price sc-white-space-nowrap  sc-price-sign")[0].innerHTML;
    price = parseInt(price.substring(1, price.length).replace(".", ""));
    console.log(balance - price);
    if(balance - price < 0) {
        var isDisabled;
        chrome.storage.sync.get("disabled", function (bool) {
            console.log(bool);
            isDisabled = bool;
        });
        if(!isDisabled) {
            var checkoutButtons = document.getElementsByName("proceedToCheckout");
            console.log(checkoutButtons[0]);
            for(var i = 0; i < checkoutButtons.length; i++) {
                console.log(checkoutButtons[i]);
                checkoutButtons[i].disabled = true;
                checkoutButtons[i].style.opacity = "0.2";
            }
        } else {
            checkoutButtons[i].disabled = false;
            checkoutButtons[i].style.opacity = "1.0";
        }
    }
});
