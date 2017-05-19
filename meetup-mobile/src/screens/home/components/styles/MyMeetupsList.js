import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: { },
  title: { },
  contentContainer: {},
  meetupCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: '#f73859',
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  meetupCardTitle: {
    position: 'absolute',
    top: '2%',
    left: '2.5%',
    color: '$whiteColor',
  },
  meetupCardBottomContainer: {},
  meetupCardMetaName: {},
  meetupCardMetaDate: {},
});

export default styles;
