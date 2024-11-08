export type User = {
    id: number;
    tarefa: string;
    custo: number;
    datalimite: number;
    state: string;
    // outros campos...
  };
  
  export const fakeData: User[] = [
    {
      id: 1,
      tarefa: 'John',
      custo: 10,
      datalimite: 2021,
      state: 'Ceará',
    },
    {
      id: 2,
      tarefa: 'Jane',
      custo: 6,
      datalimite: 2024,
      state: 'Rio de Janeiro',
    },
    {
      id: 3,
      tarefa: 'Janick',
      custo: 9,
      datalimite: 2018,
      state: 'São Paulo',
    }
  ];
  
  export const usStates = [
    'Ceará',
    'São Paulo',
    'Rio de Janeiro'
  ];