import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function NavBar() {
   return (

<nav class="navbar navbar-light navbar-expand-lg navbar-light bg-light" id="navbarId">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Velas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Esencias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Jabones</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    //     <div className="navBar">
//       <header className="nav-header" id="navBar">
//         <a className="btn btn-btn navBtn" href="#">velas</a>
//         <a className="navBtn" href="#">escencias</a>
//         <a className="navBtn" href="#">aceites</a>
//       </header>
//     </div>  
  );
}

export default NavBar;
