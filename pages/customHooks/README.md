# custom hooks

## useShare

```ts
import { useShare } from './hooks';
// types
// types Hooks = {
//   onShare: (message: string) => void
//   activityType: string
//   error: string
//}
const [onShare, activityType, error] = useShare();
```

## useStorage

#### single

```ts
import { useStorage } from './hooks';
// types
// type Hooks = {
//   storage: string
//   set: (newValue: string) => void
//   remove: () => void
//   allKeys: string[]
// }
const [storage, set, remove, allKeys] = useStorage('@storage_key');
```

#### multi

```ts
import { useMultiStorage} from './hooks';
// types
// type Hooks = {
//   storage: {storage: [key: string]: string}
//   multiSet: (newValues: string[]) => void
//   multiRemove: (removeKeys: string[]) => void
//   allKeys: string[]
}
const keys = ['@storage_key1', '@storage_key2'];
const [storage, multiSet, multiRemove, allKeys] = useMultiStorage(keys);
```
