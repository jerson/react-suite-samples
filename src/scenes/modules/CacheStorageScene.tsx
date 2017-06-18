import { _ } from 'react-suite/build/modules/i18n/Translator';
import Button from 'react-suite/build/components/ui/Button';
import * as React from 'react';
import Value from '../../ui/Value';
import CacheStorage from 'react-suite/build/modules/storage/CacheStorage';
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
import Strong from '../../ui/Strong';

export interface Props {}

export interface State {
  value: string;
}

export default class CacheStorageScene extends React.Component<Props, State> {
  state = {
    value: ''
  };

  async componentDidMount() {
    CacheStorage.init({
      path: 'cache.db',
      schemaVersion: 1
    });
    await this.readValue();
  }

  async readValue() {
    let value = await CacheStorage.get('demo');
    this.setState({ value });
  }

  async updateValue() {
    let newValue = new Date();
    let success = await CacheStorage.set('demo', newValue);
    if (success) {
      await this.readValue();
    }
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('Cachestorage')} />
        <Container>

          <Text>
            {_('Cache Storage module')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('Web')}</Hightlight>
            <Text>
              <Strong>yarn add pouchdb-browser</Strong>
            </Text>
            <Hightlight>{_('Others')}</Hightlight>
            <Text>
              <Strong>yarn add realm</Strong>
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
async componentDidMount() {
    //call this just once in your app
    CacheStorage.init({
      path: 'cache.db',
      schemaVersion: 1
    });
}

async readValue() {
    let value = await CacheStorage.get('demo');
    this.setState({value});
}

async updateValue() {
    let newValue = new Date();
    let success = await CacheStorage.set('demo', newValue);
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

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface UserSettings {
  schemaVersion?: number;
  path?: string;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static init(settings: UserSettings): void;
static set(key: string, value: any): Promise<boolean>;
static get(key: string): Promise<any>;
static remove(key: string): Promise<boolean>;`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
