import * as React from 'react';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import BottomNav from "./views/navigation/BottomNav";

export default function App() {

    return (
        <PaperProvider>
            <Appbar.Header>
                <Appbar.Content title="Gonzales Asset Tracker"/>
            </Appbar.Header>
            <BottomNav/>
        </PaperProvider>
    );
}
