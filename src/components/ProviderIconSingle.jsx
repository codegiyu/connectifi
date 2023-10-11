import PropTypes from "prop-types";

const ProviderIconSingle = ({ icon, selected, providerIndex, clickHandler }) => (
    <button
        type="button"
        onClick={() => clickHandler(providerIndex)}
        className={`w-full h-full h-[90px] sm:h-[160px] rounded-[6px_6px_0_0] lg:rounded-[15px_15px_0_0] \
        p-2 md:p-4 grid place-items-center border-none focus:outline-none \
        ${selected ? "bg-[#CCE3F2]" : "bg-transparent"}`}
    >
        <img src={icon} alt="" className=" max-h-[110px] object-cover mx-auto" />
    </button>
)

ProviderIconSingle.propTypes = {
    icon: PropTypes.string,
    selected: PropTypes.bool,
    clickHandler: PropTypes.func,
    providerIndex: PropTypes.number
}

export default ProviderIconSingle;