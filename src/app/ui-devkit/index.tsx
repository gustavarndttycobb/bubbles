'use client';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MyButtonKit from './kits/MyButton.kit';

const kits = [MyButtonKit];

export default function DevKitIndex() {
    const router = useRouter();

    return (
        <ScrollView className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold mb-4">UI Components</Text>
            <View className="flex-row flex-wrap gap-4">
                {kits.map((kit, index) => (
                    <TouchableOpacity
                        key={index}
                        className="w-32 h-32 bg-gray-100 rounded-lg items-center justify-center"
                        onPress={() =>
                            router.push({
                                pathname: '/ui-devkit/[index]',
                                params: { index: String(index) },
                            })
                        }
                    >
                        <Text className="text-center font-semibold">{kit.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}
