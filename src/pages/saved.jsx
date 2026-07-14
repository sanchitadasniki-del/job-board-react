function Saved({savedJobs}){
    return (
        <div className="conainer">
            <h1>Saved Jobs</h1>
                {savedJobs.length === 0 ? (
                    <p>No saved jobs yet</p>
                ):
                (savedJobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                    </div>
                ))
            )}
        </div>
    )
}
export default Saved;