import * as React from 'react';
import {Button, Card, TextInput} from 'react-native-paper';

const SearchByIdCard = () => (
    <Card>
            <TextInput
                label='Enter asset ID / reference'
                // value={this.state.text}
                style={{backgroundColor: 'transparent', paddingHorizontal: 0, margin: 8}}
                onChangeText={text => this.setState({text})}
            />
        <Button mode="contained" style={{margin: 4}} onPress={() => console.log('Searching...')}>
            SUBMIT
        </Button>
    </Card>
);

export default SearchByIdCard;
