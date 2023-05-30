export interface EditProfileData {
  name: string;
  telegram: string;
  password: string;
  gender: string;
}

export interface EditProfileFormProps {
  setOpen: (open: boolean) => void;
  onDone: () => Promise<void>;
  user: {
    name: string;
    gender?: string;
    telegram?: string;
  };
}
