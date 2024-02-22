const oolong = require('cowsay');

function oolongsay() {
    console.log(oolong.say({
        text: "I am brewing",
        f: "cowfee"
    }));
}
module.exports = oolongsay;