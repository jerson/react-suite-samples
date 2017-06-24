import * as React from 'react';
import { StyleSheet } from 'react-native';
import Text from 'react-suite/build/components/ui/Text';
import Panel from 'react-suite/build/components/ui/Panel';
import { _ } from 'react-suite/build/modules/i18n/Translator';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
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

export default class PanelScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('Panel')} />
        <Container>

          <Text>
            {_('Panel component')}.
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

            <Panel title={_('Title Panel')}>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
            </Panel>

            <Code language='html'>
              {`<Panel title={'Title Panel'}>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
</Panel>
`}
            </Code>

            <ViewSpacer />
            <Text>{_('Actions')}</Text>

            <Panel
              actions={[
                {
                  icon: 'refresh',
                  title: _('Action 2'),
                  type: 'primary',
                  onPress: () => {
                    //
                  }
                },
                {
                  icon: 'home',
                  type: 'primary',
                  onPress: () => {
                    //
                  }
                }
              ]}
              title={_('Title Panel')}
            >
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
              <Text>Lorem</Text>
            </Panel>

            <Code language='html'>
              {`<Panel actions={[
                            {
                                icon: 'refresh',
                                title: 'Action 2',
                                type: 'primary',
                                onPress: () => {
                                    //
                                },
                            },
                            {
                                icon: 'home',
                                type: 'primary',
                                onPress: () => {
                                    //
                                },
                            },
                        ]} title={'Title Panel'}>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
</Panel>
`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface PanelProps {
    title: string | JSX.Element;
    actions?: PanelAction[];
    toolbarHeight?: number;
    children?: JSX.Element | JSX.Element[];
    style?: ViewStyle;
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
