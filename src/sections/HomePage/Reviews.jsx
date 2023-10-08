import { reviewData } from "../../data/homeData";
import ReviewGroup from "../../components/ReviewGroup";

const Reviews = () => {

    return (
        <section className="w-full grid gap-20">
            <div className="w-full p-container grid lg:grid-cols-2 lg:items-center gap-[1.875rem] lg:gap-36 xl:gap-[270px]">
                <h3 className="w-full text-dark-19 heading-3 font-semibold md:heading-2 text-center lg:text-start">
                    Words From Our Valued Clients
                </h3>
                <p className="w-[90%] mx-auto lg:w-full text-grey-89 body-text-6 md:body-text-3 text-center lg:text-start">
                    Discover what our satisfied clients have to say about their experiences with us.
                </p>
            </div>
            <div
                className="p-container overflow-x-scroll [-ms-overflow-style:none] 
                [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                <ReviewGroup arr={reviewData} />
            </div>
        </section>
    )
}

export default Reviews;