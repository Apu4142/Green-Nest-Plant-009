import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from "../assets/image.png";

const MyProfile = () => {
   const {user} = use(AuthContext)
    return (
        <div>
              <img className="w-50 rounded-full" src={`${user? user.photoURL : userIcon}`} alt="" />
        </div>
    );
};

export default MyProfile;