export const SCREEN_NAMES = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  Dashboard: 'Dashboard',
  Setting: 'Setting',
} as const;

export type screenNames = keyof typeof SCREEN_NAMES;
