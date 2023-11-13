import TitleWithBtn from "../../components/TitleWithBtn";
import { bestDeals } from "../../data/productsData";
import ProductCard from "../../components/ProductCard";
import { providerImages } from "../../data/packagesData";

const BestDeals = () => {
    console.log(providerImages)
    return (
        <section id="available-products" className="p-container grid gap-[3.125rem]">
            <TitleWithBtn heading="Available Products" />
            <div className="w-full overflow-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[25px] gap-y-[50px] justify-center items-stretch h-full">
                    {bestDeals.map((item, idx) => (
                        <ProductCard
                            key={`bdeals-${idx}`}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            providerIcon={item.providerIcon}
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