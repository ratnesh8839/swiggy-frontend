
import UserClass from "./User";

// create a about page
const About = () => {
  return (
    <div>
      {/* create profile information */}
        <h1>About</h1>
        {/* <User name={"Ratnesh Shrivastava"}/> */}
        <UserClass name={"Ratnesh Shrivastava"}/>
        <p>This is a simple food delivery app</p>

    </div>
  )
}

export default About