import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from './Home';
import Search from "./Search.js";
import Notifications from './Notifications';

export default class BottomNav extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'home', title: 'Home', icon: 'home'},
            {key: 'search', title: 'Search', icon: 'magnify'},
            {key: 'notifications', title: 'Notifications', icon: 'bell-ring'},
        ],
    };

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={index => this.setState({index})}
                renderScene={BottomNavigation.SceneMap({
                    home: Home,
                    search: Search,
                    notifications: Notifications
                })}/>
        );
    }
}
