import { React, View, BackButton } from 'reapp-kit';
import List from 'reapp-ui/components/List';
import Title from 'reapp-ui/components/Title';
import { Link } from 'react-router';
import Icon from 'reapp-ui/components/Icon';
import Modal from 'reapp-ui/components/Modal';

export default class Sub extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <View {...this.props} title="Lists" titleLeft={backButton}>
        <p>Lists</p>
        <Title>Basic List</Title>
        <List wrap>
          {['Apple', 'Orange', 'Pear']}
        </List>

        <Title>Lists Links</Title>
        <List type="inset" wrap>
          <a href='/sub'>To Sub Slow</a>
          <a onClick={() => this.router().transitionTo('sub')}>To Sub Fast</a>
          <Link to="sub">Sub</Link>
          <Link to="nameEntry">Name Entry</Link>
        </List>
      </View>
    );
  }
}
