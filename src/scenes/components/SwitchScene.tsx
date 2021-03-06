import * as React from 'react';
import { StyleSheet } from 'react-native';
import Switch from 'react-suite/build/components/ui/Switch';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
import Text from 'react-suite/build/components/ui/Text';
import { _ } from 'react-suite/build/modules/i18n/Translator';
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

export interface State {}

export default class SwitchScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('Switch')} />
        <Container>

          <Text>
            {_('Switch component')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              {_('Using same React Native or Web component')}.
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Switch value={true} />
            <Code language='html'>
              {`<Switch value={true} />`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface SwitchProps extends SwitchProperties {
    activeColor?: string;
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
