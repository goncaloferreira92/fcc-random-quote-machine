import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
    <Card>
        <CardContent>
            <Typography id="text">
                { selectedQuote.quote } — <span id="author"> { selectedQuote.author } </span>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={ assignNewQuoteIndex } id="new-quote">Next Quote</Button>
            <IconButton
                id="tweet-quote"
                target="_blank"
                href={encodeURI(`https://twitter.com/intent/tweet?text="${selectedQuote.quote}" — ${selectedQuote.author}&hastags=goncaloferreira92`)}
            >
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
)


export default QuoteMachine