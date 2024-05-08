import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SearchIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#141B34"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 17.5 22 22"
    />
    <Path
      stroke="#141B34"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
    />
  </Svg>
);
export default SearchIcon;
