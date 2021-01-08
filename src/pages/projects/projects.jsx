import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BlockRevealAnimation from 'react-block-reveal-animation';

import './projects.scss'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      backgroundColor: '#111822',
      '@media (max-width: 800px)': {
        maxWidth: '100%',
        marginBottom: '1rem'
      }
    },
    media: {
      height: 200,
    },
    button: {
        color: '#00c2cb',
    }
  });
  

const Projects = () => {
    const classes = useStyles();
    return (
        <div id='projects'>
            <BlockRevealAnimation duration={1.5} delay={2} color='#00c2cb'>
                <h1>Projects</h1>
            </BlockRevealAnimation>
            
            <div className="cards">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        className={classes.media}
                        image="http://free.pagepeeker.com/v2/thumbs.php?size=x&url=http%3A%2F%2Fsnow-live.herokuapp.com"
                        title="Snow Clothing"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Snow Clothing
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Built with  React, Redux and Firebase.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                            Visit Live URL
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        className={classes.media}
                        image="http://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Fsamynaj.github.io%2FDice-game"
                        title="Snow Clothing"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Dice Game
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Built with  Html, Css and Javascript.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                            Visit Live URL
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        className={classes.media}
                        image="http://free.pagepeeker.com/v2/thumbs.php?size=x&url=https%3A%2F%2Fsamynaj.github.io%2FBuycoins-table"
                        title="Snow Clothing"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Buycoins Crypto Table
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Built with  Htmal, Css and Javascript.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                            Visit Live URL
                        </Button>
                    </CardActions>
                </Card>
            </div>
            
        </div>
    )
}

export default Projects;