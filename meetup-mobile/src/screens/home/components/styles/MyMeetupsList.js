import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserrat',
  },
  contentContainer: {
    flex: 1,

  },
  meetupCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: '$redColor',
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
    fontFamily: 'montserratBold',
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    paddingHorizontal: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat',
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight',
  },
});

export default styles;
