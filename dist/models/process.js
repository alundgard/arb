let mongoose = require('mongoose');
var processSchema = mongoose.Schema({
    taskAnswer: String,
    task1: String,
    task2: String,
    task3: String,
    task4: String,
    task5: String,
    task6: String,
    timestamp: String,
    time1: String,
    time2: String,
    qID: String,
    submit: String,
    username: String
});
/*
processSchema.methods.updateProcess = (res) => {
    console.log('--------------Updating Process DB--------------');

    var state_before = res.state_before;
    var state_after = res.state_after;
    var response = res.response;
    var respTime = res.respTime;
    var success = res.success;
    var mturkId = res.mturkId;

    this.

    this.pfs.push({
        date: Date.now(),
        mturkId: mturkId,
        roundNum: state_before.round.round_num,

        response: response,
        respTime: respTime,
        success: success,

        agentPos: {
            posX: state_before.player.posX,
            posY: state_before.player.posY
        },
        adverPos: JSON.stringify(state_before.enemy.positions)
    });
    this.save();
}
*/
module.exports = mongoose.model('Process', processSchema);
//# sourceMappingURL=process.js.map