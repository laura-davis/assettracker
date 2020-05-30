import * as React from 'react';
import {View} from 'react-native';
import { Headline } from 'react-native-paper';
import SearchByContentIdCard from "./SearchByContentIdCard";
import SearchByUriIdCard from "./SearchByUriIdCard";
import SearchByUuidCard from "./SearchByUuidCard";

export default function Search() {
    return (
        <View>
            <Headline>Search</Headline>
            <SearchByContentIdCard/>
            <SearchByUriIdCard/>
            <SearchByUuidCard/>
        </View>
    );
}
