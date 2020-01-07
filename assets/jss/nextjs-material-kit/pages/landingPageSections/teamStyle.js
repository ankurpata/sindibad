import { cardTitle, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  boxShadow: {
    textAlign: "center",
    'box-shadow': '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    'border-radius': '6px',
    'border-radius': '6px',
    'padding': '40px 0px'
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color:"#606d7a",
    fontSize:'34px'
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  mp0: { margin: 0, padding: 0 },
  inputPrice: {
    'border-radius': '5px',
    background: 'white',
    margin: '0',
    padding: '0'
  },
  w100: { width: '100%' }, 
  '@media (min-width: 1024px)': {
    priceBox: { paddingRight: '2px' },
    dateBox: { paddingLeft: '2px', paddingRight: '2px' },
  },
  '@media (max-width: 960px)': {
    searchBtnPckg: {
      width: '100%',
      margin: '0px 15px'
    }
  },
  calendarWrap: {
    'display': 'grid',
    'grid-auto-columns': '1fr',
    'grid-auto-flow': 'column'
  },
  dateFrom: { paddingRight: '1px' },
  dateTo: { paddingLeft: '2px' },
  searchBtnBox: {
    display: 'flex',
    padding: '0px'
  },
  searchBtnPckg: {
    'justify-content': 'flex-start',
    'margin-top': '0px',
    'font-weight': 'bold',
    'font-size': '20px',
    'text-transform': 'none'
  }
};

export default teamStyle;
