# SQLite Example

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

Example demonstrating use of the `SQLite` API in Expo.

The app allows adding todo items, marking them as done, and deleting done items.
`SQLite` features used include creating and opening databases, creating tables,
inserting items, querying and displaying results, using prepared statements.

![Simulator Example](https://i.imgur.com/CDrXKzV.png)

## 🚀 How to use

- Run `yarn` or `npm install`
- Run `yarn start` or `npm run start` to try it out.

## 📝 Notes

- [Expo SQLite docs](https://docs.expo.dev/versions/latest/sdk/sqlite/)

## 📦 Where is `db.db` processed and stored?

The following line initializes the SQLite database:

```tsx
<SQLiteProvider databaseName="db.db" onInit={migrateDbIfNeeded}>
```

- The file `db.db` is not present in your project directory. Instead, it is created and managed by the app on the device (iOS/Android emulator or physical device).
- On iOS, it is stored in the app’s sandboxed Documents directory.
- On Android, it is stored in the app’s private files directory.
- You can access or export this file using device file explorers or Expo’s FileSystem API if needed.

## 🗃️ SQLite Queries Explained

### Table Creation

```ts
await db.execAsync(`
  PRAGMA journal_mode = 'wal';
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY NOT NULL,
    done INT,
    value TEXT
  );
`);
```
- Creates a table `items` with columns: `id`, `done` (boolean as integer), and `value` (text).

### Insert Item

```ts
await db.runAsync(
  'INSERT INTO items (done, value) VALUES (?, ?);',
  false,
  text
);
```
- Adds a new todo item with `done` set to `false` and the provided text.

### Query Items

```ts
await db.getAllAsync<ItemEntity>(
  'SELECT * FROM items WHERE done = ?',
  false
);
```
- Fetches all items where `done` is `false` (not completed).

### Mark Item as Done

```ts
await db.runAsync('UPDATE items SET done = ? WHERE id = ?;', true, id);
```
- Updates an item’s `done` status to `true` by its `id`.

### Delete Item

```ts
await db.runAsync('DELETE FROM items WHERE id = ?;', id);
```
- Removes an item from the database by its `id`.

## How to use TODO app

- **Add items:**
  - Enter your todo text in the input field at the bottom of the app and press the "Add" button (or the return key) to add a new item to the list.

- **Mark as done:**
  - Tap on a todo item in the list to mark it as "done". The item will visually update to indicate completion (e.g., strikethrough or faded text).

- **Delete a DONE item:**
  - After marking an item as done, tap the "Delete done items" button (if available) to remove all completed items from the list.
