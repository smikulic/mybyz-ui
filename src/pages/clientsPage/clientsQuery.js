import { gql } from "apollo-boost";

const ClientsQuery = gql`
	query {
    clients {
      id
      name
      description
      status
      user_id
      totalIncome
      clientIncomes {
        id 
        value
        description
        date
        client_id
        user_id
      }
      created_date
      modified_date
    }
  }
`

export default ClientsQuery;