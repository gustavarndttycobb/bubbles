import env from '../utils/env';
import { getExampleMock, IExampleMock } from './mocks/exampleMock';

export async function fetchExample(): Promise<IExampleMock[]> {
    if (env.MOCKS_ENABLED) {
        return await getExampleMock();
    }
    const response = await fetch(`${env.API_URL}/example`);
    if (!response.ok) throw new Error('Error to fetch example');
    return await response.json();
}
