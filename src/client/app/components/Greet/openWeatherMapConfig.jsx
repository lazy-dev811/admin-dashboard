// import ChanceOfFlurries from '../Icon/Weather/ChanceOfFlurries.jsx';
import ChanceOfRain from '../Icon/Weather/ChanceOfRain.jsx';
import ChanceOfSleet from '../Icon/Weather/ChanceOfSleet.jsx';
import ChanceOfSnow from '../Icon/Weather/ChanceOfSnow.jsx';
import ChanceOfThunderStorms from '../Icon/Weather/ChanceOfThunderStorms.jsx';
import Clear from '../Icon/Weather/Clear.jsx';
import Cloudy from '../Icon/Weather/Cloudy.jsx';
// import Flurries from '../Icon/Weather/Flurries.jsx';
import Fog from '../Icon/Weather/Fog.jsx';
import Hazy from '../Icon/Weather/Hazy.jsx';
import MostlyCloudy from '../Icon/Weather/MostlyCloudy.jsx';
import MostlySunny from '../Icon/Weather/MostlySunny.jsx';
import PartlyCloudy from '../Icon/Weather/PartlyCloudy.jsx';
// import PartlySunny from '../Icon/Weather/PartlySunny.jsx';
import Rain from '../Icon/Weather/Rain.jsx';
import Sleet from '../Icon/Weather/Sleet.jsx';
import Snow from '../Icon/Weather/Snow.jsx';
import Sunny from '../Icon/Weather/Sunny.jsx';
import ThunderStorms from '../Icon/Weather/ThunderStorms.jsx';
import Unknown from '../Icon/Weather/Unknown.jsx';

