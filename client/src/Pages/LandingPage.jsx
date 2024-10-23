import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to the Sorting Visualizer</h1>
            <Link to="/visualizer">
                <button className="btn">Go to Visualizer</button>
            </Link>
        </div>
    );
};

export default LandingPage;
