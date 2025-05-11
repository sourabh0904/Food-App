const Profile = (props) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>This is the profile page.</p>
      <h2>Name: {props.name}</h2>
    </div>
  );
};

export default Profile;
