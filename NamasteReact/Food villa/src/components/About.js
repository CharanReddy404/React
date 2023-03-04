import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className='px-24 py-24'>
      <h1>About Us Page</h1>
      <p>this is about us page</p>
      <Outlet />
    </div>
  );
};

export default About;
