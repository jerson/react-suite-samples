import { _ } from 'react-suite/build/modules/i18n/Translator';
import Button from 'react-suite/build/components/ui/Button';
import * as React from 'react';
import Value from '../../ui/Value';
import Emitter from 'react-suite/build/modules/listener/Emitter';
import Network, { NetworkType } from 'react-suite/build/modules/listener/Network';
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
  type: string;
}

export default class NetworkScene extends React.Component<Props, State> {
  state = {
    type: ''
  };

  onNetworkStateChangeListener: string;

  componentDidMount() {
    Network.init();
    this.onNetworkStateChangeListener = Emitter.on(
      'onNetworkStateChange',
      this.onNetworkStateChange.bind(this)
    );

    this.getData();
  }

  componentWillUnmount() {
    Emitter.off(this.onNetworkStateChangeListener);
    Network.destroy();
  }

  onNetworkStateChange(type: NetworkType) {
    this.setState({ type: type });
  }

  async getData() {
    this.onNetworkStateChange(await Network.updateNetworkType());
  }

  render() {
    let { type } = this.state;
    return (
      <SceneContainer>
        <Header title={_('Network')} />
        <Container>

          <Text>
            {_('Network module')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('Web')}</Hightlight>
            <Text>
              {_('None, using Event Listener Offline/Online')}
            </Text>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              {_('None, using NetInfo')}
            </Text>

          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Value>{_('Type: {type}', { type })}</Value>
            <Button onPress={this.getData.bind(this)} title={_('Get Data')} />

            <Code>
              {`
componentDidMount() {
        //call this just once in your app
        Network.init();
        this.onNetworkStateChangeListener = Emitter.on(
            'onNetworkStateChange',
            this.onNetworkStateChange.bind(this)
        );

        this.getData();
}

componentWillUnmount() {
        Emitter.off(this.onNetworkStateChangeListener);

        //call this just once in your app
        Network.destroy();
}

onNetworkStateChange(type: NetworkType) {
        this.setState({type: type});
}

getData() {
        Network.updateNetworkType();
}

render(){
  let { type } = this.state;

  return (<View>
  <Text>Type: {type}</Text>
  <Button onPress={this.getData.bind(this)} title={'Get Data'}/>
</View>)
}`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`declare type NetworkType = 'OFF' | 'WIFI' | 'MOBILE' | 'UNKNOWN';
                            `}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static init(): void;
static destroy(): void;
static isConnected(): boolean;
static getType(): NetworkType;
static updateNetworkType(): Promise<NetworkType>;`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
