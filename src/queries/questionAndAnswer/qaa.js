import gql from "graphql-tag";
const QUESTION_AND_ANSWER_QUERY = gql`
    query QaA{
        questionsAndAnswers{
            id 
            question 
            answer 
            slug
    }
  }
`;
export default QUESTION_AND_ANSWER_QUERY;