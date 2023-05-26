export interface AddTwitProps {
  text: string;
  image?: File;
}

export interface WhatsHappeningFormProps {
  onAddNewTwit: () => Promise<void>;
  user: {
    email: string;
    name: string;
  };
}
