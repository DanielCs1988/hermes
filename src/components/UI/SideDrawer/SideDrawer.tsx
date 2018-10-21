import * as React from 'react';
import {ImageStyle, StyleProp} from "react-native";
import { CachedImage } from 'react-native-cached-image';
import {Container, Content, Icon, Left, List, ListItem, Text} from "native-base";
import styles from './SideDrawer.styles';
import DrawerBg from '../../../assets/images/drawer-bg.jpg';
import DrawerLogo from '../../../assets/images/drawer-logo.png';
import {Routes} from "../../../shared/constants";
import {PlatformIcon} from "../../../shared/utils";
import {NavProp} from "../../../shared/models";

const MenuPoints = [
    {
        name: 'Events',
        route: Routes.EVENTS,
        icon: PlatformIcon('calendar')
    },
    {
        name: 'People',
        route: Routes.PEOPLE,
        icon: PlatformIcon('people')
    },
    {
        name: 'Chat',
        route: Routes.CONVERSATIONS,
        icon: PlatformIcon('chatbubbles')
    },
    {
        name: 'Logout',
        route: null,
        icon: PlatformIcon('log-out')
    }
];

type Props = NavProp & {
    token: string | null;
    onLogout: () => void;
}
class SideDrawer extends React.Component<Props, {}> {
    // componentDidUpdate() {
    //     if (!this.props.token) {
    //         this.props.navigation.navigate(Routes.AUTHENTICATION);
    //     }
    // }

    render() {
        return (
            <Container>
                <Content>
                    <CachedImage source={DrawerBg} style={styles.drawerBg as StyleProp<ImageStyle>} />
                    <CachedImage source={DrawerLogo} style={styles.drawerLogo  as StyleProp<ImageStyle>} />
                    <List
                        contentContainerStyle={styles.drawerContent}
                        dataArray={MenuPoints}
                        renderRow={item => (
                            <ListItem button onPress={() => {
                                if (item.route) {
                                    this.props.navigation.navigate(item.route);
                                } else {
                                    this.props.onLogout();
                                }
                            }}>
                                <Left>
                                    <Icon name={item.icon} active style={styles.icon} />
                                    <Text style={styles.text}>{item.name}</Text>
                                </Left>
                            </ListItem>
                        )}
                    />
                </Content>
            </Container>
        );
    }
}

export default SideDrawer;

// const mapStateToProps = ({ auth: { token } }: AppState) => ({ token });
// const mapDispatchToProps = (dispatch: Function) => ({
//     onLogout: () => dispatch(Actions.initLogout())
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);