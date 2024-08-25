import "./App.css";
import GettingError from "./Copmonents/GettingError";
import LoadingIndikator from "./Copmonents/LoadingIndikator";
import SuccessfulData from "./Copmonents/SuccessfulData";
import useJsonFetch from "./Hook/CustomHook";

function App() {
  return (
    <>
      <div className="container">
        <SuccessfulData useJsonFetch={useJsonFetch} />
        <GettingError useJsonFetch={useJsonFetch} />
        <LoadingIndikator useJsonFetch={useJsonFetch} />
      </div>
    </>
  );
}

export default App;
