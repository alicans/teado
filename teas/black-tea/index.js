const blacktea = require('cowsay');

function blackteasay() {
    console.log(blacktea.say({
        text: "I am brewing",
        f: "cowfee"
    }));
}
module.exports = blackteasay;