/* @ds-bundle: {"format":4,"namespace":"NordCreative_abb8dd","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Monogram","sourcePath":"components/brand/Monogram.jsx"},{"name":"Watermark","sourcePath":"components/brand/Watermark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ImageFrame","sourcePath":"components/editorial/ImageFrame.jsx"},{"name":"NumberedItem","sourcePath":"components/editorial/NumberedItem.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"StatFigure","sourcePath":"components/editorial/StatFigure.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"2bb3b00114f2","components/brand/Logo.jsx":"656942b61715","components/brand/Monogram.jsx":"964648154c86","components/brand/Watermark.jsx":"d8c39094a525","components/core/Badge.jsx":"ebf35b98566b","components/core/Button.jsx":"e3236d285c3d","components/core/Card.jsx":"afb7079d987f","components/core/IconButton.jsx":"6203fbffeda0","components/editorial/ImageFrame.jsx":"b9fe94e74003","components/editorial/NumberedItem.jsx":"5c54415aa967","components/editorial/PullQuote.jsx":"a4e76f7371c5","components/editorial/StatFigure.jsx":"31924943984a","components/forms/Checkbox.jsx":"57fdec656360","components/forms/Input.jsx":"5890f5dfcde8","components/forms/Select.jsx":"aa0332b81aa7","ui_kits/social/Canvas.jsx":"aa6747e3d0e9","ui_kits/social/Feed.jsx":"26de38e74feb","ui_kits/social/Posts.jsx":"24331cbfd847","ui_kits/social/PostsB.jsx":"af41a8758041","ui_kits/stories/Stories.jsx":"dd9c69aaa072"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NordCreative_abb8dd = window.NordCreative_abb8dd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  bracketed = false,
  tone = "primary",
  rule = false,
  style,
  ...rest
}) {
  const colors = {
    primary: "var(--text-primary)",
    inverse: "var(--text-inverse)",
    accent: "var(--text-accent)",
    muted: "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: colors[tone] || colors.primary,
      ...style
    }
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: "currentColor",
      opacity: .5
    }
  }) : null, bracketed ? "[ " : "", children, bracketed ? " ]" : "");
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const files = {
  white: "logo-wordmark-white.svg",
  ink: "logo-wordmark-ink.svg",
  red: "logo-wordmark-red.svg",
  lockupRed: "logo-lockup-red.svg",
  lockupInk: "logo-lockup-ink.svg"
};
function Logo({
  variant = "ink",
  width = 180,
  assetBase = "assets",
  style,
  ...rest
}) {
  const isLockup = variant.startsWith("lockup");
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase + "/" + (files[variant] || files.ink),
    alt: "Nord Creative",
    style: {
      width,
      height: isLockup ? width : "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Monogram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The "n" from the Nord Creative wordmark, lifted from the supplied logo artwork.
   Never redrawn — this is the same path data as assets/logo-lockup-source.svg. */
const N_PATH = "M101.71,503.15v-142.39h51.54v18.8c14.62-14.62,32.56-21.93,53.82-21.93,15.19,0,27.81,4.09,37.87,12.25,10.06,8.17,15.09,20.41,15.09,36.74v96.54h-53.82v-90.84c0-12.53-1.38-22.07-4.13-28.62-2.75-6.55-8.4-9.83-16.94-9.83-5.13,0-10.39,1.42-15.81,4.27-5.41,2.85-10.01,6.65-13.81,11.39v113.63h-53.82Z";
const BB = {
  x: 101.70,
  y: 357.63,
  w: 158.33,
  h: 145.53
};
const WAYS = {
  red: {
    bg: "var(--nord-red)",
    disc: "var(--nord-white)",
    ink: "var(--nord-red)"
  },
  ink: {
    bg: "var(--nord-ink)",
    disc: "var(--nord-red)",
    ink: "var(--nord-white)"
  },
  paper: {
    bg: "var(--nord-paper)",
    disc: "var(--nord-ink)",
    ink: "var(--nord-paper)"
  },
  white: {
    bg: "var(--nord-white)",
    disc: "var(--nord-red)",
    ink: "var(--nord-white)"
  }
};
const BARE = {
  ink: "var(--nord-ink)",
  white: "var(--nord-white)",
  red: "var(--nord-red)",
  paper: "var(--nord-ink)"
};
function Glyph({
  fill,
  target,
  cx,
  cy
}) {
  const s = target / BB.h;
  const t = "translate(" + (cx - s * (BB.x + BB.w / 2)) + " " + (cy - s * (BB.y + BB.h / 2)) + ") scale(" + s + ")";
  return /*#__PURE__*/React.createElement("g", {
    transform: t,
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    d: N_PATH
  }));
}
function Monogram({
  variant = "red",
  frame = "tile",
  size = 64,
  style,
  ...rest
}) {
  const way = WAYS[variant] || WAYS.red;
  if (frame === "bare") {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: BB.x + " " + BB.y + " " + BB.w + " " + BB.h,
      width: size,
      height: size * (BB.h / BB.w),
      fill: BARE[variant] || BARE.ink,
      role: "img",
      "aria-label": "Nord Creative",
      style: {
        display: "block",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("path", {
      d: N_PATH
    }));
  }
  const round = frame === "circle";
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 512 512",
    width: size,
    height: size,
    role: "img",
    "aria-label": "Nord Creative",
    style: {
      display: "block",
      ...style
    }
  }, rest), round ? /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "256",
    fill: way.bg
  }) : /*#__PURE__*/React.createElement("rect", {
    width: "512",
    height: "512",
    rx: "118",
    ry: "118",
    fill: way.bg
  }), round ? null : /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "158",
    fill: way.disc
  }), /*#__PURE__*/React.createElement(Glyph, {
    fill: round ? way.disc : way.ink,
    target: round ? 196 : 152,
    cx: 256,
    cy: 256
  }));
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Monogram.jsx", error: String((e && e.message) || e) }); }

