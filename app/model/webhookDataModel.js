var db = require("../../utils/db.js");
var ip = require("ip");

var webhookDataModel = function(request) {
    this.webhook = request.params.webhook;
    this.data = JSON.stringify({
        headers: request.headers,
        body: request.body,
        httpVersion: request.httpVersion,
        method: request.method,
        url: request.url,
        statusCode: request.statusCode,
        statusMessage: request.statusMessage,
        query: request.query,
        ip: ip.address()
    });
    this.created_at = new Date();
};

webhookDataModel.create = function(newWebhookData, result) {
    db.query("INSERT INTO hookz_data set ? ", newWebhookData, function(
        err,
        res
    ) {
        if (err) {
            console.log("could not insert new webhookData");
            result(err, null);
        } else {
            result(null, newWebhookData);
        }
    });
};

webhookDataModel.getDataByWebhook = function(webhook, result) {
    db.query(
        "SELECT * from hookz_data WHERE webhook = ? ORDER BY created_at DESC",
        webhook,
        function(err, res) {
            if (err) {
                console.log("error fetching webhookDataz: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        }
    );
};

module.exports = webhookDataModel;
