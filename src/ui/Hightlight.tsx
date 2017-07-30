import * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import Text from 'react-suite/build/components/ui/Text';
import View from 'react-suite/build/components/ui/View';
import BaseComponent from 'react-suite/build/components/BaseComponent';
import { ThemeVars } from 'react-suite/build/modules/theme/ThemeBuilder';

interface Props {}

interface State {}

export default class Hightlight extends BaseComponent<Props, State> {
  render() {
    let { ...props } = this.props;
    const { styles, theme } = this;

    return (
      <View style={styles.container}>
        <Text style={styles.text} {...props} />
      </View>
    );
  }

  loadStyles(theme: ThemeVars) {
    return {
      container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        backgroundColor: theme.defaults.primaryColor,
        borderRadius: 4,
        padding: 5,
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: 8
      } as ViewStyle,
      text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.defaults.textActiveColor
      } as TextStyle
    };
  }
}
