import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class Camera extends Component {
    state = {
        text: []
    }

    textRecognized = ({ text }) => {
        text.forEach(text => console.log(text.data))
        this.setState({ text })
    }

    renderText = () => (
        <View>{this.state.text.map(this.renderText)}</View>
    )

    renderText = ({ data }) =>
        Alert.alert(
            'Text scanned',
            data,
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                    style: 'cancel'
                }
            ],
            { cancelable: false }
        )

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref
                    }}
                    style={styles.scanner}
                    onTextRecognized={this.textRecognized}>
                    {this.renderText}
                </RNCamera>
                { <RNCamera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
        /> }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    scanner: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
