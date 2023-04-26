import "./CourseCard.css";
import "./Style.css";
const CourseCard = () => {
  return (
    <>

      <div class="course-card">
        <div class="course-image">
          <img
            src="https://res.cloudinary.com/dev-empty/image/upload/v1668062611/dn353mhtzinpcxpmggpu.jpg"
            alt="Course Image"
          />
          <div class="course-prices">
            <div class="course-price">$49.99</div>
            <div class="course-discount">$69.99</div>
          </div>
          <span class="course-menu">
            <i class="fa fa-ellipsis-v"></i>
            <div class="dropdown-content">
              <a href="#">
                <i class="fa fa-pencil-square-o"> </i> Edit Course
              </a>
              <a href="#">
                <i class="fa fa-upload"></i> Upload Vedio
              </a>
              <a href="#">
                <i class="fa fa-file-video-o"></i> Delete Vedio
              </a>
              <a>
                <i class="fa fa-plus-square-o"></i> Add Assets
              </a>
              <a>
                <i class="fa fa-trash"></i> Delte
              </a>
            </div>
          </span>
        </div>
        <div class="course-details">
          <div class="professor-details">
            <img
              src="https://res.cloudinary.com/dev-empty/image/upload/v1661230727/rquq94qv4bpuvf7xnxyh.jpg"
              alt="Smith"
            />
            <h3 class="professor-name">John Doe</h3>
          </div>
          <h2 class="course-title">Introduction to Web Development</h2>
          <p class="course-description">
            Learn the basics of HTML, CSS, and JavaScript to build your own
            websites. Learn the basics of HTML, CSS, and JavaScript to build
            your own websites.
          </p>
          <div class="course-meta">
            <span class="course-lessons">
              <i class="fa fa-book"></i> 12 Lessons
            </span>
            <span class="course-students">
              <i class="fa fa-users"></i> 1,234 Students
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
