'use client';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MyButtonKit from './kits/MyButton.kit';

const kits = [MyButtonKit];

export default function DevKitIndex() {
  const router = useRouter();

  return (
    <View className="w-full h-full p-1 flex flex-col gap-3 bg-gradient-to-b from-white to-gray-200 justify-center items-center">
      {/* Header */}
      <View className="w-full flex flex-row justify-center bg-gray-200 rounded-md items-center p-1 shadow">
        <Text className="text-lg font-bold">UI DEVKIT</Text>
      </View>

      <Text className="text-lg font-semibold">Components</Text>

      {/* Grid de botões */}
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
        }}
        className="p-2"
      >
        {kits.map((kit, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              router.push({
                pathname: '/ui-devkit/[index]',
                params: { index: String(index) },
              })
            }
            className={`
              w-32 h-32 rounded-2xl items-center justify-center 
              bg-white/10 border border-white/30 backdrop-blur-md shadow-md
            `}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 4,
            }}
          >
            <Text className="text-center font-semibold text-gray-800">
              {kit.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
