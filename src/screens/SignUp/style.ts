import {TextStyle, ViewStyle} from 'react-native';
import {ThemeTypes} from 'theme/types';

export interface StyleProps {
  screen: ViewStyle;
  all: ViewStyle;
  crossButton: TextStyle;
}

const styles = ({
  colors: {grey4, grey1},
  scaleMethods: {scale, scaleVertical: verticalScale},
}: ThemeTypes): StyleProps => ({
  screen: {
    paddingTop: scale(25),
    paddingBottom: verticalScale(24),
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: grey4,
  },
  all: {
    marginTop: verticalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  crossButton: {
    color: grey1,
    margin: scale(16),
  },
});

export default styles;
