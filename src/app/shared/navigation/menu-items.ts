interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  ddclass: string;
  extralink: boolean;
  submenu: RouteInfo[];
}

export const Routes: RouteInfo[] = [
  {
    path: '',
    title: 'Contents',
    icon: 'mdi mdi-gauge',
    class: '',
    ddclass: '',
    extralink: false,
    submenu: [
      {
        path: '/first',
        title: 'First',
        icon: 'mdi mdi-adjust',
        class: '',
        ddclass: 'single-dd',
        extralink: false,
        submenu: []
      },
      {
        path: '/second',
        title: 'Second',
        icon: 'mdi mdi-email',
        class: '',
        ddclass: 'single-dd',
        extralink: false,
        submenu: []
      }
    ]
  }
];
