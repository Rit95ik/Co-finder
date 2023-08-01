function Content() {
    return (
        <section class="hero">
        <div class="container" >
          <div class="row">
            <div class="col-lg-6" className="hero-textbox">
                <h1 className="Main-Heading">Find a co-founder <img className="favicon" src="./img/rocket.png" alt="" /></h1>
                <p className="hero-para">Unlock endless possibilities with the right co-founder by your side, and conquer the business world together.</p>
                <a href="#" class="btn btn-primary">Free Sign-Up</a>
            <div class = "row hero-textbox2">
            <div >
                <h5 >COFOUNDER HUB<img className="favicon2" src="./img/shared.png" alt="" /></h5>
                <p>Find your perfect partner based on interests, skills and location.</p>
              </div>
              <div>
                 <h5 >GET FUNDED <img className="favicon" src="./img/money.png" alt="" /></h5>
                <p>Learn how to pitch and find investors to fund your Startup.</p>
               </div>
            </div>
              
            </div>
            <div>
              {/* <img className="hero-img" src="./img/33251173_m024t0247_a_banner_05oct22-removebg.png" alt="teamwork"/> */}
              <img className="hero-img" src="./video/bg.gif" alt="" />
            </div>
          </div>
          
    
          
        </div>
      </section>
    );
}

export default Content;