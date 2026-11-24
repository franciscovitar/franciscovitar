// Vector glyphs avoid platform-dependent emoji rendering, including iOS Safari.
export default function Arrow({direction="up-right"}) {
 const paths={"up-right":"M5 19 19 5 M7 5h12v12",right:"M4 12h16 M14 6l6 6-6 6",left:"M20 12H4 M10 6l-6 6 6 6",up:"M12 20V4 M6 10l6-6 6 6",down:"M12 4v16 M6 14l6 6 6-6"};
 return <svg className="ui-arrow" aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d={paths[direction]||paths["up-right"]}/></svg>
}
