import * as React from 'react';
import {View, Text} from 'react-native';
import { Headline } from 'react-native-paper';
import SearchDropDown from "./SearchDropDown";
import SearchByIdCard from "./SearchByIdCard";
import SearchOutput from "./SearchOutput";

export default function Search() {
    return (
        <View>
            <Headline>Search</Headline>
            <Text>&nbsp;</Text>
            <Text>&nbsp;</Text>
            <Text>&nbsp;</Text>
            <SearchDropDown/>
            <Text>&nbsp;</Text>
            <SearchByIdCard/>
            <Text>&nbsp;</Text>
            <Text>&nbsp;</Text>
            <Text>&nbsp;</Text>
            <SearchOutput/>
        </View>
    );
}
