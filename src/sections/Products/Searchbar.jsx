import { useState } from "react";
import RoundedButton from "../../components/RoundedButton";
import search from "../../assets/search.svg";

const Searchbar = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const runSearch = (e) => {
        e.preventDefault();
        setInput("");
    }

    return (
        <section className="p-container py-20 md:py-28 lg:py-36">
            <form onSubmit={runSearch} className="w-full p-4 flex gap-[10px] items-center bg-[#F1F1F1] rounded-[40px]">
                <img src={search} alt="" className="w-6 h-6" />
                <input
                    type="search"
                    name="search"
                    value={input}
                    onChange={handleChange}
                    placeholder="Search Products"
                    className="flex-1 bg-transparent border-none focus:outline-none text-lg lg:text-2xl leading-6 font-medium placeholder:text-grey-89 text-dark-19"
                />
                <RoundedButton type="submit" text="Search" />
            </form>
        </section>
    )
}

export default Searchbar;