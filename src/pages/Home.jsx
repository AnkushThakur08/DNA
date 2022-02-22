import React from "react";
import AppButton from "../components/AppButton";
import Base from "../components/Base";
import group1752 from "../assets/Group 1752.svg";
import tattoo from "../assets/tattoo/tattoo@2x.png";
import artIllustration from "../assets/art-illustration.svg";
import Untitled102 from "../assets/Untitled-1-02.svg";
import group1755 from "../assets/Group 1755.svg";
import books1 from "../assets/books1.svg";
import mindfulness from "../assets/mindfulness.svg";
import ImageRightComponent from "../components/ImageRightComponent";

const Home = () => {
  return (
    <Base>
      <div className="container p-2">
        <div className="m-4 hero-section">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 col-12">
              <h1 className="title fw-bolder">Explore</h1>
              <h6
                className="subtext text-secondary fw-normal"
                style={{
                  color: "#343434",
                  font: "normal normal normal Montserrat",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, nam excepturi qui voluptate blanditiis suscipit totam
                optio ducimus nobis assumenda!
              </h6>
            </div>

            <div className="col-md-7 col-12">
              <img className="w-100" src={group1752} alt="explore" />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="container px-2">
        <div className="row d-flex align-items-center my-5">
          <div className="col-md-6 col-12">
            <img
              style={{ width: "80%" }}
              className="rounded mx-auto d-block"
              src={tattoo}
              alt="tattoo"
            />
          </div>
          <div className="col-md-6 col-12">
            <h1 className="title fw-bolder">Tattoos</h1>
            <h6
              className="subtext text-secondary fw-normal"
              style={{
                color: "#343434",
                font: "normal normal normal Montserrat",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd
            </h6>
            <AppButton className="mt-5" name="Explore" />
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <div className="container p-2 py-4">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-12 py-3">
              <h1 className="title fw-bolder">Tattoos</h1>
              <h6
                className="subtext text-secondary fw-normal"
                style={{
                  color: "#343434",
                  font: "normal normal normal Montserrat",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </h6>
              <AppButton className="mt-5" name="Explore" />
            </div>
            <div className="col-md-6 col-12 py-3">
              <img className="w-100" src={artIllustration} alt="" />
            </div>
          </div>

          {/* sub section */}

          <div className="row d-flex align-items-center">
            <div className="col-md-2 col-none py-3"></div>
            <div className="col-md-5 col-12 py-3">
              <img className="w-100" src={Untitled102} alt="" />
            </div>
            <div className="col-md-5 col-12 py-3">
              <h1 className="title fw-bolder">Craft</h1>
              <h6
                className="subtext text-secondary fw-normal"
                style={{
                  color: "#343434",
                  font: "normal normal normal Montserrat",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </h6>
              <AppButton className="mt-5" name="Explore" />
            </div>
          </div>
        </div>
      </div>

      {/* 4th section */}

      {/*      <div className="container px-2">
        <div className="row d-flex align-items-center my-5">
          <div className="col-md-6 col-12">
            <h1 className="title fw-bolder">DNA Community</h1>
            <h6
              className="subtext text-secondary fw-normal"
              style={{
                color: "#343434",
                font: "normal normal normal Montserrat",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </h6>
            <AppButton className="mt-5" name="Explore" />
          </div>
          <div className="col-md-6 col-12">
            <img
              style={{ width: "80%" }}
              className="rounded mx-auto d-block"
              src={group1755}
              alt="tattoo"
            />
          </div>
        </div>
            </div> */}

      <ImageRightComponent
        title="DNA Community"
        subtext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua."
        image={group1755}
      />

      {/* 5th section */}

      <div style={{ backgroundColor: "#EEEEEE" }}>
        <div className="container p-2 py-4">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-12 py-3">
              <h1 className="title fw-bolder">Workshops</h1>
              <h6
                className="subtext text-secondary fw-normal"
                style={{
                  color: "#343434",
                  font: "normal normal normal Montserrat",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </h6>
              <AppButton className="mt-5" name="Explore" />
            </div>
            <div className="col-md-6 col-12 py-3">
              <img className="w-100" src={artIllustration} alt="" />
            </div>
          </div>

          {/* sub section */}

          <div className="row d-flex align-items-center">
            <div className="col-md-2 col-none py-3"></div>
            <div className="col-md-5 col-12 py-3">
              <img className="w-100" src={Untitled102} alt="" />
            </div>
            <div className="col-md-5 col-12 py-3">
              <h1 className="title fw-bolder">Trainings</h1>
              <h6
                className="subtext text-secondary fw-normal"
                style={{
                  color: "#343434",
                  font: "normal normal normal Montserrat",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </h6>
              <AppButton className="mt-5" name="Explore" />
            </div>
          </div>
        </div>
      </div>

      {/* 6th section */}

      <ImageRightComponent
        title="Books & Beyond"
        subtext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua."
        image={books1}
      />

      {/* 7th section */}

      <div style={{ backgroundColor: "#EEEEEE" }}>
        <div className="container p-2 py-5">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img className="w-100" src={mindfulness} alt="mindfulness" />
            <h1 className="my-4">Mindfulness</h1>
            <h6
              className="subtext text-secondary fw-normal text-center my-2"
              style={{
                color: "#343434",
                font: "normal normal normal Montserrat",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              maiores, non quia deserunt et consectetur amet deleniti illum
              repudiandae id obcaecati, laboriosam veritatis harum
              necessitatibus.
            </h6>
            <AppButton className="my-2" name="Explore" />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
