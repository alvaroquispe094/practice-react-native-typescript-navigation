export enum TabRoutes {
  Home = 'HomeStack',
  Payment = 'Payments',
  Settings = 'Settings',
}

export type TabParamList = {
  [TabRoutes.Home]: {};
  [TabRoutes.Payment]: {};
  [TabRoutes.Settings]: {};
};