const config = [
  {
    id: 200,
    label: 'thunderstorm with light rain',
    icon: ThunderStorms,
  },

  {
    id: 201,
    label: 'thunderstorm with rain',
    icon: ThunderStorms,
  },

  {
    id: 202,
    label: 'thunderstorm with heavy rain',
    icon: ThunderStorms,
  },

  {
    id: 210,
    label: 'light thunderstorm',
    icon: ChanceOfThunderStorms,
  },

  {
    id: 211,
    label: 'thunderstorm',
    icon: ThunderStorms,
  },

  {
    id: 212,
    label: 'heavy thunderstorm',
    icon: ThunderStorms,
  },

  {
    id: 221,
    label: 'ragged thunderstorm',
    icon: ThunderStorms,
  },

  {
    id: 230,
    label: 'thunderstorm with light drizzle',
    icon: ThunderStorms,
  },

  {
    id: 231,
    label: 'thunderstorm with drizzle',
    icon: ThunderStorms,
  },

  {
    id: 232,
    label: 'thunderstorm with heavy drizzle',
    icon: ThunderStorms,
  },

  {
    id: 300,
    label: 'light intensity drizzle',
    icon: ChanceOfRain,
  },

  {
    id: 301,
    label: 'drizzle',
    icon: ChanceOfRain,
  },

  {
    id: 302,
    label: 'heavy intensity drizzle',
    icon: ChanceOfRain,
  },

  {
    id: 310,
    label: 'light intensity drizzle rain',
    icon: ChanceOfRain,
  },

  {
    id: 311,
    label: 'drizzle rain',
    icon: ChanceOfRain,
  },

  {
    id: 312,
    label: 'heavy intensity drizzle rain',
    icon: ChanceOfRain,
  },

  {
    id: 313,
    label: 'shower rain and drizzle',
    icon: Rain,
  },

  {
    id: 314,
    label: 'heavy shower rain and drizzle',
    icon: Rain,
  },

  {
    id: 321,
    label: 'shower drizzle',
    icon: ChanceOfRain,
  },

  {
    id: 500,
    label: 'light rain',
    icon: Rain,
  },

  {
    id: 501,
    label: 'moderate rain',
    icon: Rain,
  },

  {
    id: 502,
    label: 'heavy intensity rain',
    icon: Rain,
  },

  {
    id: 503,
    label: 'very heavy rain',
    icon: Rain,
  },

  {
    id: 504,
    label: 'extreme rain',
    icon: Rain,
  },

  {
    id: 511,
    label: 'freezing rain',
    icon: Rain,
  },

  {
    id: 520,
    label: 'light intensity shower rain',
    icon: Rain,
  },

  {
    id: 521,
    label: 'shower rain',
    icon: Rain,
  },

  {
    id: 522,
    label: 'heavy intensity shower rain',
    icon: Rain,
  },

  {
    id: 531,
    label: 'ragged shower rain',
    icon: Rain,
  },

  {
    id: 600,
    label: 'light snow',
    icon: ChanceOfSnow,
  },

  {
    id: 601,
    label: 'snow',
    icon: Snow,
  },

  {
    id: 602,
    label: 'heavy snow',
    icon: Snow,
  },

  {
    id: 611,
    label: 'sleet',
    icon: ChanceOfSleet,
  },

  {
    id: 612,
    label: 'shower sleet',
    icon: Sleet,
  },

  {
    id: 615,
    label: 'light rain and snow',
    icon: Snow,
  },

  {
    id: 616,
    label: 'rain and snow',
    icon: Snow,
  },

  {
    id: 620,
    label: 'light shower snow',
    icon: Snow,
  },

  {
    id: 621,
    label: 'shower snow',
    icon: Snow,
  },

  {
    id: 622,
    label: 'heavy shower snow',
    icon: Snow,
  },

  {
    id: 701,
    label: 'mist',
    icon: Fog,
  },

  {
    id: 711,
    label: 'smoke',
    icon: Unknown,
  },

  {
    id: 721,
    label: 'haze',
    icon: Hazy,
  },

  {
    id: 731,
    label: 'sand, dust whirls',
    icon: Unknown,
  },

  {
    id: 741,
    label: 'fog',
    icon: Fog,
  },

  {
    id: 751,
    label: 'sand',
    icon: Unknown,
  },

  {
    id: 761,
    label: 'dust',
    icon: Unknown,
  },

  {
    id: 762,
    label: 'volcanic ash',
    icon: Unknown,
  },

  {
    id: 771,
    label: 'squalls',
    icon: Unknown,
  },

  {
    id: 781,
    label: 'tornado',
    icon: Unknown,
  },

  {
    id: 800,
    label: 'clear sky',
    icon: Clear,
  },

  {
    id: 801,
    label: 'few clouds',
    icon: MostlySunny,
  },

  {
    id: 802,
    label: 'scattered clouds',
    icon: PartlyCloudy,
  },

  {
    id: 803,
    label: 'broken clouds',
    icon: MostlyCloudy,
  },

  {
    id: 804,
    label: 'overcast clouds',
    icon: Cloudy,
  },

  {
    id: 900,
    label: 'tornado',
    icon: Unknown,
  },

  {
    id: 901,
    label: 'tropical storm',
    icon: ThunderStorms,
  },

  {
    id: 902,
    label: 'hurricane',
    icon: ThunderStorms,
  },

  {
    id: 903,
    label: 'cold',
    icon: Unknown,
  },

  {
    id: 904,
    label: 'hot',
    icon: Sunny,
  },

  {
    id: 905,
    label: 'windy',
    icon: Unknown,
  },

  {
    id: 906,
    label: 'hail',
    icon: Sleet,
  },

  {
    id: 951,
    label: 'calm',
    icon: Unknown,
  },

  {
    id: 952,
    label: 'light breeze',
    icon: Unknown,
  },

  {
    id: 953,
    label: 'gentle breeze',
    icon: Unknown,
  },

  {
    id: 954,
    label: 'moderate breeze',
    icon: Unknown,
  },

  {
    id: 955,
    label: 'fresh breeze',
    icon: Unknown,
  },

  {
    id: 956,
    label: 'strong breeze',
    icon: Unknown,
  },

  {
    id: 957,
    label: 'high wind, near gale',
    icon: Unknown,
  },

  {
    id: 958,
    label: 'gale',
    icon: Unknown,
  },

  {
    id: 959,
    label: 'severe gale',
    icon: Unknown,
  },

  {
    id: 960,
    label: 'storm',
    icon: ThunderStorms,
  },

  {
    id: 961,
    label: 'violent storm',
    icon: ThunderStorms,
  },

  {
    id: 962,
    label: 'hurricane',
    icon: ThunderStorms,
  },
];

export default config;
