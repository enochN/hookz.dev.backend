module.exports = app => {
    var webhookData = require("../controller/webhookDataController");

    app.get(`/webhooks/data`, async (req, res) => {
        return res.status(200).send({ 1: "test!" });
    });

    app.route("/webhooks/:webhook/data").get(webhookData.getDataByWebhook);

    app.route("/a/:webhook").all(webhookData.create);

    app.route("/d/:webhook").delete(webhookData.deleteDataByWebhook);
};
