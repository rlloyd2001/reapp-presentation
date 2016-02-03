import { React, View, Button, BackButton, Icon, Input } from 'reapp-kit';
import floppy from 'reapp-ui/assets/icons/floppy.svg';

export default class NameEntry extends React.Component {

	render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />
    const icon = 
    	<Icon file={floppy} />
		const saveButton = 
			<Button onTap={() => saveName(this)} icon={icon}>Save Name</Button>

		function saveName(self) {
			self.router().transitionTo('home');
		}

		const inputStyle = { 'margin-bottom': '10px' };

		return (
			<View {...this.props} title="Name Entry" titleLeft={backButton}>
				<p>Enter Name</p>
				<Input type="text" style={inputStyle} />
				{saveButton}
			</View>
		);
	}
}