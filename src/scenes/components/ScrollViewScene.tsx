import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import ScrollView from 'react-suite/build/components/ui/ScrollView';
import Text from 'react-suite/build/components/ui/Text';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
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

export default class ScrollViewScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('ScrollView')} />
        <Container>

          <Text>
            {_('ScrollView component')}.
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

            <Container noScroll style={{ height: 150, padding: 0 }}>
              <ScrollView style={styles.container}>

                {(() => {
                  let data = [];
                  for (let i = 0; i < 200; i++) {
                    data.push(<Text key={i + 1}>lorem ipsum</Text>);
                  }
                  return data;
                })()}

              </ScrollView>
            </Container>

            <Code language='html'>
              {`<ScrollView style={styles.container}>

                {(() => {
                  let data = [];
                  for (let i = 0; i < 200; i++) {
                    data.push(<Text key={i + 1}>lorem ipsum</Text>);
                  }
                  return data;
                })()}

</ScrollView>`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface ScrollViewProps extends ScrollViewProperties {
    style?: ScrollViewStyle;
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
