import * as React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import LinearGradient from 'react-suite/build/components/ui/LinearGradient';
import Text from 'react-suite/build/components/ui/Text';
import { _ } from 'react-suite/build/modules/i18n/Translator';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
import Container from 'react-suite/build/components/ui/Container';
import Title from 'react-suite/build/components/ui/Title';
import ViewSpacer from 'react-suite/build/components/ui/ViewSpacer';
import PropertiesContainer from '../../ui/PropertiesContainer';
import MethodsContainer from '../../ui/MethodsContainer';
import SamplesContainer from '../../ui/SamplesContainer';
import Strong from '../../ui/Strong';
import ComponentContainer from '../../ui/ComponentContainer';
import Hightlight from '../../ui/Hightlight';
import Code from '../../ui/Code';

export interface Props {}

export interface State {}

export default class LinearGradientScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('LinearGradient')} />
        <Container>

          <Text>
            {_('Linear Gradient component')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('Web')}</Hightlight>
            <Text>
              {_('None, CSS background with linear gradient')}.
            </Text>
            <Hightlight>{_('Others')}</Hightlight>
            <Text>
              <Strong>yarn add react-native-linear-gradient</Strong>
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Button')}</Text>
            <LinearGradient
              colors={['#52E5E7', '#130CB7']}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>
                {_('Sample button')}
              </Text>
            </LinearGradient>
            <Code language='html'>
              {`<LinearGradient colors={['#52E5E7', '#130CB7']}
                            style={styles.linearGradient}>
    <Text>
      Sample button
    </Text>
</LinearGradient>`}
            </Code>

            <ViewSpacer />
            <Text>{_('Background')}</Text>
            <LinearGradient
              colors={['#FEC163', '#DE4313']}
              style={{ flex: 1, height: 100 }}
            />
            <Code language='html'>
              {`<LinearGradient colors={['#FEC163', '#DE4313']} style={{flex: 1, height: 100}} />`}
            </Code>

            <ViewSpacer />

            <LinearGradient
              colors={['#FFF3B0', '#CA26FF']}
              style={{ flex: 1, height: 100 }}
            />
            <Code language='html'>
              {`<LinearGradient colors={['#FFF3B0', '#CA26FF']} style={{flex: 1, height: 100}} />`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface LinearGradientProps {
    style?: ViewStyle;
    colors: string[];
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

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'flex-start',
    borderRadius: 5
  } as ViewStyle,
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  } as TextStyle
});