// components/brand/Watermark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Watermark({
  handle,
  site,
  tone = "primary",
  assetBase = "assets",
  logoWidth = 92,
  style,
  ...rest
}) {
  const caption = site || handle;
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      width: "100%",
      color: inverse ? "var(--text-inverse)" : "var(--text-primary)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: inverse ? "white" : "ink",
    width: logoWidth,
    assetBase: assetBase
  }), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      opacity: .8
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { Watermark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Watermark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  ink: {
    background: "var(--surface-ink)",
    color: "var(--text-inverse)",
    border: "1px solid transparent"
  },
  paper: {
    background: "var(--surface-white)",
    color: "var(--text-primary)",
    border: "1px solid transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-hairline)"
  },
  outlineInverse: {
    background: "transparent",
    color: "var(--text-inverse)",
    border: "1px solid var(--border-inverse)"
  },
  accent: {
    background: "transparent",
    color: "var(--text-accent)",
    border: "1px solid var(--border-accent)"
  }
};
function Badge({
  children,
  tone = "outline",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      padding: "0.55em 1.15em",
      borderRadius: "var(--radius-pill)",
      ...(tones[tone] || tones.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontFamily: "var(--font-body)",
  fontWeight: "var(--weight-semibold)",
  textTransform: "uppercase",
  letterSpacing: "var(--tracking-label)",
  border: "1px solid transparent",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background var(--dur-base) var(--ease-brand), color var(--dur-base) var(--ease-brand), border-color var(--dur-base) var(--ease-brand)"
};
const sizes = {
  sm: {
    fontSize: "var(--text-micro)",
    padding: "0.9em 1.8em"
  },
  md: {
    fontSize: "var(--text-caption)",
    padding: "1.05em 2.1em"
  },
  lg: {
    fontSize: "var(--text-body-sm)",
    padding: "1.15em 2.3em"
  }
};
const variants = {
  accent: {
    background: "var(--surface-accent)",
    color: "var(--text-on-accent)"
  },
  ink: {
    background: "var(--surface-ink)",
    color: "var(--text-inverse)"
  },
  paper: {
    background: "var(--surface-white)",
    color: "var(--text-primary)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    borderColor: "var(--border-hairline)"
  }
};
function Button({
  children,
  variant = "ink",
  size = "md",
  onDark = false,
  trailing,
  disabled,
  href,
  style,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  let css = {
    ...base,
    ...(sizes[size] || sizes.md),
    ...(variants[variant] || variants.ink)
  };
  if (onDark && variant === "outline") css = {
    ...css,
    color: "var(--text-inverse)",
    borderColor: "var(--border-inverse)"
  };
  if (onDark && variant === "ink") css = {
    ...css,
    background: "var(--surface-white)",
    color: "var(--text-primary)"
  };
  css = {
    ...css,
    opacity: disabled ? 0.35 : 1,
    pointerEvents: disabled ? "none" : "auto",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: disabled,
    style: css
  }, rest), /*#__PURE__*/React.createElement("span", null, children), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.1em",
      lineHeight: 1,
      letterSpacing: 0
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  white: {
    background: "var(--surface-white)",
    color: "var(--text-primary)"
  },
  paper: {
    background: "var(--surface-paper)",
    color: "var(--text-primary)"
  },
  ink: {
    background: "var(--surface-ink)",
    color: "var(--text-inverse)"
  }
};
function Card({
  children,
  surface = "white",
  radius = "lg",
  bordered = false,
  elevated = false,
  accentRule = false,
  pad = "var(--pad-card)",
  style,
  ...rest
}) {
  const radii = {
    none: "var(--radius-none)",
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)"
  };
  const s = surfaces[surface] || surfaces.white;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: pad,
      borderRadius: radii[radius] || radii.lg,
      border: bordered ? "1px solid " + (surface === "ink" ? "var(--border-inverse)" : "var(--border-hairline)") : "1px solid transparent",
      borderTop: accentRule ? "2px solid var(--border-accent)" : undefined,
      boxShadow: elevated ? "var(--shadow-card)" : "var(--shadow-none)",
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  accent: {
    background: "var(--surface-accent)",
    color: "var(--text-on-accent)",
    borderColor: "transparent"
  },
  ink: {
    background: "var(--surface-ink)",
    color: "var(--text-inverse)",
    borderColor: "transparent"
  },
  paper: {
    background: "var(--surface-white)",
    color: "var(--text-primary)",
    borderColor: "transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    borderColor: "var(--border-hairline)"
  },
  outlineInverse: {
    background: "transparent",
    color: "var(--text-inverse)",
    borderColor: "var(--border-inverse)"
  }
};
const dims = {
  sm: "var(--control-sm)",
  md: "var(--control-md)",
  lg: "var(--control-lg)"
};
const glyph = {
  sm: "var(--text-body)",
  md: "var(--text-title)",
  lg: "var(--text-subtitle)"
};
function IconButton({
  children = "→",
  tone = "outline",
  size = "md",
  label,
  style,
  ...rest
}) {
  const d = dims[size] || dims.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      border: "1px solid transparent",
      fontSize: glyph[size] || glyph.md,
      lineHeight: 1,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      transition: "background var(--dur-base) var(--ease-brand), color var(--dur-base) var(--ease-brand)",
      ...(tones[tone] || tones.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ImageFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SCRIMS = {
  none: null,
  soft: "linear-gradient(to top, rgba(23,24,26,.30) 0%, rgba(23,24,26,0) 55%)",
  standard: "linear-gradient(to top, rgba(23,24,26,.55) 0%, rgba(23,24,26,.12) 45%, rgba(23,24,26,0) 78%)",
  strong: "linear-gradient(to top, rgba(23,24,26,.72) 0%, rgba(23,24,26,.20) 55%, rgba(23,24,26,0) 88%)"
};
function ImageFrame({
  src,
  alt = "",
  ratio = "4 / 5",
  radius = "none",
  treatment = "mono",
  caption,
  label,
  scrim = "standard",
  style,
  ...rest
}) {
  const radii = {
    none: "var(--radius-none)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    pill: "var(--radius-pill)"
  };
  const filters = {
    mono: "grayscale(1) contrast(1.06)",
    warm: "saturate(.85) contrast(1.04)",
    none: "none"
  };
  const key = scrim === true ? "standard" : scrim === false ? "none" : scrim;
  // The scrim exists to keep type legible over a photograph. With no photograph there is
  // nothing to darken, and it would only bury the placeholder label — so skip it.
  const veil = src ? SCRIMS[key] !== undefined ? SCRIMS[key] : SCRIMS.standard : null;
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      borderRadius: radii[radius] || radii.none,
      background: "var(--surface-muted)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: filters[treatment] || filters.mono,
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-muted)",
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      textAlign: "center",
      padding: "var(--space-4)"
    }
  }, label || "Görsel alanı"), veil ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: veil,
      pointerEvents: "none"
    }
  }) : null), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-2)",
      fontSize: "var(--text-caption)",
      color: "var(--text-secondary)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/editorial/NumberedItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NumberedItem({
  index,
  title,
  body,
  tone = "primary",
  divider = true,
  style,
  ...rest
}) {
  const colors = {
    primary: "var(--text-primary)",
    inverse: "var(--text-inverse)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-5)",
      alignItems: "baseline",
      padding: "var(--space-4) 0",
      borderTop: divider ? "1px solid " + (tone === "inverse" ? "var(--border-inverse)" : "var(--border-hairline)") : "none",
      color: colors[tone] || colors.primary,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-body)",
      color: "var(--text-accent)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, index), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-subtitle)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-tight)",
      lineHeight: "var(--leading-snug)"
    }
  }, title), body ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-body)",
      opacity: .75,
      maxWidth: "44ch"
    }
  }, body) : null));
}
Object.assign(__ds_scope, { NumberedItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/NumberedItem.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PullQuote({
  children,
  attribution,
  role,
  tone = "primary",
  size = "lg",
  accentLine,
  style,
  ...rest
}) {
  const colors = {
    primary: "var(--text-primary)",
    inverse: "var(--text-inverse)"
  };
  const sizes = {
    md: "var(--text-title)",
    lg: "var(--text-headline)",
    xl: "var(--text-display-3)"
  };
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      color: colors[tone] || colors.primary,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      fontSize: sizes[size] || sizes.lg,
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      textWrap: "pretty"
    }
  }, children), accentLine ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontFamily: "var(--font-accent)",
      fontStyle: "italic",
      fontSize: "var(--text-body-lg)",
      opacity: .8
    }
  }, accentLine) : null, attribution ? /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "var(--space-5)",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "var(--nord-red)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-semibold)"
    }
  }, attribution), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      opacity: .6
    }
  }, role) : null) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/StatFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatFigure({
  value,
  suffix,
  label,
  tone = "primary",
  size = "lg",
  align = "left",
  style,
  ...rest
}) {
  const colors = {
    primary: "var(--text-primary)",
    inverse: "var(--text-inverse)",
    accent: "var(--text-accent)"
  };
  const sizes = {
    md: "var(--text-display-3)",
    lg: "var(--text-display-1)",
    xl: "var(--text-mega)"
  };
  // --text-mega is a fixed 180px; use --text-mega-fluid only on responsive web pages.
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      color: colors[tone] || colors.primary,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-extrabold)",
      fontSize: sizes[size] || sizes.lg,
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-mega)"
    }
  }, value, suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".55em",
      verticalAlign: "super",
      letterSpacing: 0
    }
  }, suffix) : null), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-snug)",
      opacity: .78,
      maxWidth: "26ch",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, label) : null);
}
Object.assign(__ds_scope, { StatFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/StatFigure.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  tone = "primary",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: "pointer",
      fontSize: "var(--text-body-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1.35em",
      height: "1.35em",
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid " + (checked ? "var(--border-accent)" : inverse ? "var(--border-inverse)" : "var(--border-strong)"),
      background: checked ? "var(--surface-accent)" : "transparent",
      color: "var(--text-on-accent)",
      fontSize: "0.7em",
      lineHeight: 1,
      transition: "background var(--dur-fast) var(--ease-brand), border-color var(--dur-fast) var(--ease-brand)"
    }
  }, checked ? "✓" : ""), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? "var(--text-inverse)" : "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  invalid,
  tone = "primary",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: "var(--space-2)",
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-inverse)" : "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "0.8em 0",
      background: "transparent",
      border: "none",
      borderBottom: invalid ? "1px solid var(--border-accent)" : "1px solid " + (inverse ? "var(--border-inverse)" : "var(--border-hairline)"),
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: inverse ? "var(--text-inverse)" : "var(--text-primary)",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-brand)"
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "var(--space-2)",
      fontSize: "var(--text-caption)",
      color: inverse ? "rgba(255,255,255,.65)" : "var(--text-secondary)"
    }
  }, invalid ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "var(--nord-red)",
      flex: "0 0 auto"
    }
  }) : null, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  tone = "primary",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: "var(--space-2)",
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-inverse)" : "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "0.8em 0",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid " + (inverse ? "var(--border-inverse)" : "var(--border-hairline)"),
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: inverse ? "var(--text-inverse)" : "var(--text-primary)",
      outline: "none",
      borderRadius: 0
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Canvas.jsx
try { (() => {
const {
  Watermark,
  Eyebrow
} = window.NordCreative_abb8dd;
const AB = "../../assets";
function PostCanvas({
  w = 1080,
  h = 1350,
  surface = "paper",
  pad = 70,
  children,
  footer = true,
  footerTone,
  handle,
  guides = false,
  style
}) {
  const bg = {
    paper: "var(--surface-paper)",
    white: "var(--surface-white)",
    ink: "var(--surface-ink)"
  }[surface];
  const tone = footerTone || (surface === "ink" ? "inverse" : "primary");
  return /*#__PURE__*/React.createElement("div", {
    className: "nord-canvas",
    style: {
      width: w,
      height: h,
      background: bg,
      position: "relative",
      overflow: "hidden",
      flex: "0 0 auto",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: pad,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement(Watermark, {
    tone: tone,
    handle: handle,
    assetBase: AB,
    logoWidth: 132
  })) : null), guides ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 33.5,
      right: 33.5,
      outline: "2px dashed rgba(0,229,255,.9)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 200,
      borderTop: "2px dashed rgba(0,229,255,.55)"
    }
  })) : null);
}
function Scaled({
  w,
  h,
  scale,
  children,
  crop
}) {
  const outW = crop ? crop.w : w * scale,
    outH = crop ? crop.h : h * scale;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: outW,
      height: outH,
      overflow: "hidden",
      position: "relative",
      background: "var(--surface-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: crop ? (crop.h - h * scale) / 2 : 0,
      left: crop ? (crop.w - w * scale) / 2 : 0,
      width: w,
      height: h,
      transform: "scale(" + scale + ")",
      transformOrigin: "top left"
    }
  }, children));
}
Object.assign(window, {
  PostCanvas,
  Scaled,
  NORD_AB: AB
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Feed.jsx
try { (() => {
const {
  Logo,
  Badge,
  Button,
  Eyebrow
} = window.NordCreative_abb8dd;
const AB = window.NORD_AB;
function ProfileHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      alignItems: "flex-start",
      padding: "36px 0 28px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AB + "/avatar-red.svg",
    alt: "Nord Creative",
    style: {
      width: 132,
      height: 132,
      borderRadius: "var(--radius-pill)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-.01em"
    }
  }, "nordcreative.co"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "sm"
  }, "Takip et"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Mesaj")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginTop: 18,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "412"), " g\xF6nderi"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "18,4B"), " takip\xE7i"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "289"), " takip")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 15,
      lineHeight: 1.5,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement("b", null, "Prod\xFCksiyon & dijital pazarlama"), /*#__PURE__*/React.createElement("br", null), "Foto\u011Fraf, video, sosyal medya y\xF6netimi. 5 y\u0131l, tek ekip."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Video"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "\xDCr\xFCn \xE7ekimi"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Podcast"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "YouTube"))));
}
function FeedGrid({
  posts,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "G\xF6nderiler"), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Reels"), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Etiketlenenler")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 4
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    role: "button",
    tabIndex: 0,
    "aria-label": p.label,
    onClick: () => onOpen(i),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen(i);
      }
    },
    style: {
      cursor: "pointer",
      display: "block",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Scaled, {
    w: 1080,
    h: 1350,
    scale: 344 / 1080,
    crop: {
      w: 344,
      h: 344
    }
  }, p.el))))));
}
function Viewer({
  posts,
  index,
  onClose,
  onStep
}) {
  if (index == null) return null;
  const p = posts[index];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(23,24,26,.82)",
      backdropFilter: "var(--blur-veil)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 28,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onStep(-1);
    },
    style: navBtn
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      boxShadow: "var(--shadow-float)"
    }
  }, /*#__PURE__*/React.createElement(Scaled, {
    w: 1080,
    h: 1350,
    scale: 520 / 1080
  }, p.el), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-white)",
      padding: "14px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, p.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "1080 \xD7 1350"))), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onStep(1);
    },
    style: navBtn
  }, "\u2192"));
}
const navBtn = {
  width: 52,
  height: 52,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,.35)",
  background: "transparent",
  color: "#fff",
  fontSize: 22,
  cursor: "pointer"
};
Object.assign(window, {
  ProfileHeader,
  FeedGrid,
  Viewer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Feed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Posts.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Card,
  Logo,
  Monogram,
  Eyebrow,
  StatFigure,
  PullQuote,
  NumberedItem,
  ImageFrame
} = window.NordCreative_abb8dd;
const AB = window.NORD_AB;
const display = (size, weight = 800) => ({
  fontFamily: "var(--font-display)",
  fontWeight: weight,
  fontSize: size,
  lineHeight: 1.0,
  letterSpacing: "-.035em",
  margin: 0,
  textWrap: "pretty"
});
function HeroPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "ink"
  }, /*#__PURE__*/React.createElement(Monogram, {
    variant: "red",
    size: 104
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...display(140),
      marginBottom: 36
    }
  }, "Hik\xE2yeni", /*#__PURE__*/React.createElement("br", null), "\xE7ekelim."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 2,
      background: "var(--nord-red)",
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 30,
      lineHeight: 1.35,
      maxWidth: "24ch",
      opacity: .78
    }
  }, "Foto\u011Fraf, video ve sosyal medya \u2014 tek ekipten, ba\u015Ftan sona."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    trailing: "\u2192"
  }, "Projeyi konu\u015Fal\u0131m"))));
}
function StatPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "accent"
  }, "Be\u015F y\u0131l"), /*#__PURE__*/React.createElement(IconButton, {
    tone: "outline",
    label: "ileri"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    value: "5",
    suffix: "+",
    size: "xl",
    label: "y\u0131ld\u0131r markalar\u0131n \xFCr\xFCnlerini, ekiplerini ve hik\xE2yelerini kameraya al\u0131yoruz."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Video prod\xFCksiyon"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "\xDCr\xFCn \xE7ekimi"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Sosyal medya"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Podcast"))));
}
function QuotePost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "ink"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "inverse"
  }, "Yakla\u015F\u0131m"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    tone: "inverse",
    size: "xl",
    accentLine: "Marka, siz odada yokken s\xF6ylenendir."
  }, "\u0130yi g\xF6r\xFCnt\xFC \u015Fans de\u011Fil, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nord-red)"
    }
  }, "kurgu"), " meselesi.")));
}
function ServiceListPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bracketed: true
  }, "Hizmetler"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "2026")), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(84),
      marginTop: 40
    }
  }, "Ne yap\u0131yoruz?"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      marginTop: 40
    }
  }, ["Video ve fotoğraf prodüksiyonu", "E-ticaret ve ürün çekimleri", "Sosyal medya ve kurumsal içerik", "YouTube, podcast ve röportaj"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      padding: "28px 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: "var(--nord-red)",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 34,
      letterSpacing: "-.02em"
    }
  }, t)))));
}
function TestimonialPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "ink"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true
  }, "Referans"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "white",
    radius: "lg",
    elevated: true,
    accentRule: true,
    pad: "60px",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    size: "lg",
    attribution: "Selin Ayd\u0131n",
    role: "Pazarlama Direkt\xF6r\xFC"
  }, "\"\xC7ekim g\xFCn\xFCnden yay\u0131na kadar her ad\u0131m\u0131 onlar ta\u015F\u0131d\u0131. \u0130\xE7erik takvimimiz ilk kez \u015Fa\u015Fmad\u0131.\""))));
}
function MeetingPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bracketed: true
  }, "Tan\u0131\u015Fma"), /*#__PURE__*/React.createElement(IconButton, {
    tone: "outline",
    label: "ileri"
  }, "\u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(104)
    }
  }, "Bir kahve", /*#__PURE__*/React.createElement("br", null), "i\xE7elim mi?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontSize: 28,
      lineHeight: 1.4,
      maxWidth: "26ch",
      color: "var(--text-secondary)"
    }
  }, "Projenizi 30 dakikal\u0131k bir g\xF6r\xFC\u015Fmede birlikte de\u011Ferlendirelim."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    trailing: "\u2192"
  }, "Randevu al"))));
}
function ReelCoverPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "ink",
    pad: 0,
    footer: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1080 / 1350",
    scrim: "strong",
    label: "Set g\xF6rseli \u2014 dikey 4:5",
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 70,
      display: "flex",
      flexDirection: "column",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bracketed: true,
    tone: "inverse"
  }, "Kamera arkas\u0131"), /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    width: 132,
    assetBase: AB
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(112)
    }
  }, "Set", /*#__PURE__*/React.createElement("br", null), "g\xFCn\xFC."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      opacity: .75
    }
  }, "Reels \xB7 00:42"), /*#__PURE__*/React.createElement(IconButton, {
    tone: "paper",
    label: "oynat"
  }, "\u25B6"))));
}
function ProductGridPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "accent"
  }, "E-ticaret \xE7ekimi"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Portfolyo")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      marginTop: 36,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1 / 1",
    scrim: "soft",
    label: "Detay"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1 / 1",
    scrim: "soft",
    label: "Paket"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1 / 1",
    scrim: "soft",
    label: "Kullan\u0131m"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-ink)",
      color: "var(--text-inverse)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 2,
      background: "var(--nord-red)",
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...display(56)
    }
  }, "12 \xFCr\xFCn,", /*#__PURE__*/React.createElement("br", null), "bir g\xFCn."))));
}
function CarouselSlide({
  eyebrow,
  title,
  body,
  surface = "ink"
}) {
  const inverse = surface === "ink";
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: surface,
    footerTone: inverse ? "inverse" : "primary"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: inverse ? "inverse" : "primary",
    bracketed: true
  }, eyebrow), /*#__PURE__*/React.createElement(IconButton, {
    tone: inverse ? "outlineInverse" : "outline",
    label: "ileri"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: inverse ? "var(--text-inverse)" : "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      height: 2,
      background: "var(--nord-red)",
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(96)
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontSize: 28,
      lineHeight: 1.4,
      maxWidth: "28ch",
      opacity: inverse ? .75 : 1,
      color: inverse ? undefined : "var(--text-secondary)"
    }
  }, body) : null));
}
const POSTS = [{
  id: "hero",
  label: "Açılış",
  el: /*#__PURE__*/React.createElement(HeroPost, null)
}, {
  id: "stat",
  label: "Rakam",
  el: /*#__PURE__*/React.createElement(StatPost, null)
}, {
  id: "quote",
  label: "Söz",
  el: /*#__PURE__*/React.createElement(QuotePost, null)
}, {
  id: "services",
  label: "Hizmet listesi",
  el: /*#__PURE__*/React.createElement(ServiceListPost, null)
}, {
  id: "reel",
  label: "Reels kapağı",
  el: /*#__PURE__*/React.createElement(ReelCoverPost, null)
}, {
  id: "testimonial",
  label: "Referans",
  el: /*#__PURE__*/React.createElement(TestimonialPost, null)
}, {
  id: "grid",
  label: "Ürün grid",
  el: /*#__PURE__*/React.createElement(ProductGridPost, null)
}, {
  id: "meeting",
  label: "Toplantı CTA",
  el: /*#__PURE__*/React.createElement(MeetingPost, null)
}, {
  id: "carousel",
  label: "Karusel",
  el: /*#__PURE__*/React.createElement(CarouselSlide, {
    eyebrow: "S\xFCre\xE7",
    title: "Ke\u015Fif g\xF6r\xFC\u015Fmesi",
    body: "Marka, hedef ve takvimi birlikte netle\u015Ftiriyoruz.",
    surface: "ink"
  })
}];
Object.assign(window, {
  HeroPost,
  StatPost,
  QuotePost,
  ServiceListPost,
  TestimonialPost,
  MeetingPost,
  ReelCoverPost,
  ProductGridPost,
  CarouselSlide,
  POSTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Posts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/PostsB.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Card,
  Logo,
  Monogram,
  Eyebrow,
  StatFigure,
  PullQuote,
  NumberedItem,
  ImageFrame
} = window.NordCreative_abb8dd;
const AB = window.NORD_AB;
const d = (size, weight = 800) => ({
  fontFamily: "var(--font-display)",
  fontWeight: weight,
  fontSize: size,
  lineHeight: 1.0,
  letterSpacing: "-.035em",
  margin: 0,
  textWrap: "pretty"
});

/* Kart-içinde-kart: paper zemin, yuvarlak hatlı beyaz kart, büyük index rakamı. */
function InsetCardPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    variant: "red",
    size: 92
  }), /*#__PURE__*/React.createElement(IconButton, {
    tone: "outline",
    label: "ileri"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "white",
    radius: "xl",
    bordered: true,
    pad: "56px"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...d(66, 500),
      lineHeight: 1.08
    }
  }, "Markan\u0131z her g\xFCn konu\u015Fuyor. Ne s\xF6yledi\u011Fini biliyor musunuz?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 72,
      height: 2,
      background: "var(--nord-red)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 26,
      lineHeight: 1.4,
      maxWidth: "24ch",
      color: "var(--text-secondary)"
    }
  }, "\u0130\xE7erik takvimi olan markalar iki kat h\u0131zl\u0131 b\xFCy\xFCyor."), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Strateji"))));
}

