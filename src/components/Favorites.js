import config from "../../config.json";
import styled from "styled-components";

const StyledFavorites = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  span {
    color: ${({ theme }) => theme.textColorBase};
  }
`;

export function Favorites({}) {
  const favorites = config["favorites-cards"];

  return (
    <StyledFavorites>
      {favorites.map((card) => {
        return (
          <a href={`https:///github.com/${card.github}`} target="_blank">
            <img
              src={`https://github.com/${card.github}.png`}
              alt={card.github}
            />
            <span>@{card.github}</span>
          </a>
        );
      })}
    </StyledFavorites>
  );
}
