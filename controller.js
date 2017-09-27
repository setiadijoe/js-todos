const view = require('./view.js')
const model = require('./model.js')

class Controller {
    static tasking(task) {
        switch (task[0]) {
            case 'help':
                model.help(view.help())
                break;
            case 'list':
                model.list(view.list())
                break;
            case 'add':
                model.add(task[1])
                break;
            default:
                console.log('bye bye')
                break;

        }
    }
}

module.exports = Controller
