const TimeLine = require('../Modals/Timeline')

exports.postTimeline=(req,res)=>{
    const data = new TimeLine(
        {
            id: 12349,
            inconclusive: false,
            incomplete: false,
            totalInTime: "6:00 am",
            totalOutTime: "6:00 pm",
            timeline: [
              {
                punchId: 1,
                scanType:"fingerprint",
                deduction: null,
                Exemption:null,
                inTime: "6:00 am",
                outTime: null,
              },
              {
                punchId: 2,
                scanType:"face Scan",
                deduction: null,
                Exemption:null,
                inTime: null,
                outTime: "12:00 pm"
              },
              {
                punchId: 3,
                scanType:"fingerprint",
                deduction: null,
                Exemption:null,
                outTime: "3:30 pm",
                intTime: null
              },
              {
                punchId: 4,
                scanType:"face Scan",
                deduction: null,
                Exemption:null,
                inTime: null,
                outTime: "6:00 pm"
              }
            ]
          }
        
        
    )
    

    data.save()
    .then((data)=>{
        console.log(data)
        res.send(data)
})
    .catch((err)=>{
        console.log(err)
    })


}
exports.getTimeline= (req,res) =>{

    TimeLine.find()
    .then((data)=>{
        res.json(data);
    }
    )
    .catch((err)=>{
        console.log(err)
    })


}