/* Ekip / rol kartı: dikey portre + altta isim şeridi. */
function TeamCardPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "accent"
  }, "Ekip"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Y\xF6netmen")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      marginTop: 32,
      position: "relative",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "var(--surface-ink)"
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1080 / 1180",
    scrim: "strong",
    label: "Ekip portresi \u2014 dikey",
    style: {
      height: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44,
      right: 44,
      bottom: 44,
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...d(62),
      color: "var(--text-inverse)"
    }
  }, "Deniz Aksoy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    tone: "accent",
    size: "sm",
    label: "profil"
  }, "\u2197"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outlineInverse"
  }, "G\xF6r\xFCnt\xFC y\xF6netmeni")))));
}

/* Donut istatistik. */
function DonutStatPost() {
  const pct = 40;
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bracketed: true
  }, "Veri"), /*#__PURE__*/React.createElement(IconButton, {
    tone: "outline",
    label: "geri"
  }, "\u2190")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...d(150)
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      fontSize: 26,
      lineHeight: 1.4,
      maxWidth: "30ch",
      color: "var(--text-secondary)"
    }
  }, "D\xFCzenli video i\xE7eri\u011Fi yay\u0131nlayan markalarda etkile\u015Fim art\u0131\u015F\u0131.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "conic-gradient(var(--nord-red) 0 " + pct + "%, var(--nord-ink) " + pct + "% " + (pct + 22) + "%, var(--grey-200) " + (pct + 22) + "% 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 178,
      height: 178,
      borderRadius: "50%",
      background: "var(--surface-white)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20,
      fontSize: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 16,
      height: 16,
      background: "var(--nord-red)"
    }
  }), "Video"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 16,
      height: 16,
      background: "var(--nord-ink)"
    }
  }), "Foto\u011Fraf"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 16,
      height: 16,
      background: "var(--grey-200)"
    }
  }), "Di\u011Fer")))));
}

