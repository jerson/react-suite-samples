import * as React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import Text from 'react-suite/build/components/ui/Text';

interface Props {}

interface State {}

export default class Strong extends React.Component<Props, State> {
  render() {
    let { ...props } = this.props;
    return <Text style={styles.container} {...props} />;
  }
}

const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold'
    //textAlign: 'center'
  } as TextStyle
});
