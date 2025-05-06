// PageTitleSide.tsx
'use client';

import { forwardRef } from 'react';

type Props = {
  pageTitleSide: string;
};

const PageTitleSide = forwardRef<HTMLHeadingElement, Props>(
  ({ pageTitleSide }, ref) => {
    return (
      <h1
        ref={ref}
        className="fixed z-40 inset-y-0 -left-2.5 md:-left-5 writing-mode-vertical-rl text-6xl md:text-title text-center tracking-wide mix-blend-difference invert dark:invert-0"
      >
        {pageTitleSide}
      </h1>
    );
  }
);

// displayName はデバッグ用に推奨されます（React DevToolsで名前表示される）
PageTitleSide.displayName = 'PageTitleSide';

export default PageTitleSide;
