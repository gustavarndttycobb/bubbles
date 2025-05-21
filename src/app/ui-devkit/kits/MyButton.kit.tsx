import MyButton from "../components/MyButton";

export default {
  title: 'MyButton',
  description: 'Botão customizável com variantes.',
  examples: [
    {
      title: 'Botão padrão',
      component: MyButton,
      initialProps: {
        label: 'Clique aqui',
        variant: 'primary',
        disabled: false,
      } as const,
      controls: {
        label: { type: 'text' },
        variant: {
          type: 'select',
          options: ['primary', 'secondary', 'ghost'] as const,
        },
        disabled: { type: 'boolean' },
      },
    },
  ],
};
