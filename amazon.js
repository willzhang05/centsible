var balance;
var id = "57092e1b319313dd1b4310e8";
$.get("http://api.reimaginebanking.com/customers/" + id + "/accounts?key=7183aadcbc7ff9d602fb63db7fe93f2b", function(data) {
    var json = JSON.parse(data);
    var balance = parseInt(json["balance"]);
    console.log(balance);
});
