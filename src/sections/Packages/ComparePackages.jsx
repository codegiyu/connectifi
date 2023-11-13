import ComparePackageBlock from "../../components/ComparePackageBlock";


const ComparePackages = () => {

    return (
        <section id="compare-packages" className="p-container">
            <section className="w-full grid gap-20">
                <section className="w-full grid gap-6">
                    <h2 className="body-text-2 md:heading-3 font-medium lg:heading-2 text-dark-19 text-center">
                        Compare Packages
                    </h2>
                    <span className="mx-auto text-grey-89 body-text-6 md:body-text-3 w-full text-center">
                        {`We understand you may be fixed on which network or bundle best meets your needs and budget. As a result, \
                        we have made it possible for you to compare packages across networks.`}
                    </span>
                </section>
                <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
                    <ComparePackageBlock />
                    <ComparePackageBlock />
                    <ComparePackageBlock />
                </section>
            </section>
        </section>
    )
}

export default ComparePackages;