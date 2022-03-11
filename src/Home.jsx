import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Get_started_model from "./Get_started_model";

const Home = () => {
  const [record, setRecord] = useState([]);
  const [file, setImage] = useState(null);

  const assignValue = (val) => {
    setRecord(val);
    console.log(val);
  };
  const showImagw = (val) => {
    setImage(val);
  };

  const base64toBlob = (data) => {
    const base64WithoutPrefix = data.substr(
      "data:application/pdf;base64,".length
    );

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: "application/pdf" });
  };

  const showPdf = (val) => {
    const blob = base64toBlob(val);
    const url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank";

    document.body.appendChild(a);
    a.click();
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="heading text-center mt-3 mb-5">
          Landing template for <strong className="strong">startups</strong>
        </h1>
        <p className="fparagraph text-center mt-4">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div>
          <Get_started_model ShowObject={assignValue} showImage={showImagw} />
        </div>
        <img
          className="poster"
          src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          width={896}
          height={504}
          alt="hero"
        />
      </div>

      <div>
        <h1 className="h1_div text-center mt-5">Build up the whole picture</h1>
        <p className="sparagraph text-center">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Robust Workflow</h5>
                  <p className="card-text text-center">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Robust Workflow</h5>
                  <p className="card-text text-center">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Robust Workflow</h5>
                  <p className="card-text text-center">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Robust Workflow</h5>
                  <p className="card-text text-center">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Robust Workflow</h5>
                  <p className="card-text text-center">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Robust Workflow</h5>
                  <p className="card-text text-center">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="h1_div text-center mt-5">Workflow that just works</h1>
        <p className="sparagraph text-center">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p>
      </div>

      <div className="main_data">
        <div className="div_data">
          {Object.entries(record).map((key, value) => {
            return (
              <>
                {key[0] == "file" ? (
                  <img
                    className="div_img"
                    style={{ width: "350px", height: "200px" }}
                    src={key[1]}
                  ></img>
                ) : key[0] != "pdf" ? (
                  <p
                    style={{
                      margin: "50px",
                      padding: "10px",
                      border: "2px solid black",
                    }}
                  >
                    <b> {key[0]} </b>
                    {key[1]}
                  </p>
                ) : null}
                {key[0] == "pdf" ? (
                  <div onClick={() => showPdf(key[1])}>
                    <iframe src={key[1]}></iframe>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
