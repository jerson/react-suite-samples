import { _ } from 'react-suite/build/modules/i18n/Translator';
import Button from 'react-suite/build/components/ui/Button';
import * as React from 'react';
import Value from '../../ui/Value';
import Emitter from 'react-suite/build/modules/listener/Emitter';
import Screen, {
  Dimensions,
  Orientation
} from 'react-suite/build/modules/listener/Screen';
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
  size: string;
  orientation: string;
}

export default class ScreenScene extends React.Component<Props, State> {
  state = {
    size: '',
    orientation: ''
  };

  onDimensionsChangeListener: string;
  onOrientationChangeListener: string;

  componentDidMount() {
    //Screen.init();
    this.onDimensionsChangeListener = Emitter.on(
      'onDimensionsChange',
      this.onDimensionsChange.bind(this)
    );
    this.onOrientationChangeListener = Emitter.on(
      'onOrientationChange',
      this.onOrientationChange.bind(this)
    );

    this.getData();
  }

  componentWillUnmount() {
    Emitter.off(this.onDimensionsChangeListener);
    Emitter.off(this.onOrientationChangeListener);
    //Screen.destroy();
  }

  onDimensionsChange(size: Dimensions) {
    let jsonData = {
      width: size.width,
      height: size.height
    };
    this.setState({ size: JSON.stringify(jsonData) });
  }

  onOrientationChange(orientation: Orientation) {
    this.setState({ orientation });
  }

  async getData() {
    this.onDimensionsChange(await Screen.updateDimensions());
    this.onOrientationChange(await Screen.updateOrientation());
  }

  render() {
    let { size, orientation } = this.state;
    return (
      <SceneContainer>
        <Header title={_('Screen')} />
        <Container>

          <Text>
            {_('Screen module')}.
          </Text>

          <ComponentContainer>
            <Title size='normal'>{_('Dependencies')}</Title>
            <Hightlight>{_('Web')}</Hightlight>
            <Text>
              {_('None, Using Window resize listener')}
            </Text>
            <Hightlight>{_('Others')}</Hightlight>
            <Text>
              <Strong>yarn add react-native-orientation</Strong>
            </Text>
          </ComponentContainer>

          <ViewSpacer />

          <SamplesContainer>
            <Title size='normal'>{_('Examples')}</Title>
            <ViewSpacer />
            <Text>{_('Basic')}</Text>

            <Value>{_('Size: {size}', { size })}</Value>
            <Value>{_('Orientation: {orientation}', { orientation })}</Value>

            <Button onPress={this.getData.bind(this)} title={_('Get Data')} />

            <Code>
              {`
componentDidMount() {
    //call this just once in your app
    Screen.init();

    this.onDimensionsChangeListener = Emitter.on(
      'onDimensionsChange',
      this.onDimensionsChange.bind(this)
    );
    this.onOrientationChangeListener = Emitter.on(
      'onOrientationChange',
      this.onOrientationChange.bind(this)
    );

    this.getData();
}

componentWillUnmount() {
    Emitter.off(this.onDimensionsChangeListener);
    Emitter.off(this.onOrientationChangeListener);

    //call this just once in your app
    Screen.destroy();
}

onDimensionsChange(size: Dimensions) {
    let jsonData = {
      width: size.width,
      height: size.height
    };
    this.setState({ size: JSON.stringify(jsonData) });
}

onOrientationChange(orientation: Orientation) {
    this.setState({ orientation });
}

getData() {
    Screen.updateOrientation();
    Screen.updateDimensions();
}

render(){
  let { size, orientation } = this.state;

  return (<View>
    <Text>{ size }</Text>
    <Text>{ orientation }</Text>
    <Button onPress={this.getData.bind(this)} title={'Get Data'} />

</View>)
}`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`declare type Orientation = 'PORTRAIT' | 'LANDSCAPE' | string;
interface Dimensions {
    width: number;
    height: number;
    scale: number;
    fontScale: number;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`static init(): void;
static getDimensions(): Dimensions;
static getOrientation(): Orientation;
static destroy(): void;
static updateOrientation(): Promise<Orientation>;
static updateDimensions(): Promise<Dimensions>;`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
