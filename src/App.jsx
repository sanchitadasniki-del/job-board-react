import ApplyForm from "./pages/ApplyForm";
import JobDetails from "./pages/JobDetails";
import Saved from "./pages/Saved";
import "./App.css";
import {useState} from "react";
import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import jobs from "./data/jobs";
function App(){
  const [search,setSearch] = useState("");
  const [page, setPage] = useState("home");
  const [savedJobs,setSavedJobs] = useState([]);
  const [selectedJob,setSelectedJob] = useState(null);
  const [applyPage, setApplyPage] = useState(false);
  const filteredJobs = jobs.filter((job) =>
  job.title.toLowerCase().includes(search.toLowerCase())
);
const saveJob = (job) => {
  setSavedJobs([...savedJobs,job]);
};
function goBack (){
  setSelectedJob(null);
}
  return (
    <div>
      <Navbar setPage={setPage}/>
      <input type="text" placeholder="Search job..."
      value={search} onChange={(e) => setSearch(e.target.value)}/>
      <h1>Find Your Dream Job</h1>
      {applyPage ? (
        <ApplyForm/>
       ): selectedJob ? (
        <JobDetails job={selectedJob} onApply={() => setApplyPage(true)}
        goBack={goBack}/>
       ) :
       page === "home" ? (
        filteredJobs.map((job) => (
          <JobCard key={job.id}
          job={job}
          savedJobs={savedJobs}
          setSavedJobs={setSavedJobs}
          setSelectedJob={setSelectedJob}/>
        ))
      ) : (
        <Saved savedJobs={savedJobs}/>
      )}
    </div>
  );
}
export default App;