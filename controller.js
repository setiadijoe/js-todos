const view = require('./view.js')
const model = require('./model.js')

class Controller {
    static tasking(task) {
        switch (task[0]) {
            case 'help':
                model.help(view.help())
                break;
            case 'list':
                model.view(view.list())
                break;
            case 'add':
                model.add(task)
                break;
            default:
                console.log('bye bye')
                break;

        }
    }
}

module.exports = Controller
