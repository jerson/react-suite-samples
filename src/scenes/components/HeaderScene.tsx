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

export interface Props {}

export interface State {}

export default class HeaderScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('Header')} />
        <Container>

          <Text>
            {_('Header component')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              {_('None, Custom component')}.
            </Text>

          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>

            <ViewSpacer />
            <Text>{_('Basic')}</Text>
            <Header title={_('Sample title')} />

            <Code language='html'>
              {`  <Header title={'Sample title'} />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Left')}</Text>
            <Header
              left={{
                icon: 'face',
                onPress: () => {
                  //
                }
              }}
              title={_('Sample title')}
            />

            <Code language='html'>
              {`  <Header  left={{
                            icon: 'face',
                            onPress: () => {
                                //
                            }
                        }} title={'Sample title'} />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Right')}</Text>
            <Header
              right={{
                icon: 'more_vert',
                onPress: () => {
                  //
                }
              }}
              title={_('Sample title')}
            />

            <Code language='html'>
              {`  <Header  right={{
                            icon: 'more_vert',
                            onPress: () => {
                                //
                            }
                        }} title={'Sample title'} />`}
            </Code>

            <ViewSpacer />
            <Text>{_('Actions')}</Text>
            <Header
              actions={[
                {
                  icon: 'refresh',
                  onPress: () => {
                    //
                  }
                },
                {
                  icon: 'find_replace',
                  onPress: () => {
                    //
                  }
                }
              ]}
              title={_('Sample title')}
            />

            <Code language='html'>
              {`  <Header  actions={[
                            {
                                icon: 'refresh',
                                onPress: () => {
                                    //
                                }
                            },
                            {
                                icon: 'find_replace',
                                onPress: () => {
                                    //
                                }
                            },
                        ]} title={'Sample title'} />`}
            </Code>

            <Text>{_('Custom Title')}</Text>
            <Header title={<View><Text>Custom title</Text></View>} />

            <Code language='html'>
              {`<Header title={<View><Text>Custom title</Text></View>}/>`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface HeaderProps {
    left?: HeaderActionProps | JSX.Element;
    right?: HeaderActionProps | JSX.Element;
    children?: JSX.Element;
    maxWidth?: number;
    statusBarBackgroundColor?: string;
    statusBarStyle?: 'default' | 'light-content';
    title: string | JSX.Element;
    actions?: HeaderActionProps[];
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`render(): JSX.Element;`}
            </Code>
          </MethodsContainer>

        </Container>
      </SceneContainer>
    );
  }
}

const styles = StyleSheet.create({});
