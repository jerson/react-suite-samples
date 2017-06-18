import { _ } from 'react-suite/build/modules/i18n/Translator';
import Button from 'react-suite/build/components/ui/Button';
import * as React from 'react';
import Value from '../../ui/Value';
import PreferencesStorage from 'react-suite/build/modules/storage/PreferencesStorage';
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
  defaultValue: string;
}

export default class PreferenceStorageScene extends React.Component<
  Props,
  State
> {
  state = {
    value: '',
    defaultValue: ''
  };

  async componentDidMount() {
    PreferencesStorage.init({
      defaults: {
        sample: '-1'
      }
    });

    await this.readValue();
  }

  async readValue() {
    let value = await PreferencesStorage.get('sample');
    let defaultValue = await PreferencesStorage.getDefault('sample');
    this.setState({
      defaultValue: defaultValue.toString(),
      value: value.toString()
    });
  }

  async updateValue() {
    let newValue = Math.random();
    let success = await PreferencesStorage.set('sample', newValue.toString());
    if (success) {
      await this.readValue();
    }
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('PreferenceStorage')} />
        <Container>

          <Text>
            {_('Preference Storage module')}.
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

            <Value>
              {_('Default')}: {this.state.defaultValue}
            </Value>

            <Button
              onPress={this.updateValue.bind(this)}
              title={_('Update value')}
            />

            <Code>
              {`
async componentDidMount() {
    //call this just once in your app
    PreferencesStorage.init({
      defaults: {
        sample: '-1'
      }
    });

    await this.readValue();
}

async readValue() {
    let value = await PreferencesStorage.get('sample');
    let defaultValue = await PreferencesStorage.getDefault('sample');
    this.setState({
      defaultValue: defaultValue.toString(),
      value: value.toString()
    });
}

async updateValue() {
    let newValue = Math.random();
    let success = await PreferencesStorage.set('sample', newValue.toString());
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
    defaults?: Preferences;
}

interface Preferences {
    [key: string]: PreferenceValue;
}

declare type PreferenceValue = boolean | string;
`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static init(settings?: UserSettings): void;
static getDefault(key: string): PreferenceValue;
static set(key: string, value: PreferenceValue): Promise<boolean>;
static get(key: string): Promise<PreferenceValue>;
static remove(key: string): Promise<boolean>;`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