/* Hizmet kelime yığını — biri vurgulu. */
function WordStackPost() {
  const words = ["prodüksiyon", "fotoğraf", "sosyal medya", "podcast", "reklam"];
  const active = 2;
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "ink"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bracketed: true,
    tone: "inverse"
  }, "Hizmetler"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 6
    }
  }, words.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...d(80),
      color: i === active ? "var(--text-inverse)" : "rgba(255,255,255,.22)"
    }
  }, w), i === active ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nord-red)",
      fontSize: 54,
      lineHeight: 1
    }
  }, "\u2192") : null)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "48px 0 0",
      fontSize: 26,
      lineHeight: 1.4,
      maxWidth: "30ch",
      color: "rgba(255,255,255,.6)"
    }
  }, "Her ay bir hizmeti anlat\u0131yoruz. Bu ay: sosyal medya y\xF6netimi.")));
}

/* Etkinlik / yayın programı. */
function SchedulePost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...d(74, 700)
    }
  }, "Nord", /*#__PURE__*/React.createElement("br", null), "Talks"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...d(74, 700),
      textAlign: "right"
    }
  }, "12", /*#__PURE__*/React.createElement("br", null), ".11")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 160,
      height: 160
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 79,
      left: 0,
      width: 160,
      height: 2,
      background: "var(--nord-red)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 79,
      top: 0,
      height: 160,
      width: 2,
      background: "var(--nord-red)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...d(74, 700)
    }
  }, "18", /*#__PURE__*/React.createElement("br", null), ":00"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...d(74, 700),
      textAlign: "right"
    }
  }, "canl\u0131", /*#__PURE__*/React.createElement("br", null), "yay\u0131n")));
}

