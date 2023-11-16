import PropTypes from "prop-types";
import RegButton from "./RegButton";
import useAppStore from "../store/useAppStore";
import { toast } from "react-toastify";
import { useState } from "react";

const ProductCard = ({ id, name, image, description, price, oldPrice, providerName, providerIcon }) => {
    const user = useAppStore(state => state.user);
    const addToCart = useAppStore(state => state.addToCart);
    const removeFromCart = useAppStore(state => state.removeFromCart);
    const isProductInCart = useAppStore(state => state.isProductInCart);
    const [productInCart, setProductInCart] = useState(isProductInCart(id));
    
    const handleAddToCart = () => {
        if (!user) {
            toast.error("Please login to access this feature");
            return;
        }

        addToCart({ id, name, image, description, price, oldPrice, providerIcon, providerName });
        setProductInCart(true);
    }
    
    const handleRemoveFromCart = () => {
        if (!user) {
            toast.error("Please login to access this feature");
            return;
        }

        removeFromCart(id);
        setProductInCart(false);
    }

    return (
        <div className="w-full md:w-[320px] lg:w-full pt-6 px-10 pb-12 flex-none grid gap-[30px] rounded-[20px] bg-white">
            <div className="w-[72%] aspect-[1.29] mx-auto">
                <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="grid gap-4 w-full text-center">
                <div className="w-full grid justify-items-center gap-3">
                    <img src={providerIcon} alt="" className="h-[30px]" />
                    <h6 className="body-text-2 md:heading-3-medium text-[#3F3F3F]">
                        {name}
                    </h6>
                </div>
                <p className="text-base md:text-[22.67px] text-[#898989] font-light leading-[27px] w-full whitespace-nowrap text-ellipsis overflow-hidden">
                    {description}
                </p>
                {oldPrice ? (
                    <span className="text-base md:text-[22.67px] font-medium line-through text-[#898989] leading-[27px] mx-auto">
                        {"₦" + oldPrice.toLocaleString()}
                    </span>
                ) : null}
                <span className="leading-[122%] text-[28px] md:text-[36px] font-bold mx-auto text-[#3F3F3F]">
                    {"₦" + price.toLocaleString()}
                </span>
            </div>
            <div className="mt-6 w-full">
                <RegButton 
                    text={productInCart ? "Remove From Cart" : "Add To Cart" } 
                    styles={{ width: "100%" }} 
                    clickHandler={productInCart ? handleRemoveFromCart : handleAddToCart} 
                />
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    oldPrice: PropTypes.number,
    price: PropTypes.number,
    providerName: PropTypes.string,
    providerIcon: PropTypes.string
}

export default ProductCard;