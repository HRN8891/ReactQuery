import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {ThemeTypes} from 'theme/types';

export interface StyleProps {
  screen: ViewStyle;
  close: ViewStyle;
  header: ViewStyle;
  all: ViewStyle;
  image: ImageStyle;
  content: ImageStyle;
  input: TextStyle;
  bottomLabelStyle: TextStyle;
  signUpText: TextStyle;
  textRow: ViewStyle;
  footer: ViewStyle;
  buttonContainer: ViewStyle;
}

const styles = ({
  colors: {grey4, grey3, grey2, blue1},
  scaleMethods: {scale, scaleVertical},
}: ThemeTypes): StyleProps => ({
  screen: {
    paddingTop: scaleVertical(25),
    paddingBottom: scaleVertical(24),
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: grey4,
  },
  close: {
    position: 'absolute',
    top: scale(25),
    left: scale(16),
    zIndex: 1,
  },
  header: {
    marginTop: scaleVertical(75),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: scaleVertical(100),
    resizeMode: 'contain',
  },
  all: {
    marginTop: scaleVertical(24),
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'space-between',
    paddingHorizontal: scale(8),
    paddingVertical: scaleVertical(12),
  },
  input: {
    borderWidth: 0.5,
    borderColor: grey3,
    borderRadius: scale(50),
    padding: scale(18),
    marginVertical: scaleVertical(6),
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleVertical(28),
    paddingHorizontal: scale(8),
    marginBottom: scaleVertical(16),
  },
  textRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLabelStyle: {
    color: grey2,
    fontSize: scale(18),
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  signUpText: {
    color: blue1,
    marginLeft: scale(5),
  },
});

export default styles;
