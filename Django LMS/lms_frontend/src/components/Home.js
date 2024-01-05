function Home() {
  return (
    <div className="container">
        <div className="row mt-3">
            <div className="d-flex align-items-start">
                <h3 className="mb-0">Latest Courses</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <div className="card mt-4">
                    <img className="card-img-top" src="jira-icon-512x512.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Jira</h5>
                        <p className="card-text">One of the most popular project management tool for Planning, tracking, and releasing world-class software.</p>
                        <a href="#" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-4">
                    <img className="card-img-top" src="github_512_black.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">GitHub Copilot</h5>
                        <p className="card-text">Anartificial intelligence tool developed to assist users of Visual Studio Code, etc, by autocompleting code.</p>
                        <a href="#" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-4">
                    <img className="card-img-top" src="vscode_icon.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Visual Studio Code</h5>
                        <p className="card-text">A code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
                        <a href="#" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-4">
                    <img className="card-img-top" src="aml-1.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Anti-money laundering</h5>
                        <p className="card-text">Regulations intended to stop criminals from disguising illegally obtained funds as legitimate income.</p>
                        <a href="#" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
