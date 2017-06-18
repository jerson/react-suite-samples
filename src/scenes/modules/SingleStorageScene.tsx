import Button from 'react-suite/build/components/ui/Button';
import { _ } from 'react-suite/build/modules/i18n/Translator';
import * as React from 'react';
import Value from '../../ui/Value';
import SingleStorage from 'react-suite/build/modules/storage/SingleStorage';
import SceneContainer from '../../ui/SceneContainer';
import Header from 'react-suite/build/components/ui/Header';
import Container from 'react-suite/build/components/ui/Container';
import Text from 'react-suite/build/components/ui/Text';
import Title from 'react-suite/build/components/ui/Title';
import ViewSpacer from 'react-suite/build/components/ui/ViewSpacer';
import MethodsContainer from '../../ui/MethodsContainer';
import SamplesContainer from '../../ui/SamplesContainer';
import ComponentContainer from '../../ui/ComponentContainer';
import Hightlight from '../../ui/Hightlight';
import Code from '../../ui/Code';
import Strong from '../../ui/Strong';

export interface Props {}

export interface State {
  value: string;
}

export default class SingleStorageScene extends React.Component<Props, State> {
  state = {
    value: ''
  };

  async componentDidMount() {
    await this.readValue();
  }

  async readValue() {
    let value = await SingleStorage.get('demo');
    this.setState({ value });
  }

  async updateValue() {
    let newValue = new Date();
    let success = await SingleStorage.set('demo', newValue);
    if (success) {
      await this.readValue();
    }
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('SingleStorage')} />
        <Container>

          <Text>
            {_('Single Storage module')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('Web')}</Hightlight>
            <Text>
              <Strong>yarn add simplestorage.js</Strong>
            </Text>
            <Hightlight>{_('Android')}</Hightlight>
            <Text>
              <Strong>yarn add react-native-shared-preferences</Strong>
            </Text>
            <Hightlight>{_('Others')}</Hightlight>
            <Text>
              {_('None, Using React Native AsyncStorage')}
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Value>
              {this.state.value}
            </Value>

            <Button
              onPress={this.updateValue.bind(this)}
              title={_('Update value')}
            />

            <Code>
              {`
async readValue() {
    let value = await SingleStorage.get('demo');
    this.setState({ value });
}

async updateValue() {
    let newValue = new Date();
    let success = await SingleStorage.set('demo', newValue);
    if (success) {
      await this.readValue();
    }
}

render(){
  return (<View>
  <Text>{this.state.value}</Text>
  <Button onPress={this.updateValue.bind(this)}
            title={'Update value'}/>
</View>)
}`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static set(key: string, value: any): Promise<boolean>;
static get(key: string): Promise<string>;
static remove(key: string): Promise<boolean>;`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
