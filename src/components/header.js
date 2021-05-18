import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#13131C`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1rem 1.0875rem`,
        display: `flex`,
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <StaticImage
            src="../images/woch_wordmark.png"
            width={125}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="woch wordmark"
          />
        </Link>
      </h1>
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `1.5rem`,
          }}
        >
          Pricing
        </Link>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `1.5rem`,
          }}
        >
          Features
        </Link>

        <button>JOIN NOW</button>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
