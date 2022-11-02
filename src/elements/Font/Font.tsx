import React, { ReactElement } from "react";

export const Font = (): ReactElement => (
  <>
    <link
      rel='preload'
      href='/static/fonts/nunito/Nunito-Regular.ttf'
      as='font'
      crossOrigin='anonymous'
    />

    <style
      dangerouslySetInnerHTML={{
        __html: `
      @font-face {
        font-family: 'Nunito Regular';
        font-style: normal;
        font-weight: 400;
        src: url('/static/fonts/nunito/Nunito-Regular.ttf') format('woff2');
      }
    `,
      }}
    />
  </>
);
