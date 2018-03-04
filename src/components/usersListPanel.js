import React from 'react';
import { ListItem } from 'material-ui';
import { List } from 'material-ui';
import Opponent from './Opponent';

class UsersListPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideOpponent: false,
    }
  }

  displayUser(){
    console.log(this);
    console.log(this.data)

  }

  render() {
    const listUsers = this.props.users.map((user) =>
    <ListItem onClick={this.displayUser} data={user} key={user.id} primaryText={user.first_name + " " + user.last_name} ></ListItem>
  );

        return(
          <div>
            <List>
              {listUsers}
            </List>

            {
              this.state.hideOpponent
              ? <h1>helloee</h1>
              : null
            }

            <Opponent></Opponent>
          </div>
        )

    };
};

export default UsersListPanel;