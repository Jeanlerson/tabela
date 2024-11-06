export type User = {
    id: string;
    tarefa: string;
    custo: string;
    datalimite: string;
    state: string;
    // outros campos...
  };
  
  export const fakeData: User[] = [
    {
      id: '1',
      tarefa: 'John',
      custo: 'Doe',
      datalimite: 'john.doe@example.com',
      state: 'Ceará',
    },
    {
      id: '2',
      tarefa: 'Jane',
      custo: 'Smith',
      datalimite: 'jane.smith@example.com',
      state: 'Rio de Janeiro',
    },
    {
      id: '3',
      tarefa: 'Janick',
      custo: 'Willms',
      datalimite: 'Delfina12@gmail.com',
      state: 'São Paulo',
    }
  ];
  
  export const usStates = [
    'Ceará',
    'São Paulo',
    'Rio de Janeiro'
  ];