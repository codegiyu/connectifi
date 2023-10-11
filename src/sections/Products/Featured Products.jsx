import TitleWithBtn from "../../components/TitleWithBtn";
import { featuredProducts } from "../../data/productsData";
import ProductCard from "../../components/ProductCard";

const FeaturedProducts = () => {

    return (
        <section className="p-container grid gap-[3.125rem]">
            <TitleWithBtn heading="Featured Products" btnText="View All" />
            <div className="w-full overflow-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex flex-nowrap flex-none lg:grid lg:grid-cols-3 gap-[25px] items-stretch h-full">
                    {featuredProducts.map((item, idx) => (
                        <ProductCard
                            key={`featprod-${idx}`}
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

export default FeaturedProducts;