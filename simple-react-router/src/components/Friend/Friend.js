import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
  const { name, email, address, id } = props.friend;
  const history = useHistory();
  const handleVisitFriend = () => {
    history.push(`/friend/${id}`)
  }
    return (
      <div className="friend">
        <h2>{name}</h2>
        <p>Email : {email}</p>
        <p>Name : {address.city}</p>
        {/* Step 1 */}
        <Link to={`/friend/${id}`}>Visit Me</Link>
        <br />
        {/* Step 2 */}
        <Link to={`/friend/${id}`}>
          <button>Visit Me 2</button>
        </Link>
        <br />
        {/* Step 3 */}
        <button onClick={handleVisitFriend}>Visit Me 3</button>
        
      </div>
    );
};

export default Friend;