/**
 * Created by gail on 12/22/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: {
        type: Date,
        default: Date.now
     }
});

// Expose (export) the model now...
module.exports = mongoose.model('Standup', standupSchema);