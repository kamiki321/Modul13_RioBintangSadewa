import './title.css';

function Title() {
    return(
        <header class="header">
            <script src="https://kit.fontawesome.com/bb9d21d155.js" crossorigin="anonymous"></script>
            <div class="header-1">
                <a href=" " class="logo"><i class="fa-solid fa-book">Netlab Bookstore</i></a>
                <p>Toko Buku Paling Lengkap!</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">HOT!</a></li>
                    <li><a href="#">Main menu</a></li>
                </ul>
            </nav> 
        </header>
    );
}

export default Title;