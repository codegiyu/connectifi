import TitleWithBtn from "../../components/TitleWithBtn";
import { bestDeals } from "../../data/productsData";
import ProductCard from "../../components/ProductCard";

const BestDeals = () => {

    return (
        <section id="available-products" className="p-container grid gap-[3.125rem]">
            <TitleWithBtn heading="Available Products" />
            <div className="w-full overflow-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex flex-nowrap flex-none lg:grid lg:grid-cols-3 gap-x-[25px] gap-y-[50px] items-stretch h-full">
                    {bestDeals.map((item, idx) => (
                        <ProductCard
                            key={`bdeals-${idx}`}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            btnText={item.btnText}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BestDeals;