const controller =  require('./controller')
const order = process.argv
let task = order.slice(2)

controller.tasking(task)