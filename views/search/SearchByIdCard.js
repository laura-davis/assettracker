import * as React from 'react';
import {Button, Card, TextInput} from 'react-native-paper';
import {Alert} from "react-native";

export default class SearchByIdCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contentId: ''
        }
    }

    onSubmit = () => {
        if (!this.state.contentId) {
            Alert.alert("Invalid contentId", 'Please enter a contentId')
        } else if (this.state.contentId === 'ContentId') {
            Alert.alert("Valid contentId", 'Searching...')
        }
    }

    render() {
        return (
            <Card>
                <TextInput
                    label='Enter asset ID / reference'
                    style={{backgroundColor: 'transparent', paddingHorizontal: 0, margin: 8}}
                    onChangeText={(text) => this.setState({contentId: text})}
                    value={this.state.contentId}/>
                <Button icon="camera" onPress={() => {
                    Alert.alert("Alert", 'Camera opened!')
                }}/>
                <Button mode="contained" style={{margin: 4}} onPress={this.onSubmit}>
                    SUBMIT
                </Button>
            </Card>
        )
    }
}
