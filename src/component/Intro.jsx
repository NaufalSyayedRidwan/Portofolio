import ButtonMe from "./buttonme";
function Intro() {
    return (
        <div className="intro text-light">
            <div className="container text-center">
                
                <img className="photoprofile"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />

                <h1>Naufal Syayed Ridwan</h1>
                <p>Pelajar Sekolah Menengah Kejuruan (SMK) </p>

                <a href="https://www.instagram.com/naufalsydr/" target="_blank" className="sosmed">
                    <i class="bi bi-instagram"></i>
                </a>

                <a href="https://www.facebook.com/naufal.s.ridwan.5" target="_blank" className="sosmed">
                    <i class="bi bi-facebook"></i>
                </a>

                <a href="https://github.com/NaufalSyayedRidwan/Tugaspkl" target="_blank" className="sosmed">
                    <i class="bi bi-github"></i>
                </a>

                <a href="" target="_blank" className="sosmed">
                    <i class="bi bi-whatsapp"></i>
                </a>

                <div className="row">
                    <div className="col">
                        <ButtonMe
                        text="About Me"
                        warna="primary"
                        link="."/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Intro;