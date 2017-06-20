import * as React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-suite/build/components/ui/Icon';
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
import Strong from '../../ui/Strong';

export interface Props {}

export interface State {}

export default class IconScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('Icon')} />
        <Container>

          <Text>
            {_('Icon component')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('Web')}</Hightlight>
            <Text>
              {_('{component} with css web font', {
                component: 'react-native-vector-icons'
              })}.
            </Text>
            <Hightlight>{_('Others')}</Hightlight>
            <Text>
              <Strong>yarn add react-native-vector-icons</Strong>
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>

            <ViewSpacer />
            <Text>{_('Basic')}</Text>
            <Icon name='home' />
            <Code language='html'>
              {`<Icon name='home' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Size')}</Text>
            <Icon name='settings' size={50} />
            <Code language='html'>
              {`<Icon name='settings' size={50}/>`}
            </Code>
            <ViewSpacer />
            <Text>{_('Style')}</Text>
            <Icon name='settings' style={{ color: 'blue' }} size={30} />
            <Code language='html'>
              {`<Icon name='settings' style={{color: 'blue'}} size={30}/>`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`type IconType = 'material';

interface IconProps {
  type?: IconType;
  style?: TextStyle;
  size?: number;
  name: string;
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
