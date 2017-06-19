import * as React from 'react';
import { _, Header } from 'react-suite';
import SceneContainer from '../ui/SceneContainer';
import Container from 'react-suite/build/components/ui/Container';
import Title from 'react-suite/build/components/ui/Title';
import Text from 'react-suite/build/components/ui/Text';
import ViewSpacer from 'react-suite/build/components/ui/ViewSpacer';
import Strong from '../ui/Strong';
import Image from 'react-suite/build/components/ui/Image';

const PropTypes = require('prop-types');

interface Props {}

interface State {}

export default class MainScene extends React.Component<Props, State> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    drawer: PropTypes.object.isRequired
  };

  render() {
    return (
      <SceneContainer>
        <Header title={_('React Suite Samples')} />
        <Container>
          <Image
            source={{
              uri: 'https://image.ibb.co/k8c9Nk/logo.png'
            }}
            resizeMode={'contain'}
            style={{ width: 150, height: 100, alignSelf: 'center' }}
          />
          <Text>
            {_(
              'react-suite, is a collection of components and modules build on top react-native and react-native-web made with typescript for build apps for Android, IOS and Web with the same code, this example proyect was made with react-suite.'
            )}
          </Text>
          <ViewSpacer spacing={20} />
          <Title size='normal'>{_('Installation')}</Title>
          <ViewSpacer spacing={5} />
          <Text>
            npm: <Strong>npm install -s react-suite</Strong>
          </Text>
          <Text>
            yarn: <Strong>yarn add react-suite</Strong>
          </Text>
          <ViewSpacer spacing={20} />
          <Title size='normal'>{_('Dependencies')}</Title>
          <ViewSpacer spacing={5} />

          <Strong>yarn add react</Strong>
          <Strong>yarn add react-dom</Strong>
          <Strong>yarn add react-native</Strong>
          <Strong>yarn add react-native-web</Strong>

          <ViewSpacer spacing={5} />
          <Text>
            {_(
              'react-suite use others libraries for make it posible you can install all at once'
            )}
          </Text>

          <ViewSpacer spacing={5} />

          <Strong>yarn add pouchdb-browser</Strong>
          <Strong>yarn add react-native-blur</Strong>
          <Strong>yarn add react-native-device-info</Strong>
          <Strong>yarn add react-native-drawer</Strong>
          <Strong>yarn add react-native-google-analytics</Strong>
          <Strong>yarn add react-native-linear-gradient</Strong>
          <Strong>yarn add react-native-orientation</Strong>
          <Strong>yarn add react-native-shared-preferences</Strong>
          <Strong>yarn add react-native-vector-icons</Strong>
          <Strong>yarn add react-router-dom</Strong>
          <Strong>yarn add react-router-native</Strong>
          <Strong>yarn add realm</Strong>

        </Container>
      </SceneContainer>
    );
  }
}
