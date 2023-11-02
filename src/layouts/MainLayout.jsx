import PropTypes from 'prop-types';
import WhiteHeader from '../sections/WhiteHeader';
// import BlueHeader from '../sections/BlueHeader';
import Footer from '../sections/Footer';
import Widget from '../sections/Widget';
import WidgetChat from '../sections/WidgetChat';

const MainLayout = ({ whiteBody = false, hasHeader = true, children }) => {

    return (
        <div className={`${whiteBody ? "bg-white" : "bg-[#F6F6F6]"}`}>
            {!hasHeader ? null : <WhiteHeader />}
            <main className='w-full'>
                {children}
                <WidgetChat />
                <Widget />
            </main>
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    whiteBody: PropTypes.bool,
    hasHeader: PropTypes.bool,
    children: PropTypes.element.isRequired
}

export default MainLayout