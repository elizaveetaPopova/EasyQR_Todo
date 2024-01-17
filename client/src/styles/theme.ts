import lightBackgroundImage from '../images/bg-desktop-light.svg';
import darkBackgroundImage from '../images/bg-desktop-dark.svg';
import lightToggleIcon from '../images/icon-sun.svg';
import darkToggleIcon from '../images/icon-moon.svg';
import checkbox from '../images/checkbox.svg';
import checkedCheckbox from '../images/checkbox-checked.svg';
import activeCheckbox from '../images/checkbox-active.svg';
import closeIcon from '../images/icon-cross.svg';

export const lightTheme = {
  background: '#FAFAFA',
  logo: '#FFFFFF',
  bgList: '#FFFFFF',
  footerText: '#9495A5',
  focuseFooterText: '#3A7CFD',
  text: '#494C6B',
  border: '#E3E4F1',
  strikethrough: '#D1D2DA',

  backroundImage: lightBackgroundImage,
  toggleIcon: darkToggleIcon,
  checkbox: checkbox,
  checkedCheckbox: checkedCheckbox,
  activeCheckbox: activeCheckbox,
  closeIcon: closeIcon,

  horizontalPadding: '0 450px',
  listHorizontalPadding: '0 24px',
  listItemPadding: '20px 19px 24px 24px',

  primaryFS: '18px',
  secondaryFS: '14px',
};

export const darkTheme = {
  background: '#171823',
  logo: '#FFFFFF',
  bgList: '#25273D',
  footerText: '#5B5E7E',
  focuseFooterText: '#3A7CFD',
  text: '#494C6B',
  border: '#393A4B',
  strikethrough: '#4D5067',

  backroundImage: darkBackgroundImage,
  toggleIcon: lightToggleIcon,
  checkbox: checkbox,
  checkedCheckbox: checkedCheckbox,
  activeCheckbox: activeCheckbox,
  closeIcon: closeIcon,

  horizontalPadding: '0 450px',
  listHorizontalPadding: '0 24px',
  listItemPadding: '20px 19px 24px 24px',

  primaryFS: '18px',
  secondaryFS: '14px',
};
