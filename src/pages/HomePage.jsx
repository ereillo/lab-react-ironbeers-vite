import { NavLink } from "react-router-dom";

function HomePage() {
  const checkActiveUrl = (info) => {
    // console.log(info)

    // debe retornar el valor que tendra esa className o style
    if (info.isActive === true) {
      return "nav-active";
    } else {
      return "nav-inactive";
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "7px"}}>
      <img src="../src/assets/beers.png" alt="" />
      <NavLink className={checkActiveUrl} to="/beers" style={{marginLeft: "75px", marginTop: "10px", fontSize: "50px"}}>
        All Beers
      </NavLink>
      <p style={{fontSize: "20px", marginLeft: "75px"}}>Aquí todas nuestras ricas cerves cerves cerves</p>

      <br></br>
      <img src="../src/assets/new-beer.png" alt="" />
      <NavLink className={checkActiveUrl} end={true} to="/random-beer" style={{marginLeft: "75px", marginTop: "10px", fontSize: "50px"}}>
        Random Beer
      </NavLink>
      <p style={{fontSize: "20px", marginLeft: "75px"}}>Deja que nuestro maravilloso algoritmo escoja una cervecita random para ti</p>

      <br></br>
      <img src="src/assets/random-beer.png" alt="" />
      <NavLink className={checkActiveUrl} end={true} to="/new-beer" style={{marginLeft: "75px", marginTop: "10px", fontSize: "50px"}}>
        New Beer
      </NavLink>
      <p style={{fontSize: "20px", marginLeft: "75px"}}>Descubrenos tu mal gusto añadiendo una nueva cerveza a nuestro catálogo</p>

    </div>
  );
}

export default HomePage;
