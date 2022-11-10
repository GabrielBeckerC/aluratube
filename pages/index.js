import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

import Banner from "./../src/assets/images/banner.jpg";
import { Favorites } from "../src/components/Favorites";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu />
        <Header link={Banner.src} />
        <Timeline playlists={config.playlists} />
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  .banner {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
`;

function Header({ link }) {
  return (
    <StyledHeader>
      <img className="banner" src={link} alt="banner-codigo" />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}  alt={config.name}/>
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

const StyledFooter = styled.div`
  padding: 16px 32px;
`;

function Footer() {
  return (
    <StyledFooter>
      <h2>Favoritos</h2>
      <Favorites />
    </StyledFooter>
  );
}