const TimeLine = require('../Modals/Timeline')

exports.postTimeline=(req,res)=>{
    const data = new TimeLine(
        {
            id: 12345,
            inconclusive: false,
            incomplete: false,
            totalInTime: "9:00 am",
            totalOutTime: "6:00 pm",
            timeline: [
              {
                punchId: 1,
                inTime: "9:00 am",
                outTime: null
              },
              {
                punchId: 2,
                inTime: null,
                outTime: "1:00 pm"
              },
              {
                punchId: 3,
                inTime: "1:30 pm",
                outTime: null
              },
              {
                punchId: 4,
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
        res.json(data).send();
    }
    )
    .catch((err)=>{
        console.log(err)
    })


}