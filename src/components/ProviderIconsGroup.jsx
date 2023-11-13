import PropTypes from "prop-types";
import ProviderIconSingle from "./ProviderIconSingle";

const ProviderIconsGroup = ({ arr, clickHandler, selectedProviderIndex }) => {

    return (
        <section className="w-full flex-none flex-nowrap">
            <section className="w-full flex flex-nowrap">
                {arr.map((item, idx) => (
                    <ProviderIconSingle
                        key={`prov-icon-${idx}`}
                        icon={item.icon}
                        providerIndex={idx}
                        selected={idx === selectedProviderIndex}
                        clickHandler={clickHandler}
                    />
                ))}
            </section>
        </section>
    )
}

ProviderIconsGroup.propTypes = {
    arr: PropTypes.array,
    clickHandler: PropTypes.func,
    selectedProviderIndex: PropTypes.number
}

export default ProviderIconsGroup;