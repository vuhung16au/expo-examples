# How to Run

1. Open a terminal and navigate to the project directory:
   ```sh
   cd with-custom-font
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Ensure your `package.json` contains the following scripts section:
   ```json
   "scripts": {
     "start": "expo start"
   }
   ```
4. Start the Expo development server:
   ```sh
   npx expo start
   ```

# How to set custom font

1. Add your font files (e.g., `.ttf` or `.otf`) to the `assets` directory in the project.
2. In your `App.js`, import `useFonts` from `expo-font`:
   ```js
   import { useFonts } from 'expo-font';
   ```
3. Load your custom fonts at the top level of your app:
   ```js
   const [fontsLoaded] = useFonts({
     'YourFontName': require('./assets/YourFontFile.ttf'),
     // Add more fonts as needed
   });
   if (!fontsLoaded) {
     return null; // or a loading indicator
   }
   ```
4. Use your custom font in your styles:
   ```js
   <Text style={{ fontFamily: 'YourFontName' }}>Hello, custom font!</Text>
   ```
5. For more details, see the [Expo Font documentation](https://docs.expo.dev/versions/latest/sdk/font/).

# App GUI Explanation

This app demonstrates the use of both `.ttf` and `.otf` custom fonts:

- The first line uses the default system font.
- The second line displays text using a custom `.ttf` font (blue color).
- The third line displays text using a custom `.otf` font (orange color).

When the app starts, it loads the custom fonts. If the fonts are not loaded yet, a loading indicator is shown. Once loaded, you will see all three text samples rendered with their respective fonts and styles.
