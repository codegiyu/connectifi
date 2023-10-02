import PropTypes from 'prop-types';
import WhiteHeader from '../sections/WhiteHeader';
import BlueHeader from '../sections/BlueHeader';
import Footer from '../sections/Footer';

const MainLayout = ({ hasWhiteHeader = false, hasHeader = true, children }) => {

    return (
        <div>
            {!hasHeader ? null : hasWhiteHeader ? <WhiteHeader /> : <BlueHeader />}
            <main className='w-full p-container'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    hasWhiteHeader: PropTypes.bool,
    hasHeader: PropTypes.bool,
    children: PropTypes.element.isRequired
}

export default MainLayout