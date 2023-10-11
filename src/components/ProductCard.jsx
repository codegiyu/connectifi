import PropTypes from "prop-types";
import RoundedButton from "./RoundedButton";

const ProductCard = ({ name, image, description, price, oldPrice, btnText }) => {

    return (
        <div className="w-[320px] lg:w-full pt-6 px-10 pb-12 flex-none grid gap-4 rounded-[20px] border-[0.5px] border-grey-89">
            <img src={image} alt="" className="max-w-[85%] mx-auto" />
            <div className="grid gap-4 w-full text-center">
                <h6 className="body-text-2 heading-3-medium text-[#585858]">
                    {name}
                </h6>
                <p className="text-base md:text-[22.67px] text-[#808080] leading-[27px]">
                    {description}
                </p>
                {oldPrice ? (
                    <span className="text-base md:text-[22.67px] font-medium line-through text-[#808080] leading-[27px] mx-auto">
                        {oldPrice}
                    </span>
                ) : null}
                <span className="leading-[122%] text-[28px] md:text-[36px] font-bold mx-auto text-[#585858]">
                    {price}
                </span>
            </div>
            <div className="mt-6 w-full">
                <RoundedButton text={btnText} styles={{ width: "100%" }} />
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    oldPrice: PropTypes.string,
    price: PropTypes.string,
    btnText: PropTypes.string,
}

export default ProductCard;