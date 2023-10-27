import React from 'react';

const ClientList = ({ onSelectClient }) => {
  // Mock data for clients
  const mockClients = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'];

  return (
    <div className="list-group">
      {mockClients.map((client, index) => (
        <button 
          type="button" 
          key={index} 
          className="list-group-item list-group-item-action" 
          onClick={() => onSelectClient(client)}
        >
          {client}
        </button>
      ))}
    </div>
  );
};

export default ClientList;
