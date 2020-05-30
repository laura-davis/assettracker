import * as React from 'react';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import BottomNav from "./BottomNav";

export default function App() {

    return (
        <PaperProvider>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                }}/>
                <Appbar.Content title="Asset Tracking Dashboard"/>
            </Appbar.Header>
            <BottomNav/>
        </PaperProvider>
    );
}
