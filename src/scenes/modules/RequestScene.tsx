import Button from 'react-suite/build/components/ui/Button';
import { _ } from 'react-suite/build/modules/i18n/Translator';
import * as React from 'react';
import Value from '../../ui/Value';
import Request from 'react-suite/build/modules/network/Request';
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

export interface State {
  value: string;
}

export default class RequestScene extends React.Component<Props, State> {
  state = {
    value: ''
  };

  componentDidMount() {
    Request.init({
      baseUrl: 'https://jsonplaceholder.typicode.com'
    });
  }

  async updateValue() {
    let response = await Request.get('users/1');
    let value = JSON.stringify(response);
    this.setState({ value });
  }

  render() {
    return (
      <SceneContainer>
        <Header title={_('Request')} />
        <Container>

          <Text>
            {_('Request module')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              {_('None, Using fetch')}
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
              title={_('Send request')}
            />

            <Code>
              {`
componentDidMount() {
        //call this just once in your app
        Request.init({
            baseUrl: 'https://jsonplaceholder.typicode.com'
        });
}

async updateValue() {
        let response = await Request.get('users/1');
        let value = JSON.stringify(response);
        this.setState({value});
}

render(){
  return (<View>
  <Text>{this.state.value}</Text>
  <Button onPress={this.updateValue.bind(this)}
                            title={'Send request'}/>
</View>)
}`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface UserSettings {
    baseUrl: string;
}
interface Settings {
    baseUrl: string;
}
interface Options {
    secure?: boolean;
}
interface Body {
    [key: string]: string | number;
}
interface Headers {
    [key: string]: string;
}
interface Ids {
    [key: string]: string;
}
interface Response {
    status: number;
    body: any;
    headers: {
        [key: string]: string;
    };
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static init(settings: UserSettings): void;
static abort(id: string): void;
static get(path: string, body?: Body, id?: Id, options?: Options): Promise<Response>;
static head(path: string, body: Body, id?: Id, options?: Options): Promise<Response>;
static post(path: string, body: Body, id?: Id, options?: Options): Promise<Response>;
static put(path: string, body: Body, id?: Id, options?: Options): Promise<Response>;
static remove(path: string, body: Body, id?: Id, options?: Options): Promise<Response>;
    `}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
