export function removeKeys(object: any, keys: string[]): any {
  const result = {...object}
  for (const key of keys) {
    delete (result as any)[key]
  }
  return result
}
