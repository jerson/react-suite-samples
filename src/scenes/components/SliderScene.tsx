import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Slider from 'react-suite/build/components/ui/Slider';
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
import Strong from '../../ui/Strong';

export interface Props {}

export interface State {}

export default class SliderScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('Slider')} />
        <Container>

          <Text>
            {_('Slider component')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              <Strong>yarn add react-native-slider</Strong>
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Slider value={50} maximumValue={100} minimumValue={0} />

            <Code language='html'>
              {`<Slider value={50} maximumValue={100} minimumValue={0} />`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface SliderProps {
    trackStyle?: ViewStyle;
    style?: ViewStyle;
    value?: number;
    minimumValue?: number;
    maximumValue: number;
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
  container: {} as ViewStyle
});
