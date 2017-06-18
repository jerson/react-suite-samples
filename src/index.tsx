import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import FlexibleGridScene from './scenes/components/FlexibleGridScene';
import Router from 'react-suite/build/components/router';
import Drawer from 'react-suite/build/components/ui/Drawer';
import DrawerContent from './components/drawer/DrawerContent';
import Main from './Main';

import ViewScene from './scenes/components/ViewScene';
import LinearGradientScene from './scenes/components/LinearGradientScene';
import ImageScene from './scenes/components/ImageScene';
import BlurImageScene from './scenes/components/BlurImageScene';
import LoadingScene from './scenes/components/LoadingScene';
import ScrollViewScene from './scenes/components/ScrollViewScene';
import ButtonScene from './scenes/components/ButtonScene';
import LinkScene from './scenes/components/LinkScene';
import InputScene from './scenes/components/InputScene';
import SwitchScene from './scenes/components/SwitchScene';
import IconScene from './scenes/components/IconScene';
import AlertMessageScene from './scenes/components/AlertMessageScene';
import PanelScene from './scenes/components/PanelScene';
import ViewSpacerScene from './scenes/components/ViewSpacerScene';
import ListViewScene from './scenes/components/ListViewScene';
import ModalCenterScene from './scenes/components/ModalCenterScene';
import MessageCenterScene from './scenes/components/MessageCenterScene';
import SessionScene from './scenes/modules/SessionScene';
import I18nScene from './scenes/modules/I18nScene';
import NetworkScene from './scenes/modules/NetworkScene';
import GeolocationScene from './scenes/modules/GeolocationScene';
import ScreenScene from './scenes/modules/ScreenScene';
import RequestScene from './scenes/modules/RequestScene';
import CacheStorageScene from './scenes/modules/CacheStorageScene';
import SingleStorageScene from './scenes/modules/SingleStorageScene';
import PreferenceStorageScene from './scenes/modules/PreferenceStorageScene';
import ProgressBarScene from './scenes/components/ProgressBarScene';
import SliderScene from './scenes/components/SliderScene';
import MainScene from './scenes/MainScene';

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Router.Router>
        <Main>
          <Drawer useTabledMode content={<DrawerContent />}>
            <Router.Switch>
              <Router.Route path='/view' component={ViewScene} />
              <Router.Route
                path='/linear-gradient'
                component={LinearGradientScene}
              />
              <Router.Route path='/image' component={ImageScene} />
              <Router.Route path='/blur-image' component={BlurImageScene} />
              <Router.Route path='/loading' component={LoadingScene} />
              <Router.Route path='/scrollview' component={ScrollViewScene} />
              <Router.Route path='/button' component={ButtonScene} />
              <Router.Route path='/link' component={LinkScene} />
              <Router.Route path='/input' component={InputScene} />
              <Router.Route path='/switch' component={SwitchScene} />
              <Router.Route path='/icon' component={IconScene} />
              <Router.Route
                path='/alert-message'
                component={AlertMessageScene}
              />
              <Router.Route path='/panel' component={PanelScene} />
              <Router.Route path='/view-spacer' component={ViewSpacerScene} />
              <Router.Route path='/listview' component={ListViewScene} />
              <Router.Route
                path='/flexible-grid'
                component={FlexibleGridScene}
              />
              <Router.Route path='/modal-center' component={ModalCenterScene} />
              <Router.Route
                path='/message-center'
                component={MessageCenterScene}
              />
              <Router.Route path='/progress-bar' component={ProgressBarScene} />
              <Router.Route path='/slider' component={SliderScene} />

              <Router.Route path='/session' component={SessionScene} />
              <Router.Route path='/i18n' component={I18nScene} />
              <Router.Route path='/network' component={NetworkScene} />
              <Router.Route path='/geolocation' component={GeolocationScene} />
              <Router.Route path='/screen' component={ScreenScene} />
              <Router.Route path='/request' component={RequestScene} />
              <Router.Route
                path='/cache-storage'
                component={CacheStorageScene}
              />
              <Router.Route
                path='/single-storage'
                component={SingleStorageScene}
              />
              <Router.Route
                path='/preference-storage'
                component={PreferenceStorageScene}
              />
              <Router.Route component={MainScene} />
            </Router.Switch>
          </Drawer>
        </Main>
      </Router.Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } as ViewStyle
});
