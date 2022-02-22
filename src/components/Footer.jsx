import React from "react";

const Footer = () => {
  return (
    <div
      className="footer container-fluid p-5"
      style={{ backgroundColor: "#4D93EF" }}
    >
      <div className="container m-3">
        <div className="row justify-content-between mb-md-5 mb-5">
          <div className="col-md-4 col-12">
            <h5>Get Updates</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              placeat magni ipsa sint earum vitae blanditiis temporibus,
              accusamus perspiciatis
            </p>

            <form class="form-inline d-flex align-items-center justify-content-start">
              <div class="form-group ">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
              <button type="submit" class="btn btn-primary ms-2 px-4">
                SIGN UP
              </button>
            </form>
          </div>
          <div className="col-md-4 col-12 d-md-flex justify-content-end">
            <div>
              <h5>Get Updates</h5>
              <div className="social">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-between mt-md-5 pt-4"
          style={{ borderTop: "1px solid #fff" }}
        >
          <div className="col-md-4 col-12 d-flex justify-content-start">
            <div>
              <h5 className="text-white ">Categories</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Tattoos
                  </a>
                </li>
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Art
                  </a>
                </li>
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Craft
                  </a>
                </li>
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Mindfulness
                  </a>
                </li>
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Books & Beyond
                  </a>
                </li>
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Trainings
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center">
            <div>
              <h5 className="text-white">Community</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    DNA Community
                  </a>
                </li>
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-end">
            <div>
              <h5 className="text-white">Company</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="" style={{ color: "#E3E3E3" }}>
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="footer-bottom d-flex justify-content-between text-white pt-4 mt-4"
          style={{ borderTop: "1px solid #fff" }}
        >
          <div className="sitemap text-start">Site map</div>
          <div className="tnc text-center">Terms & Conditions</div>
          <div className="pp text-end">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
