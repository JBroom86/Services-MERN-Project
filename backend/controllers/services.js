/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/services`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all services
// router.get('/', (req, res) => {
//     db.Service.find()
//     .then(services => {
//         const flatList = []
//         for (let service of services) {
//             flatList.push(service._id, service.serviceName, service.servicePrice, service.serviceDescription, service.servicePhoto)
//         }
//         res.json(flatList)
//     })
// })

router.get('/', (req, res) => {
    db.Service.find()
      .then(services => {
        const serviceList = []
        for (let service of services) {
          serviceList.push({
            id: service._id,
            name: service.serviceName,
            price: service.servicePrice,
            description: service.serviceDescription,
            photo: service.servicePhoto
          })
        }
        res.json(serviceList)
      })
  })

// Create Route
router.post('/create/:serviceId', (req, res) => {
    db.Service.findByIdAndUpdate(
        req.params.serviceId,
        { $push: { services: req.body} },
        { new: true }
    )
    .then(() => res.redirect('/services'))
})

//Delete Route
router.delete('/.id', (req,res) => {
    db.Service.findOneAndUpdate(
        { 'services._id': req.params.id },
        { $pull: { services: {_id: req.params.id}}},
        { new: true }
    )
        .then(() => res.redirect('/services'))
})

// Exports these routes so that they are accessible in 'server.js'
module.exports = router