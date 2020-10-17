import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from './Title'
import MyContext from 'context/withContext'
import { Skeleton } from '@material-ui/lab';


const SkeletonCard: React.FC = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div>
            <Grid>
                <Paper className={fixedHeightPaper}>
                    <Skeleton>
                        <Title>Valor atual</Title>
                    </Skeleton>
                    <Skeleton>
                        <Typography component="p" variant="h4" >0000</Typography>
                    </Skeleton>
                    <Skeleton>
                        <div>
                            <Link color="primary" href="#">
                                Valor recebido
                            </Link>
                            <Typography component="p" variant="h6" >0000</Typography>
                        </div>
                    </Skeleton>
                    <Skeleton>
                        <div>
                            <Link color="primary" href="#">
                                Taxa
                            </Link>
                            <Typography component="p" variant="h6" >0000</Typography>
                        </div>
                    </Skeleton>
                </Paper>
            </Grid>
        </div>
    )
}



const Card: React.FC = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [contextState, setContextState] = useContext(MyContext) as [Data, Function];

    return (
        <div>
            {contextState?.loading ? <SkeletonCard /> : (
                <Grid>
                    <Paper className={fixedHeightPaper}>
                        <Title>Valor atual</Title>
                        <Typography component="p" variant="h4">
                            {contextState?.amountTaken}
                        </Typography>
                        <div>
                            <Link color="primary" href="#">
                                Valor recebido
                        </Link>
                            <Typography component="p" variant="h6">
                                {contextState?.amountTaken + contextState?.totalAmountInTaxes}
                            </Typography>
                        </div>
                        <div>
                            <Link color="primary" href="#">
                                Taxa
                        </Link>
                            <Typography component="p" variant="h6">
                                {contextState?.totalAmountInTaxes}
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
            )}
        </div>
    )
}

export default Card;

const useStyles = makeStyles((theme) => ({
    depositContext: {
        flex: 1,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        background: 'white',
        height: 240,
        margin: '0 30px',

    },
    fixedHeight: {
        height: 240,
    },
}));