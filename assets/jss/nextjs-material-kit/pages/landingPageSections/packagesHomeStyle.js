import { title } from "assets/jss/nextjs-material-kit.js";

const packagesHomeStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  justifyContent: {
    'text-align': 'left'
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#606d7a",
    fontSize: '26px',
    fontWeight: '700'
  },
  packageInfo: {
    'padding-left': '1em',
  },
  packgeDescription: {
    fontWeight: '700',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    marginRight: '1em',
    fontWeight: '400',
    fontSize: '15px',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '3'
  },
  packgeContainer: {
    border: '1px solid #cccccc',
    'box-shadow': '0 8px 5px -5px rgba(0, 0, 0, 0.2), 0 6px 10px 5px rgba(0, 0, 0, 0.12), 0 8px 5px -5px rgba(0, 0, 0, 0.2)',
    'border-radius': '6px',
    'border-radius': '6px',
    marginBottom: '30px'
    // 'background-image': `url(https://amp.thenational.ae/image/policy:1.131662:1499274996/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8)`
  },
  badgeViewMore: {
    padding: '0.5em 0.8em 0.5em 0.2em', margin: '0.5em', width: '40px',
    height: '40px', borderRadius: '20px', fontSize: '18px', fontWeight: 'bold', position: 'absolute', top: '40px', 'text-align': 'right', right: '0'
  },
  transbox: {
    backgroundColor: '#ffffff',
    marginTop: '10px'
    // 'opacity': '0.6',
    // 'filter': 'alpha(opacity=60)' /* For IE8 and earlier */
  },
  '@media (max-width: 768px)': {
    packgeContainer: {
      margin: '0px',
      marginBottom: '20px'
    }
  },
  '@media (min-width: 1024px)': {
    pl0: {
      paddingLeft: '0px'
    },
    aboutNInfoContainer: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    aboutChild: {
      flex: '1'
    }
  },
  aboutHeader: {
    width: '100%',
    color: '#606d7a', 
    fontWeight: 'bold',
    padding: '0px 0px',
    fontSize: '20px',
    borderRadius: '15px 15px 0 0',
    marginTop: '10px', 
    fontSize: '26px',
  },
  'myClass': { 'margin-bottom': '20px' },
  packageMetaDesc: { color: '#3C4858', display: 'flex', padding: '20px 10px 20px 10px', },
  priceBadge: {
    fontSize: '16px',
    padding: '10px',
    'border-radius': '5px',
    display: 'flex',
    'flex-direction': 'column',
    'text-transform': 'none',
    '& > div': {
      margin: '2px'
    },
    '& > div:nth-child(2)': {
      fontSize: '14px'
    }
  }

};

export default packagesHomeStyle;
