import React, { useEffect, useState } from 'react';
import {
    Pressable,
    ScrollView,
    Switch,
    Text,
    TextInput,
    View
} from 'react-native';
import MyButtonKit from './kits/MyButton.kit';

const labs = [MyButtonKit];

export default function DevKitScreen() {

    const [selectedLabIndex, setSelectedLabIndex] = useState(0);
    const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);

    const selectedLab = labs[selectedLabIndex];
    const selectedExample = selectedLab.examples[selectedExampleIndex];
    const ExampleComponent = selectedExample.component;

    const [currentProps, setCurrentProps] = useState(
        selectedExample.initialProps || {}
    );

    // Atualiza props quando muda o exemplo
    useEffect(() => {
        setCurrentProps(selectedExample.initialProps || {});
    }, [selectedExample]);

    return (
        <View className="flex-1 bg-white">
            {/* Header: Componentes */}
            <View className="border-b border-gray-300 bg-gray-100">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                >
                    {labs.map((lab, index) => {
                        const isSelected = index === selectedLabIndex;
                        return (
                            <Pressable
                                key={index}
                                onPress={() => {
                                    setSelectedLabIndex(index);
                                    setSelectedExampleIndex(0);
                                }}
                                className={`py-3 px-5 mr-3 rounded-b ${isSelected
                                    ? 'bg-white border-b-2 border-blue-600'
                                    : 'bg-gray-200'
                                    }`}
                            >
                                <Text
                                    className={`font-semibold ${isSelected ? 'text-blue-600' : 'text-gray-700'
                                        }`}
                                >
                                    {lab.title}
                                </Text>
                            </Pressable>
                        );
                    })}
                </ScrollView>
            </View>

            {/* Exemplos do componente */}
            <View className="border-b border-gray-300 bg-gray-50">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                >
                    {selectedLab.examples.map((example, index) => {
                        const isSelected = index === selectedExampleIndex;
                        return (
                            <Pressable
                                key={index}
                                onPress={() => setSelectedExampleIndex(index)}
                                className={`py-2 px-4 mr-3 rounded ${isSelected ? 'bg-blue-600' : 'bg-gray-200'
                                    }`}
                            >
                                <Text
                                    className={`font-medium ${isSelected ? 'text-white' : 'text-gray-800'
                                        }`}
                                >
                                    {example.title}
                                </Text>
                            </Pressable>
                        );
                    })}
                </ScrollView>
            </View>

            {/* Conteúdo principal */}
            <ScrollView className="flex-1 p-4">
                <Text className="text-2xl font-bold mb-2">
                    {selectedLab.title} - {selectedExample.title}
                </Text>

                {selectedLab.description && (
                    <Text className="text-gray-500 mb-4">{selectedLab.description}</Text>
                )}

                {/* Preview */}
                <View className="p-4 border border-gray-300 rounded bg-white mb-6">
                    <ExampleComponent {...currentProps} />
                </View>

                {/* Controles */}
                <View>
                    <Text className="text-lg font-bold mb-2">Props</Text>
                    {selectedExample.controls &&
                        Object.entries(selectedExample.controls).map(
                            ([propName, control]) => (
                                <View key={propName} className="mb-4">
                                    <Text className="font-medium mb-1">{propName}</Text>

                                    {control.type === 'text' && (
                                        <TextInput
                                            className="border rounded px-2 py-1"
                                            value={(currentProps as Record<string, any>)[propName]}
                                            onChangeText={(value) =>
                                                setCurrentProps((prev) => ({
                                                    ...prev,
                                                    [propName]: value,
                                                }))
                                            }
                                        />
                                    )}

                                    {control.type === 'boolean' && (
                                        <Switch
                                            value={(currentProps as Record<string, any>)[propName]}
                                            onValueChange={(value) =>
                                                setCurrentProps((prev) => ({
                                                    ...prev,
                                                    [propName]: value,
                                                }))
                                            }
                                        />
                                    )}

                                    {control.type === 'select' && 'options' in control && (
                                        <View className="flex-row flex-wrap gap-2 mt-1">
                                            {control.options.map((opt: string) => (
                                                <Pressable
                                                    key={opt}
                                                    onPress={() =>
                                                        setCurrentProps((prev) => ({
                                                            ...prev,
                                                            [propName]: opt,
                                                        }))
                                                    }
                                                    className={`px-3 py-1 rounded border ${(currentProps as Record<string, any>)[propName] === opt
                                                        ? 'bg-blue-600 border-blue-600'
                                                        : 'bg-white border-gray-300'
                                                        }`}
                                                >
                                                    <Text
                                                        className={`${(currentProps as Record<string, any>)[propName] === opt
                                                            ? 'text-white'
                                                            : 'text-gray-800'
                                                            }`}
                                                    >
                                                        {opt}
                                                    </Text>
                                                </Pressable>
                                            ))}
                                        </View>
                                    )}
                                </View>
                            )
                        )}
                </View>
            </ScrollView>
        </View>
    );
}
