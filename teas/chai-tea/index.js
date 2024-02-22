const chaitea = require('cowsay');

function chaiteasay() {
    console.log(chaitea.say({
        text: "I am brewing",
        f: "cowfee"
    }));
}
module.exports = chaiteasay;