// import { useEffect } from "react";
import WhiteHeader from "../sections/WhiteHeader";
import AuthLayout from "./AuthLayout";
import useAppStore from "../store/useAppStore";
import RoundedButton from "../components/RoundedButton";
import CartSingle from "../components/CartSingle";
import { useNavigate } from "react-router-dom";


const CartPage = () => {
    const cart = useAppStore(state => state.cart);
    const numberInCart = useAppStore(state => state.numberInCart);
    const cartTotal = useAppStore(state => state.cartTotal);

    const navigate = useNavigate();

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <WhiteHeader />
            <main className='p-container mt-[50px] pb-20 grid gap-6'>
                <section className="w-full py-9 px-8 bg-white rounded-[24px] grid gap-4 overflow-hidden">
                    <h2 className="text-[#3F3F3F] font-bold body-text-2xl md:text-3xl">
                        {`Cart(${numberInCart})`}
                    </h2>

                    <div className="w-full grid">
                        {cart.map((item, idx) => (
                            <div key={idx} className="border-b border-[#AEAEAE] [&:nth-last-of-type(1)]:border-none">
                                <CartSingle 
                                    id={item.id}
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                                    numberOfItems={item.numberOfItems}
                                    subTotal={item.subTotal}
                                    providerIcon={item.providerIcon}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full grid gap-[3.125rem] bg-white overflow-y-auto rounded-[24px] px-[14px] pt-7 pb-12">
                    <div className="">
                        <h6 className="text-[#3F3F3F] font-bold body-text-2xl md:text-3xl p-[0_14px_16px] border-b border-b-[#AEAEAE]">
                            Cart Summary
                        </h6>
                        <div className="w-full flex items-center justify-between mt-10 mb-4 px-[14px]">
                            <span className="body-text-2 md:heading-3-medium text-[#3F3F3F] font-bold">
                                Total
                            </span>
                            <span className="text-[#3F3F3F] font-semibold body-text-2xl md:text-3xl">
                                {`₦ ${cartTotal.toLocaleString()}`}
                            </span>
                        </div>
                        <p className="body-text-5 lg:body-text-3 text-grey-89 px-[14px]">
                            Delivery fee not included yet
                        </p>
                    </div>
                    <div className="w-full px-[14px]">
                        <RoundedButton 
                            text={`Checkout(₦${cartTotal.toLocaleString()})`} 
                            styles={{ width: "100%", padding: "25px", borderRadius: "30px" }}  
                            clickHandler={() => {navigate("/checkout")}} 
                        />
                    </div>
                </section>
                <AuthLayout />
            </main>
        </div>
    )
}

export default CartPage;