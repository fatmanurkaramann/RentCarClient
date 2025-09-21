export interface NavigationModel
{
    title: string;
    url?: string;
    icon?: string;
    haveSubmenu?: boolean;
    subMenus?: NavigationModel[];
}
export const navigation: NavigationModel[] = [
    {
        title: 'Dashboard',
        url: '/',
        icon: 'bi-speedometer2',
        haveSubmenu: false
    }
];