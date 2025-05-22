import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = {
    label: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    disabled?: boolean;
};

export default function MyButton({ label, variant = 'primary', disabled = false }: Props) {
    const base = 'px-4 py-2 rounded items-center';
    const variantClass = {
        primary: 'bg-blue-600 text-white',
        secondary: 'bg-gray-300 text-black',
        ghost: 'bg-transparent border border-gray-400 text-gray-800',
    }[variant];

    return (
        <Pressable
            className={`${base} ${variantClass} ${disabled ? 'opacity-50' : ''}`}
            disabled={disabled}
        >
            <Text>{label}</Text>
        </Pressable>
    );
}
