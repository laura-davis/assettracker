import * as React from 'react';
import { List} from 'react-native-paper';
import { Flag } from 'react-native-svg-flagkit'
import {Text} from "react-native";


const EnvironmentsList = () => (
    <List.Section>
    <List.Item
        title="UK Production"
        left={props => <Flag id={"GB"} size={0.25}/>}
    />
        <Text>&nbsp;</Text>
        <List.Item
            title="UK Development   "
            left={props => <Flag id={"GB"} size={0.25}/>}
        />
        <Text>&nbsp;</Text>
        <List.Item
            title="Spain Production"
            left={props => <Flag id={"ES"} size={0.25}/>}
        />
        <Text>&nbsp;</Text>
        <List.Item
            title="Spain Development"
            left={props => <Flag id={"ES"} size={0.25}/>}
        />
        <Text>&nbsp;</Text>
        <List.Item
            title="Germany Production"
            left={props => <Flag id={"DE"} size={0.25}/>}
        />
        <Text>&nbsp;</Text>
        <List.Item
            title="Germany Development"
            left={props => <Flag id={"DE"} size={0.25}/>}
        />
        <Text>&nbsp;</Text>
        <List.Item
            title="Italy Production"
            left={props => <Flag id={"IT"} size={0.25}/>}
        />
        <Text>&nbsp;</Text>
        <List.Item
            title="Italy Development"
            left={props => <Flag id={"IT"} size={0.25}/>}
        />
    </List.Section>
);

export default EnvironmentsList;
