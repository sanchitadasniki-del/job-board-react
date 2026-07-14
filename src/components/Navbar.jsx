function Navbar({setPage}){
    return (
        <nav className="navbar">
            <h2>JobFinder</h2>
            <div>
                <a onClick={() => { setPage("home");window.location.reload();}}>Home</a>
                <a>Jobs</a>
                <a onClick={() => setPage("saved")}>Saved</a>
            </div>
        </nav>
    )
}
export default Navbar;