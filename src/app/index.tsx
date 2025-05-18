import ExampleComponent from "@/common/components/ExampleComponent/ExampleComponent";
import { fetchExample } from "@/common/services/api";
import { IExampleMock } from "@/common/services/mocks/exampleMock";
import { useEffect, useState } from "react";
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
    return (
        <View>
            <Text>Example component</Text>
            <ExampleComponent />
            <Text>Mock api service example</Text>
            {example.map((item) => (
                <Text key={item.id}>{item.label}</Text>
            ))}

        </View>
    );
}