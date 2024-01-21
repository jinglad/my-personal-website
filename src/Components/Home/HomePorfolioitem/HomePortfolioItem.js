import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { projectContext } from "../../../App";

const HomePortfolioItem = (props) => {
  const { img_1, title, shortDescription, website, client_side_code } =
    props.item;

  const [project, setProject] = useContext(projectContext);

  const [modalInfo, setModalInfo] = useState({});

  const handleProject = (item) => {
    setProject(item);
  };

  return (
    <>
      <div className="col-md-4 text-dark">
        <div className="card">
          <img
            src={img_1}
            style={{
              objectFit: "cover",
            }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{shortDescription}</p>
            <div className="mt-3">
              <button
                data-toggle="modal"
                data-target="#exampleModal"
                className="btn btn-primary"
                onClick={() =>
                  setModalInfo({
                    open: true,
                    data: props.item,
                  })
                }
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade modal-dialog-centered"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {modalInfo?.data?.title}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePortfolioItem;
