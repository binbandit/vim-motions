import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Kbd, Keys, Motion, MotionList, SameAs } from '@/components/motion';
import { KeyGrid } from '@/components/key-grid';
import { Buffer } from '@/components/buffer';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Kbd,
    Keys,
    Motion,
    MotionList,
    SameAs,
    KeyGrid,
    Buffer,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
