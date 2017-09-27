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
                model.add(task[1], view.add())
                break;
            case 'task':
                model.find(task[1], view.find())
                break;
            case 'delete':
                model.delete(task[1], view.delete())
                break;
            case 'complete':
                model.complete(task[1], view.complete())
                break;
            case 'uncomplete':
                model.uncomplete(task[1], view.uncomplete())
                break;
            case 'list:outstanding':
                model.sorting(task[1], view.sorting())
                break;
            case 'completedSorting':
                model.completedSorting(task[1], view.completedSorting())
                break;
            default:
                console.log('bye bye')
                break;

        }
    }
}

module.exports = Controller
