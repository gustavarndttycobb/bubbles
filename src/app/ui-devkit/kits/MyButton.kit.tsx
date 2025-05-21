import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default {
  title: 'MyButton',
  description: 'Um botão customizável com vários estilos.',
  examples: [
    {
      title: 'Primary Button',
      component: ({ label, disabled }: { label: string; disabled?: boolean }) => (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.primary,
            disabled && styles.disabled,
            pressed && !disabled && styles.pressed,
          ]}
          disabled={disabled}
        >
          <Text style={[styles.text, disabled && styles.textDisabled]}>{label}</Text>
        </Pressable>
      ),
      initialProps: {
        label: 'Clique aqui',
        disabled: false,
      },
      controls: {
        label: { type: 'text' },
        disabled: { type: 'boolean' },
      },
    },
    {
      title: 'Secondary Button',
      component: ({ label, disabled }: { label: string; disabled?: boolean }) => (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.secondary,
            disabled && styles.disabled,
            pressed && !disabled && styles.pressed,
          ]}
          disabled={disabled}
        >
          <Text style={[styles.text, styles.secondaryText, disabled && styles.textDisabled]}>{label}</Text>
        </Pressable>
      ),
      initialProps: {
        label: 'Cancelar',
        disabled: false,
      },
      controls: {
        label: { type: 'text' },
        disabled: { type: 'boolean' },
      },
    },
    {
      title: 'Disabled Button',
      component: ({ label }: { label: string }) => (
        <View style={[styles.button, styles.disabled]}>
          <Text style={[styles.text, styles.textDisabled]}>{label}</Text>
        </View>
      ),
      initialProps: {
        label: 'Indisponível',
      },
      controls: {
        label: { type: 'text' },
      },
    },
  ],
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#007bff',
  },
  secondary: {
    backgroundColor: '#e0e0e0',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    backgroundColor: '#b0b0b0',
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  secondaryText: {
    color: '#333',
  },
  textDisabled: {
    color: '#666',
  },
});
