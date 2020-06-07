import * as React from 'react';
import {Button, Card, TextInput, Headline, ProgressBar, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
                <Icon name='dots-vertical' size={25}
                />
                <Text>Received by Gonzales OTT</Text>
                <Text>09.03am 10th May 2020</Text>
                <Icon name='dots-vertical' size={25}
                />
                <Avatar.Text size={50} label="2" style={{alignItems: 'center', justifyContent:'center'}} />
                <Icon name='dots-vertical' size={25}
                />
                <Text>Received by Gonzales DTH</Text>
                <Text>09.05am 10th May 2020</Text>
                <Icon name='dots-vertical' size={25}
                />
                <Avatar.Text size={50} label="3" style={{alignItems: 'center', justifyContent:'center'}} />
                <Icon name='dots-vertical' size={25}
                />
                <Text>Sent to PD / PMP</Text>
                <Text>09.10am 10th May 2020</Text>
                <Icon name='dots-vertical' size={25}
                />
            </View>

    </Card>
);

export default SearchOutput;
