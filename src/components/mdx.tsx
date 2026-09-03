import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Kbd, Keys, Motion, MotionList, SameAs } from '@/components/motion';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Kbd,
    Keys,
    Motion,
    MotionList,
    SameAs,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
