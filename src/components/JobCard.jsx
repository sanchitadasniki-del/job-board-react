function JobCard({job, savedJobs, setSavedJobs, setSelectedJob}){
    return (
        <div className="job-card">
            <h2 onClick={() => setSelectedJob(job)}>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button onClick={() =>{
                const alreadySaved = savedJobs.some((savedJob) => savedJob.id === job.id
            );
            if(!alreadySaved){
                setSavedJobs ([...savedJobs,job]);
            }
        }}>
            {savedJobs.some((savedJob) => savedJob.id === job.id)
            ? "Saved" : "Save Job"}
            </button>
            
        </div>
    );
}
export default JobCard;