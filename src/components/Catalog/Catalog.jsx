import React, { useState } from 'react'; //, useEffect
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCard } from 'redux/card/operation';
import PropTypes from 'prop-types';
import * as SC from './Catalog.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

import { ReactComponent as Open } from 'images/svg/open.svg';

const { BASE_URL_IMG } = window.global;

export const Catalog = ({ products }) => {
  const [showSort, setShowSort] = useState(false);
  const toggleSort = () => setShowSort(state => !state);

  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(state => !state);

  const dispatch = useDispatch();

  const saveCardData = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addCard({
        id: e.currentTarget.dataset.id,
      }),
    );
  };

  return (
    <SC.CatalogContainer>
      <SC.CatalogSection>
        <SC.Heading>
          <Headline>Indoor Plants</Headline>
          <SC.SortBox>
            <SC.Sort>
              <span>SORT BY</span>
              <SC.IconBtn
                type="button"
                aria-label="switch to open sort list"
                aria-expanded="false"
                onClick={toggleSort}
              >
                <Open />
              </SC.IconBtn>
            </SC.Sort>
            {showSort && (
              <SC.SortList>
                <SC.SortItem>Most Popular</SC.SortItem>
                <SC.SortItem>Name</SC.SortItem>
                <SC.SortItem>Lowest Price</SC.SortItem>
                <SC.SortItem>Highest Price</SC.SortItem>
                <SC.SortItem>% Off</SC.SortItem>
              </SC.SortList>
            )}
          </SC.SortBox>
          <SC.FiltersBox>
            <SC.Sort>
              <span>FILTER BY</span>
              <SC.IconBtn
                type="button"
                aria-label="switch to open filter list"
                aria-expanded="false"
                onClick={toggleFilter}
              >
                <Open />
              </SC.IconBtn>
            </SC.Sort>
            {showFilter && (
              <SC.FiltersWrapper>
                <SC.Filters>
                  <SC.Filter>
                    <span>TYPE OF PLANTS</span>
                    <SC.IconBtn
                      type="button"
                      aria-label="switch to open filter"
                      aria-expanded="false"
                      onClick={toggleFilter}
                    >
                      <Open />
                    </SC.IconBtn>
                  </SC.Filter>
                  <SC.Filter>
                    <span>LIGHT</span>
                    <SC.IconBtn
                      type="button"
                      aria-label="switch to open filter"
                      aria-expanded="false"
                      onClick={toggleFilter}
                    >
                      <Open />
                    </SC.IconBtn>
                  </SC.Filter>
                  <SC.Filter>
                    <span>PET FRIENDLY</span>
                    <SC.IconBtn
                      type="button"
                      aria-label="switch to open filter"
                      aria-expanded="false"
                      onClick={toggleFilter}
                    >
                      <Open />
                    </SC.IconBtn>
                  </SC.Filter>
                  <SC.Filter>
                    <span>PRICE</span>
                    <SC.IconBtn
                      type="button"
                      aria-label="switch to open filter"
                      aria-expanded="false"
                      onClick={toggleFilter}
                    >
                      <Open />
                    </SC.IconBtn>
                  </SC.Filter>
                  <SC.Filter>
                    <span>MAINTENANCE</span>
                    <SC.IconBtn
                      type="button"
                      aria-label="switch to open filter"
                      aria-expanded="false"
                      onClick={toggleFilter}
                    >
                      <Open />
                    </SC.IconBtn>
                  </SC.Filter>
                  <SC.Filter>
                    <span>POT SIZE</span>
                    <SC.IconBtn
                      type="button"
                      aria-label="switch to open filter"
                      aria-expanded="false"
                      onClick={toggleFilter}
                    >
                      <Open />
                    </SC.IconBtn>
                  </SC.Filter>
                  <SC.Filter>
                    <span>WATER SCHEDULE</span>
                    <SC.IconBtn
                      type="button"
                      aria-label="switch to open filter"
                      aria-expanded="false"
                      onClick={toggleFilter}
                    >
                      <Open />
                    </SC.IconBtn>
                  </SC.Filter>
                </SC.Filters>
                <SC.FilterBtn type="button">CLEAR ALL</SC.FilterBtn>
                <SC.InfoBtnBox>
                  <SC.InfoBtn type="button">SIZE GUIDE</SC.InfoBtn>
                  <SC.InfoBtn type="button">ABOUT OUR SHIPPING</SC.InfoBtn>
                </SC.InfoBtnBox>
              </SC.FiltersWrapper>
            )}
          </SC.FiltersBox>
        </SC.Heading>
        <SC.GridContainer>
          <SC.FiltersContainer>
            <SC.Filters>
              <SC.Filter>
                <span>TYPE OF PLANTS</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open filter"
                  aria-expanded="false"
                  onClick={toggleFilter}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Filter>
              <SC.Filter>
                <span>LIGHT</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open filter"
                  aria-expanded="false"
                  onClick={toggleFilter}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Filter>
              <SC.Filter>
                <span>PET FRIENDLY</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open filter"
                  aria-expanded="false"
                  onClick={toggleFilter}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Filter>
              <SC.Filter>
                <span>PRICE</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open filter"
                  aria-expanded="false"
                  onClick={toggleFilter}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Filter>
              <SC.Filter>
                <span>MAINTENANCE</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open filter"
                  aria-expanded="false"
                  onClick={toggleFilter}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Filter>
              <SC.Filter>
                <span>POT SIZE</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open filter"
                  aria-expanded="false"
                  onClick={toggleFilter}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Filter>
              <SC.Filter>
                <span>WATER SCHEDULE</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open filter"
                  aria-expanded="false"
                  onClick={toggleFilter}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Filter>
            </SC.Filters>
            <SC.FilterBtn type="button">CLEAR ALL</SC.FilterBtn>
            <SC.InfoBtnBox>
              <SC.InfoBtn type="button">SIZE GUIDE</SC.InfoBtn>
              <SC.InfoBtn type="button">ABOUT OUR SHIPPING</SC.InfoBtn>
            </SC.InfoBtnBox>
          </SC.FiltersContainer>
          <SC.Grid>
            {products.map(card => {
              return (
                <SC.Card
                  key={card._id}
                  onClick={e => saveCardData(e)}
                  data-id={card._id}
                >
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
                            {/* {Math.round(Number(card.currentPrice))} */}
                            {card.currentPrice}
                            {card.currency}
                          </SC.CardDiscount>
                        )}
                        {card.oldPrice && (
                          <SC.CardPrice>
                            {/* {Math.round(Number(card.oldPrice))} */}
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
        </SC.GridContainer>
      </SC.CatalogSection>
    </SC.CatalogContainer>
  );
};

Catalog.propTypes = {
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
