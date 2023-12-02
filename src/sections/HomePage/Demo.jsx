
const Demo = () => (
    <section className=" bg-white py-14">
        <section className="p-container grid gap-[4rem] items-center">
            <div className="w-full lg:max-w-max mx-auto grid gap-[1.875rem]">
                <h3 className="w-full lg:w-max text-dark-19 heading-3 font-semibold md:heading-2 text-center">
                    Product Demo
                </h3>
                {/* <span className="w-4/5 text-grey-89 body-text-6 md:body-text-3 text-center mx-auto">
                    
                </span> */}
            </div>
            <div className="mx-auto w-full max-w-4xl aspect-video">
                <iframe 
                    src="https://www.youtube.com/embed/FwPoA3z9Fb0" 
                    title="Connectifi Demo" 
                    width={"100%"}
                    height={"100%"}
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    </section>
)

export default Demo;