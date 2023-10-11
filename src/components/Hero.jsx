import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = ({ heading, boldHeading = true, headingWidth, textWidth, text, heroImg, bothHalvesCentered = true, children, sideIcon = null }) => {

    return (
        <section className={`z-0 bg-pri-blue relative`}>
            <section className="w-full pt-16 md:pt-24 lg:pt-0">
                <section
                    className={`${bothHalvesCentered ? "" : "pt-5"} z-[2] relative p-container grid grid-cols-1 \
                    lg:grid-cols-[min(630px,_55%)_1fr] gap-12 md:gap-16 lg:gap-12`}
                >
                    <div className={`w-full grid gap-6 ${bothHalvesCentered ? "lg:self-center" : "self-start pt-3"}`}>
                        <h1
                            className={`heading-4 ${boldHeading ? "font-bold md:heading-2-bold lg:heading-1-bold" : "font-medium \
                            md:heading-2 lg:heading-1-medium"}  text-white `}
                            style={{ maxWidth: headingWidth }}
                        >
                            {heading}
                        </h1>
                        <p
                            className="body-text-5 lg:body-text-3 text-white"
                            style={{ maxWidth: textWidth }}
                        >
                            {text}
                        </p>
                        {children}
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <LazyLoadImage
                            src={heroImg.src}
                            height={heroImg.height}
                            width={heroImg.width}
                            visibleByDefault={true}
                            className=""
                            alt=""
                        />
                    </div>
                </section>
            </section>
            {sideIcon ? (
                <div className="">
                    <LazyLoadImage
                        src={sideIcon.src}
                        height={sideIcon.height}
                        width={sideIcon.width}
                        visibleByDefault={true}
                        className="z-[1] relative mt-[-80px]"
                        alt=""
                    />
                </div>
            ) : null
            }
        </section>
    )
}

Hero.propTypes = {
    heading: PropTypes.string,
    boldHeading: PropTypes.bool,
    headingWidth: PropTypes.string,
    textWidth: PropTypes.string,
    text: PropTypes.string,
    heroImg: PropTypes.object,
    bothHalvesCentered: PropTypes.bool,
    children: PropTypes.element,
    sideIcon: PropTypes.object,
}

export default Hero;