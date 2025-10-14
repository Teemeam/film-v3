import av1 from '~/assets/cameras/av1.jpg';
import brownie from '~/assets/cameras/brownie.jpg';
import c330 from '~/assets/cameras/c330.jpg';
import pingo from '~/assets/cameras/pingo.jpg';
import synchrobox from '~/assets/cameras/synchrobox.jpg';
import sx70 from '~/assets/cameras/sx70.jpg';
import vr35 from '~/assets/cameras/vr35.jpg';

const cameras: Camera[] = [
  {
    name: 'Mamiya C330 Professional F',
    image: c330,
  },
  {
    name: 'Canon AV-1',
    image: av1,
  },
  {
    name: 'Kodak VR35 K4a',
    image: vr35,
  },
  {
    name: 'Polaroid SX-70',
    image: sx70,
  },
  {
    name: 'Agfa Synchro Box',
    image: synchrobox,
  },
  {
    name: 'Pingo',
    image: pingo,
  },
  {
    name: 'Kodak Brownie No. 2 Cartridge Hawk-Eye Model B',
    image: brownie,
  },
];

export default cameras;
