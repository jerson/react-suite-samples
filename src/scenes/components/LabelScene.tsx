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
import Label from 'react-suite/build/components/ui/Label';
import ViewSpacer from 'react-suite/build/components/ui/ViewSpacer';
import PropertiesContainer from '../../ui/PropertiesContainer';
import MethodsContainer from '../../ui/MethodsContainer';
import SamplesContainer from '../../ui/SamplesContainer';
import ComponentContainer from '../../ui/ComponentContainer';
import Hightlight from '../../ui/Hightlight';
import Code from '../../ui/Code';

export interface Props {}

export interface State {}

export default class LabelScene extends React.Component<Props, State> {
  onClick() {
    Log.info('click');
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('Label')} />
        <Container>

          <Text>
            {_('Label component')}.
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
            <Label onPress={this.onClick.bind(this)} title={_('Sample text')} />
            <Code language='html'>
              {`<Label onPress={this.onClick.bind(this)} title='Sample' />`}
            </Code>

            <ViewSpacer />

            <Text>{_('Primary')}</Text>
            <Label
              type='primary'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label type='primary' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Danger')}</Text>
            <Label
              type='danger'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label type='danger' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Warning')}</Text>
            <Label
              type='warning'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label type='warning' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Info')}</Text>
            <Label
              type='info'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label type='info' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Success')}</Text>
            <Label
              type='success'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label type='success' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>

            <ViewSpacer />

            <Text>{_('Small')}</Text>
            <Label
              size='small'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label size='small' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Medium')}</Text>
            <Label
              size='medium'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label size='medium' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Large')}</Text>
            <Label
              size='large'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label size='large' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Hide Icon')}</Text>
            <Label
              hideIcon
              type='info'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Label hideIcon type='info' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`LabelProps {
  title?: string;
  hideIcon?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  type?: 'default' | 'primary' | 'danger' | 'warning' | 'info' | 'success';
  onPress?: () => void;
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
