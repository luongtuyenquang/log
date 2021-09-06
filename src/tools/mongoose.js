// const { mongo } = require("mongoose")

module.exports = {
    // Trường hợp là list thì lặp qua
    multipleMongooseToObject(mongooses){
        return mongooses.map(mongoose => mongoose.toObject())
    },
    // Trường hợp là 1 course thôi thì render thẳng nó ra luôn
    mongooseToObject(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}