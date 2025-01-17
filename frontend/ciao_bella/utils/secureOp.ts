import * as SecureStore from "expo-secure-store";

export function saveSecurely(key: string, value: string):void {
  SecureStore.setItem(key, value);
}

export function getSecurely(key: string):string|null{
  const data = SecureStore.getItem(key);
  if(data){
    return JSON.parse(data).responseEmail
  }else{
    return null
  }
}

export async function clearSecurely(key: string):Promise<void>{
  await SecureStore.deleteItemAsync(key)
  }