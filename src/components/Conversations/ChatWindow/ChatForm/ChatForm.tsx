import * as React from 'react';
import {Button, Footer, FooterTab, Icon, Input, Item} from "native-base";
import {PlatformIcon} from "../../../../shared/utils";

const initialState = {
    message: {
        value: '',
        valid: false
    }
};
type State = Readonly<typeof initialState>;
type Props = {
    currentUserId: string;
    targetUserId: string;
};
class ChatForm extends React.Component<Props, State> {
    readonly state = initialState;

    changeHandler = (newMessage) => {
        this.setState({
            message: {
                value: newMessage,
                valid: newMessage.trim().length > 0
            }
        });
    };

    sendMessageHandler = () => {
        alert(this.state.message.value);
        this.setState(initialState);
    };

    render() {
        return (
            <Footer>
                <FooterTab style={{
                    backgroundColor: '#eee',
                    borderTopWidth: 2,
                    borderTopColor: '#aaa'
                }}>
                    <Item rounded style={{
                        width: '70%',
                        height: '80%',
                        marginVertical: 5,
                        marginLeft: '10%',
                        paddingHorizontal: 5,
                        backgroundColor: 'white'
                    }}>
                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.message.value}
                            onChangeText={this.changeHandler}
                        />
                    </Item>
                    <Button onPress={this.sendMessageHandler}>
                        <Icon name={PlatformIcon('send')} />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default ChatForm;