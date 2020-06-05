import * as React from 'react';
import {RadioButton, Card, List} from 'react-native-paper';

export default class SearchDropDown extends React.Component {
    state = {
        expanded: true,
        value: 'contentId'
    };

    _handlePress = () =>
        this.setState({
            expanded: !this.state.expanded
        });

    render() {
        return (
            <Card>
                <List.Accordion
                    title="Select ID Type"
                    expanded={this.state.expanded}
                    onPress={this._handlePress}>
                    <RadioButton.Group
                        onValueChange={value => this.setState({value})}
                        value={this.state.value}>
                        <RadioButton.Item label="ContentId" value="contentId"/>
                        <RadioButton.Item label="Uuid" value="uuid"/>
                        <RadioButton.Item label="UriId" value="UriId"/>
                    </RadioButton.Group>
                </List.Accordion>
            </Card>
        );
    }
}
