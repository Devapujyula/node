const EventEmitter = require('node:events')

class PizzaShop extends EventEmitter{
    constructor() {
        super()
        this.orderNumber = 0
    }

    order() {
        this.orderNumber++
        this.emit("Orderreceived", size, topping)
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`)
    }
}

module.exports = PizzaShop;