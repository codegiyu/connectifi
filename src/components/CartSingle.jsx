import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAppStore from "../store/useAppStore";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import remove from "../assets/delete.svg";

const CartSingle = ({ id, name, description, image, numberOfItems, subTotal, providerIcon }) => {
    const decreaseItemInCart = useAppStore(state => state.decreaseItemInCart);
    const increaseItemInCart = useAppStore(state => state.increaseItemInCart);
    const removeFromCart = useAppStore(state => state.removeFromCart);
    const [decreaseDisabled, setDecreaseDisabled] = useState(true);
    const [increaseDisabled, setIncreaseDisabled] = useState(true);

    useEffect(() => {
        if (numberOfItems < 2) setDecreaseDisabled(true);
        else setDecreaseDisabled(false);

        if (numberOfItems > 9) setIncreaseDisabled(true);
        else setIncreaseDisabled(false);
    }, [numberOfItems])

    return (
        <div className="w-full pt-8 pb-6 flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between">
            <div className="w-max grid gap-6">
                <div className="w-max flex flex-col sm:flex-row gap-4">
                    <img src={image} alt="" className="w-[175px]" />
                    <div className="w-max grid">
                        <h3 className="body-text-2 lg:heading-3-medium text-[#3F3F3F]">
                            {name}
                        </h3>
                        <span className="text-base lg:text-[22.67px] text-[#898989] font-normal leading-[27px] mt-2 mb-4">
                            {description}
                        </span>
                        <img src={providerIcon} alt="" className="h-9" />
                    </div>
                </div>
                <button className="w-fit bg-transparent border-none outline-none" onClick={() => removeFromCart(id)}>
                    <img src={remove} alt="" className="w-11 h-11" />
                </button>
            </div>
            <div className="w-full sm:w-max flex items-center justify-between sm:grid sm:items-start sm:justify-start gap-9">
                <h3 className="body-text-2 lg:heading-3-medium text-[#3F3F3F] font-bold">
                    {`₦ ${subTotal.toLocaleString()}`}
                </h3>
                <div className="w-max flex items-center gap-4">
                    <button
                        className="w-10 h-10 rounded-[5px] bg-bright-blue grid place-items-center disabled:opacity-30"
                        onClick={() => decreaseItemInCart(id)}
                        disabled={decreaseDisabled}
                    >
                        <img src={minus} alt="" className="w-6 h-6" />
                    </button>
                    <span className="text-[#3F3F3F] font-bold body-text-6 lg:body-text-3">
                        {numberOfItems}
                    </span>
                    <button
                        className="w-10 h-10 rounded-[5px] bg-bright-blue grid place-items-center disabled:opacity-30"
                        onClick={() => increaseItemInCart(id)}
                        disabled={increaseDisabled}
                    >
                        <img src={plus} alt="" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}

CartSingle.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    numberOfItems: PropTypes.number,
    subTotal: PropTypes.number,
    providerIcon: PropTypes.string,
}

export default CartSingle;