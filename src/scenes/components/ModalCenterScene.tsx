import { _ } from 'react-suite/build/modules/i18n/Translator';
import Button from 'react-suite/build/components/ui/Button';
import * as React from 'react';
import ModalCenter from 'react-suite/build/components/ui/ModalCenter';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Log from 'react-suite/build/modules/logger/Log';
import { ConfirmModal, Modal } from 'react-suite/build/components/ui/ModalItem';
import { ActionModal } from 'react-suite/build/components/ui/ModalActionItem';
import Screen from 'react-suite/build/modules/listener/Screen';
import Text from 'react-suite/build/components/ui/Text';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
import Container from 'react-suite/build/components/ui/Container';
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

export default class ModalCenterScene extends React.Component<Props, State> {
  state = {
    value: ''
  };

  refs: {
    [string: string]: any;
    center: ModalCenter;
  };

  async componentDidMount() {
    Screen.init();
    /* await this.showConfirm();
                         await this.showConfirm({ body: <Text>hola mundo</Text> });
                         await this.showConfirm({ title: _('Sample title'), autoDismiss: 1 });
                         await this.showConfirm({ body: _('Sample title'), autoDismiss: 2 });
                         await this.showConfirm({
                           actions: [
                             {
                               title: _('Demo button'),
                               onPress: () => {
                                 Log.info('onPress');
                               }
                             }
                           ],
                           autoDismiss: 3
                         });*/
  }

  componentWillUnmount() {
    Screen.destroy();
  }

  showDefault(options?: Modal) {
    this.refs.center.showDefault({
      id: 'default',
      title: _('Title Default'),
      body: _('Sample Text'),
      actions: [
        {
          title: _('Back'),
          onPress: () => {
            this.refs.center.onHideItem('default');
          }
        }
      ]
    });
  }

  showConfirm(options?: ConfirmModal) {
    this.refs.center.showConfirm({
      onSuccess: () => {
        Log.info('onSuccess');
      },
      onCancel: () => {
        Log.info('onCancel');
      }
    });
  }

  showAction(options?: ActionModal) {
    this.refs.center.showAction({
      title: _('Title Action'),
      actionReturn: _('Return'),
      body: (
        <View>
          <Text>lorem ipsum</Text>
        </View>
      ),
      actions: [
        {
          title: _('Option 1'),
          image: 'https://lorempixel.com/40/40/',
          onPress: () => {
            Log.info('option');
          }
        },
        {
          title: _('Option 2'),
          image: 'https://lorempixel.com/40/40/',
          onPress: () => {
            Log.info('option');
          }
        },
        {
          title: _('Option 3'),
          image: 'https://lorempixel.com/40/40/',
          onPress: () => {
            Log.info('option');
          }
        },
        {
          title: _('Option 4'),
          image: 'https://lorempixel.com/40/40/',
          onPress: () => {
            Log.info('option');
          }
        }
      ],
      onReturn: () => {
        //
      }
    });
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('ModalCenter')} />
        <Container>

          <Text>
            {_('Modal Center component')}.
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

            <Button
              onPress={this.showDefault.bind(this)}
              title={_('Show modal')}
            />

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

showDefault() {
    this.refs.center.showDefault({
      id: 'default',
      title: 'Title Default',
      body: 'Sample Text',
      actions: [
        {
          title: 'Back',
          onPress: () => {
            this.refs.center.onHideItem('default');
          }
        }
      ]
    });
}

render(){
  return (
  <View style={{flex:1}}>
     <Button onPress={this.showDefault.bind(this)} title={'Show modal'} />
     <ModalCenter ref='center'/>
  </View>
  )
}
`}
            </Code>

            <ViewSpacer />
            <Text>{_('Confirm')}</Text>
            <Button
              onPress={this.showConfirm.bind(this)}
              title={_('Show confirm modal')}
            />

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

showConfirm() {
    this.refs.center.showConfirm({
      onSuccess: () => {
        Log.info('onSuccess');
      },
      onCancel: () => {
        Log.info('onCancel');
      }
    });
}

render(){
  return (
  <View style={{flex:1}}>
     <Button onPress={this.showConfirm.bind(this)} title={'Show confirm modal'} />
     <ModalCenter ref='center'/>
  </View>
  )
}
`}
            </Code>

            <ViewSpacer />
            <Text>{_('Action')}</Text>

            <Button
              onPress={this.showAction.bind(this)}
              title={_('Show Action modal')}
            />
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

showAction() {
    this.refs.center.showAction({
      title: 'Title Action',
      actionReturn: 'Return',
      body: (
        <View>
          <Text>lorem ipsum</Text>
        </View>
      ),
      actions: [
        {
          title: _('Option 1'),
          image: 'https://lorempixel.com/40/40/',
          onPress: () => {
            Log.info('option');
          }
        },
        {
          title: _('Option 2'),
          image: 'https://lorempixel.com/40/40/',
          onPress: () => {
            Log.info('option');
          }
        },
        {
          title: 'Option 3',
          image: 'https://lorempixel.com/40/40/',
          onPress: () => {
            Log.info('option');
          }
        },
        {
          title:'Option 4',
          image: 'https://lorempixel.com/40/40/',
          onPress: () => {
            Log.info('option');
          }
        }
      ],
      onReturn: () => {
        //
      }
    });
}

render(){
  return (
  <View style={{flex:1}}>
     <Button onPress={this.showAction.bind(this)} title={'Show action modal'} />
     <ModalCenter ref='center'/>
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
              {`
interface BaseModal {
  id?: string;
}

interface Modal extends BaseModal {
  title?: string | JSX.Element;
  containerStyle?: ViewStyle;
  body?: string | JSX.Element;
  autoDismiss?: number;
  actions?: ModalAction[];
}

interface ConfirmModal extends Modal {
  onSuccess: () => void;
  onCancel: () => void;
  title?: string | JSX.Element;
  actionConfirm?: string;
  actionCancel?: string;
}

interface ModalAction extends ButtonProps {
  title: string;
  onPress: () => void;
}

interface ActionModal extends BaseModal {
  title?: string | JSX.Element;
  containerStyle?: ViewStyle;
  body?: string | JSX.Element;
  actions?: ModalActionAction[];
  actionReturn?: string;
  maxWidth?: number;
  onReturn: () => void;
}

interface ModalActionAction extends OptionItemProps {
  title: string;
  onPress: () => void;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`showAction(params: ActionModal): Promise<string>;
showConfirm(params: ConfirmModal): Promise<string>;
showDefault(params: Modal): Promise<string>;
remove(id: string): void;
onHideItem(id: string): void;
render(): JSX.Element | null;`}
            </Code>
          </MethodsContainer>

        </Container>
        <ModalCenter ref='center' />

      </SceneContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  } as ViewStyle
});
