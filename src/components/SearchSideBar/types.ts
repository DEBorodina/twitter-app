export interface SearchSideBarProps<T> {
  placeholder: string;
  fetchData: (search: string) => Promise<T[]>;
  ListItem: React.FC<T>;
  errorStatus: string;
  innerRef: React.Ref<HTMLDivElement>;
}
