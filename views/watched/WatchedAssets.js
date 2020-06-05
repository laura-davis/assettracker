import * as React from 'react';
import {Chip, DataTable, Headline, Text} from 'react-native-paper';
import {View} from "react-native";

export default function WatchedAssets() {

    return (
        <View>
            <Headline>Watched Assets</Headline>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>ID</DataTable.Title>
                    <DataTable.Title>Status</DataTable.Title>
                    <DataTable.Title>Last Updated</DataTable.Title>
                    <DataTable.Title>Info</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>A5EK4m4kKgfnqMa4AVbNC</DataTable.Cell>
                    <DataTable.Cell>Published</DataTable.Cell>
                    <DataTable.Cell>10/05/20</DataTable.Cell>
                    <DataTable.Cell><Chip icon="information-outline" onPress={() => console.log('Pressed')}>Info</Chip></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>A5EK4m4kKg123Ma4AVbNC</DataTable.Cell>
                    <DataTable.Cell>Deleted</DataTable.Cell>
                    <DataTable.Cell>10/05/20</DataTable.Cell>
                    <DataTable.Cell><Chip icon="information"
                                          onPress={() => console.log('Pressed')}>Info</Chip></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>AD234m4kKgfnqMa4AVbNC</DataTable.Cell>
                    <DataTable.Cell>Error</DataTable.Cell>
                    <DataTable.Cell>09/05/20</DataTable.Cell>
                    <DataTable.Cell><Chip icon="information"
                                          onPress={() => console.log('Pressed')}>Info</Chip></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>512K4m4kKgfnqMa4AVbNC</DataTable.Cell>
                    <DataTable.Cell>Published</DataTable.Cell>
                    <DataTable.Cell>07/05/20</DataTable.Cell>
                    <DataTable.Cell><Chip icon="information"
                                          onPress={() => console.log('Pressed')}>Info</Chip></DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>A5EK4m4kKgfnqMa4AV555</DataTable.Cell>
                    <DataTable.Cell>Published</DataTable.Cell>
                    <DataTable.Cell>06/05/20</DataTable.Cell>
                    <DataTable.Cell><Chip icon="information"
                                          onPress={() => console.log('Pressed')}>Info</Chip></DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
}