/* Kontrol listesi. */
function ChecklistPost() {
  const items = ["Tek bir hedef belirleyin", "Çekim gününü sabitleyin", "İçerikleri haftaya yayın"];
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "accent"
  }, "Lansman \xF6ncesi"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "3 ad\u0131m")), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...d(86),
      marginTop: 44
    }
  }, "\xC7ekimden", /*#__PURE__*/React.createElement("br", null), "\xF6nce."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      marginTop: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 28
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      border: "1px solid " + (i === 0 ? "var(--nord-red)" : "var(--border-hairline)"),
      background: i === 0 ? "var(--nord-red)" : "transparent",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 17,
      flex: "0 0 auto"
    }
  }, i === 0 ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      letterSpacing: "-.02em"
    }
  }, t)))));
}

/* Kapanış / seri sonu. */
function ClosingPost() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    surface: "white"
  }, /*#__PURE__*/React.createElement(Monogram, {
    variant: "red",
    size: 92
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...d(150)
    }
  }, "G\xF6r\xFC\u015Fmek", /*#__PURE__*/React.createElement("br", null), "\xFCzere."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 2,
      background: "var(--nord-red)",
      marginTop: 52
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "52px 0 0",
      fontSize: 26,
      lineHeight: 1.45,
      maxWidth: "30ch",
      color: "var(--text-secondary)"
    }
  }, "Hik\xE2yeniz burada bitmiyor \u2014 as\u0131l k\u0131sm\u0131 birlikte \xE7ekece\u011Fiz.")));
}
const POSTS_B = [{
  id: "inset",
  label: "Kart içi metin",
  el: /*#__PURE__*/React.createElement(InsetCardPost, null)
}, {
  id: "team",
  label: "Ekip kartı",
  el: /*#__PURE__*/React.createElement(TeamCardPost, null)
}, {
  id: "donut",
  label: "Donut veri",
  el: /*#__PURE__*/React.createElement(DonutStatPost, null)
}, {
  id: "words",
  label: "Kelime yığını",
  el: /*#__PURE__*/React.createElement(WordStackPost, null)
}, {
  id: "schedule",
  label: "Program",
  el: /*#__PURE__*/React.createElement(SchedulePost, null)
}, {
  id: "checklist",
  label: "Kontrol listesi",
  el: /*#__PURE__*/React.createElement(ChecklistPost, null)
}, {
  id: "closing",
  label: "Kapanış",
  el: /*#__PURE__*/React.createElement(ClosingPost, null)
}];
Object.assign(window, {
  InsetCardPost,
  TeamCardPost,
  DonutStatPost,
  WordStackPost,
  SchedulePost,
  ChecklistPost,
  ClosingPost,
  POSTS_B
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/PostsB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stories/Stories.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Card,
  Logo,
  Eyebrow,
  StatFigure,
  PullQuote,
  NumberedItem,
  ImageFrame,
  Input,
  Select,
  Checkbox,
  Watermark
} = window.NordCreative_abb8dd;
const AB = "../../assets";
const display = (size, weight = 800) => ({
  fontFamily: "var(--font-display)",
  fontWeight: weight,
  fontSize: size,
  lineHeight: 1.0,
  letterSpacing: "-.035em",
  margin: 0,
  textWrap: "pretty"
});
function StoryCanvas({
  surface = "paper",
  children,
  pad = 132
}) {
  const bg = {
    paper: "var(--surface-paper)",
    white: "var(--surface-white)",
    ink: "var(--surface-ink)"
  }[surface];
  return /*#__PURE__*/React.createElement("div", {
    className: "nord-canvas",
    style: {
      width: 1080,
      height: 1920,
      background: bg,
      position: "relative",
      overflow: "hidden",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: pad,
      display: "flex",
      flexDirection: "column"
    }
  }, children));
}
function StoryAnnounce() {
  return /*#__PURE__*/React.createElement(StoryCanvas, {
    surface: "ink"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    width: 190,
    assetBase: AB
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bracketed: true,
    tone: "inverse"
  }, "\u015Eimdi rezervasyon"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(168),
      marginTop: 48
    }
  }, "Ekim", /*#__PURE__*/React.createElement("br", null), "takvimi", /*#__PURE__*/React.createElement("br", null), "a\xE7\u0131ld\u0131."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 2,
      background: "var(--nord-red)",
      marginTop: 52
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 52,
      fontSize: 38,
      lineHeight: 1.4,
      maxWidth: "20ch",
      opacity: .72
    }
  }, "\xC7ekim g\xFCnlerinin \xE7o\u011Fu doldu. Kalan tarihler i\xE7in yaz\u0131n.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    trailing: "\u2192",
    style: {
      alignSelf: "flex-start"
    }
  }, "DM'den yaz\u0131n"));
}
function StoryTeaser() {
  return /*#__PURE__*/React.createElement(StoryCanvas, {
    surface: "ink",
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "9 / 16",
    scrim: "strong",
    label: "Dikey video karesi \u2014 9:16",
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 132,
      display: "flex",
      flexDirection: "column",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bracketed: true,
    tone: "inverse"
  }, "Kamera arkas\u0131"), /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    width: 140,
    assetBase: AB
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(150)
    }
  }, "Yeni", /*#__PURE__*/React.createElement("br", null), "i\u015F."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 36,
      fontSize: 36,
      opacity: .78
    }
  }, "Yar\u0131n yay\u0131nda."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    tone: "accent",
    size: "lg",
    label: "yukar\u0131 kayd\u0131r"
  }, "\u2191"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      opacity: .65
    }
  }, "Kayd\u0131r\u0131n"))));
}
function StoryBrief() {
  return /*#__PURE__*/React.createElement(StoryCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "ink",
    width: 160,
    assetBase: AB
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Brief")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(116)
    }
  }, "Projeni", /*#__PURE__*/React.createElement("br", null), "anlat."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 2,
      background: "var(--nord-red)",
      margin: "44px 0 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "grid",
      gap: 52
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Ad Soyad",
    placeholder: "Ad\u0131n\u0131z"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Hizmet",
    options: ["Video prodüksiyon", "Ürün çekimi", "Sosyal medya yönetimi", "Podcast"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "KVKK metnini okudum.",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    trailing: "\u2192",
    style: {
      justifySelf: "start"
    }
  }, "G\xF6nder"))), /*#__PURE__*/React.createElement(Logo, {
    variant: "ink",
    width: 150,
    assetBase: AB,
    style: {
      alignSelf: "flex-end"
    }
  }));
}
function StoryQuote() {
  return /*#__PURE__*/React.createElement(StoryCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "accent"
  }, "Referans"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    size: "xl",
    attribution: "Selin Ayd\u0131n",
    role: "Pazarlama Direkt\xF6r\xFC"
  }, "\"\u0130\xE7erik takvimimiz ilk kez \u015Fa\u015Fmad\u0131.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    value: "120",
    suffix: "+",
    label: "tamamlanan prod\xFCksiyon",
    size: "md"
  }))), /*#__PURE__*/React.createElement(Watermark, {
    assetBase: AB,
    logoWidth: 150
  }));
}

