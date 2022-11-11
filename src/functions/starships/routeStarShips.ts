/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import * as ctrl from './ctrlStarShips'
import { verifyDataCreate } from './middleware/verifyDataCreate/verifyDataCreate'
import { verifyParamId } from './middleware/verifyParamId'
const router = express.Router()

router.post('/starships/', verifyDataCreate, ctrl.createStarShips)
router.get('/starships/', ctrl.getStarShips)
router.get('/starships/:id', verifyParamId, ctrl.getStarShip)
router.delete('/starships/:id', verifyParamId, ctrl.deleteStarShip)

export default router
