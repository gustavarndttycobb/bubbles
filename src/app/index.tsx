import { fetchExample } from "@/common/services/api";
import { IExampleMock } from "@/common/services/mocks/exampleMock";
import { useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
    const [example, setExample] = useState<IExampleMock[]>([]);
    useEffect(() => {
        async function exampleData() {
            try {
                const exampleResponse = await fetchExample();
                setExample(exampleResponse);
            } catch (err: any) {
                console.error('Error:', err.message);
            }
        }

        exampleData();
    }, []);

    const { colors } = useTheme();
    return (
        <View className="bg-background flex-1 items-center justify-center">
            <Text className="text-textPrimary font-bold text-xl">Home</Text>
        </View>
    );
}