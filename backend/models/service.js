const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    serviceName: {type: String},
    servicePrice: {type: String},
    serviceDescription: {type: String},
    serviceCost: {type: String},
    servicePhoto: {type: String}
})

module.exports = mongoose.model('Service', ServiceSchema)