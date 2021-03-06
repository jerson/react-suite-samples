import * as React from 'react';
import { ScrollViewStyle, StyleSheet, ViewStyle } from 'react-native';
import { _, ScrollView } from 'react-suite';
import DrawerFooter from 'react-suite/build/components/ui/DrawerFooter';
import DrawerHeader from 'react-suite/build/components/ui/DrawerHeader';
import DrawerItem, { DrawerItemProps } from 'react-suite/build/components/ui/DrawerItem';
import Image from 'react-suite/build/components/ui/Image';
import LinearGradient from 'react-suite/build/components/ui/LinearGradient';
import StatusBarView from 'react-suite/build/components/ui/StatusBarView';
import View from 'react-suite/build/components/ui/View';
import Label from 'react-suite/build/components/ui/Label';

const PropTypes = require('prop-types');

interface Props {}

interface State {}

export default class DrawerContent extends React.Component<Props, State> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    drawer: PropTypes.object
  };

  getItems(): DrawerItemProps[] {
    return [
      {
        icon: 'build',
        name: _('Installation'),
        onPress: this.goTo.bind(this, '/')
      },
      {
        isHeader: true,
        name: _('Components')
      },
      {
        icon: 'crop_7_5',
        name: _('Button'),
        onPress: this.goTo.bind(this, '/button')
      },
      {
        icon: 'label',
        name: _('Label'),
        onPress: this.goTo.bind(this, '/label')
      },
      {
        icon: 'link',
        name: _('Link'),
        onPress: this.goTo.bind(this, '/link')
      },
      {
        icon: 'gradient',
        name: _('LinearGradient'),
        onPress: this.goTo.bind(this, '/linear-gradient')
      },
      {
        icon: 'menu',
        name: _('Drawer'),
        onPress: this.goTo.bind(this, '/drawer')
      },
      {
        icon: 'more_vert',
        name: _('Header'),
        onPress: this.goTo.bind(this, '/header')
      },
      {
        icon: 'blur_on',
        name: _('BlurImage'),
        onPress: this.goTo.bind(this, '/blur-image')
      },
      {
        icon: 'font_download',
        name: _('Input'),
        onPress: this.goTo.bind(this, '/input')
      },
      {
        icon: 'stars',
        name: _('Icon'),
        onPress: this.goTo.bind(this, '/icon')
      },
      {
        icon: 'info',
        name: _('AlertMessage'),
        onPress: this.goTo.bind(this, '/alert-message')
      },
      {
        icon: 'web_asset',
        name: _('Panel'),
        onPress: this.goTo.bind(this, '/panel')
      },
      {
        icon: 'view_module',
        name: _('FlexibleGrid'),
        onPress: this.goTo.bind(this, '/flexible-grid')
      },
      {
        icon: 'view_carousel',
        name: _('ModalCenter'),
        onPress: this.goTo.bind(this, '/modal-center')
      },
      {
        icon: 'forum',
        name: _('MessageCenter'),
        onPress: this.goTo.bind(this, '/message-center')
      },
      {
        icon: 'remove',
        name: _('ProgressBar'),
        onPress: this.goTo.bind(this, '/progress-bar')
      },
      {
        icon: 'trending_flat',
        name: _('Slider'),
        onPress: this.goTo.bind(this, '/slider'),
        rightView: <Label hideIcon type='warning' title={_('Partial')} />
      },
      {
        isHeader: true,
        name: _('Modules')
      },
      {
        icon: 'account_box',
        name: _('Session'),
        onPress: this.goTo.bind(this, '/session')
      },
      {
        icon: 'translate',
        name: _('I18n'),
        onPress: this.goTo.bind(this, '/i18n')
      },
      {
        icon: 'rss_feed',
        name: _('Network'),
        onPress: this.goTo.bind(this, '/network')
      },
      {
        icon: 'location_on',
        name: _('Geolocation'),
        onPress: this.goTo.bind(this, '/geolocation')
      },
      {
        icon: 'web',
        name: _('Screen'),
        onPress: this.goTo.bind(this, '/screen')
      },
      {
        icon: 'cloud',
        name: _('Request'),
        onPress: this.goTo.bind(this, '/request')
      },
      {
        icon: 'storage',
        name: _('CacheStorage'),
        onPress: this.goTo.bind(this, '/cache-storage')
      },
      {
        icon: 'sd_storage',
        name: _('SingleStorage'),
        onPress: this.goTo.bind(this, '/single-storage')
      },
      {
        icon: 'settings',
        name: _('PreferenceStorage'),
        onPress: this.goTo.bind(this, '/preference-storage')
      },
      {
        isHeader: true,
        name: _('Basic')
      },
      {
        icon: 'space_bar',
        name: _('View Spacer'),
        onPress: this.goTo.bind(this, '/view-spacer')
      },
      {
        icon: 'refresh',
        name: _('Loading'),
        onPress: this.goTo.bind(this, '/loading')
      },
      {
        icon: 'view_agenda',
        name: _('View'),
        onPress: this.goTo.bind(this, '/view')
      },
      {
        icon: 'image',
        name: _('Image'),
        onPress: this.goTo.bind(this, '/image')
      },
      {
        icon: 'adjust',
        name: _('Switch'),
        onPress: this.goTo.bind(this, '/switch')
      },
      {
        icon: 'format_align_justify',
        name: _('Scrollview'),
        onPress: this.goTo.bind(this, '/scrollview')
      },
      {
        icon: 'view_list',
        name: _('ListView'),
        onPress: this.goTo.bind(this, '/listview')
      }
    ];
  }

  goTo(path: string) {
    this.context.router.history.push(path);
    this.context.drawer && this.context.drawer.close();
  }

  render() {
    let items = this.getItems();

    let logo = require('../../../images/logo.png');

    return (
      <View style={styles.container}>
        <StatusBarView />
        <DrawerHeader style={styles.header} logo={logo} />
        <ScrollView style={styles.content}>
          {items.map((item: DrawerItemProps) => {
            return <DrawerItem key={item.name} {...item} />;
          })}
        </ScrollView>
        <DrawerFooter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 10
  } as ViewStyle,
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  } as ViewStyle,
  container: {
    flex: 1
  } as ViewStyle,
  content: {
    flex: 1
  } as ScrollViewStyle
});
