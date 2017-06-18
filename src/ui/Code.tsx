import * as React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco as theme } from 'react-syntax-highlighter/dist/styles';
import View from 'react-suite/build/components/ui/View';

interface Props {
  language?: string;
}

interface State {}

export default class Code extends React.Component<Props, State> {
  render() {
    let { children, language, ...props } = this.props;
    return (
      <View style={styles.container}>
        <SyntaxHighlighter language={'typescript'} style={theme}>
          {children}
        </SyntaxHighlighter>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 4
  } as ViewStyle
});
