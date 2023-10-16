import ButtonMe from "./buttonme";

function Aboutme() {
    return(
        <div className="section">
            <div className="row align-items-center">
                <div className="col-6 text-center">
                <img className="photoprofile"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                    <h1>Naufal Syayed Ridwan</h1>
                </div>

                <div className="col-lg-6">
                    <h1>About Me</h1>
                    <p>Seseorang pelajar SMK yang dapat berbaur dengan orang baru, b  
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi voluptatibus in deserunt dolore ab inventore,
                    nam commodi enim voluptates esse porro labore dolorem hic aliquid suscipit odit id? Ut, eos?
                    </p>
                    <ButtonMe 
                    text="Download CV" 
                    warna="danger"
                    link="https://github.com/NaufalSyayedRidwan/Tugaspkl"
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default Aboutme;