import * as React from 'react';
import {View} from 'react-native';
import { Headline } from 'react-native-paper';
import {EnvironmentsList} from "./EnvironmentsList";

export default function Environments() {
    return (
        <View>
            <Headline>Environments</Headline>
            <EnvironmentsList/>
        </View>
    );
}
