import React from "react";
import PropTypes from "prop-types";

const Ship = props => {
  const { name } = props;

  return (
    <div>
      <svg viewBox="0 0 250 111.69" className={name}>
          <path fill="#000000" fill-opacity=".5" d="M67.85 76.642c8.68-.113 15.986-5.783 18.579-13.58a19.818 19.818 0 0 0 1.007-6.524c-.143-10.96-9.144-19.729-20.104-19.586-10.96.144-19.729 9.144-19.586 20.105.026 1.978.34 3.885.904 5.681 2.553 8.154 10.219 14.021 19.2 13.904z"/>
          <path fill="#626B71" d="M120.603 57.319c-.251-19.219 27.802-36.392 46.702-45.77l-37.247.487-.146-11.167L196.427 0l.146 11.167-21.351.278c-9.99 9.262-24.8 26.262-24.549 45.48.236 18.006 13.633 33.719 23.736 43.03l23.32-.305.146 11.167-66.515.869-.146-11.167 33.542-.438c-18.896-9.196-43.918-24.758-44.153-42.762z"/>
          <path className="flame" fill="#FFC806" d="M153.247 40.998c-.289-.518 12.01-12.01 38.837-12.05 0 0-8.38 3.23-14.249 7.674 0 0 37.419-1.113 55.418 15.497 0 0-18.814 16.468-56.862 17.277 0 0 9.508 11.418 18.237 10.992 0 0-32.782-2.067-40.686-10.075-7.903-8.008-6.515-21.128-.695-29.315z"/>
          <path className="flame" fill="#F9991C" d="M152.182 44.159c-.225-.404 9.347-9.348 30.227-9.378 0 0-6.523 2.513-11.091 5.972 0 0 29.124-.867 43.132 12.062 0 0-14.643 12.816-44.255 13.446 0 0 7.4 8.886 14.194 8.555 0 0-25.515-1.61-31.666-7.841-6.151-6.233-5.071-16.444-.541-22.816z"/>
          <path className="flame" fill="#F57921" d="M150.618 48.8c-.131-.236 5.438-5.44 17.586-5.457 0 0-3.795 1.462-6.452 3.474 0 0 16.945-.504 25.095 7.018 0 0-8.52 7.457-25.749 7.823 0 0 4.305 5.17 8.258 4.978 0 0-14.844-.936-18.423-4.562-3.579-3.626-2.951-9.568-.315-13.275z"/>
          <path className="sideflame" fill="#FFC806" d="M196.421 8.292c-.131.105 5.73 2.267 18.296 2.041 0 0-3.954-.564-6.741-1.39 0 0 17.536-.106 25.822-3.542 0 0-8.955-3.088-26.784-2.916 0 0 4.354-2.337 8.447-2.33 0 0-15.337.694-18.969 2.344-3.632 1.65-2.868 4.228-.071 5.793zM197.596 108.483c-.132.105 5.729 2.267 18.295 2.041 0 0-3.953-.564-6.741-1.391 0 0 17.537-.105 25.822-3.541 0 0-8.955-3.088-26.783-2.916 0 0 4.354-2.337 8.446-2.329 0 0-15.337.693-18.969 2.343-3.632 1.649-2.868 4.228-.07 5.793z"/>
          <path fill="#FFFFFF" fill-opacity=".15" d="M69.448 43.057c6.734 2.1-3.665 4.859-5.928 12.115s4.468 16.262-2.266 14.162c-6.734-2.1-10.36-9.685-8.096-16.941 2.262-7.256 9.556-11.436 16.29-9.336z"/>
          <path fill="#A7A7A7" d="M46.958 62.626C24.884 61.11 8.298 57.91 1.612 56.65 8.97 52.076 40.67 33.84 78.939 33.34c32.5-.425 60.599 12.062 72.91 18.518l-2.059.62c-21.374 6.492-42.844 9.518-62.624 10.545l-.737.037a19.818 19.818 0 0 0 1.007-6.523c-.143-10.96-9.144-19.729-20.104-19.586-10.96.144-19.729 9.144-19.586 20.105.026 1.978.34 3.885.904 5.681l-1.692-.112z"/>
          <path fill="#C4C4C4" d="M48.65 62.739c2.553 8.153 10.219 14.02 19.2 13.903 8.68-.113 15.986-5.783 18.579-13.58l.737-.038c19.78-1.027 41.25-4.053 62.624-10.545l2.059-.62c4.267 2.238 6.638 3.75 6.638 3.75s-35.174 23.768-78.94 24.34C35.784 80.521 0 57.68 0 57.68l1.612-1.031c6.687 1.26 23.272 4.46 45.346 5.977l1.692.113z"/>
      </svg>

      <style jsx>{`
        svg {
          z-index: 10;
        }

        .flame{
            animation-duration: 300ms;
            animation-name: flame;
            animation-iteration-count: infinite;
            transform-origin: 0% 50%;
            will-change: transform;
        }

        .sideflame{
            animation-duration: 200ms;
            animation-name: sideflame;
            animation-iteration-count: infinite;
            transform-origin: 0% 50%;
            will-change: transform;
        }

        @keyframes flame{
            from{
                transform: translate(-5%);
            }
            to{
                transform: translate(5%);
            }
        }

        @keyframes sideflame{
            from{
                transform:scale(.95);
                fill:#FF5000;
            }
            to{
                transform: scale(1);
                fill:#FFC806;
            }
        }
      `}</style>
    </div>
  );
};

Ship.propTypes = {
  name: PropTypes.string
};

export default Ship;
