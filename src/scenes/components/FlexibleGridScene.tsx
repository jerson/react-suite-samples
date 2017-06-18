import * as React from 'react';
import ListView from 'react-suite/build/components/ui/ListView';
import View from 'react-suite/build/components/ui/View';
import Text from 'react-suite/build/components/ui/Text';
import FlexibleGrid from 'react-suite/build/components/ui/FlexibleGrid';
import Screen from 'react-suite/build/modules/listener/Screen';
import Header from 'react-suite/build/components/ui/Header';
import Container from 'react-suite/build/components/ui/Container';
import SceneContainer from '../../ui/SceneContainer';
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

export interface State {
  dataSource: any;
}

export default class FlexibleGridScene extends React.Component<Props, State> {
  state = {
    dataSource: null
  };

  renderRow(item: string) {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text>Hola Mundo {item}</Text>
      </View>
    );
  }

  async componentDidMount() {
    Screen.init();
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1: any, r2: any) => {
        return r1 !== r2;
      }
    });

    dataSource = dataSource.cloneWithRows([
      'pepe',
      'juan',
      'jorge',
      'diego',
      'edgar',
      'perez',
      'piedra',
      'pardo'
    ]);

    this.setState({ dataSource });
  }

  render() {
    let { dataSource } = this.state;

    if (!dataSource) {
      return null;
    }

    return (
      <SceneContainer>
        <Header title={_('FlexibleGrid')} />
        <Container>

          <Text>
            {_('Flexible Grid component')}.
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

            <Container noScroll style={{ height: 150, padding: 0 }}>
              <FlexibleGrid
                itemWidth={150}
                dataSource={dataSource}
                renderRow={this.renderRow.bind(this)}
              />
            </Container>

            <Code>
              {`
componentDidMount(){
  //call this just once in your app
  Screen.init();

  let dataSource = new ListView.DataSource({
      rowHasChanged: (r1: any, r2: any) => {
        return r1 !== r2;
      }
  });

  dataSource = dataSource.cloneWithRows([
      'pepe',
      'juan',
      'jorge',
      'diego',
      'edgar',
      'perez',
      'piedra',
      'pardo'
  ]);
  this.setState({ dataSource });
}

renderRow(item: string) {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text>{item}</Text>
      </View>
    );
}

componentWillUnmount(){
  //call this just once in your app
  Screen.destroy();
}

render(){
 let { dataSource } = this.state;

 if (!dataSource) {
      return null;
 }

 return <FlexibleGrid itemWidth={150}
                dataSource={dataSource}
                renderRow={this.renderRow.bind(this)}/>
}`}
            </Code>

          </SamplesContainer>

          <ViewSpacer />

          <PropertiesContainer>
            <Title size='normal'>{_('Properties')}</Title>
            <Code>
              {`interface FlexibleGridProps extends ListViewProps {
  itemMargin?: number;
  itemWidth: number;
}`}
            </Code>
          </PropertiesContainer>

          <ViewSpacer />

          <MethodsContainer>
            <Title size='normal'>{_('Methods')}</Title>
            <Code>
              {`refreshView(): void;
render(): JSX.Element;`}
            </Code>
          </MethodsContainer>

        </Container>

      </SceneContainer>
    );
  }
}
