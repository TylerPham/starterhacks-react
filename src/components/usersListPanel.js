import React from 'react';
import { ListItem } from 'material-ui';
import { List } from 'material-ui';
import { Avatar } from 'material-ui';

class UsersListPanel extends React.Component {
  constructor(props){
    super(props);
      
    this.state = {
      hideOppAvatar: false,
      userToDisplay: null
    }
  }

  displayOppAvatar(){
    // this.setState({hideOppAvatar: !this.state.hideOppAvatar});
    this.setState({hideOppAvatar: true});
    this.setState({userToDisplay: this.data});

        
    // console.log(this)
  }

  test(index, user){
    // console.log(index);
    
  }

  render() {
    const listUsers = this.props.users.map((user, index) =>
    <ListItem 
      onClick={this.test(user)} 
      data={user} key={user.id} 
      primaryText={user.first_name + " " + user.last_name} 
      // nestedItems={[user.avatar]}
      >

    </ListItem>
  );

        return(
          <div>
            <List>
              {listUsers}
            </List>

            <Avatar size='5000' src='https://robohash.org/etestvoluptatibus.png?size=200x200&set=set1'></Avatar>
            <Avatar size='5000' src='https://robohash.org/veritatisaliquidsint.png?size=200x200&set=set1'></Avatar>
          

            </div
          >
        )

    };
};

export default UsersListPanel;