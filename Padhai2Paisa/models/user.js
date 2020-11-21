var mongoose = require('mongoose');

const JobSchema = mongoose.Schema(
    {
        Jobtitle :String,
        company: String,
        description: String,
        location:String,
        jobtype: String,
        deadline: String,
        createAt: {
            type:Date,
            default: Date.now()
        }
    })

    module.exports = mongoose.model('Jobs', JobSchema);