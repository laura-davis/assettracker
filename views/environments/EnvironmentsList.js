import * as React from 'react';
import {List} from 'react-native-paper';
import {Flag} from 'react-native-svg-flagkit'
import {Text, Alert, View} from 'react-native';

export class EnvironmentsList extends React.Component {

    render() {
        return (
            <View>
                <List.Section>
                    <List.Item
                        onPress={() => {
                            Alert.alert("Environment", 'UK Production selected')
                        }}
                        title="UK Production"
                        left={props => <Flag id={"GB"} size={0.25}/>}
                    />
                    <Text>&nbsp;</Text>
                    <List.Item
                        onPress={() => {
                            Alert.alert("Environment", 'UK Development selected')
                        }}
                        title="UK Development"
                        left={props => <Flag id={"GB"} size={0.25}/>}
                    />
                    <Text>&nbsp;</Text>
                    <List.Item
                        onPress={() => {
                            Alert.alert("Environment", 'Spain Production selected')}}
                        title="Spain Production"
                        left={props => <Flag id={"ES"} size={0.25}/>}
                    />
                    <Text>&nbsp;</Text>
                    <List.Item
                        onPress={() => {
                            Alert.alert("Environment", 'Spain Development selected')}}
                        title="Spain Development"
                        left={props => <Flag id={"ES"} size={0.25}/>}
                    />
                    <Text>&nbsp;</Text>
                    <List.Item
                        onPress={() => {
                            Alert.alert("Environment", 'Germany Production selected')}}
                        title="Germany Production"
                        left={props => <Flag id={"DE"} size={0.25}/>}
                    />
                    <Text>&nbsp;</Text>
                    <List.Item
                        onPress={() => {
                            Alert.alert("Environment", 'Germany Development selected')}}
                        title="Germany Development"
                        left={props => <Flag id={"DE"} size={0.25}/>}
                    />
                    <Text>&nbsp;</Text>
                    <List.Item
                        onPress={() => {
                            Alert.alert("Environment", 'Italy Production selected')}}
                        title="Italy Production"
                        left={props => <Flag id={"IT"} size={0.25}/>}
                    />
                    <Text>&nbsp;</Text>
                    <List.Item
                        onPress={() => {
                            Alert.alert("Environment", 'Italy Development selected')}}
                        title="Italy Development"
                        left={props => <Flag id={"IT"} size={0.25}/>}
                    />
                </List.Section>
            </View>
        )
    }
}
