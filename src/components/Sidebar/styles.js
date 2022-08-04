import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10%, 0%',
  },
  image: {
    width: '80%',
    paddingLeft: '13%',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  links: {
    color: theme.palette.primary,
    textDecoration: 'none',
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));
