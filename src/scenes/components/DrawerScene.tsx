import * as React from 'react';
import { StyleSheet } from 'react-native';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
import Container from 'react-suite/build/components/ui/Container';
import Text from 'react-suite/build/components/ui/Text';
import { _ } from 'react-suite/build/modules/i18n/Translator';
import Title from 'react-suite/build/components/ui/Title';
import ViewSpacer from 'react-suite/build/components/ui/ViewSpacer';
import PropertiesContainer from '../../ui/PropertiesContainer';
import MethodsContainer from '../../ui/MethodsContainer';
import SamplesContainer from '../../ui/SamplesContainer';
import ComponentContainer from '../../ui/ComponentContainer';
import Hightlight from '../../ui/Hightlight';
import Code from '../../ui/Code';
import View from 'react-suite/build/components/ui/View';
import Drawer from 'react-suite/build/components/ui/Drawer';
import Button from 'react-suite/build/components/ui/Button';
import Strong from '../../ui/Strong';

export interface Props {}

export interface State {}

export default class DrawerScene extends React.Component<Props, State> {
  refs: {
    [string: string]: any;
  };

  render() {
    return (
      <SceneContainer>
        <Header title={_('Drawer')} />
        <Container>

          <Text>
            {_('Drawer component')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              <Strong>yarn add react-native-drawer</Strong>
            </Text>

          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>

            <ViewSpacer />
            <Text>{_('Basic')}</Text>
            <View
              style={{
                maxWidth: 800,
                overflow: 'hidden',
                flex: 1,
                height: 300
              }}
            >
              <Drawer ref={'drawer1'} content={<Text>drawer here</Text>}>
                <View style={{ flex: 1 }}>
                  <Text>body here</Text>
                  <Button
                    title={_('Toggle drawer')}
                    onPress={() => {
                      this.refs.drawer1.toggle();
                    }}
                  />
                </View>
              </Drawer>
            </View>

            <Code>
              {`<View style={{maxWidth: 800, height: 300}}>
                            <Drawer ref={'drawer1'} content={<Text>drawer here</Text>}>
                                <View>
                                    <Text>body here</Text>
                                    <Button title={'Toggle drawer'} onPress={() => {
                                        this.refs.drawer1.toggle();
                                    }}/>
                                </View>
                            </Drawer>
                        </View>`}
            </Code>

            <ViewSpacer />
            <Text>{_('Max Width')}</Text>
            <View
              style={{
                maxWidth: 800,
                overflow: 'hidden',
                flex: 1,
                height: 300
              }}
            >
              <Drawer
                useTabledMode
                tabledModeMinWidth={300}
                ref={'drawer2'}
                content={<Text>drawer here</Text>}
              >
                <View style={{ flex: 1 }}>
                  <Text>body here</Text>
                  <Button
                    title={_('Toggle drawer')}
                    onPress={() => {
                      this.refs.drawer2.toggle();
                    }}
                  />
                </View>
              </Drawer>
            </View>

            <Code>
              {`<View style={{maxWidth: 800, height: 300}}>
                            <Drawer useTabledMode tabledModeMinWidth={300} ref={'drawer2'} content={<Text>drawer here</Text>}>
                                <View>
                                    <Text>body here</Text>
                                    <Button title={'Toggle drawer'} onPress={() => {
                                        this.refs.drawer2.toggle();
                                    }}/>
                                </View>
                            </Drawer>
                        </View>`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface DrawerProps {
    children?: JSX.Element;
    content: JSX.Element;
    tabletContent?: JSX.Element;
    useTabledMode?: boolean;
    tabledModeMinWidth?: number;
    onOpenStart?: () => void;
    onCloseStart?: () => void;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`isOpen(): boolean;
toggle(): void;
close(): void;
open(): void;
render(): JSX.Element;`}
            </Code>
          </MethodsContainer>

        </Container>
      </SceneContainer>
    );
  }
}

const styles = StyleSheet.create({});
