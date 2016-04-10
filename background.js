var id = "57092e1b319313dd1b4310e8";

$.get("https://sysadmin.wzhang.me/" + id + "/accounts?key=7183aadcbc7ff9d602fb63db7fe93f2b", function(data) {
    var json = data[0];
    var balance = parseInt(json["balance"]);
    setBalanceValue(balance);
});

function setBalanceValue(balance) {
    chrome.storage.sync.set({"balance" : balance}, function() {
        console.log("Currently " + balance + " Available");
    });
}

