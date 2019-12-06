import React from 'react';

function ProfileInfo() {
    return (
        //if always in profile page, can put it there. only turn into a component if you think you'll use more than once. 
        //could make an "InfoList" component, not hard coded for profile page. Pass data structure that can be iterated through, then sub-component ("InfoListItem) that can specify key/value pairs. Pages will act as containers, i.e. smart components, that are responsible for data manipulation. Other components, like "InfoListItem", are 'dumb' components. 
        <div>

            <div className="font-weight-light">Email address</div>
            <h5 className="profile-value mb-4">john-sanders@gmail.com</h5>
            <div className="font-weight-light">Birthday</div>
            <h5 className="profile-value mb-4">11/2/1982</h5>
            <div className="font-weight-light">Marketing emails</div>
            <h5 className="profile-value mb-4">Off</h5>

        </div>

    )
}

export default ProfileInfo;