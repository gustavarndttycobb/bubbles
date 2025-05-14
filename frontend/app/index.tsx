import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Button className="bg-orange-700">
        <Text className="text-slate-700" >Hello world</Text>
      </Button>
    </View>
  );
}
