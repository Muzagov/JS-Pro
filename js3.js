let x = 0;

let y = "o"

let error = true

let name = "js"




let espresso = {
    price: 50,
    hot: true,
    grains: {
        from: "brasil",
        sort: "arabica"
    }
}
espresso.price = 100



let iseCoffe = {
    price: 100,
    hot: false,
    grains: espresso.grains
}
iseCoffe.grains = undefined