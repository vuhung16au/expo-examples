# My Universal React Project

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 🚀 How to build/run on iOS

1. Open a terminal and navigate to the project folder:
   ```sh
   cd blank
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo development server:
   ```sh
   npm start
   ```
4. When the QR code appears, press `i` in the terminal to launch the iOS simulator, or scan the QR code with the Expo Go app on your iOS device.

## Running/Modifying Native Code

You can generate native iOS and Android projects from your Expo config file (**app.json**/ **app.config.js**) by runnning `npx expo prebuild`. These native projects can then be compiled and run via XCode and Android Studio.

> 💡 Learn more about [native code in Expo](https://docs.expo.dev/workflow/customizing/)

## Publishing

- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.dev/distribution/app-stores/).
- Deploy the website using this guide: [Web deployment](https://docs.expo.dev/distribution/publishing-websites/).

## 📝 Notes

- Learn more about [Universal React](https://docs.expo.dev/).
- See what API and components are [available in the React runtimes](https://docs.expo.dev/versions/latest/).
- Find out more about developing apps and websites: [Guides](https://docs.expo.dev/guides/).
