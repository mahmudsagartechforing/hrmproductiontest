import React from 'react';
import ProfileActivity from '../ProfileActivity/ProfileActivity';

const ProfileInfo = () => {
    return (
        <div className="tab-pane active show" id="profile">
        <h5 className="mb-3">User Profile</h5>
        <div className="row">
            <div className="col-md-6">
                <h6>About</h6>
                <p>
                    Web Designer, UI/UX Engineer
                </p>
                <h6>Hobbies</h6>
                <p>
                    Indie music, skiing and hiking. I love the great outdoors.
                </p>
            </div>
            <ProfileActivity></ProfileActivity>
        </div>
        
    </div>
    );
};

export default ProfileInfo;