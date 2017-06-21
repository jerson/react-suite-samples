import * as React from 'react';
import { StyleSheet } from 'react-native';
import AlertMessage from 'react-suite/build/components/ui/AlertMessage';
import { _ } from 'react-suite/build/modules/i18n/Translator';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
import Container from 'react-suite/build/components/ui/Container';
import Text from 'react-suite/build/components/ui/Text';
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

export default class AlertMessageScene extends React.Component<Props, State> {
  render() {
    return (
      <SceneContainer>
        <Header title={_('AlertMessage')} />
        <Container>

          <Text>
            {_('Alert Message component')}.
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
            <AlertMessage message={_('Sample message alert')} />
            <Code language='html'>
              {`<AlertMessage message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('With title')}</Text>
            <AlertMessage
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage title={'Sample title'} message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('With icon')}</Text>
            <AlertMessage
              icon={'pets'}
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage icon={'pets'} title={'Sample title'} message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Primary')}</Text>
            <AlertMessage
              type='primary'
              icon={'settings_input_hdmi'}
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage type='primary' icon={'settings_input_hdmi'} title={'Sample title'} message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Danger')}</Text>
            <AlertMessage
              type='danger'
              icon={'lock'}
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage type='danger' icon={'lock'} title={'Sample title'} message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Warning')}</Text>
            <AlertMessage
              type='warning'
              icon={'motorcycle'}
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage type='warning' icon={'motorcycle'} title={'Sample title'} message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Info')}</Text>
            <AlertMessage
              type='info'
              icon={'pan_tool'}
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage type='info' icon={'pan_tool'} title={'Sample title'} message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Success')}</Text>
            <AlertMessage
              type='success'
              icon={'pageview'}
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage type='success' icon={'pageview'} title={'Sample title'} message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Allow Close')}</Text>
            <AlertMessage
              allowClose
              type='primary'
              icon={'pageview'}
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage allowClose type='primary' icon={'pageview'} title={'Sample title'} message='Sample message alert' />`}
            </Code>
            <ViewSpacer />
            <Text>{_('Loading')}</Text>
            <AlertMessage
              isLoading
              type='primary'
              icon={'pageview'}
              title={_('Sample title')}
              message={_('Sample message alert')}
            />
            <Code language='html'>
              {`<AlertMessage isLoading type='primary' icon={'pageview'} title={'Sample title'} message='Sample message alert' />`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface AlertMessageProps {
    title?: string;
    message?: string;
    icon?: string;
    allowClose?: boolean;
    isLoading?: boolean;
    style?: ViewStyle;
    iconStyle?: TextStyle;
    titleStyle?: TextStyle;
    textStyle?: TextStyle;
    type?: 'default' | 'primary' | 'danger' | 'warning' | 'info' | 'success';
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
