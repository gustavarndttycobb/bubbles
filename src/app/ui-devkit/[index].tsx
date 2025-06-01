'use client';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MyButtonKit from './kits/MyButton.kit';

const labs = [MyButtonKit];

export default function DevKitDetail() {
    const { index } = useLocalSearchParams();
    const router = useRouter();
    const labIndex = Number(index);
    const lab = labs[labIndex];

    const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
    const selectedExample = lab?.examples[selectedExampleIndex];
    const ExampleComponent = selectedExample?.component;
    const [currentProps, setCurrentProps] = useState(selectedExample?.initialProps || {});

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollRef = useRef<ScrollView>(null);

    useEffect(() => {
        setCurrentProps(selectedExample?.initialProps || {});
    }, [selectedExample]);

    if (!lab) return <Text>Componente não encontrado</Text>;

    const onScroll = (event: any) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        setCanScrollLeft(contentOffset.x > 0);
        setCanScrollRight(contentOffset.x + layoutMeasurement.width < contentSize.width);
    };

    return (
        <View className="flex-1 bg-white">
            {/* HEADER */}
            <View className="h-10 flex-row items-center p-4  bg-white ">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="p-2 mr-2"
                    accessibilityLabel="Voltar"
                >
                    <Ionicons name="chevron-back" size={20} color="black" />
                </TouchableOpacity>
                <Text className="text-sm font-bold">{lab.title}</Text>
            </View>

            <ScrollView className="flex-1 p-4">
                <View className="flex-row items-center mb-4 justify-center  rounded-md">
                    <Text className="text-lg font-bold mb-2">
                        {selectedExample?.title}
                    </Text>
                </View>

                {lab.description && <Text className="text-gray-500 mb-4">{lab.description}</Text>}

                <View className="h-full p-4 border border-gray-300 rounded bg-white mb-6 flex flex-col">
                    <Text className="text-lg font-bold mb-2">Canvas :</Text>
                    {ExampleComponent && <ExampleComponent {...currentProps} />}
                </View>

                <View className='bg-blue-300/50 p-1 rounded-md shadow '>
                    <Text className="text-lg font-bold mb-2">Props</Text>
                    {selectedExample?.controls &&
                        Object.entries(selectedExample.controls).map(([propName, control]) => (
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
                        ))}
                </View>
            </ScrollView>

            {/* FOOTER */}
            <View className="relative border-t border-gray-200 p-3 bg-gray-50 flex-row items-center">
                {/* Ícone seta esquerda */}
                {canScrollLeft && (
                    <View className="absolute left-0 top-0 bottom-0 justify-center px-1 z-10">
                        <Ionicons name="chevron-back" size={24} color="rgba(0,0,0,0.3)" />
                    </View>
                )}

                <ScrollView
                    ref={scrollRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 8, paddingHorizontal: 30 }}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                >
                    {lab.examples.map((example, idx) => {
                        const isSelected = selectedExampleIndex === idx;
                        return (
                            <Pressable
                                key={idx}
                                onPress={() => setSelectedExampleIndex(idx)}
                                className={`px-3 py-2 rounded ${isSelected ? 'bg-blue-600' : ''}`}
                            >
                                <Text className={`text-sm ${isSelected ? 'text-white' : 'text-blue-600'}`}>
                                    {example.title}
                                </Text>
                            </Pressable>
                        );
                    })}
                </ScrollView>

                {/* Ícone seta direita */}
                {canScrollRight && (
                    <View className="absolute right-0 top-0 bottom-0 justify-center px-1 z-10">
                        <Ionicons name="chevron-forward" size={24} color="rgba(0,0,0,0.3)" />
                    </View>
                )}
            </View>
        </View>
    );
}
