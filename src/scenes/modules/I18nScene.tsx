import Button from 'react-suite/build/components/ui/Button';
import * as React from 'react';
import Value from '../../ui/Value';
import {
  _,
  default as Translator
} from 'react-suite/build/modules/i18n/Translator';
import PreferencesStorage from 'react-suite/build/modules/storage/PreferencesStorage';
import Emitter from 'react-suite/build/modules/listener/Emitter';
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

export interface State {}

export default class I18nScene extends React.Component<Props, State> {
  onLocaleChangeListener: string;

  componentDidMount() {
    this.onLocaleChangeListener = Emitter.on(
      'onLocaleChange',
      this.onLocaleChange.bind(this)
    );

    Translator.init({
      defaultLocale: 'es',
      translations: {
        en: {
          TITLE: 'Translator',
          HI: 'Hi',
          BYE: 'Bye'
        },
        es: {
          TITLE: 'Traductor',
          HI: 'Hola',
          BYE: 'Adios'
        }
      }
    });
  }

  componentWillUnmount() {
    Emitter.off(this.onLocaleChangeListener);
  }

  onLocaleChange() {
    this.forceUpdate();
  }

  async setLocale(locale: string) {
    await PreferencesStorage.set('locale', locale);
    Translator.setLocale(locale);
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('I18n')} />
        <Container>

          <Text>
            {_('I18n module')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('Web')}</Hightlight>
            <Text>
              {_('None, Using browser vars')}
            </Text>
            <Hightlight>{_('Others')}</Hightlight>
            <Text>
              <Strong>yarn add react-native-device-info</Strong>
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Value>{_('HI')}</Value>
            <Value>{_('BYE')}</Value>

            <Button onPress={this.setLocale.bind(this, 'en')} title={_('EN')} />
            <Button onPress={this.setLocale.bind(this, 'es')} title={_('ES')} />

            <Code>
              {`
componentDidMount() {
        this.onLocaleChangeListener = Emitter.on(
            'onLocaleChange',
            this.onLocaleChange.bind(this)
        );

        //call this just once in your app
        Translator.init({
            defaultLocale: 'es',
            translations: {
                en: {
                    TITLE: 'Translator',
                    HI: 'Hi',
                    BYE: 'Bye'
                },
                es: {
                    TITLE: 'Traductor',
                    HI: 'Hola',
                    BYE: 'Adios'
                }
            }
        });
}

componentWillUnmount() {
        Emitter.off(this.onLocaleChangeListener);
}

onLocaleChange() {
        // reload component, maybe reload app
        this.forceUpdate();
}

async setLocale(locale: string) {
        await PreferencesStorage.set('locale', locale);
        Translator.setLocale(locale);
}

render(){
  return (<View>
   <Text>{_('HI')}</Text>
   <Text>{_('BYE')}</Text>

   <Button onPress={this.setLocale.bind(this, 'en')} title={'EN'}/>
   <Button onPress={this.setLocale.bind(this, 'es')} title={'ES'}/>

</View>)
}`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface UserSettings {
    translations: Translations;
    defaultLocale?: string;
}

export interface Settings {
    translations: Translations;
    defaultLocale: string;
}

export declare type TranslationText = string | number;

export interface Translations {
    [key: string]: Locale;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static init(settings: UserSettings): Promise<void>;
static setLocale(locale: string): void;
static getLocale(): string;
static translate(text: string, params?: Params): string;
static getUserLocale(): Promise<string>;
static getSystemLocale(): string`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
