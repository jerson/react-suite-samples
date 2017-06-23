import * as React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import Text from 'react-suite/build/components/ui/Text';
import Theme from 'react-suite/build/modules/theme/Theme';

interface Props {}

interface State {}

export default class Value extends React.Component<Props, State> {
  render() {
    return (
      <Text style={styles.container}>

        {this.props.children}

      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 14,
    fontWeight: '200',
    textAlign: 'center',
    margin: 10
  } as TextStyle
});
