import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

// name: "Liza",
// city: "New York",
// bio: "I made this!",
// color: "firebrick",
// links: {
//   github: "https://github.com/liza",
//   linkedin: "https://www.linkedin.com/in/liza/",

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio} linkedin={user.links.linkedin} github={user.links.github}/>
    </div>
  );
}

export default App;
