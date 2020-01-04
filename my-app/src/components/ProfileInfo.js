import React from 'react';

class ProfileInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: '', first: '', last: '', email: '', marketing_emails: '', birthday: '' }
            ],
        }
    }

    pullItems = () => {
        const url = 'http://localhost:3010/profile'
        fetch(url).then(response => response.json()).then(items => {
            this.setState({ items })
            }
        )
    }

    componentDidMount() {
        this.pullItems()
    }

    render() {
        let userIndex = 0
        
        //format marketing emails boolean
        let marketingEmails = ''
        if (this.state.items[userIndex].marketing_emails) {
            marketingEmails = "On"
        }
        else {
            marketingEmails = "Off"
        }

        //format birthday
        let unformattedBirthday = new Date(this.state.items[userIndex].birthday)
        const options = {month: 'short', day: 'numeric', year: 'numeric'}
        let formattedBirthday = unformattedBirthday.toLocaleDateString('en-US', options)

    return (
        //if always in profile page, can put it there. only turn into a component if you think you'll use more than once. 
        //could make an "InfoList" component, not hard coded for profile page. Pass data structure that can be iterated through, then sub-component ("InfoListItem) that can specify key/value pairs. Pages will act as containers, i.e. smart components, that are responsible for data manipulation. Other components, like "InfoListItem", are 'dumb' components. 
        <div>
            <h1 className="mb-5">{this.state.items[userIndex].first} {this.state.items[userIndex].last}</h1>

            <div className="font-weight-light">Email address</div>
            <h5 className="profile-value mb-4">{this.state.items[userIndex].email}</h5>
            <div className="font-weight-light">Birthday</div>
            <h5 className="profile-value mb-4">{formattedBirthday}</h5>
            <div className="font-weight-light">Marketing emails</div>
            <h5 className="profile-value mb-4">{marketingEmails}</h5>

        </div>

    )
}
}

export default ProfileInfo;