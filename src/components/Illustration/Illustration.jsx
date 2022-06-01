import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RandomAccentColor from '../../util/random-accent-color';
const Illustration = ({
  img,
  className,
  alt,
  accentClass,
  imgStyle,
  ...imageProps
}) => {
  const [darkModeColor, setDarkModeColor] = useState(null);
  useEffect(() => {
    if (accentClass == null || accentClass == undefined || accentClass == '') {
      setDarkModeColor(RandomAccentColor());
    } else {
      setDarkModeColor(accentClass);
    }
  }, [accentClass]);

  return (
    <div className={`tbd-illustration ${className ?? ''} ${darkModeColor}`}>
      <img {...imageProps} src={img} className={imgStyle ?? null} alt={alt} />
    </div>
  );
};

Illustration.propTypes = {
  /**
   * Illustration contents
   */
  img: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Illustration.defaultProps = {
  img: '/img/dinosaur-illustration.svg',
  alt: '',
  imgStyle: null,
};

export default Illustration;
