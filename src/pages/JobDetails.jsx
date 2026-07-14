function JobDetails({job, onApply, goBack}) {
    return (
        <div className="container">
            <div className="job-card">
                <h1>{job.title}</h1>
                <h3>{job.company}</h3>
                <p>Location:{job.location}</p>
                <h2>Job Description</h2>
                <p>
                We are looking for a passionate developer who has 
                good knowledge of web development.The candidate should be 
                familiar with React,JavaScript and modern frontend technologies.
                </p>
                <h2>Skilled Required</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                </ul>
                <button onClick={onApply}>Apply Now</button>
                <button onClick={goBack}>Back to Jobs</button>
            </div>

        </div>
    );
}
export default JobDetails;