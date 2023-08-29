import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as SC from './CatalogList.styled';

const { BASE_URL_IMG } = window.global;

export const CatalogList = ({ products }) => {
  return (
    <SC.Grid>
      {products.map(card => {
        return (
          <SC.Card key={card._id}>
            <NavLink to={`/catalog/${card._id}`}>
              <SC.CardImage
                src={BASE_URL_IMG + card.images[0]}
                alt={card.name}
                width="285"
                height="460"
                loading="lazy"
              />
              <SC.CardTitle>
                <SC.CardName>{card.name}</SC.CardName>
                <SC.CardPrices>
                  {card.currentPrice && (
                    <SC.CardDiscount>
                      {card.currentPrice}
                      {card.currency}
                    </SC.CardDiscount>
                  )}
                  {card.oldPrice && (
                    <SC.CardPrice>
                      {card.oldPrice}
                      {card.currency}
                    </SC.CardPrice>
                  )}
                </SC.CardPrices>
              </SC.CardTitle>
              <SC.CardSize>
                <span>Size</span>
                <div>
                  {card.options.map(option => {
                    return (
                      option.total != 0 && (
                        <span key={option._id}>{option.title}</span>
                      )
                    );
                  })}
                </div>
              </SC.CardSize>
            </NavLink>
          </SC.Card>
        );
      })}
    </SC.Grid>
  );
};

CatalogList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      oldPrice: PropTypes.number.isRequired,
      currentPrice: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          oldPrice: PropTypes.number,
          currentPrice: PropTypes.number,
          total: PropTypes.number,
        }),
      ),
      totalQuantity: PropTypes.number,
      typeOfPlants: PropTypes.string,
      light: PropTypes.string,
      petFriendly: PropTypes.string,
      maintenance: PropTypes.string,
      potSize: PropTypes.string,
      waterSchedule: PropTypes.string,
      images: PropTypes.array,
    }),
  ),
};
