import * as React from 'react';
import {Button, Card, TextInput, Headline, ProgressBar, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons';
import { View, Text } from 'react-native';

const SearchOutput = () => (
    <Card>
        <Headline>Results</Headline>
            <View>
                    <Text>&nbsp;</Text>
        <ProgressBar/>
                    <Text>&nbsp;</Text>

            </View>

            <View style={{justifyContent: "center", alignItems: "center"}}>
        <Avatar.Text size={50} label="1" style={{alignItems: 'center', justifyContent:'center'}} />
</View>
        </Card>
);

export default SearchOutput;
