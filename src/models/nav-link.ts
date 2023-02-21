export interface INavLink {
  route: string;
  title: string;
  subItems?: INavLink[];
}
