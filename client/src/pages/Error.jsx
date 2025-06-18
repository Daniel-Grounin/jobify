import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>we cant find the page you are looking for</p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
        <p>
          <strong>Error Name:</strong> {error.name || "Unknown error"}
        </p>
        <p>
          <strong>Status:</strong> {error.status || "N/A"}
        </p>
        <p>
          <strong>Status Text:</strong> {error.statusText || "N/A"}
        </p>
        <p>
          <strong>Message:</strong>{" "}
          {error.message || error.data || "No message available"}
        </p>
        {error.stack && (
          <details style={{ whiteSpace: "pre-wrap" }}>
            <summary>Stack trace</summary>
            {error.stack}
          </details>
        )}
        <Link to="/dashboard">Back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
