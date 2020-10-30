import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { projectContext } from '../../../App';

const HomePortfolioItem = (props) => {
    const { img_1, title, shortDescription } = props.item;

    const [project, setProject] = useContext(projectContext);

    const handleProject = (item) => {
        setProject(item);
    }

    return (
        <div className="col-md-4">
            <Link onClick={() => handleProject(props.item)} className="text-white text-decoration-none" to="/portfolioItemDetails">
                <div>
                    <img src={img_1} alt="" className="img-box mb-3" />
                    <h4 className="fw-200 mb-2">{title}</h4>
                    {/* <p className="text-uppercase fs-12 color-1">{shortDescription}</p> */}
                </div>
            </Link>
        </div>
    );
};

export default HomePortfolioItem;