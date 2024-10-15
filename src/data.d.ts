/**
 * Original data
 */
type Data = {
  photoset: Photoset;
  stat: string;
};

type Photoset = {
  id: string;
  primary: string;
  owner: string;
  ownername: string;
  photo: Photo[];
  page: number;
  per_page: number;
  perpage: number;
  pages: number;
  title: string;
  total: number;
};

type Photo = {
  id: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  isprimary: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
};

/**
 * Info data
 */
type InfoData = {
  photo: Info;
  stat: string;
};

type Info = {
  id: string;
  secret: string;
  server: string;
  farm: number;
  dateuploaded: string;
  isfavorite: number;
  license: string;
  safety_level: string;
  rotation: number;
  originalsecret: string;
  originalformat: string;
  owner: Owner;
  title: Title;
  description: Description;
  visibility: Visibility;
  dates: Dates;
  views: string;
  editability: Editability;
  publiceditability: Publiceditability;
  usage: Usage;
  comments: Comments;
  notes: Notes;
  people: People;
  tags: Tags;
  urls: Urls;
  media: string;
};

type Owner = {
  nsid: string;
  username: string;
  realname: string;
  location: any;
  iconserver: string;
  iconfarm: number;
  path_alias: string;
  gift: Gift;
};

type Gift = {
  gift_eligible: boolean;
  eligible_durations: string[];
  new_flow: boolean;
};

type Title = {
  _content: string;
};

type Description = {
  _content: string;
};

type Visibility = {
  ispublic: number;
  isfriend: number;
  isfamily: number;
};

type Dates = {
  posted: string;
  taken: string;
  takengranularity: number;
  takenunknown: string;
  lastupdate: string;
};

type Editability = {
  cancomment: number;
  canaddmeta: number;
};

type Publiceditability = {
  cancomment: number;
  canaddmeta: number;
};

type Usage = {
  candownload: number;
  canblog: number;
  canprint: number;
  canshare: number;
};

type Comments = {
  _content: string;
};

type Notes = {
  note: any[];
};

type People = {
  haspeople: number;
};

type Tags = {
  tag: Tag[];
};

type Tag = {
  id: string;
  author: string;
  authorname: string;
  raw: string;
  _content: string;
  machine_tag: number;
};

type Urls = {
  url: Url[];
};

type Url = {
  type: string;
  _content: string;
};

/**
 * Size data
 */
type SizeData = {
  sizes: Sizes;
  stat: string;
};

type Sizes = {
  canblog: number;
  canprint: number;
  candownload: number;
  size: Size[];
};

type Size = {
  label: string;
  width: number;
  height: number;
  source: string;
  url: string;
  media: string;
};

/**
 * Complete data
 */
type CompleteData = {
  photo: Info;
  stat: string;
  aspectRatio: number;
};

/**
 * Formatted data
 */
type FormattedData = {
  id: string;
  url: string;
  blurhash: string;
  tags: string[];
  description: FormattedDescription;
  aspectRatio: number;
  date: Date;
  dateLabel: string;
  flickrUrl: string;
};

type FormattedDescription = {
  film: string | undefined;
  camera: string | undefined;
};

/**
 * My tags
 */
type MyTag = {
  name: string;
  label: string;
  value: string;
};
