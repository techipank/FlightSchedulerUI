import React, { useState } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { fetchPost } from '../../actions/postsActions';
import { RootState } from '../../store';
import FlightTable from './FlightTable';
import Map from './Map';

const useStyles = makeStyles(({ spacing }: Theme) =>
    createStyles({
        overrides: {},
        pageStyle: {
            marginTop: '5%'
        },
        textField: {
            marginTop: '2%'
        }
    })
);

const SearchFlight = () => {
    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [latitude, setLatitude] = useState(59.95);
    const [longitude, setLongitude] = useState(30.33);
    const flightsStore: any = useSelector((state: RootState) => state.posts);
    const [flights, setFlights] = useState();
    const center = { lat: 59.95, lng: 30.33 };
    const classes = useStyles();
    const dispatch = useDispatch();
    const getFlights = () => {
        console.log('Calling');
        dispatch(fetchPost(departure, arrival));
    };

    React.useEffect(() => {
        console.log('useEffect');
        setFlights(flightsStore.items);
    }, [flightsStore]);
    console.log('items=>', flights);
    return (
        <div className={classes.pageStyle}>
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item>
                        <Typography variant="h4">From Airport</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.textField}
                            id="filled-multiline-flexible"
                            label="Departure"
                            value={departure}
                            onChange={e => setDeparture(e.target.value)}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item>
                        <Typography variant="h4">To Airport</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.textField}
                            id="filled-multiline-flexible"
                            label="Departure"
                            value={arrival}
                            onChange={e => setArrival(e.target.value)}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => getFlights()}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            {flights && flights.length > 0 && <FlightTable flights={flights} />}
            <Map
                sourceCity={departure}
                destinationCity={departure}
                connectingCity={['DXB']}
            />
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        posts: _.values(state.posts.items)
    };
};

export default connect(
    mapStateToProps,
    { fetchPost }
)(SearchFlight);
