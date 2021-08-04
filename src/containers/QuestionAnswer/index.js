import React from "react";

import "../../assets/style/styleQuestionAnswer.css";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: "bold",
    },
    test:{
        background: "#3356a6",
        color: "#f5f5f5",
    },
  }));

const QuestionAnswer = () =>{
    
    const classes = useStyles();

    return (
        <div>
            <div className="content">
                <h1>Information</h1>

                {/* Partie qui permet de gérer les différents accordion */}
                <h2 className="faqTitle">Les questions les plus fréquentes: </h2>
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography className={classes.heading}>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography className={classes.heading}>Accordion 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography className={classes.heading}>Accordion 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                {/* Partie qui gère les documents utiles */}
                <h2 className="faqTitle">Documents pratiques:</h2>

                {/* Bloc permettant de gérer la grid des notes */}
                <h2 className="faqTitle">Notes d'informations:</h2>
                <div className="faqGridCard">
                    <div className="faqCard">
                        <div className="faqBox">
                            <div className="faqContentCard">
                                <h2>Conhexa</h2>
                                <h3>Mutuelle</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            </div>
                        </div>
                    </div>
                    <div className="faqCard">
                        <div className="faqBox">
                            <div className="faqContentCard">
                                <h2>Conhexa</h2>
                                <h3>Compléments retraite</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="faqCard">
                        <div className="faqBox">
                            <div className="faqContentCard">
                                <h2>Conhexa</h2>
                                <h3>Compléments retraite</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="faqCard">
                        <div className="faqBox">
                            <div className="faqContentCard">
                                <h2>Conhexa</h2>
                                <h3>Compléments retraite</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="faqCard">
                        <div className="faqBox">
                            <div className="faqContentCard">
                                <h2>Conhexa</h2>
                                <h3>Compléments retraite</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionAnswer;