import Contact from '../main/contact';
import FeedBack from '../main/feedBack';
import ForWhom from '../main/forWhom';
import Procedure from '../main/procedure';
import Services from '../main/services';
import Start from '../main/start';
import WhyOrion from '../main/whyOrion';
import Works from '../main/works';

const Main = () => {
    return (
        <main id="main">
            <Start />
            <WhyOrion />
            <Services />
            <ForWhom />
            <Procedure />
            <Works />
            <FeedBack />
            <Contact />
        </main>
    );
};

export default Main;
