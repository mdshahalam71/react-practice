import BioData from "./components/BioData";

const BioDataInfo = [
  {
    name: "shah",
    email: "shah@gmail.com",
    phone: "3945348954",
    skills: ["js", "css", "react", "node", "express"],
    interests: ["cricket", "chess", "Football", "kabadi"],
  },
  {
    name: "Alam",
    email: "alam@gmail.com",
    phone: "039448954",
    skills: ["js", "css", "react"],
    interests: ["cricket", "chess"],
  },
  {
    name: "rakib",
    email: "rakib@gmail.com",
    phone: "39453489545444",
    skills: ["js", "css", "react", "node"],
    interests: ["cricket", "chess", "kabadi"],
  },
  {
    name: "Habibullah",
    email: "habibullah@gmail.com",
    phone: "39453489545444",
    skills: ["js", "css", "react", "node"],
    interests: ["cricket", "chess", "kabadi"],
  },
];

function App() {
  return (
    <>
     <div className="main">
       {BioDataInfo.map((bio) => (
        <BioData
          name= {bio.name}
          email={bio.email}
          phone={bio.phone}
          skills={bio.skills}
          interests={bio.interests}
        />
      ))}
     </div>
    </>
  );
}

export default App;
