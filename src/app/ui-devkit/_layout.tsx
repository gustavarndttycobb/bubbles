import { Redirect, Slot } from "expo-router";
import React from "react";

export default function UiDevKitLayout() {
    const SHOW_COMPONENTS_LAB = process.env.EXPO_PUBLIC_SHOW_COMPONENTS_LAB === 'true';
    return (
        SHOW_COMPONENTS_LAB ? <Slot /> : <Redirect href="/" />

    );
}