import * as React from 'react';
import {Card, Headline, ProgressBar, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, ScrollView } from 'react-native';
const SearchOutput = () => (
    <Card>
        <Headline>Results</Headline>
            <View>
                    <Text>&nbsp;</Text>
        <ProgressBar/>
                    <Text>&nbsp;</Text>
            </View>
        <ScrollView>
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
                <Avatar.Text size={50} label="4" style={{alignItems: 'center', justifyContent:'center'}} />
                <Icon name='dots-vertical' size={25}
                />
                <Text>Received from PD / PMP</Text>
                <Text>09.27am 10th May 2020</Text>
                <Icon name='dots-vertical' size={25}
                />
                <Avatar.Text size={50} label="5" style={{alignItems: 'center', justifyContent:'center'}} />
                <Text>Sent to VQ</Text>
                <Text>09.35am 10th May 2020</Text>
            </View>
        </ScrollView>

    </Card>
);

export default SearchOutput;

const customTheme = {
    colors: {
        primary: 'red'
    }
}
