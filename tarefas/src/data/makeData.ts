export type User = {
    id: number;
    tarefa: string;
    custo: number;
    datalimite: number;
    // outros campos...
  };
  
  export const fakeData: User[] = [
    {
      id: 1,
      tarefa: 'Varrer',
      custo: 10,
      datalimite: 2024
    }
  ];