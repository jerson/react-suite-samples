import Button from 'react-suite/build/components/ui/Button';
import { _ } from 'react-suite/build/modules/i18n/Translator';
import Emitter from 'react-suite/build/modules/listener/Emitter';
import * as React from 'react';
import Value from '../../ui/Value';
import Geolocation from 'react-suite/build/modules/listener/Geolocation';
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
  coordinates: string;
}

export default class GeolocationScene extends React.Component<Props, State> {
  state = {
    coordinates: ''
  };

  onLocationChangeListener: string;

  componentDidMount() {
    Geolocation.init();
    this.onLocationChangeListener = Emitter.on(
      'onLocationChange',
      this.onLocationChange.bind(this)
    );

    this.getData();
  }

  componentWillUnmount() {
    Emitter.off(this.onLocationChangeListener);
    Geolocation.destroy();
  }

  onLocationChange(coordinates: Coordinates) {
    let jsonData = {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    };
    this.setState({ coordinates: JSON.stringify(jsonData) });
  }

  getData() {
    Geolocation.updateLocation();
  }

  render() {
    let { coordinates } = this.state;

    return (
      <SceneContainer>
        <Header title={_('Geolocation')} />
        <Container>

          <Text>
            {_('Geolocation module')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('All')}</Hightlight>
            <Text>
              {_('None, Using Native API')}
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Value>{_('Location: {coordinates}', { coordinates })}</Value>

            <Button onPress={this.getData.bind(this)} title={_('Get Data')} />

            <Code>
              {`
componentDidMount() {
    //call this just once in your app
    Geolocation.init();
    this.onLocationChangeListener = Emitter.on(
      'onLocationChange',
      this.onLocationChange.bind(this)
    );

    this.getData();
}

componentWillUnmount() {
    Emitter.off(this.onLocationChangeListener);
    //call this just once in your app
    Geolocation.destroy();
}

onLocationChange(coordinates: Coordinates) {
    let jsonData = {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    };
    this.setState({coordinates: JSON.stringify(jsonData)});
}

getData() {
    Geolocation.updateLocation();
}

render(){
  let { coordinates } = this.state;

  return (<View>
   <Text>Location {coordinates}</Text>
   <Button onPress={this.getData.bind(this)} title={'Get Data'}/>
</View>)
}`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface UserSettings {
  messageTitle?: string;
  messageDescription?: string;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static init(settings?: UserSettings): void;
static getPosition(): Coordinates;
static checkWatcher(forced?: boolean): Promise<void>;
static destroy(): void;
static updateLocation(): Promise<Coordinates>;`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
