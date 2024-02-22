const roseship = require('cowsay');

function roseshipsay() {
    console.log(roseship.say({
        text: "I am brewing",
        f: "cowfee"
    }));
}
module.exports = roseshipsay;