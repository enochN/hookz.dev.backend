const webhookDataModel = require("../model/webhookDataModel");

exports.create = function(req, res) {
    var newWebhookData = new webhookDataModel(req);

    webhookDataModel.create(newWebhookData, function(err, webhookData) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(201).send(webhookData);
        }
    });
};

exports.getDataByWebhook = function(req, res) {
    webhookDataModel.getDataByWebhook(req.params.webhook, function(
        err,
        webhookData
    ) {
        if (err) res.send(err);
        res.status(201).send(webhookData);
    });
};
