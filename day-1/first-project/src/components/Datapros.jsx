const styleObject={
    border:"1px solid red",
    padding:"13px",
    marginTop:"6px"
}

function Datapros(props) {
  return (
    <div style={styleObject}> 
        <h1>Hello Student</h1>
        <h2>Name:{props.name}</h2>
        <p>Age:{props.age}</p>
    </div>
  )
}

export default Datapros