class View {
    static help() {
        return function (err, data) {
            if (err){
                console.log(err)
            } else {
                console.log(data)
            }
        }
    }
    static list() {
        return function (err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        }
    }
}

module.exports = View