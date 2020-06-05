import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Environments from '../environments/Environments';
import Search from "../search/Search.js";
import WatchedAssets from '../watched/WatchedAssets';

export default class BottomNav extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'home', title: 'Environments', icon: 'home'},
            {key: 'search', title: 'Search', icon: 'magnify'},
            {key: 'watched', title: 'Watched Assets', icon: 'alarm-light'},
        ],
    };

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={index => this.setState({index})}
                renderScene={BottomNavigation.SceneMap({
                    home: Environments,
                    search: Search,
                    watched: WatchedAssets
                })}/>
        );
    }
}
