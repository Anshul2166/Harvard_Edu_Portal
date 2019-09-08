import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		maxWidth: 305,
		marginLeft: '6%',
		marginTop: 40,
	},
	media: {
		height: 140,
	},
	cardContent: {
		height: 150,
	},
});

export default function DataCard(props) {
	const classes = useStyles();
	const { title, description, image_location, id, applyForProject, openProjectPage } = props;
	console.log(description);
	let description_shortened = description.length < 40 ? description : description.substring(0, 150);
	console.log(description);

	return (
		<Card className={classes.card} onClick={() => openProjectPage(id)}>
			<CardActionArea>
				<CardMedia className={classes.media} image={image_location} title="Contemplative Reptile" />
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description_shortened}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary" onClick={()=>applyForProject(id)}>
					Apply
				</Button>
				<Button size="small" color="primary" onClick={()=>openProjectPage(id)}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
