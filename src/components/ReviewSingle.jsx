import PropTypes from "prop-types";

const ReviewSingle = ({ text, image, name, title }) => (
    <div
        className="w-[300px] md:w-[400px] lg:w-[420px] 2xl:w-[500px] h-full p-[1.875rem] grid items gap-[1.875rem] border 
        border-[#F0F0F0] rounded-[10px] hover:border-none hover:shadow-reviewBox flex-none"
    >
        <p className="w-full body-text-7 md:body-text-4 2xl:body-text-2 text-[#333]">
            {text}
        </p>
        <div className="flex gap-2 items-center self-end">
            <img src={image} alt="" className="w-[55px] rounded-full" />
            <div className="grid gap-[2px]">
                <h6 className="text-black body-text-7 font-semibold md:text-lg 2xl:text-xl leading-6 2xl:leading-7">
                    {name}
                </h6>
                <span className="text-[#808080] text-xs font-light md:text-base 2xl:text-lg leading-[1.125rem] 2xl:leading-6">
                    {title}
                </span>
            </div>
        </div>
    </div>
)

ReviewSingle.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
}

export default ReviewSingle;