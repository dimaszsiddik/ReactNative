// import React, { Component } from 'react';
// import { View, Text, Image, ScrollView } from 'react-native';
// import { Spinner, Container, Content } from 'native-base';
// import HeaderComponent from '../HeaderComponent';



// export default class TableComponent extends Component {
//     static navigationOptions = {
//         drawerLabel: 'Tables',

//     }




// }

import React, { Component } from 'react';
import {
    FlatList, View, Image, TouchableHighlight
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { backgrounContentColor, apiUrl } from '../config/';
// import { Spinner, Container, Content, ScrollView } from 'native-base';
import { Info } from '../../screenNames';
import HeaderComponent from '../HeaderComponent';

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Tables';
        let drawerIcon = () => (
            <Image
                source={require('../../Icons/dinner-table.png')}
                style={{ width: 26, height: 26 }}
            />
        );
        return { drawerLabel, drawerIcon };
    }
    constructor(props) {
        super(props);
        this.state = {
            tables: []
        }

    }
    componentDidMount() {
        return fetch(apiUrl + 'tables')
            //    console.warn(apiUrl + 'tables' )
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({

                    tables: responseJson,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        const { tables } = this.state;

        return (


            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent {...this.props} />
                <Content>


                    {
                        tables.map(table => {
                            return (
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Image source={require('../../Icons/picnic.png')} />
                                            <Body>
                                                <Text style={{fontWeight:'bold', fontSize:20}}>{table.code}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                    <Text >{table.description}</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Button transparent>
                                                <Icon active name="thumbs-up" />
                                                <Text>12 Likes</Text>
                                            </Button>
                                        </Left>
                                        <Body>
                                            <Button transparent>
                                                <Icon active name="chatbubbles" />
                                                <Text>4 Comments</Text>
                                            </Button>
                                        </Body>
                                        <Right>
                                            <Text>11h ago</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                            )
                        })
                    }

                </Content>
            </Container>

        );
    }
}