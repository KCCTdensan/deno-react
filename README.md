# お

## 使い方

### Debug

```
% deno run --allow-net --allow-read --import-map deps.json server.tsx
```

### Release

```
% deno bundle --config tsconfig.browser.json --import-map deps.json src/client.js bundle.js
% deno run --allow-net --allow-read --import-map deps.json server.tsx
```

## ToDo

- 良さげなバンドラーを見つける
