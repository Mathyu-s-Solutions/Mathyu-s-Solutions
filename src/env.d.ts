/// <reference path="../.astro/types.d.ts" />

// Fontsource CSS packages are imported for their side effects only and ship
// no type declarations, so declare them as side-effect modules.
declare module '@fontsource-variable/*';
declare module '@fontsource/*';
