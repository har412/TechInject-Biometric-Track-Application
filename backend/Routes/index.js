const express = require('express')
const router=express.Router();
const userController = require("../Controller/UserController")
const timelineController = require('../Controller/TimelineController')

const cors = require('cors');
router.use(cors({
    origin:"*"
  }))

router.get("/user/:id",userController.getUser)
router.post("/user",userController.postUser)
router.post("/timeline",timelineController.postTimeline)
router.get("/timeline",timelineController.getTimeline)

module.exports=router;