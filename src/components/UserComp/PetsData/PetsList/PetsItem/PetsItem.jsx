import React from 'react';
import {
  DeleteIcon,
  PetsItemDeleteBtn,
  PetsItemDesc,
  PetsItemImg,
  PetsItemInfoBlock,
  PetsItemSpan,
  PetsItemWrapper,
} from './PetsItem.styled';
import PropTypes from 'prop-types';

export const PetsItem = ({ pet, profile, removePetList }) => {
  const { name, _id, date, breed, imageUrl, comments } = pet;

  return (
    <PetsItemWrapper>
      <PetsItemImg src={imageUrl} alt={name} />
      <PetsItemInfoBlock>
        {!profile && (
          <PetsItemDeleteBtn
            type="submit"
            onClick={() => {
              removePetList(_id);
            }}
          >
            <DeleteIcon />
          </PetsItemDeleteBtn>
        )}
        <PetsItemDesc>
          <PetsItemSpan>Name:</PetsItemSpan>
          {name}
        </PetsItemDesc>
        <PetsItemDesc>
          <PetsItemSpan>Date of birth:</PetsItemSpan>
          {new Date(date).toLocaleDateString()}
        </PetsItemDesc>
        <PetsItemDesc>
          <PetsItemSpan>Breed:</PetsItemSpan>
          {breed}
        </PetsItemDesc>
        <PetsItemDesc>
          <PetsItemSpan>Comments:</PetsItemSpan>
          {comments}
        </PetsItemDesc>
      </PetsItemInfoBlock>
    </PetsItemWrapper>
  );
};

PetsItem.propTypes = {
  pet: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  removePetList: PropTypes.function,
};
