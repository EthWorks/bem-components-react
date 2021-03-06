import {FunctionComponent, ReactElement} from 'react'
import {getClassName} from './getClassName'
import {removeKeys} from './removeKeys'

type PropsOf<T extends readonly string[]> = { [K in T[number]]?: boolean }

export interface StyledComponentBuilder<P> {
  (componentName: string): FunctionComponent<P>
  <A extends string>(
    componentName: string, modifiers: [A]
  ): FunctionComponent<PropsOf<[A]> & P>
  <A extends string, B extends string>(
    componentName: string, modifiers: [A, B]
  ): FunctionComponent<PropsOf<[A, B]> & P>
  <A extends string, B extends string, C extends string>(
    componentName: string, modifiers: [A, B, C]
  ): FunctionComponent<PropsOf<[A, B, C]> & P>
  <A extends string, B extends string, C extends string, D extends string>(
    componentName: string, modifiers: [A, B, C, D]
  ): FunctionComponent<PropsOf<[A, B, C, D]> & P>
  <A extends string, B extends string, C extends string, D extends string, E extends string>(
    componentName: string, modifiers: [A, B, C, D, E]
  ): FunctionComponent<PropsOf<[A, B, C, D, E]> & P>
  <A extends string, B extends string, C extends string, D extends string, E extends string, F extends string>(
    componentName: string, modifiers: [A, B, C, D, E, F]
  ): FunctionComponent<PropsOf<[A, B, C, D, E, F]> & P>
  <A extends string, B extends string, C extends string, D extends string, E extends string, F extends string, G extends string>(
    componentName: string, modifiers: [A, B, C, D, E, F, G]
  ): FunctionComponent<PropsOf<[A, B, C, D, E, F, G]> & P>
  <A extends string, B extends string, C extends string, D extends string, E extends string, F extends string, G extends string, H extends string>(
    componentName: string, modifiers: [A, B, C, D, E, F, G, H]
  ): FunctionComponent<PropsOf<[A, B, C, D, E, F, G, H]> & P>
  <A extends string, B extends string, C extends string, D extends string, E extends string, F extends string, G extends string, H extends string, I extends string>(
    componentName: string, modifiers: [A, B, C, D, E, F, G, H, I]
  ): FunctionComponent<PropsOf<[A, B, C, D, E, F, G, H, I]> & P>
  <A extends string, B extends string, C extends string, D extends string, E extends string, F extends string, G extends string, H extends string, I extends string, J extends string>(
    componentName: string, modifiers: [A, B, C, D, E, F, G, H, I, J]
  ): FunctionComponent<PropsOf<[A, B, C, D, E, F, G, H, I, J]> & P>
  <A extends string, B extends string, C extends string, D extends string, E extends string, F extends string, G extends string, H extends string, I extends string, J extends string, K extends string>(
    componentName: string, modifiers: [A, B, C, D, E, F, G, H, I, J, K]
  ): FunctionComponent<PropsOf<[A, B, C, D, E, F, G, H, I, J, K]> & P>
  <A extends string, B extends string, C extends string, D extends string, E extends string, F extends string, G extends string, H extends string, I extends string, J extends string, K extends string, L extends string>(
    componentName: string, modifiers: [A, B, C, D, E, F, G, H, I, J, K, L]
  ): FunctionComponent<PropsOf<[A, B, C, D, E, F, G, H, I, J, K, L]> & P>
}

export interface ComponentProps {
  className?: string
}

export type ComponentFactory<P> = (props: P) => ReactElement<any>

export type BuilderFactory = <P extends ComponentProps>(factory: ComponentFactory<P>) => StyledComponentBuilder<P>

export function createPrefixedBuilder(prefix?: string): BuilderFactory {
  return function builder(factory) {
    return function styled(block: string, modifiers: string[] = []) {
      const blockClass = prefixComponentName(block, prefix)
      const modifierMap = prepareModifierMap(modifiers, blockClass)

      return (props: any) => factory({
        ...(removeKeys(props, modifiers)),
        className: getClassName(blockClass, modifierMap, props),
      })
    }
  }
}

function prepareModifierMap(modifiers: string[], blockClass: string) {
  const modifierMap: Record<string, string> = {}
  for (const modifier of modifiers) {
    modifierMap[modifier] = `${blockClass}--${modifier}`
  }
  return modifierMap
}

function prefixComponentName(componentName: string, prefix: string | undefined) {
  return prefix !== undefined ? `${prefix}-${componentName}` : componentName
}
