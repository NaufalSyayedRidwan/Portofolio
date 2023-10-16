import Serviceitem from "./Servicesitem";
function Service() {
    return (
        <div className="services text-light py-5">
            <div className="container">
                <h1>Services</h1>
                <div className="row">
                    <Serviceitem
                        judul="Desain"
                        warna="merah"
                        deskripsi="Some quick example text to build on the card title and make up the bulk of the card's content."
                        
                    />
                    <Serviceitem
                        judul="Video Editing"
                        warna="hijau"
                        deskripsi="Some quick example text to build on the card title and make up the bulk of the card's content."
                        
                    />
                    <Serviceitem
                        judul="Web Development"
                        warna="biru"
                        deskripsi="Some quick example text to build on the card title and make up the bulk of the card's content."
                        
                    />
                    <Serviceitem
                        judul="Foto Editing"
                        warna="kuning"
                        deskripsi="Some quick example text to build on the card title and make up the bulk of the card's content."
                        
                    />
                </div>
            </div>
        </div>

    )
}

export default Service;