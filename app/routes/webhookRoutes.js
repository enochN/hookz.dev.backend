module.exports = app => {
    var webhook = require("../controller/webhookController");

    app.get(`/webhooks/test`, async (req, res) => {
        return res.status(200).send({ 1: "something :)" });
    });

    // GET or POST webhooks
    app.route("/webhooks")
        .get(webhook.getAll)
        .post(webhook.create);
};
