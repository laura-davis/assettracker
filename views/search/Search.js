import * as React from 'react';
import {View, Text} from 'react-native';
import { Headline } from 'react-native-paper';
import SearchDropDown from "./SearchDropDown";
import SearchByIdCard from "./SearchByIdCard";

export default function Search() {
    return (
        <View>
            <Headline>Search</Headline>
            <SearchDropDown/>
            <Text>&nbsp;</Text>
            <SearchByIdCard/>
            <Text>&nbsp;</Text>
        </View>
    );
}
