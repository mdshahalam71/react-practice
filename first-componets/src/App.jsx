import "./App.css";
import Profile from "./componets/Profile";


function App() {
   
  return (
    <>
      <h1 className="text-9xl">Hello Bangladesh</h1>
      <div className="flex mt-20 gap-1 m-auto">
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
      <button className="bg-amber-400 rounded-md py-2 px-4 cursor-pointer" onClick={function handelarClikc(){alert('hello Bangladesh')}}>Click me</button><br />
      <button className="bg-amber-400 rounded-md py-2 px-4 cursor-pointer" onClick={()=>{alert("Arrow Function call")}}>Clicke Me 2</button>
    </>
  );
}

export default App;
