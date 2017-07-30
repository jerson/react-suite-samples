import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { MessageCenter, ModalCenter, View } from 'react-suite';
import Screen from 'react-suite/build/modules/listener/Screen';
import Theme from 'react-suite/build/modules/theme/Theme';
import Default from 'react-suite/build/modules/theme/themes/Default';
import Darker from './themes/Darker';
import Emitter from 'react-suite/build/modules/listener/Emitter';

const PropTypes = require('prop-types');

interface Props {}

interface State {}

export default class Main extends React.Component<Props, State> {
  static childContextTypes = {
    message: PropTypes.object,
    modal: PropTypes.object,
    theme: PropTypes.string
  };
  refs: {
    [string: string]: any;
    message: MessageCenter;
    modal: ModalCenter;
  };
  onThemeChangeListener: string;

  getChildContext() {
    return {
      message: {
        show: (params: any) => {
          this.refs.message && this.refs.message.show(params);
        }
      },
      modal: {
        showAction: (params: any) => {
          this.refs.modal && this.refs.modal.showAction(params);
        }
      },
      theme: Theme.theme
    };
  }

  componentDidMount() {
    Screen.init();

    this.onThemeChangeListener = Emitter.on(
      'onThemeChange',
      this.onThemeChange.bind(this)
    );
    Theme.init({
      defaultTheme: 'Default',
      themes: {
        Darker,
        Default
      }
    });
    /* let val = true;
    setInterval(() => {
      val = !val;
      Theme.setTheme(val ? 'Default' : 'Darker');
    }, 1000 * 1);*/
  }

  async onThemeChange(theme: string) {
    this.forceUpdate();
  }

  componentWillUnmount() {
    Screen.destroy();
    Emitter.off(this.onThemeChangeListener);
  }

  render() {
    return (
      <View style={styles.container}>
        {React.Children.only(this.props.children)}
        <MessageCenter ref='message' />
        <ModalCenter ref='modal' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  } as ViewStyle
});
