import gql from "graphql-tag";
const QUESTION_AND_ANSWER_QUERY = gql`
    query QaA{
        questionsAndAnswers{
            id 
            question 
            answer 
            slug
            category_qa_a{
                page
            }
    }
  }
`;
export default QUESTION_AND_ANSWER_QUERY;