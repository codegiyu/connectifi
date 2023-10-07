import PropTypes from "prop-types";
import ReviewSingle from "./ReviewSingle";

const ReviewGroup = ({ arr }) => {

    return (
        <section className="flex flex-nowrap flex-none h-full">
            <section className="flex flex-nowrap items-stretch gap-9 2xl:gap-14 2xl:justify-center">
                {arr.map((item, idx) => (
                    <ReviewSingle
                        key={`review-${idx}`}
                        text={item.text}
                        image={item.image}
                        name={item.name}
                        title={item.title}
                    />
                ))}
            </section>
            <div className="w-4 sm:w-12 lg:w-16 xl:w-[6.25rem] 2xl:w-40 bg-transparent h-full flex-none"></div>
        </section>
    )
}

ReviewGroup.propTypes = {
    arr: PropTypes.array
}

export default ReviewGroup;