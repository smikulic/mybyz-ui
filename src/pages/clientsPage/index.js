import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import ClientsQuery from './clientsQuery';

const ClientsPageWrapper = styled.div`
  padding: 2rem;
`

const ClientRow = styled.div`
  position: relative;
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 1rem;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #eee;
  box-shadow: 0px 10px 16px -8px #eee;

  &:hover {
    border: 1px solid e1e1e1;
    box-shadow: 0px 10px 16px -2px #e1e1e1;
    width: 102%;
    margin-left: -1%;
  }
`

function ClientsPage() {
  const { loading, error, data } = useQuery(ClientsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)

  return (
    <ClientsPageWrapper>
      My Clients
      {data.clients.map((client) => 
        <ClientRow key={client.id}>
          {client.name}{' '}
          {client.totalIncome}
        </ClientRow>
      )}
    </ClientsPageWrapper>
  );
}

export default ClientsPage;
