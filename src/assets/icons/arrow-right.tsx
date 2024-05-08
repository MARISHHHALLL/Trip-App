import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ArrowRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    // {...props}
  >
    <Path
      stroke={props.fill || '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M5.625 3.75s3.75 2.762 3.75 3.75-3.75 3.75-3.75 3.75"
    />
  </Svg>
);
export default ArrowRight;
