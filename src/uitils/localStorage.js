export const saveState = (state) => {
  try {
    const serializesState = JSON.stringify(state);
    localStorage.setItem('habitState', serializesState);
  } catch (error) {
    console.error('unabel to set state', error); 
  }
}

export const loadState = (state) => {
  try {
    const serializesState = localStorage.getItem('habitState');
    if(serializesState === null){
      return undefined;
    }
    return JSON.parse(serializesState);
  } catch (error) {
    console.error('unabel to get state', error);
  }
}