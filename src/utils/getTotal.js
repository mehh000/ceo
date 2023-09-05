export const getCartTotal =(cart) => {
    let total = 0;
    if(Array.isArray(cart) && cart.length) {
        cart.forEach(item => {
            total+= item.quantity * item.price
        })
    }
    return total
}