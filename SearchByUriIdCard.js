import * as React from 'react';
import {Button, Card, TextInput} from 'react-native-paper';

const SearchByUriIdCard = () => (
    <Card>
        <Card.Title title="Search by UriId"/>
        <Card.Content>
            <TextInput
                label='UriId'
                // value={this.state.text}
                style={{backgroundColor: 'transparent', paddingHorizontal: 0, margin: 8}}
                onChangeText={text => this.setState({text})}
            />
        </Card.Content>
        <Button mode="contained" style={{margin: 4}} onPress={() => console.log('Searching for ContentId')}>
            SUBMIT
        </Button>
    </Card>
);

export default SearchByUriIdCard;
