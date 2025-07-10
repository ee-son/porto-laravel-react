import React from "react";

const Project = () => {
  return (
    <section id="project" style={{ textAlign: "center", paddingBottom: "50px" }}>
      <p className="fs-2 fw-bolder mb-5">Several projects that I have worked on</p>
      <div className="d-flex gap-4 flex-wrap justify-content-center">
        {/* Project 1 */}
        <div className="card" style={{ width: "22rem" }}>
          <img src="/assets/image/auto-cutting.png" className="card-img-top" alt="CV Stone" />
          <div className="card-body">
            <h5 className="card-title">CV Stone Detector</h5>
            <p className="card-text">
              A website for drill cuttings analysis using computer vision technology to determine stones types and
              characteristics.
            </p>
            <h6 className="mt-3">Tech:</h6>
            <ul className="list-inline">
              <li className="list-inline-item badge bg-gray">Flask</li>
              <li className="list-inline-item badge bg-black">Nextjs</li>
              <li className="list-inline-item badge bg-blue-700">YOLOv8</li>
            </ul>
          </div>
        </div>

         {/* Project 2 */}
        <div className="card" style={{ width: "22rem" }}>
          <img
            src="/assets/image/inpatient-room-reservation.png" className="card-img-top" alt="Inpatient Room Reservation"
          />
          <div className="card-body">
            <h5 className="card-title">Inpatient Room Reservation</h5>
            <p className="card-text">
              A website project used to make room reservations in hospitals with REST API technology.
            </p>
            <h6 className="mt-3">Tech:</h6>
            <ul className="list-inline">
              <li className="list-inline-item badge bg-red">Laravel</li>
              <li className="list-inline-item badge bg-teal-600">FastAPI</li>
            </ul>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card" style={{ width: "22rem" }}>
          <img src="/assets/image/diff-thyroid-cancer.png" className="card-img-top" alt="Thyroid Cancer" />
          <div className="card-body">
            <h5 className="card-title">Differentiated Thyroid Cancer Recurrence Prediction</h5>
            <p className="card-text">
              Website project to predict recurrence of differentiated thyroid cancer using random forest classification model.
            </p>
            <h6 className="mt-3">Tech:</h6>
            <ul className="list-inline">
              <li className="list-inline-item badge bg-orange">HTML</li>
              <li className="list-inline-item badge bg-indigo">Bootstrap</li>
              <li className="list-inline-item badge bg-gray">Flask</li>
            </ul>
          </div>
        </div>

         {/* Project 4 */}
        <div className="card" style={{ width: "22rem" }}>
          <img src="/assets/image/book-store.png" className="card-img-top" alt="Project Image" />
          <div className="card-body">
            <h5 className="card-title">Book Store</h5>
            <p className="card-text">
              Personal website project that can do CRUD operations. It contains some features such as book’s rating,
              favorites, and popular books.
            </p>
            <h6 className="mt-3">Tech:</h6>
            <ul className="list-inline">
              <li className="list-inline-item badge bg-red">Laravel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
