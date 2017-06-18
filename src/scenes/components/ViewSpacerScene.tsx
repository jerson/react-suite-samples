import { _ } from 'react-suite/build/modules/i18n/Translator';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Text from 'react-suite/build/components/ui/Text';
import ViewSpacer from 'react-suite/build/components/ui/ViewSpacer';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
import Container from 'react-suite/build/components/ui/Container';
import Title from 'react-suite/build/components/ui/Title';
import PropertiesContainer from '../../ui/PropertiesContainer';
import MethodsContainer from '../../ui/MethodsContainer';
import SamplesContainer from '../../ui/SamplesContainer';
import ComponentContainer from '../../ui/ComponentContainer';
import Hightlight from '../../ui/Hightlight';
import Code from '../../ui/Code';

export interface Props {}

export interface State {}

export default class ViewSpacerScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('ViewSpacer')} />
        <Container>

          <Text>
            {_('View Spacer component')}.
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

            <Text>{_('Sample message alert')}</Text>
            <ViewSpacer />
            <Text>{_('Sample message alert')}</Text>
            <ViewSpacer />
            <Text>{_('Sample message alert')}</Text>
            <ViewSpacer spacing={30} />
            <Text>{_('Sample message alert')}</Text>
            <ViewSpacer spacing={20} />
            <Text>{_('Sample message alert')}</Text>
            <Code language='html'>
              {`<Text>{'Sample message alert'}</Text>
<ViewSpacer />
<Text>Sample message alert</Text>
<ViewSpacer />
<Text>Sample message alert</Text>
<ViewSpacer spacing={30} />
<Text>Sample message alert</Text>
<ViewSpacer spacing={20} />
<Text>Sample message alert</Text>`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface ViewSpacerProps extends ViewProps {
    style?: ViewStyle;
    spacing?: number;
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
