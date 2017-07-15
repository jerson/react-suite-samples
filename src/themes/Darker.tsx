import {
  default as ThemeBuilder,
  ThemeDefaultVars,
  ThemeVars
} from 'react-suite/build/modules/theme/ThemeBuilder';

const TinyColor = require('tinycolor2');

let toneColor = '#01060d';
let primaryColor = '#05ffee';
let darkenPrimary = TinyColor(primaryColor).darken(7).toRgbString();

let defaults: ThemeDefaultVars = {
  darkMode: true,
  defaultColor: '#444',
  primaryColor,
  infoColor: darkenPrimary,
  successColor: darkenPrimary,
  dangerColor: '#ff312e',
  warningColor: '#f48024',

  textShadowColor: 'rgba(0,0,0,0.7)',
  shadowColor: '#000',

  textColor: '#fff',
  textSecondaryColor: TinyColor(toneColor)
    .lighten(90)
    .setAlpha(0.5)
    .toRgbString(),

  textActiveColor: '#fff',
  textActiveSecondaryColor: 'rgba(255,255,255,0.8)',

  backgroundColor: TinyColor(toneColor).lighten(3).toRgbString(),
  backgroundSecondaryColor: TinyColor(toneColor).lighten(5).toRgbString(),

  backgroundDarkenColor: TinyColor(toneColor).darken(3).toRgbString(),

  borderColor: TinyColor(toneColor).lighten(5).toRgbString(),
  borderSecondaryColor: TinyColor(toneColor).lighten(3).toRgbString()
};
let theme: ThemeVars = ThemeBuilder.build(defaults);
export default theme;
