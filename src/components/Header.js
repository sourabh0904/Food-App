import { useState } from "react";
import { Link } from "react-router-dom";
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAACUCAMAAAAeaLPCAAAAbFBMVEXx8fEAAAD////4+PiEhIT09PTk5OSioqLu7u78/PxmZmZgYGDn5+fY2NhxcXHJyckwMDC8vLycnJxSUlIlJSXS0tLDw8Pe3t4/Pz99fX1bW1tNTU06OjoXFxe0tLSLi4uTk5MeHh4NDQ1GRkZERfMVAAAED0lEQVR4nO2Z25aqOhBFoUKRxA43ERFtEfX///EgoidBYD+BY++x5lub9MjMhUol8TwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD87Yg5+FGDhaae/pf330O0YF5TfhtMUm1DZlZRXaV+xynIQuUJU/njpBtZGLWevzpOiPj+OTCaI3lyf43rUlAZn6f+61ploVhJX/1MWZwyraPt72dBLg0puZvstH+sjfiufF4IXZ/GyzYJif1t2t7/SVaxn5K/R0zV5NpIay2KGXl/J+l78mmoxfTX0LJlkcyV+4H+mvyeVDzr5kvBcrZCs3zUGZcPyNvOu7f90+FmrvxaLy3Po6Hy14hkJpr0lZTOZisdosWH/vKzeXPom5XMwwm55fehXEDiWSvt+Iw+zfLhnt9o+RoyvR94tvsOc+H2KC0o6+KReeYSaj+cxXLFXEHI14iRszcdSuosBGWp0yWtu3ph7yiocNfRZZ29ypY/17q0Fe7R24Eye3EcSwps+TZjK53FdVtf/h6RHWp2taVAF6vkmlHiynuDDz1az76X3yiyF+/RjtesbDcpvIE8q8CpsMJO5crHpA7/t39zBYSdDl+U3rnynqjtnCJeI0lw5AOKrO/16kZrzmy3kPKhfGQnc4e15W9bSqygslOufGSvqJDigTyHdjxNV5eXrrznytuBKC8/5dXmq/LzI+/Ij4y8+aq831BhyxtX3k6Ef0LaDOXL41flKyqtD/bsHoqcPDg2dBjIi8TenI+ry8da2/tk4AiI3CpqPO0P5Z0k/7J4nH9vQn3DR0P2ur3b6ZV7+KtFOJB3g42fLb3DivC1qvUzK/hNqLYNrCMRs72iXxUtee2eYdTCaSV7p5cd9aPW7qm2wU7qV9rIzuYfq+cUhe9xoK1zZj8tvWoe7TfdLZHgvs3KkHOAPQdMuk33qXR+bhMH06VhfT5PFMbuiWTpVaO7NDEvBYt3RnNLhJMTtwRZFNWD09XJo+bpmDzImuFZ626WXTUs+3m+x1YYqTzxx/N360zhxKXUq8Ky7mKfjjab6DAfLbCIibdzt2btLrCovIg+TtVP7sTJyC2lTW5EMVvlsPBJRBwmGq50m/tOXvZ13SuEN3ul5hfLLhqavBR7TPjwBmHoTlO39E/KpcMkT4z8vptwHU0ui1hpN+QPuG3U4qdXNmOPBGf52pPMZfR7vkuhzZx7Lr2Ft9bOXtUfUSWt35s6c9J86OdNQSKZuaY8ymidpxHmcvCCUBX2bYHwijq+Wj2rspKnZuTZtX251qvOI7dRkYyfMueNjIa5VFtuimx7CYJGZtHjuYxNU429v11klhi14nva0+/9VqnHB61/1+RX6R/ePgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCv8B+5aDVh+FUHLgAAAABJRU5ErkJggg=="
    />
  </a>
);

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>contact</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      {isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
