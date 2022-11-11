/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import * as ctrl from './ctrlSwapi'
const router = express.Router()

router.get('/swapi/:resource', ctrl.getAllResourceSWAPI)
router.get('/swapi/:resource/:id', ctrl.getResourceSWAPI)

export default router
