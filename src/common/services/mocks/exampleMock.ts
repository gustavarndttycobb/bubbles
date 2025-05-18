export interface IExampleMock {
    id: number;
    label: string;

};

export const getExampleMock = async (): Promise<IExampleMock[]> => {
    return [
        { id: 1, label: 'label1' },
        { id: 2, label: 'label2' },
    ];
};
