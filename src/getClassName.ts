export function getClassName(
  componentName: string,
  modifiers: readonly string[],
  props: Record<string, any>,
) {
  const enabledModifiers = modifiers.filter(mod => !!props[mod]);
  return [
    componentName,
    ...enabledModifiers.map(mod => `${componentName}--${mod}`),
    ...(props.className ? [props.className] : []),
  ].join(' ');
}
