import {useState} from "react";
function ApplyForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    function submitApplication(){
        setSubmitted(true);
        setName("");
        setEmail("");
    }
    return (
        <div clasName="container">
            <h1>Apply For Job</h1>
            <input type="text" placeholder="Enter your name"value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter your email"value={email}
            onChange={(e) =>setEmail(e.target.value)}/>
            <input type="file"/>
            <button onClick={submitApplication}>Submit Application</button>
            {submitted && (
                <p>Application submitted successfully!</p>
            )}
        </div>
    );
}
export default ApplyForm;