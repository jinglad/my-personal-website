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
        <>

            <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                    <Link onClick={() => handleProject(props.item)} className="text-decoration-none text-dark" to="/portfolioItemDetails">
                        <img src={img_1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{shortDescription}</p>
                            <a href="#" className="btn btn-primary mr-2">Website</a>
                            <a href="#" className="btn btn-primary">Github</a>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <div>
                <img src={img_1} alt="" className="img-box mb-3" />
                <h4 className="fw-200 mb-2">{title}</h4>
                {/* <p className="text-uppercase fs-12 color-1">{shortDescription}</p> */}
            {/* </div> */}
        </>
    );
};

export default HomePortfolioItem;