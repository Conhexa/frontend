import React from "react";

import "../../assets/style/styleQuestionAnswer.css";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Query from "../../components/Query";
import MEMO_QUERY from "../../queries/memo/memo.js";
import QUESTION_AND_ANSWER_QUERY from "../../queries/questionAndAnswer/qaa.js"
import INFFORMATION_DOCUMENT_QUERY from "../../queries/informationDocument/informationDocument.js";

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

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
                    <Query query={QUESTION_AND_ANSWER_QUERY} id={null}>
                        {({ data: { questionsAndAnswers } }) => {
                            return (
                                <div>{questionsAndAnswers.map((faq, i) => {
                                    return (
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                <Typography className={classes.heading}>{faq.question}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    {faq.answer}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                    })}
                                </div>
                        )}}
                    </Query>
                </div>

                {/* Partie qui gère les documents utiles */}
                <h2 className="faqTitle">Documents pratiques:</h2>

                    <Query query={INFFORMATION_DOCUMENT_QUERY} id={null}>
                        {({ data: { informationDocuments } }) => {
                            return (
                                <div>{informationDocuments.map((document, i) => {
                                    return (
                                        <div>
                                            <a href={"http://localhost:1337"+document.file.url}><PictureAsPdfIcon /></a>
                                            <p>{document.title}</p>
                                        </div>
                                    );
                                    })}
                                </div>
                        )}}
                    </Query>

                {/* Bloc permettant de gérer la grid des notes */}
                <h2 className="faqTitle">Notes d'informations:</h2>
                    <Query query={MEMO_QUERY} id={null}>
                        {({ data: { memos } }) => {
                            return (
                                <div className="faqGridCard">{memos.map((memo, i) => {
                                    return (
                                        <div className="faqCard">
                                            <div className="faqBox">
                                                <div className="faqContentCard">
                                                    <h2>Conhexa</h2>
                                                    <h3>{memo.title}</h3>
                                                    <p>{memo.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                    })}
                                </div>
                        )}}
                    </Query>
            </div>
        </div>
    )
}

export default QuestionAnswer;