import * as React from 'react';
import { StyleSheet } from 'react-native';
import Log from 'react-suite/build/modules/logger/Log';
import Button from 'react-suite/build/components/ui/Button';
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

export interface Props {}

export interface State {}

export default class ButtonScene extends React.Component<Props, State> {
  onClick() {
    Log.info('click');
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('Button')} />
        <Container>

          <Text>
            {_('Buttom component')}.
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
            <Button onPress={this.onClick.bind(this)} title='Simple' />

            <Code language='html'>
              {`<Button onPress={this.onClick.bind(this)} title='Simple' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Loading')}</Text>
            <Button
              isLoading
              onPress={this.onClick.bind(this)}
              title='Loading state'
            />

            <Code language='html'>
              {`<Button isLoading onPress={this.onClick.bind(this)} title='Loading state' />`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface ButtonProps extends TouchableProps {
  title?: string;
  isLoading?: boolean;
  icon?: string;
  iconSize?: number;
  style?: ViewStyle;
  iconStyle?: TextStyle;
  textStyle?: TextStyle;
  onPress: () => void;
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
