import { container, title, grayColor } from "assets/jss/nextjs-material-kit.js";

const searchBarHeader = (theme) => ({
  searchInput: {
    color: '#545454',
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  formControl: {
    [theme.breakpoints.down("md")]: {
      margin: "10px 0 0 15px !important",
      color: grayColor
    },
    margin: "10px 0 0 0 !important",
    paddingTop: "0"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  flex: {
    flex: 1
  },
  flexEvenly: {
    justifyContent: 'space-evenly'
  },
  fl80: {
    flex: '80', display: 'inline-flex'
  },
  searchBtn: {display: 'inline-flex'},
  searchBarWrapper: {
    display:'none'
  },
  '@media (min-width: 1024px)': {
    searchBarWrapper: {
      display: 'inline-flex'
    }
  }
});

export default searchBarHeader;
