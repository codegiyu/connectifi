

const createCartSlice = (set, get) => ({
    cart: [],
    numberInCart: 0,
    cartTotal: 0,
    isProductInCart: (id) => {
        const { cart } = get();

        return cart.findIndex(item => item.id === id) !== -1;
    },
    addToCart: (product) => {
        const { cart, updateCartTotal } = get(); 
        if (cart.find(item => item.id === product.id)) return;

        const newCartItem = {
            ...product,
            numberOfItems: 1,
            subTotal: product.price
        }

        const currCart = [...cart];

        currCart.push(newCartItem);

        set({ cart: currCart });
        updateCartTotal(currCart);
    },
    removeFromCart: (id) => {
        const { cart, updateCartTotal } = get(); 
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex === -1) return;

        const currCart = [...cart];

        currCart.splice(itemIndex, 1);

        set({ cart: currCart });
        updateCartTotal(currCart);
    },
    increaseItemInCart: (id) => {
        const { cart, updateCartTotal } = get(); 
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex === -1) return;

        const currCart = [...cart];

        const { price, numberOfItems } = currCart[itemIndex];

        currCart[itemIndex].numberOfItems = numberOfItems + 1;
        currCart[itemIndex].subTotal = (numberOfItems + 1) * price;

        set({ cart: currCart });
        updateCartTotal(currCart);
    },
    decreaseItemInCart: (id) => {
        const { cart, updateCartTotal } = get(); 
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex === -1) return;

        const currCart = [...cart];

        const { price, numberOfItems } = currCart[itemIndex];

        currCart[itemIndex].numberOfItems = numberOfItems - 1;
        currCart[itemIndex].subTotal = (numberOfItems - 1) * price;

        set({ cart: currCart });
        updateCartTotal(currCart);
    },
    updateCartTotal: (currCart) => {
        const total = currCart.reduce((acc, item) => acc + item.subTotal, 0);

        set({ cartTotal: total, numberInCart: currCart.length });
    },
    clearCart: () => {
        set({ cart: [], cartTotal: 0, numberInCart: 0 })
    }
})

export default createCartSlice; 