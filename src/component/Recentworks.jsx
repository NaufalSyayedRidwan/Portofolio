function Recentworks() {

    return (
        <div className="Recent">
            <div className="container">
                <h1>RecentWork</h1>
                <div className="row mt-5">
                    <div className="bukugambar col-4 mt-4">
                        <img class="img-fluid" src="../public/Buku-tamu.png" />
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-dark text-white">
                                <p>Project</p>
                                <a href="https://github.com/NaufalSyayedRidwan/Tugaspkl" target="_blank" rel="noopener">Buku Tamu</a>
                            </li>
                        </ul>
                    </div>

                    <div className="bukugambar col-4 mt-4">
                        <img class="img-fluid" src="../public/admin.png" />
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-dark text-white">
                                <p>Project</p>
                                <a href="https://github.com/NaufalSyayedRidwan/Tugaspkl" target="_blank" rel="noopener">Tampilan admin</a>
                            </li>
                        </ul>
                    </div>

                    <div className="bukugambar col-4 mt-4">
                        <img class="img-fluid" src="../public/portal-berita.png" />
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-dark text-white">
                                <p>Project</p>
                                <a href="https://github.com/NaufalSyayedRidwan/Tugaspkl" target="_blank" rel="noopener">Portal berita</a>
                            </li>
                        </ul>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Recentworks;