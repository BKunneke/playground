// Object property shorthand

const name = 'Bill'
const userAge = 58

const user = {
    name,
    age: userAge,
    location: "Orlando"
}

console.log(user)

// Object destructuring

const product = {
    label: "Red notebook",
    price: 3, 
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label, stock} = product
console.log(label)
console.log(stock)
