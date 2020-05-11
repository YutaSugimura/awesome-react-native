import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type useStorage = [string, (newValue: string) => void, () => void, string[]];

export const useStorage = (key: string): useStorage => {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [allKeys, setAllKeys] = useState<string[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      await Promise.all([
        (async (): Promise<void> => {
          try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
              setCurrentValue(value);
            }
          } catch {}
        })(),
        (async (): Promise<void> => {
          try {
            const value = await AsyncStorage.getAllKeys();
            setAllKeys(value);
          } catch {}
        })(),
      ]);
    })();
  }, []);

  const set = async (newValue: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, newValue);
      setCurrentValue(newValue);
    } catch {}
  };

  const remove = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
      setCurrentValue('');
    } catch {}
  };

  return [currentValue, set, remove, allKeys];
};

type useMultiStorage = [
  { [key: string]: string },
  (newValues: string[]) => void,
  (removeKeys: string[]) => void,
  string[],
];

export const useMultiStorage = (keys: string[]): useMultiStorage => {
  const [storage, setStorage] = useState<{ [key: string]: string }>({});
  const [allKeys, setAllKeys] = useState<string[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      await Promise.all([
        (async (): Promise<void> => {
          try {
            const values = await AsyncStorage.multiGet(keys);
            const newList: { [key: string]: string } = {};
            values.forEach((value, index) => {
              if (value !== null) {
                return (newList[keys[index]] = value[1]);
              }
              newList[keys[index]] = '';
            });
            setStorage(newList);
          } catch {}
        })(),
        (async (): Promise<void> => {
          try {
            const value = await AsyncStorage.getAllKeys();
            setAllKeys(value);
          } catch {}
        })(),
      ]);
    })();
  }, []);

  const multiSet = async (newValues: string[]): Promise<void> => {
    const list: [string][] = [];
    newValues.map((value, index) => list.push([keys[index], value]));
    try {
      await AsyncStorage.multiSet(list);
      const newList: { [key: string]: string } = {};
      newValues.forEach((value, index) => {
        if (value !== null) {
          return (newList[keys[index]] = value);
        }
        newList[keys[index]] = '';
      });
      setStorage(newList);
    } catch {}
  };

  const multiRemove = async (removeKeys: string[]): Promise<void> => {
    try {
      await AsyncStorage.multiRemove(removeKeys);
      const currentValue = { ...storage };
      removeKeys.map((key) => delete currentValue[key]);
      setStorage(currentValue);
    } catch {}
  };

  return [storage, multiSet, multiRemove, allKeys];
};
