import { _ } from 'react-suite/build/modules/i18n/Translator';
import Button from 'react-suite/build/components/ui/Button';
import * as React from 'react';
import MessageCenter from 'react-suite/build/components/ui/MessageCenter';
import { StyleSheet, ViewStyle } from 'react-native';
import { Message } from 'react-suite/build/components/ui/MessageItem';
import Screen from 'react-suite/build/modules/listener/Screen';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
import Container from 'react-suite/build/components/ui/Container';
import Text from 'react-suite/build/components/ui/Text';
import Title from 'react-suite/build/components/ui/Title';
import ViewSpacer from 'react-suite/build/components/ui/ViewSpacer';
import PropertiesContainer from '../../ui/PropertiesContainer';
import MethodsContainer from '../../ui/MethodsContainer';
import SamplesContainer from '../../ui/SamplesContainer';
import ComponentContainer from '../../ui/ComponentContainer';
import Hightlight from '../../ui/Hightlight';
import Code from '../../ui/Code';

export interface Props {}

export interface State {
  value: string;
}

export default class MessageCenterScene extends React.Component<Props, State> {
  state = {
    value: ''
  };

  refs: {
    [string: string]: any;
    center: MessageCenter;
  };

  async componentDidMount() {
    //Screen.init();
    // await this.show();
    // await this.show({ isLoading: true });
    // await this.show({ isLoading: true, autoDismiss: 1 });
    // await this.show({ isLoading: true, autoDismiss: 2 });
    // await this.show({ isLoading: true, autoDismiss: 3 });
  }

  componentWillUnmount() {
    //Screen.destroy();
  }

  show(options?: Message) {
    this.refs.center.show({
      title: _('Example title'),
      message: _('Example text for message'),
      icon: 'motorcycle',
      autoDismiss: 2,
      type: 'success'
    });
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('MessageCenter')} />
        <Container>

          <Text>
            {_('Message Center component')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              {_('Custom component')}.
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Button onPress={this.show.bind(this)} title={_('Show message')} />
            <Code>
              {`
componentDidMount(){
  //call this just once in your app
  Screen.init();
}

componentWillUnmount(){
  //call this just once in your app
  Screen.destroy();
}

show(){
  this.refs.center.show({
            title: 'Example title',
            message: 'Example text for message',
            icon: 'motorcycle',
            type: 'primary',
            autoDismiss: 2,

  });
}

render(){
  return (
  <View style={{flex:1}}>
    <Button onPress={this.show.bind(this)} title={'Show message'} />
    <MessageCenter ref='center'/>
  </View>
  )
}
`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface MessageCenterProps {
    topOffset?: number;
}

interface Message extends AlertMessageProps {
    id?: string;
    title?: string;
    icon?: string;
    message?: string;
    isLoading?: boolean;
    autoDismiss?: number;
    type?: 'default' | 'primary' | 'danger' | 'warning' | 'info' | 'success';

}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`show(params: Message): Promise<string>;
remove(id: string): void;
onHideItem(id: string): void;
render(): JSX.Element;`}
            </Code>
          </MethodsContainer>

        </Container>
        <MessageCenter ref='center' />

      </SceneContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1
  } as ViewStyle
});
