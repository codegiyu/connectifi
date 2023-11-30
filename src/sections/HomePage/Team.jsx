import { TEAM_DATA } from "../../data/homeData";
import TeamCard from "../../components/TeamCard";

const Team = () => {

    return (
        <section className="p-container grid gap-16 pt-[2.25rem]">
            <div className="grid gap-4 text-center">
                <h3 className="w-full text-dark-19 heading-3 md:heading-2-bold text-center">
                    Meet Our Team
                </h3>
                <p className="text-grey-89 body-text-6 md:body-text-3">
                    Discover the Faces Behind Connectifi: A Cohesive Blend of Talent, Passion, and Innovation
                </p>
            </div>

            <div className="grid md:flex gap-[50px] md:gap-y-[40px] flex-wrap justify-center">
                {TEAM_DATA.map((item, idx) => (
                    <TeamCard 
                        key={idx}
                        name={item.name}
                        role={item.role}
                        image={item.image}
                        smallText={item.smallText}
                    />
                ))}
            </div>
        </section>
    )
}

export default Team;