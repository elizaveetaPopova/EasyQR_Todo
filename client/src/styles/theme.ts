import lightBackgroundImage from '../images/bg-desktop-light.svg';
import darkBackgroundImage from '../images/bg-desktop-dark.svg';
import lightToggleIcon from '../images/icon-sun.svg';
import darkToggleIcon from '../images/icon-moon.svg';

export const lightTheme = {
  background: '#FAFAFA',
  logo: '#FFFFFF',
  bgList: '#FFFFFF',
  footerText: '#9495A5',
  focuseFooterText: '#3A7CFD',

  backroundImage: lightBackgroundImage,
  toggleIcon: darkToggleIcon,
  horizontalPadding: '0 450px',
  listHorizontalPadding: '0 24px',
};

export const darkTheme = {
  background: '#171823',
  logo: '#FFFFFF',
  bgList: '#25273D',
  footerText: '#5B5E7E',
  focuseFooterText: '#3A7CFD',

  backroundImage: darkBackgroundImage,
  toggleIcon: lightToggleIcon,
  horizontalPadding: '0 450px',
  listHorizontalPadding: '0 24px',
};
