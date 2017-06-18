import * as React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Text from 'react-suite/build/components/ui/Text';
import View from 'react-suite/build/components/ui/View';

interface Props {}

interface State {}

export default class Hightlight extends React.Component<Props, State> {
  render() {
    let { ...props } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text} {...props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    backgroundColor: '#7395fc',
    borderRadius: 4,
    padding: 5,
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: 8
  } as ViewStyle,
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  } as TextStyle
});
