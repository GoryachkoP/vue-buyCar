const car = (name, model, owner, year, phone, image) => ({ name, model, year, owner, phone, image })
const log = (text, type, date = new Date()) => ({ text, type, date })

const cars = [
    car("Nissan", "GTR-R35", "Pavel", 2016, "+38 063 236 44 99", "/images/nissan.png"),
    car("Ford", "Mustang", "Pavel2", 2017, "+38 063 236 55 66", "/images/mustang.png"),
    car("Porsche", "Carera", "Pavel3", 2018, "+38 063 236 11 88", "/images/porsche_PNG10603.png"),
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },

    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false,
                this.logs.push(
                    log(`Success order ${this.car.name} - ${this.car.model}`, 'ok')
                )
        },

        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Canceled order ${this.car.name} - ${this.car.model}`, 'cancel')
            )
        }
    },

    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },

        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },

    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})