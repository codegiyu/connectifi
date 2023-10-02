import PropTypes from "prop-types";
import FooterLink from "./FooterLink";

const FooterLinkGroup = ({ header, linksData }) => (
    <div className="w-full grid gap-4">
        <h3 className="text-white font-bold text-2xl leading-6">{header}</h3>
        <div className="w-full grid gap-5">
            {linksData.map((item, idx) => <FooterLink key={`flink-${idx}`} link={item.link} text={item.text} />)}
        </div>
    </div>
)

FooterLinkGroup.propTypes = {
    header: PropTypes.string,
    linksData: PropTypes.array
}

export default FooterLinkGroup