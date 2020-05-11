import { useState, useCallback } from 'react';
import { Share } from 'react-native';

type customHooks = [(message: string) => Promise<void>, string, string];

const useShare = (): customHooks => {
  const [activityType, setActivityType] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onShare = useCallback(async (message: string) => {
    try {
      const result = await Share.share({ message });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          setActivityType(result.activityType);
        }
      } else if (result.action === Share.dismissedAction) {
        setActivityType('dismissed');
      }
    } catch (e) {
      setError(e.toString());
    }
  }, []);

  return [onShare, activityType, error];
};
export default useShare;
