var mongoose = require('mongoose');
var surveySchema = mongoose.Schema({
    username: String,
    pe1: String,
    pu1: String,
    at1: String,
    bi1: String,
    se1: String,
    sn1: String,
    sa1: String,
    m1: String,
    m2: String,
    m3: String
});
module.exports = mongoose.model('Survey', surveySchema);
//# sourceMappingURL=survey.js.map