import tags from './tags';

const getTags = (photoTags: Tags) => {
  const tagArray: string[] = [];

  photoTags.tag.map((tag) => {
    tags.map((tagGroup) => {
      if (tagGroup.some((tagObj) => tagObj.value === tag._content)) {
        tagArray.push(tag._content);
      }
    });
  });

  return tagArray;
};

export default getTags;
