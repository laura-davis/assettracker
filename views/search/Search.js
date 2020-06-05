import * as React from 'react';
import {View, Text} from 'react-native';
import { Headline } from 'react-native-paper';
import SearchDropDown from "./SearchDropDown";
import SearchByIdCard from "./SearchByIdCard";
import EnvironmentsPopUp from "../environments/EnvironmentsPopUp";
import SearchOutput from "./SearchOutput";

export default function Search() {
    return (
        <View>
            <EnvironmentsPopUp/>
            <Headline>Search</Headline>
            <SearchDropDown/>
            <Text>&nbsp;</Text>
            <SearchByIdCard/>
            <Text>&nbsp;</Text>
            <SearchOutput/>
        </View>
    );
}
