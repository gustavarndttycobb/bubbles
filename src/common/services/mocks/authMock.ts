export const loginMock = async (email: string, senha: string): Promise<{ token: string }> => {
  if (email === 'teste@teste.com' && senha === '123') {
    return { token: 'mock-token-abc123' };
  } else {
    throw new Error('Credenciais inválidas (mock)');
  }
};
