import * as React from 'react';
import {View, Text} from 'react-native';
import { Headline } from 'react-native-paper';
import SearchByContentIdCard from "./SearchByContentIdCard";
import SearchByUriIdCard from "./SearchByUriIdCard";
import SearchByUuidCard from "./SearchByUuidCard";

export default function Search() {
    return (
        <View>
            <Headline>Search</Headline>
            <SearchByContentIdCard/>
            <Text>&nbsp;</Text>
            <Text>&nbsp;</Text>
            <SearchByUriIdCard/>
            <Text>&nbsp;</Text>
            <Text>&nbsp;</Text>
            <SearchByUuidCard/>
        </View>
    );
}
