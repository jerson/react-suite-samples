import { _ } from 'react-suite/build/modules/i18n/Translator';
import * as React from 'react';
import Input from 'react-suite/build/components/ui/Input';
import Emitter from 'react-suite/build/modules/listener/Emitter';
import Log from 'react-suite/build/modules/logger/Log';
import Auth from 'react-suite/build/modules/session/Auth';
import { Response } from 'react-suite/build/modules/network/Request';
import Value from '../../ui/Value';
import Button from 'react-suite/build/components/ui/Button';
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
  isLoading: boolean;
  isLogged: boolean;
  value: string;
}

export default class SessionScene extends React.Component<Props, State> {
  state = {
    isLoading: false,
    isLogged: false,
    value: ''
  };

  refs: {
    [string: string]: any;
    username: Input;
    password: Input;
  };

  onSuccessLoginListener: string;

  componentDidMount() {
    Auth.init({
      headerName: 'X-ApiKey',
      authPath: 'user/me'
    });

    this.onSuccessLoginListener = Emitter.on(
      'onSuccessLogin',
      this.onSuccessLogin.bind(this)
    );
  }

  componentWillUnmount() {
    Emitter.off(this.onSuccessLoginListener);
  }

  onSuccessLogin(data: any) {
    if (this.state.isLoading) {
      return;
    }
    this.goToMain();
  }

  goToMain() {
    setTimeout(() => {
      this.setState({ isLogged: true });
    }, 100);
  }

  async onLogin() {
    let username = this.refs.username.getValue();
    let password = this.refs.password.getValue();

    this.setState({ isLoading: true, isLogged: false });

    try {
      //ensure this url is valid
      // let response = await Request.post('user/login', {
      //     username,
      //     password,
      // }, 'login');
      //FIXME mock data
      let isValidUser = 'demo@demo.com' === username && '123456' === password;
      let response: Response = {
        status: isValidUser ? 200 : 404,
        body: {
          id: 1,
          apiKey: 'abc'
        },
        headers: {}
      };

      if (response.status === 200) {
        let body: any = response.body;
        //you must configure Auth First
        //let success = await Auth.login(body.apiKey);
        //FIXME mock data
        let success = true;
        if (success) {
          this.goToMain();
        } else {
          Log.warn('login', 'auth error');
        }
      } else {
        Log.warn('login', 'status error');
      }
    } catch (e) {
      Log.warn('login', e);
    }

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 100);
  }

  render() {
    let { isLogged, isLoading } = this.state;
    let ok = isLogged ? 'YEP' : 'NOP';
    return (
      <SceneContainer>
        <Header title={_('Session')} />
        <Container>

          <Text>
            {_('Session module')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              {_('None, Custom module')}
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Input
              useLabel
              defaultValue='demo@demo.com'
              placeholder={_('Username')}
              ref='username'
            />
            <Input
              useLabel
              defaultValue='123456'
              placeholder={_('Password')}
              ref='password'
            />

            <Button onPress={this.onLogin.bind(this)} title={_('Login')} />

            {!isLoading && <Value>{_('Is logged: {ok}', { ok })}</Value>}

            <Code>
              {`
componentDidMount() {
    //call this just once in your app
    Auth.init({
      headerName: 'X-ApiKey',
      authPath: 'user/me'
    });

    this.onSuccessLoginListener = Emitter.on(
      'onSuccessLogin',
      this.onSuccessLogin.bind(this)
    );
}

componentWillUnmount() {
    Emitter.off(this.onSuccessLoginListener);
}


onSuccessLogin(data: any) {
    if (this.state.isLoading) {
      return;
    }
    this.goToMain();
}

goToMain() {
    setTimeout(() => {
      this.setState({ isLogged: true });
    }, 100);
}

async onLogin() {
    let username = this.refs.username.getValue();
    let password = this.refs.password.getValue();

    this.setState({ isLoading: true, isLogged: false });

    try {
      //ensure this url is valid
      let response = await Request.post('user/login', {
           username,
           password,
      }, 'login');

      if (response.status === 200) {
        let body: any = response.body;
        let success = await Auth.login(body.apiKey);
        if (success) {
          this.goToMain();
        } else {
          Log.warn('login', 'auth error');
        }
      } else {
        Log.warn('login', 'status error');
      }
    } catch (e) {
      Log.warn('login', e);
    }

    this.setState({ isLoading: false });

}

render(){
  return (<View>
            <Input
                useLabel
                defaultValue='demo@demo.com'
                placeholder={'Username'}
                ref='username'
            />
            <Input
                useLabel
                defaultValue='123456'
                placeholder={'Password'}
                ref='password'
            />

            <Button onPress={this.onLogin.bind(this)} title={'Login'} />

              {!isLoading && <Text>Is logged {ok}</Text>}

</View>)
}`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface UserSettings {
    headerName?: string;
    authPath?: string;
}
interface Settings {
    headerName: string;
    authPath: string;
}
interface User {
    [key: string]: string | boolean | number;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static init(settings?: UserSettings): Promise<void>;
static checkLogin(): Promise<void>;
static login(tmpAccessToken: string): Promise<boolean>;
static isLoggedIn(): boolean;
static getAccessToken(): string;
static getUser(): User;
static setAccessToken(value: string): Promise<boolean>;
static logout(): Promise<boolean>;`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
