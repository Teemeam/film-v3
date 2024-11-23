import { createFlickr, FetchTransport } from 'flickr-sdk';
import { getOriginalWidth, getOriginalHeight } from '~/lib/getOriginalDimensions';
import encodeImage from '~/lib/encodeImage';
import getTags from '~/lib/getTags';
import formatDescription from '~/lib/formatDescription';
import timestampToDate from '~/lib/timestampToDate';
import dateToLocaleString from '~/lib/dateToLocaleString';

const fetchFlickrData = async () => {
  /**
   * OAuth configuration
   */
  const oauthConfig = {
    consumerKey: import.meta.env.FLICKR_CONSUMER_KEY,
    consumerSecret: import.meta.env.FLICKR_CONSUMER_SECRET,
    oauthToken: import.meta.env.FLICKR_OAUTH_TOKEN,
    oauthTokenSecret: import.meta.env.FLICKR_OAUTH_TOKEN_SECRET,
  };

  const transport = new FetchTransport();
  const flickr = createFlickr(oauthConfig, transport);

  /**
   * Fetch from specified photoset
   */
  const response = await flickr.flickr('flickr.photosets.getPhotos', {
    photoset_id: import.meta.env.FLICKR_PHOTOSET_ID,
    user_id: import.meta.env.FLICKR_USER_ID,
    privacy_filter: '5',
  });

  const photos: Photo[] = response.photoset.photo;
  const completeData: CompleteData[] = [];

  /**
   * Fetch additional data for each photo
   */
  await Promise.all(
    photos.map(async (photo: Photo) => {
      /**
       * Fetch photo info data
       */
      const infoResponse = await flickr.flickr('flickr.photos.getInfo', {
        photo_id: photo.id,
      });
      const infoData: InfoData = await infoResponse;

      /**
       * Fetch photo size data
       */
      const sizeResponse = await flickr.flickr('flickr.photos.getSizes', {
        photo_id: photo.id,
      });
      const sizeData: SizeData = await sizeResponse;

      const sizes: Size[] = sizeData.sizes.size;
      const width = getOriginalWidth(sizes);
      const height = getOriginalHeight(sizes);

      /**
       * Combine additional data
       */
      const data: CompleteData = {
        ...infoData,
        aspectRatio: typeof width === 'number' && typeof height === 'number' ? width / height : 1,
      };

      completeData.push(data);
    })
  );

  /**
   * Format the fetched data
   */
  const formattedData: FormattedData[] = [];

  await Promise.all(
    completeData.map(async ({ photo, aspectRatio }: CompleteData) => {
      const urlBase = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.originalsecret}`;
      const blurhash = await encodeImage(`${urlBase}_t.jpg`);

      const date = photo.dates.taken.includes('-01-01 00:00:00') // Taken Jan 1 at 00:00
        ? timestampToDate(photo.dateuploaded, false)
        : timestampToDate(photo.dates.taken, true);

      formattedData.push({
        id: photo.id,
        url: `${urlBase}_k.jpg`,
        blurhash: blurhash.encoded,
        tags: getTags(photo.tags),
        description: formatDescription(photo.description._content),
        aspectRatio: aspectRatio,
        date: date,
        dateLabel: dateToLocaleString(date),
        flickrUrl: photo.urls.url[0]!._content,
      });
    })
  );

  /**
   * Sort the formatted data
   */
  formattedData.sort((a, b) => b.date.getTime() - a.date.getTime());

  return formattedData;
};

export default fetchFlickrData;
