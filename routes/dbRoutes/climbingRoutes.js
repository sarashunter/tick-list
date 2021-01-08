/**
 * @swagger
 *  components:
 *    schemas:
 *      Route:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the route.
 *          name:
 *            type: string
 *            description: The name of the route.
 *          createdAt:
 *            type: string
 *            format: date
 *            description: The date of the record creation.
 *        example:
 *           name: Kiwi
 * tags:
 *      name: Routes
 *      description: A route is a climbing path.
 */

const express = require('express')
const router = express.Router()

const routes = []
/**
 * @swagger
 *  paths:
 *      /climbingroutes/:
 *          get:
 *              summary: Returns all the routes
 *              tags: [Routes]
 *              responses:
 *                  '200':
 *                      description: the list of routes
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: integer
 */

router.get('/', (req, res) => {
  res.status(200).json(routes)
})

module.exports = router
