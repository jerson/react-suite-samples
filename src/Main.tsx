import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { MessageCenter, ModalCenter, View } from 'react-suite';
import Screen from 'react-suite/build/modules/listener/Screen';

const PropTypes = require('prop-types');

interface Props {}

interface State {}

export default class Main extends React.Component<Props, State> {
  static childContextTypes = {
    noti: PropTypes.object,
    modal: PropTypes.object
  };
  refs: {
    [string: string]: any;
    noti: MessageCenter;
    modal: ModalCenter;
  };

  getChildContext() {
    return {
      noti: {
        show: (params: any) => {
          this.refs.noti && this.refs.noti.show(params);
        }
      },
      modal: {
        showAction: (params: any) => {
          this.refs.modal && this.refs.modal.showAction(params);
        }
      }
    };
  }

  componentDidMount() {
    Screen.init();
  }

  componentWillUnmount() {
    Screen.destroy();
  }

  render() {
    return (
      <View style={styles.container}>
        {React.Children.only(this.props.children)}
        <MessageCenter ref='noti' />
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
