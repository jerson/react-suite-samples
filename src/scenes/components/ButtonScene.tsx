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
            <Button
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button onPress={this.onClick.bind(this)} title='Sample' />`}
            </Code>

            <ViewSpacer />

            <Text>{_('Loading')}</Text>
            <Button
              isLoading
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button isLoading onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>

            <ViewSpacer />

            <Text>{_('Text with icon')}</Text>
            <Button
              icon='refresh'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button icon='refresh' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>

            <ViewSpacer />

            <Text>{_('Primary')}</Text>
            <Button
              icon='favorite'
              type='primary'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button icon='favorite' type='primary' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Danger')}</Text>
            <Button
              icon='home'
              type='danger'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button icon='home' type='danger' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Warning')}</Text>
            <Button
              icon='cloud_download'
              type='warning'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button icon='cloud_download' type='warning' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Info')}</Text>
            <Button
              isLoading
              type='info'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button isLoading type='info' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Success')}</Text>
            <Button
              isLoading
              type='success'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button isLoading type='success' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>

            <ViewSpacer />

            <Text>{_('Small')}</Text>
            <Button
              isLoading
              size='small'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button isLoading size='small' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Medium')}</Text>
            <Button
              icon='home'
              size='medium'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button icon='home' size='medium' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>
            <ViewSpacer />

            <Text>{_('Large')}</Text>
            <Button
              icon='refresh'
              size='large'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button icon='refresh' size='large' onPress={this.onClick.bind(this)} title='Sample text' />`}
            </Code>

            <ViewSpacer />

            <Text>{_('Icon After')}</Text>
            <Button
              icon='favorite'
              iconPosition='after'
              type='primary'
              onPress={this.onClick.bind(this)}
              title={_('Sample text')}
            />
            <Code language='html'>
              {`<Button icon='favorite' iconPosition='after' type='primary' onPress={this.onClick.bind(this)} title='Sample text' />`}
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
