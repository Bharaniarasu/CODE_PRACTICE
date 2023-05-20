import "./index.scss";
import Fish from "../../../pictures/fish-logo.png";
const ComponentC = () => {
  return (
    <>
      <div className="fishing-component-c">
        <div className="row content container">
          <div className="col-12">
          <h1 className="text-center">Fish Hatcheries</h1>

          </div>
          <div className="col-md-4 col-sm-6 content-1">
            <img src={Fish} alt="fishing" />
          </div>
          <div className="col-md-8 col-sm-6 content-2">
            <br />
            <br />
            <p>
              Ullamco enim do pariatur in. Ad dolor aute deserunt esse aute. Non
              sit ullamco eu ullamco irure labore dolor. Velit duis aliquip ea
              magna fugiat minim anim non mollit. Culpa aute dolor elit labore
              reprehenderit magna.
            </p>
            <br />
            <p>
              Ullamco enim do pariatur in. Ad dolor aute deserunt esse aute. Non
              sit ullamco eu ullamco irure labore dolor. Velit duis aliquip ea
              magna fugiat minim anim non mollit. Culpa aute dolor elit labore
              reprehenderit magna.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentC;
