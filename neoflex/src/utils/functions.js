export const saveStateToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.error('Error saving state to sessionStorage:', error);
  }
};

export const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined; 
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from sessionStorage:', error);
    return undefined; 
  }
};