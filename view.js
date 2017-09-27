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

    static add(){
        return function (pesan) {
            console.log(pesan)
        }  
    }

    static delete() {
        return function (pesan) {
            console.log(pesan)
        }
    }

    static find() {
        return function (data) {            
                console.log(data)           
        }
    }

    static complete(){
        return function (pesan){
                console.log(pesan)
        }
    }

    static uncomplete() {
        return function (pesan) {
                console.log(pesan)
        }
    }

    static sorting() {
        return function (pesan) {
            console.log(pesan)
        }
    }

    static completedSorting() {
        return function (pesan) {
            console.log(pesan)
        }
    }
}

module.exports = View