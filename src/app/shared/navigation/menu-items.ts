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
    icon: '',
    class: 'has-arrow',
    ddclass: 'single-dd',
    extralink: false,
    submenu: [
      {
        path: '/first',
        title: 'First',
        icon: '',
        class: '',
        ddclass: 'single-dd',
        extralink: false,
        submenu: []
      },
      {
        path: '/second',
        title: 'Second',
        icon: '',
        class: '',
        ddclass: 'single-dd',
        extralink: false,
        submenu: []
      }
    ]
  }
];
