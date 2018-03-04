import React from 'react';


class Avatar extends React.Component {

    constructor(props){
        super(props);
        // console.log("props: " + props);
        // var user = this.props.users[0];
    }

    render(){
        // console.log(this.props);
        // console.log(this.state);

        return(
            <div>
            <h1>{this.props.user.first_name}</h1>

                <img src={this.props.user.Avatar}></img>
            </div>
        );
    };
};

export default Avatar;