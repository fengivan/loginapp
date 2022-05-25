import BackgroundImage from '../../assets/images/about.jpeg'


const About = () => {
  return <h1 style = {aboutstyle}>
    <div>About us: just a test to see if it works</div>
    
    <br/>
    Summary of project goals and features 

  </h1>;
};

export default About;

const aboutstyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}