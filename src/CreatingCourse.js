import "./CreatingCourse.css";
const CreatingCourse = () => {
  return (
    <div className="create-course-container">
      <div className="container">
        <h2 className="creating-title">Create the course</h2>
        <ul className="creating-nav">
          <li>
            <a href="#">Course</a>
          </li>

          <li>
            <a href="#">Create Course</a>
          </li>

          <li>
            <a href="#">Create Classe</a>
          </li>
        </ul>

        <div className="create-course-form">
          {/* Course title */}
          <form>
            <div className="row">
              <div className="col-form">
                <div className="form-group">
                  <label className="form-label">Course Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Course Title"
                    name="title"
                    value=""
                  ></input>
                </div>
              </div>

              {/* Course Discipline */}

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Course Discipline</label>
                  <select className="form-select" name="course_discipline">
                    <option value="">Select</option>
                    <option value="yoga">Yoga</option>
                    <option value="sophrologie">Sophrologie</option>
                    <option value="yoga_therapie">Yoga therapie</option>
                  </select>
                </div>
              </div>

              {/* Type Classes */}

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Type Classe</label>
                  <select className="form-select" name="type_class">
                    <option value="">Select</option>
                    <option value="Vinyasa">Vinyasa</option>
                    <option value="yin">Yin</option>
                    <option value="relaxation_dynamique">
                      Relaxation dynamique
                    </option>
                  </select>
                </div>
              </div>

              {/* Level */}

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Level</label>
                  <select className="form-select" name="level">
                    <option value="">Select</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Course Duration */}
              <div className="col-form">
                <div className="form-group">
                  <label className="form-label">Course Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="4 weeks 1 hour"
                    name="course_duration"
                    value=""
                  />
                </div>
              </div>

              {/* Level */}

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Language</label>
                  <select className="form-select" name="level">
                    <option value="">Select</option>
                    <option value="french">French</option>
                    <option value="english">English</option>
                  </select>
                </div>
              </div>

              {/* Regular Price */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Regular Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="29.99"
                    aria-describedby="regular_price_help"
                    name="regular_price"
                    value="0"
                  />
                  <div id="regular_price_help" className="form-text">
                    The regular price will show as the course price.
                  </div>
                </div>
              </div>

              {/* Latest Price */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label ">Latest Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="29.99"
                    aria-describedby="latest_price_help"
                    name="latest_price"
                    value="0"
                  />
                  <div id="latest_price_help" className="form-text">
                    The latest price will show as the course price.
                  </div>
                </div>
              </div>

              <div className="col-form">
                <div className="form-group">
                  <label className="form-label">Language</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Course Title"
                    name="title"
                    value=""
                  />
                </div>
              </div>

              {/* Image Loader */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label ">Course Image</label>
                  <input
                    type="file"
                    className="form-control file-control"
                    name="image"
                    required=""
                  />
                  <div className="form-text">Upload image size 750x550!</div>
                  <div className="mt-2">
                    <img
                      src="/images/empty-image.jpg"
                      alt="image"
                      className="img-thumbnail w-100px me-2"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label ">Short Description</label>
                  <textarea
                    className="form-control"
                    name="short_desc"
                    rows="6"
                  ></textarea>
                  <div className="form-text">
                    The description will highlight all available areas.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="css-bbq5bh">
                  {/* style="font-size: 12px;" */}
                  <button type="submit" className="default-btn" disabled="">
                    <i className="flaticon-right-arrow"></i>Create Course{" "}
                    <span></span>
                    <i
                      className="bx bx-info-circle"
                      //   style="left: 5px; position: relative; top: 2px;"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
    
  );
};

export default CreatingCourse;

