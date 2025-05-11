import { Navigate, Outlet, useNavigate } from "react-router-dom";
const About = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/about/profile");
  };
  return (
    <div>
      <h1>About Us</h1>
      <button onClick={handleClick}>Profile Page</button>
      <Outlet />
    </div>
  );
};

export default About;
