import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    

    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
   
  
}));

export default function MainPage() {
    const classes = useStyles();
    const navigate = useNavigate();

    const nextPage = (page) => {
        navigate("/projact-commath/" + page);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            

            <Container 
            maxWidth="sm" 
            component="main" 
            className={classes.heroContent}>
              
            </Container>

            <Container maxWidth="md" component="main">
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="บทที่ 1"
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                                
                            />
                            <CardContent>
                                <Typography 
                                component="h5" 
                                variant="h5" 
                                color="textPrimary" 
                                align="center">
                                    Basic Computing
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                fullWidth 
                                variant="outlined" 
                                color="secondary" 
                                onClick={() => { nextPage("unit1") }}>

                                    เลือก
                                    
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="บทที่ 2"
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                                
                            />
                            <CardContent>
                                <Typography 
                                component="h5" 
                                variant="h5" 
                                color="textPrimary" 
                                align="center" >
                                    Linear Equations
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                fullWidth 
                                variant="outlined" 
                                color="secondary" 
                                onClick={() => { nextPage("unit2") }}>

                                    เลือก

                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="บทที่ 3"
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                               
                            />
                            <CardContent>
                                <Typography 
                                component="h5" 
                                variant="h5" 
                                color="textPrimary" 
                                align="center">
                                    Interpolation
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                fullWidth 
                                variant="outlined" 
                                color="secondary" 
                                onClick={() => { nextPage("unit3") }}>

                                    เลือก

                                 </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="บทที่ 4"
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                                
                            />
                            <CardContent>
                                <Typography 
                                component="h5" 
                                variant="h5" 
                                color="textPrimary" 
                                align="center">
                                    Differentiation
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button  
                                fullWidth 
                                variant="outlined" 
                                color="secondary" 
                                onClick={() => { nextPage("unit4") }}>

                                    เลือก

                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="บทที่ 5"
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                               
                            />
                            <CardContent>
                                <Typography 
                                component="h5" 
                                variant="h5" 
                                color="textPrimary" 
                                align="center">
                                    Integration
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                fullWidth 
                                variant="outlined" 
                                color="secondary" 
                                onClick={() => { nextPage("unit5") }}>

                                    เลือก

                               </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title="บทที่ 6"
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                                
                            />
                            <CardContent>
                                <Typography 
                                component="h5" 
                                variant="h5" 
                                color="textPrimary" 
                                align="center" >
                                    Root Finding
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                fullWidth 
                                variant="outlined" 
                                color="secondary" 
                                onClick={() => { nextPage("unit6") }}>

                                    เลือก

                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
          
        </React.Fragment>
    );
}