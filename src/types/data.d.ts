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

/**
 * Camera
 */
type Camera = {
  name: string;
  src?: ImageMetadata;
};
