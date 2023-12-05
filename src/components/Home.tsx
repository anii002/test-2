import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog,faPen,faEye,faGlobe,faPhone,faEnvelope,faUpRightFromSquare, } from "@fortawesome/free-solid-svg-icons";

const Login: React.FC = () => {
  
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between">
        <div>
          <h4 className="title">Form name</h4>
          <p className="para">Created by Amit on 23 Nov 2023</p>
        </div>
        <div>
          <div className="d-flex flex-wrap  justify-content-between">
            <h6 className="mx-2 shadow-lg p-3  bg-body rounded">
              <FontAwesomeIcon icon={faCog} className="icon" /> Option
            </h6>
            <h6 className="mx-2 shadow-lg p-3 bg-body rounded">
              <FontAwesomeIcon icon={faPen} className="icon" /> Edit form
            </h6>
            <h6 className="mx-2 shadow-lg p-3 bg-body rounded">
              <FontAwesomeIcon icon={faEye} className="icon" /> Preview
            </h6>
            <h6 className="mx-2 shadow-lg p-3 bg-body rounded">
              <FontAwesomeIcon icon={faGlobe} className="icon" /> Publish
            </h6>
          </div>
          <p className="pub para mx-3">Published 2 days ago</p>
        </div>
      </div>
      <div>
        <p className="para">
          Saving responses to default lead list.
          <span className="mx-2">change</span>
        </p>
      </div>
      <div className="d-flex flex-wrap col-lg-6 col-md-8 col-sm-12 justify-content-between">
        <div className="shadow p-3 ">
          <h5>Responses</h5>
          <h5 className="text-center pt-3">20</h5>
        </div>

        <div className="shadow p-3 ">
          <h5>Unique views</h5>
          <h5 className="text-center pt-3">23,000</h5>
        </div>
        <div className="shadow p-3 ">
          <h5>Completion rate</h5>
          <h5 className="text-center pt-3">10%</h5>
        </div>
      </div>
      <div className="border-top border-dark mt-3">
        <h4 className="mt-3">Responses</h4>
        <div className="d-flex flex-wrap  mt-2 p-3 shadow-lg rounded">
          <h6 className="action">Lead name</h6>
          <h6 className="action">Actions</h6>
          <h6 className="action">Assigned to</h6>
          <h6 className="action">Created at</h6>
          <h6 className="action">Last activity</h6>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-2 p-4 shadow-lg rounded">
          <h6>Lead name 1</h6>
          <div>
            <FontAwesomeIcon
              icon={faPhone}
              className="icon-1 rounded-circle p-2 "
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon-2 rounded-circle p-2 mx-2"
            />
            <FontAwesomeIcon
              icon={["fab", "whatsapp"]}
              className="icon-3 rounded-circle p-2 mx-2"
            />
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="icon-4 rounded-circle p-2"
            />
          </div>
          <h6>Chirag</h6>
          <h6>23rd Nov 2023 06:50 PM</h6>
          <h6>Call task created 2 hours ago</h6>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-2 p-4 shadow-lg rounded">
          <h6>Lead name 2</h6>
          <div>
            <FontAwesomeIcon
              icon={faPhone}
              className="icon-1 rounded-circle p-2 "
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon-2 rounded-circle p-2 mx-2"
            />
            <FontAwesomeIcon
              icon={["fab", "whatsapp"]}
              className="icon-3 rounded-circle p-2 mx-2"
            />
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="icon-4 rounded-circle p-2"
            />
          </div>
          <h6>Aniket</h6>
          <h6>23rd Nov 2023 06:50 PM</h6>
          <h6>Auto assigned to 2 minutes ago</h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
