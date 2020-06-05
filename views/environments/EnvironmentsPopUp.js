import * as React from 'react';
import { View } from 'react-native';
import {Button, Dialog, Portal , RadioButton } from 'react-native-paper';

export default class EnvironmentsPopUp extends React.Component {
    state = {
        visible: true,
        checked: 'ukprod',
        };

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });

    render() {
        const { checked } = this.state;
        return (
            <View>
                <Button onPress={this._showDialog} icon='web'>Select Environment</Button>
                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title>Select Environment</Dialog.Title>
                        <Dialog.Actions>
                            <RadioButton
                                value="UK Production"
                                status={checked === 'ukprod' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'ukprod' }); }}
                            />
                            <RadioButton
                                value="UK Development"
                                status={checked === 'ukdev' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'ukdev' }); }}
                            />
                            <Button onPress={this._hideDialog}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        );
    }
}
