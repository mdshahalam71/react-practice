import { getImageUrl } from "../utility/utilis";

function Avatar({person,size}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile() {
  return (
    <div>
         <Avatar
         size={100}
         person={{
            name:'Katsuko Saruhashi',
            imageId:'Yfe0qp2'
         }}
     />
      <Avatar
         size={80}
         person={{
            name:'Katsuko Saruhashi',
            imageId:'Yfe0qp2'
         }}
     />
      <Avatar
         size={50}
         person={{
            name:'Katsuko Saruhashi',
            imageId:'Yfe0qp2'
         }}
     />
    </div>
  );
}

export default Profile;
