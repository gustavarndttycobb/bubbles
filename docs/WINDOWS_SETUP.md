# 🪟 Windows Environment Setup for Bubbles App

This guide explains how to set up your development environment on **Windows** to run the Bubbles App with Expo and Android Emulator support. This includes installing Android SDK, configuring environment variables, and using **Expo Orbit** as a virtual device option.

---

## ✅ Prerequisites

- Node.js (22.x recommended)
- Yarn or npm (latest stable)
- Git
- A terminal (e.g., Git Bash, PowerShell, or Windows Terminal)

---

## 1. Install Android SDK

### Option A: Install via Android Studio

1. Download and install [Android Studio](https://developer.android.com/studio).
2. During installation, select these components:
   - Android SDK
   - Android SDK Platform-Tools
   - Android Emulator
   - A system image (e.g., `Pixel 6` with API 33+)
3. After installation:
   - Open **Android Studio**
   - Go to `More Actions > SDK Manager`
   - Note the SDK path (usually something like `C:\Users\<username>\AppData\Local\Android\Sdk`)

### Option B: Manual Installation (Advanced)

If you prefer not to use Android Studio, manually install:

- [Command line tools](https://developer.android.com/studio#command-tools)
- [Platform Tools](https://developer.android.com/studio/releases/platform-tools)

> **⚠️ Tip:** Using Android Studio is easier and recommended unless you're an advanced user.

---

## 2. Set `ANDROID_HOME` Environment Variable

1. Open **System Properties > Environment Variables**
2. Create a new **user** variable:
   - **Name**: `ANDROID_HOME`
   - **Value**: Path to your Android SDK (e.g., `C:\Users\<your-user>\AppData\Local\Android\Sdk`)
3. Add to your **`Path`** variable:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\emulator`
   - `%ANDROID_HOME%\cmdline-tools\latest\bin`

You can verify it works by running:

```sh
adb --version
````

---

## 3. Install Expo CLI and Expo Orbit

```sh
npm install -g expo-cli
npm install -g expo-orbit
```

> **Expo Orbit** is a lightweight virtual device for previewing your app on desktop — a fast alternative to running a full Android emulator.

---

## 4. Clone and Setup Project

```sh
git clone https://github.com/your-org/bubbles-portal.git
cd bubbles-portal
cp .env.example .env
```

Update `.env` with correct values. You must define the following:

```env
EXPO_PUBLIC_API_URL=https://your.api.url
EXPO_PUBLIC_PROJECT_ID=your-expo-project-id
```

---

## 5. 🚀 Run on Android

### Option A: Expo Go (phone)

```sh
npx expo start
```

Then scan the QR code with Expo Go (on Android device).

---

### Option B: Android Emulator

1. Open **Android Studio > Device Manager**
2. Start a virtual device (AVD)
3. In terminal:

```sh
npm run android
```

---

### Option C: Expo Orbit (desktop preview)

```sh
expo orbit
```

---

## 6. `EXPO_PUBLIC_PROJECT_ID` explained

This is your **Expo project ID**, which links your app to your Expo developer account. It is required when using features like:

- **Expo Orbit**
- **Cloud builds (`expo build`, `eas build`)**
- **Expo push notifications**
- **Shared project history (with `npx expo publish`)**

### How to get your `PROJECT_ID`

1. Login to Expo CLI:

   ```sh
   npx expo login
   ```

2. Navigate to your app directory
3. Run:

   ```sh
   npx expo register
   ```

   or visit [https://expo.dev](https://expo.dev) to create a new project.

> Once your project is registered, the CLI will show your project ID. Copy it and set it in your `.env` file as:
>
> ```env
> EXPO_PUBLIC_PROJECT_ID=@your-username/your-project-slug
> ```

---

## ✅ Done

Now you're ready to develop and test your app on Windows! 🎉

Need help? Reach out in the team chat or open an issue.
