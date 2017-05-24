export interface DeveloperInterface {
  $key?: string;
  name: string;
  slug: string;
  description: string;
  photo: string;
  position: string;
  tags: string[];
  projects?: Array<DeveloperInterface>;
}