/* Geri sayım — referans panolarındaki "FALTAN" düzeninin Nord karşılığı. */
function StoryCountdown() {
  const cells = [["08", "Gün"], ["05", "Saat"], ["14", "Dakika"]];
  return /*#__PURE__*/React.createElement(StoryCanvas, {
    surface: "ink",
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "9 / 16",
    scrim: "strong",
    label: "Ekip / set g\xF6rseli \u2014 9:16",
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 132,
      display: "flex",
      flexDirection: "column",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bracketed: true,
    tone: "inverse"
  }, "Yak\u0131nda"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(150)
    }
  }, "Yeni", /*#__PURE__*/React.createElement("br", null), "seri."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 56
    }
  }, cells.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flex: 1,
      border: "1px solid var(--border-inverse)",
      borderRadius: "var(--radius-md)",
      padding: "26px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...display(74)
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 20,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      opacity: .6
    }
  }, l))))));
}

/* Yeni içerik duyurusu — beyaz kart, story zemininde bolca boşluk. */
function StoryNewPost() {
  return /*#__PURE__*/React.createElement(StoryCanvas, {
    surface: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "ink",
    width: 160,
    assetBase: AB
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Yeni")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "white",
    radius: "xl",
    bordered: true,
    pad: "52px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "accent"
  }, "Blog"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...display(84),
      marginTop: 32
    }
  }, "\xC7ekim", /*#__PURE__*/React.createElement("br", null), "brief'i nas\u0131l", /*#__PURE__*/React.createElement("br", null), "yaz\u0131l\u0131r?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "16 / 10",
    scrim: "soft",
    radius: "lg",
    label: "Kapak g\xF6rseli \u2014 16:10"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    tone: "accent",
    size: "lg",
    label: "yukar\u0131 kayd\u0131r"
  }, "\u2191"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      color: "var(--text-secondary)"
    }
  }, "Yaz\u0131y\u0131 okuyun"))));
}
const STORIES = [{
  id: "announce",
  label: "Duyuru",
  el: /*#__PURE__*/React.createElement(StoryAnnounce, null)
}, {
  id: "teaser",
  label: "Teaser",
  el: /*#__PURE__*/React.createElement(StoryTeaser, null)
}, {
  id: "brief",
  label: "Brief formu",
  el: /*#__PURE__*/React.createElement(StoryBrief, null)
}, {
  id: "quote",
  label: "Referans",
  el: /*#__PURE__*/React.createElement(StoryQuote, null)
}, {
  id: "countdown",
  label: "Geri sayım",
  el: /*#__PURE__*/React.createElement(StoryCountdown, null)
}, {
  id: "newpost",
  label: "Yeni içerik",
  el: /*#__PURE__*/React.createElement(StoryNewPost, null)
}];
Object.assign(window, {
  StoryCanvas,
  StoryAnnounce,
  StoryTeaser,
  StoryBrief,
  StoryQuote,
  StoryCountdown,
  StoryNewPost,
  STORIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stories/Stories.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Monogram = __ds_scope.Monogram;

__ds_ns.Watermark = __ds_scope.Watermark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.NumberedItem = __ds_scope.NumberedItem;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.StatFigure = __ds_scope.StatFigure;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
