const mailController = require('../controllers/mailController.js');

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /save:
 *   post:
 *     tags: [Mail]
 *     summary: Update stored data
 *     description: Update the subjectDailyReport and sendTime in the stored data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subjectDailyReport:
 *                 type: string
 *               sendTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Successfully updated the data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 msg:
 *                   type: string
 */
router.post('/save', mailController.addNew2preSutBookingList);

/**
 * @swagger
 * /update:
 *   post:
 *     tags: [Mail]
 *     summary: update Mail Record data
 *     description: update the data of a mail record based on the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               recipientName:
 *                 type: string
 *               mailAddress:
 *                 type: string
 *               status:
 *                 type: integer
 *               createTime:
 *                 type: integer
 *               updateTime:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted the mail record
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP status code
 *                 success:
 *                   type: boolean
 *                   description: Request success indicator
 *                 data:
 *                   type: object
 *                   description: Empty object
 *                 msg:
 *                   type: string
 *                   description: Response message
 */
router.post('/update', mailController.updatepreSutBookingList);

/**
 * @swagger
 * /chgStatus:
 *   post:
 *     tags: [Mail]
 *     summary: Change Mail Record Status
 *     description: Change the status of a mail record based on the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               recipientName:
 *                 type: string
 *               mailAddress:
 *                 type: string
 *               status:
 *                 type: integer
 *               createTime:
 *                 type: integer
 *               updateTime:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted the mail record
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP status code
 *                 success:
 *                   type: boolean
 *                   description: Request success indicator
 *                 data:
 *                   type: object
 *                   description: Empty object
 *                 msg:
 *                   type: string
 *                   description: Response message
 */

router.post('/chgStatus', mailController.chgStatuspreSutBookingList);

/**
 * @swagger
 * /delete:
 *   get:
 *     tags: [Mail]
 *     summary: Delete Mail Record
 *     description: Delete a mail record by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the mail record to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the mail record
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP status code
 *                 success:
 *                   type: boolean
 *                   description: Request success indicator
 *                 data:
 *                   type: object
 *                   description: Empty object
 *                 msg:
 *                   type: string
 *                   description: Response message
 */

    router.get('/delete', mailController.deletepreSutBookingList);

/**
 * @swagger
 * /pageList:
 *   post:
 *     tags: [Mail]
 *     summary: Retrieve Mail Records Pagelist
 *     description: Retrieve a pagelist related to suites booking in the stored data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               body:
 *                 type: object
 *               query:
 *                 type: object
 *                 properties:
 *                   current:
 *                     type: integer
 *                   size:
 *                     type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the pagelist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP status code
 *                 success:
 *                   type: boolean
 *                   description: Request success indicator
 *                 data:
 *                   type: object
 *                   properties:
 *                     records:
 *                       type: array
 *                       description: List of mail records
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: Record ID
 *                           recipientName:
 *                             type: string
 *                             description: Recipient's name
 *                           mailAddress:
 *                             type: string
 *                             description: Email address
 *                           status:
 *                             type: integer
 *                             description: Status of the mail record
 *                           createTime:
 *                             type: integer
 *                             description: Timestamp of record creation
 *                           updateTime:
 *                             type: integer
 *                             description: Timestamp of record update
 *                     total:
 *                       type: integer
 *                       description: Total number of records
 *                     size:
 *                       type: integer
 *                       description: Number of records per page
 *                     current:
 *                       type: integer
 *                       description: Current page number
 *                     searchCount:
 *                       type: boolean
 *                       description: Search count indicator
 *                     pages:
 *                       type: integer
 *                       description: Total number of pages
 *                   msg:
 *                     type: string
 *                     description: Response message
 */

router.post('/pageList', mailController.preSutBookinglist);

module.exports = router;