import * as React from 'react';
import { StyleSheet } from 'react-native';
import Input from 'react-suite/build/components/ui/Input';
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

export default class InputScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('Input')} />
        <Container>

          <Text>
            {_('Input component')}.
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

            <View style={{ maxWidth: 300 }}>
              <Input placeholder='Username' />
            </View>

            <Code language='html'>
              {`<Input placeholder='Username' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('With Label')}</Text>

            <View style={{ maxWidth: 300 }}>
              <Input useLabel placeholder='Email' />
            </View>

            <Code language='html'>
              {`<Input useLabel placeholder='Email' />`}
            </Code>
            <ViewSpacer />
            <ViewSpacer />
            <Text>{_('Password Input')}</Text>

            <View style={{ maxWidth: 300 }}>
              <Input secureTextEntry useLabel placeholder='Password' />
            </View>

            <Code language='html'>
              {`<Input secureTextEntry useLabel placeholder='Password' />`}
            </Code>
            <ViewSpacer />

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface InputProps extends TextInputProperties \{
    value?: string;
    placeholder?: string;
    defaultValue?: string;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    onChangeText?: (text: string) => void;
    useLabel?: boolean;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`setValue(value: string): void;
getValue(): string;
focus(): void;
render(): JSX.Element;`}
            </Code>
          </MethodsContainer>

        </Container>
      </SceneContainer>
    );
  }
}

const styles = StyleSheet.create({});
