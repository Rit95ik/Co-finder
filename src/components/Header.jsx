function Navigation(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
      <img style={{width:"200px" ,marginLeft:"2rem"}} src="./img/co-finder.png" alt="coFinder"/>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto nav-text">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Find a co-founder 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Feed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Investers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item" style={{marginLeft :"2rem"}}>
            <a id="button" className="nav-link " href="#">
              Sign up
            </a>
          </li>
          <li className="nav-item">
            <a id="button" className="nav-link" href="#">
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
} 

export default Navigation;