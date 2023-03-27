const mongoose = require('mongoose')

const TimeLineSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    inconclusive:{
        type:Boolean,
        default: false 
    },
    incomplete:{
        type:Boolean,
        default: false 
    },
    totalInTime:{
        type:String,
        required:true
    },
    totalOutTime:{
        type:String,
        required:true
    },
    timeline:[{
        punchId:{
            type:Number,
            required:true
        },
        inTime:{
            type:String
        },
        outTime:{
            type:String
        }
    }
    ]
})

const Timeline = mongoose.model("timelineData",TimeLineSchema)

module.exports = Timeline;