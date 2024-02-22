const greentea = require('cowsay');

function greenteasay() {
    console.log(greentea.say({
        text: "I am brewing",
        f: "tux"
    }));
}
module.exports = greenteasay;